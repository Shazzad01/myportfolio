"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  Zap,
  TrendingUp,
  Smartphone,
  Activity,
  Server,
  Cpu,
} from "lucide-react";
import {
  PlaywrightIcon,
  JMeterIcon,
  GitHubActionsIcon,
  GitLabIcon,
  K6Icon,
  PostmanIcon,
  SeleniumIcon,
  TypeScriptIcon,
  PythonIcon,
  DockerIcon,
} from "@/components/ui/SvgIcons";
import SpotlightCard from "@/components/ui/SpotlightCard";
import DecryptedText from "@/components/ui/DecryptedText";

interface ArchitectureStep {
  step: string;
  detail: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  platforms: string[];
  tags: string[];
  brandIcons: React.ComponentType<{ className?: string }>[];
  problem: string;
  approach: string;
  result: string;
  impactComparison: {
    before: string;
    after: string;
  };
  architecture: ArchitectureStep[];
  testLogSample: string[];
  testimonial?: {
    quote: string;
    author: string;
    rating: string;
  };
}

const projects: Project[] = [
  {
    id: "shwopno",
    title: "Shwopno.com",
    subtitle: "shwopno.com — Enterprise E-Commerce Platform (ACI Logistics)",
    period: "Apr 2024 – Present",
    platforms: ["Storefront Web", "Android App", "iOS App", "Order & Delivery System"],
    tags: ["Playwright", "GitHub Actions", "Apache JMeter", "TypeScript", "bKash / Nagad", "CI/CD"],
    brandIcons: [PlaywrightIcon, JMeterIcon, GitHubActionsIcon],
    problem:
      "Legacy retail infrastructure struggled with high-concurrency traffic spikes during national shopping festivals and lacked real-time multi-branch inventory synchronization, causing checkout errors.",
    approach:
      "Architected a modular Playwright (TypeScript) test automation framework with Page Object Model (POM) and executed Apache JMeter high-concurrency load testing (10,000+ RPM). Integrated automated regression suites into GitHub Actions CI/CD.",
    result:
      "Maintained 99.4% platform uptime with zero critical production outages across 15+ major releases, supporting 500,000+ monthly active customers and cutting regression runtime from 14h to 3.5h (75% reduction).",
    impactComparison: {
      before: "14 hours manual regression · Checkout bottlenecks during flash sales",
      after: "3.5 hours automated suite (75% cut) · 500,000+ active customers with 99.4% uptime",
    },
    architecture: [
      { step: "1. Storefront & Apps", detail: "Next.js Web + Android & iOS Mobile Apps" },
      { step: "2. Playwright Grid", detail: "Parallel Workers in GitHub Actions CI/CD" },
      { step: "3. Real-Time Sync", detail: "Multi-branch Inventory Sync & Algolia Search" },
      { step: "4. Release Gate", detail: "Zero-Downtime bKash/Nagad Checkout Authorization" },
    ],
    testLogSample: [
      "▶ npx playwright test --project=chromium",
      "✓ [Chromium] › cart.spec.ts › Add Item & Multi-Branch Stock Sync (180ms)",
      "✓ [Chromium] › checkout.spec.ts › bKash Payment & Order Confirmation (410ms)",
      "✓ [Chromium] › search.spec.ts › High-Concurrency Product Filtering (210ms)",
      "🎉 80+ smoke checks passed in 3.1s across parallel workers (Zero flakiness)",
    ],
  },
  {
    id: "paragon",
    title: "Paragon Food",
    subtitle: "paragonfood.com.bd — Food & FMCG E-Commerce Platform",
    period: "Jul 2025 – Mar 2026",
    platforms: ["Web App", "Storefront Mobile App", "Delivery Logistics", "Multi-Warehouse Portal"],
    tags: ["Playwright", "GitLab CI/CD", "Postman / Newman", "Cross-Browser", "API Testing"],
    brandIcons: [PlaywrightIcon, GitLabIcon, PostmanIcon],
    problem:
      "Manual validation of dynamic discount codes, multi-warehouse stock allocations, and express delivery slots took 6 hours per release, creating release bottlenecks and potential checkout discrepancies.",
    approach:
      "Engineered end-to-end Playwright automation test suites and comprehensive Postman/Newman API validation integrated into GitLab CI/CD pipelines, validating cross-platform workflows across Web, Android, iOS, Chrome, and Firefox.",
    result:
      "Accelerated release validation cycles from 6 hours to 90 minutes (75% faster), maintaining a 99% bug-free release standard and zero downtime across major delivery surges.",
    impactComparison: {
      before: "6-hour manual release verification · Disjointed API & warehouse slot validation",
      after: "90-minute automated GitLab CI pipeline (75% faster) · 99% bug-free release standard",
    },
    architecture: [
      { step: "1. Storefront & Fleet", detail: "Web Storefront + Driver Delivery Logistics App" },
      { step: "2. GitLab Runner CI", detail: "Dockerized Containerized Cross-Browser Grid" },
      { step: "3. API Verification", detail: "Postman / Newman Automated Contract Assertions" },
      { step: "4. UAT Sign-Off", detail: "Slot-based Dispatch & 99% Bug-Free Standard" },
    ],
    testLogSample: [
      "▶ gitlab-runner exec docker test:e2e",
      "✓ [Firefox] › order_tracking.spec.ts › Slot Delivery & Live Status (220ms)",
      "✓ [WebKit] › payment.spec.ts › One-Page Checkout Authorization (380ms)",
      "✓ [Chromium] › warehouse.spec.ts › Multi-Warehouse Stock Allocation (190ms)",
      "🎉 All contract & regression assertions passed in 90s (99% bug-free standard)",
    ],
  },
];

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<Record<string, "overview" | "arch" | "logs">>({
    shwopno: "overview",
    paragon: "overview",
  });

  const toggleTab = (id: string, tab: "overview" | "arch" | "logs") => {
    setActiveTab((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="projects" className="section-padding bg-[hsl(var(--muted)/0.3)] relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[hsl(var(--accent))]" />
            <DecryptedText
              text="Real-World Impact & Case Studies"
              speed={22}
              animateOn="view"
              className="text-[hsl(var(--primary))]"
              encryptedClassName="text-[#fbbf24] font-mono opacity-80"
            />
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">Featured Projects &amp; QA Lab</h2>
        </motion.div>

        {/* Bento-Grid Interactive QA Lab & Benchmarks (Approved UI Showcase) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-6 mb-16 text-left"
        >
          {/* Card 1: Enterprise E-Commerce Automation (Shwopno.com) */}
          <SpotlightCard
            size={380}
            spotlightColor="rgba(245, 158, 11, 0.16)"
            className="lg:col-span-6 glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/15 text-amber-800 dark:text-[#fbbf24] border border-amber-500/30">
                    E2E Pipeline
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                    Shwopno.com
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <PlaywrightIcon className="w-4 h-4" />
                  <span>Playwright POM</span>
                </div>
              </div>

              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">
                Enterprise E-Commerce Automation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                Modular Playwright (TypeScript) test framework covering bKash/Nagad checkout, real-time inventory sync, and dynamic discounts.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-800 dark:text-[#fbbf24] border border-amber-500/30">
                  80%+ Coverage (120+ Workflows)
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={13} /> 98.5% Defect Catch Rate
                </span>
              </div>
            </div>

            {/* Simulated Test Execution Output */}
            <div className="bg-[#050811] rounded-2xl p-3.5 border border-white/5 font-mono text-[11px] text-slate-300 space-y-1">
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-white/5 pb-1 mb-1">
                <span>[TEST-WORKER-01] ACTIVE</span>
                <span className="text-emerald-400 font-bold">PASSED</span>
              </div>
              <p className="text-slate-400">
                <span className="text-slate-500">[08:28:33.196]</span> › auth: session hydration &amp; bKash gateway verified <span className="text-emerald-400 font-bold">(124ms)</span>
              </p>
              <p className="text-slate-400">
                <span className="text-slate-500">[08:28:33.338]</span> › inventory: multi-branch stock allocation confirmed <span className="text-emerald-400 font-bold">(190ms)</span>
              </p>
              <p className="text-slate-400">
                <span className="text-slate-500">[08:28:33.353]</span> › checkout: zero-downtime order authorization <span className="text-emerald-400 font-bold">(310ms)</span>
              </p>
            </div>
          </SpotlightCard>

          {/* Card 2: Apache JMeter High-Concurrency Performance Lab */}
          <SpotlightCard
            size={380}
            spotlightColor="rgba(245, 158, 11, 0.16)"
            className="lg:col-span-6 glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                  Performance Lab
                </span>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-black/5 dark:bg-white/10 border border-slate-200 dark:border-white/10">
                    <JMeterIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/5 dark:bg-white/10 border border-slate-200 dark:border-white/10">
                    <PostmanIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/5 dark:bg-white/10 border border-slate-200 dark:border-white/10">
                    <K6Icon className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">
                Apache JMeter Stress Lab
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                Simulating 15,000+ concurrent virtual users to benchmark response times and isolate API latency bottlenecks under peak shopping campaigns.
              </p>

              {/* Latency telemetry stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10">
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-mono">Max Concurrency</p>
                  <p className="font-heading font-bold text-base sm:text-lg text-amber-700 dark:text-[#f59e0b]">15,000+ VUs</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10">
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-mono">Throughput</p>
                  <p className="font-heading font-bold text-base sm:text-lg text-emerald-600 dark:text-emerald-400">10,000+ RPM</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10">
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 uppercase font-mono">p95 Latency</p>
                  <p className="font-heading font-bold text-base sm:text-lg text-emerald-600 dark:text-emerald-400">&lt; 1.8s</p>
                </div>
              </div>
            </div>

            {/* SVG Latency Wave Curve */}
            <div className="relative h-20 w-full rounded-2xl bg-[#050811] p-2 border border-white/5 overflow-hidden flex items-end">
              <svg className="w-full h-16" viewBox="0 0 400 80" preserveAspectRatio="none" fill="none">
                <defs>
                  <linearGradient id="latency-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="latency-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 Q40,25 80,45 T160,30 T240,55 T320,20 T400,35 L400,80 L0,80 Z"
                  fill="url(#latency-gradient)"
                />
                <path
                  d="M0,50 Q40,25 80,45 T160,30 T240,55 T320,20 T400,35"
                  stroke="url(#latency-line)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-2 right-3 text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                ● 8 Bottlenecks Isolated
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Mobile & Cross-Browser Validation Matrix */}
          <SpotlightCard
            size={380}
            spotlightColor="rgba(16, 185, 129, 0.16)"
            className="lg:col-span-6 glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  Cross-Platform Grid
                </span>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  12+ Device &amp; Browser Configs
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">
                Mobile &amp; Cross-Browser Matrix
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                Rigorous testing across Android, iOS, Chrome, and Firefox validating responsive UI rendering, gesture interactions, and payment flows.
              </p>

              {/* Device Test Rows */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Smartphone size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">Android Storefront &amp; Logistics Apps</p>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400">Appium + Playwright Mobile Chrome Grid</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                    ✓ Verified
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Smartphone size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">iOS Storefront &amp; Delivery Apps</p>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400">Appium XCUITest + Mobile Safari</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                    ✓ Verified
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/10">
              <span>Framework: Appium + Playwright</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">12+ Environments</span>
            </div>
          </SpotlightCard>

          {/* Card 4: Universal Brand Tech Badges Ecosystem */}
          <SpotlightCard
            size={380}
            spotlightColor="rgba(245, 158, 11, 0.16)"
            className="lg:col-span-6 glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/30">
                  Verified Ecosystem
                </span>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  8 Core Technologies
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">
                Official Brand Badges &amp; Tools
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                Official vector tooling powering enterprise quality assurance, continuous testing, and release certification.
              </p>

              {/* 8 Official Brand Icons Grid */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/50 flex flex-col items-center gap-1.5 transition-all group">
                  <PlaywrightIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">Playwright</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 flex flex-col items-center gap-1.5 transition-all group">
                  <SeleniumIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">Selenium</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10 hover:border-rose-500/50 flex flex-col items-center gap-1.5 transition-all group">
                  <JMeterIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">JMeter</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10 hover:border-violet-500/50 flex flex-col items-center gap-1.5 transition-all group">
                  <K6Icon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">K6</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10 hover:border-orange-500/50 flex flex-col items-center gap-1.5 transition-all group">
                  <PostmanIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">Postman</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 flex flex-col items-center gap-1.5 transition-all group">
                  <TypeScriptIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">TypeScript</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10 hover:border-amber-500/50 flex flex-col items-center gap-1.5 transition-all group">
                  <PythonIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">Python</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#07070a]/80 border border-slate-200 dark:border-white/10 hover:border-sky-500/50 flex flex-col items-center gap-1.5 transition-all group">
                  <DockerIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">Docker</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/10">
              <span>Universal SVG Brand Compliance</span>
              <span className="text-amber-700 dark:text-[#f59e0b] font-bold">100% Vector</span>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Deep-Dive Case Studies */}
        <div className="space-y-12 text-left">
          {projects.map((project, i) => {
            const currentTab = activeTab[project.id] || "overview";
            return (
              <motion.div
                key={project.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <SpotlightCard
                  size={550}
                  spotlightColor="rgba(245, 158, 11, 0.14)"
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/40 transition-all"
                >
                {/* Top Banner */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {project.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      {/* SVG Brand Logos */}
                      <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/10 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-white/10">
                        {project.brandIcons.map((BrandIcon, idx) => (
                          <BrandIcon key={idx} className="w-4 h-4" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-700 dark:text-[#fbbf24] font-semibold mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Platform Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.platforms.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Before vs After Impact Metric Pill Card */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50/90 dark:bg-[#07070a]/90 border border-slate-200 dark:border-white/10">
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold shrink-0 text-[10px] uppercase">
                      Before
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.impactComparison.before}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold shrink-0 text-[10px] uppercase">
                      After QA
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium leading-relaxed">
                      {project.impactComparison.after}
                    </span>
                  </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-white/10 pb-3">
                  <button
                    onClick={() => toggleTab(project.id, "overview")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentTab === "overview"
                        ? "bg-[#f59e0b] text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                    }`}
                  >
                    Case Study
                  </button>
                  <button
                    onClick={() => toggleTab(project.id, "arch")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentTab === "arch"
                        ? "bg-[#f59e0b] text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                    }`}
                  >
                    <Layers size={13} />
                    Architecture &amp; Pipeline
                  </button>
                  <button
                    onClick={() => toggleTab(project.id, "logs")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentTab === "logs"
                        ? "bg-[#f59e0b] text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                    }`}
                  >
                    <Terminal size={13} />
                    Automated Test Logs
                  </button>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {currentTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="grid sm:grid-cols-3 gap-6 mb-6"
                    >
                      <div className="space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 flex items-center gap-1">
                          🔴 Problem
                        </p>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1">
                          🔵 Approach
                        </p>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.approach}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          🟢 Result
                        </p>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {project.result}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {currentTab === "arch" && (
                    <motion.div
                      key="arch"
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="grid sm:grid-cols-4 gap-3 mb-6"
                    >
                      {project.architecture.map((arch, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-[#07070a]/90 border border-slate-200 dark:border-white/10 flex flex-col justify-between"
                        >
                          <div>
                            <p className="text-[11px] font-bold text-amber-700 dark:text-[#fbbf24] mb-1">
                              {arch.step}
                            </p>
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                              {arch.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {currentTab === "logs" && (
                    <motion.div
                      key="logs"
                      initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl bg-[#050811] border border-slate-800 font-mono text-xs space-y-2 mb-6 text-left"
                    >
                      {project.testLogSample.map((line, idx) => (
                        <p
                          key={idx}
                          className={
                            line.startsWith("🎉")
                              ? "text-emerald-400 font-bold mt-2"
                              : line.startsWith("✓")
                              ? "text-emerald-300"
                              : "text-amber-400"
                          }
                        >
                          {line}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-amber-500/10 dark:bg-amber-500/15 text-amber-800 dark:text-[#fbbf24] border border-amber-500/20 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
