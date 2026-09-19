---
name: cloud-scalability-and-resilience
description: Enterprise cloud topology, edge architecture, multi-tier caching, and distributed resilience patterns. Use when designing high-availability systems, CDN caching hierarchies, circuit breakers, idempotency, retry backoff with jitter, or bulkhead concurrency limiters.
---

# Cloud Scalability and Resilience

## Overview

Architect scalable, resilient cloud and edge systems that gracefully survive network partitions, downstream failures, traffic spikes, and regional outages. Based on 20+ years of distributed systems engineering, this skill provides concrete topologies and production-ready TypeScript resilience primitives.

---

## 1. High-Availability Edge & Cloud Topologies

In modern distributed web architecture, computing is distributed between the client browser, edge network nodes, and regional origin clusters:

```
[ Client Browser ]
        │  (HTTP/3, QUIC, TLS 1.3)
        ▼
[ Global Edge CDN / Anycast Routing ] (Cloudflare / Vercel Edge)
   ├── Edge Cache (Micro-caching, Stale-While-Revalidate)
   └── Edge Middleware (Auth check, Geo-routing, Rate limiting)
        │  (Regional Backbone)
        ▼
[ Origin Application Cluster ] (Node.js / Containerized App)
   ├── In-Memory Cache (Redis / Distributed KV)
   └── Connection Pooler (PgBouncer / Serverless DB Proxy)
        │
        ▼
[ Primary Database + Read Replicas ]
```

### Key Architectural Guidelines

1. **Push Read Workloads to the Edge**: Maximize edge caching for read-heavy operations using HTTP `Cache-Control` directives.
2. **Keep Mutating Paths Direct & Region-Local**: Route writes directly to the primary origin region to minimize cross-continental database latency.
3. **Connection Pooling at the Edge**: In serverless/edge environments, always connect to databases via a transaction pooler (e.g., PgBouncer, Neon Serverless, Prisma Accelerate) to prevent exhausting database connection limits during traffic spikes.

---

## 2. Multi-Tier Caching Architecture

Caching is not a single layer; it is a coordinated hierarchy:

| Tier | Location | Strategy | Typical TTL | Invalidation Mechanism |
|---|---|---|---|---|
| **Tier 1** | Browser | Private cache | Static assets: 1 year (`immutable`) | Content hashing in filename (`app.abc123.js`) |
| **Tier 2** | Edge CDN | Shared cache | `public, s-maxage=3600, stale-while-revalidate=86400` | Tag-based cache purge (`revalidateTag`) |
| **Tier 3** | In-Memory / KV | Key-value store | 5–60 minutes | Explicit key deletion on mutation |
| **Tier 4** | Database | Materialized views | Computed on schedule | Background cron refresh |

### Stale-While-Revalidate (SWR) Pattern

Edge caching should almost always use `stale-while-revalidate`. This ensures the user receives an instant cached response while the edge CDN asynchronously re-fetches fresh data from origin:

```typescript
// Next.js Route Handler or Express Header Definition
export async function GET(request: Request) {
  const data = await getFeaturedProjects();

  return Response.json(data, {
    headers: {
      'Content-Type': 'application/json',
      // Edge caches for 1 hour; serves stale up to 24 hours while updating in background
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

---

## 3. Production Distributed Resilience Primitives in TypeScript

### 3.1 Circuit Breaker Pattern

Prevents cascading failures when a downstream dependency (third-party API, external service) degrades or fails.

```typescript
export enum CircuitState {
  CLOSED = 'CLOSED',       // Normal operation, requests flow through
  OPEN = 'OPEN',           // Tripped, fast-failing immediately without calling downstream
  HALF_OPEN = 'HALF_OPEN', // Probing downstream with limited test traffic
}

export interface CircuitBreakerOptions {
  failureThreshold: number; // Number of consecutive failures before tripping (e.g., 5)
  resetTimeoutMs: number;   // Time to wait before testing downstream (e.g., 30000ms)
}

export class CircuitBreaker {
  private state: CircuitState = CircuitState.CLOSED;
  private failureCount: number = 0;
  private nextAttempt: number = Date.now();

  constructor(
    private readonly name: string,
    private readonly options: CircuitBreakerOptions = { failureThreshold: 5, resetTimeoutMs: 30000 }
  ) {}

  public async execute<T>(action: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
    if (this.state === CircuitState.OPEN) {
      if (Date.now() > this.nextAttempt) {
        this.state = CircuitState.HALF_OPEN;
      } else {
        // Fast-fail with fallback
        return fallback();
      }
    }

    try {
      const result = await action();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      return fallback();
    }
  }

  private onSuccess(): void {
    this.failureCount = 0;
    this.state = CircuitState.CLOSED;
  }

  private onFailure(): void {
    this.failureCount++;
    if (this.failureCount >= this.options.failureThreshold || this.state === CircuitState.HALF_OPEN) {
      this.state = CircuitState.OPEN;
      this.nextAttempt = Date.now() + this.options.resetTimeoutMs;
    }
  }

  public getState(): CircuitState {
    return this.state;
  }
}
```

### 3.2 Exponential Backoff with Full Random Jitter

Avoids synchronized retry storms (thundering herd problem) when a service recovers.

```typescript
export interface RetryOptions {
  maxRetries: number;
  baseDelayMs: number;
  maxDelayMs: number;
}

export async function withExponentialBackoffAndJitter<T>(
  fn: () => Promise<T>,
  options: RetryOptions = { maxRetries: 3, baseDelayMs: 200, maxDelayMs: 3000 }
): Promise<T> {
  let attempt = 0;

  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      if (attempt > options.maxRetries) {
        throw error;
      }

      // Full Jitter Formula: sleep = rand(0, min(maxDelay, base * 2^attempt))
      const calculatedMax = Math.min(options.maxDelayMs, options.baseDelayMs * Math.pow(2, attempt));
      const jitteredDelay = Math.floor(Math.random() * calculatedMax);

      await new Promise((resolve) => setTimeout(resolve, jitteredDelay));
    }
  }
}
```

### 3.3 Bulkhead Concurrency Limiter

Isolates critical operations so a single slow endpoint cannot exhaust all available concurrency slots.

```typescript
export class BulkheadLimiter {
  private activeCount = 0;
  private queue: Array<() => void> = [];

  constructor(
    private readonly maxConcurrent: number,
    private readonly maxQueueLength: number
  ) {}

  public async run<T>(task: () => Promise<T>): Promise<T> {
    if (this.activeCount >= this.maxConcurrent) {
      if (this.queue.length >= this.maxQueueLength) {
        throw new Error('Bulkhead capacity exceeded: Request rejected');
      }
      await new Promise<void>((resolve) => this.queue.push(resolve));
    }

    this.activeCount++;
    try {
      return await task();
    } finally {
      this.activeCount--;
      if (this.queue.length > 0) {
        const next = this.queue.shift();
        if (next) next();
      }
    }
  }
}
```

---

## 4. Cold-Start and Edge Compute Optimization

1. **Tree-Shaking and Bundle Minimization**:
   - Never import giant monorepos or barrel files in Edge functions.
   - Keep edge bundle size strictly under 1MB.
2. **Warm-Up Probes**:
   - For latency-critical serverless functions, implement lightweight synthetic ping probes to maintain warm execution containers.
3. **Zero Dynamic Native Binaries**:
   - In edge environments, rely solely on pure JavaScript/WebAssembly implementations without native C++ Node bindings.

---

## 5. Resilience & Scalability Verification Checklist

- [ ] All external network calls enforce a strict timeout budget (e.g. 3000ms).
- [ ] Retries employ exponential backoff with full random jitter (no immediate synchronous retry loops).
- [ ] Downstream third-party services are wrapped in a Circuit Breaker with graceful degradation fallbacks.
- [ ] Mutating endpoints accept an `Idempotency-Key` to safely handle network retries.
- [ ] Cache headers specify `stale-while-revalidate` to avoid origin stampedes on cache expiration.
- [ ] Database connections in serverless environments use connection pooling.
