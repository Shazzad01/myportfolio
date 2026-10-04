"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  Flame,
  ShieldCheck,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import {
  PlaywrightIcon,
  JMeterIcon,
  GitHubActionsIcon,
  TypeScriptIcon,
} from "@/components/ui/SvgIcons";

interface MethodologyStage {
  id: string;
  step: string;
  title: string;
  badge: string;
  headline: string;
  summary: string;
  highlights: string[];
  metrics: string;
  tools: string[];
}

export default function QaMethodologySectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStageId, setActiveStageId] = useState("automation");

  const stages: MethodologyStage[] = [
    {
      id: "shift-left",
      step: "01",
      title: "Shift-Left Requirement Modeling",
      badge: "Prevention Over Detection",
      headline: "Catching Ambiguities Before Code Is Written",
      summary:
        "Reviewing user stories, edge-cases, and business requirements with product managers and BAs prior to sprint kickoff — formulating test scenarios and boundary matrices upfront.",
      highlights: [
        "Authored 350+ structured test scenarios achieving a 98.5% defect catch rate at the requirements phase",
        "Constructed Requirements Traceability Matrix (RTM) standardizing QA throughput by 25%",
        "Modeled payment gateway failure states and multi-branch inventory drift before backend development",
      ],
      metrics: "98.5% Upfront Defect Catch Rate · 350+ Scenarios",
      tools: ["Jira Software", "RTM Standards", "Agile / Scrum", "Confluence"],
    },
    {
      id: "automation",
      step: "02",
      title: "Automated Regression Guardrails",
      badge: "CI/CD Pull Request Gate",
      headline: "Modular Page Object Model Suites in CI/CD",
      summary:
        "Engineering resilient Playwright (TypeScript) frameworks with Page Object Models (POM), robust locators, and parallel execution across Chromium, Firefox, and WebKit on GitHub Actions.",
      highlights: [
        "Headless cross-browser execution on GitHub Actions across 4 parallel worker instances with zero flakiness",
        "Automated 80+ smoke checks executed per pull request, cutting manual regression effort by 60%",
        "End-to-end automation of multi-branch stock sync, Algolia search, and bKash / Nagad one-page checkout",
      ],
      metrics: "80%+ Automated Coverage (120+ Flows) · 75% Runtime Cut (14h → 3.5h)",
      tools: ["Playwright", "TypeScript", "GitHub Actions", "GitLab CI"],
    },
    {
      id: "performance",
      step: "03",
      title: "High-Concurrency Volumetric Stress",
      badge: "Scalability Assurance",
      headline: "15,000+ Concurrent Virtual Users at 10,000+ RPM",
      summary:
        "Executing non-GUI Apache JMeter volumetric stress tests to benchmark response latency, connection pool limits, and microservice resilience during national shopping festival spikes.",
      highlights: [
        "Thread group scaling to 15,000+ concurrent virtual users simulating checkout traffic floods",
        "p95 response latency benchmarked under 1.8 seconds during peak shopping load",
        "Server resource telemetry profiling isolating and resolving 8 critical API latency bottlenecks",
      ],
      metrics: "15,000+ VUs · p95 < 1.8s · 0.02% Error Rate",
      tools: ["Apache JMeter", "Postman / Newman", "K6", "AWS Telemetry"],
    },
    {
      id: "quality-gate",
      step: "04",
      title: "Continuous Gate & Release Governance",
      badge: "Zero-Defect Sign-off",
      headline: "Zero-Defect Release Sign-Off & Platform Stability",
      summary:
        "Owning end-to-end quality governance: triaging defects with AI-assisted GitHub Copilot workflows (35% faster turnaround), leading enterprise UAT demos, and securing 100% on-time release sign-offs.",
      highlights: [
        "AI-assisted triage with GitHub Copilot Agent auto-generating bug reproduction scripts (35% faster)",
        "Enterprise UAT demonstrations with business analysts and product leads across 40+ Agile sprints",
        "Post-release smoke verification maintaining zero critical production outages and 99.4% platform uptime",
      ],
      metrics: "99.4% Uptime (15+ Major Releases) · 100% On-Time Sign-Offs",
      tools: ["GitHub Copilot", "GitHub Actions", "Jira Software", "nopStation Award"],
    },
  ];

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[1];

  return (
    <section id="methodology" className="section-padding relative">
      <div className="container-max">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
              // 03 · Quality Engineering Architecture
            </span>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Shift-Left QA &amp; Continuous Gates
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            4-Stage Continuous Lifecycle
          </span>
        </div>

        {/* Unboxed Interactive Split Layout (No Cards, Pure Editorial Flow) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: 4 Minimal Stage Navigators (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-widest block font-semibold mb-2">
              Lifecycle Stages
            </span>

            <div className="space-y-3">
              {stages.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`w-full text-left transition-all duration-200 py-3 pl-4 border-l-2 cursor-pointer focus:outline-none ${
                      isActive
                        ? "border-emerald-500 text-zinc-900 dark:text-white font-bold"
                        : "border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-800 dark:hover:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono-geist mb-0.5">
                      <span className={isActive ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-zinc-400"}>
                        Stage {stage.step}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-normal">
                        {stage.badge}
                      </span>
                    </div>
                    <div className="font-geist text-sm truncate">
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Stage Deep-Dive (8 cols) */}
          <div className="lg:col-span-8 lg:pl-6 lg:border-l lg:border-zinc-200/60 dark:lg:border-zinc-800/60">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Stage Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                      Stage {activeStage.step} // {activeStage.badge}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    <span className="font-mono-geist text-xs text-zinc-500">
                      Verified Process
                    </span>
                  </div>

                  <h3 className="font-geist text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                    {activeStage.headline}
                  </h3>
                </div>

                {/* Summary */}
                <p className="font-geist text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {activeStage.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-widest block font-semibold">
                    Architectural Invariants &amp; Execution:
                  </span>
                  {activeStage.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics & Toolset (Unboxed, Pure Minimalist Footprint) */}
                <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="font-mono-geist text-[10px] text-zinc-400 uppercase tracking-wider block">
                        Verified Impact Metric
                      </span>
                      <span className="font-geist text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                        {activeStage.metrics}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {activeStage.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="font-mono-geist text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
