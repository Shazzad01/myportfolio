---
name: test-strategy-and-quality-governance
description: Enterprise test strategy design, 7-Dimension QA Audit orchestration, test pyramid balancing, risk-based testing matrices, CI/CD automated quality gates, and release sign-off governance.
---

# Test Strategy and Quality Governance

## Overview

As a 20+ year veteran SQA Engineer & Test Architect, you govern the entire lifecycle of software quality. A master test strategy is not a static PDF document that gathers dust; it is a **living architectural contract that balances risk, speed, coverage, and confidence**.

Quality governance establishes automated quality gates in CI/CD pipelines, risk-based testing matrices, and rigorous release sign-off criteria that ensure zero-defect production deployments.

---

## 1. The Pragmatic 20-Year Test Pyramid

A dogmatic adherence to theoretical test pyramids fails in modern distributed web architectures. Deploy the pragmatic pyramid calibrated for maximum ROI and zero test debt:

```text
               ▲
              / \
             /   \      Exploratory & Heuristic (Continuous Charters)
            /─────\
           /       \     E2E Critical Journeys (Playwright - Lean & Fast)
          /─────────\
         /           \    API Contract & Schema Validation (High ROI)
        /─────────────\
       /               \   Component & Hook Integration (React Testing Lib)
      /─────────────────\
     /                   \  Unit Tests (Pure Functions, Domain Calculations)
    └─────────────────────┘
```

| Layer | Target Volume | Execution Speed | Primary Purpose & Tooling |
|-------|---------------|-----------------|---------------------------|
| **Unit** | 60% | < 50ms | Verifies pure algorithms, date/currency formatting, domain entities, utility functions. Tools: Vitest, Jest. |
| **Component / Hook** | 20% | < 300ms | Verifies state management, custom React hooks, interactive component behaviors without a full browser. Tools: React Testing Library. |
| **API Contract** | 10% | < 500ms | Verifies REST/GraphQL schemas, status codes, boundary fuzzing, and idempotency. Tools: Playwright APIRequestContext, Zod. |
| **E2E Critical** | 7% | < 3s per test | Verifies critical revenue journeys (e.g. login, checkout, navigation, filtering). Tools: Playwright, Cypress. |
| **Exploratory** | 3% (Time-based) | Human speed | Discovers edge-case interaction glitches, responsive anomalies, cognitive friction. Tools: DevTools, SBTM. |

---

## 2. Risk-Based Testing Matrix

Never test everything equally. Allocate testing effort where **business probability of failure** intersects with **financial or brand impact**:

```text
    High Impact ▲  [Area B: High Test Focus]    │  [Area A: Maximum Test Focus]
                │  - Critical data calculation   │  - Payment / Checkout flow
                │  - Auth token security         │  - User registration / Login
                │  Strategy: Unit + Integration │  Strategy: E2E + API + Chaos
                ├────────────────────────────────┼──────────────────────────────
                │  [Area D: Minimal Test Focus]  │  [Area C: Moderate Test Focus]
                │  - Static About Us text        │  - Profile avatar upload
                │  - Footer copyright label      │  - Filter dropdown UI state
                │  Strategy: Smoke / Lint only   │  Strategy: Component Unit Test
                └────────────────────────────────┴─────────────────────────────►
                   Low Probability                  High Probability of Defect
```

---

## 3. The 7-Dimension QA Audit Orchestration Engine

Deploy the 7-Dimension QA Audit before every major milestone or production release:

```text
                           7-DIMENSION QA AUDIT
 ┌───────────────────────────────────┬───────────────────────────────────┐
 │ 1. Content & Copy                 │ 5. E2E User Journeys              │
 │ 2. Visual & Layout                │ 6. Edge Cases & Chaos             │
 │ 3. Interaction & Feedback         │ 7. Accessibility (WCAG AA/AAA)    │
 │ 4. Cross-Surface Consistency      │                                   │
 └───────────────────────────────────┴───────────────────────────────────┘
```

### Audit Scoring Rubric:
- **Pass (100%)**: Dimension fully satisfied with zero defects.
- **Minor Warning (80%)**: Cosmetic polish issue; does not impact user workflow or accessibility.
- **Fail (< 80%)**: Functional defect, layout break, or WCAG non-compliance. **Blocks production release**.

---

## 4. CI/CD Automated Quality Gates & Fitness Functions

Codify quality standards into GitHub Actions / GitLab CI workflows so that defective code cannot be merged:

```yaml
name: CI Quality Gate & Release Readiness

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  quality-gate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Gate 1: Static Code Analysis & Linting
        run: npm run lint

      - name: Gate 2: Strict TypeScript Typechecking
        run: npx tsc --noEmit

      - name: Gate 3: Unit & Component Tests with Coverage
        run: npm run test:coverage -- --coverageThreshold='{"global":{"branches":85,"functions":85,"lines":85}}'

      - name: Gate 4: Playwright E2E & Accessibility Tests
        run: npx playwright test --project=chromium

      - name: Gate 5: Core Web Vitals & Lighthouse Audit
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            http://localhost:3000/
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

---

## 5. Release Governance & Defect Triage

### Severity vs Priority Taxonomy:

| Level | Severity (Technical Impact) | Priority (Business Urgency) | Release Action |
|-------|-----------------------------|----------------------------|----------------|
| **P0 / Blocker** | System crash, data corruption, security vulnerability, zero checkout. | Immediate hotfix; drops everything. | **HARD BLOCK**. Release aborted immediately. |
| **P1 / Critical** | Major feature broken; no workaround available for end user. | Resolve within 24 hours. | **BLOCK**. Cannot release without VP/Architect sign-off. |
| **P2 / Major** | Feature partially impaired, but reasonable workaround exists. | Scheduled for next sprint cycle. | Release permitted if risk is documented and accepted. |
| **P3 / Minor** | Minor cosmetic glitch, typo, small alignment inconsistency. | Backlog / polish milestone. | Release permitted. |

### Release Sign-Off Checklist:
Before signing off on any production deployment:
1. [ ] Zero open P0 or P1 defects in issue tracker.
2. [ ] 100% automated test suite passing in CI/CD (zero flaky ignores).
3. [ ] All 7 dimensions of the QA Audit verified and green.
4. [ ] Zero high/critical npm dependency security vulnerabilities (`npm audit`).
5. [ ] Core Web Vitals meet performance budgets (LCP $\le 2.5\text{s}$, CLS $\le 0.1$, INP $\le 200\text{ms}$).
6. [ ] Rollback plan documented and tested in staging.
