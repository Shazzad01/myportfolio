# Principal Solution Architect (20+ Years Experience) Agent Suite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish a world-class Principal Solution Architect Engineer (20+ Years Experience) agent identity, governance rules, and modular skill suite in the workspace, ensuring every architectural decision, module boundary, and code implementation undergoes multi-axis enterprise-grade architectural review.

**Architecture:** A comprehensive, multi-tiered agent architecture comprising workspace-level agent identity elevation (`AGENTS.md`, `.agents/AGENTS.md`), a progressive trigger rule (`.agents/rules/solution-architect.md`), and six specialized, battle-tested modular skills in `.agents/skills/` covering system design, architectural review & governance, cloud scalability & resilience, zero-trust enterprise security, observability & telemetry, and data architecture & state modeling.

**Tech Stack:** Next.js (App Router), TypeScript, Clean Architecture / Hexagonal (Ports & Adapters), Domain-Driven Design (DDD), OpenTelemetry, Zod, Antigravity Customization Engine (YAML frontmatter, progressive disclosure).

**Spec:** User directive: "you are an solution arcitect engineer and you will review every code arcticte your do, and you are exprenced mor ethan 20 year. create agent and all skills /goal /writing-plans".

## Global Constraints

- Never invent or extrapolate career credentials (strictly observe `master_career_profile.md`).
- Strictly adhere to Tailwind CSS v4 `@custom-variant dark (&:where(.dark, .dark *));` engine invariant.
- In PowerShell commands, ALWAYS use `;` instead of `&&` for statement chaining.
- When verifying TypeScript under active dev server, use `npx tsc --noEmit` to prevent Windows file lock conflicts (`EPERM`).
- Preserve 70/30 Visual-First ratio and avoid AI-generated tells.
- Every architectural review must evaluate module depth vs shallowness, abstraction leaks, coupling, failure modes, data contracts, security posture, and lifecycle maintainability.

---

### Task 1: Elevate Workspace Agent Identity in `AGENTS.md` and `.agents/AGENTS.md`

**Files:**
- Modify: `c:/Users/User/OneDrive/Documents/portfolio/AGENTS.md:55-60`
- Modify: `c:/Users/User/OneDrive/Documents/portfolio/.agents/AGENTS.md:8-18`

**Interfaces:**
- Consumes: Existing role definitions (PM, BA, QA, Developer, UI/UX Architect, DevOps) and workspace guidelines.
- Produces: Formal Principal Solution Architect (20+ Years Experience) role definition, mandatory architectural review invariant, and system governance directives.

- [ ] **Step 1: Add Solution Architect role to `.agents/AGENTS.md`**

Update the role table in `.agents/AGENTS.md` to include:
```markdown
| **Solution Architect** | 20+ years enterprise systems craft: macro & micro architecture, deep modules vs shallow abstractions, Clean Architecture / Hexagonal, boundary validation, distributed resilience (circuit breaker, backoff, idempotency), scalability, zero-trust security, and continuous architectural review governance. |
```
And add dedicated Solution Architect Directives & Review Invariants to `.agents/AGENTS.md`.

- [ ] **Step 2: Add Principal Solution Architect & Architectural Review Invariant to root `AGENTS.md`**

Append to `AGENTS.md`:
```markdown
### Principal Solution Architect & Architectural Review Invariant
- **20+ Year Enterprise Craft**: Every system design, module boundary, data flow, and code implementation must undergo an architectural review before execution. Evaluate depth vs shallowness, abstraction leaks, coupling, failure modes, data contracts, security posture, and lifecycle maintainability.
- **Deep Modules over Shallow Abstractions**: Interfaces should be simple and narrow, while implementations handle complexity. Never introduce pass-through wrappers or premature generalizations.
- **Resilience & Zero Trust by Design**: Plan for failure at every boundary. Implement idempotent operations, robust error semantics, and zero-trust data validation.
```

- [ ] **Step 3: Verify document formatting and markdown integrity**

Ensure markdown tables and headers are properly aligned and no existing rules were inadvertently altered.

- [ ] **Step 4: Commit changes**

```powershell
git add AGENTS.md .agents/AGENTS.md; git commit -m "feat(agents): elevate workspace agent identity with Principal Solution Architect role"
```

---

### Task 2: Create Progressive Architectural Rule `.agents/rules/solution-architect.md`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/rules/solution-architect.md`

**Interfaces:**
- Consumes: Antigravity rules schema and trigger conventions.
- Produces: Progressive rule that activates whenever designing or modifying architecture, services, components, API boundaries, or state models.

- [ ] **Step 1: Write `.agents/rules/solution-architect.md`**

Create the rule with YAML frontmatter specifying contextual triggers (`*.ts`, `*.tsx`, `components/**`, `app/**`, `lib/**`, `types/**`) and explicit directives:
- Core 20-Year Architecture Tenets:
  - Ousterhout's Module Depth: Deep modules with simple interfaces hiding non-trivial complexity; reject shallow pass-through layers.
  - Boundary Validation: Strong schema validation (Zod) at all external and untrusted edges; internal trust boundaries.
  - Resilience & Failure Modes: Explicit timeout budgeting, circuit breaking, idempotent retries with jitter, bulkhead isolation.
  - Zero-Trust Security: Principle of least privilege, input sanitization, OWASP mitigation, safe serialization.
  - Scalability & Cloud Edge: Edge caching, stale-while-revalidate, streaming SSR, bundle size discipline.
  - Multi-Axis Architectural Review Gate: Mandatory architectural evaluation before code merge.

- [ ] **Step 2: Verify rule frontmatter and discovery syntax**

Ensure valid YAML frontmatter and formatting.

- [ ] **Step 3: Commit**

```powershell
git add .agents/rules/solution-architect.md; git commit -m "feat(rules): add solution-architect progressive rule"
```

---

### Task 3: Build Skill: `solution-architecture-and-system-design`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/solution-architecture-and-system-design/SKILL.md`

**Interfaces:**
- Consumes: System requirements, domain models, and application architecture needs.
- Produces: Clean Architecture boundaries, Hexagonal/Ports & Adapters contracts, Domain-Driven Design (DDD) domain models, bounded context mappings, and modular decomposition strategies.

- [ ] **Step 1: Write `solution-architecture-and-system-design/SKILL.md`**

Include:
- Frontmatter: name `solution-architecture-and-system-design`, description.
- Architectural Styles: Clean Architecture, Hexagonal (Ports & Adapters), Modular Monolith, Micro-frontends.
- Dependency Inversion Rule: Business logic independent of UI, frameworks, and databases; dependencies point inward.
- Domain-Driven Design (DDD): Bounded contexts, Aggregate Roots, Entities, Value Objects, Domain Events.
- Module Depth vs Shallowness (Ousterhout): Quantifying interface-to-implementation leverage.
- Concrete TypeScript examples demonstrating Ports & Adapters and DDD aggregates in Next.js/React applications.

- [ ] **Step 2: Verify frontmatter and markdown code blocks**

Validate syntax, code blocks, and markdown structure.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/solution-architecture-and-system-design/SKILL.md; git commit -m "feat(skills): add solution-architecture-and-system-design skill"
```

---

### Task 4: Build Skill: `architectural-review-and-governance`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/architectural-review-and-governance/SKILL.md`

**Interfaces:**
- Consumes: Proposed code changes, pull requests, technical specs, and refactor proposals.
- Produces: Comprehensive multi-axis architectural review, fitness function checks, Architectural Decision Records (ADRs), anti-pattern detection, and strict architectural approval gates.

- [ ] **Step 1: Write `architectural-review-and-governance/SKILL.md`**

Include:
- Frontmatter: name `architectural-review-and-governance`, description.
- The 20+ Year Solution Architect Review Engine:
  - Axis 1: Modular Depth & Locality (Is this module deep or shallow? Does refactoring reduce or just relocate complexity?)
  - Axis 2: Abstraction Integrity & Coupling (Are dependencies clean? Does feature logic leak into shared layers?)
  - Axis 3: Contract & Boundary Rigor (Are schemas typed and validated? Are error semantics predictable?)
  - Axis 4: Resilience & Fault Tolerance (What happens when a downstream service or network call fails?)
  - Axis 5: Security & Zero Trust (Are inputs sanitized? Are tokens and secrets secure?)
  - Axis 6: Performance & Scalability (Are hot paths optimized? Are bundle sizes preserved?)
- Architecture Decision Record (ADR) Template: Context, Options Considered, Decision, Trade-offs, Consequences.
- Architectural Anti-Pattern Catalog: God Objects, Distributed Monolith, Leaky Abstractions, Pass-Through Wrappers, Premature Generalization.
- Multi-Axis Architectural Approval Gate Checklist.

- [ ] **Step 2: Verify frontmatter and markdown code blocks**

Validate syntax and ensure complete, practical templates.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/architectural-review-and-governance/SKILL.md; git commit -m "feat(skills): add architectural-review-and-governance skill"
```

---

### Task 5: Build Skill: `cloud-scalability-and-resilience`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/cloud-scalability-and-resilience/SKILL.md`

**Interfaces:**
- Consumes: Network boundaries, cloud infrastructure targets (Vercel, Cloudflare, AWS), and caching requirements.
- Produces: High-availability topologies, multi-tier caching architectures (CDN, HTTP headers, SWR, KV), resilience patterns (idempotency, exponential backoff with jitter, circuit breakers, bulkheads, graceful fallback).

- [ ] **Step 1: Write `cloud-scalability-and-resilience/SKILL.md`**

Include:
- Frontmatter: name `cloud-scalability-and-resilience`, description.
- Cloud & Edge Topology: Vercel Edge Runtime, Cloudflare Workers, Origin servers, Region-aware deployments.
- Multi-Tier Caching Architecture:
  - Browser HTTP Cache (`Cache-Control: public, s-maxage=..., stale-while-revalidate=...`).
  - Edge CDN Caching & Tag-based Invalidation.
  - In-memory / Edge KV caching.
- Distributed Resilience Primitives:
  - Production TypeScript implementation of `CircuitBreaker` (Closed, Open, Half-Open states).
  - Production TypeScript implementation of `exponentialBackoffWithJitter`.
  - Idempotency Key execution wrapper.
  - Bulkhead concurrency limiter.
- Cold-Start and Edge Compute Optimization.

- [ ] **Step 2: Verify TypeScript code primitives and types**

Ensure all TypeScript code snippets are valid, typed, and dependency-free.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/cloud-scalability-and-resilience/SKILL.md; git commit -m "feat(skills): add cloud-scalability-and-resilience skill"
```

---

### Task 6: Build Skill: `enterprise-security-and-zero-trust`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/enterprise-security-and-zero-trust/SKILL.md`

**Interfaces:**
- Consumes: Authentication, API endpoints, web forms, third-party integrations, and environment configurations.
- Produces: Zero Trust architecture guidelines, OWASP Top 10 mitigation strategies, Content Security Policy (CSP) configurations, secure session/token handling, and boundary input validation.

- [ ] **Step 1: Write `enterprise-security-and-zero-trust/SKILL.md`**

Include:
- Frontmatter: name `enterprise-security-and-zero-trust`, description.
- Zero Trust Principles: Verify explicitly, least privilege access, assume breach.
- OWASP Web & API Top 10 Mitigation Matrix:
  - Injection (SQL, NoSQL, Command) & ORM safety.
  - Broken Authentication & PKCE / OAuth2 / JWT rotation patterns.
  - Sensitive Data Exposure & Header Hardening (`CSP`, `HSTS`, `X-Frame-Options`, `Permissions-Policy`).
  - Cross-Site Scripting (XSS) & HTML sanitization.
  - Server-Side Request Forgery (SSRF) prevention.
- Boundary Validation Pattern with Zod: Untrusted input enforcement.
- Secrets Management & Environment Variable Hygiene.
- STRIDE Threat Modeling Framework.

- [ ] **Step 2: Verify frontmatter and markdown code blocks**

Validate syntax and code examples.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/enterprise-security-and-zero-trust/SKILL.md; git commit -m "feat(skills): add enterprise-security-and-zero-trust skill"
```

---

### Task 7: Build Skill: `observability-and-telemetry-engineering`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/observability-and-telemetry-engineering/SKILL.md`

**Interfaces:**
- Consumes: Runtime errors, performance metrics, Core Web Vitals, and distributed traces.
- Produces: OpenTelemetry tracing instrumentation, structured JSON logging with correlation IDs, metrics collection (p50/p95/p99 latency, error budgets), Core Web Vitals RUM, and synthetic health monitoring.

- [ ] **Step 1: Write `observability-and-telemetry-engineering/SKILL.md`**

Include:
- Frontmatter: name `observability-and-telemetry-engineering`, description.
- Three Pillars of Observability: Logs, Metrics, Traces.
- Structured JSON Logging with Trace Correlation IDs: TypeScript logging helper.
- OpenTelemetry Instrumentation Pattern for Next.js / Node.js.
- Core Web Vitals Real User Monitoring (LCP, CLS, INP, TTFB, FCP).
- Service Level Objectives (SLOs), SLIs, and Error Budget Calculations.
- Synthetic Health Probes (`/api/health`, `/api/ready`) with downstream dependency checking.

- [ ] **Step 2: Verify frontmatter and code blocks**

Ensure valid markdown and syntax.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/observability-and-telemetry-engineering/SKILL.md; git commit -m "feat(skills): add observability-and-telemetry-engineering skill"
```

---

### Task 8: Build Skill: `data-architecture-and-state-modeling`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/data-architecture-and-state-modeling/SKILL.md`

**Interfaces:**
- Consumes: Application state, persistence requirements, and data mutations.
- Produces: Normalized state models, CQRS patterns, optimistic updates with rollback, zero-downtime database migration strategies (expand/contract), and data sanitization protocols.

- [ ] **Step 1: Write `data-architecture-and-state-modeling/SKILL.md`**

Include:
- Frontmatter: name `data-architecture-and-state-modeling`, description.
- State Modeling & Single Source of Truth: State charts, discriminated unions, state machines.
- CQRS (Command Query Responsibility Segregation) in modern web applications.
- Optimistic UI Mutations with Transactional Rollback.
- Zero-Downtime Database & Schema Migration: Expand/Contract pattern (Add -> Populate -> Switch -> Drop).
- Cache Invalidation & Stale State Mitigation.

- [ ] **Step 2: Verify frontmatter and code blocks**

Ensure valid markdown and syntax.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/data-architecture-and-state-modeling/SKILL.md; git commit -m "feat(skills): add data-architecture-and-state-modeling skill"
```

---

### Task 9: Verification, Antigravity Customization Audit & Remote Sync

**Files:**
- Inspect: All created and modified files in `.agents/` and workspace root.

- [ ] **Step 1: Verify TypeScript & Build integrity**

Run `npx tsc --noEmit` to ensure zero compilation or type errors.

- [ ] **Step 2: Audit Antigravity Customization Discovery**

Inspect all newly created skills in `.agents/skills/` to confirm YAML frontmatter adheres to Antigravity discovery standards.

- [ ] **Step 3: Sync to Remote Git Repository**

Per workspace rule, push the completed feature commits to `origin main`.
```powershell
git status; git push origin main
```

---

## Self-Review

1. **Spec Coverage:**
   - "you are an solution arcitect engineer": Addressed in Tasks 1 & 2 (Agent elevation and progressive rule).
   - "you will review every code arcticte your do": Addressed in Task 1, Task 2, and Task 4 (`architectural-review-and-governance`).
   - "you are exprenced mor ethan 20 year": Reflected across all skills with deep 20+ year enterprise engineering tenets, battle-tested patterns, and anti-pattern mitigations.
   - "create agent and all skills": Addressed in Tasks 1–8.
2. **Placeholder Scan:** Zero "TODO", "TBD", or placeholders. All tasks contain exact files, interfaces, steps, and commit instructions.
3. **Type & Platform Consistency:** All commands adhere to Windows PowerShell syntax (using `;` instead of `&&`). TypeScript verification uses `npx tsc --noEmit`.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-09-19-solution-architect-agent-suite.md`. Two execution options:

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
