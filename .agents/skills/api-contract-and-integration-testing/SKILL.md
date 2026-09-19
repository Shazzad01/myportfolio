---
name: api-contract-and-integration-testing
description: Enterprise API contract testing, REST/GraphQL verification, runtime schema validation (Zod), boundary fuzzing matrices, HTTP status code semantics, and idempotent mutation testing.
---

# API Contract and Integration Testing

## Overview

As a 20+ year veteran SQA Engineer & Test Architect, you treat APIs as **binding enterprise contracts**. A single undocumented field mutation, type coercion bug, or missing validation check at an API boundary can cause silent data corruption or cascading frontend failures.

API testing must verify **structural contract fidelity, edge-case boundary resilience, HTTP semantic correctness, security defense, and idempotent mutation safety**.

---

## 1. The Boundary Value Fuzzing Matrix

Never test an API with only `"valid"` inputs. Every input parameter must be stress-tested against the complete boundary matrix:

| Data Type | Boundary Test Cases | What It Catches |
|-----------|--------------------|-----------------|
| **Numbers / Integers** | `0`, `-1`, `1`, `Number.MAX_SAFE_INTEGER`, `Number.MIN_SAFE_INTEGER`, `0.0000001`, `NaN`, `"42"` (string coercion), `null`, `undefined` | Integer overflow, negative quantity exploits, floating point rounding errors. |
| **Strings** | `""` (empty), `"   "` (whitespace only), `a.repeat(10000)` (overflow), `null`, `undefined`, `<script>alert(1)</script>` (XSS), `' OR '1'='1` (SQLi), `\u0000` (null byte), `🔥🚀🎉` (4-byte UTF-8 emojis) | Buffer overrun, unhandled null pointers, injection attacks, database encoding crashes. |
| **Booleans** | `true`, `false`, `0`, `1`, `"true"`, `"false"`, `null`, `undefined` | Falsy evaluation bugs (where `0` or `false` is treated as missing). |
| **Arrays / Lists** | `[]` (empty), single item `[item]`, massive list `10,000 items`, `[null]`, `[undefined]`, duplicate IDs | Memory exhaustion, pagination bypass, missing empty array checks. |
| **Objects / Payloads** | Missing required properties, extra unmapped fields (`{ isAdmin: true }`), deeply nested objects (`{ a: { b: { c: ... } } }`) | Mass-assignment vulnerabilities, prototype pollution, JSON parse stack overflow. |

---

## 2. HTTP Status Code Semantic Rigor

Enforce exact, unambiguous HTTP semantics across all endpoints:

```text
2xx Success ─────── 200 OK (GET/PUT with body)
            ─────── 201 Created (POST with new entity URI)
            ─────── 204 No Content (DELETE/PUT without body)

4xx Client  ─────── 400 Bad Request (Malformed JSON syntax)
    Errors  ─────── 401 Unauthorized (Missing / expired auth token)
            ─────── 403 Forbidden (Authenticated, but insufficient role permissions)
            ─────── 404 Not Found (Entity ID does not exist)
            ─────── 409 Conflict (Concurrent update / version mismatch)
            ─────── 422 Unprocessable Entity (Schema validation failure)
            ─────── 429 Too Many Requests (Rate limit exceeded)

5xx Server  ─────── 500 Internal Server Error (Unexpected server-side crash)
    Errors  ─────── 503 Service Unavailable (Database down, circuit open)
            ─────── 504 Gateway Timeout (Downstream timeout exceeded)
```

### Critical SQA Rules:
- Never return `200 OK` with an error message in the response body (`{ success: false, error: "..." }`). This breaks standard HTTP caching and proxy error handling.
- Never leak stack traces, SQL queries, or internal file paths in `4xx` or `5xx` error payloads.

---

## 3. Idempotency & Concurrency Testing

Mutating operations (`POST`, `PUT`, `DELETE`) exposed to network retries or payment processing must be protected by **Idempotency Keys**:

### Idempotency Verification Test Flow:
1. **First Request**: Client sends `POST /api/orders` with header `Idempotency-Key: uuid-1234-abcd` and payload `{ amount: 100 }`.
   - Expected: `201 Created`, Order `#101` generated.
2. **Immediate Duplicate (Network Retry)**: Client resends identical `POST /api/orders` with same `Idempotency-Key: uuid-1234-abcd`.
   - Expected: `200 OK` or `201 Created` with identical Order `#101` response payload. **Zero duplicate orders created in the database**.
3. **Payload Mismatch Conflict**: Client sends `POST /api/orders` with same `Idempotency-Key: uuid-1234-abcd` but altered payload `{ amount: 200 }`.
   - Expected: `409 Conflict` or `422 Unprocessable Entity` ("Idempotency key payload mismatch").

---

## 4. Automated API Contract Test Suite (TypeScript + Zod)

Below is an enterprise API contract test suite using Playwright's native `APIRequestContext` and `Zod` runtime validation:

```typescript
import { test, expect } from '@playwright/test';
import { z } from 'zod';

// Define strict contract schema for an entity
const ProjectSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(100),
  description: z.string().min(10).max(1000),
  techStack: z.array(z.string()).min(1),
  metrics: z.object({
    stars: z.number().int().nonnegative(),
    coverage: z.number().min(0).max(100),
  }),
  createdAt: z.string().datetime(),
});

const ProjectListResponseSchema = z.object({
  data: z.array(ProjectSchema),
  total: z.number().int().nonnegative(),
  page: z.number().int().positive(),
  pageSize: z.number().int().positive(),
});

const ErrorResponseSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.array(z.any()).optional(),
});

test.describe('API Contract & Boundary Verification Suite', () => {
  test('GET /api/projects - Contract Schema Validation', async ({ request }) => {
    const response = await request.get('/api/projects?page=1&pageSize=10');
    expect(response.status()).toBe(200);

    const json = await response.json();
    // Validate that response strictly adheres to contract schema
    const parsed = ProjectListResponseSchema.safeParse(json);
    expect(parsed.success, `Schema validation failed: ${JSON.stringify(parsed)}`).toBe(true);
  });

  test('POST /api/projects - Rejects Malformed Payloads with 422', async ({ request }) => {
    const invalidPayloads = [
      { title: '' }, // empty title
      { title: 'Valid Title', techStack: [] }, // empty tech stack
      { title: 'Valid Title', metrics: { coverage: 150 } }, // coverage > 100
      { title: 'Valid Title', unexpectedField: true }, // mass assignment probe
    ];

    for (const payload of invalidPayloads) {
      const response = await request.post('/api/projects', { data: payload });
      expect(response.status()).toBe(422);

      const json = await response.json();
      const parsedError = ErrorResponseSchema.safeParse(json);
      expect(parsedError.success).toBe(true);
    }
  });

  test('POST /api/orders - Enforces Idempotency under Retries', async ({ request }) => {
    const idempotencyKey = `test-key-${Date.now()}`;
    const payload = { planId: 'pro_annual', coupon: 'SAVE20' };

    // Request 1: Initial creation
    const res1 = await request.post('/api/orders', {
      headers: { 'Idempotency-Key': idempotencyKey },
      data: payload,
    });
    expect([200, 201]).toContain(res1.status());
    const body1 = await res1.json();

    // Request 2: Retry with identical key and payload
    const res2 = await request.post('/api/orders', {
      headers: { 'Idempotency-Key': idempotencyKey },
      data: payload,
    });
    expect([200, 201]).toContain(res2.status());
    const body2 = await res2.json();

    // Side effect must be strictly identical
    expect(body2.id).toBe(body1.id);
  });
});
```
