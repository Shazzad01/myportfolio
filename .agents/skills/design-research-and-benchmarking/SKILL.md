---
name: design-research-and-benchmarking
description: Use when researching modern visual designs, exploring color harmonies, extracting cubic-bezier curves, or benchmarking UI patterns against industry leaders (Linear, Raycast, Stripe, Framer, Awwwards) before building or styling components.
---

# Online Design Research & Inspiration Benchmarking

This skill provides a systematic protocol for researching world-class visual design patterns, curating modern color harmonies, discovering interaction physics, and benchmarking user interfaces against industry gold standards (Linear, Raycast, Stripe, Framer, Vercel, Awwwards, Mobbin).

---

## 1. When to Conduct Design Research

Execute this workflow **proactively** before writing UI code whenever:
- Designing a new major component (hero artwork, interactive terminal, pricing card, navigation bar, timeline).
- Refining or creating a color palette or dark/light theme tokens.
- Choreographing entrance, exit, or gesture micro-interactions.
- Restructuring information architecture or data telemetry cards.

---

## 2. The 3-Phase Inspiration Research Protocol

```
 ┌────────────────────────┐     ┌────────────────────────┐     ┌────────────────────────┐
 │   1. TARGET INQUIRY    │ ──> │  2. BENCHMARK AUDIT    │ ──> │ 3. TOKEN TRANSLATION   │
 │ Define UI job, mood &  │     │ Search live web,       │     │ Extract hex codes,     │
 │ user interaction needs │     │ inspect leading systems│     │ spring configs & layout│
 └────────────────────────┘     └────────────────────────┘     └────────────────────────┘
```

### Phase 1: Target Inquiry & Semantic Framing
Define the visual problem in exact terms:
- **Design Job**: What is the primary message or action of this screen/widget?
- **Atmosphere & Tone**: (e.g. *Precision engineering, obsidian luxury, warm champagne highlights, tactile developer tool*).
- **Core Visual Anchor**: What single element earns the user's immediate focus?

### Phase 2: Live Benchmark Search
Use `search_web` with targeted query formulas:

| Research Objective | Target Benchmarks | Recommended Search / Exploration Method |
|:---|:---|:---|
| **Minimalist Portfolios & Layouts** | Minimal Gallery (`minimal.gallery/tag/portfolio/`) | Browser exploration of live portfolio templates, typography pairings & negative space |
| **Section Architecture & Heros** | Unsection (`unsection.com/category/hero-section-design`) | Deconstruct hero layouts, interactive widget frames & bento grids |
| **Editorial & Work Directories** | siteInspire (`siteinspire.com/websites/category/portfolio`) | Inspect clean card spacing, monochrome contrast & directory lists |
| **Dark Mode Palettes** | Linear, Raycast, Vercel | `"<keyword> dark mode UI color tokens palette linear raycast"` |
| **Glassmorphism & Refraction** | Apple macOS, iOS, Stripe | `"modern glassmorphism CSS backdrop-filter border highlight specular"` |
| **Motion & Micro-interactions** | Framer, Awwwards, Rauno | `"Framer Motion spring physics transition interactive card rauno"` |
| **Data Telemetry / Widgets** | Datadog, Supabase, GitHub | `"developer telemetry dashboard UI component design system"` |
| **Mobile Ergonomics** | Mobbin, iOS Human Interface | `"mobile touch targets thumb zone ergonomics navigation design"` |

### Phase 3: Token Translation & Synthesis
Never copy blindly. Distill research findings into project-native tokens:
1. **Palette**: Convert extracted colors to HSL and test against dark background (`#07070a`) for $\ge 4.5:1$ contrast.
2. **Motion**: Map visual easing to Framer Motion spring physics (`stiffness`, `damping`, `mass`).
3. **Layout**: Translate visual hierarchy to an 8-point spatial cadence.

---

## 3. Curated World-Class Benchmark Reference

### Color Harmonies (Velvet Obsidian & Champagne Gold)
- **Obsidian Dark Surface**:
  - Base Background: `hsl(240 18% 3%)` (`#07070a`)
  - Elevated Card: `hsl(240 12% 7% / 0.7)` (`rgba(16, 16, 21, 0.7)`) with `backdrop-blur-xl`
  - Subtle Border Highlight: `rgba(255, 255, 255, 0.08)` or `rgba(245, 158, 11, 0.15)`
- **Champagne Gold Accents**:
  - Primary Glow: `#f59e0b` (Amber 500)
  - Bright Highlight: `#fbbf24` (Amber 400)
  - Subtle Ambient Bloom: `rgba(245, 158, 11, 0.12)`
- **Champagne Ivory Light Surface**:
  - Base Canvas: `#faf8f5`
  - High-Contrast Slate: `#0f172a`
  - Warm Card Surface: `#ffffff` with `border-amber-200/50`

### Kinematic Spring Curves
- **Snappy Tactile** (Buttons, Pills, Tab Selectors):
  ```ts
  { type: "spring", stiffness: 400, damping: 30 }
  ```
- **Fluid Layout** (Modals, Swapped Views, Expansion):
  ```ts
  { type: "spring", stiffness: 300, damping: 35 }
  ```
- **Gentle Settle** (Page Hero Reveals, Staggered Cards):
  ```ts
  { type: "spring", stiffness: 220, damping: 28 }
  ```
- **CSS Cubic-Bezier Equivalent**:
  ```css
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  ```

---

## 4. Benchmark Synthesis Template

Before drafting code for a complex UI element, document the findings in the design notes or task plan using this structure:

```markdown
### Benchmark Synthesis: [Component Name]
- **Inspiration Source**: [e.g. Linear project card / Stripe terminal / Raycast command palette]
- **Visual Anchor**: [Single dominant focal point]
- **Color Tokens**:
  - Base: `#07070a`
  - Accent: `#f59e0b`
  - Specular Border: `rgba(255,255,255,0.08)`
- **Interaction Physics**: Spring `{ stiffness: 380, damping: 30 }` with hover scale `1.02`
- **Accessibility & Contrast**: Measured text contrast ratio `7.8:1` (WCAG AAA compliant)
```
