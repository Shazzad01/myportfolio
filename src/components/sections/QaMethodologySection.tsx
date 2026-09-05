"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  GitPullRequest,
  CheckCircle2,
  Cpu,
  Flame,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Activity,
  Layers,
} from "lucide-react";

interface MethodologyStage {
  id: string;
  step: string;
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  summary: string;
  details: string[];
  metrics: string;
  tools: string[];
}

const stages: MethodologyStage[] = [
  {
    id: "shift-left",
    step: "Stage 01",
    title: "Shift-Left Requirement Modeling",
    badge: "Prevention Over Detection",
    icon: Layers,
    summary:
      "Reviewing user stories and business logic before developers write code — identifying ambiguous acceptance criteria, testability bottlenecks, and critical edge cases upfront.",
    details: [
      "Requirements traceability matrix mapping features to user personas",
      "Gherkin BDD scenario drafting for clear developer alignment",
      "Edge-case discovery & payment failure state modeling",
    ],
    metrics: "Eliminates ~40% of defect risks before first pull request",
    tools: ["Jira Software", "Confluence", "Miro", "Figma Specs"],
  },
  {
    id: "automation",
    step: "Stage 02",
    title: "Automated Regression Guardrails",
    badge: "CI/CD Pull Request Gate",
    icon: Cpu,
    summary:
      "Engineering resilient Playwright TypeScript frameworks with page object models (POM), robust locator strategies, and parallel execution across Chromium, Firefox, and WebKit.",
    details: [
      "Headless cross-browser execution on GitHub Actions & GitLab CI",
      "Hyperlocal stock locking & one-page checkout flow coverage",
      "Auto-retry logic with trace and video recording on failures",
    ],
    metrics: "Reduces regression cycle time by 60% per sprint release",
    tools: ["Playwright", "TypeScript", "Selenium", "Docker"],
  },
  {
    id: "performance",
    step: "Stage 03",
    title: "High-Concurrency Benchmarking",
    badge: "Scalability Assurance",
    icon: Flame,
    summary:
      "Simulating thousands of concurrent virtual shoppers in Apache JMeter to identify server bottlenecks, database connection pool saturation, and API latency spikes.",
    details: [
      "Thread group scaling up to 5,000 concurrent virtual users",
      "p95 and p99 response time profiling across critical APIs",
      "Server resource telemetry under extreme retail flash sales",
    ],
    metrics: "Maintains p95 latency under 200ms at 5X traffic surges",
    tools: ["Apache JMeter", "Postman / Newman", "K6", "AWS CloudWatch"],
  },
  {
    id: "quality-gate",
    step: "Stage 04",
    title: "Continuous Gate & Release Governance",
    badge: "Zero-Defect Sign-off",
    icon: ShieldCheck,
    summary:
      "Owning end-to-end quality governance: triaging defects with AI-assisted GitHub Copilot workflows, coordinating UAT sign-offs, and ensuring zero-downtime production launches.",
    details: [
      "AI-assisted issue triaging with GitHub Copilot Agent for rapid fixes",
      "Structured client UAT runs with verified test execution reports",
      "Post-release smoke tests and live telemetry health monitoring",
    ],
    metrics: "Achieved 99.9% production release reliability across 1M+ users",
    tools: ["GitHub Copilot", "Allure Reports", "Azure Boards", "Slack Hooks"],
  },
];

export default function QaMethodologySection() {
  const [activeStageId, setActiveStageId] = useState(stages[0].id);
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="methodology" className="section-padding relative">
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
            Quality Engineering Philosophy
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Shift-Left QA Lifecycle</h2>
          <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-4 max-w-2xl mx-auto">
            Quality is not inspected in at the end of a sprint — it is engineered in from the first architectural draft to production deployment.
          </p>
        </motion.div>

        {/* 4 Stages Horizontal Stepper */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  isActive
                    ? "bg-[hsl(var(--card))] border-[#f59e0b] shadow-xl shadow-[0_0_20px_rgba(245,158,11,0.25)] scale-[1.02]"
                    : "glass border-[hsl(var(--card-border))] hover:border-[#f59e0b]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[hsl(var(--primary))]">
                    {stage.step}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive
                        ? "bg-[hsl(var(--primary))] text-white"
                        : "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-sm text-[hsl(var(--foreground))] mb-1">
                  {stage.title}
                </h3>
                <span className="text-[10px] font-semibold text-[hsl(var(--accent))]">
                  {stage.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight Panel */}
        <motion.div
          key={activeStage.id}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-6 sm:p-8 rounded-3xl border border-[hsl(var(--card-border))] shadow-2xl text-left"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Summary & Techniques */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))]">
                  {activeStage.step} · {activeStage.badge}
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-[hsl(var(--foreground))]">
                {activeStage.title}
              </h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {activeStage.summary}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--foreground))]">
                  Core Implementation Practices
                </p>
                {activeStage.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[hsl(var(--muted-foreground))]">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quantified Impact & Tooling */}
            <div className="lg:col-span-5 space-y-5 p-5 rounded-2xl bg-[hsl(var(--background)/0.8)] border border-[hsl(var(--card-border))]">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[hsl(var(--accent))] mb-1 flex items-center gap-1.5">
                  <TrendingUp size={12} />
                  Measured Quality Metric
                </p>
                <p className="font-heading font-bold text-base text-[hsl(var(--foreground))]">
                  {activeStage.metrics}
                </p>
              </div>

              <div className="pt-2 border-t border-[hsl(var(--card-border))]">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-2">
                  Tooling &amp; Platform Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeStage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
