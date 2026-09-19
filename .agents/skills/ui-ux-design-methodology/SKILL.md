---
name: ui-ux-design-methodology
description: End-to-end UI/UX design methodology, 100 Days of UI/UX master curriculum, 20-year cognitive ergonomics (Fitts's/Hick's/Miller's/Jakob's Law), Top 10 Gestalt principles, 12 visual design principles, Nielsen's 10 usability heuristics, color theory & typography, IA, user research, usability testing, and 9-part case study architecture.
---

# UI/UX Design Methodology & Cognitive Ergonomics (Master Handbook)

This master skill formalizes the complete end-to-end product design discipline—synthesizing the **100 Days of UI/UX** curriculum with 20+ years of human design craft, cognitive ergonomics, spatial systems, and user-centered engineering.

---

## The 100 Days of UI/UX Progression Matrix

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                            100 DAYS OF UI/UX CURRICULUM                          │
├─────────────────────┬──────────────────────┬────────────────────┬────────────────┤
│ PHASE 1: FOUNDATION │ PHASE 2: INTERMEDIATE│ PHASE 3: ADVANCED  │PHASE 4: MASTERY│
│     (Days 1–30)     │     (Days 31–60)     │    (Days 61–80)    │  (Days 81–100) │
├─────────────────────┼──────────────────────┼────────────────────┼────────────────┤
│ • UI vs UX Nuances  │ • Interaction Design │ • Design Systems   │ • UX Portfolio │
│ • User-Centered UCD │ • Micro-interactions │ • Handoff & Specs  │   Architecture │
│ • Affordance/Feedbk │ • Nielsen Heuristics │ • WCAG 2.1/2.2 AA  │ • 9-Part Case  │
│ • Color Theory & 60-│ • User Research      │ • Responsive & i18n│   Studies      │
│   30-10 Psychology  │   (Personas/Empathy) │ • Specializations  │ • Live Projects│
│ • Web Typography    │ • Usability Testing  │   (Mobile/Spatial) │ • Continuous   │
│ • 12 Visual + Top 10│   (SUS/SEQ/Think-Al) │ • Design Thinking  │   Benchmarking │
│   Gestalt Principles│ • IA & Sitemaps      │   (5 Stages)       │ • Human Craft  │
│ • Wireframe/Proto   │ • UX Content/Copy    │                    │   Standards    │
└─────────────────────┴──────────────────────┴────────────────────┴────────────────┘
```

---

## 1. 20-Year UX Cognitive Ergonomics & Laws

Interface design is grounded in human sensory perception, motor constraints, and working memory limits:

### Fitts's Law (Target Acquisition & Reachability)
$$T = a + b \log_2 \left(\frac{2D}{W}\right)$$
- **Application**:
  - Touch targets must never be smaller than $44 \times 44\text{px}$ on touch viewports.
  - Position primary CTAs in thumb-reachable zones (bottom half of mobile screens).
  - Desktop screen edges offer infinite virtual width—pin essential controls to top/bottom edges or fixed corners.

### Hick's Law (Decision Latency Reduction)
$$T = b \log_2 (n + 1)$$
- **Application**:
  - Limit primary actions to **one dominant CTA per screen view**.
  - Visually subordinate secondary options (ghost buttons, text links).
  - Break complex multi-field workflows into progressive disclosure steps.

### Miller's Law (Working Memory Capacity)
- Humans can hold $7 \pm 2$ chunks of information at once.
- **Application**:
  - Group related data cards into clusters of 3 to 5 metrics maximum.
  - Chunk alphanumeric strings (e.g. phone numbers, tracking IDs, verification keys).
  - Top-level navigation menus must have at most 5–7 primary destinations.

### Jakob's Law (Familiar Mental Models)
- Users spend most of their time on other websites. They expect your product to operate by industry conventions.
- **Application**:
  - Place navigation, search, profile, and theme toggles in conventional locations.
  - Preserve standard affordances (links look clickable, inputs look typeable).

---

## 2. Top 10 Gestalt Principles of Visual Perception

The brain unifies individual visual elements into structured wholes based on perceptual grouping:

| # | Gestalt Principle | Perceptual Behavior | UI Implementation Invariant |
|:---|:---|:---|:---|
| 1 | **Proximity** | Objects near each other are perceived as a related group. | Form labels sit closer to their respective input fields ($4\text{--}8\text{px}$) than to adjacent fields ($16\text{--}24\text{px}$). |
| 2 | **Similarity** | Elements sharing color, shape, or typography share the same role. | All primary CTA buttons share uniform background and font weight; secondary actions share ghost styling. |
| 3 | **Continuity** | The eye follows smooth paths, lines, and progressive sequences. | Step indicators, timeline connectors, and horizontal carousel peeks indicate continuous scrollable content. |
| 4 | **Closure** | The brain fills in missing visual information to complete a shape. | Icons with intentional negative cutouts; carousel cards cropped at screen edges indicating more content. |
| 5 | **Figure / Ground** | Foreground interactive elements must distinctly detach from background. | Modals, drawers, and floating toolbars use elevated shadows (`shadow-xl`) and backdrop dimming (`backdrop-blur-md`). |
| 6 | **Common Region** | Elements enclosed within an explicit boundary belong together. | Cards with subtle borders (`border-white/10`) and background fills encapsulate heterogeneous data into a unified card. |
| 7 | **Focal Point** | The element with the strongest visual contrast captures initial attention. | Glowing amber accent border or solid primary button immediately draws the eye before secondary elements. |
| 8 | **Symmetry & Order** | Symmetrical layouts communicate stability, harmony, and trustworthiness. | Hero sections and pricing grids maintain symmetrical balance; asymmetrical badges create intentional focal points. |
| 9 | **Prägnanz (Simplicity)** | The human mind organizes ambiguous stimuli into the simplest possible form. | Reduce cognitive clutter; replace dense tables with clean, scannable metric tiles. |
| 10 | **Common Fate** | Elements that move in the same direction at the same velocity are related. | Accordion expansion, list reordering, and tab transitions slide together in synchronized spring motion. |

---

## 3. The 12 Principles of Visual Design

Every high-grade interface balances these 12 core visual disciplines:
1. **Balance**: Equilibrium between visual weights (symmetrical for stability, asymmetrical for dynamic energy).
2. **Contrast**: Noticeable distinction between elements (color, scale, weight) to establish readability and hierarchy.
3. **Emphasis**: Intentional dominance given to the focal point (one primary action per view).
4. **Movement**: Visual rhythm that guides the user's eye across the page (Z-pattern for landing pages, F-pattern for text).
5. **Pattern**: Reusable visual conventions that build muscle memory across pages.
6. **Rhythm**: Repeating intervals of spacing, typography, and color creating spatial harmony.
7. **Unity**: All elements feel like they belong to the exact same bespoke product family.
8. **Variety**: Thoughtful variation (chips, icons, data metrics) preventing visual monotony without breaking unity.
9. **Proportion**: Sizing elements relative to their true structural importance (headings vs. captions).
10. **Hierarchy**: Ordering information so that readers digest the most critical message within 3 seconds.
11. **Repetition**: Consistent reuse of tokenized design elements (border radii, hover elevations).
12. **Alignment**: Every element aligns to a clear visual axis on the 8-point spatial grid.

---

## 4. Color Theory, Psychology & The 60-30-10 Engine

Color is not decoration; it is functional communication and emotional tone.

### The 60-30-10 Spatial Ratio
- **60% Dominant Base**: Background surface canvas (e.g. Velvet Obsidian `#07070a` or Champagne Ivory `#faf8f5`).
- **30% Structural Secondary**: Cards, headers, borders, and input surfaces (`#0e0e14`, `rgba(255,255,255,0.06)`).
- **10% High-Chroma Accent**: Primary CTAs, active indicators, status badges (`#f59e0b` Champagne Amber). Never let high-chroma colors exceed 10% of the viewport area.

### 6 Color Harmonies
1. **Monochromatic**: Variations in lightness and saturation of a single hue (clean, sophisticated).
2. **Analogous**: Adjacent hues on the 360° color wheel (harmonious, natural transitions).
3. **Complementary**: Opposites on the color wheel (maximum visual pop; e.g. Amber and Deep Blue).
4. **Split-Complementary**: Base hue paired with the two colors adjacent to its complement (vibrant yet balanced).
5. **Triadic**: Three colors evenly spaced 120° apart (playful, energetic—use with strict tint/shade control).
6. **Tetradic (Double Complementary)**: Two complementary pairs (rich, complex—requires one dominant hue).

### Psychological Resonance Matrix
- **Blue / Cyan**: Trust, security, enterprise stability, data integrity.
- **Amber / Gold**: Warmth, prestige, precision, focused optimism.
- **Emerald / Green**: Health, success, verified state, positive delta.
- **Rose / Red**: Critical urgency, destructive actions, error states.
- **Obsidian / Slate**: Restraint, focus, luxury, modern architectural depth.

---

## 5. Web Typography Engineering

Typography establishes 90% of web communication:
- **Measure (Line Length)**: Optimal body line length is **45 to 75 characters** (`65ch`). Shorter strains eye return; longer induces line tracking fatigue.
- **Leading (Line Height)**:
  - Display & H1 Headings: `1.1` to `1.25` (tight, cohesive).
  - Body Copy: `1.5` to `1.65` (breathable, legible).
  - Captions & Compact Labels: `1.2` to `1.35`.
- **Typographic Scale**: Adhere to geometric ratios:
  - *Minor Third ($1.20$)*: Subtle, dense information dashboards.
  - *Major Third ($1.25$)*: Balanced, editorial and modern web portfolios.
  - *Perfect Fourth ($1.333$)*: High-impact marketing pages.
- **Font Pairing Architecture**: Pair an expressive, authoritative heading typeface (**Outfit**) with a crisp, neutral, highly legible body typeface (**Inter**). Never exceed 2 font families on a single product.

---

## 6. Nielsen Norman Group 10 Usability Heuristics

Every interface must be audited against Nielsen's 10 foundational heuristics:

| # | Heuristic | UI Requirement | Anti-Pattern to Eliminate |
|:---|:---|:---|:---|
| 1 | **Visibility of System Status** | Provide instant visual feedback ($<100\text{ms}$) for every interaction; show real-time progress bars or spinners for async operations. | Silent network requests leaving user wondering if click registered. |
| 2 | **Match System & Real World** | Use natural, human-friendly language, familiar icons, and real-world conceptual models. | Exposing raw database IDs, cryptic server stack traces, or developer jargon. |
| 3 | **User Control & Freedom** | Provide clear "emergency exits"—Undo, Cancel, Back, and `Esc` key dismissals on all modals/sheets. | Trapping users in unclosable modals or irreversible destructive actions. |
| 4 | **Consistency & Standards** | Follow platform and web conventions (Jakob's Law); identical actions must behave identically across all pages. | Inverting button roles between views or inventing proprietary navigation metaphors. |
| 5 | **Error Prevention** | Eliminate error-prone conditions; confirm destructive actions; constrain inputs using date pickers or masked inputs. | Allowing invalid form submission before flagging errors that could have been prevented. |
| 6 | **Recognition Over Recall** | Make elements, actions, and options visible; do not require users to remember information from previous steps. | Multi-step checkouts hiding cart contents or order summary. |
| 7 | **Flexibility & Efficiency** | Accommodate both novices and experts; provide keyboard shortcuts (`Cmd+K`, `Tab`) and accelerators. | Forcing power users through repetitive multi-click mouse-only workflows. |
| 8 | **Aesthetic & Minimalist Design** | Eliminate superfluous clutter; every piece of content must support the user's immediate decision. | Dense walls of promotional fluff or redundant badge soup that dilutes core signals. |
| 9 | **Help Recognize & Recover From Errors** | Error messages must state: 1) What happened, 2) Why it happened, and 3) How to resolve it in plain language. | Vague errors like *"Something went wrong"* or *"Error code 500"*. |
| 10 | **Help & Documentation** | Provide contextual inline tooltips, searchable FAQs, and proactive hints at point of friction. | Burying critical field requirements in deep external documentation links. |

---

## 7. User Research, Empathy & Information Architecture (IA)

### Qualitative vs. Quantitative Research Matrix
- **Qualitative (Why & How)**: In-depth 1-on-1 user interviews, contextual inquiries, diary studies, usability observation. Uncovers mental models, emotional roadblocks, and unarticulated needs.
- **Quantitative (How Many & How Much)**: Analytics telemetry, funnel conversion rates, heatmap click tracking, A/B testing, structured Likert surveys. Validates statistical significance of behaviors.

### 4-Quadrant Empathy Map
Ground every persona in real observed behavioral quadrants:
```
┌──────────────────────────────┬──────────────────────────────┐
│           SAYS               │           THINKS             │
│ Direct verbal user quotes    │ Internal thoughts, doubts    │
│ e.g., "I need fast results." │ e.g., "Is my data secure?"   │
├──────────────────────────────┼──────────────────────────────┤
│           DOES               │           FEELS              │
│ Physical actions & clicks    │ Emotional state & anxiety    │
│ e.g., Scans hero in 3 secs.  │ e.g., Overwhelmed by forms.  │
└──────────────────────────────┴──────────────────────────────┘
```

### Information Architecture (IA) Taxonomy Models
1. **Hierarchical (Tree)**: Top-down structured directory (Home $\rightarrow$ Category $\rightarrow$ Sub-category $\rightarrow$ Detail).
2. **Sequential (Step-by-Step)**: Linear progression for wizard checkouts, onboarding, or audits.
3. **Matrix**: High-dimensional content discovered via multidirectional tags and faceted filtering.
4. **Flat / Organic**: Single-level or freeform exploration common in modern portfolio landing hubs.

### Card Sorting Protocols
- **Open Card Sorting**: Users organize cards into self-named groups (used for generative IA discovery).
- **Closed Card Sorting**: Users sort cards into predefined categories (used for evaluative IA validation).
- **Hybrid**: Users sort into predefined categories but can create new ones if needed.

### Content Strategy & UX Microcopy
- **Action-Oriented CTAs**: Use strong verb-first formulations (*"Download Playwright Specs"*, *"Explore Live Showcase"* instead of *"Click Here"* or *"More"*).
- **Progressive Disclosure**: Surface essential core data first; offer deep telemetry behind click-to-expand details.
- **3-Part Error Architecture**:
  1. *Condition*: "Your automation script failed at step 4."
  2. *Cause*: "The locator `#submit-btn` was not visible within 5000ms."
  3. *Action*: "Check element visibility or increase timeout threshold."

---

## 8. Usability Testing & UX Telemetry Metrics

Never guess usability; measure it empirically:

### Testing Methods
- **Think-Aloud Protocol**: User narrates thoughts continuously while attempting realistic task scenarios.
- **Moderated Remote Testing**: Facilitator observes screen share, asks follow-up probing questions.
- **Unmoderated Remote Testing**: Automated task runs via testing platforms measuring quantitative completion.

### Key Quantitative UX Telemetry
- **Task Success Rate (TSR)**:
  $$\text{TSR} = \frac{\text{Successful Task Completions}}{\text{Total Task Attempts}} \times 100\% \quad (\text{Target} \ge 85\%)$$
- **Time on Task (ToT)**: Average seconds required to reach the successful outcome state.
- **Single Ease Question (SEQ)**: Post-task single question: *"Overall, how easy was this task?"* (1 = Very Difficult to 7 = Very Easy; Target $\ge 5.5$).
- **System Usability Scale (SUS)**: 10-item standard Likert questionnaire generating a 0–100 score.
  - $< 68$: Below average (critical redesign needed).
  - $68\text{--}80$: Good usability.
  - $> 80$: World-class experience (A-grade).

---

## 9. Design Systems, Atomic Architecture & Developer Handoff

### 3-Tier Design Token Hierarchy
1. **Tier 1: Global / Primitive Tokens**: Pure values with zero context (`--color-amber-500: #f59e0b`).
2. **Tier 2: Semantic / System Tokens**: Role-bound intent (`--surface-card: var(--color-slate-900)`, `--action-primary: var(--color-amber-500)`).
3. **Tier 3: Component-Scoped Tokens**: Isolated component overrides (`--btn-primary-bg: var(--action-primary)`).

### Atomic Design Staging
- **Atoms**: Basic HTML primitives with design tokens (colors, font tokens, icons, button labels).
- **Molecules**: Simple functional groups (Search input + Submit button; Metric chip + Tooltip).
- **Organisms**: Complex discrete UI sections (Navbar, Terminal simulator card, Experience timeline block).
- **Templates**: Page-level wireframe structures with spatial slot definitions.
- **Pages**: Production views populated with real, authentic content and live state.

### Developer Handoff Zero-Drift Standards
- **Figma Auto-Layout Parity**: Match Figma Auto-Layout parameters 1:1 with CSS Flexbox (`gap`, `padding`, `justify-between`, `items-center`).
- **CSS Grid Specifications**: Explicit `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` to avoid fixed-width breakpoint glitches.
- **Code Connect & Token Naming**: Ensure token names in design tools match Tailwind variables and CSS classes identically (`bg-surface-card`, `text-content-primary`).

---

## 10. Advanced Inclusive Design & Standards

### WCAG 2.1/2.2 AA & AAA Standards (POUR)
- **Perceivable**:
  - Minimum contrast ratio: $4.5:1$ for normal text, $3:1$ for large text ($\ge 18\text{pt}$ or $\ge 14\text{pt}$ bold) and interactive borders/icons.
  - All images, charts, and diagrams provide clear `alt` text or `aria-label`.
- **Operable**:
  - Complete keyboard navigation (`Tab` forward, `Shift+Tab` backward, `Enter` / `Space` activate, `Esc` dismiss).
  - Unbroken visible focus ring (`focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2`).
  - Touch targets minimum $44 \times 44\text{px}$ on mobile viewports.
- **Understandable**:
  - Consistent navigation across pages; unambiguous form error recovery.
- **Robust**:
  - Semantic HTML5 (`<main>`, `<nav>`, `<section>`, `<article>`, `<button>`); valid ARIA roles (`role="status"`, `aria-expanded`).

### Internationalization (i18n) & Bidirectional Layouts
- **RTL (Right-to-Left) Mirroring**: Use logical CSS properties (`margin-inline-start`, `padding-inline-end`) rather than physical directions (`left`, `right`).
- **Text Expansion Buffers**: German, French, and Russian expand up to $30\text{--}40\%$ relative to English. Never fix button or container widths to rigid pixel sizes; use fluid auto-sizing with min/max bounds.

### Fluid Responsiveness Engine
Always scale typography and layout smoothly across viewports:
$$\text{CSS Clamp} = \text{clamp}(\text{MinSize}, \text{PreferredIntercept} + \text{PreferredSlope} \times 100\text{vw}, \text{MaxSize})$$

### The 5-Stage Design Thinking Framework
1. **Empathize**: Conduct contextual user interviews, observe real pain points, map empathy quadrants.
2. **Define**: Synthesize research into clear problem statements and user journey bottlenecks.
3. **Ideate**: Brainstorm wide divergent solutions; sketch layout alternatives and interaction flows.
4. **Prototype**: Build tangible low-fidelity wireframes and interactive prototypes in Figma.
5. **Test**: Put prototypes in front of real users, run think-aloud sessions, measure SUS/SEQ, and iterate.

---

## 11. Mandatory 8-State Component Matrix

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

## 12. Mobile Ergonomics & Thumb-Zone Mapping

On mobile viewports ($375\text{px}$–$430\text{px}$):
- **Natural Thumb Zone (Bottom 40% of screen)**: Primary navigation, filter triggers, submit buttons, bottom sheets.
- **Stretch Zone (Middle 30%)**: Scrollable cards, secondary metrics, interactive telemetry.
- **Hard-to-Reach Zone (Top 30%)**: Informational status indicators, logo, breadcrumbs. Never place primary confirmation or destructive actions here.

---

## 13. The 9-Part Master UX Case Study Architecture

When engineering world-class case studies for personal portfolios or product showcases, strictly follow this 9-part narrative architecture:

1. **Header & Executive Summary**:
   - Project title, role, timeline, team structure, platforms, and a compelling 1-sentence value proposition.
2. **The Problem Statement**:
   - The core business challenge and user pain point, backed by baseline quantitative metrics (e.g. high drop-off rate, manual test bottleneck).
3. **User Research & Behavioral Insights**:
   - Target personas, 4-quadrant empathy maps, user quotes, and discovered cognitive barriers.
4. **Constraints & Information Architecture**:
   - Technical, regulatory, or platform constraints; sitemaps and revised user decision flows.
5. **Low-Fidelity Wireframes & Iterative Explorations**:
   - Evolution of layout concepts; what was tested, what failed, and why specific design decisions were made.
6. **High-Fidelity UI & Interactive Prototype**:
   - Pixel-perfect visual designs, 8-state components, design system tokens, and clickable demo links.
7. **Usability Testing & Refinements**:
   - Testing methodology (moderated think-aloud, unmoderated), key findings, and subsequent UI iterations.
8. **Quantified Business Impact & Results**:
   - Hard metrics demonstrating tangible ROI (e.g., $+42\%$ conversion, $-60\%$ onboarding drop-off, $99.4\%$ test pass rate).
9. **Lessons & Retrospective**:
   - Key design takeaways, technical compromises made, and future optimization opportunities.

---

## 14. Design-to-SQA Collaboration & Audit Checklist

- [ ] **Visual Hierarchy**: Does the primary action stand out within 3 seconds of scanning?
- [ ] **Top 10 Gestalt Laws**: Are proximity, similarity, common region, and focal points visibly respected?
- [ ] **Color Discipline (60-30-10)**: Is base canvas 60%, structural surface 30%, and accent $\le 10\%$?
- [ ] **Nielsen Heuristics**: Are system status visible, error recovery actionable, and user control unobstructed?
- [ ] **State Completeness**: Are all 8 states (Default, Hover, Focus, Active, Disabled, Loading, Error, Empty) implemented?
- [ ] **Responsive Fluidity**: Does the layout scale seamlessly from 320px to 4K without horizontal overflow?
- [ ] **Touch Targets**: Are all interactive elements at least $44 \times 44\text{px}$ on touch screens?
- [ ] **Keyboard Navigation**: Can every interactive element be operated using `Tab` / `Shift+Tab` and `Enter` / `Space`?
- [ ] **Focus Visibility**: Is there a visible, high-contrast focus ring on keyboard focus?
- [ ] **Edge-Case Resilience**:
  - Long string wrapping and graceful truncation.
  - Zero Cumulative Layout Shift (CLS) during skeleton loading.
  - Actionable error recovery and retry states.
- [ ] **Content Integrity**: Authentic, real-world data and copy; zero generic AI placeholder filler text.

---

## 15. The 5-Step UX & 4-Pillar UI Architecture (Figma Foundation)

### The 4 Pillars of UI Design
1. **Visual Hierarchy**: Guide the user's eye naturally using scale (Outfit headings vs. Inter body), font weights (700 -> 500 -> 400), and color chroma (10% accent vs. 60% base).
2. **Consistency & Predictability**: Zero arbitrary margins; align strictly to the 8-point spatial grid and 3-tier design token system.
3. **Accessibility**: High contrast (WCAG AA 4.5:1 body, 3:1 graphical), clear focus rings, and full screen-reader ARIA labeling.
4. **Responsiveness**: Fluid layout scaling from 375px mobile to 1440px+ desktop without horizontal scroll or truncated critical controls.

### The 5 Steps of UX Execution
1. **Research & Empathy**: Uncover true user problems via JTBD (Jobs-to-be-Done) and competitive benchmarks.
2. **Information Architecture**: Structure content taxonomies, hierarchical sitemaps, and chunked cards (Miller's Law 7±2).
3. **Wireframing**: Establish spatial balance and scanning patterns (F-pattern / Z-pattern) without aesthetic distractions.
4. **Prototyping & Micro-Interactions**: Wire interactive state transitions, physics-based springs, and tactile feedback.
5. **Usability Validation**: Stress-test interfaces with real users against Task Success Rate (TSR) and Time on Task (ToT).

---

## 16. UX Validation & Edge-Case Stress Testing Protocols

Never validate only the "happy path". Before shipping any UI, stress-test these 4 real-world edge-case dimensions:
1. **Content Density Stress Test**: Test components with 200-character strings, multi-line titles, and localized text expansion (German/French 30% longer text strings).
2. **System State Completeness**: Explicitly build and test Zero-Data (Empty), Loading (Skeleton), Timeout, and Error (500/404) states.
3. **Interaction Stress Test**: Verify rapid clicking (idempotency, debounce), keyboard-only tab navigation, and focus restoration.
4. **Interaction vs. Concept Validation**:
   - *Concept Validation*: Validates whether the solution solves a real problem for the user.
   - *Interaction Validation*: Validates whether the UI controls, state logic, and feedback respond predictably under real system conditions.
