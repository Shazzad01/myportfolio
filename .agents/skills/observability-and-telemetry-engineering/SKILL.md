---
name: observability-and-telemetry-engineering
description: Production observability, OpenTelemetry distributed tracing, structured JSON logging with correlation IDs, Core Web Vitals RUM, SLIs/SLOs, and synthetic health probes. Use when designing monitoring architectures, error reporting, latency telemetry, or health endpoints.
---

# Observability and Telemetry Engineering

## Overview

You cannot manage or scale what you cannot measure. Built on 20+ years of enterprise Site Reliability Engineering (SRE) and distributed tracing principles, this skill establishes comprehensive observability across client, edge, and backend layers.

---

## 1. The Three Pillars of Enterprise Observability

```
                       ┌──────────────────────┐
                       │  Observability Hub   │
                       └──────────┬───────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         │                        │                        │
┌────────▼────────┐      ┌────────▼────────┐      ┌────────▼────────┐
│ Structured Logs │      │ Metrics & SLIs  │      │ Tracing (OTel)  │
│ - JSON format   │      │ - p50/p95/p99   │      │ - Causality map │
│ - Trace ID link │      │ - Error budget  │      │ - Span latencies│
│ - PII redacted  │      │ - CWV (LCP/INP) │      │ - Service DAG   │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

1. **Structured Logs**: Contextual, JSON-formatted event records carrying unified `traceId` and `spanId` for correlation.
2. **Metrics & SLIs**: Aggregatable time-series data measuring throughput, latency distributions, and error rates against Service Level Objectives (SLOs).
3. **Distributed Tracing**: End-to-end causal path tracking showing where time is spent as a single user interaction traverses edge CDN, serverless functions, database queries, and third-party APIs.

---

## 2. Structured JSON Logger with Correlation IDs

Plain text console logs (`console.log("here 1")`) are an anti-pattern in enterprise systems. Always use structured JSON logs with contextual correlation:

```typescript
export interface LogContext {
  traceId?: string;
  spanId?: string;
  userId?: string;
  path?: string;
  method?: string;
  durationMs?: number;
  [key: string]: unknown;
}

export class TelemetryLogger {
  private static sanitize(obj: Record<string, unknown>): Record<string, unknown> {
    const sensitiveKeys = ['password', 'token', 'authorization', 'secret', 'creditcard', 'apikey'];
    const cleaned: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj)) {
      if (sensitiveKeys.some((s) => key.toLowerCase().includes(s))) {
        cleaned[key] = '[REDACTED]';
      } else if (typeof value === 'object' && value !== null) {
        cleaned[key] = this.sanitize(value as Record<string, unknown>);
      } else {
        cleaned[key] = value;
      }
    }
    return cleaned;
  }

  public static info(message: string, context: LogContext = {}): void {
    this.emit('INFO', message, context);
  }

  public static warn(message: string, context: LogContext = {}): void {
    this.emit('WARN', message, context);
  }

  public static error(message: string, error?: Error, context: LogContext = {}): void {
    this.emit('ERROR', message, {
      ...context,
      errorName: error?.name,
      errorMessage: error?.message,
      stack: error?.stack,
    });
  }

  private static emit(level: string, message: string, context: LogContext): void {
    const payload = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...this.sanitize(context),
    };
    // Emit single-line structured JSON
    console.log(JSON.stringify(payload));
  }
}
```

---

## 3. Real User Monitoring (RUM) & Core Web Vitals Telemetry

Capture user experience metrics directly from the browser without blocking the main thread:

```typescript
// Client-side Core Web Vitals telemetry reporter
export function initWebVitalsReporting(endpoint: string = '/api/telemetry/vitals') {
  if (typeof window === 'undefined') return;

  const sendMetric = (metric: { name: string; value: number; id: string; rating: string }) => {
    const body = JSON.stringify({
      metric: metric.name,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      rating: metric.rating,
      pageUrl: window.location.pathname,
      metricId: metric.id,
      timestamp: Date.now(),
    });

    // Use sendBeacon to avoid cancelling request on page unload
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, body);
    } else {
      fetch(endpoint, { body, method: 'POST', keepalive: true });
    }
  };

  // Next.js useReportWebVitals can forward metrics to this dispatcher
  return sendMetric;
}
```

---

## 4. Service Level Objectives (SLOs) & Error Budgets

In enterprise architecture, reliability targets must be quantitative:

| Metric | Service Level Indicator (SLI) | Service Level Objective (SLO) | Error Budget (30 Days) |
|---|---|---|---|
| **Availability** | Successful HTTP requests (`2xx` or `3xx`) / Total requests | **99.9%** (Three Nines) | 43.2 minutes of downtime |
| **API Latency** | % of API responses completed in $< 250\text{ms}$ | **95.0%** of requests | 5% of requests may exceed 250ms |
| **LCP (Largest Contentful Paint)** | Time until main hero content is rendered | **90%** of visits $< 2.5\text{s}$ | 10% permitted slow loads |
| **CLS (Cumulative Layout Shift)** | Visual stability score | **95%** of visits $< 0.1$ | 5% visual shift allowance |

**Error Budget Exhaustion Policy**:
When an error budget burns faster than $2\times$ the target rate, feature releases are temporarily halted in favor of reliability and architectural debt repayment.

---

## 5. Synthetic Health & Readiness Probes

Expose distinct probes for orchestrators (Kubernetes, AWS ECS, Vercel) to differentiate between a service being alive vs ready to serve traffic:

```typescript
// app/api/health/ready/route.ts
export async function GET() {
  const checks: Record<string, 'HEALTHY' | 'UNHEALTHY'> = {};

  try {
    // 1. Check Primary Database connection with strict 1000ms timeout
    await Promise.race([
      db.$queryRaw`SELECT 1`,
      new Promise((_, reject) => setTimeout(() => reject(new Error('DB Timeout')), 1000)),
    ]);
    checks.database = 'HEALTHY';
  } catch {
    checks.database = 'UNHEALTHY';
  }

  try {
    // 2. Check Cache/KV layer
    await cache.ping();
    checks.cache = 'HEALTHY';
  } catch {
    checks.cache = 'UNHEALTHY';
  }

  const isReady = Object.values(checks).every((status) => status === 'HEALTHY');

  return Response.json(
    { status: isReady ? 'READY' : 'DEGRADED', checks, timestamp: new Date().toISOString() },
    { status: isReady ? 200 : 503 }
  );
}
```

---

## 6. Observability Verification Checklist

- [ ] Every log statement emits structured JSON with `timestamp`, `level`, `message`, and context.
- [ ] Correlation IDs (`traceId`) are passed from request boundaries through internal operations.
- [ ] Sensitive customer data (passwords, tokens, PII) is redacted before logs leave the application.
- [ ] Real user Core Web Vitals (LCP, CLS, INP) are tracked via non-blocking beacons.
- [ ] Readiness probes perform deep health checks with strict timeout budgets.
- [ ] Performance metrics track percentile distributions (p50, p95, p99) rather than misleading averages.
