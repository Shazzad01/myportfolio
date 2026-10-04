"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, ExternalLink, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ResumeSectionV2() {
  const shouldReduceMotion = useReducedMotion();

  const resumeHighlights = [
    "Brain Station 23 · SQA Engineer II & Automation Lead",
    "Playwright (TypeScript) POM Suites & JMeter Concurrency",
    "B.Sc. in Computer Science & Engineering (DIU, CGPA 3.59)",
    "Batch 16 SQA Professional Certification (IT Training BD)",
  ];

  return (
    <section id="resume" className="section-padding relative">
      <div className="container-max">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
              // 08 · Curriculum Vitae
            </span>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Official Resume
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            2-Page ATS-Optimized Technical Profile
          </span>
        </div>

        {/* Unboxed Resume Callout (Zero Heavy Boxes) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center pb-16 sm:pb-20 border-b border-zinc-200/60 dark:border-zinc-800/60"
        >
          {/* Left Column: Summary & Verified Highlights */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono-geist text-xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Verified &amp; Up to Date
                </span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-500">PDF Document</span>
              </div>
              <h3 className="font-geist text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                Download Complete SQA Engineering CV
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl">
                Comprehensive 2-page curriculum vitae covering enterprise e-commerce quality assurance at Brain Station 23, automated test framework architectures, JMeter 15,000+ VU performance benchmarks, and academic credentials.
              </p>
            </div>

            {/* Resume Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono-geist text-xs text-zinc-600 dark:text-zinc-300">
              {resumeHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Minimalist Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono-geist text-xs">
              <a
                href="/resume.pdf"
                download="Muhammad_Shazzad_Mia_SQA_Resume.pdf"
                id="download-resume-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-800/80 font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <FileText size={14} />
                <span>View in Browser</span>
                <ExternalLink size={12} className="text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Telemetry Badge */}
          <div className="lg:col-span-4 flex flex-col justify-center border-l-0 lg:border-l border-zinc-200/60 dark:border-zinc-800/60 lg:pl-10 space-y-4 font-mono-geist text-xs text-zinc-500">
            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">File Format</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">Standard PDF (ATS-Compliant)</span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Page Count</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">2 Pages (Single Spaced)</span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Primary Role</span>
              <span className="text-zinc-900 dark:text-zinc-200 font-medium">SQA Engineer II &amp; SDET</span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Target Opportunities</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Remote · Hybrid · Onsite</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
