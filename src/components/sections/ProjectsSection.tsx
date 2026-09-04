"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Terminal, CheckCircle2, ShieldCheck, Sparkles, Layers, ArrowRight, Zap, TrendingUp } from "lucide-react";
import { PlaywrightIcon, JMeterIcon, GitHubActionsIcon, GitLabIcon } from "@/components/ui/SvgIcons";

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
    id: "shwapno",
    title: "Shwapno.com",
    subtitle: "shwapno.com — Retail Supermarket & Hyperlocal E-Commerce Ecosystem (ACI Logistics)",
    period: "Apr 2024 – Present",
    platforms: ["Storefront Web", "Flutter Mobile App", "SAP S/4HANA ERP", "Order & Delivery System"],
    tags: ["Playwright", "GitHub Actions", "JMeter", "nexCommerce", "Algolia Search", "CI/CD"],
    brandIcons: [PlaywrightIcon, JMeterIcon, GitHubActionsIcon],
    problem:
      "Legacy SaaS platform struggled to handle massive national retail traffic and lacked real-time hyperlocal inventory visibility across nationwide stores, leading to checkout drop-offs and operational bottlenecks.",
    approach:
      "Engineered an automated Playwright (TypeScript) E2E test framework covering complex SAP S/4HANA inventory sync, Algolia search flows, and one-page checkout across Web and Mobile. Integrated automated regression runs into GitHub Actions CI/CD and executed JMeter high-concurrency load testing.",
    result:
      "Supported a 5X active user expansion (100k to 500k active users) with zero downtime during peak retail sales campaigns, cutting release regression testing duration by over 60%.",
    impactComparison: {
      before: "45 min manual release regression · Frequent checkout drop-offs during retail campaigns",
      after: "3.1 min automated CI/CD suite · 500,000 active users sustained with zero downtime",
    },
    architecture: [
      { step: "1. Storefront & App", detail: "Next.js Web + Flutter Mobile App UIs" },
      { step: "2. Playwright Grid", detail: "4 Parallel Workers in GitHub Actions CI/CD" },
      { step: "3. Enterprise Sync", detail: "SAP S/4HANA Real-Time Stock & Algolia Search" },
      { step: "4. Release Gate", detail: "Zero-Downtime bKash One-Page Checkout" },
    ],
    testLogSample: [
      "▶ npx playwright test --project=chromium",
      "✓ [Chromium] › cart.spec.ts › Add Item & Hyperlocal Inventory Sync (180ms)",
      "✓ [Chromium] › checkout.spec.ts › bKash Payment & SAP Order Push (410ms)",
      "✓ [Chromium] › search.spec.ts › Algolia Voice & Category Filter (210ms)",
      "🎉 54 passed in 3.1s across 4 workers (Zero flakiness)",
    ],
  },
  {
    id: "paragon",
    title: "Paragon Food",
    subtitle: "paragonfood.com.bd — Hyperlocal Food Retail & Grocery eCommerce Ecosystem",
    period: "Jul 2025 – Mar 2026",
    platforms: ["Web App", "Storefront Mobile App", "Delivery Management App", "Multi-Warehouse Portal"],
    tags: ["Playwright", "GitLab CI/CD", "Cross-Browser", "API Testing", "AWS Scaling QA"],
    brandIcons: [PlaywrightIcon, GitLabIcon],
    problem:
      "Paragon Agro suffered from fragmented regional sites due to lack of multi-warehouse inventory support in legacy architecture, and their legacy server crashed under traffic surges beyond 120 active users.",
    approach:
      "Engineered automated E2E test suites covering multi-warehouse inventory selection, slot-based delivery scheduling, and one-page checkout across Web, Android, and iOS. Integrated automated Playwright regression runs into GitLab CI/CD with AWS Lambda/EventBridge scaling verification.",
    result:
      "Supported a 4X active user surge within 1 week of launch with zero server downtime during peak sales, establishing a 99.5% test pass rate across cross-browser grid and delivery app workflows.",
    impactComparison: {
      before: "Server crashed beyond 120 concurrent users · Regional stock sync drift across warehouses",
      after: "4X active user surge handled smoothly · 99.5% test pass rate across cross-browser grid",
    },
    architecture: [
      { step: "1. Multi-Warehouse Portal", detail: "Web Storefront + Driver Delivery Fleet App" },
      { step: "2. GitLab Runner CI", detail: "Dockerized Containerized Cross-Browser Grid" },
      { step: "3. Cloud API Verification", detail: "AWS Lambda & EventBridge Scaling Automation" },
      { step: "4. UAT Sign-Off", detail: "Slot-based Dispatch & 99.5% Passing Threshold" },
    ],
    testLogSample: [
      "▶ gitlab-runner exec docker test:e2e",
      "✓ [Firefox] › order_tracking.spec.ts › Slot Delivery & Live Status (220ms)",
      "✓ [WebKit] › payment.spec.ts › One-Page Checkout Authorization (380ms)",
      "✓ [Chromium] › warehouse.spec.ts › Multi-Warehouse Stock Allocation (190ms)",
      "🎉 34 passed in 2.2s across cross-browser grid (100% assertions satisfied)",
    ],
  },
];

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<Record<string, "overview" | "arch" | "logs">>({
    shwapno: "overview",
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
            Real-World Impact & Case Studies
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

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
                className="glass-card p-6 sm:p-8 rounded-3xl border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.4)] transition-all"
              >
                {/* Top Banner */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                        {project.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[hsl(var(--foreground))]">
                        {project.title}
                      </h3>
                      {/* SVG Brand Logos */}
                      <div className="flex items-center gap-1.5 bg-[hsl(var(--muted)/0.8)] px-2.5 py-1 rounded-xl border border-[hsl(var(--card-border))]">
                        {project.brandIcons.map((BrandIcon, idx) => (
                          <BrandIcon key={idx} className="w-4 h-4" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[hsl(var(--primary))] font-semibold mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Platform Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.platforms.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Before vs After Impact Metric Pill Card */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[hsl(var(--background)/0.6)] border border-[hsl(var(--card-border))]">
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-bold shrink-0 text-[10px] uppercase">
                      Before
                    </span>
                    <span className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {project.impactComparison.before}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold shrink-0 text-[10px] uppercase">
                      After QA
                    </span>
                    <span className="text-[hsl(var(--foreground))] font-medium leading-relaxed">
                      {project.impactComparison.after}
                    </span>
                  </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-2 mb-6 border-b border-[hsl(var(--card-border))] pb-3">
                  <button
                    onClick={() => toggleTab(project.id, "overview")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentTab === "overview"
                        ? "bg-[hsl(var(--primary))] text-white shadow-md glow-purple"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    Case Study
                  </button>
                  <button
                    onClick={() => toggleTab(project.id, "arch")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentTab === "arch"
                        ? "bg-[hsl(var(--primary))] text-white shadow-md glow-purple"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    <Layers size={13} />
                    Architecture & Pipeline
                  </button>
                  <button
                    onClick={() => toggleTab(project.id, "logs")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentTab === "logs"
                        ? "bg-[hsl(var(--primary))] text-white shadow-md glow-purple"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
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
                        <p className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1">
                          🔴 Problem
                        </p>
                        <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1">
                          🔵 Approach
                        </p>
                        <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                          {project.approach}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                          🟢 Result
                        </p>
                        <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
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
                          className="p-3.5 rounded-xl bg-[hsl(var(--background)/0.8)] border border-[hsl(var(--card-border))] flex flex-col justify-between"
                        >
                          <div>
                            <p className="text-[11px] font-bold text-[hsl(var(--primary))] mb-1">
                              {arch.step}
                            </p>
                            <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
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
                      className="p-4 rounded-xl bg-[hsl(var(--background))] border border-[hsl(var(--card-border))] font-mono text-xs space-y-2 mb-6 text-left"
                    >
                      {project.testLogSample.map((line, idx) => (
                        <p
                          key={idx}
                          className={
                            line.startsWith("🎉")
                              ? "text-emerald-400 font-bold mt-2"
                              : line.startsWith("✓")
                              ? "text-emerald-300"
                              : "text-[hsl(var(--accent))]"
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
                      className="px-3 py-1 rounded-lg bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
