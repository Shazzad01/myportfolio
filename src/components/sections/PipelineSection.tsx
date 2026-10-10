"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  ShieldCheck,
  Copy,
  Check,
  Server,
} from "lucide-react";
import {
  PlaywrightIcon,
  JMeterIcon,
  GitHubActionsIcon,
} from "@/components/ui/SvgIcons";

interface PipelineStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  status: string;
  tags: string[];
  duration: string;
  runner: string;
  command: string;
  logs: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  accentColor: string;
}

const pipelineStages: PipelineStage[] = [
  {
    id: "stage-1",
    step: "01",
    title: "PR Static Ingest & Typecheck",
    subtitle: "Pre-merge validation on GitHub Actions",
    status: "[PASS · 42s]",
    tags: ["TypeScript 5.8", "ESLint", "Secret Scan"],
    duration: "42s",
    runner: "GitHub Actions · ubuntu-latest",
    command: "npx tsc --noEmit; npx eslint . --max-warnings=0; gitleaks detect",
    logs: [
      "[00:00:02] ▶ ingest: git fetch origin main --depth=1",
      "[00:00:14] ✓ TypeScript 5.8: 0 diagnostics emitted across 142 modules",
      "[00:00:29] ✓ ESLint strict audit: 0 warnings, 0 errors in CI ruleset",
      "[00:00:41] ✓ Gitleaks scan: 0 credentials or secret entropy anomalies",
      "[00:00:42] 🟢 GATE RESULT: Static ingest verified · Triggering E2E grid",
    ],
    metrics: [
      { label: "Typecheck Time", value: "14.2s" },
      { label: "Modules Scanned", value: "142 files" },
      { label: "Secret Leak Score", value: "0 detected" },
      { label: "Pre-Merge Gate", value: "PASSED" },
    ],
    accentColor: "from-sky-500/20 to-blue-500/5",
  },
  {
    id: "stage-2",
    step: "02",
    title: "Playwright Parallel E2E Grid",
    subtitle: "120+ critical shopping journeys (cart, bKash checkout, search)",
    status: "[PASS · 3m 30s]",
    tags: ["4 Parallel Workers", "Chromium & WebKit", "POM Architecture"],
    duration: "3m 30s",
    runner: "Playwright 1.48 · 4 Workers Grid · Staging Cluster",
    command: "npx playwright test --workers=4 --reporter=line,html",
    logs: [
      "[00:00:05] ▶ workers initialized: 4 parallel runners [Chromium, WebKit]",
      "[00:01:12] ✓ e2e/checkout/bkash-payment.spec.ts: OTP validation simulated (1.8s)",
      "[00:02:04] ✓ e2e/cart/dynamic-voucher.spec.ts: coupon discount assert (940ms)",
      "[00:03:18] ✓ e2e/search/multilingual-query.spec.ts: Bengali & English search (1.2s)",
      "[00:03:30] 🟢 GATE RESULT: 120/120 specs passed · Flakiness: 0.00% · POM auto-waited",
    ],
    metrics: [
      { label: "Parallel Workers", value: "4 Grid Nodes" },
      { label: "E2E Journeys", value: "120 Flows" },
      { label: "Flake Rate", value: "0.00%" },
      { label: "Execution Time", value: "3m 30s" },
    ],
    accentColor: "from-emerald-500/20 to-teal-500/5",
  },
  {
    id: "stage-3",
    step: "03",
    title: "JMeter Concurrency Benchmark",
    subtitle: "High-concurrency flash sale stress profiling",
    status: "[SLA MET · 0.02% Err]",
    tags: ["15,000 VUs", "Distributed Load", "p95 < 1.74s"],
    duration: "12m 45s",
    runner: "Apache JMeter Cluster · Paragon & Shwapno Retail Engine",
    command: "jmeter -n -t shwapno_concurrency_plan.jmx -l results.jtl -e -o ./report",
    logs: [
      "[00:00:30] ▶ ramp-up: thread groups 0 -> 15,000 virtual users over 180s",
      "[00:04:15] ⚡ peak load sustained: 10,420 RPM across catalog & checkout APIs",
      "[00:08:50] 📊 latency profile: p50 = 420ms | p90 = 1.12s | p95 = 1.74s (< 2.0s SLA)",
      "[00:12:10] ✓ HTTP error rate: 0.02% (23 timeouts out of 125,000+ total requests)",
      "[00:12:45] 🟢 GATE RESULT: Concurrency SLA satisfied · No bottleneck detected",
    ],
    metrics: [
      { label: "Concurrent VUs", value: "15,000 VUs" },
      { label: "Peak Throughput", value: "10,420 RPM" },
      { label: "p95 Response", value: "1.74s (<2.0s SLA)" },
      { label: "HTTP Error Rate", value: "0.02%" },
    ],
    accentColor: "from-amber-500/20 to-orange-500/5",
  },
  {
    id: "stage-4",
    step: "04",
    title: "Production Zero-Defect Release Gate",
    subtitle: "Automated sign-off and deployment to live retail infrastructure",
    status: "[ZERO ROLLBACK]",
    tags: ["99.4% Uptime", "15+ Zero-Defect Sprints", "Excellence Award"],
    duration: "Instant Gate",
    runner: "Production Cluster · Brain Station 23 Release Engine",
    command: "gh release create v2.4.0 --notes-file release-audit.md; deploy-prod",
    logs: [
      "[00:00:01] ▶ release verification: validating previous 3 gate attestations",
      "[00:00:04] ✓ Static audit: PASS · E2E grid: 120/120 · JMeter concurrency: p95 1.74s",
      "[00:00:08] ✓ Rollout triggered: zero-downtime rolling deployment to retail cluster",
      "[00:00:15] 🏆 recognition: nopStation Agility & Excellence Award (Team Shwapno & Paragon)",
      "[00:00:20] 🟢 RELEASE SIGNED OFF: 99.4% platform uptime guaranteed · Zero rollback",
    ],
    metrics: [
      { label: "Platform Uptime", value: "99.4% Verified" },
      { label: "Zero-Defect Sprints", value: "15+ Releases" },
      { label: "Rollback Rate", value: "0.00% (Zero)" },
      { label: "Recognition", value: "Excellence Award" },
    ],
    accentColor: "from-emerald-500/20 to-cyan-500/5",
  },
];

export default function PipelineSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedStageId, setSelectedStageId] = useState<string>("stage-2");
  const [copiedCommand, setCopiedCommand] = useState(false);

  const activeStage =
    pipelineStages.find((s) => s.id === selectedStageId) || pipelineStages[1];

  const handleCopyCommand = async (cmd: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(cmd);
        setCopiedCommand(true);
        setTimeout(() => setCopiedCommand(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy pipeline command:", err);
    }
  };

  return (
    <section id="pipeline" className="section-padding relative overflow-hidden">
      {/* Specular Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[360px] bg-gradient-to-b from-black/[0.03] dark:from-white/[0.03] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [PIPELINE_ARCHITECTURE]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Automated QA Pipeline Topology
            </h2>
          </div>
          <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0 max-w-sm sm:text-right">
            Deterministic multi-stage verification gating production deployments across enterprise retail platforms.
          </p>
        </div>

        {/* 4 Connected Pipeline Stages Desktop Track */}
        <div className="relative mb-8 sm:mb-12">
          {/* Horizontal Desktop Connector SVG Line */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] bg-black/10 dark:bg-white/10 pointer-events-none z-0"
            aria-hidden="true"
          >
            {/* Animated Laser Pulse traveling down the pipe */}
            {!shouldReduceMotion && (
              <motion.div
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                animate={{
                  left: ["-10%", "100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "linear",
                }}
              />
            )}
          </div>

          {/* 4 Monolithic Pipeline Node Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {pipelineStages.map((stage, idx) => {
              const isSelected = stage.id === selectedStageId;

              return (
                <motion.div
                  key={stage.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`relative cursor-pointer text-left p-6 rounded-3xl transition-all duration-300 backdrop-blur-2xl overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? "bg-white/[0.04] dark:bg-white/[0.05] border-t-2 border-t-emerald-500 border-x border-b border-black/10 dark:border-white/20 shadow-2xl ring-1 ring-emerald-500/30"
                      : "bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 hover:bg-black/[0.02] dark:hover:bg-white/[0.04] shadow-xl"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedStageId(stage.id);
                    }
                  }}
                >
                  {/* Laser Horizon Specular Top Rim */}
                  <div
                    className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/40 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Stage Header: Number, Icon & Status */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-geist text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          STAGE {stage.step}
                        </span>
                        {isSelected && (
                          <span className="font-mono-geist text-[9px] uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      {/* Brand Icon Match */}
                      <div className="w-6 h-6 flex items-center justify-center">
                        {stage.step === "01" && (
                          <GitHubActionsIcon className="w-5 h-5" />
                        )}
                        {stage.step === "02" && (
                          <PlaywrightIcon className="w-5 h-5" />
                        )}
                        {stage.step === "03" && (
                          <JMeterIcon className="w-5 h-5" />
                        )}
                        {stage.step === "04" && (
                          <ShieldCheck className="w-5 h-5 text-emerald-500" />
                        )}
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h3 className="font-geist text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                      {stage.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                      {stage.subtitle}
                    </p>
                  </div>

                  {/* Tags & Status Bottom Row */}
                  <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {stage.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono-geist text-[10px] px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-300 border border-black/5 dark:border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono-geist pt-1">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)] motion-reduce:animate-none animate-pulse" />
                        {stage.status}
                      </span>
                      <span className="text-[11px] text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                        {isSelected ? "Inspecting" : "Select →"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive Telemetry Console Deck (70/30 Visual Architecture) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -12 }
            }
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Top Rim Specular */}
            <div
              className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/40 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Console Bar Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 flex items-center justify-center">
                  <Terminal size={16} className="text-emerald-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-geist text-xs font-bold text-zinc-900 dark:text-white uppercase">
                      STAGE {activeStage.step} TELEMETRY DECK
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-600">•</span>
                    <span className="font-mono-geist text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      {activeStage.status}
                    </span>
                  </div>
                  <p className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Runner: {activeStage.runner}
                  </p>
                </div>
              </div>

              {/* Command Pill with 1-Click Copy */}
              <div className="flex items-center gap-2 bg-black/[0.04] dark:bg-black/60 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 max-w-full overflow-hidden">
                <span className="font-mono-geist text-xs text-emerald-500 select-none">
                  $
                </span>
                <code className="font-mono-geist text-xs text-zinc-800 dark:text-zinc-200 truncate max-w-xs sm:max-w-md">
                  {activeStage.command}
                </code>
                <button
                  type="button"
                  onClick={() => handleCopyCommand(activeStage.command)}
                  className="p-1 rounded text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy command to clipboard"
                  aria-label="Copy pipeline command"
                >
                  {copiedCommand ? (
                    <Check size={12} className="text-emerald-500" />
                  ) : (
                    <Copy size={12} />
                  )}
                </button>
              </div>
            </div>

            {/* Split Telemetry View: Live Terminal + 4 Metric Slabs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-start">
              {/* Left Column: Monolithic Terminal Stream (7 cols) */}
              <div className="lg:col-span-7 bg-[#05060a] dark:bg-[#030408] rounded-2xl border border-black/15 dark:border-white/10 p-5 shadow-inner">
                {/* Terminal Mac Pips */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="font-mono-geist text-[10px] text-zinc-500">
                    deterministic_execution_stream.log
                  </span>
                </div>

                {/* Log Stream Lines */}
                <div className="space-y-2 font-mono-geist text-xs text-zinc-300">
                  {activeStage.logs.map((logLine, lIdx) => (
                    <div
                      key={lIdx}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-zinc-600 select-none">
                        {String(lIdx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={
                          logLine.includes("🟢")
                            ? "text-emerald-400 font-semibold"
                            : logLine.includes("⚡") || logLine.includes("📊")
                            ? "text-amber-300"
                            : logLine.includes("✓")
                            ? "text-cyan-300"
                            : "text-zinc-400"
                        }
                      >
                        {logLine}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Cursor Blink */}
                <div className="mt-3 flex items-center gap-2 text-xs font-mono-geist text-emerald-400">
                  <span className="w-2 h-4 bg-emerald-400 inline-block motion-reduce:animate-none animate-pulse" />
                  <span className="text-zinc-500 text-[11px]">
                    Stage execution attested · Zero human intervention required
                  </span>
                </div>
              </div>

              {/* Right Column: 4 Architectural Telemetry Metrics (5 cols) */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                {activeStage.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex flex-col justify-between"
                  >
                    <span className="font-mono-geist text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <span className="font-mono-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-3 tabular-nums">
                      {metric.value}
                    </span>
                  </div>
                ))}

                {/* Target Infrastructure Callout */}
                <div className="col-span-2 p-4 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 flex items-center gap-3">
                  <Server className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div className="font-mono-geist text-xs text-zinc-700 dark:text-zinc-300 leading-normal">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      Target Deployment:
                    </span>{" "}
                    Team Shwapno &amp; Paragon Food platforms at Brain Station 23.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
