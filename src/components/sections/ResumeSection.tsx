"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, FileText, Sparkles } from "lucide-react";

export default function ResumeSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="resume" className="section-padding bg-[hsl(var(--muted)/0.3)] relative">
      <div className="container-max">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-card rounded-3xl p-10 sm:p-14 border border-[hsl(var(--card-border))] glow-purple">
            <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--primary)/0.15)] border border-[hsl(var(--primary)/0.3)] flex items-center justify-center mx-auto mb-6 text-[hsl(var(--primary))]">
              <FileText size={32} />
            </div>

            <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3 flex items-center justify-center gap-1.5">
              <Sparkles size={14} className="text-[hsl(var(--accent))]" />
              Official Curriculum Vitae
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Download My Complete Resume
            </h2>
            <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed mb-8 max-w-xl mx-auto">
              Get the PDF copy detailing my SQA experience at Brain Station 23, automated testing projects, performance benchmarks, and core skills.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="/resume.pdf"
                download
                id="resume-download-btn"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white font-bold text-sm shadow-lg glow-purple"
              >
                <Download size={18} />
                Download Resume (PDF)
              </motion.a>
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass border border-[hsl(var(--card-border))] font-semibold text-sm hover:border-[hsl(var(--primary)/0.5)]"
              >
                <FileText size={18} />
                View PDF Online
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
