"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Terminal, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { PlaywrightIcon, JMeterIcon, GitHubActionsIcon, GitLabIcon } from "@/components/ui/SvgIcons";

const projects = [
  {
    id: "shwopno",
    title: "Shwopno.com",
    subtitle: "Bangladesh's Largest Retail Grocery & E-Commerce Platform (ACI Logistics)",
    period: "Apr 2024 – Present",
    platforms: ["Web App", "Flutter Mobile App", "Admin Portal", "Order & Delivery App"],
    tags: ["Playwright", "GitHub Actions", "JMeter", "Regression", "CI/CD"],
    brandIcons: [PlaywrightIcon, JMeterIcon, GitHubActionsIcon],
    problem:
      "Shwopno required enterprise-grade QA for high-concurrency traffic (1M+ active shoppers). Manual regression cycles across Web, Storefront Mobile, Admin, Order Management, and Delivery apps caused release bottlenecks.",
    approach:
      "Engineered an automated Playwright (TypeScript) test framework covering end-to-end user journeys. Integrated tests directly into GitHub Actions CI/CD pipelines, executing automated regression runs on every Pull Request. Executed JMeter load testing to ensure zero-downtime server performance.",
    result:
      "Cut release regression testing duration by over 60%. Achieved zero production downtime during high-volume nationwide retail sales campaigns.",
    testLogSample: [
      "▶ npx playwright test --project=chromium",
      "✓ [Chromium] › cart.spec.ts › Add Item to Cart (180ms)",
      "✓ [Chromium] › checkout.spec.ts › bKash Payment Flow (410ms)",
      "✓ [Chromium] › auth.spec.ts › OTP Authentication (290ms)",
      "🎉 42 passed in 2.8s across 4 workers",
    ],
  },
  {
    id: "paragon",
    title: "Paragon Food",
    subtitle: "paragonfood.com.bd — Food Delivery Platform",
    period: "Jul 2025 – Mar 2026",
    platforms: ["Web", "Android", "iOS"],
    tags: ["Playwright", "GitLab CI/CD", "Cross-Browser", "API Testing"],
    brandIcons: [PlaywrightIcon, GitLabIcon],
    problem:
      "A fast-growing food delivery app required multi-platform validation across Web, Chrome, Firefox, Safari, Android, and iOS to guarantee cart and payment gateway reliability.",
    approach:
      "Designed full regression packs covering product selection, order placement, real-time order tracking, and payment processing. Integrated test pipelines into GitLab CI/CD with automated test report artifacts.",
    result:
      "Prevented payment checkout failures and established a 99.5% test pass rate across all target browser engines.",
    testLogSample: [
      "▶ gitlab-runner exec docker test:e2e",
      "✓ [Firefox] › order_tracking.spec.ts › Live Order Status (220ms)",
      "✓ [WebKit] › payment.spec.ts › Credit Card Authorization (380ms)",
      "🎉 28 passed in 1.9s across cross-browser grid",
    ],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<Record<string, "overview" | "logs">>({
    shwopno: "overview",
    paragon: "overview",
  });

  const toggleTab = (id: string, tab: "overview" | "logs") => {
    setActiveTab((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="projects" className="section-padding bg-[hsl(var(--muted)/0.3)] relative">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView || shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[hsl(var(--accent))]" />
            Real-World Impact
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="space-y-12 text-left">
          {projects.map((project, i) => {
            const currentTab = activeTab[project.id] || "overview";
            return (
              <motion.div
                key={project.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
                animate={inView || shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-[hsl(var(--card-border))]"
              >
                {/* Top Banner */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                        {project.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[hsl(var(--foreground))]">
                        {project.title}
                      </h3>
                      {/* SVG Brand Logos */}
                      <div className="flex items-center gap-1.5 bg-[hsl(var(--muted)/0.6)] px-2.5 py-1 rounded-xl">
                        {project.brandIcons.map((BrandIcon, idx) => (
                          <BrandIcon key={idx} className="w-4 h-4" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[hsl(var(--primary))] font-semibold mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Platform Pills & Case Study Link */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.platforms.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                      >
                        {p}
                      </span>
                    ))}
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all glow-purple"
                      >
                        Official Case Study <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Client Testimonial Quote (if present) */}
                {project.testimonial && (
                  <div className="mb-6 p-4 rounded-2xl bg-[hsl(var(--primary)/0.06)] border border-[hsl(var(--primary)/0.2)] text-left">
                    <p className="text-xs sm:text-sm italic text-[hsl(var(--foreground))] font-medium mb-1.5">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <div className="flex flex-wrap items-center justify-between text-[11px] text-[hsl(var(--muted-foreground))]">
                      <span className="font-semibold text-[hsl(var(--primary))]">
                        — {project.testimonial.author}
                      </span>
                      <span className="font-bold text-amber-400">
                        {project.testimonial.rating}
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab Switcher */}
                <div className="flex items-center gap-2 mb-6 border-b border-[hsl(var(--card-border))] pb-3">
                  <button
                    onClick={() => toggleTab(project.id, "overview")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentTab === "overview"
                        ? "bg-[hsl(var(--primary))] text-white shadow-lg glow-purple"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    Case Study
                  </button>
                  <button
                    onClick={() => toggleTab(project.id, "logs")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      currentTab === "logs"
                        ? "bg-[hsl(var(--primary))] text-white shadow-lg glow-purple"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    <Terminal size={13} />
                    Automated Test Logs
                  </button>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {currentTab === "overview" ? (
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
                  ) : (
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
