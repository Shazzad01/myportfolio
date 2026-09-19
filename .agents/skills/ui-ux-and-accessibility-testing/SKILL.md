---
name: ui-ux-and-accessibility-testing
description: Full-spectrum UI/UX visual verification, responsive breakpoint stress testing (320px to 4K), 10-state component matrix, WCAG 2.1/2.2 AA/AAA accessibility compliance, and automated Playwright + axe-core testing harnesses.
---

# UI/UX and Accessibility Testing Framework

## Overview

As a 20+ year veteran SQA Engineer & Test Architect, you evaluate user interfaces through a dual lens of **aesthetic engineering** and **uncompromising digital inclusivity**. A UI is not tested merely by asserting that an element is present in the DOM; it must be verified across visual balance, spatial cadence, responsive stress, micro-interaction feedback, cognitive ergonomics, and universal accessibility.

---

## 1. The 10-State UI Component Matrix

Every interactive component (buttons, inputs, dropdowns, cards, dialogs, tabs) must be tested across all 10 states before release:

| State | Definition & Expected Behavior | Key Failure Modes to Catch |
|-------|--------------------------------|----------------------------|
| **1. Idle (Default)** | Neutral rested state with clear affordance and contrast. | Low contrast against background; ambiguous affordance. |
| **2. Hover** | Smooth pointer proximity feedback ($\le 150\text{ms}$ spring transition). | Harsh color flickers; cursor not changing to `pointer`. |
| **3. Active (Pressed)** | Tactile downward scale or shadow depression ($97\text{–}98\%$ scale). | No visual confirmation of click/tap dispatch. |
| **4. Focus-Visible** | High-contrast keyboard focus ring (`ring-2 ring-amber-500 ring-offset-2`). | Missing focus outline; focus ring clipped by `overflow: hidden`. |
| **5. Disabled** | Low opacity ($40\text{–}50\%$), `cursor-not-allowed`, `pointer-events: none` on clicks, `aria-disabled="true"`. | Clickable while disabled; still focusable without explaining why. |
| **6. Loading / Skeleton** | Shimmer skeleton or embedded spinner with preserved dimensions. | Layout shift (CLS) when entering/exiting loading; button collapses. |
| **7. Error / Invalid** | Distinct border highlight (rose/crimson), clear descriptive message, `aria-invalid="true"`. | Only using color to indicate error (fails WCAG 1.4.1); generic error copy. |
| **8. Empty State** | Helpful illustration/icon, clear explanation, direct call-to-action (CTA). | Blank whitespace; dead ends where user cannot proceed. |
| **9. Dirty / Modified** | Visual indicator that unsaved changes exist (e.g. form fields). | Accidental navigation without unsaved changes confirmation. |
| **10. Overflow / Truncated** | Graceful text truncation (`truncate`, `line-clamp-2`), tooltip on hover for full text. | Text overflowing container boundaries; broken layout on long strings. |

---

## 2. Responsive Breakpoint Stress Protocol

Test the interface under realistic device viewport dimensions across the entire spectrum:

```text
320px ────────── 375/390px ────────── 768px ────────── 1024px ────────── 1440px ────────── 2560px+
(iPhone SE)     (Modern Phone)        (iPad Port)     (iPad Land)       (Desktop)         (Ultrawide 4K)
```

### Breakpoint Verification Checklist:
- **320px (Minimum Viable Screen)**:
  - Zero horizontal page scrollbar (`document.documentElement.scrollWidth === window.innerWidth`).
  - Font sizes do not drop below $12\text{px}$.
  - Multi-column layouts cleanly collapse into a single vertical column.
  - Modals and side drawers fit within viewport height with smooth vertical scrolling.
- **375px / 390px (Mobile Standard)**:
  - Touch targets measure at least $44 \times 44\text{px}$ (Apple HIG) or $48 \times 48\text{px}$ (Android Material).
  - Minimum $8\text{px}$ touch target separation to prevent accidental taps.
  - Sticky bottom action bars or navigation do not obstruct input fields when virtual keyboard expands.
- **768px / 1024px (Tablet Breakpoint)**:
  - Verify smooth transition between mobile drawer navigation and desktop navbar.
  - Test portrait vs landscape orientation changes without layout breakage or state loss.
- **1440px / 1920px (Desktop)**:
  - Maximum container width constraints (`max-w-7xl`, `max-w-6xl`) prevent line lengths exceeding $80\text{–}90$ characters.
  - Consistent 8-point spatial margins and paddings.
- **2560px+ (Ultrawide / 4K)**:
  - Content remains centrally anchored; backgrounds stretch seamlessly without visible repetition or clipping seams.

---

## 3. Visual Contrast & Design Token Auditing

### WCAG 2.1 / 2.2 Contrast Formulas:
- **Normal Text (< 18pt / 24px regular or < 14pt / 18.5px bold)**: Minimum **4.5:1** (Level AA) or **7:1** (Level AAA).
- **Large Text ($\ge 18\text{pt}$ or $\ge 14\text{pt}$ bold)**: Minimum **3.0:1** (Level AA) or **4.5:1** (Level AAA).
- **UI Components & Graphical Objects**: Minimum **3.0:1** against adjacent background.

### Dark Mode vs Light Mode Invariants:
- In Dark Mode (`#07070a` / velvet obsidian), primary text must exceed `hsl(0 0% 95%)` for crisp readability; amber accents must maintain $\ge 4.5:1$ against smoked glass panels.
- In Light Mode (`#faf8f5` / champagne ivory), slate text (`#0f172a`) must maintain $\ge 12:1$ contrast ratio.
- Verify Tailwind CSS v4 class toggle: `@custom-variant dark (&:where(.dark, .dark *));` must be present to guarantee dark styles apply regardless of host OS settings.

---

## 4. Keyboard Navigation & Assistive Tech Verification

### Keyboard Navigation Protocol:
1. **Initial Page Load**: Pressing `Tab` immediately reveals a `"Skip to main content"` bypass link.
2. **Tab Flow Order**: Focus moves logically left-to-right, top-to-bottom, matching visual reading hierarchy.
3. **Modal Dialog Focus Trapping**:
   - When a modal opens, focus automatically shifts to the first interactive element or close button inside the modal.
   - Pressing `Tab` cycles exclusively within the modal; focus cannot escape into underlying obscured content.
   - Pressing `Escape` closes the modal.
   - Upon closure, focus seamlessly returns to the exact button that triggered the modal.
4. **Dropdowns & Menus**:
   - `Enter` or `Space` opens the menu.
   - `ArrowDown` / `ArrowUp` navigates menu options.
   - `Escape` dismisses the menu and restores focus to the trigger.

### Screen Reader & ARIA Semantics:
- Every icon-only button must have an explicit `aria-label` (e.g. `<button aria-label="Toggle dark mode">`).
- Expandable accordions and mobile menus must specify `aria-expanded="true|false"` and `aria-controls="panel-id"`.
- Live updates or asynchronous notifications must use `aria-live="polite"` or `role="status"`.
- Never use `role="button"` on a `<div>` without full keyboard handlers (`onKeyDown` for Enter and Space) and `tabIndex={0}`; prefer native `<button>`.

---

## 5. Automated Playwright + axe-core Accessibility Harness

Below is the production-grade TypeScript test suite for automated accessibility and responsive UI verification:

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const VIEWPORTS = [
  { name: 'Mobile SE', width: 320, height: 568 },
  { name: 'Mobile Modern', width: 390, height: 844 },
  { name: 'Tablet Portrait', width: 768, height: 1024 },
  { name: 'Tablet Landscape', width: 1024, height: 768 },
  { name: 'Desktop HD', width: 1440, height: 900 },
  { name: 'Desktop Ultrawide', width: 2560, height: 1440 },
];

test.describe('Automated UI/UX & Accessibility Quality Gate', () => {
  test('Zero WCAG 2.1 AA Violations on Home Page (axe-core)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  for (const vp of VIEWPORTS) {
    test(`Responsive Layout Integrity: ${vp.name} (${vp.width}x${vp.height})`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');

      // Check for zero horizontal layout overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const innerWidth = await page.evaluate(() => window.innerWidth);
      expect(scrollWidth).toBeLessThanOrEqual(innerWidth);

      // Verify touch targets on mobile viewports (< 768px)
      if (vp.width < 768) {
        const smallTouchTargets = await page.evaluate(() => {
          const interactive = Array.from(document.querySelectorAll('button, a, input, select'));
          return interactive.filter((el) => {
            const rect = el.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44);
          }).length;
        });
        expect(smallTouchTargets).toBe(0);
      }
    });
  }

  test('Modal Dialog Keyboard Trapping & Restoration', async ({ page }) => {
    await page.goto('/');
    const trigger = page.getByRole('button', { name: /view project|details|open/i }).first();
    
    if (await trigger.isVisible()) {
      await trigger.focus();
      await trigger.press('Enter');

      const dialog = page.getByRole('dialog');
      await expect(dialog).toBeVisible();

      // Press Escape to dismiss
      await page.keyboard.press('Escape');
      await expect(dialog).toBeHidden();

      // Focus must be restored to original trigger
      await expect(trigger).toBeFocused();
    }
  });
});
```
