"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  Building2,
  GitBranch,
  ArrowRight,
  Activity,
  Zap,
  ShieldCheck,
  Gauge,
  Layers,
} from "lucide-react";
import {
  PlaywrightIcon,
  JMeterIcon,
  TypeScriptIcon,
  PostmanIcon,
  DockerIcon,
  GitHubActionsIcon,
  JiraIcon,
} from "@/components/ui/SvgIcons";

type PlatformId = "shwapno" | "paragon";

interface PlatformDetail {
  id: PlatformId;
  name: string;
  tagline: string;
  scopeTag: string;
  metrics: {
    coverage: { value: string; label: string; detail: string; percent: number };
    velocity: {
      before: string;
      after: string;
      cutLabel: string;
      detail: string;
    };
    concurrency: {
      value: string;
      label: string;
      sla: string;
      errorRate: string;
    };
    stability: { value: string; label: string; detail: string };
  };
  pipelineNodes: {
    step: string;
    label: string;
    sublabel: string;
    tool: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[];
  techStack: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[];
}

const platformsData: Record<PlatformId, PlatformDetail> = {
  shwapno: {
    id: "shwapno",
    name: "Shwapno E-Commerce",
    tagline: "Bangladesh's Premier Superstore Omni-Channel Platform",
    scopeTag: "[PRIMARY_PRODUCTION_ECOMMERCE]",
    metrics: {
      coverage: {
        value: "80%+",
        label: "Automated E2E Coverage",
        detail: "120+ mission-critical checkout journeys",
        percent: 85,
      },
      velocity: {
        before: "14h Manual",
        after: "3.5h Parallel CI",
        cutLabel: "-75% Regression Runtime",
        detail: "Reduced full test turnaround from 14h to 3.5h",
      },
      concurrency: {
        value: "15,000+",
        label: "Virtual Shoppers Benchmarked",
        sla: "< 1.74s p95",
        errorRate: "0.02% Error Rate",
      },
      stability: {
        value: "0 Defect Leakage",
        label: "Production Release Gate",
        detail: "Zero critical hotfixes across major festive deployments",
      },
    },
    pipelineNodes: [
      {
        step: "01",
        label: "Git Push / PR",
        sublabel: "Nightly & Commit Hooks",
        tool: "GitHub Actions",
        icon: GitHubActionsIcon,
        accentColor: "#2088FF",
      },
      {
        step: "02",
        label: "POM Automation Suite",
        sublabel: "4 Cloud Workers Parallel",
        tool: "Playwright",
        icon: PlaywrightIcon,
        accentColor: "#2EAD33",
      },
      {
        step: "03",
        label: "15k VU Stress Profiling",
        sublabel: "Festival Surge Benchmarks",
        tool: "Apache JMeter",
        icon: JMeterIcon,
        accentColor: "#D22128",
      },
      {
        step: "04",
        label: "FinTech Webhook Mocks",
        sublabel: "bKash · Nagad · Cards",
        tool: "Postman",
        icon: PostmanIcon,
        accentColor: "#F37036",
      },
      {
        step: "05",
        label: "Zero-Defect Sign-Off",
        sublabel: "Production Deployment ✓",
        tool: "Jira / RTM",
        icon: JiraIcon,
        accentColor: "#0052CC",
      },
    ],
    techStack: [
      { name: "Playwright", icon: PlaywrightIcon, accentColor: "#2EAD33" },
      { name: "Apache JMeter", icon: JMeterIcon, accentColor: "#D22128" },
      { name: "TypeScript", icon: TypeScriptIcon, accentColor: "#3178C6" },
      { name: "GitHub Actions", icon: GitHubActionsIcon, accentColor: "#2088FF" },
      { name: "Docker", icon: DockerIcon, accentColor: "#2496ED" },
      { name: "Postman", icon: PostmanIcon, accentColor: "#F37036" },
      { name: "Jira", icon: JiraIcon, accentColor: "#0052CC" },
    ],
  },
  paragon: {
    id: "paragon",
    name: "Paragon Food & Retail",
    tagline: "Enterprise B2B / B2C Food & Retail Distribution Platform",
    scopeTag: "[ENTERPRISE_B2B_DISTRIBUTION]",
    metrics: {
      coverage: {
        value: "100%",
        label: "Multi-Branch Stock Sync",
        detail: "Real-time verification across regional depots",
        percent: 100,
      },
      velocity: {
        before: "Nightly Suite",
        after: "15+ Zero-Defect",
        cutLabel: "Continuous Release Cadence",
        detail: "Zero rollback incidents across major production sprints",
      },
      concurrency: {
        value: "99.4%",
        label: "Platform SLA Uptime",
        sla: "Zero Outages",
        errorRate: "0 Rollbacks",
      },
      stability: {
        value: "B2B Pricing Matrix",
        label: "Automated Tier Validation",
        detail: "Dynamic wholesale discounts & credit term calculations",
      },
    },
    pipelineNodes: [
      {
        step: "01",
        label: "Branch DB Sync Trigger",
        sublabel: "Scheduled Depot Polls",
        tool: "GitHub Actions",
        icon: GitHubActionsIcon,
        accentColor: "#2088FF",
      },
      {
        step: "02",
        label: "E2E Order Matrix",
        sublabel: "Cross-Branch Workflows",
        tool: "Playwright",
        icon: PlaywrightIcon,
        accentColor: "#2EAD33",
      },
      {
        step: "03",
        label: "Tier Pricing Engine",
        sublabel: "Wholesale Calculation Tests",
        tool: "TypeScript",
        icon: TypeScriptIcon,
        accentColor: "#3178C6",
      },
      {
        step: "04",
        label: "Warehouse Inventory Mocks",
        sublabel: "Depot API Contracts",
        tool: "Postman",
        icon: PostmanIcon,
        accentColor: "#F37036",
      },
      {
        step: "05",
        label: "Gated Production Deploy",
        sublabel: "Rollback-Free Release ✓",
        tool: "Docker",
        icon: DockerIcon,
        accentColor: "#2496ED",
      },
    ],
    techStack: [
      { name: "Playwright", icon: PlaywrightIcon, accentColor: "#2EAD33" },
      { name: "TypeScript", icon: TypeScriptIcon, accentColor: "#3178C6" },
      { name: "GitHub Actions", icon: GitHubActionsIcon, accentColor: "#2088FF" },
      { name: "Docker", icon: DockerIcon, accentColor: "#2496ED" },
      { name: "Postman", icon: PostmanIcon, accentColor: "#F37036" },
      { name: "Jira", icon: JiraIcon, accentColor: "#0052CC" },
    ],
  },
};

export default function ExperienceSectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [activePlatform, setActivePlatform] = useState<PlatformId>("shwapno");

  const currentPlatform = platformsData[activePlatform];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Specular Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[380px] bg-gradient-to-b from-black/[0.02] dark:from-white/[0.02] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-10 sm:mb-14 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [PRODUCTION_CAREER_TRACK]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Enterprise Experience &amp; Impact
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            Brain Station 23 · Apr 2024 – Present
          </span>
        </div>

        {/* Minimalist Subtitle */}
        <p className="max-w-2xl font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-10 sm:mb-12">
          Automating deterministic quality infrastructure and high-concurrency benchmarks for
          nationwide e-commerce platforms at Brain Station 23.
        </p>

        {/* Timeline Container with Specular Laser Line */}
        <div className="relative pl-6 sm:pl-10 border-l border-zinc-200 dark:border-white/10 space-y-12 sm:space-y-16">
          
          {/* ========================================================================= */}
          {/* TIMELINE NODE 1: BRAIN STATION 23 (VISUAL TELEMETRY HUB) */}
          {/* ========================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            {/* Timeline Pulsing Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-white dark:bg-black border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.5)]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Monolithic Glass Slab */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-white/[0.03] transition-all space-y-6">
              
              {/* Header: Organization Meta & Honors */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-black/5 dark:border-white/5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="font-mono-geist text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Current Role
                    </span>
                    <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <Calendar size={13} />
                      Apr 2024 – Present (2+ Years Total SQA)
                    </span>
                    <span className="text-zinc-400 text-xs hidden sm:inline">•</span>
                    <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <MapPin size={13} />
                      Dhaka, Bangladesh · Hybrid
                    </span>
                  </div>

                  <h3 className="font-geist text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
                    SQA Engineer II
                    <span className="font-mono-geist text-xs font-normal text-zinc-400 dark:text-zinc-500 hidden md:inline">
                      {"// nopStation Division"}
                    </span>
                  </h3>
                  <div className="font-mono-geist text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium mt-1 flex items-center gap-2">
                    <Building2 size={14} className="text-emerald-500" />
                    <span>Brain Station 23</span>
                    <span className="text-zinc-400">·</span>
                    <span className="text-zinc-500 dark:text-zinc-400">nopStation E-Commerce Division (Team Shwapno &amp; Paragon)</span>
                  </div>
                </div>

                {/* Verified Honor Pill */}
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.12)]">
                    <Award size={15} className="text-amber-500 shrink-0" />
                    <div className="text-left font-mono-geist">
                      <div className="text-[11px] font-bold uppercase tracking-wider">
                        nopStation Agility &amp; Excellence Award
                      </div>
                      <div className="text-[9px] text-amber-600/80 dark:text-amber-300/80">
                        Honored for Zero-Defect Streamline Releases
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimalist Platform Toggle Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div
                  role="tablist"
                  aria-label="Production Platforms"
                  className="inline-flex p-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/5 dark:border-white/5"
                >
                  {(["shwapno", "paragon"] as PlatformId[]).map((pid) => {
                    const isSelected = activePlatform === pid;
                    return (
                      <button
                        key={pid}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActivePlatform(pid)}
                        className={`font-mono-geist text-xs font-semibold px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm border border-black/10 dark:border-white/10"
                            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                        }`}
                      >
                        {pid === "shwapno" ? "Shwapno E-Commerce" : "Paragon Food & Retail"}
                      </button>
                    );
                  })}
                </div>

                <div className="font-mono-geist text-xs text-zinc-400 dark:text-zinc-500">
                  {currentPlatform.tagline}
                </div>
              </div>

              {/* Platform Telemetry Hub Wrapped in AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 pt-1"
                >
                  {/* Two-Column Telemetry Dashboard (70% Visual Ratio) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* LEFT COLUMN (5 Cols): Quantified Telemetry Gauges */}
                    <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
                      
                      {/* Gauge 1: Automation Ratio with Segmented Progress Bar */}
                      <div className="p-4 rounded-2xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                            {currentPlatform.metrics.coverage.label}
                          </span>
                          <span className="font-mono-geist text-lg font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                            {currentPlatform.metrics.coverage.value}
                          </span>
                        </div>
                        
                        {/* Segmented Bar (10 Blocks) */}
                        <div className="grid grid-cols-10 gap-1 my-2">
                          {Array.from({ length: 10 }).map((_, i) => {
                            const isFilled = i < Math.floor(currentPlatform.metrics.coverage.percent / 10);
                            return (
                              <div
                                key={i}
                                className={`h-2 rounded-sm transition-all ${
                                  isFilled
                                    ? "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]"
                                    : "bg-black/5 dark:bg-white/5"
                                }`}
                              />
                            );
                          })}
                        </div>
                        
                        <div className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400">
                          {currentPlatform.metrics.coverage.detail}
                        </div>
                      </div>

                      {/* Gauge 2: Velocity Surge with Before/After Runtime Horizon */}
                      <div className="p-4 rounded-2xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                            {currentPlatform.metrics.velocity.cutLabel}
                          </span>
                          <span className="font-mono-geist text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            75% Faster
                          </span>
                        </div>

                        {/* Before vs After Horizontal Comparison */}
                        <div className="space-y-1.5 my-2.5">
                          <div className="flex items-center gap-2 text-[11px] font-mono-geist">
                            <span className="w-16 text-zinc-400">Manual</span>
                            <div className="flex-1 bg-black/5 dark:bg-white/5 h-2 rounded-full overflow-hidden">
                              <div className="bg-zinc-400 dark:bg-zinc-600 h-full w-full" />
                            </div>
                            <span className="text-zinc-400 w-12 text-right">14h</span>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] font-mono-geist">
                            <span className="w-16 text-emerald-600 dark:text-emerald-400 font-medium">Parallel CI</span>
                            <div className="flex-1 bg-black/5 dark:bg-white/5 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-500 h-full w-[25%] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            </div>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold w-12 text-right">3.5h</span>
                          </div>
                        </div>

                        <div className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400">
                          {currentPlatform.metrics.velocity.detail}
                        </div>
                      </div>

                      {/* Gauge 3: Concurrency & Stability Duo */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-2xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                          <div className="font-mono-geist text-xl font-bold text-zinc-900 dark:text-white tabular-nums">
                            {currentPlatform.metrics.concurrency.value}
                          </div>
                          <div className="font-geist text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                            {currentPlatform.metrics.concurrency.label}
                          </div>
                          <div className="font-mono-geist text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                            <Activity size={10} className="text-emerald-500" />
                            <span>{currentPlatform.metrics.concurrency.sla}</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                          <div className="font-mono-geist text-xl font-bold text-zinc-900 dark:text-white tabular-nums">
                            {currentPlatform.metrics.stability.value}
                          </div>
                          <div className="font-geist text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                            {currentPlatform.metrics.stability.label}
                          </div>
                          <div className="font-mono-geist text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                            <ShieldCheck size={10} className="text-emerald-500" />
                            <span>0 Rollbacks</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT COLUMN (7 Cols): Enterprise Test Pipeline Architecture Visual */}
                    <div className="lg:col-span-7 p-5 rounded-2xl bg-black/[0.02] dark:bg-black/40 border border-black/5 dark:border-white/5 flex flex-col justify-between">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/5 dark:border-white/5">
                        <div className="flex items-center gap-2">
                          <GitBranch size={13} className="text-emerald-500" />
                          <span className="font-mono-geist text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                            Enterprise Test Pipeline Invariants
                          </span>
                        </div>
                        <span className="font-mono-geist text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          Deterministic Execution
                        </span>
                      </div>

                      {/* Pipeline Flow Stages (Connected Vertically) */}
                      <div className="space-y-2.5 my-auto">
                        {currentPlatform.pipelineNodes.map((node, idx) => {
                          const Icon = node.icon;
                          const isLast = idx === currentPlatform.pipelineNodes.length - 1;

                          return (
                            <div key={node.step} className="relative">
                              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-emerald-500/30 transition-all group">
                                <span className="font-mono-geist text-[10px] text-zinc-400 dark:text-zinc-500 w-5 text-center shrink-0">
                                  {node.step}
                                </span>

                                <div className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 shrink-0">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="font-geist text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                    <span className="truncate">{node.label}</span>
                                    <span className="font-mono-geist text-[9px] text-zinc-400 dark:text-zinc-500 px-1.5 py-0.2 rounded bg-black/5 dark:bg-white/5 shrink-0">
                                      {node.tool}
                                    </span>
                                  </div>
                                  <div className="font-mono-geist text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                                    {node.sublabel}
                                  </div>
                                </div>

                                {isLast ? (
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] shrink-0 animate-pulse" />
                                ) : (
                                  <ArrowRight size={12} className="text-zinc-400 dark:text-zinc-600 shrink-0 group-hover:text-emerald-400 transition-colors" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tooling Ribbon */}
                      <div className="pt-4 mt-3 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono-geist text-[10px] text-zinc-400 uppercase tracking-wider">
                          Universal Official Brand Tooling:
                        </span>
                        <div className="flex items-center gap-2">
                          {currentPlatform.techStack.map((tech) => {
                            const TechIcon = tech.icon;
                            return (
                              <div
                                key={tech.name}
                                title={tech.name}
                                className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                              >
                                <TechIcon className="w-3.5 h-3.5" />
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* TIMELINE NODE 2: PROFESSIONAL TRAINING & CERTIFICATION (MINIMALIST HORIZON) */}
          {/* ========================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-5 w-3.5 h-3.5 rounded-full bg-white dark:bg-black border-2 border-zinc-400 dark:border-zinc-600 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>

            {/* Sleek Minimalist Horizon Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/15 dark:border-t-white/20 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-xl shadow-lg hover:bg-white/[0.03] transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5 font-mono-geist text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] whitespace-nowrap">
                      Verified Certification
                    </span>
                    <span className="text-zinc-400">•</span>
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <Calendar size={12} />
                      2023
                    </span>
                    <span className="text-zinc-400">•</span>
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <MapPin size={12} />
                      Dhaka, Bangladesh
                    </span>
                  </div>

                  <h3 className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                    SQA Professional Trainee · Batch 16 Certified
                  </h3>
                  <div className="font-mono-geist text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                    IT Training BD · Professional Certification Program
                  </div>
                </div>

                {/* Minimalist Visual Chips */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="font-mono-geist text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">
                    350+ Test Cases
                  </span>
                  <span className="font-mono-geist text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">
                    RTM Traceability
                  </span>
                  <span className="font-mono-geist text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">
                    Black-Box Engineering
                  </span>
                  <span className="font-mono-geist text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold whitespace-nowrap">
                    Zero Flakiness
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* TIMELINE NODE 3: ACADEMIC EDUCATION (MINIMALIST HORIZON) */}
          {/* ========================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-5 w-3.5 h-3.5 rounded-full bg-white dark:bg-black border-2 border-zinc-400 dark:border-zinc-600 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>

            {/* Sleek Minimalist Horizon Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/15 dark:border-t-white/20 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-xl shadow-lg hover:bg-white/[0.03] transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 font-mono-geist text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded bg-zinc-500/10 border border-zinc-500/20 text-[10px] whitespace-nowrap">
                      Academic Degree
                    </span>
                    <span className="text-zinc-400">•</span>
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <Calendar size={12} />
                      2019 – 2023
                    </span>
                    <span className="text-zinc-400">•</span>
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <MapPin size={12} />
                      Dhaka, Bangladesh
                    </span>
                  </div>

                  <h3 className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
                    B.Sc. in Computer Science &amp; Engineering
                  </h3>
                  <div className="font-mono-geist text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                    Daffodil International University (DIU)
                  </div>
                </div>

                {/* Minimalist Visual Chips */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="font-mono-geist text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold tabular-nums whitespace-nowrap">
                    CGPA 3.59 / 4.00
                  </span>
                  <span className="font-mono-geist text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">
                    Software Architecture
                  </span>
                  <span className="font-mono-geist text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">
                    Distributed Systems
                  </span>
                  <span className="font-mono-geist text-xs px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 font-medium whitespace-nowrap">
                    DB Architecture
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Monolithic Glass Summary Footer */}
        <div className="mt-14 sm:mt-18 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-geist text-zinc-500 dark:text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] animate-pulse" />
            <span>Strict Ground-Truth Data Invariant · Verified Master Career Profile</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Brain Station 23</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>nopStation Agility &amp; Excellence Award</span>
          </div>
        </div>

      </div>
    </section>
  );
}
