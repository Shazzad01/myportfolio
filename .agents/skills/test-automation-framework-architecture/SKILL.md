---
name: test-automation-framework-architecture
description: Enterprise-grade test automation architecture with Playwright, Cypress, Selenium, and Appium. Page Object Model (POM), Screenplay pattern, hermetic fixtures, route mocking, parallel execution, and flakiness elimination engines.
---

# Test Automation Framework Architecture

## Overview

As a 20+ year veteran SQA Engineer & Test Architect, you know that **automation without architecture is just legacy code written in a testing framework**. A poorly architected test suite suffers from high maintenance overhead, flaky builds, sluggish execution times, and false positives that erode team trust.

A world-class test automation framework must be **fast, hermetic, maintainable, deterministic, and self-healing**.

---

## 1. Automation Design Patterns

```text
┌────────────────────────────────────────────────────────┐
│                   Test Specification                   │
│    test('user successfully filters projects', ...)     │
└───────────────────────────┬────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
  Page Object Model (POM)         Screenplay Pattern
  ┌───────────────────────┐       ┌──────────────────────┐
  │ Page / Component POM  │       │ Actor -> Tasks       │
  │ - Locators            │       │ - FilterProjects     │
  │ - High-level actions  │       │ - VerifyGridResults  │
  └───────────────────────┘       └──────────────────────┘
              │                           │
              └─────────────┬─────────────┘
                            ▼
               Playwright Page & Fixtures
```

### 1. Page Object Model (POM)
- Encapsulates UI locators and interaction mechanisms into clean, dedicated page or component classes.
- Tests read like plain-English user stories, decoupled from underlying HTML/CSS selectors.
- Rule: Page Objects never contain test assertions (`expect(...)`); they provide locators and action methods. Assertions belong in the test spec to keep POMs reusable and flexible.

### 2. Component Object Model (COM)
- Modern web apps are composed of modular components (modals, search bars, navbars, cards).
- Create focused Component Objects (e.g. `FilterToolbarComponent`, `NavbarComponent`, `ContactModalComponent`) and compose them within Page Objects.

### 3. Screenplay Pattern
- Actor-centric pattern separating Actors, Abilities, Tasks, and Questions.
- Highly scalable for complex enterprise workflows spanning multiple micro-frontends or distributed microservices.

---

## 2. Production-Grade Page Object Model (Playwright + TypeScript)

Here is the reference architecture for a strongly typed, maintainable Page Object in Playwright:

```typescript
import { type Page, type Locator, expect } from '@playwright/test';

export class ProjectsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly filterButtons: Locator;
  readonly projectCards: Locator;
  readonly liveTerminal: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 2, name: /featured projects/i });
    this.filterButtons = page.getByRole('tablist').getByRole('tab');
    this.projectCards = page.getByTestId('project-card');
    this.liveTerminal = page.getByTestId('terminal-simulator');
    this.searchInput = page.getByPlaceholder(/search projects/i);
  }

  async goto(): Promise<void> {
    await this.page.goto('/#projects');
    await this.heading.waitFor({ state: 'visible' });
  }

  async selectCategory(categoryName: string): Promise<void> {
    const tab = this.page.getByRole('tab', { name: new RegExp(categoryName, 'i') });
    await tab.click();
    // Allow Framer Motion AnimatePresence container transition to settle
    await this.page.waitForFunction(
      () => !document.querySelector('[data-animating="true"]'),
      { timeout: 3000 }
    ).catch(() => {});
  }

  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
  }

  getCardByTitle(title: string): Locator {
    return this.projectCards.filter({ hasText: title });
  }
}
```

---

## 3. Flakiness Root Causes & Elimination Engine

Test flakiness is treated as a **P0 architectural bug**. 95% of test flakiness stems from four anti-patterns:

| Anti-Pattern | Root Cause | Architectural Solution |
|--------------|------------|------------------------|
| `page.waitForTimeout(3000)` | Hardcoded time assumption; fails on slow CI runners or wastes time on fast local CPUs. | **Strict Ban**. Use auto-retrying web assertions: `await expect(locator).toBeVisible()`. |
| Brittle CSS/XPath Selectors | Selectors break when styling, tailwind classes, or DOM hierarchy refactors occur. | **Web-First Locators**: Prioritize `getByRole`, `getByLabel`, and `getByTestId`. |
| Animation / Transition Race | Action dispatched while element is mid-flight in CSS/Framer Motion transform. | Wait for stable bounding box: `await locator.click()` Playwright automatically checks actionability (visible, stable, enabled). |
| Shared State Leakage | Test A mutates database or local storage, causing Test B to fail when run concurrently. | **Hermetic Isolation**: Fresh browser context, dedicated storage state, and unique test entity IDs per worker. |

---

## 4. Hermetic Test Fixtures & State Isolation

Extend Playwright's base `test` to create hermetic fixtures that provision clean data and teardown automatically:

```typescript
import { test as base, type Page } from '@playwright/test';
import { ProjectsPage } from '../pages/ProjectsPage';

type CustomFixtures = {
  projectsPage: ProjectsPage;
  authenticatedSession: Page;
};

export const test = base.extend<CustomFixtures>({
  projectsPage: async ({ page }, use) => {
    const projects = new ProjectsPage(page);
    await projects.goto();
    await use(projects);
  },

  authenticatedSession: async ({ browser }, use) => {
    // Hermetically isolated browser context with pre-warmed auth tokens
    const context = await browser.newContext({
      storageState: {
        cookies: [{ name: 'auth_token', value: 'mock_jwt_session_token', domain: 'localhost', path: '/' }],
        origins: []
      }
    });
    const page = await context.newPage();
    await use(page);
    await context.close();
  }
});

export { expect } from '@playwright/test';
```

---

## 5. Network Route Mocking & Chaos Interception

Never allow third-party network flakiness to break internal test suites. Intercept network routes at the protocol layer:

```typescript
import { test, expect } from './fixtures';

test.describe('Resilient Route Interception Suite', () => {
  test('Handles 500 Internal Server Error with user-friendly fallback', async ({ page, projectsPage }) => {
    // Intercept backend API call and inject server crash
    await page.route('**/api/projects', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error', message: 'Database unreachable' }),
      });
    });

    await page.reload();

    // Verify system shows graceful error boundary rather than blank page
    const errorBanner = page.getByRole('alert');
    await expect(errorBanner).toBeVisible();
    await expect(errorBanner).toContainText(/unable to load projects/i);
  });

  test('Simulate 3G Network Throttling with Loading Skeleton', async ({ page }) => {
    // Simulate slow network response (1500ms delay)
    await page.route('**/api/data', async (route) => {
      await new Promise((res) => setTimeout(res, 1500));
      await route.continue();
    });

    await page.goto('/');
    // Loading skeleton must be visible during the delay
    const skeleton = page.getByTestId('loading-skeleton');
    await expect(skeleton).toBeVisible();
  });
});
```

---

## 6. Execution Optimization & CI/CD Sharding

To run 1,000+ tests in under 3 minutes in CI/CD pipelines:
1. **Parallel Workers**: Scale `--workers=4` or `--workers=8` depending on CI runner CPU allocation.
2. **Sharding**: Split suites across multiple CI machines using `--shard=1/4`, `--shard=2/4`, etc.
3. **Artifact Retention Policy**:
   - Trace viewer: `retain-on-failure`
   - Screenshots: `only-on-failure`
   - Video: `retain-on-failure`
   Avoid recording videos on passing tests to reduce disk I/O and CI storage costs.
