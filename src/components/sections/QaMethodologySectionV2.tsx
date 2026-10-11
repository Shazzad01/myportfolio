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
  Terminal,
  Copy,
  Check,
  ChevronDown,
  Sparkles,
  Code2,
} from "lucide-react";

interface AuditDimension {
  id: string;
  num: string;
  title: string;
  tag: string;
  category: "core" | "e2e" | "resilience";
  summary: string;
  chips: string[];
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
    title: "Functional & Cart Boundaries",
    tag: "[DETERMINISTIC]",
    category: "core",
    summary:
      "Prevents cart crashes, invalid item quantities, and duplicate payment charges before they ever reach customers.",
    chips: [
      "1–99 Item Quantity Limits",
      "Anti-Double Billing Guard",
      "State: Cart → Confirmed",
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
    title: "Visual & Responsive Precision",
    tag: "[ZERO DRIFT]",
    category: "core",
    summary:
      "Guarantees zero layout shifts and pixel-accurate alignment across mobile, tablet, and desktop screens.",
    chips: [
      "375px Mobile ↔ 1440px Desktop",
      "CLS < 0.01 (Zero Shift)",
      "8pt Spatial Rhythm",
    ],
    telemetrySnippet: `const cls = await page.evaluate(() => window.performanceMetricCLS);\nexpect(cls).toBeLessThan(0.01); // Verified score: 0.008`,
    metric: "CLS < 0.01 · Zero Visual Drift",
    engine: "Pixelmatch + DevTools Engine",
    icon: Layout,
    accent: "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    id: "03-interaction",
    num: "03",
    title: "Keyboard & Interaction Flow",
    tag: "[ZERO KEY TRAPS]",
    category: "core",
    summary:
      "Ensures all buttons, modals, and menus are 100% navigable with Tab and Enter keys without getting trapped.",
    chips: [
      "Tab & Enter Key Parity",
      "Visible Focus Rings",
      "< 16ms Frame Budget",
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
    title: "Cross-Browser Engine Parity",
    tag: "[PARALLEL GRID]",
    category: "e2e",
    summary:
      "Validates identical behavior across Chromium, Firefox, and WebKit running on 4 parallel cloud workers.",
    chips: [
      "Chrome · Firefox · Safari",
      "4 Parallel Workers",
      "Zero State Collisions",
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
    title: "E2E Checkout & Payment",
    tag: "[MISSION CRITICAL]",
    category: "e2e",
    summary:
      "Automates full checkout journeys with bKash/Nagad OTP payments and live store stock sync (Shwapno & Paragon).",
    chips: [
      "bKash & Nagad OTP Flows",
      "Multi-Branch Stock Sync",
      "Instant Algolia Search",
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
    title: "Chaos & Network Resilience",
    tag: "[CHAOS VERIFIED]",
    category: "resilience",
    summary:
      "Simulates Slow 3G network drops, API 500 errors, and rapid button double-clicks with graceful auto-recovery.",
    chips: [
      "Slow 3G Latency Simulation",
      "Offline Auto-Recovery",
      "Rapid Click Debouncing",
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
    title: "WCAG 2.1/2.2 AA Accessibility & Screen Readers",
    tag: "[WCAG AA CERTIFIED]",
    category: "resilience",
    summary:
      "Guarantees 100% keyboard accessibility, high-contrast text ratios, screen-reader audio announcements, and reduced-motion support for all users.",
    chips: [
      "4.5:1+ Contrast Ratio",
      "NVDA & VoiceOver Tested",
      "0 Keyboard Traps",
      "Prefers-Reduced-Motion",
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
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy assertion snippet:", err);
        });
    }
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
          <div
            role="tablist"
            aria-label="Filter categories"
            className="flex flex-wrap items-center gap-2 p-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-xl"
          >
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
                  role="tab"
                  aria-selected={isActive}
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

                        {/* Plain-English High-Impact Summary */}
                        <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-5 text-pretty">
                          {dimension.summary}
                        </p>

                        {/* Visual Telemetry Feature Chips */}
                        <div className="space-y-2 mb-5">
                          <span className="font-mono-geist text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
                            Verified Telemetry:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {dimension.chips.map((chip, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 font-mono-geist text-[11px] text-zinc-700 dark:text-zinc-300 font-medium tracking-tight"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shrink-0" />
                                <span>{chip}</span>
                              </span>
                            ))}
                          </div>
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
                                    type="button"
                                    onClick={() =>
                                      handleCopy(dimension.id, dimension.telemetrySnippet)
                                    }
                                    className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                                    title="Copy assertion snippet"
                                    aria-label={`Copy assertion snippet for dimension ${dimension.num}`}
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

                      <p className="font-geist text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-5 text-pretty">
                        {flagshipCard.summary}
                      </p>

                      {/* Visual Telemetry Feature Chips */}
                      <div className="space-y-2 mb-6">
                        <span className="font-mono-geist text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block">
                          Verified Accessibility Controls:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {flagshipCard.chips.map((chip, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs font-mono-geist font-medium text-zinc-700 dark:text-zinc-300 px-3 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10"
                            >
                              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                              <span className="truncate">{chip}</span>
                            </div>
                          ))}
                        </div>
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
                          type="button"
                          onClick={() => handleCopy("07", flagshipCard.telemetrySnippet)}
                          className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[10px]"
                          title="Copy snippet"
                          aria-label="Copy axe accessibility assertion snippet"
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
