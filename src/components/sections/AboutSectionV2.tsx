"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Zap,
  Layers,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
} from "lucide-react";

interface Pillar {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  icon: typeof CheckCircle2;
  accent: string;
}

const architecturalPillars: Pillar[] = [
  {
    num: "01",
    title: "Determinism Over Hope",
    desc: "Zero flaky tests, zero arbitrary timeouts. Every assertion is tied to deterministic DOM events and network state.",
    tags: ["[ZERO FLAKINESS]", "Auto-Waiting DOM", "POM Isolation"],
    icon: CheckCircle2,
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  {
    num: "02",
    title: "Concurrency at Scale",
    desc: "Stress-testing enterprise checkout flows up to 15,000 concurrent virtual shoppers to guarantee sub-2-second latency.",
    tags: ["[15K VUs]", "Distributed JMeter", "p95 < 2.0s SLA"],
    icon: Zap,
    accent: "text-amber-600 dark:text-amber-400",
  },
  {
    num: "03",
    title: "Shift-Left Prevention",
    desc: "Catching defects before code merges through automated PR quality gates, API contract tests, and static analysis.",
    tags: ["[PRE-MERGE GATE]", "API Contracts", "Continuous CI/CD"],
    icon: Layers,
    accent: "text-sky-600 dark:text-sky-400",
  },
];

export default function AboutSectionV2() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Specular Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[340px] bg-gradient-to-b from-black/[0.02] dark:from-white/[0.02] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [ENGINEERING_PHILOSOPHY]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Architecting Quality From Within
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            Brain Station 23 · SQA Engineer II
          </span>
        </div>

        {/* Narrative Block (Strictly 2 Concise Paragraphs, Zero Prose Wall) */}
        <div className="max-w-4xl mb-14 sm:mb-20 space-y-6">
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="font-geist text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 font-normal leading-relaxed"
          >
            Software quality is not an afterthought or an inspection phase at the end of the sprint—it is a core architectural property engineered directly into every commit, endpoint, and user interaction.
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed"
          >
            At <strong className="text-zinc-900 dark:text-white font-semibold">Brain Station 23</strong>, I design autonomous verification pipelines for mission-critical e-commerce platforms (<strong className="text-zinc-900 dark:text-white font-semibold">Shwapno &amp; Paragon</strong>), replacing brittle manual test cycles with deterministic Playwright automation and resilient JMeter load benchmarks.
          </motion.p>
        </div>

        {/* 3 Monolithic Pillar Slabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {architecturalPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;

            return (
              <motion.div
                key={pillar.num}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="relative group p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Laser Specular Top Rim */}
                <div
                  className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/40 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Pillar Header: Number + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-geist text-xs font-bold text-zinc-400 dark:text-zinc-500">
                      PILLAR {pillar.num}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 flex items-center justify-center">
                      <IconComponent size={16} className={pillar.accent} />
                    </div>
                  </div>

                  <h3 className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-3 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Telemetry Chips */}
                <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono-geist text-[10px] px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-300 border border-black/5 dark:border-white/10 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Credentials & Career Provenance Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 p-8 sm:p-10 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl relative overflow-hidden">
          {/* Laser Top Rim */}
          <div
            className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Left Column: Enterprise Role & Execution Track (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <Briefcase size={13} className="text-emerald-500" />
                Current Role · Enterprise Scope
              </span>
              <h4 className="font-geist text-xl font-bold text-zinc-900 dark:text-white">
                Brain Station 23
              </h4>
              <p className="font-mono-geist text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                SQA Engineer II · Automation Lead (Apr 2024 – Present)
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1 font-normal">
                Directing automated regression suites and concurrency stress testing for nationwide retail platforms (<strong className="text-zinc-800 dark:text-zinc-200">Shwapno</strong> &amp; <strong className="text-zinc-800 dark:text-zinc-200">Paragon Food</strong>) serving 500,000+ monthly active users.
              </p>
            </div>

            <div className="space-y-2 pt-6 border-t border-black/5 dark:border-white/5">
              <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <Award size={13} className="text-amber-500" />
                Recognized Industry Honor
              </span>
              <h4 className="font-geist text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                nopStation Agility &amp; Excellence Award
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Awarded for technical execution and 99.4% uptime stability during nationwide platform rollout (Team Shwapno &amp; Paragon).
              </p>
            </div>
          </div>

          {/* Right Column: Academic Credential & Global Availability (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6 lg:border-l lg:border-black/5 dark:lg:border-white/5">
            <div className="space-y-2">
              <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <GraduationCap size={13} className="text-sky-500" />
                Academic Credential &amp; Certification
              </span>
              <h4 className="font-geist text-xl font-bold text-zinc-900 dark:text-white">
                B.Sc. in Computer Science &amp; Engineering
              </h4>
              <p className="font-mono-geist text-xs text-zinc-600 dark:text-zinc-400">
                Daffodil International University (2023)
              </p>
              <div className="inline-flex flex-wrap items-center gap-2 pt-1 font-mono-geist text-xs">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                  CGPA 3.59 / 4.00
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/10 font-medium">
                  Batch 16 SQA Professional Certified
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-6 border-t border-black/5 dark:border-white/5">
              <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <MapPin size={13} className="text-zinc-400" />
                Location &amp; Availability
              </span>
              <p className="font-geist text-sm sm:text-base text-zinc-900 dark:text-white font-medium">
                Mirpur-11.5, Dhaka, Bangladesh (GMT+6)
              </p>
              <p className="font-mono-geist text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
                Available for Global Remote &amp; Hybrid SDET Roles
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Verified Telemetry Strip */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-black/10 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="font-mono-geist text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tabular-nums">
              80%+
            </div>
            <div className="font-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-semibold">
              Automated Coverage
            </div>
            <div className="font-mono-geist text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
              120+ Core Flows in CI
            </div>
          </div>

          <div>
            <div className="font-mono-geist text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tabular-nums">
              75%
            </div>
            <div className="font-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-semibold">
              Runtime Reduction
            </div>
            <div className="font-mono-geist text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
              14h Manual → 3.5h CI
            </div>
          </div>

          <div>
            <div className="font-mono-geist text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tabular-nums">
              15k+
            </div>
            <div className="font-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-semibold">
              Virtual Users
            </div>
            <div className="font-mono-geist text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
              JMeter p95 &lt; 1.74s
            </div>
          </div>

          <div>
            <div className="font-mono-geist text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
              99.4%
            </div>
            <div className="font-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-semibold">
              Platform Uptime
            </div>
            <div className="font-mono-geist text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
              15+ Major Releases
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
