---
name: figma-design-basics
description: Use when designing user interfaces, structuring 3-tier design tokens, configuring 8-state interactive components, executing user-centered design (UCD) validation, or applying Figma web typography, color harmony, and enterprise design system standards.
---

# Figma Design Basics & Enterprise UI/UX Engineering

## Overview

UI/UX is not superficial styling or arbitrary decoration. It is the disciplined intersection of human cognitive ergonomics, systematic design token architecture, and measurable user task efficiency. 

This skill formalizes the complete knowledge corpus of Figma's Design Basics library—synthesizing 19 core domains into production-grade design systems, token hierarchies, component states, and validation protocols for senior software engineers and architects.

---

## When to Use

### Triggers & Symptoms
- Building or refactoring modern web application interfaces, design systems, or component libraries.
- Establishing or standardizing CSS variables, Tailwind tokens, or Figma Variables.
- Designing interactive controls (buttons, inputs, toggles) requiring unambiguous visual affordances and accessibility.
- Conducting User-Centered Design (UCD) discovery, concept validation, or interaction stress-testing.
- Architecting high-converting pricing tables, landing pages, or multi-step onboarding flows.
- Auditing web interfaces for WCAG 2.1/2.2 AA contrast compliance, typographic rhythm, or 50ms first-impression ergonomics.

### When NOT to Use
- Pure backend API or database schema tasks with zero presentation layer.
- One-off shell scripts or infrastructure configurations unrelated to user-facing telemetry.

---

## Quick Reference: The 19 Figma Design Pillars

| # | Domain | Core Principle / Quantitative Invariant | Primary Deliverable / Spec |
|:---|:---|:---|:---|
| 1 | **UI vs. UX** | UI is the tangible interactive surface; UX is the cognitive journey. | 4 UI Pillars & 5 UX Step Framework |
| 2 | **Web Typography** | 45–75 character line measure (`65ch`); 1.4–1.65 body line-height. | 24 Curated Fonts & Pairing Matrix |
| 3 | **Color Harmony** | **60-30-10 Rule**: 60% base, 30% secondary, 10% high-chroma accent. | WCAG AA Contrast (4.5:1 text, 3:1 UI) |
| 4 | **Enterprise Systems** | Centralized, Federated, or Hybrid governance models. | 4 Pillars: Tokens, Components, Docs, Governance |
| 5 | **UCD Taxonomies** | Never design for internal stakeholders; ground in JTBD. | 4-Phase Interview & Review Questions |
| 6 | **Automated Handoff** | Zero semantic gap between design frames and React/HTML. | Figma Dev Mode + Code Connect mapping |
| 7 | **UX Validation** | Concept Validation ("right problem?") vs. Interaction Validation ("reliable behavior?"). | Edge-Case Stress Testing Protocol |
| 8 | **Product Design** | Balances User Needs, Business Viability, and Technical Feasibility. | 5-Step Lifecycle (Goal → Research → Launch) |
| 9 | **Design Tokens** | 3-tier hierarchy: Global/Primitive → Semantic/System → Component. | Multi-mode Figma Variables & CSS tokens |
| 10 | **Pricing Architecture** | Hick's Law: 3–4 tiers max; annual discount badges; social proof. | 9 Conversion Engineering Laws |
| 11 | **2026 UI Trends** | Spatial navigation, smoked glassmorphism 2.0, functional motion. | Micro-Interaction & Navigation Specs |
| 12 | **Button States** | 8-State Spectrum: Default, Hover, Focus, Active, Disabled, Loading, Error, Success. | Production CSS & ARIA Component Matrix |
| 13 | **PM UX Metrics** | Connect interaction quality directly to business retention and ROI. | TSR, ToT, SEQ, SUS, and NPS telemetry |
| 14 | **AI Interfaces** | Floating generative prompts, streaming text physics, split canvas. | Multimodal Copilot UI Patterns |
| 15 | **Interactive Controls** | Real-time parametric sliders, reactive cards, mobile drawers. | Gesture & Responsive Reflow Specs |
| 16 | **Vibe Coding** | 4-step loop: Map logic → Precision prompt → Stress test → Bridge code. | AI-Assisted Prototyping Workflow |
| 17 | **Landing Pages** | 7-section structure: Hero → Social Proof → Problem/Solution → Bento → Demo → Testimonials → CTA. | High-Conversion Section Layouts |
| 18 | **Modern Web Dev** | Baseline CSS (Subgrid, `:has()`, Container Queries, View Transitions). | Modern Frontend Architecture Standards |
| 19 | **Design Statistics** | **50ms** first impression; **94%** design attribution; **9,900% UX ROI**. | Empirical Business Justification Data |

---

## 1. The 3-Tier Design Token Hierarchy

Never hardcode arbitrary hex colors, pixel margins, or ad-hoc font sizes into components. Structure all tokens into three explicit tiers:

```
┌────────────────────────────────────────────────────────┐
│  TIER 1: GLOBAL / PRIMITIVE TOKENS                    │
│  Raw immutable palette values with zero contextual     │
│  meaning.                                              │
│  e.g., --color-amber-500: #f59e0b;                     │
│        --color-slate-900: #0f172a;                     │
│        --space-16: 1.00rem; --radius-8: 0.50rem;       │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│  TIER 2: SEMANTIC / SYSTEM TOKENS                      │
│  Binds primitive values to purposeful roles and modes  │
│  (Dark/Light, Dense/Spacious).                         │
│  e.g., --surface-base: var(--color-slate-900);         │
│        --action-primary: var(--color-amber-500);       │
│        --border-subtle: rgba(255, 255, 255, 0.08);     │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│  TIER 3: COMPONENT-SCOPED TOKENS                       │
│  Tightly scoped to individual component contracts.     │
│  Allows isolated overrides without global side effects.│
│  e.g., --btn-primary-bg: var(--action-primary);        │
│        --card-surface: var(--surface-base);            │
│        --card-padding: var(--space-16);                │
└────────────────────────────────────────────────────────┘
```

### Production CSS Implementation
```css
:root {
  /* Tier 1: Primitives */
  --pr-amber-400: #fbbf24;
  --pr-amber-500: #f59e0b;
  --pr-amber-600: #d97706;
  --pr-slate-950: #07070a;
  --pr-slate-900: #0f172a;
  --pr-slate-100: #f1f5f9;

  /* Tier 2: Semantic (Default: Light Mode) */
  --color-surface-canvas: #faf8f5;
  --color-surface-card: #ffffff;
  --color-text-primary: var(--pr-slate-900);
  --color-text-muted: #64748b;
  --color-action-primary: var(--pr-amber-500);
  --color-action-primary-hover: var(--pr-amber-600);
  --color-border-subtle: rgba(15, 23, 42, 0.08);

  /* Tier 3: Components */
  --btn-bg: var(--color-action-primary);
  --btn-bg-hover: var(--color-action-primary-hover);
  --btn-fg: #ffffff;
}

:root[data-theme='dark'], .dark {
  /* Tier 2: Semantic (Dark Mode Override) */
  --color-surface-canvas: var(--pr-slate-950);
  --color-surface-card: rgba(14, 14, 20, 0.65);
  --color-text-primary: var(--pr-slate-100);
  --color-text-muted: #94a3b8;
  --color-action-primary: var(--pr-amber-500);
  --color-action-primary-hover: var(--pr-amber-400);
  --color-border-subtle: rgba(255, 255, 255, 0.08);

  /* Tier 3: Components */
  --btn-bg: var(--color-action-primary);
  --btn-bg-hover: var(--color-action-primary-hover);
  --btn-fg: var(--pr-slate-950);
}
```

---

## 2. The Mandatory 8-State Interactive Component Spectrum

Every button, clickable link, or interactive input must explicitly support all 8 states with corresponding ARIA attributes:

```
   [1. Default] ──(hover)──► [2. Hover] ──(press)──► [4. Active]
         │                       │                        │
      (focus)                 (focus)                  (release)
         ▼                       ▼                        ▼
   [3. Focus-Visible] ◄──────────┴───────────────► [6. Loading]
         │                                                │
         ├─────────────────────────────────(error)───────►├─► [7. Error]
         ├────────────────────────────────(success)──────►├─► [8. Success]
         ▼                                                ▼
   [5. Disabled] (suppressed events, opacity 50%, aria-disabled="true")
```

### Production Interactive Button Component
```tsx
import React from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive';
  isLoading?: boolean;
  isSuccess?: boolean;
  errorMessage?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  isSuccess = false,
  errorMessage,
  disabled,
  className = '',
  ...props
}) => {
  const isActionDisabled = disabled || isLoading;

  return (
    <div className="relative inline-flex flex-col items-center">
      <button
        {...props}
        disabled={isActionDisabled}
        aria-disabled={isActionDisabled}
        aria-busy={isLoading}
        aria-invalid={!!errorMessage}
        className={`
          group relative inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5
          text-sm font-semibold transition-all duration-150 ease-out select-none
          
          /* State 1: Default */
          bg-amber-500 text-slate-950 shadow-sm
          
          /* State 2: Hover (Scale + Glow) */
          hover:bg-amber-400 hover:scale-[1.02] hover:shadow-amber-500/20 hover:shadow-md
          
          /* State 3: Focus-Visible */
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
          
          /* State 4: Active (Tactile depression) */
          active:scale-[0.98] active:bg-amber-600
          
          /* State 5: Disabled */
          disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:transform-none disabled:shadow-none
          
          /* State 7: Error Variant */
          ${errorMessage ? 'border border-rose-500 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20' : ''}
          
          /* State 8: Success Variant */
          ${isSuccess ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : ''}
          
          ${className}
        `}
      >
        {/* State 6: Loading Feedback */}
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {isSuccess && <CheckCircle2 className="h-4 w-4 text-slate-950" aria-hidden="true" />}
        {errorMessage && <AlertCircle className="h-4 w-4 text-rose-400" aria-hidden="true" />}
        
        <span>{isLoading ? 'Processing...' : isSuccess ? 'Confirmed' : children}</span>
      </button>

      {errorMessage && (
        <span role="alert" className="mt-1 text-xs text-rose-400 font-medium">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
```

---

## 3. Typographic Systems & Font Pairing Rules

Web typography must balance emotional tone with mechanical readability.

### The 24 Web Fonts Taxonomy
- **Authority & Heritage (Serif)**: *Garamond*, *Merriweather*, *Playfair Display*, *Lora*, *PT Serif*, *Georgia*, *Libre Baskerville*, *EB Garamond*.
- **Modernity & Screen Legibility (Sans-Serif)**: *Inter*, *Roboto*, *Montserrat*, *Open Sans*, *Lato*, *Poppins*, *Work Sans*, *Plus Jakarta Sans*.
- **Brand Character & Distinction (Display & Monospace)**: *Space Grotesk*, *Syne*, *Clash Display*, *JetBrains Mono*, *Fira Code*, *Space Mono*.

### Core Typographic Rules
1. **The Measure (Line Length)**: Clamp body copy width to **45 to 75 characters per line** (`max-w-prose` or `max-w-[65ch]`). Wider measures cause eye-tracking fatigue.
2. **Line Height (Leading)**:
   - Body copy: `1.4` to `1.65` (ample breathing room for continuous reading).
   - Display & Headings: `1.1` to `1.25` (tightened leading prevents visual fragmentation).
3. **Contrast-Driven Pairing**:
   - Pair an expressive Serif heading (*Playfair Display*, *EB Garamond*) with an ultra-neutral Sans-Serif body (*Inter*, *Plus Jakarta Sans*).
   - Pair an architectural Display heading (*Space Grotesk*, *Clash Display*) with a technical Monospace subhead (*JetBrains Mono*).

---

## 4. Color Theory & The 60-30-10 Visual Cadence

Never distribute colors equally. Adhere strictly to the **60-30-10 architectural allocation rule**:

- **60% Dominant Canvas Base**: Sets the ambient mood (Velvet Obsidian `#07070a` in dark mode; Champagne Ivory `#faf8f5` in light mode).
- **30% Structural Secondary**: Provides form and hierarchy (card containers, borders, modal backdrops, navigation headers, and secondary typography).
- **10% High-Chroma Accent**: Reserved exclusively for primary conversion CTAs, status badges, active indicator dots, and subtle specular glows.

### WCAG Contrast Ratios (Non-Negotiable)
- **4.5:1 Minimum**: Standard body copy, table data, and form labels against their background.
- **3.0:1 Minimum**: Large text (18pt+ / 14pt bold), interactive icon glyphs, and active input borders.

---

## 5. Enterprise Design Systems & Governance

At scale, design consistency collapses due to team silos, branch divergence, and one-off CSS overrides.

### The 3 Governance Models
1. **Centralized Model**: A dedicated Core Systems team owns token definitions, builds all primitives, and reviews every addition. Highest consistency, potential velocity bottleneck.
2. **Federated Model**: Embedded designers/engineers from product squads co-create the system. High team buy-in, risk of fragmented quality.
3. **Hybrid Model (Recommended for High Growth)**: A core systems squad owns primitive/semantic tokens and base atoms; product squads contribute specialized domain organisms through a formal RFC review gate.

### Component Contribution Protocol
```
[1. Proposal RFC] ──► [2. Design Review] ──► [3. Code Review] ──► [4. Versioned Release]
 (Identify need,       (Figma variants,       (Accessibility,      (Semantic versioning,
  verify no duplicate)  token binding,         types, ARIA, 8-state  living documentation)
                        dark mode)             coverage)
```

---

## 6. User-Centered Design (UCD) & UX Validation

User experience is verified through rigorous questioning and interaction stress-testing.

### 4-Phase UCD Inquiry Framework
- **Discovery**: What job is the user hiring this product to do? What manual workarounds (spreadsheets, bookmarks) do they use today? Where is their greatest anxiety?
- **Ideation**: What is the shortest path to value? What unvalidated assumptions are embedded in this layout?
- **Prototyping**: Can a first-time user complete the primary flow with zero coaching? Where do users pause or hesitate?
- **Evaluation**: Did task success rate (TSR) increase? Did time on task (ToT) decrease?

### UX Validation: Concept vs. Interaction Testing
- **Concept Validation**: Confirms problem-solution fit ("Are we solving the right problem?").
- **Interaction Validation**: Confirms mechanical predictability ("Does the interface respond intuitively under edge-case stress?").

### The 4 Edge-Case Stress Tests
1. **Extreme Character Density**: Test cards with 200-character strings, multi-line titles, and localized German/French text (which expands by 30%).
2. **System State Completeness**: Explicitly build and review Zero-Data (Empty), Skeleton Loading, Timeout, and 500 Error recovery states.
3. **Double-Click & Rapid Input**: Ensure idempotency and debounce protection on all submission triggers.
4. **Keyboard & Screen Reader Parity**: Verify complete tab order and ARIA announcements without visual assistance.

---

## 7. High-Converting Pricing & Landing Page Architecture

### 9 Conversion Engineering Laws for Pricing Pages
1. **Simplicity & Scannability**: Differentiate plans within 3 seconds.
2. **Choice Architecture (Hick's Law)**: Limit tiers to 3–4 maximum.
3. **Radical Price Transparency**: Clear monthly vs. annual pricing toggle with visible discount badges (e.g. "Save 20%").
4. **Anchoring**: Visually elevate the target tier ("Pro" / "Most Popular") with contrasting borders, badges, or elevation.
5. **Social Proof Anchoring**: Position trusted company logos and customer quotes immediately beneath tier cards.
6. **Collapsible Comparison Matrix**: Group detailed feature rows into logical collapsible categories.
7. **Contextual Tooltips**: Provide inline micro-previews for complex enterprise features.
8. **Mobile Segmented Selectors**: Use horizontal tabs on mobile viewports to prevent endless vertical scrolling.
9. **Action-Driven CTAs**: Use explicit value labels ("Start Free Trial", "Deploy Cluster") rather than generic "Submit".

---

## 8. 2026 Modern Web Realities & Quantitative Benchmarks

Keep these empirical metrics at the forefront of every architectural decision:
- **50 Milliseconds**: The window within which a human user forms a permanent visual impression of your website.
- **94%**: The percentage of first impressions directly attributed to visual design and layout polish.
- **>58%**: The proportion of global web traffic driven by mobile devices.
- **96%**: The percentage of top 1,000,000 websites that fail basic WCAG accessibility tests.
- **9,900% ROI**: The documented average enterprise return ($100 return for every $1 invested) on user experience engineering.

---

## Common Mistakes & Antipatterns

| Mistake | Root Cause | Correct Implementation |
|:---|:---|:---|
| **Ad-Hoc Hex Colors** | Hardcoding colors in component CSS/Tailwind classes. | Bind to Semantic Tokens (`--color-action-primary`). |
| **Missing Interactive States** | Only designing Default and Hover states. | Implement all 8 states (including Focus, Loading, Error, Disabled). |
| **Neglected Empty States** | Displaying blank cards when no data exists. | Provide engaging illustrations, helpful copy, and a primary CTA. |
| **Prose Walls (>80ch)** | Leaving body text container unconstrained. | Enforce `max-w-[65ch]` or `max-w-prose` on all copy blocks. |
| **Low-Contrast Gray Text** | Sacrificing legibility for faint minimalism. | Ensure strict **4.5:1** contrast ratio against backgrounds. |
| **Arbitrary Spacing** | Using random values like `17px` or `23px`. | Anchor strictly to the 8-point geometric scale (`4, 8, 12, 16, 24, 32, 48, 64px`). |
