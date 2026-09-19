---
name: data-architecture-and-state-modeling
description: Enterprise data architecture, normalized state modeling, CQRS, zero-downtime database migration patterns (expand/contract), and optimistic UI reconciliation. Use when designing application state machines, schema evolutions, or mutation synchronization.
---

# Data Architecture and State Modeling

## Overview

Data structures and state models dictate the longevity and simplicity of an entire software system. Based on 20+ years of enterprise data engineering, this skill establishes patterns to **make impossible states unrepresentable**, decouple reads from writes (CQRS), execute **zero-downtime database migrations**, and manage optimistic state reconciliations.

---

## 1. Making Impossible States Unrepresentable

A pervasive architectural smell is the explosion of independent boolean flags:
```typescript
// ANTI-PATTERN: Can have 16 possible states, many of which are invalid or nonsensical
// E.g. isLoading: true AND isSuccess: true, or isError: true with no error object
interface BadAsyncState<T> {
  data?: T;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error?: Error;
}
```

### The Discriminated Union Solution

Model state as a strict Finite State Machine (FSM) where each variant carries only its valid payload:

```typescript
export type AsyncState<T> =
  | { status: 'IDLE' }
  | { status: 'LOADING' }
  | { status: 'SUCCESS'; data: T; receivedAt: Date }
  | { status: 'ERROR'; error: { code: string; message: string }; failedAt: Date };

// Consumers get compile-time type narrowing with zero ambiguous states
export function renderState<T>(state: AsyncState<T>): string {
  switch (state.status) {
    case 'IDLE':
      return 'Ready';
    case 'LOADING':
      return 'Loading...';
    case 'SUCCESS':
      return `Loaded at ${state.receivedAt.toISOString()}`;
    case 'ERROR':
      return `Error [${state.error.code}]: ${state.error.message}`;
  }
}
```

---

## 2. Command Query Responsibility Segregation (CQRS)

In modern web applications, the optimal data model for rendering UI is rarely the optimal model for processing business transactions.

```
       ┌────────────────────────┐
       │   Client Interaction   │
       └─────┬────────────┬─────┘
             │            │
  [Commands / Writes]  [Queries / Reads]
             │            │
             ▼            ▼
   ┌────────────────┐   ┌───────────────────────────┐
   │ Domain Command │   │ Denormalized Read Models  │
   │ Handler        │   │ (Edge-cached, fast JSON)  │
   └────────┬───────┘   └─────────────┬─────────────┘
            │                         │
            ▼                         │
   ┌────────────────┐                 │
   │ Primary DB     │──(Projection)───┘
   │ (Normalized)   │
   └────────────────┘
```

1. **Write Model (Commands)**:
   - Deep domain logic, high normalization (3NF), transactional consistency, invariant checks.
2. **Read Model (Queries)**:
   - Denormalized, flat projection optimized for minimal latency and single-query fetches.
   - Ideal for Edge caching and CDN distribution.

---

## 3. Zero-Downtime Database Migration: The Expand/Contract Pattern

Never rename, alter, or drop an active database column in a single deployment. A deployed application runs mixed versions during rolling rollouts. A sudden schema change breaks in-flight requests.

### The 5-Phase Expand/Contract Protocol

```
Phase 1: Expand        Add new column/table (nullable or with default).
Phase 2: Dual-Write    Application writes to both old and new schema.
Phase 3: Backfill      Background job copies historical data to new schema.
Phase 4: Switch Reads  Application switches all reads to new schema.
Phase 5: Contract      Remove dual-write logic; safely drop old column.
```

#### Example: Migrating `fullName` to `firstName` and `lastName`

```typescript
// Phase 2: Dual-write in repository
export class UserRepository {
  async saveUser(user: User): Promise<void> {
    await db.user.update({
      where: { id: user.id },
      data: {
        // Old schema (maintained for backward compatibility with older instances)
        fullName: `${user.firstName} ${user.lastName}`,
        // New schema (expanded)
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  }
}
```

---

## 4. Optimistic UI Mutations with Transactional Rollback

In high-performance applications, the UI must feel instantaneous. Mutate local state immediately, dispatch the network mutation in the background, and roll back cleanly if the server rejects it:

```typescript
export interface OptimisticMutationOptions<TState, TPayload> {
  optimisticUpdate: (current: TState, payload: TPayload) => TState;
  remoteMutation: (payload: TPayload) => Promise<TState>;
  onSuccess?: (confirmedState: TState) => void;
  onError?: (error: Error, revertedState: TState) => void;
}

export class OptimisticManager<TState> {
  private state: TState;

  constructor(initialState: TState, private readonly notify: (s: TState) => void) {
    this.state = initialState;
  }

  public async execute<TPayload>(
    payload: TPayload,
    options: OptimisticMutationOptions<TState, TPayload>
  ): Promise<void> {
    const previousState = this.state;

    // 1. Optimistic apply
    this.state = options.optimisticUpdate(this.state, payload);
    this.notify(this.state);

    try {
      // 2. Perform remote network mutation
      const serverState = await options.remoteMutation(payload);
      this.state = serverState;
      this.notify(this.state);
      options.onSuccess?.(serverState);
    } catch (err) {
      // 3. Rollback on failure
      const error = err instanceof Error ? err : new Error(String(err));
      this.state = previousState;
      this.notify(this.state);
      options.onError?.(error, previousState);
    }
  }

  public getState(): TState {
    return this.state;
  }
}
```

---

## 5. Normalized Entity Cache Pattern

Avoid nested duplicate data in UI state. Normalize collections by ID to eliminate state synchronization bugs:

```typescript
export interface NormalizedEntityStore<T extends { id: string }> {
  byId: Record<string, T>;
  allIds: string[];
}

export function upsertEntity<T extends { id: string }>(
  store: NormalizedEntityStore<T>,
  entity: T
): NormalizedEntityStore<T> {
  const exists = store.byId[entity.id] !== undefined;
  return {
    byId: { ...store.byId, [entity.id]: entity },
    allIds: exists ? store.allIds : [...store.allIds, entity.id],
  };
}
```

---

## 6. Data Architecture Verification Checklist

- [ ] State variants are modeled as discriminated unions (no combinations of conflicting boolean flags).
- [ ] Read queries are decoupled from write models (CQRS principles applied).
- [ ] Schema changes follow the 5-phase Expand/Contract pattern with zero breaking migrations.
- [ ] Optimistic UI updates include explicit, tested rollback logic upon network failure.
- [ ] Relational and local entities are stored in normalized form by primary ID.
- [ ] Mutations maintain strict single-source-of-truth invariants.
