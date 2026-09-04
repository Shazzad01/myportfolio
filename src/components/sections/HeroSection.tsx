"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, ExternalLink, ShieldCheck, Zap, Sparkles, Terminal, GitBranch } from "lucide-react";
import HeroIllustration from "@/components/ui/HeroIllustration";
import TerminalWidget from "@/components/ui/TerminalWidget";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeConsoleTab, setActiveConsoleTab] = useState<"terminal" | "pipeline">("terminal");

  const anim = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-[hsl(var(--primary)/0.15)] rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-[hsl(var(--accent)/0.15)] rounded-full blur-[140px] animate-pulse [animation-delay:1.5s]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column — Text, CTAs & HUD */}
          <div className="lg:col-span-6 text-left">
            {/* Status Pill */}
            <motion.div
              {...anim(0)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-[hsl(var(--primary)/0.4)] text-xs font-semibold text-[hsl(var(--primary))] mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Sparkles size={13} className="text-[hsl(var(--accent))]" />
              <span>Brain Station 23 · SQA Engineer II</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...anim(0.1)}
              className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] mb-6"
            >
              Architecting <span className="text-shimmer">Flawless Releases</span> Through Autonomous Test Engineering
            </motion.h1>

            {/* Tagline */}
            <motion.p
              {...anim(0.2)}
              className="text-base sm:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-8 max-w-xl"
            >
              Hi, I&apos;m <strong className="text-[hsl(var(--foreground))]">Muhammad Shazzad Mia</strong>.
              I engineer high-concurrency automated test suites in <span className="text-[hsl(var(--primary))] font-semibold">Playwright</span>{" "}
              &amp; <span className="text-[hsl(var(--accent))] font-semibold">JMeter</span> to eliminate production risks before release.
            </motion.p>

            {/* Key feature pills */}
            <motion.div
              {...anim(0.3)}
              className="flex flex-wrap items-center gap-2.5 mb-8 text-xs font-medium text-[hsl(var(--muted-foreground))]"
            >
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-[hsl(var(--card-border))]">
                <ShieldCheck size={14} className="text-emerald-400" /> Automated Regression
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-[hsl(var(--card-border))]">
                <Zap size={14} className="text-yellow-400" /> Load &amp; Performance Testing
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-[hsl(var(--card-border))]">
                <Sparkles size={14} className="text-sky-400" /> CI/CD Shift-Left Guard
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              {...anim(0.4)}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-cyan-glow font-bold text-sm"
              >
                Explore Frameworks <ExternalLink size={16} />
              </motion.a>
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-violet-glow font-bold text-sm"
              >
                Download Resume <Download size={16} />
              </motion.a>
            </motion.div>

            {/* Bento-Grid Metrics HUD Bar */}
            <motion.div
              {...anim(0.5)}
              className="grid grid-cols-3 gap-3 max-w-lg mb-8"
            >
              <div className="hud-card text-left p-3.5 sm:p-4">
                <p className="text-xl sm:text-2xl font-extrabold text-[hsl(var(--foreground))] font-heading">99.4%</p>
                <p className="text-[11px] text-[hsl(var(--muted-foreground))] font-medium">Test Coverage</p>
              </div>
              <div className="hud-card text-left p-3.5 sm:p-4">
                <p className="text-xl sm:text-2xl font-extrabold text-[hsl(var(--foreground))] font-heading">45k+</p>
                <p className="text-[11px] text-[hsl(var(--muted-foreground))] font-medium">E2E Tests Executed</p>
              </div>
              <div className="hud-card text-left p-3.5 sm:p-4">
                <p className="text-xl sm:text-2xl font-extrabold text-[hsl(var(--foreground))] font-heading">65%</p>
                <p className="text-[11px] text-[hsl(var(--muted-foreground))] font-medium">CI Cycle Reduction</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              {...anim(0.6)}
              className="flex items-center gap-3"
            >
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="https://github.com/Shazzad01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl glass border border-[hsl(var(--card-border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.4)] transition-colors"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                href="https://linkedin.com/in/md-shazzad-mia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl glass border border-[hsl(var(--card-border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.4)] transition-colors"
              >
                <LinkedinIcon />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column — Command Center Console with Interactive Tabs */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-6 flex flex-col items-center gap-4"
          >
            {/* Console View Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl glass border border-[hsl(var(--card-border))] shadow-sm w-full max-w-lg justify-between">
              <button
                onClick={() => setActiveConsoleTab("terminal")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeConsoleTab === "terminal"
                    ? "bg-[hsl(var(--primary))] text-[#06080f] shadow-md"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                }`}
              >
                <Terminal size={14} />
                <span>Live Test Terminal</span>
              </button>
              <button
                onClick={() => setActiveConsoleTab("pipeline")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeConsoleTab === "pipeline"
                    ? "bg-[hsl(var(--primary))] text-[#06080f] shadow-md"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                }`}
              >
                <GitBranch size={14} />
                <span>E2E CI/CD Pipeline</span>
              </button>
            </div>

            {/* Display Active View */}
            <div className="w-full max-w-lg">
              <AnimatePresence mode="wait">
                {activeConsoleTab === "terminal" ? (
                  <motion.div
                    key="terminal-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TerminalWidget />
                  </motion.div>
                ) : (
                  <motion.div
                    key="pipeline-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HeroIllustration />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Scroll Cue */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground))]"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll To Explore</span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
