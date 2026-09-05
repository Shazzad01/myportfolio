"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Zap, GitBranch, CheckCircle2, Server } from "lucide-react";
import { PlaywrightIcon, JMeterIcon, GitHubActionsIcon, TypeScriptIcon } from "@/components/ui/SvgIcons";

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.25)] via-[hsl(var(--accent)/0.2)] to-[hsl(var(--primary)/0.15)] rounded-3xl blur-2xl -z-10" />

      {/* SVG Pipeline Graphic Container */}
      <div className="glass-card p-6 sm:p-7 rounded-3xl border border-[hsl(var(--card-border))] shadow-2xl relative overflow-hidden">
        {/* Header Tag */}
        <div className="flex items-center justify-between border-b border-[hsl(var(--card-border))] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-heading font-bold text-xs tracking-wider uppercase text-[hsl(var(--foreground))]">
              Automated QA Pipeline Architecture
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            ✓ 100% Passing
          </span>
        </div>

        {/* Vector Nodes Architecture Flow */}
        <div className="relative space-y-4 text-left">
          {/* Node 1: Source Code & Commit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[hsl(var(--background)/0.8)] border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.5)] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3178C6]/15 flex items-center justify-center">
                <TypeScriptIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-xs text-[hsl(var(--foreground))]">
                  1. Source Code & Commits
                </p>
                <p className="text-[11px] text-[hsl(var(--muted-foreground))]">
                  TypeScript · Git Pull Request
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
              Triggered
            </span>
          </motion.div>

          {/* Animated Connecting Line 1 */}
          <div className="w-0.5 h-4 bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--accent))] mx-8 my-0.5 animate-pulse" />

          {/* Node 2: Playwright & JMeter Execution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[hsl(var(--background)/0.8)] border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.5)] transition-all glow-purple"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-xl bg-[hsl(var(--muted)/0.8)] border border-[hsl(var(--card-border))] flex items-center justify-center p-1.5 z-10">
                  <PlaywrightIcon className="w-6 h-6" />
                </div>
                <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center p-1.5">
                  <JMeterIcon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <p className="font-heading font-bold text-xs text-[hsl(var(--foreground))]">
                  2. Automated E2E & Load Testing
                </p>
                <p className="text-[11px] text-[hsl(var(--muted-foreground))]">
                  Playwright + JMeter Engine
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[hsl(var(--primary))] font-bold bg-[hsl(var(--primary)/0.15)] px-2 py-0.5 rounded flex items-center gap-1">
              <CheckCircle2 size={11} className="text-emerald-400" /> 142 Assertions
            </span>
          </motion.div>

          {/* Animated Connecting Line 2 */}
          <div className="w-0.5 h-4 bg-gradient-to-b from-[hsl(var(--accent))] to-emerald-400 mx-8 my-0.5 animate-pulse" />

          {/* Node 3: CI/CD Pipeline & Production Release */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-[hsl(var(--background)/0.8)] border border-emerald-500/30 hover:border-emerald-400 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2088FF]/15 flex items-center justify-center">
                <GitHubActionsIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-bold text-xs text-[hsl(var(--foreground))]">
                  3. CI/CD & Production Deployment
                </p>
                <p className="text-[11px] text-[hsl(var(--muted-foreground))]">
                  GitHub Actions → Vercel Live
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/15 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck size={12} /> Released
            </span>
          </motion.div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-5 pt-3 border-t border-[hsl(var(--card-border))] flex items-center justify-between text-[11px] text-[hsl(var(--muted-foreground))] font-sans font-medium">
          <span className="flex items-center gap-1">
            <Server size={12} className="text-[hsl(var(--accent))]" /> Zero Critical Outages
          </span>
          <span className="text-emerald-400 font-semibold">99.4% Platform Uptime</span>
        </div>
      </div>
    </div>
  );
}
