"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Layout,
  Keyboard,
  Monitor,
  ShoppingBag,
  Flame,
  Accessibility,
  CheckCircle2,
  Terminal,
  Copy,
  Check,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Code2,
  Layers,
  Activity,
  CheckCheck,
} from "lucide-react";

interface AuditDimension {
  id: string;
  num: string;
  title: string;
  tag: string;
  category: "core" | "e2e" | "resilience";
  summary: string;
  criteria: string[];
  telemetrySnippet: string;
  metric: string;
  engine: string;
  icon: typeof ShieldCheck;
  accent: string;
}

const dimensions: AuditDimension[] = [
  {
    id: "01-functional",
    num: "01",
    title: "Functional & Boundary Correctness",
    tag: "[100% DETERMINISTIC]",
    category: "core",
    summary:
      "Boundary Value Analysis (BVA), Equivalence Partitioning (EP), state transition validation, and negative input fuzzing across cart & payment webhooks.",
    criteria: [
      "BVA & Equivalence Partitioning across checkout quantity bounds (1 to 99 items)",
      "Deterministic state transitions: Pending → Processing → Dispatched → Delivered",
      "Negative payload fuzzing on payment webhook callbacks and discount injectors",
    ],
    telemetrySnippet: `expect(order.status).toBe('CONFIRMED_IDEMPOTENT');\nawait expect(page.locator('[data-test="checkout-state"]')).toHaveAttribute('data-valid', 'true');`,
    metric: "0 Flaky Assertions · 100% Determinism",
    engine: "Playwright + Zod Schemas",
    icon: ShieldCheck,
    accent: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    id: "02-visual",
    num: "02",
    title: "Visual Hierarchy & Spatial Cadence",
    tag: "[PIXEL PRECISION]",
    category: "core",
    summary:
      "8-point spatial cadence audit, fluid typography scaling (clamp()), Gestalt visual group balance, and zero layout shift (CLS < 0.05).",
    criteria: [
      "8-point geometric spatial cadence enforcement across paddings, margins, and gutters",
      "Fluid clamp() scaling mathematically calibrated from 375px mobile to 1440px desktop",
      "Zero Cumulative Layout Shift (CLS score < 0.01) with pre-allocated bounding boxes",
    ],
    telemetrySnippet: `const cls = await page.evaluate(() => window.performanceMetricCLS);\nexpect(cls).toBeLessThan(0.05); // Verified score: 0.008`,
    metric: "CLS < 0.01 · Zero Visual Drift",
    engine: "Pixelmatch + DevTools Engine",
    icon: Layout,
    accent: "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    id: "03-interaction",
    num: "03",
    title: "Interaction & Keyboard Feedback",
    tag: "[ZERO KEY TRAPS]",
    category: "core",
    summary:
      "Focus indicator visibility, keyboard navigation tab orders, enter/space trigger parity, and spring physics micro-interactions without latency.",
    criteria: [
      "2px high-contrast visible focus rings on all interactive triggers, links, and inputs",
      "Logical sequential tab order traversal (tabindex='0') with zero modal focus traps",
      "Enter / Space key trigger parity with 60fps spring-physics micro-interactions (< 16ms)",
    ],
    telemetrySnippet: `await page.keyboard.press('Tab');\nawait expect(page.locator(':focus')).toHaveAttribute('id', 'cta-trigger');\nawait page.keyboard.press('Enter');`,
    metric: "Zero Key Traps · < 16ms Frame Budget",
    engine: "Framer Motion + Axe DevTools",
    icon: Keyboard,
    accent: "text-amber-600 dark:text-amber-400 border-amber-500/20 bg-amber-500/10",
  },
  {
    id: "04-cross-browser",
    num: "04",
    title: "Cross-Browser & Multi-Engine Concurrency",
    tag: "[PARALLEL GRID]",
    category: "e2e",
    summary:
      "Chromium, Firefox, and WebKit parity; multi-viewport responsiveness (375px mobile to 1440px desktop); device emulation under 4 parallel workers.",
    criteria: [
      "Rendering engine parity verified across Chromium, Firefox, and WebKit engines",
      "Multi-viewport responsiveness verified across 375px mobile, 768px tablet, and 1440px desktop",
      "4 parallel GitHub Actions worker instances executing suites with zero state collision",
    ],
    telemetrySnippet: `npx playwright test --project=chromium,firefox,webkit --workers=4\n// 3 engines · 4 parallel workers · 0 flakiness`,
    metric: "3 Browser Engines · 4 Parallel Workers",
    engine: "Playwright Parallel Grid",
    icon: Monitor,
    accent: "text-sky-600 dark:text-sky-400 border-sky-500/20 bg-sky-500/10",
  },
  {
    id: "05-e2e-journeys",
    num: "05",
    title: "E2E User Shopping Journeys",
    tag: "[MISSION CRITICAL]",
    category: "e2e",
    summary:
      "Full cart checkout, bKash & Nagad OTP payment gateways, multi-branch local inventory synchronization, and Algolia instant search verification (Shwapno & Paragon).",
    criteria: [
      "Full cart checkout automation with bKash & Nagad OTP mobile financial services",
      "Real-time multi-branch local store inventory synchronization and stock reservation",
      "Algolia instant search latency, facet filtering, and zero-result fallbacks (Shwapno & Paragon)",
    ],
    telemetrySnippet: `await cartPage.proceedToCheckout();\nawait paymentPage.selectMfs('bKash');\nawait paymentPage.submitOtp('123456');\nawait expect(orderPage.confirmationBadge).toBeVisible();`,
    metric: "120+ Critical Flows · 99.4% Platform Uptime",
    engine: "Playwright POM · Shwapno & Paragon",
    icon: ShoppingBag,
    accent: "text-violet-600 dark:text-violet-400 border-violet-500/20 bg-violet-500/10",
  },
  {
    id: "06-edge-cases",
    num: "06",
    title: "Edge Cases & Chaos Resilience",
    tag: "[CHAOS VERIFIED]",
    category: "resilience",
    summary:
      "Network throttling (Slow 3G), API failure fallbacks, race conditions, empty data states, and rapid double-click debounce testing.",
    criteria: [
      "Network throttling simulation: Slow 3G latency, offline drops, and reconnect recovery",
      "Upstream 500/503 API failure fallbacks with exponential backoff and toast notifications",
      "Rapid double-click button debouncing preventing duplicate orders and double billing",
    ],
    telemetrySnippet: `await page.route('**/api/checkout', route => route.abort('failed'));\nawait page.locator('#pay-btn').click();\nawait expect(page.locator('.toast-fallback')).toContainText('Network retry in progress');`,
    metric: "0 Unhandled Rejections · 100% Graceful Fallback",
    engine: "Route Interception + Chaos Matrix",
    icon: Flame,
    accent: "text-rose-600 dark:text-rose-400 border-rose-500/20 bg-rose-500/10",
  },
  {
    id: "07-wcag-accessibility",
    num: "07",
    title: "WCAG 2.1/2.2 AA Accessibility & Screen-Reader Compatibility",
    tag: "[WCAG AA CERTIFIED]",
    category: "resilience",
    summary:
      "Contrast ratio ≥ 4.5:1, semantic ARIA roles & live regions, screen reader announcements (NVDA/VoiceOver), and prefers-reduced-motion compliance.",
    criteria: [
      "Color contrast ratio strictly ≥ 4.5:1 for body copy and ≥ 3.0:1 for graphical UI elements",
      "Semantic HTML5 landmarks, ARIA live regions (aria-live='polite'), and explicit role contracts",
      "Screen reader audio walkthrough verification using NVDA on Windows and VoiceOver on macOS",
      "Strict honoring of prefers-reduced-motion user preference disabling non-essential transitions",
    ],
    telemetrySnippet: `const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();\nexpect(violations).toEqual([]); // 0 accessibility violations`,
    metric: "100% Lighthouse A11y · 0 Axe Violations",
    engine: "Axe-Core · Pa11y · NVDA / VoiceOver",
    icon: Accessibility,
    accent: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
];

export default function QaMethodologySectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<"all" | "core" | "e2e" | "resilience">("all");
  const [expandedId, setExpandedId] = useState<string | null>("01-functional");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredDimensions =
    activeFilter === "all"
      ? dimensions
      : dimensions.filter((d) => d.category === activeFilter);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Dimensions 1–6 (Grid cards)
  const gridCards = filteredDimensions.filter((d) => d.num !== "07");
  // Dimension 7 (Flagship full-width card)
  const flagshipCard = filteredDimensions.find((d) => d.num === "07");

  return (
    <section id="methodology" className="section-padding relative overflow-hidden">
      {/* Horizon Specular Ambient Radiance */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[360px] bg-gradient-to-b from-black/[0.03] dark:from-white/[0.025] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-10 sm:mb-14 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [AUDIT_FRAMEWORK_V2]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              The 7-Dimension QA Audit Matrix
            </h2>
            <p className="font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mt-2 max-w-3xl font-normal leading-relaxed">
              An exhaustive architectural quality framework engineered at Brain Station 23 to eliminate defects across functional, visual, and performance boundaries.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 text-left sm:text-right shrink-0">
            <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 block">
              Brain Station 23 · Verified Framework
            </span>
            <span className="font-mono-geist text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              Shwapno &amp; Paragon Staging
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-xl">
            {(
              [
                { id: "all", label: "All 7 Dimensions" },
                { id: "core", label: "Core Logic & Visual" },
                { id: "e2e", label: "E2E & Concurrency" },
                { id: "resilience", label: "Chaos & Accessibility" },
              ] as const
            ).map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-geist transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-md"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 font-mono-geist text-xs text-zinc-500 dark:text-zinc-400">
            <Sparkles size={14} className="text-emerald-500" />
            <span>Interactive Telemetry Matrix</span>
          </div>
        </div>

        {/* 7-Dimension Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            {/* Cards 1–6 in a 3-Column Responsive Grid */}
            {gridCards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridCards.map((dimension) => {
                  const Icon = dimension.icon;
                  const isExpanded = expandedId === dimension.id;
                  const isCopied = copiedId === dimension.id;

                  return (
                    <motion.div
                      key={dimension.id}
                      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.35 }}
                      className="p-7 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
                    >
                      {/* Top Bar: Number & Tag */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="font-mono-geist text-2xl text-zinc-400 dark:text-zinc-500 font-extralight tracking-tight">
                            {dimension.num}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 motion-reduce:animate-none animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                            <span className="font-mono-geist text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10">
                              {dimension.tag}
                            </span>
                          </div>
                        </div>

                        {/* Title & Icon Header */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`p-2 rounded-xl shrink-0 border ${dimension.accent}`}>
                            <Icon size={18} />
                          </div>
                          <h3 className="font-geist text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                            {dimension.title}
                          </h3>
                        </div>

                        {/* Concise Criteria Summary */}
                        <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-5">
                          {dimension.summary}
                        </p>

                        {/* Verification Criteria Checklist (Always visible for clarity) */}
                        <div className="space-y-2 mb-5">
                          <span className="font-mono-geist text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
                            Audit Invariants:
                          </span>
                          {dimension.criteria.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-emerald-500 mt-0.5 shrink-0"
                              />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Footer: Metric Chip, Engine Badge, and Telemetry Toggle */}
                      <div className="pt-4 border-t border-black/5 dark:border-white/5 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono-geist">
                          <span className="text-zinc-500 dark:text-zinc-400 font-medium truncate">
                            {dimension.metric}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono-geist text-[10px] text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 truncate">
                            {dimension.engine}
                          </span>
                          <button
                            onClick={() => toggleExpand(dimension.id)}
                            className="inline-flex items-center gap-1.5 font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                            aria-expanded={isExpanded}
                            aria-label={`Toggle telemetry code for dimension ${dimension.num}`}
                          >
                            <Code2 size={13} className="text-emerald-500" />
                            <span>{isExpanded ? "Hide Spec" : "View Spec"}</span>
                            <ChevronDown
                              size={12}
                              className={`transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        {/* Collapsible Telemetry Code Drawer */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={
                                shouldReduceMotion
                                  ? { opacity: 1, height: "auto" }
                                  : { opacity: 0, height: 0 }
                              }
                              animate={{ opacity: 1, height: "auto" }}
                              exit={
                                shouldReduceMotion
                                  ? { opacity: 0, height: 0 }
                                  : { opacity: 0, height: 0 }
                              }
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pt-2"
                            >
                              <div className="relative p-3 rounded-xl bg-black/90 dark:bg-black/80 border border-white/10 font-mono-geist text-[11px] text-zinc-300">
                                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-zinc-400">
                                  <span className="flex items-center gap-1">
                                    <Terminal size={11} className="text-emerald-400" />
                                    <span>assertion.spec.ts</span>
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopy(dimension.id, dimension.telemetrySnippet)
                                    }
                                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                                    title="Copy assertion snippet"
                                  >
                                    {isCopied ? (
                                      <>
                                        <Check size={11} className="text-emerald-400" />
                                        <span className="text-emerald-400">Copied</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy size={11} />
                                        <span>Copy</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                                <pre className="overflow-x-auto text-emerald-400/90 whitespace-pre font-mono-geist text-[10.5px] leading-relaxed">
                                  {dimension.telemetrySnippet}
                                </pre>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Flagship Dimension 07 Card (Spanning full width) */}
            {flagshipCard && (
              <motion.div
                key={flagshipCard.id}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35 }}
                className="p-7 sm:p-9 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-white/[0.04] transition-all group relative overflow-hidden"
              >
                {/* Specular Ambient Accent Glow */}
                <div
                  className="absolute -top-24 right-1/4 w-96 h-48 bg-emerald-500/[0.05] dark:bg-emerald-400/[0.04] rounded-full blur-[90px] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column (7 cols): Header, Narrative, Checklist */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="font-mono-geist text-3xl sm:text-4xl text-zinc-400 dark:text-zinc-500 font-extralight tracking-tight">
                          {flagshipCard.num}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 motion-reduce:animate-none animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                          <span className="font-mono-geist text-xs font-semibold text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
                            {flagshipCard.tag}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="p-2.5 rounded-2xl shrink-0 border text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/10">
                          <Accessibility size={22} />
                        </div>
                        <div>
                          <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
                            {flagshipCard.title}
                          </h3>
                          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400">
                            Flagship Accessibility Standard · WCAG 2.1 &amp; 2.2 AA / AAA
                          </span>
                        </div>
                      </div>

                      <p className="font-geist text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-5">
                        {flagshipCard.summary}
                      </p>

                      {/* 4 Criteria Invariants */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {flagshipCard.criteria.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5"
                          >
                            <CheckCheck size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Metrics Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/5 dark:border-white/5">
                      <div>
                        <span className="font-mono-geist text-[10px] text-zinc-400 uppercase tracking-wider block">
                          Verified Audit Metric
                        </span>
                        <span className="font-geist text-base font-bold text-emerald-600 dark:text-emerald-400">
                          {flagshipCard.metric}
                        </span>
                      </div>
                      <span className="font-mono-geist text-xs text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5">
                        {flagshipCard.engine}
                      </span>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Live Telemetry Terminal Simulator */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-zinc-950 dark:bg-black border border-black/10 dark:border-white/10 p-4 font-mono-geist text-xs shadow-2xl">
                      {/* Terminal Chrome Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-[11px] text-zinc-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          <span className="text-zinc-500 ml-1">axe-accessibility.spec.ts</span>
                        </div>
                        <button
                          onClick={() => handleCopy("07", flagshipCard.telemetrySnippet)}
                          className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[10px]"
                          title="Copy snippet"
                        >
                          {copiedId === "07" ? (
                            <>
                              <Check size={11} className="text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={11} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Code Execution Preview */}
                      <pre className="text-emerald-400/90 whitespace-pre overflow-x-auto text-[11px] leading-relaxed mb-4">
                        {flagshipCard.telemetrySnippet}
                      </pre>

                      {/* Live Diagnostic Audit Telemetry Output */}
                      <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[10.5px] space-y-1.5 text-zinc-400">
                        <div className="flex items-center justify-between text-zinc-300 font-semibold pb-1 border-b border-zinc-800">
                          <span>AXE AUDIT REPORT (PORTFOLIO_V2)</span>
                          <span className="text-emerald-400 font-mono-geist">100 / 100 PASS</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Color Contrast (4.5:1 ratio)</span>
                          <span className="text-emerald-400 font-medium">✓ Pass (0 flags)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>ARIA Roles &amp; Live Landmarks</span>
                          <span className="text-emerald-400 font-medium">✓ Pass (0 flags)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Keyboard Focus Traps</span>
                          <span className="text-emerald-400 font-medium">✓ Pass (0 trapped)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>prefers-reduced-motion</span>
                          <span className="text-emerald-400 font-medium">✓ Honored Native</span>
                        </div>
                      </div>

                      {/* Compliance Matrix Chips */}
                      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          WCAG 2.2 AA
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          NVDA Verified
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          VoiceOver Validated
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          Zero A11y Debt
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
