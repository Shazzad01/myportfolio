# Senior/Principal SQA Engineer & Quality Architect (20+ Years Experience) Agent Suite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish an elite Senior/Principal SQA Engineer & Quality Architect (20+ Years Experience) agent identity, workspace governance rules, and modular skill suite, empowering the pair programmer to rigorously test code, UI/UX, APIs, performance, accessibility, and end-to-end user journeys with zero-tolerance for defects and flakiness.

**Architecture:** A comprehensive, multi-tiered agent architecture comprising workspace-level agent identity elevation (`AGENTS.md`, `.agents/AGENTS.md`), a progressive contextual trigger rule (`.agents/rules/senior-sqa-architect.md`), and six specialized modular skills in `.agents/skills/` covering UI/UX & accessibility testing, test automation framework architecture, API contract & integration testing, performance & load engineering, exploratory & heuristic testing, and test strategy & quality governance.

**Tech Stack:** Playwright, Cypress, Selenium, Appium, Jest/Vitest, React Testing Library, axe-core, k6, Apache JMeter, Zod, Lighthouse / Core Web Vitals, James Bach SFDIPOT heuristics, Antigravity Customization Engine (YAML frontmatter, progressive disclosure).

**Spec:** User directive: "you are scenaior SQA engineer who will do test your code ui ux everything your exprenced more than 20 year. create an agen with skills. /goal /writing-plans".

## Global Constraints

- Strictly adhere to verified career credentials in `master_career_profile.md` (Batch 16 SQA, DIU B.Sc. in CSE, 7-Dimension QA Audit, nopStation Agility & Excellence Award). NEVER hallucinate ISTQB.
- In PowerShell commands, ALWAYS use `;` instead of `&&` for statement chaining.
- When verifying TypeScript under active dev server, use `npx tsc --noEmit` to prevent Windows file lock conflicts (`EPERM`).
- Preserve the 70/30 Visual-First ratio and avoid AI-generated tells across all UI and documentation.
- Maintain zero-tolerance for test flakiness: zero arbitrary sleeps, deterministic locator strategies, auto-retrying web assertions, and hermetic state isolation.
- Every user-facing UI component must be evaluated against the 7-Dimension QA Audit (Content & Copy, Visual & Layout, Interaction & Feedback, Consistency, E2E Journeys, Edge Cases & Chaos, Accessibility).

---

### Task 1: Elevate Workspace Agent Identity in `AGENTS.md` and `.agents/AGENTS.md`

**Files:**
- Modify: `c:/Users/User/OneDrive/Documents/portfolio/AGENTS.md:60-66`
- Modify: `c:/Users/User/OneDrive/Documents/portfolio/.agents/AGENTS.md:12-18`

**Interfaces:**
- Consumes: Existing role definitions (PM, BA, QA, Developer, UI/UX Architect, Solution Architect, DevOps) and project behavioral rules.
- Produces: Elevated Senior/Principal SQA & Quality Architect (20+ Years Experience) persona, full-spectrum quality invariants, zero-flakiness directives, and 7-Dimension QA Audit release gates.

- [ ] **Step 1: Elevate QA role in `.agents/AGENTS.md`**

Update the QA entry in the role table of `.agents/AGENTS.md` to:
```markdown
| **Senior/Principal SQA & Quality Architect** | 20+ years elite software quality craft: test architecture across the entire pyramid, defect prevention, holistic UI/UX & cognitive ergonomics validation, WCAG 2.1/2.2 AA/AAA accessibility, enterprise test automation (Playwright/Cypress/Selenium/Appium), API contract/chaos testing, performance & Core Web Vitals engineering, and zero-defect release governance. |
```
And append a dedicated section **Senior/Principal SQA Engineer Directives & Quality Gates** to `.agents/AGENTS.md`.

- [ ] **Step 2: Add Senior SQA Engineer & Full-Spectrum Quality Invariant to root `AGENTS.md`**

Append to `AGENTS.md`:
```markdown
### Senior SQA Engineer & Full-Spectrum Quality Invariant
- **20+ Year Quality Craft**: Quality is an architectural property engineered into every layer. No code, UI component, or API boundary ships without rigorous verification across functional correctness, boundary edges, visual fidelity, interaction ergonomics, performance, and accessibility.
- **Flakiness Zero-Tolerance**: Automation must be deterministic. Zero arbitrary sleeps (`waitForTimeout`), race conditions, or unmanaged async state. Flaky tests are treated as P0 architectural defects.
- **7-Dimension QA Audit & Holistic UX**: Every user-facing surface must satisfy the 7-Dimension QA Audit (Content & Copy, Visual & Layout, Interaction & Feedback, Cross-Surface Consistency, E2E User Journeys, Edge Cases & Chaos, Accessibility & Assistive Tech).
- **Shift-Left Quality & Defect Prevention**: Identify ambiguities, edge-case gaps, and untestable designs before writing implementation code.
```

- [ ] **Step 3: Verify document formatting and markdown integrity**

Ensure tables, links, and headers render cleanly.

- [ ] **Step 4: Commit changes**

```powershell
git add AGENTS.md .agents/AGENTS.md; git commit -m "feat(agents): elevate workspace agent identity with Senior/Principal SQA Architect role"
```

---

### Task 2: Create Progressive Rule `.agents/rules/senior-sqa-architect.md`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/rules/senior-sqa-architect.md`

**Interfaces:**
- Consumes: Antigravity rules schema, contextual trigger mechanisms.
- Produces: Progressive rule activating whenever testing, reviewing code/UI, building components, designing automation suites, or verifying releases.

- [ ] **Step 1: Write `.agents/rules/senior-sqa-architect.md`**

Include YAML frontmatter:
```yaml
---
trigger: model_decision
description: Senior/Principal SQA Engineer & Quality Architect (20+ Years Experience) guidelines for full-spectrum quality engineering, zero-flakiness test automation, UI/UX visual & interaction audits, WCAG 2.1/2.2 accessibility verification, API contract testing, and performance profiling.
---
```
Body sections:
1. **20-Year Quality Craft Principles**: Shift-left defect prevention, testability as an architectural requirement, oracle problem solving, empirical evidence over assumptions.
2. **Full-Spectrum UI/UX & Visual Verification**: Layout fidelity across 320px–4K breakpoints, typography & 8-point spatial cadence checks, 10-state component matrix (idle, hover, active, focus-visible, disabled, loading skeleton, error, empty, dirty, text-overflow truncation), cognitive ergonomics.
3. **Zero-Flakiness Automation Standards**: Deterministic assertions (auto-retrying web assertions), web-first locators (role, label, text over brittle XPath/CSS classes), hermetic fixtures, route interception instead of production side-effects, zero `page.waitForTimeout()`.
4. **API Contract & Integration Rigor**: Boundary stress (min, max, max+1, unicode, null, type coercion), HTTP semantic status codes, idempotency verification, schema contracts.
5. **Performance & Accessibility Gate**: Core Web Vitals budgets (LCP < 2.5s, CLS < 0.1, INP < 200ms), axe-core zero violations, keyboard operability, visible focus rings, color contrast compliance.
6. **Defect Advocacy & Reporting Standard**: Reproducible steps, expected vs actual, environmental telemetry, console/network traces, impact assessment.

- [ ] **Step 2: Verify rule frontmatter and discovery syntax**

Confirm YAML validity and formatting.

- [ ] **Step 3: Commit**

```powershell
git add .agents/rules/senior-sqa-architect.md; git commit -m "feat(rules): add senior-sqa-architect progressive rule"
```

---

### Task 3: Build Skill: `ui-ux-and-accessibility-testing`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/ui-ux-and-accessibility-testing/SKILL.md`

**Interfaces:**
- Consumes: UI components, page layouts, design system tokens, accessibility standards.
- Produces: Comprehensive UI/UX visual audit procedures, responsive breakpoint stress matrices, accessibility compliance checklists (WCAG 2.1/2.2 AA/AAA), keyboard focus navigation audits, screen reader verification, and automated Playwright + axe-core testing scripts.

- [ ] **Step 1: Write `ui-ux-and-accessibility-testing/SKILL.md`**

Include:
- Frontmatter: name `ui-ux-and-accessibility-testing`, detailed description.
- 10-State UI Component Matrix: Idle, Hover, Active/Pressed, Focus-Visible, Disabled, Loading/Skeleton, Error/Invalid, Empty State, Dirty/Modified, Truncated/Overflow.
- Responsive Breakpoint Stress Testing Protocol: 320px (iPhone SE), 375px/390px (modern smartphones), 768px (iPad portrait), 1024px (iPad landscape), 1280px (laptop), 1440px/1920px (desktop), 2560px+ (ultrawide). Verifying horizontal overflow, touch target sizes ($44 \times 44\text{px}$ min), text wrapping, sticky nav behavior.
- Color Contrast & Typography Verification: Formulas for WCAG AA (4.5:1 text, 3:1 UI controls) and AAA (7:1 text), dark/light mode token validation.
- Complete Playwright + axe-core automated accessibility test harness example in TypeScript.
- Keyboard Navigation Audit: Tab order logical flow, focus traps in modals, focus restoration on close, escape key handling, visible focus ring styling (`ring-2 ring-amber-500`).
- Screen reader ARIA audit checklist: landmarks (`main`, `nav`, `header`, `footer`), `aria-expanded`, `aria-controls`, `aria-label` for icon-only buttons, `aria-live` for dynamic alerts.

- [ ] **Step 2: Verify frontmatter and markdown code blocks**

Validate TypeScript code blocks and markdown tables.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/ui-ux-and-accessibility-testing; git commit -m "feat(skills): add ui-ux-and-accessibility-testing skill"
```

---

### Task 4: Build Skill: `test-automation-framework-architecture`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/test-automation-framework-architecture/SKILL.md`

**Interfaces:**
- Consumes: Application features, user journeys, frontend/backend architecture.
- Produces: Enterprise-grade test automation architecture, Page Object Model (POM) and Screenplay design patterns, hermetic fixture lifecycle, network request mocking & interception, parallel execution strategies, and flakiness elimination rules.

- [ ] **Step 1: Write `test-automation-framework-architecture/SKILL.md`**

Include:
- Frontmatter: name `test-automation-framework-architecture`, description.
- Architectural Design Patterns: Page Object Model (POM) vs Screenplay Pattern vs Component Object Model (COM).
- Anatomy of an Enterprise POM in Playwright (TypeScript): Strongly typed locators, encapsulation of UI interactions, fluent assertion chaining.
- Flakiness Root Causes & Elimination Engine:
  - Banning arbitrary sleeps (`page.waitForTimeout()`).
  - Auto-retrying assertions (`expect(locator).toBeVisible()`).
  - Web-first locators (`getByRole`, `getByLabel`, `getByTestId` with fallback hierarchy).
  - Network idle vs domcontentloaded vs commit load state hazards.
  - Race condition avoidance in animations (waiting for Framer Motion state changes).
- Hermetic Test Fixtures & State Isolation: Custom Playwright test fixtures, test-specific storage state, dynamic user generation, clean teardown.
- Network Interception & Route Mocking: Fast, deterministic testing via `page.route()`, simulating API latency, 500 server crashes, empty payloads, and slow networks.
- Execution Optimization: Parallel sharding in CI/CD, smart test grouping, artifact capture (videos, traces, screenshots) on failure only.

- [ ] **Step 2: Verify frontmatter and markdown code blocks**

Validate TypeScript patterns and architecture diagrams.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/test-automation-framework-architecture; git commit -m "feat(skills): add test-automation-framework-architecture skill"
```

---

### Task 5: Build Skill: `api-contract-and-integration-testing`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/api-contract-and-integration-testing/SKILL.md`

**Interfaces:**
- Consumes: REST/GraphQL endpoints, OpenAPI specs, backend routes, Zod schemas.
- Produces: API contract validation suites, boundary input fuzzing matrices, status code semantic verification, idempotent mutation testing, and security probe test scripts.

- [ ] **Step 1: Write `api-contract-and-integration-testing/SKILL.md`**

Include:
- Frontmatter: name `api-contract-and-integration-testing`, description.
- Contract Testing Principles: Consumer-Driven Contracts (Pact), Schema validation against Zod / JSON Schema.
- Boundary Value Fuzzing Matrix:
  - Numbers: 0, negative, MAX_SAFE_INTEGER, non-integer floats, stringified numbers.
  - Strings: Empty string `""`, single whitespace `" "`, 10,000 char strings, unicode emojis, SQL injection probe (`' OR '1'='1`), XSS probe (`<script>alert(1)</script>`), control characters (`\u0000`).
  - Objects/Arrays: Null, undefined, empty array `[]`, array with 1,000 items, unexpected extra properties (mass assignment defense).
- HTTP Status Code Semantic Integrity:
  - 200 OK vs 201 Created vs 204 No Content.
  - 400 Bad Request vs 401 Unauthorized vs 403 Forbidden vs 404 Not Found vs 409 Conflict vs 422 Unprocessable Entity vs 429 Too Many Requests.
  - 500 Internal Server Error vs 503 Service Unavailable.
- Idempotent Mutation Testing: Testing `POST`/`PUT`/`DELETE` with `Idempotency-Key` duplicate transmission to verify zero duplicate side effects.
- Complete automated integration test suite in TypeScript using Playwright APIRequestContext or Vitest + Supertest/Fetch.

- [ ] **Step 2: Verify frontmatter and markdown code blocks**

Ensure executable TypeScript examples and verification matrices.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/api-contract-and-integration-testing; git commit -m "feat(skills): add api-contract-and-integration-testing skill"
```

---

### Task 6: Build Skill: `performance-and-load-engineering`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/performance-and-load-engineering/SKILL.md`

**Interfaces:**
- Consumes: Web applications, API services, load requirements, SLAs/SLOs.
- Produces: k6 / JMeter test scripts, Core Web Vitals audit protocols, client-side render performance profiling, stress/spike/soak test architectures, and performance bottleneck diagnosis.

- [ ] **Step 1: Write `performance-and-load-engineering/SKILL.md`**

Include:
- Frontmatter: name `performance-and-load-engineering`, description.
- 5 Types of Load Testing: Smoke test (1-2 VUs), Average Load test (normal capacity), Stress test (breaking point), Spike test (sudden surge), Soak/Endurance test (memory leaks over extended duration).
- Production-Ready k6 Load Testing Script: VUs ramp-up stages, threshold assertions (`http_req_duration: ['p(95)<300', 'p(99)<800']`, `http_req_failed: ['rate<0.01']`), custom metrics, simulated user flows.
- Apache JMeter Test Plan Architecture: Thread Groups, HTTP Request Defaults, CSV Data Set Config, Gaussian Random Timers (realistic think time), Response Assertions, Aggregate Report listeners.
- Client-Side Performance & Core Web Vitals Profiling:
  - Largest Contentful Paint (LCP) < 2.5s: Image optimization, font preloading, critical CSS.
  - Cumulative Layout Shift (CLS) < 0.1: Explicit dimensions on media, avoiding dynamic injection above the fold.
  - Interaction to Next Paint (INP) < 200ms: Yielding main thread, debouncing input handlers, minimizing DOM depth.
  - React/DOM profiling: Eliminating unnecessary re-renders, layout thrashing, memory leaks in useEffect listeners.

- [ ] **Step 2: Verify frontmatter and markdown code blocks**

Validate k6 JavaScript and JMeter XML/CLI configurations.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/performance-and-load-engineering; git commit -m "feat(skills): add performance-and-load-engineering skill"
```

---

### Task 7: Build Skill: `exploratory-and-heuristic-testing`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/exploratory-and-heuristic-testing/SKILL.md`

**Interfaces:**
- Consumes: System architecture, user behaviors, untested boundaries.
- Produces: Session-Based Test Charters, James Bach SFDIPOT heuristic coverage, Michael Bolton's FEW HICCUPS consistency oracles, chaos/stress attack vectors, and high-impact bug advocacy.

- [ ] **Step 1: Write `exploratory-and-heuristic-testing/SKILL.md`**

Include:
- Frontmatter: name `exploratory-and-heuristic-testing`, description.
- 20-Year Heuristic Testing Frameworks:
  - James Bach's SFDIPOT: Structure (code, files, hardware), Function (what it does), Data (input/output), Interfaces (UI, API, CLI), Platform (OS, browser, device), Operations (how users use it), Time (concurrency, delays, timezone).
  - Michael Bolton's FEW HICCUPS Oracles: Familiar (prior experience), Explainable (clear reasoning), World (domain knowledge), History (past versions), Image (brand reputation), Comparable (competitors), Claims (specs/copy), User Expectations, Product, Purpose, Standards.
- Session-Based Test Management (SBTM): Charter template, timebox (60–90 min), TBS breakdown (Test vs Bug vs Setup time), session report schema.
- High-Value Chaos & Stress Heuristics:
  - Rapid double/triple click on submission triggers.
  - Back/forward browser button navigation mid-multi-step flow.
  - Switching tabs during network transit.
  - Throttling connection to offline then restoring.
  - Pasting massive clipboard data into formatted inputs.
  - Mobile orientation flipping (portrait to landscape and back).
- Elite Defect Advocacy & Bug Reporting: Title with impact, exact preconditions, repro steps, observed vs expected, attachments/har logs, root-cause hypothesis, severity vs priority triage.

- [ ] **Step 2: Verify frontmatter and markdown formatting**

Validate templates and heuristic cheat-sheets.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/exploratory-and-heuristic-testing; git commit -m "feat(skills): add exploratory-and-heuristic-testing skill"
```

---

### Task 8: Build Skill: `test-strategy-and-quality-governance`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/test-strategy-and-quality-governance/SKILL.md`

**Interfaces:**
- Consumes: Product roadmap, release targets, quality metrics, team velocity.
- Produces: End-to-end master test strategies, 7-Dimension QA Audit orchestration, test pyramid balancing, risk-based testing matrices, CI/CD quality gate definitions, and release sign-off governance.

- [ ] **Step 1: Write `test-strategy-and-quality-governance/SKILL.md`**

Include:
- Frontmatter: name `test-strategy-and-quality-governance`, description.
- Master Test Strategy Template: Scope, objectives, quality criteria, test levels, automation coverage targets, test environments, risk management.
- Test Pyramid Calibration (Martin Fowler / 20-Year Reality):
  - Unit Tests: High volume, fast execution, pure functions, deterministic business logic.
  - Component / Integration Tests: Mid volume, testing module interactions, React component hooks and state boundaries.
  - API Contract Tests: High ROI, fast, testing business transactions and boundary edges without UI overhead.
  - End-to-End Tests: Focused on critical user journeys (smoke / sanity / revenue-critical flows), high value, zero flakiness.
  - Exploratory Testing: Continuous, creative defect discovery.
- 7-Dimension QA Audit Orchestration: Full audit checklist mapping content, layout, interactions, consistency, user flows, edge cases, and accessibility.
- CI/CD Quality Gates & Fitness Functions: Automated threshold checks in GitHub Actions (linting, typecheck, unit test coverage, E2E smoke tests, Lighthouse score thresholds, dependency vulnerability scans).
- Release Sign-Off Criteria: Strict P0/P1 blocker definitions, defect escape analysis (RCA / 5 Whys), zero-defect production readiness sign-off protocol.

- [ ] **Step 2: Verify frontmatter and markdown formatting**

Validate templates, tables, and pipeline YAML snippets.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/test-strategy-and-quality-governance; git commit -m "feat(skills): add test-strategy-and-quality-governance skill"
```

---

### Task 9: Verify Customization Registry & Commit Remote Sync

**Files:**
- Verify: All created skills and rules in `.agents/`
- Command: Git status, typecheck, remote branch sync.

- [ ] **Step 1: Verify TypeScript & Workspace Integrity**

Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 2: Verify All Created Skills Have Valid YAML Frontmatter**

Confirm each `SKILL.md` has `name` and `description` headers.

- [ ] **Step 3: Remote Sync (Mandatory)**

```powershell
git push origin main
```
Expected: Successfully pushed to `https://github.com/Shazzad01/myportfolio.git`.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-09-19-senior-sqa-engineer-agent-suite.md`. Two execution options:

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
