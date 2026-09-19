"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Download,
  Terminal,
  Activity,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  Layers,
  Flame,
  Zap,
} from "lucide-react";
import {
  PlaywrightIcon,
  JMeterIcon,
  GitHubActionsIcon,
  TypeScriptIcon,
  DockerIcon,
} from "@/components/ui/SvgIcons";

type TelemetryTab = "pr" | "playwright" | "jmeter" | "gate";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TelemetryTab>("playwright");

  const nodes = [
    {
      id: "pr" as TelemetryTab,
      num: "01",
      name: "PR Ingest",
      sub: "Git Webhook",
      icon: GitBranch,
      color: "from-sky-500 to-blue-600",
      accent: "text-sky-400",
      bgLight: "bg-sky-500/10",
      borderActive: "border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]",
    },
    {
      id: "playwright" as TelemetryTab,
      num: "02",
      name: "Playwright E2E",
      sub: "Parallel POM",
      icon: Cpu,
      color: "from-cyan-400 to-teal-500",
      accent: "text-cyan-400",
      bgLight: "bg-cyan-500/10",
      borderActive: "border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]",
    },
    {
      id: "jmeter" as TelemetryTab,
      num: "03",
      name: "JMeter 15k",
      sub: "Stress Bench",
      icon: Flame,
      color: "from-violet-500 to-purple-600",
      accent: "text-violet-400",
      bgLight: "bg-violet-500/10",
      borderActive: "border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.35)]",
    },
    {
      id: "gate" as TelemetryTab,
      num: "04",
      name: "Release Gate",
      sub: "0-Defect Pass",
      icon: ShieldCheck,
      color: "from-emerald-400 to-teal-500",
      accent: "text-emerald-400",
      bgLight: "bg-emerald-500/10",
      borderActive: "border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.35)]",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Cinematic Ambient Mesh Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-transparent rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-cyan-500/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -right-40 w-[450px] h-[450px] bg-violet-500/8 rounded-full blur-[130px]" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Minimalist Visual Header: Name & Role Badge (Zero Prose Clutter) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-6"
        >
          {/* Micro Status Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 dark:bg-white/[0.04] border border-cyan-500/30 text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 mb-4 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Brain Station 23 · SQA Engineer II</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="text-violet-600 dark:text-violet-400 font-semibold">SDET Automation</span>
          </div>

          {/* Signature Name & Impact Line */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white">
            Muhammad <span className="text-gradient-cyan-violet">Shazzad Mia</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base font-mono text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Architecting Resilient Test Automation &amp; Continuous Quality Gates
          </p>

          {/* Tactile Dual Actions */}
          <div className="flex items-center gap-3.5 mt-5">
            <a
              href="#projects"
              className="btn-cyan-glow px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2"
            >
              <span>Explore Frameworks</span>
              <ArrowRight size={14} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn-glass-rich px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Download size={14} />
              <span>Get CV</span>
            </a>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* WORLD-CLASS VISUAL CENTERPIECE: 3D QA COMMAND CONSOLE          */}
        {/* ============================================================== */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mt-3 perspective-[1400px]"
        >
          <div className="glass-obsidian rounded-3xl p-4 sm:p-6 border border-white/10 dark:border-white/[0.08] shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative overflow-hidden transition-all duration-500 hover:border-cyan-500/30">
            
            {/* Specular Ambient Edge Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            {/* Hardware Console Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-black/10 dark:border-white/[0.06]">
              {/* Terminal Window Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                <span className="ml-3 font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold hidden sm:inline">
                  QA-CLUSTER // MULTI-NODE TELEMETRY ENGINE
                </span>
              </div>

              {/* Live Status Badge */}
              <div className="flex items-center gap-2 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ALL WORKERS PASSING (99.4% UPTIME)</span>
              </div>
            </div>

            {/* Interactive Pipeline Node Switches (Visual Flow) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
              {nodes.map((node) => {
                const Icon = node.icon;
                const isSelected = activeTab === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveTab(node.id)}
                    className={`relative p-3 rounded-2xl text-left transition-all duration-300 flex items-center gap-3 border ${
                      isSelected
                        ? `bg-white/10 dark:bg-white/[0.07] ${node.borderActive}`
                        : "bg-black/5 dark:bg-white/[0.02] border-black/5 dark:border-white/[0.05] hover:border-cyan-500/25 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? `bg-gradient-to-br ${node.color} text-white shadow-md`
                          : "bg-black/5 dark:bg-white/5 text-slate-400"
                      }`}
                    >
                      <Icon size={16} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                          {node.num}
                        </span>
                        <p className="font-heading font-bold text-xs text-slate-900 dark:text-white truncate">
                          {node.name}
                        </p>
                      </div>
                      <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {node.sub}
                      </p>
                    </div>

                    {isSelected && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Telemetry Screen (Animated Visual Stage) */}
            <div className="bg-[#05060b] rounded-2xl p-4 sm:p-5 border border-white/[0.07] text-left relative overflow-hidden min-h-[190px] flex flex-col justify-between shadow-inner">
              <AnimatePresence mode="wait">
                {activeTab === "pr" && (
                  <motion.div
                    key="pr"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2">
                      <span className="text-sky-400 font-bold flex items-center gap-2">
                        <GitBranch size={13} />
                        TRIGGER: PULL REQUEST #142 (feature/bkash-multi-branch)
                      </span>
                      <span className="text-slate-500">GITHUB ACTIONS CI</span>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs text-slate-300">
                      <p className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span>Static Lint &amp; TypeCheck (npx tsc --noEmit)</span>
                        <span className="text-emerald-400 ml-auto font-bold">PASS (1.4s)</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span>80+ Smoke Scenarios Executed Across Parallel Workers</span>
                        <span className="text-emerald-400 ml-auto font-bold">PASS (3.1s)</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span>Boundary Value &amp; Inventory Drift Sanitization</span>
                        <span className="text-emerald-400 ml-auto font-bold">PASS (420ms)</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                      <span>Target: Brain Station 23 / Shwopno Staging</span>
                      <span className="text-sky-400 font-bold">✓ 0 Failures · Ready for E2E Gate</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "playwright" && (
                  <motion.div
                    key="playwright"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2">
                      <span className="text-cyan-400 font-bold flex items-center gap-2">
                        <Cpu size={13} />
                        PLAYWRIGHT (TS) POM ENGINE // 4 CHROMIUM WORKERS
                      </span>
                      <span className="text-emerald-400 font-bold">120+ WORKFLOWS ACTIVE</span>
                    </div>

                    <div className="space-y-1.5 font-mono text-xs text-slate-300">
                      <p className="flex items-center justify-between">
                        <span className="text-slate-400 truncate">
                          [worker-1] › auth.spec.ts › Session Hydration &amp; Role Access
                        </span>
                        <span className="text-emerald-400 font-bold shrink-0 ml-2">✓ 112ms</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-slate-400 truncate">
                          [worker-2] › checkout.spec.ts › bKash / Nagad Gateway Auth
                        </span>
                        <span className="text-emerald-400 font-bold shrink-0 ml-2">✓ 234ms</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-slate-400 truncate">
                          [worker-3] › inventory.spec.ts › Real-Time Multi-Branch Stock Sync
                        </span>
                        <span className="text-emerald-400 font-bold shrink-0 ml-2">✓ 180ms</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                      <span>Regression Suite: 14h → 3.5h (75% Runtime Cut)</span>
                      <span className="text-cyan-400 font-bold">100% Deterministic (Zero Flakiness)</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "jmeter" && (
                  <motion.div
                    key="jmeter"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2">
                      <span className="text-violet-400 font-bold flex items-center gap-2">
                        <Flame size={13} />
                        APACHE JMETER // 15,000 CONCURRENT VUs STRESS LAB
                      </span>
                      <span className="text-violet-400 font-bold">10,000+ RPM</span>
                    </div>

                    {/* Latency Waveform SVG Chart */}
                    <div className="h-12 w-full relative">
                      <svg className="w-full h-full" viewBox="0 0 400 50" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="hero-latency" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,35 Q50,15 100,28 T200,20 T300,32 T400,18"
                          fill="none"
                          stroke="url(#hero-latency)"
                          strokeWidth="2.5"
                        />
                      </svg>
                      <div className="absolute top-1 right-2 text-[10px] font-mono text-violet-300 bg-violet-500/15 px-2 py-0.5 rounded border border-violet-500/25">
                        p95 Latency: &lt; 1.8s
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px] font-mono text-slate-400">
                      <span>National Flash Sale Concurrency Simulation</span>
                      <span className="text-emerald-400 font-bold">8 Critical Latency Bottlenecks Isolated</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "gate" && (
                  <motion.div
                    key="gate"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono border-b border-white/5 pb-2">
                      <span className="text-emerald-400 font-bold flex items-center gap-2">
                        <ShieldCheck size={13} />
                        ENTERPRISE ZERO-DEFECT RELEASE CERTIFICATION
                      </span>
                      <span className="text-emerald-400 font-bold">PRODUCTION VERIFIED</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-1 text-center font-mono">
                      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-base font-bold text-white">99.4%</div>
                        <div className="text-[10px] text-slate-400">Uptime (15+ Major Releases)</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-base font-bold text-emerald-400">100%</div>
                        <div className="text-[10px] text-slate-400">Agile Sprint UAT Sign-Offs</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-base font-bold text-cyan-400">0</div>
                        <div className="text-[10px] text-slate-400">Critical Production Outages</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                      <span>Team Shwopno &amp; Paragon Food (Brain Station 23)</span>
                      <span className="text-emerald-400 font-bold">🏆 nopStation Agility Award Winner</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hardware Vector Tooling Dock */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-black/10 dark:border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                  Verified Engine Stack:
                </span>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors" title="Playwright (TypeScript)">
                    <PlaywrightIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors" title="Apache JMeter">
                    <JMeterIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors" title="TypeScript">
                    <TypeScriptIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors" title="GitHub Actions CI">
                    <GitHubActionsIcon className="w-4 h-4" />
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors" title="Docker Containerization">
                    <DockerIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Live Metric Chips */}
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                  75% Runtime Cut
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  99.4% Uptime
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
