---
name: architectural-review-and-governance
description: Multi-axis architectural code review engine and governance. Use before approving or merging any code change, refactor, or new module. Evaluates module depth, abstraction leakage, coupling, failure modes, ADRs, and architectural fitness functions.
---

# Architectural Review and Governance

## Overview

A dedicated, rigorous architectural review framework reflecting 20+ years of enterprise engineering experience. 

**Code Review vs. Architectural Review:**
- *Code Review* checks syntax, style, local bugs, and unit test coverage.
- *Architectural Review* evaluates systemic health: module depth, abstraction integrity, failure modes, boundary validation, security posture, operational maintainability, and lifecycle evolution.

A pull request can have 100% test coverage and pristine formatting while still being an architectural disaster (e.g., leaky abstractions, shallow wrapper explosion, synchronous cascading failure risks). This skill governs the architectural quality gate.

---

## 1. The Six-Axis Architectural Review Engine

Every proposed architecture, module boundary, refactor, or non-trivial code change must be evaluated across six critical architectural axes:

```
                  ┌──────────────────────────────┐
                  │ 1. Modular Depth & Locality  │
                  └──────────────┬───────────────┘
                                 │
  ┌──────────────────────────────┼──────────────────────────────┐
  │                              │                              │
┌─▼───────────────────────────┐  │  ┌───────────────────────────▼─┐
│ 2. Abstraction & Coupling   │  │  │ 3. Boundary & Contracts     │
└─┬───────────────────────────┘  │  └───────────────────────────┬─┘
  │                              │                              │
  ├──────────────────────────────┼──────────────────────────────┤
  │                              │                              │
┌─▼───────────────────────────┐  │  ┌───────────────────────────▼─┐
│ 4. Resilience & Fault Modes │  │  │ 5. Security & Zero Trust    │
└─────────────────────────────┘  │  └─────────────────────────────┘
                                 │
                  ┌──────────────┴───────────────┐
                  │ 6. Performance & Lifecycle   │
                  └──────────────────────────────┘
```

### Axis 1: Modular Depth & Locality

- **Ousterhout's Ratio**: Does this module offer high leverage? (Simple, narrow interface hiding substantial internal complexity).
- **The Deletion Test**: If this module were deleted tomorrow, does complexity concentrate cleanly, or does it scatter into chaos?
- **Shallow Module Detection**: Is this class/function merely a pass-through wrapper around another library or database call? If so, delete it or deepen it.
- **Locality of Behavior**: Can a reader understand the lifecycle and behavior of this feature in one place, or must they jump across four abstract layers (controllers, managers, services, DAOs)?

### Axis 2: Abstraction Integrity & Coupling

- **Dependency Inversion**: Do high-level business rules depend on low-level implementation details? (Violates Clean Architecture).
- **Feature Leaks**: Is domain-specific or feature-specific logic leaking into general-purpose utilities or shared UI components?
- **Direction of Dependencies**: Are there cyclic dependencies or bidirectional imports?
- **Afferent & Efferent Coupling**: Does this change increase the fan-out of a stable core module?

### Axis 3: Contract & Boundary Rigor

- **System Edge Validation**: Is every piece of data coming from HTTP, queries, headers, environment variables, or external APIs validated at runtime using schemas (Zod)?
- **Trust Boundaries**: Internal code should trust domain models once validated at the boundary. Defensive `if (typeof x === 'string')` checks deep in business logic signal missing boundary validation.
- **Predictable Error Taxonomy**: Are errors categorized into distinct, typed categories (Validation, Authentication, Authorization, NotFound, Conflict, UpstreamFailure)?

### Axis 4: Resilience & Fault Modes

- **Cascading Failure Prevention**: What happens when an external dependency (payment gateway, CRM API, analytics endpoint) times out, returns HTTP 500, or drops connections?
- **Timeout Budgets**: Is there a hard ceiling on every network request?
- **Idempotent Mutations**: Can this operation be safely retried over an unstable network without double-charging, duplicate record creation, or state corruption?
- **Degraded Operation**: Does the UI fail gracefully with informative states when a backend service is unavailable?

### Axis 5: Security & Zero Trust

- **Least Privilege**: Does this endpoint or service expose more data fields or permissions than the client strictly needs?
- **OWASP Mitigation**: Are SQL queries parameterized? Are output templates sanitized against XSS? Is CSP enforced?
- **Secrets Isolation**: Are private keys, API secrets, or internal service tokens completely excluded from client bundles, logs, and version control?

### Axis 6: Performance & Lifecycle Maintainability

- **Bundle Footprint**: Does this component import a massive 500KB library when an isolated 40-line utility would suffice?
- **Algorithmic Complexity & Hot Paths**: Are there N+1 query patterns, unindexed database filters, or unbounded in-memory loops?
- **Zero-Downtime Evolutability**: Can this data model or API change be deployed without requiring synchronized downtime? (Expand/Contract pattern).

---

## 2. Architectural Anti-Pattern Catalog

| Anti-Pattern | Symptoms | Architectural Remedy |
|---|---|---|
| **The Shallow Pass-Through** | A class or function that merely forwards arguments to another function without adding abstraction, validation, or policy. | Delete the wrapper. Let callers invoke the underlying deep module directly. |
| **The God Object** | A single service (e.g. `AppManager`, `HelperService`) that knows everything and touches 20+ unrelated domains. | Decompose into cohesive bounded contexts with explicit interfaces. |
| **The Leaky Abstraction** | An interface that exposes implementation details (e.g. leaking SQL query strings or HTTP status codes into domain logic). | Enforce strict Port & Adapter boundaries; translate external semantics at the adapter layer. |
| **The Phantom Layer** | Introducing an interface with only one concrete implementation "in case we switch database engines later." | YAGNI. Delete the superfluous interface unless testing or modular boundaries genuinely require a seam. |
| **Synchronous Retry Storm** | Retrying failed external network calls in an immediate `while` loop without backoff or jitter. | Implement exponential backoff with full random jitter and circuit breaking. |
| **The Distributed Monolith** | Microservices that must be deployed together in lockstep and share a single database schema. | Consolidate into a well-structured Modular Monolith with in-process module boundaries. |

---

## 3. Architectural Decision Records (ADR) Process

When making architectural decisions that introduce trade-offs or shape the long-term design of the application, document them using an ADR.

### Standard ADR Template

```markdown
# ADR-[NUMBER]: [Short, Imperative Title of Decision]

## Status
[Proposed | Accepted | Superseded by ADR-XXX | Deprecated]

## Context & Problem Statement
What technical problem or architectural challenge are we addressing? What constraints, business drivers, or friction points exist in the current architecture?

## Considered Options
1. Option A: [Description + pros/cons]
2. Option B: [Description + pros/cons]
3. Option C: [Description + pros/cons]

## Decision Outcome
Chosen Option: [Option X], because [justification based on 20-year engineering trade-offs, simplicity, performance, and resilience].

### Positive Consequences
- [Specific benefits gained, e.g. decoupled deployment, test isolation, sub-100ms p95 latency]

### Negative Consequences / Trade-offs
- [Accepted costs, e.g. eventual consistency, operational overhead, learning curve]

## Compliance & Fitness Verification
How will we ensure this decision is adhered to in code?
- [Automated lint rule, typecheck constraint, or architectural review gate check]
```

---

## 4. Multi-Axis Architectural Gate Checklist

Before declaring any architectural task, refactor, or feature complete:

```markdown
### Architectural Review Gate

- [ ] **1. Modular Depth**: Modules have clean, narrow interfaces that hide substantial implementation complexity (no shallow pass-through wrappers).
- [ ] **2. Dependency Direction**: Dependencies point inward toward core business rules (Clean Architecture / Hexagonal).
- [ ] **3. Boundary Validation**: All external inputs (HTTP, forms, APIs, env) are strictly validated via Zod schemas at system edges.
- [ ] **4. Fault Isolation & Resilience**: Network calls have timeout budgets, idempotency guarantees, and circuit-breaking fallbacks.
- [ ] **5. Zero Trust Security**: Least privilege permissions enforced, zero secrets in client code, OWASP top 10 addressed.
- [ ] **6. Performance & Lifecycle**: Bundle size verified, no N+1 query patterns, non-breaking migration strategy in place.
- [ ] **7. Deletion Test Passed**: The system is simpler and more maintainable than before the change.
```
