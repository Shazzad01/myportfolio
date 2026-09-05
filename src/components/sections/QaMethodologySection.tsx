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
      "Requirements traceability matrix (RTM) standardizing testing throughput by 25%",
      "Boundary value analysis & equivalence partitioning for edge-case coverage",
      "Payment gateway failure state and real-time inventory drift modeling",
    ],
    metrics: "350+ structured test scenarios authored with 98.5% defect catch rate",
    tools: ["Jira Software", "RTM Standards", "Agile / Scrum", "Confluence"],
  },
  {
    id: "automation",
    step: "Stage 02",
    title: "Automated Regression Guardrails",
    badge: "CI/CD Pull Request Gate",
    icon: Cpu,
    summary:
      "Engineering resilient Playwright (TypeScript) frameworks with Page Object Models (POM), robust locator strategies, and parallel execution across Chromium, Firefox, and WebKit.",
    details: [
      "Headless cross-browser execution on GitHub Actions & GitLab CI",
      "80+ automated smoke checks executed per pull request (60% manual cut)",
      "Multi-branch stock sync & bKash/Nagad one-page checkout coverage",
    ],
    metrics: "80%+ automated coverage across 120+ flows (14h to 3.5h runtime cut)",
    tools: ["Playwright", "TypeScript", "GitHub Actions", "GitLab CI"],
  },
  {
    id: "performance",
    step: "Stage 03",
    title: "High-Concurrency Benchmarking",
    badge: "Scalability Assurance",
    icon: Flame,
    summary:
      "Simulating 15,000+ concurrent virtual users in Apache JMeter at 10,000+ RPM to benchmark response latency and isolate microservices bottlenecks under national sales traffic.",
    details: [
      "Thread group scaling to 15,000+ concurrent virtual users (10,000+ RPM)",
      "p95 response latency benchmarked under 1.8 seconds during peak shopping",
      "Server resource telemetry isolating 8 critical API latency bottlenecks",
    ],
    metrics: "15,000+ VUs stress-tested · p95 < 1.8s · 8 bottlenecks eliminated",
    tools: ["Apache JMeter", "Postman / Newman", "K6", "AWS Telemetry"],
  },
  {
    id: "quality-gate",
    step: "Stage 04",
    title: "Continuous Gate & Release Governance",
    badge: "Zero-Defect Sign-off",
    icon: ShieldCheck,
    summary:
      "Owning end-to-end quality governance: triaging defects with AI-assisted GitHub Copilot workflows (35% faster turnaround), leading enterprise UAT demos, and securing 100% on-time release sign-offs.",
    details: [
      "AI-assisted triage with GitHub Copilot Agent auto-generating bug scripts (35% faster)",
      "Enterprise UAT sign-offs with business analysts across 40+ Agile sprints",
      "Post-release smoke verification maintaining zero critical production outages",
    ],
    metrics: "99.4% platform uptime across 15+ major releases · 100% on-time sign-offs",
    tools: ["GitHub Copilot", "GitHub Actions", "GitLab CI", "Jira Software"],
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
