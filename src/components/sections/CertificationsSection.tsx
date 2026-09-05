"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, GraduationCap, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

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
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-[#f59e0b] tracking-widest uppercase mb-3 flex items-center justify-center gap-2 font-mono">
            <Sparkles size={14} className="text-[#fbbf24]" />
            Professional Credentials & Academic Background
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Certifications &amp; Education
          </h2>
        </motion.div>

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
