---
name: performance-and-load-engineering
description: Performance engineering and volumetric load testing with k6 and Apache JMeter, Core Web Vitals optimization, client-side render profiling, and bottleneck diagnosis.
---

# Performance and Load Engineering

## Overview

As a 20+ year veteran SQA Engineer & Test Architect, you understand that **a slow system is an unavailable system**. Performance is not an afterthought checked before launch — it is an architectural contract governed by Service Level Objectives (SLOs) and strict latency budgets.

Performance engineering spans two intertwined domains: **server-side throughput & resilience under volumetric load** (k6, JMeter) and **client-side rendering efficiency & Core Web Vitals** (Lighthouse, DevTools, Web Vitals API).

---

## 1. The 5 Core Types of Volumetric Load Testing

```text
Concurrent Users (VUs)
▲
│                 ┌───────────────┐ (Stress Peak)
│                 │               │
│        ┌────────┴───────────────┴────────┐ (Spike)
│        │                                 │
│   ┌────┴─────────────────────────────────┴────┐ (Average Load)
│   │                                           │
└───┴───────────────────────────────────────────┴──────► Time
   Smoke      Average Load        Stress       Soak (Extended)
```

1. **Smoke Test**: Minimal load (1–2 Virtual Users) executed against a test environment to verify that the test script and endpoints function without baseline errors.
2. **Average Load Test**: Assesses system performance under normal, expected daily peak production traffic (e.g. 500 concurrent users for 30 minutes). Verifies latency SLOs.
3. **Stress Test**: Gradually steps load beyond normal capacity until the system breaks or degrades. Determines maximum breaking point, failure modes, and whether recovery is graceful.
4. **Spike Test**: Injects an instantaneous 5x–10x traffic surge (e.g. flash sales, viral marketing campaigns) within 10 seconds. Evaluates auto-scaling elasticity, queuing, and rate-limiting.
5. **Soak / Endurance Test**: Sustains moderate-to-high load over extended periods (4 to 24 hours). Detects slow memory leaks, database connection pool exhaustion, file handle leaks, and disk space saturation.

---

## 2. Production-Grade k6 Load Test Script (TypeScript/ES6)

Here is a resilient k6 test script with multi-stage ramps, user scenarios, and strict threshold gates:

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('api_errors');
const searchLatency = new Trend('search_latency');

export const options = {
  stages: [
    { duration: '1m', target: 50 },   // Warm-up ramp to 50 VUs
    { duration: '3m', target: 200 },  // Ramp to 200 peak VUs
    { duration: '5m', target: 200 },  // Sustain peak load
    { duration: '1m', target: 0 },    // Graceful ramp-down
  ],
  thresholds: {
    // 95% of requests must complete under 300ms, 99% under 800ms
    http_req_duration: ['p(95)<300', 'p(99)<800'],
    // Error rate must remain strictly below 1%
    api_errors: ['rate<0.01'],
    // 95% of search transactions under 400ms
    search_latency: ['p(95)<400'],
  },
};

const BASE_URL = __ENV.TARGET_URL || 'http://localhost:3000';

export default function () {
  // Scenario 1: Load Homepage
  const homeRes = http.get(`${BASE_URL}/`);
  const homeSuccess = check(homeRes, {
    'home status is 200': (r) => r.status === 200,
    'home page loaded under 250ms': (r) => r.timings.duration < 250,
  });
  errorRate.add(!homeSuccess);

  // Realistic human think time with Gaussian jitter (1s - 3s)
  sleep(Math.random() * 2 + 1);

  // Scenario 2: API Search Query
  const start = Date.now();
  const searchRes = http.get(`${BASE_URL}/api/projects?q=playwright`);
  const searchSuccess = check(searchRes, {
    'search status is 200': (r) => r.status === 200,
    'search returns array': (r) => JSON.parse(r.body).data !== undefined,
  });
  
  errorRate.add(!searchSuccess);
  searchLatency.add(Date.now() - start);

  sleep(Math.random() * 1.5 + 0.5);
}
```

Run CLI:
```bash
k6 run --env TARGET_URL=https://staging.example.com script.js
```

---

## 3. Apache JMeter Test Plan Architecture

For enterprise volumetric and distributed protocol testing, structure JMeter test plans cleanly:

### JMeter Test Plan Components:
1. **Thread Group**:
   - Number of Threads (Users): Configured via property `${__P(threads, 100)}`
   - Ramp-Up Period (seconds): `${__P(rampup, 60)}`
   - Loop Count / Duration: Configured via property `${__P(duration, 300)}`
2. **HTTP Request Defaults**: Base protocol (`https`), Server Name (`staging.example.com`), Port (`443`).
3. **HTTP Header Manager**: Pre-configures `Content-Type: application/json`, `User-Agent`, and authorization tokens.
4. **CSV Data Set Config**: Feeds dynamic, realistic user credentials and search queries from CSV files to avoid cache skewing.
5. **Gaussian Random Timer**: Generates naturalistic user pauses (e.g. Deviation: `500ms`, Constant Delay Offset: `1500ms`).
6. **Response Assertion**: Asserts `200 OK` and JSON response patterns.

### Headless CLI Execution & HTML Dashboard Generation:
Never run JMeter tests via the GUI during load runs (GUI consumes massive local CPU/RAM). Always execute headlessly:
```bash
jmeter -n -t test_plan.jmx -l results.jtl -e -o ./reports/dashboard_report
```

---

## 4. Client-Side Performance & Core Web Vitals Engineering

Fast servers are useless if the client frontend freezes the browser's main thread. Hold client applications to strict Web Vitals budgets:

| Core Web Vital | Metric | Target Threshold | Common Causes of Failure | SQA Architectural Remediation |
|----------------|--------|------------------|--------------------------|-------------------------------|
| **Largest Contentful Paint (LCP)** | Loading | $\le 2.5\text{s}$ | Unoptimized hero images; slow web fonts; render-blocking scripts. | Preload hero image (`fetchpriority="high"`); use modern WebP/AVIF; inline critical CSS. |
| **Cumulative Layout Shift (CLS)** | Visual Stability | $\le 0.1$ | Images/videos without explicit width & height; dynamic banners injected above content. | Always set explicit `width` and `height` or `aspect-ratio`; reserve placeholder skeleton slots. |
| **Interaction to Next Paint (INP)** | Responsiveness | $\le 200\text{ms}$ | Heavy JavaScript executing on the main thread; un-debounced scroll/input listeners; massive DOM depth. | Yield to main thread (`scheduler.yield()`); debounce inputs; virtualize large lists. |
| **First Contentful Paint (FCP)** | Speed | $\le 1.8\text{s}$ | Massive initial bundle size; synchronous external scripts. | Route-based code splitting; dynamic imports (`next/dynamic`); defer non-critical scripts. |
| **Time to First Byte (TTFB)** | Network / Server | $\le 800\text{ms}$ | Slow server compute; un-cached database queries; missing CDN edge cache. | Implement stale-while-revalidate; CDN edge caching; optimize database indexing. |

---

## 5. Detecting Client-Side Memory Leaks

Memory leaks cause single-page applications (SPAs) to gradually slow down and crash mobile browser tabs:

### Key Memory Leak Patterns to Catch:
1. **Uncleaned `useEffect` Listeners**: Event listeners attached to `window` or `document` that are not removed in the cleanup return function.
2. **Uncleared Intervals / Timeouts**: `setInterval` continuing to run after component unmount.
3. **Detached DOM Nodes**: Keeping references to deleted DOM nodes inside global arrays or closures.
4. **Subscription Leaks**: RxJS / WebSocket subscriptions not unsubscribed upon route transition.

### Memory Leak Audit Procedure:
1. Open Chrome DevTools -> **Memory** tab.
2. Record **Heap Snapshot 1** (baseline).
3. Perform the user journey 10 times (e.g. open and close the modal dialog 10 times).
4. Trigger manual garbage collection (trash can icon in DevTools).
5. Record **Heap Snapshot 2**.
6. Compare Snapshot 2 against Snapshot 1: If detached DOM nodes or component instances multiply linearly by 10, a memory leak is confirmed.
