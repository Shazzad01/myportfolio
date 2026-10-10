"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  Award,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function CertificationsSectionV2() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="honors" className="section-padding relative overflow-hidden">
      {/* Anchor alias for legacy hash navigation */}
      <span id="certifications" className="absolute -top-24" aria-hidden="true" />

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
                [VERIFIED_CREDENTIALS]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Certifications &amp; Industry Honors
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            3 Audited Credentials · Zero Hallucinations
          </span>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-12 sm:mb-16">
          Formally audited credentials and engineering awards recognized across enterprise software quality assurance. Every item verified with institutional records.
        </p>

        {/* ========================================================================= */}
        {/* PLAQUE 1: FEATURED INDUSTRY HONOR — nopStation Agility & Excellence Award */}
        {/* ========================================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="mb-10 sm:mb-14 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 hover:bg-white/[0.04] transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Column: Citation, Narrative & Quantified Delivery Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Top Badge & Metadata */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-geist text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                  <Trophy size={13} className="shrink-0" />
                  [AWARD OF EXCELLENCE · ZERO ROLLBACK]
                </span>
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span className="text-zinc-600 dark:text-zinc-400">Year: 2024</span>
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span className="text-zinc-600 dark:text-zinc-400">nopStation × Brain Station 23</span>
              </div>

              {/* Award Title */}
              <div>
                <h3 className="font-geist text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  nopStation Agility &amp; Excellence Award
                </h3>
                <p className="font-mono-geist text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-2">
                  Awarded to Team Shwapno &amp; Paragon for High-Impact Quality Engineering
                </p>
              </div>

              {/* Official Citation Quote */}
              <div className="border-l-2 border-emerald-500 pl-4 py-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 italic font-normal leading-relaxed bg-black/[0.01] dark:bg-white/[0.01] rounded-r-lg">
                &ldquo;In recognition of exceptional Agility &amp; Excellence in delivering impactful solutions. This award highlights teamwork, innovation, and commitment to driving results.&rdquo;
              </div>

              {/* Context Summary */}
              <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Recognized for outstanding agility, test coverage leadership, and zero-defect deliveries across Bangladesh&apos;s premier grocery e-commerce platform (Shwapno) and enterprise agro-food supply operations (Paragon).
              </p>

              {/* Quantified SQA Delivery Highlights */}
              <div className="space-y-3 pt-2">
                <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                  Verified SQA Lead Contributions &amp; SLA Metrics:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                    <span className="font-geist text-xl font-bold text-zinc-900 dark:text-white block">
                      99.4%
                    </span>
                    <span className="font-mono-geist text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                      Platform Uptime
                    </span>
                    <span className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                      Zero critical defects across 15+ major production releases.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                    <span className="font-geist text-xl font-bold text-zinc-900 dark:text-white block">
                      75% Cut
                    </span>
                    <span className="font-mono-geist text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                      Regression Runtime
                    </span>
                    <span className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                      Playwright POM reduced 14h manual cycles down to 3.5h.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                    <span className="font-geist text-xl font-bold text-zinc-900 dark:text-white block">
                      15,000+
                    </span>
                    <span className="font-mono-geist text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                      Virtual Users
                    </span>
                    <span className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                      Apache JMeter distributed stress benchmarking (p95 &lt; 1.74s).
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Verification Pip */}
              <div className="pt-2 flex items-center gap-2 font-mono-geist text-xs text-zinc-500 dark:text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Verified physical crystal trophy inscribed to Team Shwapno &amp; Paragon · Brain Station 23</span>
              </div>
            </div>

            {/* Right Column: Physical Crystal Trophy Photograph */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-xs sm:max-w-sm overflow-hidden rounded-2xl border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] shadow-2xl">
                <Image
                  src="/images/awards/nopstation-award.jpg"
                  alt="nopStation Agility & Excellence Award Crystal Trophy - Team Shwapno & Paragon, Brain Station 23"
                  width={480}
                  height={640}
                  className="w-full h-auto object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
                <div className="p-4 bg-zinc-50/80 dark:bg-zinc-950/80 border-t border-black/5 dark:border-white/5 text-center font-mono-geist">
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                    Official Crystal Trophy
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Brain Station 23 · Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* PLAQUES 2 & 3: SQA PROFESSIONAL CERTIFICATION & B.Sc. IN CSE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Plaque 2: Batch 16 SQA Professional Certification */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
          >
            <div className="space-y-5">
              {/* Top Meta */}
              <div className="flex items-center justify-between font-mono-geist text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                  <Award size={13} className="shrink-0" />
                  [PROFESSIONAL SQA · BATCH 16]
                </span>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono-geist">
                  Year: 2023
                </span>
              </div>

              {/* Title & Organization */}
              <div>
                <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  SQA Professional Certification
                </h3>
                <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  IT Training BD · Comprehensive SQA &amp; Test Automation
                </p>
              </div>

              {/* Description */}
              <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Rigorous professional certification curriculum establishing full-lifecycle software quality assurance rigor, automated test suite engineering, API contract validation, and performance benchmarking.
              </p>

              {/* Core Modules & Competencies */}
              <div className="space-y-2 pt-2">
                <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                  Core Curriculum Modules:
                </span>
                <ul className="space-y-2 font-geist text-xs text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Manual Rigor:</strong> Test strategy, test plan architecture, bug severity matrices, and Jira RTM traceability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Automation Frameworks:</strong> Selenium WebDriver, Playwright, Page Object Model design patterns, and cross-browser grids.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>API Contract &amp; Webhooks:</strong> REST contract validation in Postman, schema assertion, and status code verification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Performance Engineering:</strong> Apache JMeter load, stress, and spike benchmarking with SLA reporting.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Verification Footer */}
            <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono-geist text-xs text-zinc-500">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck size={14} />
                Formally Certified SQA Professional
              </span>
              <span>Dhaka, Bangladesh</span>
            </div>
          </motion.div>

          {/* Plaque 3: B.Sc. in Computer Science & Engineering */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
          >
            <div className="space-y-5">
              {/* Top Meta */}
              <div className="flex items-center justify-between font-mono-geist text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                  <GraduationCap size={13} className="shrink-0" />
                  [ACADEMIC DEGREE · CSE]
                </span>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono-geist">
                  2019 – 2023
                </span>
              </div>

              {/* Title & Organization */}
              <div>
                <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  B.Sc. in Computer Science &amp; Engineering
                </h3>
                <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Daffodil International University (DIU) · CGPA 3.59 / 4.00
                </p>
              </div>

              {/* Description */}
              <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Four-year formal engineering degree establishing deep mathematical and computational foundations in software architecture, algorithms, database systems, and object-oriented design patterns.
              </p>

              {/* Core Foundations & Academic Standing */}
              <div className="space-y-2 pt-2">
                <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                  Engineering Foundations:
                </span>
                <ul className="space-y-2 font-geist text-xs text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Software Engineering Architecture:</strong> OOP principles, Clean Architecture, design patterns, and SOLID principles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Database Architecture:</strong> Relational schema normalization, complex SQL indexing, and transaction ACID properties.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Algorithmic Complexity:</strong> Asymptotic computational analysis, memory profiling, and data structures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Graduated with Distinction:</strong> Maintained high academic standing (CGPA 3.59 out of 4.00).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Verification Footer */}
            <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono-geist text-xs text-zinc-500">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck size={14} />
                Verified B.Sc. Degree (CGPA 3.59)
              </span>
              <span>Dhaka, Bangladesh</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
