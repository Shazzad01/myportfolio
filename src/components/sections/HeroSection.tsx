"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Sparkles, ArrowRight, GitBranch } from "lucide-react";
import TerminalWidget from "@/components/ui/TerminalWidget";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay },
        };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#d97706]/5 rounded-full blur-[140px] animate-pulse [animation-delay:1.5s]" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Main Cockpit Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column — 100% Ground Truth Telemetry */}
          <div className="lg:col-span-6 text-left">
            {/* Status Pill */}
            <motion.div
              {...anim(0)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-semibold text-[#f59e0b] mb-5 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Sparkles size={12} className="text-[#fbbf24]" />
              <span>Brain Station 23 · SQA Engineer II</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...anim(0.1)}
              className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.08] mb-4 text-slate-900 dark:text-white"
            >
              Architecting <span className="text-shimmer">Resilient Automation</span> &amp; Quality Systems
            </motion.h1>

            {/* 1-Line Real Stack Summary */}
            <motion.p
              {...anim(0.2)}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-mono leading-relaxed mb-6"
            >
              Playwright (TypeScript) · Apache JMeter (15k VUs) · CI/CD Gates @ Brain Station 23
            </motion.p>

            {/* 3 Real Verified Metric Bubbles from Master Profile */}
            <motion.div
              {...anim(0.25)}
              className="grid grid-cols-3 gap-3 my-6"
            >
              <div className="glass-card rounded-xl p-3 text-center border-t-2 border-t-[#f59e0b]">
                <div className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  99.4<span className="text-xs text-[#f59e0b] ml-0.5">%</span>
                </div>
                <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">
                  Platform Uptime
                </div>
              </div>

              <div className="glass-card rounded-xl p-3 text-center border-t-2 border-t-[#f59e0b]">
                <div className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  15k<span className="text-xs text-[#f59e0b] ml-0.5">+</span>
                </div>
                <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">
                  VUs Stress Tested
                </div>
              </div>

              <div className="glass-card rounded-xl p-3 text-center border-t-2 border-t-[#f59e0b]">
                <div className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  75<span className="text-xs text-[#f59e0b] ml-0.5">%</span>
                </div>
                <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">
                  Runtime Cut (14h→3.5h)
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...anim(0.3)}
              className="flex items-center gap-3 mt-6"
            >
              <a
                href="#projects"
                className="btn-gold-glow px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
              >
                <span>Explore Frameworks</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="btn-glass-rich px-5 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                <Download size={15} />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column — Live Interactive Terminal Simulator */}
          <motion.div
            {...anim(0.25)}
            className="lg:col-span-6 w-full"
          >
            <TerminalWidget />
          </motion.div>

        </div>

        {/* Multi-Node Quality Stream Pipeline */}
        <motion.div
          {...anim(0.4)}
          className="mt-12 glass-card rounded-2xl p-5 border border-[#f59e0b]/20"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-[11px] font-bold text-[#f59e0b] uppercase tracking-widest flex items-center gap-2">
              <GitBranch size={13} />
              Automated Quality Stream // Multi-Node Architecture
            </span>
            <span className="font-mono text-[11px] text-emerald-500 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Continuous Quality Gate Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="bg-white/80 dark:bg-[#07070a]/90 border border-black/5 dark:border-white/10 shadow-sm rounded-xl p-3 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-white">1. Git Push (PR)</div>
            </div>

            <div className="bg-white/80 dark:bg-[#07070a]/90 border border-black/5 dark:border-white/10 shadow-sm rounded-xl p-3 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-white">2. 80+ Smoke Checks</div>
            </div>

            <div className="bg-white/80 dark:bg-[#07070a]/90 border border-[#10b981]/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] rounded-xl p-3 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-300">3. Playwright E2E</div>
            </div>

            <div className="bg-white/80 dark:bg-[#07070a]/90 border border-black/5 dark:border-white/10 shadow-sm rounded-xl p-3 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-white">4. JMeter 15k Stress</div>
            </div>

            <div className="bg-white/80 dark:bg-[#07070a]/90 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.25)] rounded-xl p-3 flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">5. 0-Defect Release</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
