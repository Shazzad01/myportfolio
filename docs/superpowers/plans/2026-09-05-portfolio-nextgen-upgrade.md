# Portfolio Next-Gen Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate Muhammad Shazzad Mia's SQA Engineer portfolio into an ultra-modern, tier-1 engineering showcase featuring interactive QA simulators, spotlight glowing cursor physics, developer Command Palette (`Ctrl+K`), rich project architecture diagrams, and refined UI/UX micro-animations.

**Architecture:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion 12. Modular UI components with spotlight mouse tracking, keyboard-accessible command palette, and interactive stateful simulators.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion 12, Lucide React, Simple Icons.

**Spec:** [implementation_plan.md](file:///C:/Users/User/.gemini/antigravity-ide/brain/1f8c069b-ae0b-4a70-bca4-02e339f2bc37/implementation_plan.md)

---

### Task 1: Global Micro-Interactions & Command Palette (Ctrl+K)

**Files:**
- Create: `src/components/ui/ScrollProgress.tsx`
- Create: `src/components/ui/CommandPalette.tsx`
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create ScrollProgress component**
  - Smooth Framer Motion `scaleX` indicator bound to `useScroll()`.
- [ ] **Step 2: Create CommandPalette modal**
  - Listen for `keydown` (`(e.metaKey || e.ctrlKey) && e.key === 'k'`).
  - Searchable list of navigation sections and quick actions (Resume, GitHub, Theme, Copy Email).
- [ ] **Step 3: Update Navbar to trigger CommandPalette**
  - Add search pill badge `Ctrl K` for desktop view.
- [ ] **Step 4: Update globals.css with spotlight card utilities**
  - Add mouse tracking hover spotlight effect.
- [ ] **Step 5: Verify build & keyboard shortcuts**
  - Run `npx tsc --noEmit`.

---

### Task 2: Hero Section & Interactive QA Command Center 2.0

**Files:**
- Modify: `src/components/ui/TerminalWidget.tsx`
- Modify: `src/components/sections/HeroSection.tsx`

- [ ] **Step 1: Upgrade TerminalWidget to multi-suite runner**
  - Support 3 test suites: Playwright E2E, JMeter Spike Load, Newman API Collection.
  - Interactive "Run Suite" button with animated progress and telemetry stats (workers, memory, latency).
- [ ] **Step 2: Upgrade HeroSection typography & status pill**
  - Animated shimmer gradient on headline.
  - Open for Senior/Lead QA roles pulse badge.
- [ ] **Step 3: Verify runner simulator and interactive controls**
  - Run `npx tsc --noEmit`.

---

### Task 3: Projects Showcase 2.0 & Shift-Left QA Methodology

**Files:**
- Modify: `src/components/sections/ProjectsSection.tsx`
- Create: `src/components/sections/QaMethodologySection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rectify branding to "Shwapno" (ACI Logistics)**
  - Unify all occurrences in `AboutSection.tsx` and `ProjectsSection.tsx`.
- [ ] **Step 2: Add Architecture Flow & Before/After Metrics in ProjectsSection**
  - Visual pipeline: Client -> Playwright Grid -> SAP S/4HANA / Algolia -> CI/CD.
  - Before/After metric cards (45m -> 3m regression, 120 -> 500k concurrent users).
- [ ] **Step 3: Create QaMethodologySection**
  - 4-stage interactive Shift-Left QA pipeline (Testability Analysis, Automated Guardrails, Load Benchmarks, Quality Gate).
- [ ] **Step 4: Add QaMethodologySection to page.tsx**
- [ ] **Step 5: Verify build & TypeScript compilation**
  - Run `npx tsc --noEmit` and `npm run build`.

---

### Task 4: Recruiter-Focused Contact & Conversion Polish

**Files:**
- Modify: `src/components/sections/ContactSection.tsx`

- [ ] **Step 1: Add quick intent pills**
  - `[💼 Discuss Open Role]`, `[⚡ QA Consultation]`, `[🤝 General Networking]`.
- [ ] **Step 2: Add one-click "Copy Email" with animated toast feedback**
- [ ] **Step 3: Verify form validation and interactive tags**
  - Run `npx tsc --noEmit`.

---

### Task 5: Final End-to-End Verification & GitHub Sync

- [ ] **Step 1: Run full TypeScript compilation and Next.js production build**
  - `npx tsc --noEmit`
  - `npm run build`
- [ ] **Step 2: Verify all 7 QA dimensions on running application**
- [ ] **Step 3: Commit and push changes to remote GitHub repository**
  - `git add .`
  - `git commit -m "feat: upgrade portfolio UI/UX, QA console 2.0, methodology pipeline, and command palette"`
  - `git push origin main`
