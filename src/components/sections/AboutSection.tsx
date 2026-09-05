"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, GraduationCap, CheckCircle, Activity, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10">
          <div>
            <div className="font-mono text-xs font-bold text-[#f59e0b] uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
              Telemetry Grid // Verified Career Metrics
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
              Engineering <span className="text-gradient">Core & Impact</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-400 mt-2 sm:mt-0">
            Brain Station 23 · SQA Engineer II
          </span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-5">
          
          {/* Cell 1: Experience & Enterprise Leadership (8 cols) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="col-span-12 lg:col-span-8 glass-card rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="font-mono text-[11px] font-bold text-[#f59e0b] uppercase tracking-widest mb-1 flex items-center gap-2">
              <Briefcase size={13} />
              Enterprise Automation Role
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white mt-1">
              Brain Station 23
            </h3>
            <p className="font-mono text-xs text-[#fbbf24] mt-0.5 mb-5">
              SQA Engineer II · Automation Lead (Apr 2024 – Present)
            </p>

            {/* Verified Metric Chips from Master Profile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#07070a]/90 border border-white/10 rounded-xl p-3">
                <div className="font-heading text-xl font-bold text-emerald-400">80%+</div>
                <div className="font-mono text-[11px] text-slate-400 mt-0.5">Automated Coverage (120+ Flows)</div>
              </div>
              <div className="bg-[#07070a]/90 border border-white/10 rounded-xl p-3">
                <div className="font-heading text-xl font-bold text-[#f59e0b]">75%</div>
                <div className="font-mono text-[11px] text-slate-400 mt-0.5">Runtime Cut (14h → 3.5h)</div>
              </div>
              <div className="bg-[#07070a]/90 border border-white/10 rounded-xl p-3">
                <div className="font-heading text-xl font-bold text-blue-400">99.4%</div>
                <div className="font-mono text-[11px] text-slate-400 mt-0.5">Uptime (15+ Major Releases)</div>
              </div>
            </div>
          </motion.div>

          {/* Cell 2: Academic & SQA Credential (4 cols) - Verified DIU Degree */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="col-span-12 lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#12131c] to-[#181a26]"
          >
            <div>
              <div className="font-mono text-[11px] font-bold text-[#f59e0b] uppercase tracking-widest mb-1 flex items-center gap-2">
                <GraduationCap size={13} />
                Engineering Degree
              </div>
              <h3 className="font-heading text-2xl font-black text-white mt-1">
                BSc in CSE
              </h3>
              <p className="font-mono text-xs text-slate-400 mt-0.5">
                Daffodil International University (2023)
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold">
                CGPA 3.59 / 4.00
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] text-slate-400">
                IT Training BD SQA Certified
              </span>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center font-bold text-base text-[#07070a] shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                ★
              </div>
            </div>
          </motion.div>

          {/* Cell 3: CI/CD Pull Request Quality Gates (8 cols) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="col-span-12 lg:col-span-8 glass-card rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[11px] font-bold text-[#f59e0b] uppercase tracking-widest flex items-center gap-2">
                <Activity size={13} />
                Continuous Integration (CI/CD) Gates
              </div>
              <span className="font-mono text-xs text-emerald-400 font-semibold">
                80+ Smoke Checks / PR · GitHub Actions & GitLab CI
              </span>
            </div>

            {/* Heatmap Grid */}
            <div className="grid grid-cols-10 sm:grid-cols-15 gap-2 mt-4">
              {Array.from({ length: 30 }).map((_, i) => {
                const isHigh = i % 3 === 0;
                const isMid = i % 2 === 0;
                return (
                  <div
                    key={i}
                    title={`Release Sprint Cycle ${i + 1}: Automated Smoke Checks Passed`}
                    className={`h-5 rounded-[5px] transition-all hover:scale-125 cursor-pointer ${
                      isHigh
                        ? "bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                        : isMid
                        ? "bg-[#f59e0b]/60"
                        : "bg-[#f59e0b]/30"
                    }`}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Cell 4: Base Location & Availability (4 cols) */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="col-span-12 lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-[11px] font-bold text-[#f59e0b] uppercase tracking-widest mb-1 flex items-center gap-2">
                <MapPin size={13} />
                Base Location
              </div>
              <h3 className="font-heading text-lg font-bold text-white mt-1">
                Mirpur-11.5, Dhaka, BD
              </h3>
              <p className="font-mono text-xs text-slate-400 mt-0.5">
                GMT+6 Timezone
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="font-mono text-xs text-emerald-400 font-semibold">
                Available for Remote / SDET Roles
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
