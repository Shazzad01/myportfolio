"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  Building2,
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
  description: string;
  quantifiedMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  architecturalHighlights: {
    title: string;
    description: string;
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
    name: "Shwapno Retail E-Commerce",
    tagline: "Bangladesh's Premier Superstore & High-Throughput Omni-Channel Retail Platform",
    scopeTag: "[PRIMARY_PRODUCTION_ECOMMERCE]",
    description:
      "Automated and benchmarked nationwide enterprise checkout, mobile payment webhooks, and distributed load tolerance under massive concurrency surges.",
    quantifiedMetrics: [
      {
        label: "Automated Coverage",
        value: "80%+",
        detail: "120+ mission-critical end-to-end checkout journeys",
      },
      {
        label: "Virtual Shoppers Benchmarked",
        value: "15,000+",
        detail: "Simulated distributed concurrency in Apache JMeter",
      },
      {
        label: "Regression Runtime Cut",
        value: "75%",
        detail: "Reduced execution from 14h manual to 3.5h parallel CI",
      },
      {
        label: "p95 Latency SLA",
        value: "< 1.74s",
        detail: "Sub-2.0s target met under 10k+ RPM with 0.02% error rate",
      },
    ],
    architecturalHighlights: [
      {
        title: "Playwright Page Object Model Architecture",
        description:
          "Architected hermetic, deterministic test suites across Chromium, WebKit, and Firefox with auto-waiting selectors and resilient locator strategies.",
      },
      {
        title: "FinTech Gateway & OTP Webhook Automation",
        description:
          "Engineered mock-resilient verification for bKash, Nagad, and credit card gateways, validating asynchronous payment webhooks and order lifecycle events.",
      },
      {
        title: "Apache JMeter Distributed Stress Profiling",
        description:
          "Isolated 8 high-impact microservice database bottlenecks during festival sales simulations, guaranteeing seamless multi-tier checkout durability.",
      },
      {
        title: "Defect Prevention & RTM Traceability",
        description:
          "Authored 350+ structured test scenarios in Jira with bidirectional Requirements Traceability Matrices, achieving a 98.5% defect catch rate before staging.",
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
    name: "Paragon Enterprise Agro-Food",
    tagline: "Enterprise B2B / B2C Food & Retail Distribution Platform",
    scopeTag: "[ENTERPRISE_B2B_DISTRIBUTION]",
    description:
      "Engineered automated regression coverage for multi-branch warehouse inventory synchronization, enterprise tier pricing, and continuous zero-defect release governance.",
    quantifiedMetrics: [
      {
        label: "Platform Uptime",
        value: "99.4%",
        detail: "Zero critical production outages across major deployments",
      },
      {
        label: "Zero-Defect Releases",
        value: "15+",
        detail: "Consecutive major production sprint releases without rollback",
      },
      {
        label: "Rollback Incidents",
        value: "0",
        detail: "Deterministic pre-merge quality gates enforced in CI/CD",
      },
      {
        label: "Multi-Branch Stock Sync",
        value: "100%",
        detail: "Automated verification across distributed warehouse nodes",
      },
    ],
    architecturalHighlights: [
      {
        title: "Multi-Branch Warehouse Inventory Validation",
        description:
          "Automated real-time inventory reconciliation tests across regional warehouse depots, eliminating stock desynchronization during peak order bursts.",
      },
      {
        title: "Complex B2B Pricing Tier Matrix Verification",
        description:
          "Designed comprehensive data-driven test suites validating dynamic wholesale discounts, enterprise credit terms, and multi-tier tax computations.",
      },
      {
        title: "Nightly CI/CD Regression Matrix",
        description:
          "Configured containerized GitHub Actions pipelines running scheduled nightly regression suites with auto-generated defect reports in Jira.",
      },
      {
        title: "Zero-Defect Release Governance Gate",
        description:
          "Enforced strict quality sign-off gates with automated telemetry verification, ensuring 15+ consecutive releases deployed without hotfixes.",
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
      {/* Laser Specular Ambient Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[380px] bg-gradient-to-b from-black/[0.02] dark:from-white/[0.02] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-black/10 dark:border-white/10">
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

        {/* Subtitle with 70/30 Telemetry Focus */}
        <p className="max-w-3xl font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-12 sm:mb-16">
          Designing deterministic quality infrastructure and high-concurrency benchmarks for
          Bangladesh&apos;s highest-traffic e-commerce systems at Brain Station 23.
        </p>

        {/* Timeline Container with Specular Laser Line */}
        <div className="relative pl-6 sm:pl-10 border-l border-zinc-200 dark:border-white/10 space-y-16 sm:space-y-20">
          
          {/* ========================================================================= */}
          {/* TIMELINE NODE 1: BRAIN STATION 23 (PRIMARY ENTERPRISE ROLE) */}
          {/* ========================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            {/* Timeline Pulsing Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-white dark:bg-black border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.5)]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Monolithic Glass Slab */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-white/[0.04] transition-all">
              
              {/* Header: Organization Meta & Honors */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="font-mono-geist text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
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
                  <div className="font-mono-geist text-sm text-zinc-700 dark:text-zinc-300 font-medium mt-1 flex items-center gap-2">
                    <Building2 size={15} className="text-emerald-500" />
                    <span>Brain Station 23</span>
                    <span className="text-zinc-400">·</span>
                    <span className="text-zinc-500 dark:text-zinc-400">nopStation E-Commerce Division (Team Shwapno &amp; Paragon)</span>
                  </div>
                </div>

                {/* Verified Honor Pill */}
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
                    <Award size={16} className="text-amber-500" />
                    <div className="text-left">
                      <div className="font-mono-geist text-[11px] font-bold uppercase tracking-wider">
                        nopStation Agility &amp; Excellence Award
                      </div>
                      <div className="font-mono-geist text-[10px] text-amber-600/80 dark:text-amber-300/80">
                        Honored for Zero-Defect Milestone Releases
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Switcher Controls */}
              <div className="pt-6 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <span className="font-mono-geist text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Select Production Platform:
                  </span>
                  <div className="font-mono-geist text-xs text-zinc-400 dark:text-zinc-500">
                    Interactive platform verification tabs
                  </div>
                </div>

                <div
                  role="tablist"
                  aria-label="Production Platforms"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5"
                >
                  {(["shwapno", "paragon"] as PlatformId[]).map((pid) => {
                    const isSelected = activePlatform === pid;
                    const p = platformsData[pid];
                    return (
                      <button
                        key={pid}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActivePlatform(pid)}
                        className={`relative text-left p-3.5 rounded-xl transition-all flex flex-col justify-between ${
                          isSelected
                            ? "bg-white dark:bg-zinc-900/90 shadow-md border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/10 dark:border-white/10"
                            : "hover:bg-white/40 dark:hover:bg-white/[0.02] border border-transparent"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span
                            className={`font-geist text-sm sm:text-base font-bold ${
                              isSelected
                                ? "text-zinc-900 dark:text-white"
                                : "text-zinc-600 dark:text-zinc-400"
                            }`}
                          >
                            {pid === "shwapno" ? "Shwapno E-Commerce" : "Paragon Food & Retail"}
                          </span>
                          <span
                            className={`font-mono-geist text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                              isSelected
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                : "bg-black/5 dark:bg-white/5 text-zinc-500"
                            }`}
                          >
                            {pid === "shwapno" ? "120+ Flows" : "Multi-Branch"}
                          </span>
                        </div>
                        <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                          {p.tagline}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Platform Details Wrapped in AnimatePresence (mode="wait") */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 pt-2"
                >
                  {/* Platform Overview Banner */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.015] dark:bg-white/[0.015] border border-black/5 dark:border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        {currentPlatform.scopeTag}
                      </span>
                      <span className="font-mono-geist text-xs text-zinc-400 dark:text-zinc-500">
                        nopStation Division · Brain Station 23
                      </span>
                    </div>
                    <p className="font-geist text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                      {currentPlatform.description}
                    </p>
                  </div>

                  {/* Quantified Telemetry Chips Grid (70% Visual Ratio) */}
                  <div>
                    <span className="font-mono-geist text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-3">
                      Quantified Production Metrics
                    </span>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {currentPlatform.quantifiedMetrics.map((metric, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/15 dark:border-t-white/20 border-x border-b border-black/5 dark:border-white/5"
                        >
                          <div className="font-mono-geist text-xl sm:text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="font-geist text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                            {metric.label}
                          </div>
                          <div className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                            {metric.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architectural Verification Highlights (Concise Points, Zero Prose Wall) */}
                  <div>
                    <span className="font-mono-geist text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-3">
                      Key Quality Infrastructure Delivered
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {currentPlatform.architecturalHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white/[0.015] dark:bg-white/[0.015] border border-black/5 dark:border-white/5 flex items-start gap-3 hover:bg-white/[0.03] transition-all"
                        >
                          <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={15} />
                          </div>
                          <div>
                            <div className="font-geist text-sm font-semibold text-zinc-900 dark:text-white">
                              {highlight.title}
                            </div>
                            <div className="font-geist text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mt-1">
                              {highlight.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Multi-Color Brand SVG Tech Stack Strip */}
                  <div className="pt-2">
                    <span className="font-mono-geist text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-3">
                      Production Tooling Stack (Universal Official Brand SVGs)
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {currentPlatform.techStack.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tech.name}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/15 dark:border-t-white/20 border-x border-b border-black/5 dark:border-white/5 hover:bg-white/[0.04] transition-all"
                          >
                            <Icon className="w-4 h-4 shrink-0" />
                            <span className="font-mono-geist text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                              {tech.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* TIMELINE NODE 2: PROFESSIONAL TRAINING & CERTIFICATION */}
          {/* ========================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-white dark:bg-black border-2 border-zinc-400 dark:border-zinc-600 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>

            {/* Monolithic Glass Slab */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-white/[0.04] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/5 dark:border-white/5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="font-mono-geist text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border border-zinc-500/20">
                      Verified Certification
                    </span>
                    <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <Calendar size={13} />
                      2023
                    </span>
                    <span className="text-zinc-400 text-xs hidden sm:inline">•</span>
                    <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <MapPin size={13} />
                      Dhaka, Bangladesh
                    </span>
                  </div>
                  <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    SQA Professional Trainee · Batch 16 Certified
                  </h3>
                  <div className="font-mono-geist text-sm text-zinc-700 dark:text-zinc-300 font-medium mt-1">
                    IT Training BD · Professional Certification Program
                  </div>
                </div>

                <div className="shrink-0">
                  <span className="font-mono-geist text-xs px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    [BATCH_16_HONORS]
                  </span>
                </div>
              </div>

              {/* Quantified Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4">
                <div className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="font-mono-geist text-base font-bold text-zinc-900 dark:text-white">Batch 16</div>
                  <div className="font-mono-geist text-[10px] text-zinc-500">SQA Professional</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="font-mono-geist text-base font-bold text-zinc-900 dark:text-white">350+ Cases</div>
                  <div className="font-mono-geist text-[10px] text-zinc-500">Structured Test Scenarios</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="font-mono-geist text-base font-bold text-zinc-900 dark:text-white">RTM Design</div>
                  <div className="font-mono-geist text-[10px] text-zinc-500">Traceability Matrix</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="font-mono-geist text-base font-bold text-zinc-900 dark:text-white">Zero Flakiness</div>
                  <div className="font-mono-geist text-[10px] text-zinc-500">Black-Box Standards</div>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-2 pt-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>
                    Mastered black-box test engineering: Equivalence Partitioning, Boundary Value Analysis, Decision Tables, and structured defect lifecycle management.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>
                    Authored comprehensive test plans, execution cycles, and Requirements Traceability Matrices in Jira aligned with ISO/IEC quality standards.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* TIMELINE NODE 3: ACADEMIC EDUCATION */}
          {/* ========================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-white dark:bg-black border-2 border-zinc-400 dark:border-zinc-600 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>

            {/* Monolithic Glass Slab */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-white/[0.04] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/5 dark:border-white/5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="font-mono-geist text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border border-zinc-500/20">
                      Academic Degree
                    </span>
                    <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <Calendar size={13} />
                      2019 – 2023
                    </span>
                    <span className="text-zinc-400 text-xs hidden sm:inline">•</span>
                    <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <MapPin size={13} />
                      Dhaka, Bangladesh
                    </span>
                  </div>
                  <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    B.Sc. in Computer Science &amp; Engineering
                  </h3>
                  <div className="font-mono-geist text-sm text-zinc-700 dark:text-zinc-300 font-medium mt-1">
                    Daffodil International University (DIU)
                  </div>
                </div>

                <div className="shrink-0">
                  <span className="font-mono-geist text-xs px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold tabular-nums">
                    CGPA 3.59 / 4.00
                  </span>
                </div>
              </div>

              {/* Quantified Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4">
                <div className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="font-mono-geist text-base font-bold tabular-nums text-zinc-900 dark:text-white">3.59 / 4.00</div>
                  <div className="font-mono-geist text-[10px] text-zinc-500">Graduating CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="font-mono-geist text-base font-bold text-zinc-900 dark:text-white">Algorithms</div>
                  <div className="font-mono-geist text-[10px] text-zinc-500">Core Foundations</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="font-mono-geist text-base font-bold text-zinc-900 dark:text-white">Distributed</div>
                  <div className="font-mono-geist text-[10px] text-zinc-500">Systems &amp; DB Architecture</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <div className="font-mono-geist text-base font-bold text-zinc-900 dark:text-white">Software Eng.</div>
                  <div className="font-mono-geist text-[10px] text-zinc-500">Design &amp; Testing Principles</div>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-2 pt-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>
                    Specialized coursework in software architecture, database normalization, object-oriented design, and network protocols.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>
                    Engineered capstone projects with test automation harnesses, continuous verification, and robust data integrity checks.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Monolithic Glass Summary Footer */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-geist text-zinc-500 dark:text-zinc-400 gap-4">
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
