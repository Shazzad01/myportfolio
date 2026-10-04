"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  GitBranch,
  Cpu,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface PipelineStage {
  id: "pr" | "playwright" | "jmeter" | "gate";
  stepNumber: string;
  name: string;
  shortDesc: string;
  headline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  highlight: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

export default function HeroSectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStageIndex, setActiveStageIndex] = useState(1); // default Playwright
  const [isPaused, setIsPaused] = useState(false);

  const stages: PipelineStage[] = [
    {
      id: "pr",
      stepNumber: "01",
      name: "PR Ingest",
      shortDesc: "Lint & Static Check",
      headline: "Automated Pull Request Ingest & Type Validation",
      summary: "GitHub Actions webhook automation validating branch integrity on every pull request.",
      metrics: [
        { label: "Execution Speed", value: "1.2s Fast Pass" },
        { label: "Gate Criteria", value: "Strict TypeCheck" },
        { label: "Security", value: "Secrets Verified" },
      ],
      highlight: "feature/bkash-multi-branch passed all static lint and security checks in CI runner.",
      icon: GitBranch,
    },
    {
      id: "playwright",
      stepNumber: "02",
      name: "Playwright E2E",
      shortDesc: "120+ Flows (POM)",
      headline: "Parallel Cross-Browser Test Automation Grid",
      summary: "Modular TypeScript Playwright framework with Page Object Model (POM) and zero flakiness.",
      metrics: [
        { label: "Automated Coverage", value: "80%+ (120+ Flows)" },
        { label: "Runtime Cut", value: "75% (14h → 3.5h)" },
        { label: "Engines", value: "Chromium, Firefox, WebKit" },
      ],
      highlight: "Multi-branch stock sync, Algolia search, and bKash / Nagad checkout automated across 4 workers.",
      icon: Cpu,
    },
    {
      id: "jmeter",
      stepNumber: "03",
      name: "Concurrency Stress",
      shortDesc: "15k Virtual Users",
      headline: "Apache JMeter High-Concurrency Volumetric Stress",
      summary: "Simulating national flash sale shopping traffic at 10,000+ RPM to eliminate microservice bottlenecks.",
      metrics: [
        { label: "Simulated Load", value: "15,000 VUs" },
        { label: "p95 Latency", value: "1.74s (< 2.0s SLA)" },
        { label: "Error Rate", value: "0.02% (0 Drops)" },
      ],
      highlight: "Isolating 8 critical API bottlenecks and validating DB connection pooling under traffic floods.",
      icon: Flame,
    },
    {
      id: "gate",
      stepNumber: "04",
      name: "Release Gate",
      shortDesc: "Zero-Defect Sign-off",
      headline: "Continuous Quality Governance & Production Sign-Off",
      summary: "Zero-defect release policy maintaining 99.4% platform uptime across 15+ major production releases.",
      metrics: [
        { label: "Platform Uptime", value: "99.4% Verified" },
        { label: "Defect Triage", value: "35% Faster (Copilot)" },
        { label: "Sign-Off Rate", value: "100% On-Time" },
      ],
      highlight: "nopStation Agility & Excellence Award recognized for flawless nationwide deployment and zero rollback.",
      icon: ShieldCheck,
    },
  ];

  // Auto-cycle through the beam if not paused by user
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion, stages.length]);

  const activeStage = stages[activeStageIndex];

  return (
    <section
      id="hero-v2"
      className="relative min-h-[94vh] flex flex-col justify-center items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 mono-grid opacity-60 dark:opacity-40 pointer-events-none" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-white/[0.03] dark:bg-white/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Micro Status Chip */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          <span className="font-mono-geist text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Brain Station 23 · SQA Engineer II
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">/</span>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400">
            Automation &amp; Performance Lead
          </span>
        </motion.div>

        {/* Minimalist Vercel-Style Typography Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-4xl"
        >
          <h1 className="font-geist text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
            Muhammad Shazzad Mia
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Engineering resilient <span className="text-zinc-900 dark:text-zinc-100 font-medium">Playwright test automation</span>, 15,000+ VU high-concurrency benchmarks, and zero-defect CI/CD release gates.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="#projects"
              className="btn-mono-primary px-5 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Automation Frameworks</span>
              <ArrowRight size={14} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn-mono-secondary px-4 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Minimalist Inline Verified Metrics (No heavy box) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 font-mono-geist text-xs text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-zinc-900 dark:text-white font-geist text-base font-bold">80%+</span>
              <span>Automated Coverage</span>
            </div>
            <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-zinc-900 dark:text-white font-geist text-base font-bold">75%</span>
              <span>Runtime Cut</span>
            </div>
            <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-zinc-900 dark:text-white font-geist text-base font-bold">15k+</span>
              <span>VUs Benchmarked</span>
            </div>
            <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-geist text-base font-bold">99.4%</span>
              <span>Platform Uptime</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* MINIMALIST KINETIC PIPELINE BEAM (ZERO BOXES, CLEAN & PURE)     */}
        {/* ============================================================== */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full max-w-3xl mt-16 sm:mt-20 text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Section Sub-heading */}
          <div className="flex items-center justify-between text-xs font-mono-geist text-zinc-400 mb-8 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-3">
            <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 uppercase tracking-widest font-semibold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Automated QA Pipeline Flow
            </span>
            <span className="text-zinc-400 text-[11px] hidden sm:inline">
              Click any stage to inspect live telemetry
            </span>
          </div>

          {/* Horizontal Interactive Kinetic Beam */}
          <div className="relative flex items-center justify-between py-6">
            
            {/* Background Track Line */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[1px] bg-zinc-200 dark:bg-zinc-800 pointer-events-none" />

            {/* Glowing Traveling Beam Gradient */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none w-32"
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      left: ["0%", "85%", "0%"],
                      opacity: [0.3, 0.9, 0.3],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* 4 Interactive Beacon Nodes */}
            {stages.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              const IconComp = stage.icon;

              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    setActiveStageIndex(idx);
                    setIsPaused(true);
                  }}
                  className="group relative z-10 flex flex-col items-center cursor-pointer transition-all duration-300 focus:outline-none"
                >
                  {/* Glowing Node Beacon */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 scale-110 shadow-[0_0_20px_rgba(16,185,129,0.35)] ring-2 ring-emerald-500"
                        : "bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:scale-105"
                    }`}
                  >
                    <IconComp size={16} />
                  </div>

                  {/* Node Label Floating Above/Below */}
                  <div className="mt-3 text-center">
                    <span className="font-mono-geist text-[10px] text-zinc-400 block font-semibold">
                      {stage.stepNumber}
                    </span>
                    <span
                      className={`font-geist text-xs font-semibold block transition-colors ${
                        isSelected
                          ? "text-zinc-900 dark:text-white"
                          : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200"
                      }`}
                    >
                      {stage.name}
                    </span>
                    <span className="font-mono-geist text-[10px] text-zinc-400 block hidden sm:block">
                      {stage.shortDesc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Unboxed Telemetry Showcase (Zero Cards, Clean Typography) */}
          <div className="mt-10 sm:mt-12 text-left pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Headline & Summary */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">
                      {activeStage.stepNumber} // {activeStage.name}
                    </span>
                    <h3 className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                      {activeStage.headline}
                    </h3>
                  </div>

                  <span className="font-mono-geist text-xs text-emerald-600 dark:text-emerald-400 font-semibold shrink-0 flex items-center gap-1.5 mt-1 sm:mt-0">
                    <CheckCircle2 size={13} />
                    Verified in CI
                  </span>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-2xl">
                  {activeStage.summary}
                </p>

                {/* Pure Inline Metric Chips (No Boxes) */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 font-mono-geist text-xs">
                  {activeStage.metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-zinc-500 dark:text-zinc-400">{m.label}:</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Note */}
                <div className="text-xs text-zinc-500 dark:text-zinc-400 italic pt-1">
                  ↳ {activeStage.highlight}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
