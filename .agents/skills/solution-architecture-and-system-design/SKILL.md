---
name: solution-architecture-and-system-design
description: Use when designing macro and micro system architectures, Clean Architecture boundaries, Hexagonal/Ports & Adapters contracts, Domain-Driven Design (DDD) domain models, bounded contexts, or modular monolith decomposition.
---

# Solution Architecture and System Design

## Overview

Design scalable, evolvable, and resilient software architectures based on 20+ years of enterprise engineering principles. Great architecture makes systems easy to reason about, simple to test, and resilient against changing requirements. It separates what the business actually does from the volatile details of frameworks, databases, and third-party APIs.

---

## 1. Core Architectural Paradigms

### The Clean Architecture & Hexagonal (Ports & Adapters)

The fundamental rule of software architecture is the **Dependency Inversion Principle**:
> **Dependencies must point strictly inward toward higher-level business policies.** The domain core must know nothing about the web framework, UI, database, or network transport.

```
┌─────────────────────────────────────────────────────────────┐
│  Presentation / Web Layer (Next.js App Router, Components)  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Infrastructure / Adapters (Database, Fetch, APIs)   │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │  Application / Use Cases (Ports, Orchestration) │  │  │
│  │  │  ┌───────────────────────────────────────────┐  │  │  │
│  │  │  │  Domain Core (Aggregates, Value Objects)   │  │  │  │
│  │  │  └───────────────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

#### Layer Responsibilities

1. **Domain Core (Entities, Value Objects, Domain Events)**:
   - Pure, zero-dependency business logic.
   - Enforces core business invariants.
   - Completely decoupled from UI and persistence frameworks.
2. **Application Layer (Use Cases, Ports)**:
   - Orchestrates domain objects to satisfy user workflows.
   - Defines primary (driving) ports and secondary (driven) ports.
   - Never directly references external databases or SDKs.
3. **Infrastructure / Adapters (Implementations of Ports)**:
   - Implements secondary ports (e.g., PostgreSQL repository, Redis cache, SendGrid client).
   - Translates raw external data into domain representations.
4. **Presentation Layer (Web / Next.js)**:
   - HTTP route handlers, server actions, UI components.
   - Validates user input at the system boundary and invokes application use cases.

---

## 2. Domain-Driven Design (DDD) Strategic & Tactical Patterns

### Strategic Design: Bounded Contexts

A **Bounded Context** is an explicit boundary within which a domain model applies. The same word can have different meanings in different contexts:
- In the *Catalog Context*, an `Item` has SKU, description, media, and categories.
- In the *Inventory Context*, an `Item` has quantity, warehouse shelf location, and batch status.
- In the *Billing Context*, an `Item` has price, tax tier, and discount rules.

**Anti-Corruption Layer (ACL)**:
When integrating with external third-party systems or legacy APIs, always interpose an ACL. Never allow external models to pollute your domain core.

```typescript
// Anti-Corruption Layer: Translating untrusted external vendor response into internal domain model
export class VendorCustomerAdapter implements CustomerRepositoryPort {
  async findById(id: CustomerId): Promise<Customer | null> {
    const rawData = await fetchExternalVendor(`/v2/users/${id}`);
    const validated = VendorUserSchema.parse(rawData);
    
    // Translate external model into pure internal Domain Aggregate
    return Customer.reconstitute({
      id: CustomerId.create(validated.sub),
      email: Email.create(validated.contact_email),
      status: mapVendorStatusToDomain(validated.state),
    });
  }
}
```

### Tactical Design: Building Blocks

1. **Entity**: An object with a distinct identity that persists over time (e.g., `User`, `Order`).
2. **Value Object**: An immutable object defined entirely by its attributes without identity (e.g., `EmailAddress`, `Money`, `DateRange`). Equality is structural.
3. **Aggregate Root**: A cluster of domain objects treated as a single transactional unit. External objects can only hold references to the Aggregate Root.
4. **Domain Event**: A record of something significant that occurred in the domain (e.g., `OrderPlaced`, `PaymentFailed`).

```typescript
// Production Value Object Pattern: Immutable, self-validating
export class EmailAddress {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static create(candidate: string): EmailAddress {
    const trimmed = candidate.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      throw new Error(`Invalid email address format: ${candidate}`);
    }
    return new EmailAddress(trimmed);
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: EmailAddress): boolean {
    return this.value === other.value;
  }
}
```

---

## 3. Ousterhout's Module Depth & Locality

A module's architectural quality is governed by **Depth vs Shallowness** (John Ousterhout, *A Philosophy of Software Design*):

| Metric | Deep Module (Preferred) | Shallow Module (Anti-Pattern) |
|---|---|---|
| **Interface** | Small, concise, intuitive | Large, complex, verbose |
| **Implementation** | Hides substantial logic, concurrency, or algorithms | Thin pass-through wrapper |
| **Cognitive Leverage** | High: caller learns very little, gains massive capability | Low: caller must understand details to use it |
| **Deletion Test** | Deleting it scatters complex code across callers | Deleting it simplifies the system |

### The Deletion Test in Practice

```typescript
// SHALLOW ANTI-PATTERN: Pass-through wrapper with zero leverage
export class UserService {
  constructor(private userRepo: UserRepository) {}
  
  // Shallow: simply proxies repository call with no added value
  async getUserById(id: string) {
    return this.userRepo.findById(id);
  }
}

// DEEP MODULE: Narrow interface, powerful internal orchestration
export interface PerformanceAuditEngine {
  auditPagePerformance(url: string): Promise<AuditResult>;
}

export class PlaywrightAuditEngine implements PerformanceAuditEngine {
  // Simple 1-method interface hides:
  // - Browser lifecycle management
  // - CDP session setup
  // - Core Web Vitals extraction (LCP, CLS, INP)
  // - Network waterfall profiling
  // - Metric aggregation & scoring
  async auditPagePerformance(url: string): Promise<AuditResult> {
    // 150 lines of robust automation, failure retries, and telemetry
  }
}
```

---

## 4. Production Hexagonal Ports & Adapters Architecture in TypeScript

```typescript
// 1. DOMAIN LAYER: Pure Business Logic
export class TestRunAggregate {
  private constructor(
    public readonly id: string,
    private status: 'QUEUED' | 'RUNNING' | 'PASSED' | 'FAILED',
    private startedAt?: Date,
    private completedAt?: Date
  ) {}

  public static startNew(id: string): TestRunAggregate {
    return new TestRunAggregate(id, 'RUNNING', new Date());
  }

  public completeWithResult(passed: boolean): void {
    if (this.status !== 'RUNNING') {
      throw new Error(`Cannot complete test run in status: ${this.status}`);
    }
    this.status = passed ? 'PASSED' : 'FAILED';
    this.completedAt = new Date();
  }

  public isPassed(): boolean {
    return this.status === 'PASSED';
  }
}

// 2. APPLICATION LAYER: Port Definition (Interface)
export interface TestRunRepositoryPort {
  save(testRun: TestRunAggregate): Promise<void>;
  findById(id: string): Promise<TestRunAggregate | null>;
}

// 3. APPLICATION LAYER: Use Case (Orchestrator)
export class CompleteTestRunUseCase {
  constructor(private readonly testRunRepo: TestRunRepositoryPort) {}

  async execute(id: string, passed: boolean): Promise<void> {
    const testRun = await this.testRunRepo.findById(id);
    if (!testRun) throw new Error(`Test run not found: ${id}`);

    testRun.completeWithResult(passed);
    await this.testRunRepo.save(testRun);
  }
}

// 4. INFRASTRUCTURE LAYER: Adapter Implementation
export class InMemoryTestRunAdapter implements TestRunRepositoryPort {
  private store = new Map<string, TestRunAggregate>();

  async save(testRun: TestRunAggregate): Promise<void> {
    this.store.set(testRun.id, testRun);
  }

  async findById(id: string): Promise<TestRunAggregate | null> {
    return this.store.get(id) || null;
  }
}
```

---

## 5. Architectural Decision Framework & Trade-Offs

When choosing between architectures, always evaluate trade-offs:

1. **Modular Monolith vs Distributed Microservices**:
   - *Default to Modular Monolith*: Enforce clear in-process boundaries (Clean Architecture / Hexagonal).
   - Only split into microservices when independent deployment, differing scaling characteristics, or organizational boundary constraints strictly demand it.
2. **Synchronous RPC vs Asynchronous Event-Driven**:
   - Synchronous RPC (REST/tRPC): Simple mental model, immediate feedback, but introduces temporal coupling and cascading failure risk.
   - Asynchronous Events (Message Bus/Outbox): Decoupled, highly resilient, eventual consistency, but introduces debugging complexity and out-of-order delivery challenges.
3. **Premature Generalization vs Technical Debt**:
   - Rule of Three: Write specific, concrete implementations first. Do not introduce polymorphic abstractions or generic frameworks until you have at least three concrete use cases.

---

## 6. Architectural Quality Checklist

Before finalizing any system design:
- [ ] Dependencies point inward toward core business logic
- [ ] Domain models contain no framework-specific decorators or dependencies
- [ ] All external input is validated at the system boundary via schemas (Zod)
- [ ] Third-party vendor integrations are quarantined behind an Anti-Corruption Layer (ACL)
- [ ] Modules are Deep: Simple, narrow interfaces hiding substantial logic
- [ ] Aggregates enforce business invariants transactionally
- [ ] Error taxonomy is consistent across all API and service boundaries
