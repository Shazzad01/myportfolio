---
name: ui-ux-design-methodology
description: End-to-end UI/UX design methodology, user experience research, information architecture, design systems, component state matrices, and design-to-QA handoff standards.
---

# UI/UX Design Methodology & Workflow

This skill defines the end-to-end product design process, establishing professional UI/UX standards for researching, structuring, styling, prototyping, and validating modern web applications and user interfaces.

---

## 1. The Double Diamond Framework

Every UI/UX feature or redesign must progress through four structured phases:

```
   DISCOVER           DEFINE            DEVELOP           DELIVER
  (UX Research)   (Architecture)     (UI & Systems)    (Handoff & QA)
 ┌─────────────┐  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
 │ User Needs  │  │ User Flows  │   │ Design Token│   │ Figma Specs │
 │ Pain Points │─>│ Wireframes  │──>│ Components  │──>│ Dev Handoff │
 │ Competitors │  │ Information │   │ Interactive │   │ Design QA   │
 │ Analytics   │  │ Hierarchy   │   │ Prototypes  │   │ Audit       │
 └─────────────┘  └─────────────┘   └─────────────┘   └─────────────┘
```

### Phase 1: Discover (UX Research & Strategy)
Before writing any code or drawing components, establish the problem context:
- **User Goals & Personas**: Who is the target user? What are their core motivations and friction points?
- **Competitive Analysis**: How do leading platforms solve similar interaction challenges?
- **Data & Behavioral Signals**: Audit current friction points, drop-offs, heatmaps, and confusing terminology.
- **Problem Statement**: Articulate what user friction is being removed and what value is delivered.

### Phase 2: Define (Information Architecture & User Flows)
Structure content logically before visual styling:
- **Information Architecture (IA)**: Group content intuitively with clear taxonomic hierarchy and priority order.
- **User Flows**: Map step-by-step decision trees:
  `Entry Point` → `Action / Input` → `Validation & Decision` → `Feedback` → `Goal Completion`.
- **Low-Fidelity Wireframing**: Validate structural layouts, reading order, and visual scanning patterns (F-pattern or Z-pattern) without being distracted by color or ornamentation.

### Phase 3: Develop (Design Systems, Tokens & High-Fidelity UI)
Craft production-ready interface systems:
- **Spatial Grid System**: Standardize on an 8-point spatial grid (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`) for margins, padding, and layout gaps.
- **Design Tokens**: Centralize design tokens for color palettes, elevation/shadows, border-radii, and typography.
- **Atomic Hierarchy**:
  - *Atoms*: Colors, typography tokens, icons, buttons, raw inputs.
  - *Molecules*: Search input with icon, labeled form control, stat counter widget.
  - *Organisms*: Navigation bar, project showcase card, contact form, modal dialog.
  - *Templates & Pages*: Cohesive, responsive page layouts.
- **Interactive Prototyping**: Build realistic interactions with spring physics, micro-interactions, and visual feedback for every user touchpoint.

### Phase 4: Deliver (Handoff & Design QA)
Ensure seamless translation from design to production:
- **Design Specifications**: Inspectable layout parameters (Flexbox / CSS Grid), typography sizes, line-heights, and exact vector SVG exports.
- **State Coverage**: Account for all interactive states and edge cases before engineering sign-off.
- **Design QA Audit**: Cross-verify built code against design specs for spacing, typography, contrast, responsiveness, and interaction polish.

---

## 2. Mandatory Component State Matrix

Every interactive element (button, card, input, dropdown, modal, toggle) must explicitly account for all **8 Core UI States**:

| # | State | Visual & Behavioral Requirement | Accessibility / Code Signal |
|:---|:---|:---|:---|
| 1 | **Default / Idle** | Clean base appearance with obvious affordance and visual hierarchy. | Natural resting state |
| 2 | **Hover** | Subtle elevation, color tint, or scale lift ($1.02\times$) indicating interactive potential. | `:hover` / `whileHover` |
| 3 | **Focus / Keyboard** | High-contrast visible focus ring ($\ge 2\text{px}$ offset) for keyboard accessibility. | `:focus-visible`, WCAG 2.4.7 |
| 4 | **Active / Pressed** | Visual depression or inset feedback ($0.98\times$ scale or darkened background). | `:active` / `whileTap` |
| 5 | **Disabled / Inactive** | De-emphasized styling ($50\%$ opacity), `cursor-not-allowed`, interactions suppressed. | `disabled`, `aria-disabled="true"` |
| 6 | **Loading / Busy** | Skeleton placeholder or inline spinner; disable double submissions. | `aria-busy="true"`, `role="status"` |
| 7 | **Error / Invalid** | Distinct error border/accent, inline human-readable message (never rely on color alone). | `aria-invalid="true"`, `aria-describedby` |
| 8 | **Empty State** | Meaningful empty state illustration or icon, friendly copy, and primary action CTA. | Prompts user onboarding/action |

---

## 3. Visual & Interaction Design Standards

### Typography Hierarchy & Readability
- **Type Scale**: Maintain strict typographic hierarchy (e.g., Display `3rem+`, H1 `2.25rem`, H2 `1.75rem`, H3 `1.25rem`, Body `1rem`, Caption `0.875rem`).
- **Font Pairing**: Limit to 1–2 distinct font families (e.g., Outfit for geometric headings + Inter for clean body reading).
- **Line Length & Leading**: Keep body line lengths under 80 characters for optimal legibility; line-height $\ge 1.5$ for body, $1.1$–$1.2$ for large headings.

### Color Theory & Contrast Standards
- **Semantic Palette**: Use semantic tokens (`surface-base`, `surface-raised`, `primary`, `accent`, `border-muted`, `destructive`, `success`).
- **Contrast Ratios**: Strict adherence to WCAG 2.1 AA standards:
  - Text to background: $\ge 4.5:1$ (normal text) and $\ge 3.0:1$ (large text $\ge 18\text{pt}$ / $24\text{px}$).
  - UI components and graphical objects: $\ge 3.0:1$.
- **Information Redundancy**: Never convey information using color alone; always pair color with icons, text labels, or distinct patterns.

### Motion & Micro-Interactions
- **Purpose-Driven Motion**: Animate with intent (directional feedback, state changes, status confirmations).
- **Timing & Easing**: Use 150ms–300ms transitions with natural spring physics or `cubic-bezier(0.16, 1, 0.3, 1)`. Avoid sluggish animations (>500ms).
- **Reduced Motion**: Respect system accessibility preferences (`prefers-reduced-motion: reduce`).

---

## 4. Design-to-SQA Collaboration & Audit Checklist

Use this checklist during feature development, code reviews, and UI/UX audits:

- [ ] **Visual Hierarchy**: Does the primary action stand out immediately within 3 seconds?
- [ ] **State Completeness**: Are all 8 states (Default, Hover, Focus, Active, Disabled, Loading, Error, Empty) implemented?
- [ ] **Responsive Fluidity**: Does the layout scale seamlessly across 375px (mobile), 768px (tablet), 1024px (small desktop), and 1440px+ (wide)?
- [ ] **Touch Targets**: Are all clickable/tappable elements at least $44 \times 44\text{px}$ on touch viewports?
- [ ] **Keyboard Navigation**: Can every interactive element be navigated using `Tab` / `Shift+Tab` and triggered using `Enter` or `Space`?
- [ ] **Focus Visibility**: Is there a clear, high-contrast focus ring when navigating via keyboard?
- [ ] **Edge-Case Resilience**:
  - Extreme text strings (wrapping, truncation with tooltips).
  - Slow network / loading states (skeletons with layout stability, zero Cumulative Layout Shift).
  - API error responses (clear recovery options, retry buttons).
- [ ] **Content Integrity**: Real, authentic content and copy; no unstyled placeholder text or generic AI filler phrases.
