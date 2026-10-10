# Specification: Full Website Rebuild — Monolithic Minimalist Glass

**Author**: Senior UI/UX Architect & Principal SQA Architect  
**Date**: October 10, 2026  
**Status**: Proposal / Review Gate  
**Theme Chosen**: **Monolithic Minimalist Glass** (Selected via Live Studio at `/demo`)  
**Target Repository**: `https://github.com/Shazzad01/myportfolio.git`  

---

## 1. Executive Summary & Aesthetic Vision

The user has explicitly selected **Monolithic Minimalist Glass** as the overarching design system for the full portfolio rebuild.

### Core Philosophy
* **Quiet Architectural Luxury**: Drawing inspiration from Apple Pro hardware pages, high-end Swiss watchmaking websites, and minimal design leaders (*Minimal Gallery*, *siteInspire*).
* **70/30 Visual-to-Text Ratio**: 70% interactive visual telemetry (architectural metric blocks, SVG pipeline graphs, interactive test runner telemetry, official brand SVGs) and 30% concise, impactful technical copy. Elimination of all walls of prose.
* **Monolithic Glass Refraction**: Slabs of deep smoked obsidian glass (`#030408` canvas with `backdrop-blur-2xl`) anchored by a razor-sharp, laser-precise specular top rim (`border-t border-white/30`).
* **Zero Fictitious Data Invariant**: Strictly uses verified career credentials from `master_career_profile.md` (Muhammad Shazzad Mia, SQA Engineer II at Brain Station 23, Shwapno & Paragon platforms, Playwright, JMeter, 80%+ automated coverage, 15k+ VUs benchmarked, 99.4% uptime, Batch 16 SQA, DIU B.Sc. in CSE, nopStation Agility & Excellence Award).

---

## 2. Design Tokens & Styling Architecture

### 2.1 Color Matrix
```css
/* Dark Mode (Primary Default) */
--canvas-bg: #030408;              /* Void Obsidian */
--surface-glass: rgba(255, 255, 255, 0.02); /* Translucent Smoked Glass */
--surface-glass-hover: rgba(255, 255, 255, 0.045);
--border-specular-top: rgba(255, 255, 255, 0.30); /* 1px Laser Horizon Rim */
--border-subtle: rgba(255, 255, 255, 0.06);       /* Lateral & Bottom Boundaries */
--text-primary: #FFFFFF;           /* Crisp Optical White */
--text-secondary: #94A3B8;         /* Platinum Slate */
--text-muted: #64748B;             /* Subdued Monospace */
--accent-specular: #FFFFFF;        /* Specular White */
--accent-cyan-mist: #38BDF8;       /* Subtle Cosmic Cyan */
--accent-pass-emerald: #10B981;    /* Test Pass Neon */

/* Light Mode (Adaptive Canvas) */
--canvas-bg-light: #FAF9F6;        /* Alabaster Porcelain */
--surface-glass-light: rgba(255, 255, 255, 0.85);
--border-specular-top-light: rgba(15, 23, 42, 0.15);
--border-subtle-light: rgba(15, 23, 42, 0.06);
--text-primary-light: #09090B;
--text-secondary-light: #475569;
```

### 2.2 Typography Hierarchy
* **Headings**: `Geist Sans` (`font-geist`), with tight tracking (`tracking-tight` / `-0.03em`), geometric clarity, and high typographic contrast.
* **Body / Descriptions**: `Geist Sans` or `Inter`, fluid `text-sm` to `text-base`, maximum line length 65 characters, high contrast.
* **Telemetry & Badges**: `Geist Mono` (`font-mono-geist`), uppercase spatial labels, bracketed status indicators `[PASS]`, and numeric readouts (`tabular-nums`).

### 2.3 Monolithic Card Recipe
```tsx
className="p-8 rounded-3xl bg-white/[0.02] border-t border-white/30 border-x border-b border-white/5 backdrop-blur-2xl shadow-2xl relative group hover:bg-white/[0.04] transition-all duration-300"
```

---

## 3. Section-by-Section Architectural Blueprint

The website will be rebuilt with all 9 required sections in strict logical cadence, replacing current layouts with the Monolithic Minimalist Glass standard:

### 3.1 Floating Monolithic Navbar (`Navbar.tsx`)
* **Layout**: Centered, floating glass capsule (`h-14`, rounded-full, `bg-white/[0.03] backdrop-blur-2xl border border-white/10`).
* **Brand Monogram**: Square monolith `MSM` in crisp white & black.
* **Navigation Links**: Clean text links (`Overview`, `Pipeline`, `Skills`, `Experience`, `Frameworks`, `Honors`, `Contact`).
* **Status Beacon**: `Available for SDET Roles` with a pulsing emerald status pip.
* **Quick CV Action**: Fast direct download button for `/resume.pdf`.
* **Theme Toggle**: Spring-physics Moon/Sun icon toggle.
* **Mobile Support**: Smooth slide-down glass drawer with high-contrast text.

### 3.2 Hero Section (`HeroSection.tsx`)
* **Headline**: *"Quality, reduced to its essence."*
* **Subheading**: Concise technical hook detailing Playwright end-to-end automation, 15,000+ VU load profiling, and zero-defect release architecture for Brain Station 23 clients.
* **Architectural Metric Slabs (The Core Visual)**:
  * `80%+` — Automated Coverage (120+ High-Value E2E User Flows)
  * `75%` — Runtime Reduction (14h manual cycle slashed to 3.5h parallel execution)
  * `15k+` — Virtual Users (Apache JMeter Concurrency Peak under SLA)
  * `99.4%` — Verified Platform Uptime (15+ major zero-defect production releases)
* **Dual Monolithic CTAs**: *Explore Automation Frameworks* (Primary White Glass) + *Download Resume PDF* (Secondary Rim Glass).

### 3.3 Visual QA Pipeline Architecture (`PipelineSection.tsx`)
* **Visual Graph**: Interactive 4-stage connected horizontal pipeline rendered in monolithic glass:
  * **Stage 01: PR Ingest & Type Validation** (`GitHub Actions` webhook, strict typecheck, secrets audit).
  * **Stage 02: Playwright Parallel E2E Grid** (4 concurrent workers across Chromium, Firefox, WebKit; Page Object Model).
  * **Stage 03: JMeter Concurrency Stress** (15,000 VUs, flash-sale traffic simulation, p95 < 1.74s SLA).
  * **Stage 04: Production Release Gate** (Zero-defect policy, 99.4% uptime, zero rollback sign-off).

### 3.4 Telemetry & QA Methodology (`QaMethodologySection.tsx`)
* **Visual 7-Dimension QA Audit Matrix**: Replacing prose with an interactive glass matrix grid:
  1. Functional & Boundary Correctness
  2. Visual Hierarchy & Spatial Cadence
  3. Interaction & Keyboard Feedback
  4. Cross-Browser & Device Concurrency
  5. E2E User Shopping Journeys (bKash/Nagad checkout, multi-branch stock sync)
  6. Edge Cases & Chaos Resilience
  7. WCAG 2.1/2.2 AA Accessibility & Screen-Reader Compatibility

### 3.5 Automation Arsenal & Tech Stack (`SkillsSection.tsx`)
* **Zero Generic Icons**: Every technology utilizes its official multi-color brand vector SVG directly from official domains:
  * **Automation**: Playwright, Selenium, Cypress, Appium
  * **Performance & API**: Apache JMeter, Postman, K6
  * **Languages & Core**: TypeScript, JavaScript, Python, Java
  * **DevOps & CI/CD**: GitHub Actions, Docker, GitLab CI
  * **Test Ops & PM**: Jira, Azure Boards, Trello
* **Layout**: Categorized monolithic glass grid cards with proficiency metrics and live test count chips.

### 3.6 Career & Production Platform Timeline (`ExperienceSection.tsx`)
* **Brain Station 23 (SQA Engineer II, 2+ Years)**:
  * **Shwapno** (Bangladesh's premier grocery & retail e-commerce platform): Automated cart checkout, Algolia search integration, multi-branch local inventory synchronization, and bKash payment gateway verification.
  * **Paragon** (Enterprise e-commerce & retail): Multi-warehouse stock management, bulk ordering workflows, and stress-tested payment webhooks.
  * Monolithic glass timeline nodes with quantified business impact chips.

### 3.7 Featured Automation Frameworks (`ProjectsSection.tsx`)
* **Interactive Architecture Showcases**:
  * **Project 1: Playwright TypeScript E2E Framework**: Modular Page Object Model architecture with custom fixtures, automated screenshots on failure, and HTML telemetry reports.
  * **Project 2: JMeter Distributed Concurrency Benchmark Suite**: Non-GUI distributed load generator simulating 15,000 virtual shoppers with automated SLA breach alerts.
  * **Project 3: GitHub Actions Continuous QA Gate**: Multi-stage pull-request verification pipeline triggering parallel test execution before merging into `main`.
* **Telemetry Tabs**: Interactive switcher inside glass containers using `<AnimatePresence mode="wait">` to inspect architecture, code snippets, and execution metrics.

### 3.8 Verified Certifications & Honors (`CertificationsSection.tsx`)
* **Strict Ground-Truth Credentials**:
  * **Batch 16 SQA Professional Certification**: Comprehensive software quality assurance and automation certification.
  * **B.Sc. in Computer Science & Engineering**: Daffodil International University (DIU).
  * **nopStation Agility & Excellence Award**: Recognized for outstanding performance and zero-defect delivery on Team Shwapno & Paragon at Brain Station 23.
* **Layout**: Monolithic frosted plaques with verified verification chips.

### 3.9 Resume Station (`ResumeSection.tsx`)
* **Clean Monolithic Download Box**: Unboxed, prominent download callout serving verified technical CV from `/resume.pdf`.

### 3.10 Direct Communication Hub (`ContactSection.tsx`)
* **Zero Form Friction**: Replaces obsolete form inputs with instant 1-click copyable glass communication buttons:
  * **Direct Email**: `shazzadm065@gmail.com` (1-click copy + instant toast feedback + direct `mailto:` fallback)
  * **Phone / WhatsApp**: `+8801621864789` (1-click copy + direct call/chat link)
  * **LinkedIn Profile**: `https://linkedin.com/in/md-shazzad-mia`
  * **GitHub Profile**: `https://github.com/Shazzad01`
  * **Live Availability**: `Dhaka, Bangladesh (UTC+6) — Active SDET Lead`

### 3.11 Monolithic Footer (`Footer.tsx`)
* **Minimalist Sign-off**: Crisp copyright, technical attribution (*Built for Zero-Flake Quality*), and quick icon links.

---

## 4. Animation & Kinematic Standards

1. **Spring Physics**:
   * Buttons & Chips: `stiffness: 400, damping: 30` (Snappy Tactile).
   * Glass Cards & Modals: `stiffness: 300, damping: 32` (Fluid Standard).
2. **Tab & Grid Swapping**:
   * All dynamic grids wrapped in `<AnimatePresence mode="wait">` with explicit `key` to prevent grid layout collisions.
3. **Reduced Motion**:
   * Complete compliance with `useReducedMotion()`. If enabled, transitions drop to instant opacity swaps.

---

## 5. Quality, Type Safety & Verification Plan

1. **TypeScript Typecheck**:
   * Strict `npx tsc --noEmit` pass with zero type errors.
2. **7-Dimension QA Audit**:
   * Verification of content accuracy, spatial balance, keyboard accessibility, mobile viewport responsiveness (375px to 1440px), and copy clipboard functionality.
3. **Core Web Vitals & Performance**:
   * Lighthouse score target ≥ 90 across Performance, Accessibility, Best Practices, and SEO.
4. **Git Remote Synchronization**:
   * Changes committed under Conventional Commits format and synchronized directly to GitHub `origin main`.

---

## 6. Spec Self-Review Checklist

* [x] **Placeholder Scan**: Zero "TBD", "TODO", or undefined mock values.
* [x] **Internal Consistency**: Matches user rules, master career data, and design token constraints.
* [x] **Scope Check**: Comprehensive full-site rebuild decomposed into clean, modular components.
* [x] **Ambiguity Check**: Precise color hexes, component names, and data contracts explicitly specified.
