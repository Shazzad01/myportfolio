"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "SQA Engineer II",
    company: "Brain Station 23",
    period: "Jan 2026 – Present",
    badge: "Current Role",
    releaseBranch: "release/v2.4-enterprise",
    techPills: ["Playwright TS", "JMeter 15k VUs", "AI Copilot Agent", "Client UAT", "CI/CD Gate"],
    highlights: [
      "Spearheaded end-to-end Test Strategy and release Risk Assessment across web and mobile platforms, maintaining 99.4% platform uptime and zero critical production outages across 15+ major releases.",
      "Architected modular Playwright (TypeScript) automation frameworks utilizing POM, expanding test coverage to 80%+ across 120+ user workflows and reducing regression runtime from 14 hours to 3.5 hours (75% reduction).",
      "Pioneered an automated triage workflow with GitHub Copilot Agent, auto-generating bug reproduction scripts and pull requests to accelerate issue turnaround by 35%.",
      "Benchmarked system capacity via Apache JMeter simulating 15,000+ concurrent virtual users, isolating 8 API latency bottlenecks to ensure response times remained under 1.8 seconds during peak shopping campaigns.",
      "Directed sprint QA demonstrations and User Acceptance Testing (UAT) directly with enterprise stakeholders and business analysts, securing 100% on-time release sign-offs across 40+ Agile sprints.",
      "Managed independent client communication for QA status updates, risk reporting, and issue escalation.",
    ],
  },
  {
    title: "SQA Engineer I",
    company: "Brain Station 23",
    period: "Jan 2025 – Dec 2025",
    badge: "Full-Time",
    releaseBranch: "release/v1.8-automation",
    techPills: ["GitHub Actions", "GitLab CI", "350+ Scenarios", "JMeter Benchmarks", "Jira"],
    highlights: [
      "Engineered Continuous Integration (CI/CD) pipelines in GitHub Actions & GitLab CI, executing 80+ automated smoke checks per pull request and cutting manual validation effort by 60%.",
      "Authored a repository of 350+ structured test scenarios covering boundary, edge-case, and security conditions in Jira, achieving a 98.5% pre-production defect catch rate.",
      "Ensured cross-platform UI/UX consistency and multi-browser rendering compatibility across 12+ device and browser configurations (Android, iOS, Chrome, Firefox).",
      "Conducted regular JMeter performance benchmarks to identify API response degradation between sprint builds.",
      "Partnered closely with developers in daily standups and sprint planning to refine user stories and ensure clear acceptance criteria.",
    ],
  },
  {
    title: "Associate SQA Engineer & Trainee",
    company: "Brain Station 23",
    period: "Apr 2024 – Dec 2024",
    badge: "Full-Time",
    releaseBranch: "release/v1.0-genesis",
    techPills: ["Functional Testing", "250+ Test Passes", "120+ Bug Reports", "RTM", "Agile QA"],
    highlights: [
      "Executed 250+ exploratory and functional verification test passes for web and mobile applications, identifying critical bugs and logging 120+ confirmed bug reports with comprehensive diagnostic logs and reproduction steps.",
      "Standardized Quality Assurance Processes, Requirements Traceability Matrices (RTM), and sprint summary reports, boosting testing throughput by 25%.",
      "Mastered hands-on enterprise Agile/Scrum processes, Jira issue workflows, and automated script authoring.",
    ],
  },
];

export default function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section-padding relative">
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
            Career Evolution
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">Work Experience &amp; Git Tree</h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cyber Spine Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-transparent opacity-60" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.title + exp.period}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 240, damping: 22, delay: i * 0.15 }
                  }
                  className={`relative flex flex-col ${
                    isEven ? "sm:flex-row-reverse" : "sm:flex-row"
                  } items-center`}
                >
                  {/* Timeline Pulse Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 text-left">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="glass-card p-6 sm:p-7 rounded-3xl border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.5)] transition-colors duration-200"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))]">
                            {exp.badge}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 dark:bg-[#07070a] text-amber-700 dark:text-[#fbbf24] border border-[#f59e0b]/30 font-semibold">
                            {exp.releaseBranch}
                          </span>
                        </div>
                        <span className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold text-amber-700 dark:text-[#fbbf24] mb-3 flex items-center gap-1.5">
                        <Briefcase size={14} />
                        {exp.company}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.techPills.map((pill) => (
                          <span
                            key={pill}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-2.5">
                        {exp.highlights.map((h, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                          >
                            <ChevronRight size={14} className="text-amber-600 dark:text-[#f59e0b] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
