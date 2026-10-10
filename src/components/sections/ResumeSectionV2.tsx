"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowDownToLine,
} from "lucide-react";

export default function ResumeSectionV2() {
  const shouldReduceMotion = useReducedMotion();

  const resumeHighlights = [
    {
      label: "2+ Years Enterprise SQA",
      detail: "Brain Station 23 (nopStation Division · Team Shwapno & Paragon)",
    },
    {
      label: "120+ Playwright E2E Journeys",
      detail: "Deterministic Page Object Model automation with auto-waiting selectors",
    },
    {
      label: "15,000+ VUs Stress-Tested",
      detail: "Apache JMeter distributed load benchmarks maintaining p95 < 1.74s SLA",
    },
    {
      label: "nopStation Award Winner",
      detail: "Physical Crystal Trophy for Agility, Excellence & Zero Rollback Deliveries",
    },
  ];

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
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
                [CURRICULUM_VITAE]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Download Technical Resume
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            2-Page ATS-Optimized Technical Profile
          </span>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-12 sm:mb-16">
          A comprehensive 2-page record of automated test frameworks, enterprise e-commerce achievements, and quantified performance metrics.
        </p>

        {/* Monolithic Glass Download Station */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 hover:bg-white/[0.04] transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Column: Summary, Highlights & Actions */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Telemetry Chips */}
              <div className="flex flex-wrap items-center gap-2 font-mono-geist text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                  <Sparkles size={12} className="shrink-0" />
                  [UPDATED · OCTOBER 2026]
                </span>
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span className="text-zinc-600 dark:text-zinc-400">PDF Document</span>
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span className="text-zinc-600 dark:text-zinc-400">ATS-Optimized</span>
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span className="text-zinc-600 dark:text-zinc-400">100% Deterministic</span>
              </div>

              {/* Station Heading */}
              <div>
                <h3 className="font-geist text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                  Muhammad Shazzad Mia — SQA &amp; SDET Resume
                </h3>
                <p className="font-geist text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mt-2">
                  Complete technical dossier detailing enterprise automation coverage across Shwapno &amp; Paragon, distributed Apache JMeter load modeling, automated CI/CD gating, and verified credentials.
                </p>
              </div>

              {/* 4 Quick-Scan Resume Highlights */}
              <div className="space-y-3 pt-1">
                <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                  Quick-Scan Executive Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {resumeHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span className="font-geist text-xs font-bold text-zinc-900 dark:text-white">
                          {item.label}
                        </span>
                      </div>
                      <p className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 pl-5.5 leading-snug">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Primary Download + Secondary View */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3 font-mono-geist text-xs">
                <a
                  href="/resume.pdf"
                  download="Muhammad_Shazzad_Mia_SQA_Resume.pdf"
                  id="download-resume-btn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-lg hover:shadow-xl transition-all"
                >
                  <ArrowDownToLine size={15} />
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] text-zinc-900 dark:text-white border border-black/10 dark:border-white/10 hover:bg-black/[0.06] dark:hover:bg-white/[0.1] transition-all"
                >
                  <FileText size={15} />
                  <span>Inspect in Browser</span>
                  <ExternalLink size={12} className="text-zinc-400" />
                </a>
              </div>

            </div>

            {/* Right Column: Telemetry Specs Slab */}
            <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-black/5 dark:border-white/5 pt-6 lg:pt-0 lg:pl-10 space-y-5 font-mono-geist text-xs">
              
              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-3.5">
                <div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block font-semibold">
                    Document Specification
                  </span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium text-xs mt-0.5 block">
                    Standard PDF · 2 Pages · ATS Ready
                  </span>
                </div>

                <div className="border-t border-black/5 dark:border-white/5 pt-3">
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block font-semibold">
                    Last Revised
                  </span>
                  <span className="text-zinc-900 dark:text-zinc-100 font-medium text-xs mt-0.5 block">
                    October 2026 (Refreshed Metrics)
                  </span>
                </div>

                <div className="border-t border-black/5 dark:border-white/5 pt-3">
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block font-semibold">
                    Target Opportunities
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs mt-0.5 block">
                    Remote · Hybrid · Onsite SDET
                  </span>
                </div>

                <div className="border-t border-black/5 dark:border-white/5 pt-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
                    Verified Direct SQA Credentials
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 text-[11px]">
                <ShieldCheck size={14} className="shrink-0" />
                <span>Zero Extrapolated Data · 100% Authentic</span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
