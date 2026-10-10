# Monolithic Minimalist Glass Portfolio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the entire portfolio website under the "Monolithic Minimalist Glass" design system, replacing dense prose with high-impact visual telemetry (70/30 ratio), laser specular glass borders, pure typography, and verified SQA achievements.

**Architecture:** Monolithic glass surface architecture anchored on Void Obsidian (`#030408`) with laser top specular rims (`border-t border-white/30 border-x border-b border-white/5 backdrop-blur-2xl`), fluid typography (`Geist Sans` + `Geist Mono`), Framer Motion `<AnimatePresence mode="wait">` transitions, and frictionless 1-click communication channels.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, Google Fonts (`Geist`, `Geist_Mono`, `Inter`).

**Spec:** [`docs/superpowers/specs/2026-10-10-monolithic-minimalist-glass-redesign.md`](file:///c:/Users/User/OneDrive/Documents/portfolio/docs/superpowers/specs/2026-10-10-monolithic-minimalist-glass-redesign.md)

## Global Constraints

- **Canvas Background**: Void Obsidian `#030408` in Dark Mode, Alabaster Porcelain `#FAF9F6` in Light Mode.
- **Glass Card Recipe**: `bg-white/[0.02] border-t border-white/30 border-x border-b border-white/5 backdrop-blur-2xl shadow-2xl hover:bg-white/[0.04] transition-all`.
- **Light Mode Glass Recipe**: `bg-black/[0.02] border-t border-black/20 border-x border-b border-black/5 backdrop-blur-2xl shadow-xl hover:bg-black/[0.04] transition-all`.
- **Tailwind v4 Invariant**: Declare `@custom-variant dark (&:where(.dark, .dark *));` at the top of `globals.css` immediately after `@import "tailwindcss";`.
- **Zero Extrapolation**: Strictly verified credentials only: Muhammad Shazzad Mia, SQA Engineer II at Brain Station 23, Shwapno & Paragon platforms, Playwright, Apache JMeter, 80%+ automated coverage, 15k+ VUs, 99.4% uptime, Batch 16 SQA, DIU B.Sc. CSE, nopStation Agility & Excellence Award.
- **70/30 Content Ratio**: 70% interactive visual telemetry (metric monoliths, SVG graphs, code telemetry), 30% concise technical copy. Zero prose walls.
- **Direct Contact Hub**: 1-click copyable buttons for Email (`shazzadm065@gmail.com`), WhatsApp/Phone (`+8801621864789`), LinkedIn, and GitHub. No unmaintained form inputs.
- **Windows PowerShell Invariant**: Chain commands with `;` instead of `&&`.
- **Dev-Safe Typechecking**: Verify with `npx tsc --noEmit`. Avoid running full `next build` while dev server is running.
- **Remote Sync Mandate**: Commit and push directly to `origin main` at each milestone.

---

### Task 1: Design Tokens & CSS Foundations (`globals.css`)

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Produces: CSS utility classes `.glass-monolith`, `.glass-monolith-interactive`, `.border-specular-top`, `.horizon-light`, CSS variables for Void Obsidian canvas, and clean typographic tokens.

- [ ] **Step 1: Check existing CSS classes in globals.css**
Verify current CSS variables and utility classes in `src/app/globals.css` to locate insertion points for monolithic glass tokens.

- [ ] **Step 2: Add Monolithic Minimalist Glass tokens to globals.css**
Update `src/app/globals.css` with:
```css
/* Monolithic Minimalist Glass Tokens */
:root {
  --canvas-void: #FAF9F6;
  --surface-monolith: rgba(0, 0, 0, 0.02);
  --border-specular: rgba(0, 0, 0, 0.20);
  --border-subtle: rgba(0, 0, 0, 0.06);
}

.dark {
  --canvas-void: #030408;
  --surface-monolith: rgba(255, 255, 255, 0.02);
  --border-specular: rgba(255, 255, 255, 0.30);
  --border-subtle: rgba(255, 255, 255, 0.05);
}

.glass-monolith {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.30);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

:not(.dark) .glass-monolith {
  background: rgba(0, 0, 0, 0.02);
  border-top: 1px solid rgba(0, 0, 0, 0.20);
  border-left: 1px solid rgba(0, 0, 0, 0.06);
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.glass-monolith-interactive {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-monolith-interactive:hover {
  background: rgba(255, 255, 255, 0.045);
  border-top-color: rgba(255, 255, 255, 0.50);
  transform: translateY(-2px);
}

:not(.dark) .glass-monolith-interactive:hover {
  background: rgba(0, 0, 0, 0.04);
  border-top-color: rgba(0, 0, 0, 0.35);
  transform: translateY(-2px);
}
```

- [ ] **Step 3: Run TypeScript & styling check**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 4: Commit CSS foundations**
```bash
git add src/app/globals.css
git commit -m "style: add monolithic minimalist glass design tokens and utility classes"
git push origin main
```

---

### Task 2: Floating Monolithic Navbar & Minimalist Footer (`Navbar.tsx`, `Footer.tsx`)

**Files:**
- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: Next-themes `useTheme`, Lucide icons, `.glass-monolith` tokens.
- Produces: Floating glass capsule navigation with `MSM` monogram, quick CV link, smooth anchor navigation (`#hero`, `#pipeline`, `#methodology`, `#skills`, `#experience`, `#frameworks`, `#honors`, `#contact`), and minimalist footer.

- [ ] **Step 1: Inspect Navbar.tsx & Footer.tsx**
Verify current anchor targets and theme toggle implementation.

- [ ] **Step 2: Update Navbar.tsx to Monolithic Capsule**
Refactor `src/components/layout/Navbar.tsx`:
- Render centered floating capsule: `h-14`, rounded-full, `bg-white/[0.03] dark:bg-white/[0.03] border-t border-white/30 border-x border-b border-white/10 backdrop-blur-2xl`.
- Square Monolith Monogram `MSM`.
- Section navigation links matching updated section IDs.
- Pulsing green beacon: `Available for SDET Roles`.
- Direct Download CTA for `/resume.pdf`.
- Spring-physics dark/light mode toggle.
- Responsive mobile drawer.

- [ ] **Step 3: Update Footer.tsx to Monolithic Minimalist Design**
Refactor `src/components/layout/Footer.tsx`:
- Clean obsidian border: `border-t border-white/10 dark:border-white/10`.
- Left: `Muhammad Shazzad Mia` + SQA Engineer II at Brain Station 23.
- Center: Technical attribution `Engineered for Zero-Flake Quality`.
- Right: Direct links (Email, LinkedIn, GitHub).

- [ ] **Step 4: Verify type safety**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 5: Commit Navbar and Footer**
```bash
git add src/components/layout/Navbar.tsx src/components/layout/Footer.tsx
git commit -m "feat(layout): implement monolithic minimalist glass navbar and footer"
git push origin main
```

---

### Task 3: Monolithic Hero Section (`HeroSectionV2.tsx`)

**Files:**
- Modify: `src/components/sections/HeroSectionV2.tsx`

**Interfaces:**
- Consumes: `Geist` fonts, Lucide icons, `master_career_profile.md` metrics.
- Produces: Monolithic Hero Section with:
  - Ambient cold specular horizon glow (`bg-white/[0.04] blur-[140px]`).
  - Headline: *"Quality, reduced to its essence."*
  - Monospace subtitle badge: `[VERIFIED] SQA ENGINEER II · BRAIN STATION 23`.
  - 4 Massive Monolithic Glass Metric Slabs:
    - `80%+` Automated Coverage (120+ E2E Journeys)
    - `75%` Runtime Reduction (14h → 3.5h Parallel Grid)
    - `15k+` Virtual Users (Apache JMeter Concurrency Peak)
    - `99.4%` Verified Uptime (15+ Zero-Defect Production Sprints)
  - Dual Monolithic Glass CTAs:
    - *Explore Automation Frameworks* (`#frameworks`)
    - *Download Curriculum Vitae* (`/resume.pdf`)
  - Direct communication badge row with 1-click email copy.

- [ ] **Step 1: Check existing HeroSectionV2.tsx**
Verify current imports and layout structure.

- [ ] **Step 2: Implement Monolithic Minimalist Glass Hero**
Replace `src/components/sections/HeroSectionV2.tsx` with the high-impact monolithic layout:
- Top ambient horizon blur.
- Huge typography with `-0.03em` tracking.
- Slabs using `p-8 rounded-3xl bg-white/[0.02] border-t border-white/30 border-x border-b border-white/5 backdrop-blur-2xl shadow-2xl hover:bg-white/[0.04] transition-all`.
- Click-to-copy email badge with toast feedback.

- [ ] **Step 3: Run TypeScript verification**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 4: Commit Hero Section**
```bash
git add src/components/sections/HeroSectionV2.tsx
git commit -m "feat(hero): rebuild hero section with monolithic minimalist glass and metric slabs"
git push origin main
```

---

### Task 4: Visual QA Pipeline Section (`PipelineSection.tsx` & `AboutSectionV2.tsx`)

**Files:**
- Create: `src/components/sections/PipelineSection.tsx`
- Modify: `src/components/sections/AboutSectionV2.tsx`

**Interfaces:**
- Produces:
  - `AboutSectionV2.tsx`: Concise engineering narrative and QA core philosophy (zero prose wall, under 2 short paragraphs + core pillars).
  - `PipelineSection.tsx`: Interactive 4-stage visual pipeline graph:
    1. Node 01: PR Static Ingest & Type Validation (Webhook, TypeScript, ESLint)
    2. Node 02: Playwright Parallel E2E Grid (4 workers, Page Object Model, Chromium + WebKit)
    3. Node 03: JMeter Concurrency Benchmark (15,000 VUs, flash-sale traffic, p95 < 1.74s SLA)
    4. Node 04: Production Release Gate (nopStation Agility & Excellence Award, 99.4% uptime)

- [ ] **Step 1: Create PipelineSection.tsx**
Build `src/components/sections/PipelineSection.tsx` with interactive glass node blocks, SVG connection runners, and live pass badges.

- [ ] **Step 2: Streamline AboutSectionV2.tsx**
Update `src/components/sections/AboutSectionV2.tsx` to align with the Monolithic Minimalist Glass theme:
- Personal mission: Quality engineering as an architectural property.
- 3 Monolithic pillar cards:
  - *Determinism Over Hope* (Zero arbitrary sleeps, 100% resilient selectors)
  - *Concurrency at Scale* (15,000+ VU flash sale simulation)
  - *Shift-Left Prevention* (Contract-first API validation & static gates)

- [ ] **Step 3: Verify TypeScript**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 4: Commit Pipeline & About Sections**
```bash
git add src/components/sections/PipelineSection.tsx src/components/sections/AboutSectionV2.tsx
git commit -m "feat(pipeline): add visual 4-stage qa pipeline and monolithic about section"
git push origin main
```

---

### Task 5: QA Methodology & 7-Dimension Audit Matrix (`QaMethodologySectionV2.tsx`)

**Files:**
- Modify: `src/components/sections/QaMethodologySectionV2.tsx`

**Interfaces:**
- Consumes: 7-Dimension QA Audit framework from `master_career_profile.md`.
- Produces: Monolithic glass matrix replacing prose walls with visual inspection cards:
  1. Functional & Boundary Correctness
  2. Visual Hierarchy & Spatial Cadence
  3. Interaction & Keyboard Feedback
  4. Cross-Browser & Multi-Device Concurrency
  5. E2E User Shopping Journeys (bKash/Nagad checkout, multi-branch stock sync)
  6. Edge Cases & Chaos Resilience
  7. WCAG 2.1/2.2 AA Accessibility & Screen-Reader Compatibility

- [ ] **Step 1: Check existing QaMethodologySectionV2.tsx**
Verify current structure and interactive elements.

- [ ] **Step 2: Implement Monolithic 7-Dimension Matrix**
Replace `src/components/sections/QaMethodologySectionV2.tsx`:
- Header: Section title with monospace tag `[AUDIT_FRAMEWORK_V2]`.
- 7 Monolithic Glass Cards in responsive grid layout.
- Each card features: dimension number, title, key verification criteria, and live `[VERIFIED]` badge.

- [ ] **Step 3: Verify TypeScript**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 4: Commit QA Methodology Section**
```bash
git add src/components/sections/QaMethodologySectionV2.tsx
git commit -m "feat(methodology): rebuild 7-dimension qa audit matrix in monolithic glass"
git push origin main
```

---

### Task 6: Skills & Tech Stack Section Rebuild (`SkillsSectionV2.tsx`, `TechStackSection.tsx`)

**Files:**
- Modify: `src/components/sections/SkillsSectionV2.tsx`
- Modify: `src/components/sections/TechStackSection.tsx`

**Interfaces:**
- Consumes: Official multi-color brand vector SVGs from `src/components/ui/SvgIcons.tsx`.
- Produces: Categorized Monolithic glass skill cards with official brand SVGs, proficiency badges, and automated test suite counters.

- [ ] **Step 1: Inspect SvgIcons.tsx and current skill categories**
Ensure all official multi-color brand SVGs (Playwright, Selenium, Cypress, Appium, JMeter, Postman, K6, TypeScript, JavaScript, Python, Java, GitHub Actions, Docker, Jira, Azure Boards) are correctly imported and styled.

- [ ] **Step 2: Rebuild SkillsSectionV2.tsx in Monolithic Glass**
Categorize into clean glass monoliths:
- *Test Automation & E2E*: Playwright, Selenium, Cypress, Appium
- *Performance & API Engineering*: Apache JMeter, Postman, K6
- *Core Languages*: TypeScript, JavaScript, Python, Java
- *DevOps & CI/CD*: GitHub Actions, Docker, GitLab CI
- *Test Management*: Jira, Azure Boards, Trello

- [ ] **Step 3: Align TechStackSection.tsx**
Update `src/components/sections/TechStackSection.tsx` to match the monolithic styling and specular borders.

- [ ] **Step 4: Verify TypeScript**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 5: Commit Skills and Tech Stack**
```bash
git add src/components/sections/SkillsSectionV2.tsx src/components/sections/TechStackSection.tsx
git commit -m "feat(skills): implement monolithic minimalist glass tech stack with official brand svgs"
git push origin main
```

---

### Task 7: Career Experience Section Rebuild (`ExperienceSectionV2.tsx`)

**Files:**
- Modify: `src/components/sections/ExperienceSectionV2.tsx`

**Interfaces:**
- Consumes: Brain Station 23 experience data for Shwapno & Paragon platforms.
- Produces: Monolithic glass timeline nodes with quantified impact chips and zero fluff:
  - Role: SQA Engineer II
  - Company: Brain Station 23 (2+ Years)
  - Key Platforms: Shwapno (Bangladesh's premier grocery e-commerce) & Paragon (Enterprise retail)
  - Impact chips: `80%+ Coverage`, `15,000 VUs Peak`, `75% Runtime Cut`, `Zero Rollback Releases`
  - Key technical deliveries: Playwright Page Object Model, bKash/Nagad checkout validation, distributed JMeter test suites, GitHub Actions CI gates.

- [ ] **Step 1: Inspect ExperienceSectionV2.tsx**
Review current career copy and timeline layout.

- [ ] **Step 2: Implement Monolithic Experience Timeline**
Refactor `src/components/sections/ExperienceSectionV2.tsx` using `glass-monolith` cards, vertical specular laser line, and interactive platform switcher tabs.

- [ ] **Step 3: Verify TypeScript**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 4: Commit Experience Section**
```bash
git add src/components/sections/ExperienceSectionV2.tsx
git commit -m "feat(experience): rebuild brain station 23 experience timeline in monolithic glass"
git push origin main
```

---

### Task 8: Featured Automation Frameworks (`ProjectsSectionV2.tsx`)

**Files:**
- Modify: `src/components/sections/ProjectsSectionV2.tsx`

**Interfaces:**
- Consumes: Framer Motion `<AnimatePresence mode="wait">`, TerminalWidget, code telemetry.
- Produces: Interactive Monolithic architecture showcases:
  - Project 1: **Playwright TypeScript E2E Framework** (Modular POM, multi-worker parallel execution, auto-retries, HTML telemetry)
  - Project 2: **Apache JMeter Concurrency Benchmark** (Distributed load testing, 15,000 VUs, SLA breach detection)
  - Project 3: **GitHub Actions CI/CD QA Gate** (Automated branch protection, parallel test matrix, zero-defect release sign-off)

- [ ] **Step 1: Inspect ProjectsSectionV2.tsx**
Review tab switcher and `<AnimatePresence>` container keys.

- [ ] **Step 2: Rebuild ProjectsSectionV2.tsx in Monolithic Glass**
Implement:
- Tab bar with monolithic glass capsule selector.
- Container-level `<AnimatePresence mode="wait">` to prevent CSS grid collisions.
- Left column: Architecture overview, quantified metrics, and official tool icons.
- Right column: Interactive code/telemetry console with live execution preview.

- [ ] **Step 3: Verify TypeScript**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 4: Commit Projects Section**
```bash
git add src/components/sections/ProjectsSectionV2.tsx
git commit -m "feat(projects): rebuild automation frameworks section with monolithic glass telemetry"
git push origin main
```

---

### Task 9: Certifications, Resume & Direct Communication Hub Rebuild (`CertificationsSectionV2.tsx`, `ResumeSectionV2.tsx`, `ContactSectionV2.tsx`)

**Files:**
- Modify: `src/components/sections/CertificationsSectionV2.tsx`
- Modify: `src/components/sections/ResumeSectionV2.tsx`
- Modify: `src/components/sections/ContactSectionV2.tsx`

**Interfaces:**
- Consumes: Verified credentials (Batch 16 SQA, DIU B.Sc. CSE, nopStation Agility & Excellence Award), `/resume.pdf`, clipboard API.
- Produces:
  - `CertificationsSectionV2.tsx`: Monolithic glass plaques with verified credential chips (Strict zero-hallucination invariant).
  - `ResumeSectionV2.tsx`: Prominent monolithic download station with quick preview and direct `/resume.pdf` link.
  - `ContactSectionV2.tsx`: Direct Communication Hub featuring 1-click copyable glass buttons:
    - Direct Email: `shazzadm065@gmail.com`
    - WhatsApp / Phone: `+8801621864789`
    - LinkedIn: `https://linkedin.com/in/md-shazzad-mia`
    - GitHub: `https://github.com/Shazzad01`
    - Availability: `Dhaka, Bangladesh (UTC+6) — Active SDET Lead`

- [ ] **Step 1: Rebuild CertificationsSectionV2.tsx**
Implement 3 verified monolithic glass plaques:
1. Batch 16 SQA Professional Certification
2. B.Sc. in Computer Science & Engineering (DIU)
3. nopStation Agility & Excellence Award (Brain Station 23)

- [ ] **Step 2: Rebuild ResumeSectionV2.tsx**
Implement clean monolithic glass resume download block with file size, last updated badge, and prominent primary download CTA.

- [ ] **Step 3: Rebuild ContactSectionV2.tsx**
Implement Direct Communication Hub with one-click copyable buttons and toast feedback. Zero form inputs.

- [ ] **Step 4: Verify TypeScript**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 5: Commit Certifications, Resume, and Contact**
```bash
git add src/components/sections/CertificationsSectionV2.tsx src/components/sections/ResumeSectionV2.tsx src/components/sections/ContactSectionV2.tsx
git commit -m "feat(contact): implement monolithic certifications, resume station, and direct contact hub"
git push origin main
```

---

### Task 10: Page Integration, Global Type Safety & Browser E2E Verification

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: All updated sections in exact Blueprint order.
- Produces: Complete, cohesive Monolithic Minimalist Glass portfolio homepage.

- [ ] **Step 1: Update src/app/page.tsx**
Wire all sections in Blueprint order:
```tsx
import HeroSectionV2 from "@/components/sections/HeroSectionV2";
import AboutSectionV2 from "@/components/sections/AboutSectionV2";
import PipelineSection from "@/components/sections/PipelineSection";
import QaMethodologySectionV2 from "@/components/sections/QaMethodologySectionV2";
import SkillsSectionV2 from "@/components/sections/SkillsSectionV2";
import ExperienceSectionV2 from "@/components/sections/ExperienceSectionV2";
import ProjectsSectionV2 from "@/components/sections/ProjectsSectionV2";
import CertificationsSectionV2 from "@/components/sections/CertificationsSectionV2";
import ResumeSectionV2 from "@/components/sections/ResumeSectionV2";
import ContactSectionV2 from "@/components/sections/ContactSectionV2";

export default function Home() {
  return (
    <>
      <HeroSectionV2 />
      <AboutSectionV2 />
      <PipelineSection />
      <QaMethodologySectionV2 />
      <SkillsSectionV2 />
      <ExperienceSectionV2 />
      <ProjectsSectionV2 />
      <CertificationsSectionV2 />
      <ResumeSectionV2 />
      <ContactSectionV2 />
    </>
  );
}
```

- [ ] **Step 2: Dev-safe Typecheck**
Run: `npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 3: Verify HTTP 200 in browser runtime**
Test `http://localhost:3000` via web request or curl to confirm complete SSR and hydration.

- [ ] **Step 4: Commit and push final rebuild**
```bash
git add src/app/page.tsx
git commit -m "chore(release): integrate all monolithic minimalist glass sections into main page"
git push origin main
```
