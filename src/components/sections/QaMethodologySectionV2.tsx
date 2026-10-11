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
  subtitle: string;
  tag: string;
  category: "core" | "e2e" | "resilience";
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
    title: "Functional & Cart Limits",
    subtitle: "Boundary & State Validation",
    tag: "[DETERMINISTIC]",
    category: "core",
    telemetrySnippet: `expect(order.status).toBe('CONFIRMED_IDEMPOTENT');\nawait expect(page.locator('[data-test="checkout-state"]')).toHaveAttribute('data-valid', 'true');`,
    metric: "100% Deterministic · 0 Flaky",
    engine: "Playwright + Zod",
    icon: ShieldCheck,
    accent: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    id: "02-visual",
    num: "02",
    title: "Visual & Responsive Precision",
    subtitle: "Multi-Device Layout Alignment",
    tag: "[ZERO DRIFT]",
    category: "core",
    telemetrySnippet: `const cls = await page.evaluate(() => window.performanceMetricCLS);\nexpect(cls).toBeLessThan(0.01); // Verified score: 0.008`,
    metric: "CLS: 0.000 · Zero Layout Drift",
    engine: "Pixelmatch + DevTools",
    icon: Layout,
    accent: "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    id: "03-interaction",
    num: "03",
    title: "Keyboard & Focus Navigation",
    subtitle: "Sequential Traversal & Latency",
    tag: "[ZERO KEY TRAPS]",
    category: "core",
    telemetrySnippet: `await page.keyboard.press('Tab');\nawait expect(page.locator(':focus')).toHaveAttribute('id', 'cta-trigger');\nawait page.keyboard.press('Enter');`,
    metric: "Zero Key Traps · < 16ms Latency",
    engine: "Framer Motion + Axe",
    icon: Keyboard,
    accent: "text-amber-600 dark:text-amber-400 border-amber-500/20 bg-amber-500/10",
  },
  {
    id: "04-cross-browser",
    num: "04",
    title: "Cross-Browser Engine Parity",
    subtitle: "Concurrent Multi-Engine Testing",
    tag: "[PARALLEL GRID]",
    category: "e2e",
    telemetrySnippet: `npx playwright test --project=chromium,firefox,webkit --workers=4\n// 3 engines · 4 parallel workers · 0 flakiness`,
    metric: "3 Engines · 4 Parallel Workers",
    engine: "Playwright Cloud Grid",
    icon: Monitor,
    accent: "text-sky-600 dark:text-sky-400 border-sky-500/20 bg-sky-500/10",
  },
  {
    id: "05-e2e-journeys",
    num: "05",
    title: "E2E Checkout & Payments",
    subtitle: "Shwapno & Paragon Enterprise Staging",
    tag: "[MISSION CRITICAL]",
    category: "e2e",
    telemetrySnippet: `await cartPage.proceedToCheckout();\nawait paymentPage.selectMfs('bKash');\nawait paymentPage.submitOtp('123456');\nawait expect(orderPage.confirmationBadge).toBeVisible();`,
    metric: "120+ Flows · 99.4% Platform Uptime",
    engine: "Playwright POM · bKash / Nagad",
    icon: ShoppingBag,
    accent: "text-violet-600 dark:text-violet-400 border-violet-500/20 bg-violet-500/10",
  },
  {
    id: "06-edge-cases",
    num: "06",
    title: "Chaos & Network Resilience",
    subtitle: "Offline & Network Drop Recovery",
    tag: "[CHAOS VERIFIED]",
    category: "resilience",
    telemetrySnippet: `await page.route('**/api/checkout', route => route.abort('failed'));\nawait page.locator('#pay-btn').click();\nawait expect(page.locator('.toast-fallback')).toContainText('Network retry in progress');`,
    metric: "0 Unhandled Drops · Auto-Recovery",
    engine: "Route Intercept + Chaos Matrix",
    icon: Flame,
    accent: "text-rose-600 dark:text-rose-400 border-rose-500/20 bg-rose-500/10",
  },
];

/* ─── Bespoke Visual Telemetry Micro-Widgets ─── */

function Dimension01Visual() {
  return (
    <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-black/60 border border-black/5 dark:border-white/5 space-y-3 font-mono-geist">
      {/* Visual Pipeline Flow */}
      <div className="flex items-center justify-between text-[11px] gap-1">
        <div className="px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium">
          Cart (42)
        </div>
        <span className="text-zinc-400 dark:text-zinc-500 text-xs">→</span>
        <div className="px-2 py-1 rounded-lg bg-black/[0.04] dark:bg-zinc-800/80 border border-black/5 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300 font-medium">
          Zod: ✓
        </div>
        <span className="text-zinc-400 dark:text-zinc-500 text-xs">→</span>
        <div className="px-2 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-medium">
          Paid #892
        </div>
      </div>

      {/* Visual Boundary Gauge */}
      <div className="space-y-1.5 pt-1">
        <div className="flex justify-between text-[10px] text-zinc-500 font-medium">
          <span>Min: 1</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Value: 42 (Safe Range)</span>
          <span>Max: 99</span>
        </div>
        <div className="h-1.5 w-full bg-black/10 dark:bg-zinc-800/80 rounded-full overflow-hidden relative">
          <div className="h-full bg-gradient-to-r from-emerald-500/40 via-emerald-400 to-emerald-500 rounded-full w-[42%]" />
        </div>
      </div>
    </div>
  );
}

function Dimension02Visual() {
  return (
    <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-black/60 border border-black/5 dark:border-white/5 space-y-3 font-mono-geist">
      {/* Responsive Frames Mockup */}
      <div className="flex items-end justify-center gap-3 h-14">
        {/* Mobile Mockup */}
        <div className="w-10 h-14 rounded-lg border border-black/10 dark:border-zinc-700 bg-black/[0.02] dark:bg-zinc-900/90 p-1 flex flex-col justify-between">
          <div className="w-4 h-0.5 bg-zinc-400 dark:bg-zinc-600 rounded mx-auto" />
          <div className="space-y-1">
            <div className="w-full h-1 bg-cyan-500/40 rounded" />
            <div className="w-2/3 h-1 bg-zinc-300 dark:bg-zinc-700 rounded" />
          </div>
          <span className="text-[7px] text-center text-zinc-500 block">375px</span>
        </div>

        {/* Desktop Mockup */}
        <div className="w-24 h-14 rounded-lg border border-cyan-500/30 bg-black/[0.02] dark:bg-zinc-900/90 p-1.5 flex flex-col justify-between relative shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <div className="flex items-center justify-between pb-1 border-b border-black/5 dark:border-zinc-800">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[7px] text-cyan-600 dark:text-cyan-400 font-mono">1440px</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded" />
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded" />
            <div className="h-4 bg-cyan-500/20 rounded border border-cyan-500/30" />
          </div>
        </div>
      </div>

      {/* CLS Readout */}
      <div className="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-black/5 dark:border-zinc-800/60">
        <span>CLS Score: <strong className="text-cyan-600 dark:text-cyan-400 font-bold">0.000</strong></span>
        <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[9px] border border-cyan-500/20 font-semibold">Zero Drift</span>
      </div>
    </div>
  );
}

function Dimension03Visual() {
  return (
    <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-black/60 border border-black/5 dark:border-white/5 space-y-3 font-mono-geist">
      {/* Keycap to Focus Element Interaction */}
      <div className="flex items-center justify-between gap-1 py-1">
        <kbd className="px-2 py-1 rounded bg-black/5 dark:bg-zinc-800 border-b-2 border-black/20 dark:border-zinc-950 text-[10px] text-zinc-800 dark:text-zinc-200 shadow-sm font-semibold">
          Tab ⇥
        </kbd>
        <span className="text-amber-500/60 text-xs">→</span>
        <div className="px-2 py-1 rounded bg-black/5 dark:bg-zinc-900 border-2 border-amber-400 text-amber-700 dark:text-amber-300 text-[10px] font-semibold shadow-[0_0_10px_rgba(251,191,36,0.3)] animate-pulse">
          :focus [Submit]
        </div>
        <span className="text-amber-500/60 text-xs">→</span>
        <kbd className="px-2 py-1 rounded bg-black/5 dark:bg-zinc-800 border-b-2 border-black/20 dark:border-zinc-950 text-[10px] text-zinc-800 dark:text-zinc-200 shadow-sm font-semibold">
          Enter ↵
        </kbd>
      </div>

      {/* Traversal Invariants */}
      <div className="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-black/5 dark:border-zinc-800/60">
        <span>Key Traps: <strong className="text-emerald-600 dark:text-emerald-400">0 Trapped</strong></span>
        <span>Latency: <strong className="text-amber-600 dark:text-amber-400">&lt; 16ms</strong></span>
      </div>
    </div>
  );
}

function Dimension04Visual() {
  return (
    <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-black/60 border border-black/5 dark:border-white/5 space-y-3 font-mono-geist">
      {/* 3 Engine Badges */}
      <div className="grid grid-cols-3 gap-1.5 text-[10px]">
        <div className="px-1.5 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-center font-medium">
          Chromium ✓
        </div>
        <div className="px-1.5 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-center font-medium">
          Firefox ✓
        </div>
        <div className="px-1.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-center font-medium">
          WebKit ✓
        </div>
      </div>

      {/* 4 Parallel Worker Concurrency Meters */}
      <div className="space-y-1 pt-1">
        <div className="flex justify-between text-[9px] text-zinc-500">
          <span>4 Cloud Workers (Parallel)</span>
          <span className="text-sky-600 dark:text-sky-400 font-semibold">0 Collisions</span>
        </div>
        <div className="grid grid-cols-4 gap-1 h-1.5">
          <div className="h-full bg-sky-400 rounded-full" />
          <div className="h-full bg-sky-400 rounded-full" />
          <div className="h-full bg-sky-400 rounded-full" />
          <div className="h-full bg-sky-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function Dimension05Visual() {
  return (
    <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-black/60 border border-black/5 dark:border-white/5 space-y-3 font-mono-geist">
      {/* Customer Journey Step Pipeline */}
      <div className="flex items-center justify-between text-[9.5px]">
        <span className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">1. Search</span>
        <span className="text-zinc-400 dark:text-zinc-600">→</span>
        <span className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">2. Cart</span>
        <span className="text-zinc-400 dark:text-zinc-600">→</span>
        <span className="px-1.5 py-0.5 rounded bg-violet-500/15 border border-violet-500/30 text-violet-700 dark:text-violet-300 font-medium">3. bKash OTP</span>
        <span className="text-zinc-400 dark:text-zinc-600">→</span>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-medium">4. Placed ✓</span>
      </div>

      {/* Verified Staging Badge */}
      <div className="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-black/5 dark:border-zinc-800/60">
        <span className="truncate">Shwapno &amp; Paragon Staging</span>
        <span className="text-violet-600 dark:text-violet-400 font-semibold shrink-0">120+ Flows</span>
      </div>
    </div>
  );
}

function Dimension06Visual() {
  return (
    <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-black/60 border border-black/5 dark:border-white/5 space-y-2.5 font-mono-geist">
      {/* SVG Network Chaos Waveform */}
      <div className="relative h-10 w-full overflow-hidden flex items-center justify-center">
        <svg className="w-full h-8" viewBox="0 0 200 32" fill="none">
          {/* Normal latency */}
          <path d="M 0 16 Q 25 10, 50 16 T 100 16" stroke="#fb7185" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Chaos drop */}
          <path d="M 100 16 L 115 28 L 130 4" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 3" />
          {/* Graceful recovery */}
          <path d="M 130 4 Q 155 16, 180 16 T 200 16" stroke="#34d399" strokeWidth="2" />
        </svg>
        <span className="absolute top-0 right-1 text-[8.5px] px-1 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
          Auto-Recovered
        </span>
      </div>

      {/* Chaos Invariants */}
      <div className="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-black/5 dark:border-zinc-800/60">
        <span>Slow 3G Simulation</span>
        <span className="text-rose-600 dark:text-rose-400 font-semibold">0 Uncaught</span>
      </div>
    </div>
  );
}

const renderVisualGraphic = (num: string) => {
  switch (num) {
    case "01":
      return <Dimension01Visual />;
    case "02":
      return <Dimension02Visual />;
    case "03":
      return <Dimension03Visual />;
    case "04":
      return <Dimension04Visual />;
    case "05":
      return <Dimension05Visual />;
    case "06":
      return <Dimension06Visual />;
    default:
      return null;
  }
};

/* ─── Main Component ─── */

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

  // Grid cards (Dimensions 01–06)
  const gridCards = filteredDimensions;

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
              The QA Audit Matrix
            </h2>
            <p className="font-geist text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl font-normal leading-relaxed">
              Live telemetry and automated test invariants engineered at Brain Station 23 for Shwapno &amp; Paragon.
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
                { id: "all", label: "All Dimensions" },
                { id: "core", label: "Core Logic & Visual" },
                { id: "e2e", label: "E2E & Concurrency" },
                { id: "resilience", label: "Chaos Resilience" },
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

                  return (
                    <motion.div
                      key={dimension.id}
                      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
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
                        <div className="flex items-start gap-3 mb-1.5">
                          <div className={`p-2 rounded-xl shrink-0 border ${dimension.accent}`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <h3 className="font-geist text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                              {dimension.title}
                            </h3>
                            <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 block mt-0.5">
                              {dimension.subtitle}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Visual Telemetry Graphic (70% Visual) */}
                        <div className="my-5">
                          {renderVisualGraphic(dimension.num)}
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
                          <span className="font-mono-geist text-[10px] text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 truncate min-w-0">
                            {dimension.engine}
                          </span>
                          <button
                            onClick={() => toggleExpand(dimension.id)}
                            className="inline-flex items-center gap-1.5 font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 shrink-0 whitespace-nowrap"
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
                                    {copiedId === dimension.id ? (
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
