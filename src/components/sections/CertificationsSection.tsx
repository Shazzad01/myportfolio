"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, CheckCircle2, Sparkles } from "lucide-react";

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[hsl(var(--accent))]" />
            Verified Credentials
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            Certifications & Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 rounded-3xl border border-[hsl(var(--card-border))] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--primary)/0.15)] flex items-center justify-center text-[hsl(var(--primary))] mb-6">
                <Award size={26} />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))]">
                Professional SQA
              </span>
              <h3 className="font-heading font-bold text-xl text-[hsl(var(--foreground))] mt-3 mb-1">
                Software Quality Assurance
              </h3>
              <p className="text-sm font-semibold text-[hsl(var(--accent))] mb-4">
                IT Training BD · Batch 16 (2023)
              </p>
              <ul className="space-y-2 text-xs text-[hsl(var(--muted-foreground))]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  Manual & Automated Testing Principles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  Test Management, Bug Tracking & Jira
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-[hsl(var(--card-border))] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--accent)/0.15)] flex items-center justify-center text-[hsl(var(--accent))] mb-6">
                <GraduationCap size={26} />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400">
                CGPA 3.59 / 4.00
              </span>
              <h3 className="font-heading font-bold text-xl text-[hsl(var(--foreground))] mt-3 mb-1">
                BSc in Computer Science & Engineering
              </h3>
              <p className="text-sm font-semibold text-[hsl(var(--primary))] mb-4">
                Daffodil International University (2023)
              </p>
              <ul className="space-y-2 text-xs text-[hsl(var(--muted-foreground))]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  Software Engineering & System Architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  Data Structures, Algorithms & OOP
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
