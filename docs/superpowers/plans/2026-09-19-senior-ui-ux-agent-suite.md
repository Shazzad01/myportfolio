# Senior UI/UX Agent Suite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish a world-class 20+ Year Senior UI/UX Architect agent identity and modular skill suite in the workspace, equipping Antigravity with proactive online design research, Framer Motion choreography, fluid token systems, glassmorphism aesthetics, and cognitive ergonomics.

**Architecture:** A multi-layered customization architecture combining workspace-level agent identity elevation (`AGENTS.md`, `.agents/AGENTS.md`), a progressive trigger rule (`.agents/rules/senior-ui-ux-architect.md`), and four specialized, production-ready modular skills in `.agents/skills/` containing deep design heuristics and battle-tested TypeScript + Tailwind + Framer Motion code primitives.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, Antigravity Customization Engine (YAML frontmatter, progressive disclosure).

**Spec:** User alignment via `/grill-me` (Workspace agent configuration, full creative technologist suite, proactive online design research, hybrid philosophy + production-ready code primitives).

## Global Constraints

- Never invent or extrapolate career credentials (strictly observe `master_career_profile.md`).
- Strictly adhere to Tailwind CSS v4 `@custom-variant dark (&:where(.dark, .dark *));` engine invariant.
- All Framer Motion components must explicitly implement `prefers-reduced-motion` compliance.
- In PowerShell commands, ALWAYS use `;` instead of `&&` for statement chaining.
- When verifying TypeScript under active dev server, use `npx tsc --noEmit` to prevent Windows file lock conflicts (`EPERM`).
- Maintain 70/30 Visual-First content ratio with zero generic AI-slop card templates.

---

### Task 1: Elevate Workspace Agent Identity in `AGENTS.md` and `.agents/AGENTS.md`

**Files:**
- Modify: `c:/Users/User/OneDrive/Documents/portfolio/AGENTS.md:1-55`
- Modify: `c:/Users/User/OneDrive/Documents/portfolio/.agents/AGENTS.md:1-190`

**Interfaces:**
- Consumes: Existing role definitions (PM, BA, QA, Developer, DevOps) and workspace guidelines.
- Produces: Formal 20+ Year Senior UI/UX Architect & Creative Technologist role definition, proactive design research directive, and aesthetic invariants.

- [ ] **Step 1: Add Senior UI/UX Architect role to `.agents/AGENTS.md`**

Update the role table in `.agents/AGENTS.md` to include:
```markdown
| **UI/UX Architect** | Bring 20+ years of human design craft: spatial ergonomics, visual hierarchy, fluid token systems, physics-based motion choreography, and proactive online benchmark research (Linear, Stripe, Raycast, Awwwards). Zero generic templates. |
```
And add dedicated UI/UX Design Directives & Invariants to the document.

- [ ] **Step 2: Add UI/UX Invariant & Proactive Research Rule to root `AGENTS.md`**

Add the Senior UI/UX Master Invariant and Proactive Online Design Research directive to `AGENTS.md`:
```markdown
### Senior UI/UX Architect & Proactive Research Invariant
- **20+ Year Human Craft**: Treat every interface as a bespoke, high-performance experience. Avoid AI-generated tells (generic card kits, unmotivated badges, harsh contrast, walls of text).
- **Proactive Online Inspiration Research**: When conceptualizing components, color palettes, or interactions, proactively search modern design benchmarks (Linear, Raycast, Stripe, Framer, Awwwards) for color harmonies, cubic-bezier curves, and layout patterns before writing UI code.
```

- [ ] **Step 3: Verify document formatting and markdown integrity**

Ensure markdown tables and headers are properly aligned and no existing rules were inadvertently altered.

- [ ] **Step 4: Commit changes**

```powershell
git add AGENTS.md .agents/AGENTS.md; git commit -m "feat(agents): elevate workspace agent identity with Senior UI/UX Architect role"
```

---

### Task 2: Create Progressive UI/UX Rule `.agents/rules/senior-ui-ux-architect.md`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/rules/senior-ui-ux-architect.md`

**Interfaces:**
- Consumes: Antigravity rules schema and trigger conventions.
- Produces: Progressive rule that activates whenever working on frontend UI, styling, CSS, Framer Motion, layout, and visual components.

- [ ] **Step 1: Create directory `.agents/rules/` if not present**

Verify `.agents/rules/` directory structure.

- [ ] **Step 2: Write `.agents/rules/senior-ui-ux-architect.md`**

Create the rule with YAML frontmatter specifying contextual triggers (`*.tsx`, `*.css`, `components/**`, `app/**`) and explicit directives:
- Core 20-Year UI/UX Tenets: Visual tension, spatial cadence (8pt grid), typographic weight contrast, affordance.
- Motion Principles: Intentionality over decoration, spring physics, layout stability.
- Proactive Inspiration Trigger: Prompting web research for contemporary design benchmarks when building new UI.

- [ ] **Step 3: Verify rule discovery**

Ensure file contains valid frontmatter and passes standard lint checks.

- [ ] **Step 4: Commit**

```powershell
git add .agents/rules/senior-ui-ux-architect.md; git commit -m "feat(rules): add senior-ui-ux-architect progressive rule"
```

---

### Task 3: Build Skill: `design-research-and-benchmarking`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/design-research-and-benchmarking/SKILL.md`

**Interfaces:**
- Consumes: `search_web`, `read_url_content`, and modern design reference queries.
- Produces: Actionable research workflows, query templates, color harmony extraction formulas, bezier curve libraries, and benchmark documentation templates.

- [ ] **Step 1: Write `design-research-and-benchmarking/SKILL.md`**

Include:
- Frontmatter: name `design-research-and-benchmarking`, clear trigger description.
- Research Methodology: When and how to search for visual benchmarks (Linear, Raycast, Stripe, Vercel, Awwwards, Mobbin).
- Specific search query templates for palettes, glassmorphism, typography, and micro-interactions.
- Palette Extraction & Normalization: HSL-based palette tailoring (contrast ratios, ambient glows).
- Cubic-Bezier & Spring Curve Reference: Linear-style snappy springs vs gentle luxury settles.
- Benchmark Synthesis Template: A structured format to document findings before writing code.

- [ ] **Step 2: Verify skill frontmatter and formatting**

Check YAML frontmatter syntax and markdown code blocks.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/design-research-and-benchmarking/SKILL.md; git commit -m "feat(skills): add design-research-and-benchmarking skill"
```

---

### Task 4: Build Skill: `motion-choreography-and-microinteractions`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/motion-choreography-and-microinteractions/SKILL.md`

**Interfaces:**
- Consumes: Framer Motion v11/v12, React 19 / React, Tailwind CSS.
- Produces: Production-ready spring physics presets, gesture orchestration primitives, `<AnimatePresence>` safe tab swapping patterns, and reduced-motion hooks.

- [ ] **Step 1: Write `motion-choreography-and-microinteractions/SKILL.md`**

Include:
- Frontmatter: name `motion-choreography-and-microinteractions`.
- Motion Philosophy: Purpose-driven kinematics vs gratuitous distraction.
- Spring Physics Matrix: Precise `stiffness`, `damping`, and `mass` configurations (Snappy/Tactile, Smooth Fluid, Bouncy Pop, Settle).
- Layout Transitions & Grid Collision Prevention: Implementing `<AnimatePresence mode="wait">` correctly with container-level keys.
- Production-Ready Code Primitives:
  - `useReducedMotionPreference` custom hook wrapper.
  - Interactive magnetic button primitive.
  - Tactile 3D tilt card primitive.
  - Staggered child list reveal orchestrator.

- [ ] **Step 2: Verify code validity and TypeScript compatibility**

Verify that all provided TypeScript primitives comply with React and Framer Motion standard typings.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/motion-choreography-and-microinteractions/SKILL.md; git commit -m "feat(skills): add motion-choreography-and-microinteractions skill"
```

---

### Task 5: Build Skill: `fluid-design-systems-and-tokens`

**Files:**
- Create: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/fluid-design-systems-and-tokens/SKILL.md`

**Interfaces:**
- Consumes: Tailwind CSS v4 design token engine, CSS custom properties, modern CSS `clamp()`.
- Produces: Fluid typography math formulas, 8-point spatial cadence guidelines, dark/light token matrices, and glassmorphism refraction styles.

- [ ] **Step 1: Write `fluid-design-systems-and-tokens/SKILL.md`**

Include:
- Frontmatter: name `fluid-design-systems-and-tokens`.
- Fluid Typography Engine: Mathematical formulas for `clamp()` without layout jumps (from 375px mobile to 1440px desktop).
- 8-Point Spatial Cadence: Strict spatial scale (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- Dark/Light Theme Token Architecture: Velvet Obsidian (`hsl(240 18% 3%)`) & Champagne Gold vs Ivory Slate.
- Frosted Glassmorphism Recipes: Multi-layered shadows, subtle border highlights (`rgba(255,255,255,0.08)`), backdrop-filter blurs, and light-mode alabaster glass.
- Tailwind CSS v4 `@custom-variant` dark mode enforcement.

- [ ] **Step 2: Verify frontmatter and markdown code blocks**

Validate syntax, tokens, and CSS snippets.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/fluid-design-systems-and-tokens/SKILL.md; git commit -m "feat(skills): add fluid-design-systems-and-tokens skill"
```

---

### Task 6: Upgrade Skill: `ui-ux-design-methodology`

**Files:**
- Modify: `c:/Users/User/OneDrive/Documents/portfolio/.agents/skills/ui-ux-design-methodology/SKILL.md`

**Interfaces:**
- Consumes: Existing Double Diamond framework and state matrix.
- Produces: Enriched 20-year UX cognitive ergonomics (Fitts's Law, Miller's Law, Hick's Law, Jakob's Law), comprehensive 8-state interactive implementations, and design-to-QA audit gates.

- [ ] **Step 1: Update `ui-ux-design-methodology/SKILL.md`**

Expand the skill with:
- Cognitive UX Laws in Practice: Actionable rules for button proximity, cognitive chunking (7±2), choice reduction, and familiar mental models.
- Enhanced 8-State UI Matrix with concrete code examples for each state.
- Ergonomic Touch Target & Thumb-Zone Mapping for mobile viewports.
- Design-to-SQA Review Protocol: Quantitative quality gates before code completion.

- [ ] **Step 2: Verify skill formatting**

Check line lengths, headers, and code block formatting.

- [ ] **Step 3: Commit**

```powershell
git add .agents/skills/ui-ux-design-methodology/SKILL.md; git commit -m "feat(skills): upgrade ui-ux-design-methodology with 20-year UX cognitive ergonomics"
```

---

### Task 7: Verification, Skill Discovery Audit & Project Integrity Check

**Files:**
- Inspect: All created and modified files in `.agents/` and workspace root.

- [ ] **Step 1: Verify TypeScript & Build integrity**

Run `npx tsc --noEmit` to guarantee no project regressions.

- [ ] **Step 2: Audit Antigravity Customization Discovery**

Inspect all newly created skills in `.agents/skills/` to confirm YAML frontmatter adheres to Antigravity discovery standards.

- [ ] **Step 3: Sync to Remote Git Repository**

Per workspace rule, push the completed feature commits to `origin main`.
```powershell
git status; git push origin main
```
