"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, FileText, Sparkles } from "lucide-react";

export default function ResumeSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="resume" className="section-padding relative">
      <div className="container-max">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-card rounded-3xl p-10 sm:p-14 border border-[#f59e0b]/25 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.15)]">
            <div className="w-16 h-16 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center mx-auto mb-6 text-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.25)]">
              <FileText size={32} />
            </div>

            <p className="text-xs font-bold text-[#f59e0b] tracking-widest uppercase mb-3 flex items-center justify-center gap-1.5 font-mono">
              <Sparkles size={14} className="text-[#fbbf24]" />
              Official Curriculum Vitae
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Download Complete Resume
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Get the PDF copy detailing SQA engineering at Brain Station 23, automated test suites, performance metrics, and ISTQB certification.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href="/public/resume.pdf"
                download
                id="resume-download-btn"
                className="btn-gold-glow inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm"
              >
                <Download size={17} />
                Download Resume (PDF)
              </motion.a>
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href="/public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-rich inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold"
              >
                <FileText size={17} />
                View PDF Online
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
