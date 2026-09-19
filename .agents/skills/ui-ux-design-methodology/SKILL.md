---
name: ui-ux-design-methodology
description: End-to-end UI/UX design methodology, 20-year cognitive ergonomics (Fitts's/Hick's/Miller's Law), information architecture, design systems, component state matrices, and design-to-QA handoff standards.
---

# UI/UX Design Methodology & Cognitive Ergonomics

This skill defines the end-to-end product design process, establishing senior-level UI/UX standards for researching, structuring, styling, prototyping, and validating modern web applications with 20+ years of cognitive ergonomics and user-centered craft.

---

## 1. 20-Year UX Cognitive Ergonomics & Laws

Great interface design is rooted in human perception, cognitive limits, and motor dexterity. Every layout and interaction must be governed by these fundamental laws:

### Fitts's Law (Target Acquisition & Reachability)
$$T = a + b \log_2 \left(\frac{2D}{W}\right)$$
- **Distance ($D$) & Size ($W$)**: The time required to rapidly move to a target area is a function of the ratio between distance to the target and the width of the target.
- **Rules of Application**:
  - Touch targets must never be smaller than $44 \times 44\text{px}$ on mobile viewports.
  - Critical action buttons (CTA, Submit, Next) must be positioned in natural thumb-reach zones (bottom half of mobile screens).
  - Pin frequently used controls to edges or corners (infinite virtual width in desktop mouse movement).

### Hick's Law (Decision Latency Reduction)
$$T = b \log_2 (n + 1)$$
- **Choice Architecture**: The time it takes to make a decision increases logarithmically with the number and complexity of choices ($n$).
- **Rules of Application**:
  - Limit primary actions to exactly **one dominant CTA per screen/view**.
  - Secondary choices should be visually subordinate (ghost buttons, text links).
  - Break complex multi-field forms into sequential, progressive disclosure steps.

### Miller's Law (Working Memory Capacity)
- **Cognitive Chunking**: The average human working memory can hold approximately $7 \pm 2$ chunks of information at a time.
- **Rules of Application**:
  - Group related data into cards of 3 to 5 metrics maximum.
  - Format long alphanumeric sequences into digestible chunks (e.g. phone numbers, API keys, tracking codes).
  - Navigation menus must have no more than 5–7 primary top-level destinations.

### Jakob's Law (Familiar Mental Models)
- Users spend most of their time on other sites. They expect your site to work like the ones they already know.
- **Rules of Application**:
  - Place navigation, search, profile, and theme toggles in conventional locations.
  - Do not reinvent standard affordances (links look clickable, form fields look typeable).

---

## 2. The Double Diamond Framework

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
- **User Goals & Personas**: Who is the user? What are their core motivations and friction points?
- **Competitive Benchmarks**: How do market leaders (Linear, Stripe, Apple) address this interaction?
- **Behavioral Signals**: Identify drop-offs, dead clicks, and confusing terminology.

### Phase 2: Define (Information Architecture & User Flows)
- **Information Architecture (IA)**: Group content intuitively with clear taxonomic hierarchy and priority order.
- **User Flows**: Map step-by-step decision trees: `Entry` → `Action` → `Validation` → `Feedback` → `Goal`.
- **Low-Fidelity Wireframes**: Test visual scanning patterns (F-pattern or Z-pattern) without color distraction.

### Phase 3: Develop (Design Systems, Tokens & High-Fidelity UI)
- **8-Point Spatial Grid**: Standardize on `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`.
- **Design Tokens**: Centralize tokens for color palettes, shadows, border-radii, and typography.
- **Atomic Hierarchy**: Atoms → Molecules → Organisms → Templates & Pages.

### Phase 4: Deliver (Handoff & Design QA)
- **Specifications**: Strict parameter definitions (Flexbox / CSS Grid, line-heights, vector SVGs).
- **State Coverage**: Account for all 8 interactive states before sign-off.
- **Design QA Audit**: Cross-verify code against design specs for spacing, typography, contrast, responsiveness, and interaction polish.

---

## 3. Mandatory 8-State Component Matrix & Code Implementations

Every interactive component must explicitly implement all 8 states with robust ARIA attributes:

| # | State | Visual Requirement | Tailwind CSS & ARIA Implementation |
|:---|:---|:---|:---|
| 1 | **Default** | Clear affordance, 8pt alignment | `bg-amber-500 text-slate-950 font-medium` |
| 2 | **Hover** | Subtle elevation, scale ($1.02\times$) | `hover:bg-amber-400 hover:scale-[1.02] transition-transform` |
| 3 | **Focus** | High-contrast visible focus ring | `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2` |
| 4 | **Active** | Tactile depression ($0.98\times$) | `active:scale-[0.98] active:bg-amber-600` |
| 5 | **Disabled** | $50\%$ opacity, suppressed events | `disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none aria-disabled="true"` |
| 6 | **Loading** | Inline spinner or skeleton pulse | `aria-busy="true" role="status"` with animate-pulse |
| 7 | **Error** | Red accent, inline descriptive text | `aria-invalid="true" border-rose-500 focus:ring-rose-500` |
| 8 | **Empty** | Friendly illustration + primary CTA | `role="region" aria-label="No results found"` |

---

## 4. Mobile Ergonomics & Thumb-Zone Mapping

On mobile devices ($375\text{px}$–$430\text{px}$ width):
- **Natural Thumb Zone (Bottom 40% of viewport)**: Primary navigation, filters, submit actions, bottom sheets.
- **Stretch Zone (Middle 30%)**: Secondary scrollable content cards and telemetry.
- **Hard-to-Reach Zone (Top 30%)**: Static headers, status bars, and informational readouts only. Never place primary destruction or confirmation triggers here.

---

## 5. Design-to-SQA Collaboration & Audit Checklist

- [ ] **Visual Hierarchy**: Does the primary action stand out immediately within 3 seconds?
- [ ] **State Completeness**: Are all 8 states (Default, Hover, Focus, Active, Disabled, Loading, Error, Empty) implemented?
- [ ] **Responsive Fluidity**: Does the layout scale seamlessly across 375px (mobile), 768px (tablet), 1024px (desktop), and 1440px+ (wide)?
- [ ] **Touch Targets**: Are all clickable/tappable elements at least $44 \times 44\text{px}$ on touch viewports?
- [ ] **Keyboard Navigation**: Can every interactive element be navigated using `Tab` / `Shift+Tab` and triggered using `Enter` or `Space`?
- [ ] **Focus Visibility**: Is there a clear, high-contrast focus ring when navigating via keyboard?
- [ ] **Edge-Case Resilience**:
  - Extreme text strings (wrapping, truncation with tooltips).
  - Slow network / loading states (skeletons with layout stability, zero Cumulative Layout Shift).
  - API error responses (clear recovery options, retry buttons).
- [ ] **Content Integrity**: Real, authentic content and copy; zero unstyled placeholder text or generic AI filler phrases.
