"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, CheckCircle2, Sparkles, ShieldCheck, Trophy, Quote } from "lucide-react";

export default function CertificationsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-[#f59e0b] tracking-widest uppercase mb-3 flex items-center justify-center gap-2 font-mono">
            <Sparkles size={14} className="text-[#fbbf24]" />
            Honors, Credentials &amp; Academic Background
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Awards, Certifications &amp; Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Verified industry recognitions, enterprise delivery honors, and foundational software engineering credentials.
          </p>
        </motion.div>

        {/* Featured Award Showcase: nopStation Agility & Excellence Award */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="max-w-6xl mx-auto mb-10"
        >
          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-[#f59e0b]/40 hover:border-[#f59e0b]/70 shadow-[0_0_35px_rgba(245,158,11,0.12)] relative overflow-hidden transition-all">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24" />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Citation & Impact */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#f59e0b]/15 text-amber-800 dark:text-[#fbbf24] border border-[#f59e0b]/35 shadow-sm">
                    <Trophy size={13} className="text-[#f59e0b]" />
                    Prestigious Industry Honor
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/10">
                    nopStation × Brain Station 23
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    Team Shwapno &amp; Paragon
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white leading-tight">
                    Agility &amp; Excellence Award
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-amber-600 dark:text-[#fbbf24] mt-1">
                    Awarded by nopStation to Team Shwapno &amp; Paragon of Brain Station 23
                  </p>
                </div>

                {/* Official Citation Blockquote */}
                <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-[#07070a]/80 border border-amber-500/20 relative">
                  <Quote size={20} className="text-[#f59e0b] opacity-60 mb-1" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
                    &ldquo;In recognition of exceptional Agility &amp; Excellence in delivering impactful solutions. This award highlights teamwork, innovation, and commitment to driving results.&rdquo;
                  </p>
                </div>

                {/* SQA Contribution & Deliverables */}
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Key SQA Engineering Contributions
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-900 dark:text-white">Zero Critical Outages:</strong> Maintained 99.4% platform uptime with 0 critical production regressions across 15+ major releases.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-900 dark:text-white">Automated CI/CD Gates:</strong> Architected modular Playwright (TS) test suites, cutting regression runtime from 14h to 3.5h (75% faster).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-900 dark:text-white">High-Concurrency Resilience:</strong> Benchmarked checkout stability via Apache JMeter simulating 15,000+ concurrent virtual users.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Physical Trophy on Record
                  </span>
                  <span>Enterprise eCommerce Quality Gate</span>
                </div>
              </div>

              {/* Right Column: High-Resolution Trophy Photograph */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative group w-full max-w-sm rounded-3xl overflow-hidden border-2 border-[#f59e0b]/40 shadow-[0_0_30px_rgba(245,158,11,0.25)] bg-[#07070a]/90">
                  <Image
                    src="/images/awards/nopstation-award.jpg"
                    alt="nopStation Agility & Excellence Award Trophy - Team Shwapno & Paragon, Brain Station 23"
                    width={480}
                    height={640}
                    className="w-full h-auto max-h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Subtle glass overlay tag */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-[2px] text-center">
                    <p className="text-[11px] font-mono text-amber-300 font-bold tracking-wide">
                      Official Crystal Trophy · nopStation &amp; Brain Station 23
                    </p>
                    <p className="text-[10px] text-slate-300">
                      Inscribed to Team Shwapno &amp; Paragon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Grid for Credentials & Education */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {/* Card 1: Professional SQA Training */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.1 }}
            whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.02 }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-[#f59e0b]/25 hover:border-[#f59e0b]/50 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#f59e0b]/15 flex items-center justify-center text-[#f59e0b] mb-5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Award size={26} />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#f59e0b]/15 text-amber-700 dark:text-[#f59e0b] border border-[#f59e0b]/30">
                Professional SQA
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mt-3 mb-1">
                Software Quality Assurance
              </h3>
              <p className="text-sm font-semibold text-amber-600 dark:text-[#fbbf24] mb-4">
                IT Training BD · Batch 16 (2023)
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  Manual &amp; Automated Testing Principles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  JMeter Performance &amp; Test Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  Defect Lifecycle &amp; Jira Tracking
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Certified Professional (IT Training BD)</span>
            </div>
          </motion.div>

          {/* Card 2: B.Sc. in Computer Science & Engineering */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.2 }}
            whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.02 }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/40 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                <GraduationCap size={26} />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                CGPA 3.59 / 4.00
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mt-3 mb-1">
                BSc in Computer Science &amp; Engineering
              </h3>
              <p className="text-sm font-semibold text-amber-600 dark:text-[#fbbf24] mb-4">
                Daffodil International University (2023)
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  Software Engineering &amp; System Architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  Object-Oriented Programming (Java, C++)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  Database Management Systems (SQL)
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[11px] text-slate-600 dark:text-slate-400 font-semibold">
              <span>Graduated March 2023 · Dhaka, BD</span>
            </div>
          </motion.div>

          {/* Card 3: 7-Dimension QA Audit & AI-Assisted QA */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.3 }}
            whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.02 }}
            className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/40 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
                <ShieldCheck size={26} />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#f59e0b]/15 text-amber-700 dark:text-[#f59e0b]">
                Enterprise Methodology
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mt-3 mb-1">
                7-Dimension QA Audit Framework
              </h3>
              <p className="text-sm font-semibold text-amber-600 dark:text-[#fbbf24] mb-4">
                Brain Station 23 Enterprise Practice
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  Content, Visual, Flow &amp; a11y Audits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  GitHub Copilot AI Automated Triage (35% faster)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  15,000+ VU Performance Benchmarks
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 font-mono text-[11px] text-slate-600 dark:text-slate-400 font-semibold">
              <span>Active SQA II Practice</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
