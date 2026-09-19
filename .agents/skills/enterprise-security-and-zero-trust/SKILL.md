---
name: enterprise-security-and-zero-trust
description: Enterprise security architecture, Zero Trust protocols, OWASP Top 10 Web and API mitigation, boundary data validation, and secrets hygiene. Use when designing authentication flows, API security, Content Security Policy (CSP), CORS, or data sanitization.
---

# Enterprise Security and Zero Trust Architecture

## Overview

Security is not an afterthought or an external layer; it is an intrinsic architectural dimension. Grounded in 20+ years of enterprise engineering, this skill enforces **Zero Trust Architecture** and comprehensive **OWASP Defense-in-Depth** across all code, APIs, and data flows.

---

## 1. Zero Trust Architectural Tenets

The traditional "castle-and-moat" perimeter security model is dead. Zero Trust operates under three core directives:

1. **Verify Explicitly**: Authenticate and authorize every request based on all available data points (identity, device health, IP, geo, resource context). Never trust a request simply because it originates inside the internal network.
2. **Use Least Privilege Access**: Limit access with Just-In-Time (JIT) and Just-Enough-Access (JEA) models. Never return full database records to clients when only three fields are displayed.
3. **Assume Breach**: Minimize blast radius by compartmentalizing services and data stores. Encrypt all data at rest and in transit. Continuously verify operational integrity.

---

## 2. OWASP Top 10 Web & API Defense Matrix

```
┌─────────────────────────────────────────────────────────────┐
│                 OWASP Defense-in-Depth                      │
├───────────────────────┬─────────────────────────────────────┤
│ Threat                │ Architectural Countermeasure        │
├───────────────────────┼─────────────────────────────────────┤
│ Broken Access Control │ Enforce ABAC/RBAC on domain entities│
│ Injection Attacks     │ Parameterized queries & typed ORMs  │
│ Cryptographic Failure │ TLS 1.3, Argon2id, AES-256-GCM      │
│ Insecure Design       │ STRIDE threat modeling & rate limits│
│ Security Misconfig    │ Strict CSP, HSTS, frame options     │
│ Auth Failures         │ OAuth2 + PKCE, secure HTTPOnly JWTs │
│ SSRF                  │ Private IP denylisting, strict URLs │
└───────────────────────┴─────────────────────────────────────┘
```

### 2.1 Preventing Broken Access Control (Horizontal & Vertical)

Never rely solely on client-side routing guards or opaque entity IDs:

```typescript
// INSECURE: Vulnerable to Insecure Direct Object Reference (IDOR)
export async function getInvoice(invoiceId: string) {
  return db.invoice.findUnique({ where: { id: invoiceId } });
}

// SECURE: Domain-enforced tenancy and authorization check
export async function getInvoiceSecure(invoiceId: string, currentUser: AuthenticatedUser) {
  const invoice = await db.invoice.findFirst({
    where: {
      id: invoiceId,
      organizationId: currentUser.organizationId, // Tenant isolation
    },
  });

  if (!invoice) {
    // Return 404 rather than 403 to prevent resource enumeration
    throw new NotFoundError('Invoice not found');
  }

  if (!currentUser.hasPermission('invoice:read')) {
    throw new ForbiddenError('Insufficient permissions');
  }

  return invoice;
}
```

### 2.2 Server-Side Request Forgery (SSRF) Defense

When fetching user-supplied URLs (e.g. webhooks, link unfurling), validate the destination protocol and IP range:

```typescript
import { lookup } from 'node:dns/promises';
import ipaddr from 'ipaddr.js';

export async function validateSafeUrl(urlString: string): Promise<URL> {
  const url = new URL(urlString);

  // 1. Only allow HTTP/HTTPS
  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new SecurityError(`Invalid protocol: ${url.protocol}`);
  }

  // 2. Resolve IP and block internal / loopback / private IP ranges
  const { address } = await lookup(url.hostname);
  const parsedIp = ipaddr.parse(address);

  if (parsedIp.range() !== 'unicast') {
    throw new SecurityError(`Target resolved to non-routable/private IP range: ${address}`);
  }

  return url;
}
```

---

## 3. Boundary Schema Validation with Zod

Treat all external input as hostile until proven valid. Validate at the edge:

```typescript
import { z } from 'zod';

export const ContactMessageSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(3000),
  // Sanitize and reject potential XSS payloads
  honeypot: z.string().max(0).optional(), // Bot trap
});

export type ContactMessageInput = z.infer<typeof ContactMessageSchema>;

export async function handleContactFormSubmission(rawData: unknown) {
  const parsed = ContactMessageSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      status: 422,
      error: 'VALIDATION_FAILED',
      issues: parsed.error.flatten().fieldErrors,
    };
  }

  // parsed.data is now guaranteed safe, typed, and sanitized
  return await processContactMessage(parsed.data);
}
```

---

## 4. Hardened HTTP Security Headers & Content Security Policy (CSP)

Enforce strict browser-level protections in `next.config.ts` or Next.js middleware:

```typescript
// next.config.ts security headers
const securityHeaders = [
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
  // Prevent clickjacking
  { key: 'X-Frame-Options', value: 'DENY' },
  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Strict Referrer Policy
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Enforce HTTPS
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Restrict browser features (camera, mic, geolocation)
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];
```

---

## 5. Secrets Hygiene and Boot-Time Validation

Never access `process.env` directly without validation. Use an environment schema that fails fast on application boot if a required secret is missing or misformatted:

```typescript
import { z } from 'zod';

const ServerEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().url(),
  ENCRYPTION_KEY: z.string().min(32, 'Encryption key must be at least 32 characters'),
  GITHUB_TOKEN: z.string().min(1).optional(),
});

export const env = ServerEnvSchema.parse(process.env);
```

---

## 6. Enterprise Security Review Checklist

- [ ] All API endpoints enforce strict schema validation via Zod before processing.
- [ ] Direct object references (IDOR) are protected by tenant/organization boundary checks.
- [ ] No database query uses raw string concatenation (100% parameterized/ORM).
- [ ] All client-rendered user content is escaped or sanitized to prevent XSS.
- [ ] CSP, HSTS, X-Frame-Options, and Permissions-Policy headers are enforced.
- [ ] Authentication tokens use short expiration and secure HTTPOnly, SameSite cookies.
- [ ] External fetch URLs are protected against SSRF by disallowing private IP ranges.
- [ ] Boot-time validation ensures no secrets are missing or exposed via `NEXT_PUBLIC_`.
