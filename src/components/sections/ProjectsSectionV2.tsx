"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Activity,
  Cpu,
  ShieldCheck,
  Layers,
  Sparkles,
  GitPullRequest,
  Gauge,
  FileCode,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import {
  PlaywrightIcon,
  JMeterIcon,
  GitHubActionsIcon,
  DockerIcon,
  TypeScriptIcon,
  PostmanIcon,
} from "@/components/ui/SvgIcons";

type FrameworkId = "playwright-e2e" | "jmeter-benchmark" | "github-actions-gate";

interface FrameworkArchitecture {
  id: FrameworkId;
  name: string;
  tagline: string;
  scopeTag: string;
  targetApp: string;
  description: string;
  brandIcons: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[];
  quantifiedMetrics: {
    value: string;
    label: string;
    subtext: string;
  }[];
  architecturalCapabilities: {
    title: string;
    description: string;
  }[];
  consoleConfig: {
    fileName: string;
    codeSnippet: string;
    telemetryTitle: string;
  };
}

const frameworksData: Record<FrameworkId, FrameworkArchitecture> = {
  "playwright-e2e": {
    id: "playwright-e2e",
    name: "Playwright TypeScript E2E Framework",
    tagline: "Modular Page Object Model Framework with Parallel Multi-Worker Execution",
    scopeTag: "[MODULAR_POM_E2E]",
    targetApp: "Shwapno E-Commerce platform checkout & Algolia search journeys (60+ Retail Outlets, 500k+ Active Shoppers)",
    description:
      "Architected a production-grade E2E test framework using TypeScript and Playwright Page Object Models (POM). Built with custom fixtures for multi-tenant auth hydration, strict web-first assertions with zero arbitrary waits, and 4-worker parallel execution across Chromium & WebKit.",
    brandIcons: [
      { name: "Playwright", icon: PlaywrightIcon, accentColor: "#2EAD33" },
      { name: "TypeScript", icon: TypeScriptIcon, accentColor: "#3178C6" },
      { name: "Postman", icon: PostmanIcon, accentColor: "#F37036" },
    ],
    quantifiedMetrics: [
      {
        value: "120+",
        label: "Automated E2E Flows",
        subtext: "Mission-critical checkout journeys",
      },
      {
        value: "4 Workers",
        label: "Parallel Browser Grid",
        subtext: "Concurrent headless runners",
      },
      {
        value: "0 Flakes",
        label: "Flaky Assertions",
        subtext: "Strict auto-waiting locators",
      },
      {
        value: "Chromium & WebKit",
        label: "Cross-Engine Parity",
        subtext: "Desktop & iOS mobile regression",
      },
    ],
    architecturalCapabilities: [
      {
        title: "Hermetic Page Object Architecture",
        description:
          "Strict separation of UI selectors, intent-driven user actions, and assertions across modular page classes with pre-hydrated state fixtures.",
      },
      {
        title: "Parallel Multi-Worker Sharding",
        description:
          "Distributed execution across 4 parallel browser workers slashing full regression execution cycle from 14h down to 3.5h (75% faster).",
      },
      {
        title: "Zero-Flake Web-First Assertions",
        description:
          "Strict auto-waiting assertions (expect(locator).toBeVisible()) completely eradicating flaky arbitrary sleeps (waitForTimeout: 0ms).",
      },
      {
        title: "Multi-Gateway bKash & Nagad Validation",
        description:
          "End-to-end payment gateway verification including tokenized auth, OTP entry, stock rollback on failure, and idempotent order creation.",
      },
    ],
    consoleConfig: {
      fileName: "e2e/shwapno.checkout.spec.ts",
      telemetryTitle: "Playwright CLI Test Executor",
      codeSnippet: `// 1. Production E2E Page Object Model spec for Shwapno Checkout
import { test, expect } from "../fixtures/ecommerce-fixture";

test.describe("Shwapno High-Concurrency Flash Sale Checkout", () => {
  test("verify cart stock reservation & bKash settlement", async ({
    page,
    cartPage,
    checkoutPage,
  }) => {
    // Hydrate authenticated customer session
    await page.goto("/checkout/cart");
    await expect(cartPage.cartItemCount).toHaveText("3 Items");

    // Reserve stock across 60+ retail outlets
    await cartPage.selectExpressDeliverySlot("Slot_18_00_20_00");
    await cartPage.proceedToCheckout();

    // Execute tokenized bKash mobile gateway payment
    await checkoutPage.selectPaymentMethod("bKash");
    await checkoutPage.enterMobileNumber("01700000000");
    await checkoutPage.submitPaymentOtp("748291");

    // Zero-defect assertion with auto-waiting retry
    await expect(checkoutPage.orderConfirmationBanner).toBeVisible({
      timeout: 5000,
    });
    await expect(checkoutPage.orderStatusBadge).toHaveText("CONFIRMED");
  });
});`,
    },
  },

  "jmeter-benchmark": {
    id: "jmeter-benchmark",
    name: "Apache JMeter Concurrency Benchmark Suite",
    tagline: "Distributed Non-GUI Load Generation Simulating 15,000+ Concurrent Virtual Users",
    scopeTag: "[DISTRIBUTED_LOAD_15K]",
    targetApp: "Enterprise flash-sale checkout, dynamic coupon engine, and bKash webhook load handling",
    description:
      "Constructed a distributed non-GUI load generation suite simulating 15,000 concurrent virtual shoppers at 10,000+ RPM throughput surges. Validated database connection pool ceilings, bKash webhook reconciliation queues, and enforced strict p95 < 2.0s latency SLA guardrails.",
    brandIcons: [
      { name: "Apache JMeter", icon: JMeterIcon, accentColor: "#D22128" },
      { name: "Docker Grid", icon: DockerIcon, accentColor: "#2496ED" },
      { name: "Postman", icon: PostmanIcon, accentColor: "#F37036" },
    ],
    quantifiedMetrics: [
      {
        value: "15,000 VUs",
        label: "Virtual Shoppers",
        subtext: "Stepped concurrency surge",
      },
      {
        value: "p95 < 1.74s",
        label: "Response Latency",
        subtext: "Well within < 2.0s SLA target",
      },
      {
        value: "0.02%",
        label: "Error Rate",
        subtext: "364 / 1.8M total requests",
      },
      {
        value: "1.8M Req",
        label: "Benchmark Volume",
        subtext: "Zero connection pool deadlocks",
      },
    ],
    architecturalCapabilities: [
      {
        title: "Headless Distributed Worker Cluster",
        description:
          "Non-GUI distributed JMeter engine orchestrating remote worker nodes with real-time metric streaming to prevent controller CPU throttling.",
      },
      {
        title: "Stepped Concurrency Surge Profiles",
        description:
          "Ramp-up schedules simulating realistic national flash-sale traffic spikes with Poisson-distributed think times and session cookie hydration.",
      },
      {
        title: "Automated SLA Breach Guardrails",
        description:
          "Automated threshold assertions terminating test runs if p95 response time exceeds 2.000s or HTTP 5xx errors breach 0.1% tolerance.",
      },
      {
        title: "Payment Webhook Queue Stress Testing",
        description:
          "Volumetric load testing of asynchronous bKash/Nagad callback queues under peak database connection pool strain.",
      },
    ],
    consoleConfig: {
      fileName: "suites/shwapno-flash-sale-15k.jmx",
      telemetryTitle: "JMeter Concurrency Benchmark Logs",
      codeSnippet: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Apache JMeter Distributed Concurrency Plan: 15,000 Virtual Users -->
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.6.3">
  <hashTree>
    <TestPlan testname="Shwapno Flash Sale 15k Benchmark" enabled="true">
      <boolProp name="TestPlan.functional_mode">false</boolProp>
      <boolProp name="TestPlan.serialize_threadgroups">true</boolProp>
    </TestPlan>
    <hashTree>
      <kg.apc.jmeter.threads.UltimateThreadGroup testname="Stepped Flash Sale Surge">
        <collectionProp name="ultimatethreadgroupdata">
          <!-- 15,000 Threads, 180s Ramp, 600s Hold, 60s Ramp-down -->
          <collectionProp name="surge_profile">
            <stringProp name="threads">15000</stringProp>
            <stringProp name="init_delay">0</stringProp>
            <stringProp name="ramp_up">180</stringProp>
            <stringProp name="hold">600</stringProp>
            <stringProp name="shutdown">60</stringProp>
          </collectionProp>
        </collectionProp>
      </kg.apc.jmeter.threads.UltimateThreadGroup>
      <!-- Automated SLA Assertion: p95 < 2000ms -->
      <DurationAssertion testname="SLA Latency Guard: 2.0s">
        <stringProp name="DurationAssertion.duration">2000</stringProp>
      </DurationAssertion>
    </hashTree>
  </hashTree>
</jmeterTestPlan>`,
    },
  },

  "github-actions-gate": {
    id: "github-actions-gate",
    name: "GitHub Actions Continuous Quality Gate",
    tagline: "Multi-Stage Pull-Request Quality Gate with Sharded Containerized E2E Testing",
    scopeTag: "[PR_PIPELINE_GATE]",
    targetApp: "Brain Station 23 CI/CD pipeline for nopStation e-commerce clients & enterprise plugins",
    description:
      "Engineered an automated multi-stage CI/CD quality gate triggered on every pull request. Orchestrates static code validation, secret scanning, unit testing, and parallel sharded Playwright E2E execution inside hermetic Docker containers before merge approval.",
    brandIcons: [
      { name: "GitHub Actions", icon: GitHubActionsIcon, accentColor: "#2088FF" },
      { name: "Docker Grid", icon: DockerIcon, accentColor: "#2496ED" },
      { name: "TypeScript", icon: TypeScriptIcon, accentColor: "#3178C6" },
    ],
    quantifiedMetrics: [
      {
        value: "75% Cut",
        label: "Runtime Reduction",
        subtext: "14h manual → 3.5h automated gate",
      },
      {
        value: "100%",
        label: "Deterministic Gate",
        subtext: "Zero unverified PR merges",
      },
      {
        value: "15+ Releases",
        label: "Zero-Defect Milestones",
        subtext: "Zero critical rollbacks in prod",
      },
      {
        value: "98.8%",
        label: "Automated Pass Rate",
        subtext: "Consistent quality governance",
      },
    ],
    architecturalCapabilities: [
      {
        title: "Multi-Stage Pipeline Orchestration",
        description:
          "Sequential gating stages: Static Typecheck → Security Gitleaks Scan → Unit Matrix → Parallel Sharded Playwright E2E Grid.",
      },
      {
        title: "Intelligent Layer & Dependency Caching",
        description:
          "Browser binary and node_modules caching reducing CI workflow bootstrap overhead from 8m down to 42s per runner.",
      },
      {
        title: "Hermetic Dockerized Execution",
        description:
          "Standardized official Playwright Ubuntu containers ensuring identical headless browser rendering and font geometry between CI and local dev.",
      },
      {
        title: "Automated Trace & Artifact Publishing",
        description:
          "On-failure automatic upload of Playwright trace viewer files, MP4 run recordings, and JMeter HTML dashboards directly to PR checks.",
      },
    ],
    consoleConfig: {
      fileName: ".github/workflows/production-quality-gate.yml",
      telemetryTitle: "GitHub Actions Runner Pipeline",
      codeSnippet: `name: Production Continuous Quality Gate
on:
  pull_request:
    branches: [main, release/*]

jobs:
  static-security-gate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: TypeScript Integrity & Secrets Audit
        run: |
          npx tsc --noEmit
          npx gitleaks detect --verbose

  parallel-e2e-matrix:
    needs: static-security-gate
    strategy:
      fail-fast: false
      matrix:
        shard: [1/4, 2/4, 3/4, 4/4]
    runs-on: ubuntu-latest
    container: mcr.microsoft.com/playwright:v1.42.0-jammy
    steps:
      - uses: actions/checkout@v4
      - name: Execute Sharded Playwright Suite
        run: npx playwright test --shard=\${{ matrix.shard }} --workers=2
      - name: Publish Artifacts on Failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: trace-\${{ matrix.shard }}
          path: playwright-report/`,
    },
  },
};

export default function ProjectsSectionV2() {
  const [activeId, setActiveId] = useState<FrameworkId>("playwright-e2e");
  const [activeConsoleTab, setActiveConsoleTab] = useState<"spec" | "telemetry">("spec");
  const [copied, setCopied] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  const activeFramework = frameworksData[activeId];

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(activeFramework.consoleConfig.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="frameworks" className="section-padding relative overflow-hidden">
      {/* Anchor alias so both #frameworks and #projects scroll to this section */}
      <span id="projects" className="absolute -top-24" aria-hidden="true" />

      {/* Horizon Specular Ambient Radiance */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] bg-gradient-to-b from-black/[0.03] dark:from-white/[0.025] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-10 sm:mb-12 border-b border-black/10 dark:border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [PRODUCTION_FRAMEWORKS]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Featured Automation Architectures
            </h2>
            <p className="font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mt-2 max-w-3xl font-normal leading-relaxed">
              Battle-tested test automation frameworks, distributed load suites, and continuous deployment quality gates engineered for enterprise e-commerce platforms.
            </p>
          </div>

          <div className="mt-2 sm:mt-0 text-left sm:text-right shrink-0">
            <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 block">
              3 Flagship QA Architectures
            </span>
            <span className="font-mono-geist text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              Verified Production Telemetry
            </span>
          </div>
        </div>

        {/* Tab Switcher with Capsule Selector */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div
            role="tablist"
            aria-label="Featured Automation Architectures"
            className="w-full max-w-3xl p-1.5 rounded-full bg-white/[0.03] dark:bg-white/[0.03] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/10 dark:border-white/10 backdrop-blur-2xl shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-1.5"
          >
            {(
              [
                { id: "playwright-e2e", label: "Playwright E2E", icon: ShieldCheck },
                { id: "jmeter-benchmark", label: "JMeter Concurrency", icon: Gauge },
                { id: "github-actions-gate", label: "GitHub Actions Gate", icon: GitPullRequest },
              ] as const
            ).map((tab) => {
              const isSelected = activeId === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveId(tab.id);
                    setActiveConsoleTab("spec");
                  }}
                  className={`relative flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-xs font-mono-geist transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-md"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 font-medium"
                  }`}
                >
                  <TabIcon size={14} className={isSelected ? "text-emerald-400 dark:text-emerald-600" : "text-zinc-400"} />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Framework Layout Wrapped in Container-Level AnimatePresence mode="wait" */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFramework.id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            
            {/* ================================================================= */}
            {/* LEFT COLUMN: Overview, Metrics, Capabilities, Tooling Badges */}
            {/* ================================================================= */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Architecture Monolithic Glass Slab */}
              <div className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl p-6 sm:p-8 space-y-6">
                
                {/* Framework Meta Head */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono-geist text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {activeFramework.scopeTag}
                    </span>
                    <span className="font-mono-geist text-[10px] text-zinc-500 dark:text-zinc-400">
                      Production Architecture
                    </span>
                  </div>
                  <h3 className="font-geist text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    {activeFramework.name}
                  </h3>
                  <p className="font-geist text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium mt-1">
                    {activeFramework.tagline}
                  </p>
                </div>

                {/* Target Application Badge */}
                <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                  <span className="font-mono-geist text-[10px] uppercase font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider block mb-1">
                    Target Application Scope:
                  </span>
                  <p className="font-geist text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed font-normal">
                    {activeFramework.targetApp}
                  </p>
                </div>

                {/* Executive Description */}
                <p className="font-geist text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {activeFramework.description}
                </p>

                {/* 4 Quantified Metrics Grid */}
                <div>
                  <span className="font-mono-geist text-[10px] uppercase font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider block mb-3">
                    Verified Quality Metrics:
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {activeFramework.quantifiedMetrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex flex-col justify-between"
                      >
                        <div className="font-mono-geist text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">
                          {metric.value}
                        </div>
                        <div className="font-geist text-xs font-semibold text-zinc-900 dark:text-white mt-1">
                          {metric.label}
                        </div>
                        <div className="font-mono-geist text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-tight">
                          {metric.subtext}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Architectural Capabilities */}
                <div className="pt-2 border-t border-black/5 dark:border-white/5">
                  <span className="font-mono-geist text-[10px] uppercase font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider block mb-3">
                    Architectural Capabilities:
                  </span>
                  <div className="space-y-3">
                    {activeFramework.architecturalCapabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                          <CheckCircle2 size={12} />
                        </div>
                        <div>
                          <h4 className="font-geist text-xs font-semibold text-zinc-900 dark:text-white">
                            {cap.title}
                          </h4>
                          <p className="font-geist text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mt-0.5">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Universal Brand Tooling Row */}
                <div className="pt-3 border-t border-black/5 dark:border-white/5">
                  <span className="font-mono-geist text-[10px] uppercase font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider block mb-2.5">
                    Official Tooling Ecosystem:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeFramework.brandIcons.map((tool) => {
                      const ToolIcon = tool.icon;
                      return (
                        <div
                          key={tool.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] border-t border-black/15 dark:border-t-white/20 border-x border-b border-black/5 dark:border-white/5 text-zinc-800 dark:text-zinc-200"
                        >
                          <ToolIcon className="w-3.5 h-3.5 shrink-0" />
                          <span className="font-mono-geist text-[11px] font-medium">
                            {tool.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* ================================================================= */}
            {/* RIGHT COLUMN: Interactive Code Console & Live Telemetry Simulator */}
            {/* ================================================================= */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#090b10] text-zinc-200 border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/15 dark:border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col">
                
                {/* Console Window Header Bar */}
                <div className="px-4 sm:px-6 py-3.5 bg-zinc-950/80 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  
                  {/* Left: Window Dots & File Identifier */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-zinc-600 text-xs font-mono-geist">/</span>
                    <div className="flex items-center gap-1.5 text-zinc-300 font-mono-geist text-xs">
                      <FileCode size={13} className="text-emerald-400" />
                      <span className="font-medium truncate max-w-[200px] sm:max-w-none">
                        {activeFramework.consoleConfig.fileName}
                      </span>
                    </div>
                  </div>

                  {/* Right: Sub-Tabs & Copy Action */}
                  <div className="flex items-center gap-2">
                    
                    {/* View Switcher: Specification vs Live Telemetry */}
                    <div className="p-1 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setActiveConsoleTab("spec")}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono-geist transition-all ${
                          activeConsoleTab === "spec"
                            ? "bg-zinc-800 text-white font-semibold shadow-xs"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        Specification
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveConsoleTab("telemetry")}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono-geist flex items-center gap-1.5 transition-all ${
                          activeConsoleTab === "telemetry"
                            ? "bg-zinc-800 text-emerald-400 font-semibold shadow-xs"
                            : "text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-reduce:animate-none animate-pulse" />
                        Live Telemetry
                      </button>
                    </div>

                    {/* Copy Button */}
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="p-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all text-xs font-mono-geist flex items-center gap-1 cursor-pointer"
                      title="Copy code to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span className="text-[10px] text-emerald-400 pr-1">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span className="sr-only">Copy code</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Console Main Body Area */}
                <div className="p-4 sm:p-6 font-mono-geist text-xs leading-relaxed min-h-[460px] flex flex-col justify-between overflow-x-auto">
                  
                  {activeConsoleTab === "spec" ? (
                    /* VIEW A: SYNTAX SPECIFICATION WITH LINE NUMBERS */
                    <div className="space-y-1">
                      <pre className="text-zinc-300 font-mono-geist overflow-x-auto text-[11px] sm:text-xs leading-relaxed">
                        <code>
                          {activeFramework.consoleConfig.codeSnippet
                            .split("\n")
                            .map((line, lIdx) => (
                              <div key={lIdx} className="table-row">
                                <span className="table-cell select-none pr-4 text-zinc-600 text-right w-8 text-[11px]">
                                  {lIdx + 1}
                                </span>
                                <span className="table-cell text-zinc-200">
                                  {formatCodeLine(line)}
                                </span>
                              </div>
                            ))}
                        </code>
                      </pre>
                    </div>
                  ) : (
                    /* VIEW B: INTERACTIVE TELEMETRY RUNNER */
                    <div className="h-full flex flex-col justify-between space-y-6">
                      
                      {/* Interactive Telemetry Sub-Renderers based on active framework */}
                      {activeFramework.id === "playwright-e2e" && (
                        <PlaywrightTelemetryView />
                      )}

                      {activeFramework.id === "jmeter-benchmark" && (
                        <JMeterTelemetryView />
                      )}

                      {activeFramework.id === "github-actions-gate" && (
                        <GitHubActionsTelemetryView />
                      )}

                    </div>
                  )}

                  {/* Console Footer Status Strip */}
                  <div className="pt-4 mt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono-geist text-zinc-500 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-zinc-400">Status: Deterministic Release Gate Active</span>
                    </div>
                    <div className="text-zinc-500">
                      <span>Artifact: Verified Brain Station 23 Standard</span>
                    </div>
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

// =========================================================================
// SYNTAX FORMATTER HELPER
// =========================================================================
function formatCodeLine(line: string) {
  if (line.trim().startsWith("//") || line.trim().startsWith("#") || line.trim().startsWith("<!--")) {
    return <span className="text-zinc-500 italic">{line}</span>;
  }
  
  if (line.includes("test.describe") || line.includes("test(") || line.includes("import ") || line.includes("from ") || line.includes("name:") || line.includes("runs-on:") || line.includes("steps:")) {
    return <span className="text-sky-300 font-medium">{line}</span>;
  }

  if (line.includes("await expect") || line.includes("toBeVisible") || line.includes("toHaveText")) {
    return <span className="text-emerald-300">{line}</span>;
  }

  if (line.includes("async") || line.includes("await") || line.includes("const ") || line.includes("let ")) {
    return <span className="text-purple-300">{line}</span>;
  }

  return <span>{line}</span>;
}

// =========================================================================
// PLAYWRIGHT TELEMETRY SIMULATOR VIEW
// =========================================================================
function PlaywrightTelemetryView() {
  return (
    <div className="space-y-4">
      {/* CLI Command Line Header */}
      <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 text-[11px] font-mono-geist">
        <span className="text-emerald-400 font-bold">$ </span>
        <span className="text-zinc-300">
          npx playwright test e2e/shwapno.checkout.spec.ts --project=chromium,webkit --workers=4
        </span>
      </div>

      {/* Parallel Workers Telemetry Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono-geist">
        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-zinc-500 block">Workers</span>
          <span className="text-emerald-400 font-bold">4 Parallel</span>
        </div>
        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-zinc-500 block">Engines</span>
          <span className="text-sky-400 font-bold">Chromium + WebKit</span>
        </div>
        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-zinc-500 block">Shards</span>
          <span className="text-amber-400 font-bold">4/4 Matrix</span>
        </div>
        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-zinc-500 block">Pass Rate</span>
          <span className="text-emerald-400 font-bold">100% (120/120)</span>
        </div>
      </div>

      {/* Real-Time Assertions Stream */}
      <div className="space-y-2 pt-1 font-mono-geist text-[11px]">
        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="text-zinc-400">[chromium]</span>
            <span className="text-zinc-200">auth.fixture.ts:18 › Hydrate multi-tenant session</span>
          </div>
          <span className="text-zinc-500 text-[10px]">112ms</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="text-zinc-400">[chromium]</span>
            <span className="text-zinc-200">inventory.spec.ts:34 › 60+ outlets real-time stock allocation</span>
          </div>
          <span className="text-zinc-500 text-[10px]">284ms</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="text-zinc-400">[chromium]</span>
            <span className="text-zinc-200">checkout.spec.ts:56 › Flash-sale cart reservation & delivery slot</span>
          </div>
          <span className="text-zinc-500 text-[10px]">196ms</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="text-zinc-400">[chromium]</span>
            <span className="text-zinc-200">checkout.spec.ts:82 › bKash tokenized gateway payment & OTP</span>
          </div>
          <span className="text-zinc-500 text-[10px]">418ms</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="text-zinc-400">[webkit]</span>
            <span className="text-zinc-200">checkout.spec.ts:82 › Safari iOS mobile checkout regression</span>
          </div>
          <span className="text-zinc-500 text-[10px]">392ms</span>
        </div>
      </div>

      {/* Executive Summary Banner */}
      <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono-geist flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span className="font-bold">120 passed, 0 flaky, 0 failed</span>
        </div>
        <span className="text-[10px] text-emerald-400/90 font-medium">
          Runtime: 3.5h (75% faster than 14h manual baseline)
        </span>
      </div>
    </div>
  );
}

// =========================================================================
// JMETER LATENCY DISTRIBUTION & CONCURRENCY GRAPH VIEW
// =========================================================================
function JMeterTelemetryView() {
  return (
    <div className="space-y-4">
      {/* CLI Command Line Header */}
      <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 text-[11px] font-mono-geist">
        <span className="text-rose-400 font-bold">$ </span>
        <span className="text-zinc-300">
          jmeter -n -t suites/shwapno_flash_sale_15k.jmx -l logs/run_042.jtl -e -o reports/html
        </span>
      </div>

      {/* Bespoke Latency Distribution SVG Graph */}
      <div className="p-4 rounded-2xl bg-black/50 border border-zinc-800/80 space-y-3">
        <div className="flex items-center justify-between text-[11px] font-mono-geist">
          <span className="text-zinc-400 flex items-center gap-1.5 font-semibold">
            <Activity size={13} className="text-rose-400" />
            Distributed Latency Distribution (15,000 Concurrent VUs)
          </span>
          <span className="text-emerald-400 font-bold">p95: 1.74s (SLA: &lt; 2.0s)</span>
        </div>

        {/* SVG Latency Graph */}
        <div className="w-full h-36 relative">
          <svg viewBox="0 0 400 130" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                <stop offset="70%" stopColor="#10b981" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <line x1="0" y1="25" x2="400" y2="25" stroke="#27272a" strokeDasharray="3 3" />
            <line x1="0" y1="65" x2="400" y2="65" stroke="#27272a" strokeDasharray="3 3" />
            <line x1="0" y1="105" x2="400" y2="105" stroke="#27272a" strokeDasharray="3 3" />

            {/* SLA Contract Limit Line (2.0s threshold) */}
            <line x1="0" y1="20" x2="400" y2="20" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="320" y="16" fill="#f43f5e" fontSize="9" fontFamily="monospace" fontWeight="bold">
              SLA LIMIT (2.0s)
            </text>

            {/* Shaded Area Under Latency Curve */}
            <path
              d="M 0 115 Q 100 110, 160 95 T 280 50 T 360 30 L 400 24 L 400 125 L 0 125 Z"
              fill="url(#latencyGradient)"
            />

            {/* Main Latency Curve Path */}
            <path
              d="M 0 115 Q 100 110, 160 95 T 280 50 T 360 30 L 400 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            />

            {/* Marker Points: p50, p90, p95 */}
            {/* p50: x=160, y=95 (420ms) */}
            <circle cx="160" cy="95" r="3.5" fill="#10b981" stroke="#042f2e" strokeWidth="2" />
            <text x="145" y="86" fill="#6ee7b7" fontSize="8" fontFamily="monospace">p50: 420ms</text>

            {/* p90: x=280, y=50 (1.18s) */}
            <circle cx="280" cy="50" r="3.5" fill="#38bdf8" stroke="#082f49" strokeWidth="2" />
            <text x="265" y="42" fill="#7dd3fc" fontSize="8" fontFamily="monospace">p90: 1.18s</text>

            {/* p95: x=360, y=30 (1.74s) */}
            <circle cx="360" cy="30" r="4.5" fill="#f59e0b" stroke="#451a03" strokeWidth="2" />
            <text x="330" y="24" fill="#fcd34d" fontSize="9" fontFamily="monospace" fontWeight="bold">p95: 1.74s</text>
          </svg>
        </div>

        {/* X-Axis Concurrency Stages */}
        <div className="flex justify-between text-[9px] font-mono-geist text-zinc-500 pt-1 border-t border-zinc-800">
          <span>0 VUs (Warmup)</span>
          <span>5,000 VUs</span>
          <span>10,000 VUs</span>
          <span className="text-zinc-300 font-semibold">15,000 VUs (Peak Surge)</span>
        </div>
      </div>

      {/* JMeter Run Telemetry Readout Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono-geist">
        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-zinc-500 block">Total Requests</span>
          <span className="text-zinc-200 font-bold">1,824,000</span>
        </div>
        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-zinc-500 block">Throughput</span>
          <span className="text-emerald-400 font-bold">10,240 RPM</span>
        </div>
        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-zinc-500 block">Error Rate</span>
          <span className="text-emerald-400 font-bold">0.02% (364 err)</span>
        </div>
        <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800">
          <span className="text-zinc-500 block">DB Pool State</span>
          <span className="text-emerald-400 font-bold">0 Deadlocks</span>
        </div>
      </div>

      {/* Assertion Verdict */}
      <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono-geist flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span className="font-bold">SLA Contract Upheld: p95 &lt; 2.0s under 15,000 VUs</span>
        </div>
        <span className="text-[10px] text-emerald-400/90 font-medium">
          Zero Critical Outages Across Flash Sales
        </span>
      </div>
    </div>
  );
}

// =========================================================================
// GITHUB ACTIONS CI/CD PIPELINE RUNNER VIEW
// =========================================================================
function GitHubActionsTelemetryView() {
  const steps = [
    {
      name: "Static Code Analysis & TypeScript Integrity",
      cmd: "npx tsc --noEmit; npx eslint .",
      duration: "38s",
      status: "PASSED",
      detail: "0 type errors · strict mode verified",
    },
    {
      name: "Security Vulnerability & Gitleaks Scan",
      cmd: "npx gitleaks detect --verbose",
      duration: "14s",
      status: "PASSED",
      detail: "Zero leaked API keys or credentials",
    },
    {
      name: "Playwright Parallel Sharded Matrix (4 Nodes)",
      cmd: "playwright test --shard=1/4,2/4,3/4,4/4 --workers=2",
      duration: "3m 12s",
      status: "PASSED",
      detail: "120/120 flows verified in container grid",
    },
    {
      name: "Artifact & Test Trace Report Publishing",
      cmd: "actions/upload-artifact@v4 (traces & videos)",
      duration: "18s",
      status: "PASSED",
      detail: "HTML report & trace viewer bundles generated",
    },
    {
      name: "Production Branch Protection Gate",
      cmd: "gh pr check-gate --require-passing-suites",
      duration: "Instant",
      status: "MERGE ALLOWED",
      detail: "100% Deterministic Quality Release Gate",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Workflow Trigger Header */}
      <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 text-[11px] font-mono-geist flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <GitPullRequest size={14} className="text-sky-400" />
          <span className="text-zinc-300 font-semibold">PR #142: Shwapno Flash Sale Checkout v2.4</span>
        </div>
        <span className="text-emerald-400 text-[10px] font-bold">
          Ref: refs/pull/142/merge
        </span>
      </div>

      {/* Visual Step Runner Pipeline */}
      <div className="space-y-2 pt-1 font-mono-geist text-[11px]">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <div className="flex items-start sm:items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 sm:mt-0">
                ✓
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-200 font-semibold">{step.name}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400">
                    {step.duration}
                  </span>
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">
                  <span className="text-zinc-400 font-mono-geist">{step.cmd}</span> · {step.detail}
                </div>
              </div>
            </div>

            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-center shrink-0">
              {step.status}
            </span>
          </div>
        ))}
      </div>

      {/* Release Gate Sign-Off Banner */}
      <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono-geist flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span className="font-bold">Quality Gate Complete: 15+ Zero-Defect Releases Sustained</span>
        </div>
        <span className="text-[10px] text-emerald-400/90 font-medium">
          Zero Rollbacks in Production
        </span>
      </div>
    </div>
  );
}
