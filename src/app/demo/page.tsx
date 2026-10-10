"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Palette,
  ShieldCheck,
  Flame,
  GitBranch,
  Download,
  Copy,
  ExternalLink,
  Code2,
  Zap,
  Globe,
  Sliders,
  Check,
  Eye,
  ChevronRight,
} from "lucide-react";

type ThemeId = "linear" | "editorial" | "aurora" | "cyberdeck" | "bauhaus";

interface ThemeMeta {
  id: ThemeId;
  name: string;
  tagline: string;
  inspiration: string;
  bgHex: string;
  cardHex: string;
  accentHex: string;
  fontVibe: string;
  keyFeatures: string[];
}

const THEMES: ThemeMeta[] = [
  {
    id: "linear",
    name: "Linear / Raycast Obsidian",
    tagline: "Developer Tool Precision & Ultra-Dark Obsidian",
    inspiration: "Linear.app, Raycast, Vercel",
    bgHex: "#070709",
    cardHex: "#111116",
    accentHex: "#10b981 & #06b6d4",
    fontVibe: "Geist Sans + Geist Mono (Tightly tracked)",
    keyFeatures: [
      "Subtle 1px micro-borders with specular top-edge shine",
      "Pill-shaped monospace telemetry chips",
      "Laser dot-grid ambient backdrop",
      "Tactile 120ms spring micro-interactions",
    ],
  },
  {
    id: "editorial",
    name: "Swiss Editorial & Cream",
    tagline: "Quiet Luxury, Warm Alabaster Canvas & Bold Editorial Type",
    inspiration: "Minimal Gallery, siteInspire, Monocle",
    bgHex: "#FAF8F5 (Dark: #171614)",
    cardHex: "#FFFFFF (Dark: #201E1B)",
    accentHex: "#B45309 (Warm Amber / Bronze)",
    fontVibe: "Outfit Display + Editorial Serif Accents",
    keyFeatures: [
      "Generous architectural negative space (unboxed)",
      "High typographic contrast with large editorial headlines",
      "Warm tactile stone dividers and ivory surface glow",
      "Zero noisy tech gimmicks — human-crafted authority",
    ],
  },
  {
    id: "aurora",
    name: "Liquid Glass & Cosmic Aurora",
    tagline: "Frosted Glassmorphism with Organic Aurora Glows",
    inspiration: "Stripe, Apple iOS 18, Awwwards",
    bgHex: "#08091A (Cosmic Navy)",
    cardHex: "rgba(16, 22, 45, 0.65) + Blur",
    accentHex: "#6366F1 & #EC4899",
    fontVibe: "Modern Grotesk with Specular Gradient Clips",
    keyFeatures: [
      "Deep frosted glass panels with backdrop-blur-2xl",
      "Multi-chroma animated aurora gradient mesh",
      "Glowing border refraction & fluid button glows",
      "Organic physics-based spring choreography",
    ],
  },
  {
    id: "cyberdeck",
    name: "Cybernetic QA Command Deck",
    tagline: "Mission Control Terminal & Volumetric Telemetry",
    inspiration: "DevOps Cockpits, Grafana, Terminal UI",
    bgHex: "#0B0F19 (Deep Slate)",
    cardHex: "#111827 (Tactical Carbon)",
    accentHex: "#22C55E (Matrix Green)",
    fontVibe: "Strict JetBrains / Monospace Telemetry",
    keyFeatures: [
      "Live interactive Playwright command execution stream",
      "Tactical [BRACKETED] status flags and system latency graphs",
      "Mechanical borders and real-time pulse sensors",
      "Dense telemetry layout for enterprise credibility",
    ],
  },
  {
    id: "bauhaus",
    name: "Stark Bauhaus / High-Contrast",
    tagline: "Bold Swiss Modernism, Solid 2px Grids & Raw Engineering",
    inspiration: "Unsection, International Typographic Style",
    bgHex: "#000000 / #FFFFFF",
    cardHex: "#0D0D0D / #F4F4F5",
    accentHex: "#2563EB (Klein Blue) / #EF4444",
    fontVibe: "Heavy Architectural Grotesk (Helvetica/Inter Black)",
    keyFeatures: [
      "Solid high-contrast geometric grid lines and dividers",
      "Oversized structural index numerals (01, 02, 03)",
      "Single high-voltage pigment focal point (Klein Blue / Red dot)",
      "Raw, unapologetic engineering confidence",
    ],
  },
];

export default function DemoPage() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("linear");
  const [copiedTheme, setCopiedTheme] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const currentMeta = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  const handleSelectTheme = () => {
    navigator.clipboard.writeText(
      `I choose Theme: ${currentMeta.name} (${currentMeta.id})`
    );
    setCopiedTheme(true);
    setTimeout(() => setCopiedTheme(false), 2500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 selection:text-white pb-28">
      {/* =================================================================== */}
      {/* TOP FLOATING DEMO CONTROL BAR                                       */}
      {/* =================================================================== */}
      <div className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 shadow-2xl px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Brand & Context */}
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Live UI/UX Studio
                </span>
                <span className="text-zinc-600">|</span>
                <span className="text-xs text-zinc-400">
                  5 Design Archetypes
                </span>
              </div>
            </div>
          </div>

          {/* Theme Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-zinc-900/90 rounded-xl border border-zinc-800">
            {THEMES.map((theme) => {
              const isSelected = activeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-white text-zinc-950 font-bold shadow-md scale-[1.02]"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        theme.id === "linear"
                          ? "#10b981"
                          : theme.id === "editorial"
                          ? "#b45309"
                          : theme.id === "aurora"
                          ? "#a855f7"
                          : theme.id === "cyberdeck"
                          ? "#22c55e"
                          : "#2563eb",
                    }}
                  />
                  <span>{theme.name.split("/")[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Action: Select This Theme */}
          <button
            onClick={handleSelectTheme}
            className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            {copiedTheme ? (
              <>
                <Check size={14} className="text-zinc-950" />
                <span>Theme Choice Copied!</span>
              </>
            ) : (
              <>
                <CheckCircle2 size={14} />
                <span>Confirm {currentMeta.name.split("/")[0].trim()}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* THEME SPECIFICATION HUD (TOKEN BREAKDOWN)                           */}
      {/* =================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-5 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-white font-mono text-xs font-semibold uppercase">
                  Archetype #{THEMES.findIndex((t) => t.id === activeTheme) + 1}
                </span>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {currentMeta.name}
                </h1>
              </div>
              <p className="text-sm text-zinc-400 mt-1 font-normal">
                {currentMeta.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
                <span className="text-zinc-500">Inspiration:</span>
                <span className="text-zinc-200 font-semibold">
                  {currentMeta.inspiration}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800">
                <span className="text-zinc-500">Canvas Base:</span>
                <span className="text-zinc-200 font-semibold">
                  {currentMeta.bgHex}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-xs">
            {currentMeta.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-zinc-300 bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-800/60"
              >
                <Check
                  size={14}
                  className="text-emerald-400 mt-0.5 shrink-0"
                />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* LIVE INTERACTIVE THEME VIEWPORT (MODE = WAIT)                       */}
      {/* =================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-zinc-900/90 border-b border-zinc-800 px-4 py-2.5 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-zinc-500">
                preview://shazzad.dev/
                <strong className="text-white">{activeTheme}</strong>
              </span>
            </div>
            <span className="hidden sm:inline text-zinc-500">
              Interactive 1:1 Scale Preview
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTheme}
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }
              }
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeTheme === "linear" && <LinearRaycastPreview />}
              {activeTheme === "editorial" && <SwissEditorialPreview />}
              {activeTheme === "aurora" && <LiquidAuroraPreview />}
              {activeTheme === "cyberdeck" && <CyberdeckPreview />}
              {activeTheme === "bauhaus" && <StarkBauhausPreview />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =================================================================== */}
      {/* BOTTOM SELECTION CALL TO ACTION                                     */}
      {/* =================================================================== */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-12">
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
          Your Decision Powers the Rebuild
        </p>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Which design language speaks to you most?
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
          Click the button below or tell me in the chat:{" "}
          <code className="text-emerald-400 font-mono bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
            I want {currentMeta.name}
          </code>
          . Once you confirm, I will immediately execute the full portfolio
          rebuild around this chosen system!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button
            onClick={handleSelectTheme}
            className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold text-sm shadow-xl hover:bg-zinc-200 transition-all cursor-pointer flex items-center gap-2"
          >
            {copiedTheme ? (
              <>
                <Check size={16} />
                <span>Confirmed &amp; Copied: {currentMeta.name}!</span>
              </>
            ) : (
              <>
                <span>I Pick {currentMeta.name}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* THEME 1: LINEAR / RAYCAST OBSIDIAN                                        */
/* ========================================================================= */
function LinearRaycastPreview() {
  return (
    <div className="bg-[#070709] text-zinc-100 p-8 sm:p-14 font-sans">
      {/* Top Navbar Simulation */}
      <div className="max-w-5xl mx-auto flex items-center justify-between pb-8 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-xs font-bold text-white shadow-sm">
            MSM
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-white">
              Muhammad Shazzad Mia
            </div>
            <div className="text-[10px] font-mono text-zinc-500">
              SQA Engineer II · Brain Station 23
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for SDET Roles</span>
          </span>
          <button className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-200">
            Download CV
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto pt-14 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6">
          <span className="text-emerald-400">●</span> Playwright Test Automation
          &amp; 15,000 VU JMeter Benchmark
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.08]">
          Engineering zero-flake automation &amp; bulletproof quality systems.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Led end-to-end test automation and load architecture for Shwapno &amp;
          Paragon at Brain Station 23. Driving 80%+ test coverage, 75% execution
          runtime reduction, and 99.4% verified platform uptime.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
          {[
            { label: "Automated Coverage", val: "80%+", sub: "120+ Critical Flows" },
            { label: "Runtime Reduction", val: "75%", sub: "14h → 3.5h Parallel" },
            { label: "Concurrency Peak", val: "15k+", sub: "Virtual Users Tested" },
            { label: "Platform Uptime", val: "99.4%", sub: "Zero Rollbacks" },
          ].map((m, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 shadow-sm"
            >
              <div className="text-2xl font-bold tracking-tight text-white font-mono">
                {m.val}
              </div>
              <div className="text-xs font-medium text-zinc-300 mt-1">
                {m.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Telemetry Node */}
        <div className="mt-10 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-3 border-b border-zinc-800/80">
            <span className="flex items-center gap-2">
              <Terminal size={14} className="text-emerald-400" />
              <span>CI/CD Automated Gate Pipeline (GitHub Actions)</span>
            </span>
            <span className="text-emerald-400">STATUS: PASSING [0 ERRORS]</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs font-mono">
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
              <div className="text-zinc-500 text-[10px]">STAGE 01</div>
              <div className="text-zinc-200 font-bold mt-1">Playwright E2E Grid</div>
              <div className="text-zinc-400 text-[11px] mt-1">Chromium, WebKit, Firefox (4 Workers)</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
              <div className="text-zinc-500 text-[10px]">STAGE 02</div>
              <div className="text-zinc-200 font-bold mt-1">JMeter Stress Benchmark</div>
              <div className="text-zinc-400 text-[11px] mt-1">p95 Latency: 1.74s (&lt; 2.0s SLA)</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80">
              <div className="text-zinc-500 text-[10px]">STAGE 03</div>
              <div className="text-zinc-200 font-bold mt-1">Zero-Defect Release Sign-Off</div>
              <div className="text-emerald-400 text-[11px] mt-1">nopStation Agility &amp; Excellence Award</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* THEME 2: SWISS EDITORIAL & ARCHITECTURAL CREAM                            */
/* ========================================================================= */
function SwissEditorialPreview() {
  return (
    <div className="bg-[#FAF8F5] text-[#161513] p-8 sm:p-14 font-sans selection:bg-amber-200">
      {/* Top Header */}
      <div className="max-w-5xl mx-auto flex items-center justify-between pb-8 border-b border-[#E6E2DA]">
        <div>
          <div className="text-base font-serif italic text-[#161513]">
            Muhammad Shazzad Mia
          </div>
          <div className="text-[11px] uppercase tracking-widest text-[#78716C] mt-0.5">
            Senior Software Quality Architect — Dhaka, BD
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="text-[#78716C]">Brain Station 23</span>
          <span className="w-1 h-1 rounded-full bg-[#B45309]" />
          <span className="font-semibold text-[#B45309]">Open for Inquiries</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto pt-16 pb-14">
        <div className="text-xs uppercase tracking-[0.25em] text-[#B45309] font-bold mb-4">
          Software Quality Assurance &amp; Performance Engineering
        </div>

        <h2 className="text-4xl sm:text-6xl font-serif text-[#161513] max-w-4xl leading-[1.12]">
          Building confidence into software through disciplined automation and
          architectural rigor.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 pt-10 border-t border-[#E6E2DA]">
          <div className="md:col-span-7 text-base text-[#57534E] leading-relaxed">
            <p>
              I specialize in shifting software quality left — transforming test
              suites from reactive bottlenecks into deterministic release
              accelerators. Over my tenure at Brain Station 23, I engineered
              parallel Playwright frameworks for high-volume enterprise commerce
              platforms including Shwapno and Paragon.
            </p>
            <p className="mt-4">
              My methodology balances 80%+ end-to-end automation with deep Apache
              JMeter load profiling, uncovering microservice bottlenecks before
              they reach nationwide customers.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            <div className="p-5 rounded-xl bg-white border border-[#E6E2DA] shadow-sm">
              <div className="text-3xl font-serif font-bold text-[#161513]">
                80% Coverage
              </div>
              <div className="text-xs text-[#78716C] mt-1">
                Automating 120+ critical shopping journeys, checkout flows, and
                payment gateway webhooks.
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E6E2DA] shadow-sm">
              <div className="text-3xl font-serif font-bold text-[#B45309]">
                15,000 VUs
              </div>
              <div className="text-xs text-[#78716C] mt-1">
                Apache JMeter high-concurrency volumetric stress under flash-sale
                traffic surges.
              </div>
            </div>
          </div>
        </div>

        {/* Selected Frameworks */}
        <div className="mt-14 pt-8 border-t border-[#E6E2DA] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="text-[#78716C]">
            Verified Accreditations:{" "}
            <strong className="text-[#161513]">
              Batch 16 SQA Professional · DIU B.Sc. CSE · nopStation Excellence
              Award
            </strong>
          </div>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-1.5 font-bold text-[#B45309] hover:underline"
          >
            <span>Review Full Curriculum Vitae</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* THEME 3: LIQUID GLASS & COSMIC AURORA                                     */
/* ========================================================================= */
function LiquidAuroraPreview() {
  return (
    <div className="relative bg-[#08091A] text-zinc-100 p-8 sm:p-14 font-sans overflow-hidden">
      {/* Background Aurora Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-fuchsia-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Nav */}
      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between pb-8 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-xs text-white shadow-lg shadow-indigo-500/30">
            MSM
          </div>
          <div>
            <div className="text-sm font-bold text-white">Muhammad Shazzad Mia</div>
            <div className="text-[10px] text-indigo-300 font-medium">
              SQA Automation Engineer II
            </div>
          </div>
        </div>

        <button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-xs font-semibold text-white shadow-lg">
          Connect / Contact
        </button>
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-5xl mx-auto pt-14 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl text-xs text-indigo-200 mb-6 shadow-inner">
          <Sparkles size={13} className="text-pink-400" />
          <span>Next-Gen Quality Engineering &amp; High-Concurrency Telemetry</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.08]">
          Flawless releases engineered through{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
            intelligent automation.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
          Pioneering deterministic Page Object Model Playwright suites, 15,000 VU
          cloud load simulations, and zero-defect deployment pipelines for
          nationwide digital commerce.
        </p>

        {/* Glass Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {[
            {
              title: "Playwright Automation",
              desc: "120+ full E2E journeys running in parallel across Chromium, Firefox & WebKit.",
              badge: "80%+ Coverage",
              gradient: "from-indigo-500/20 to-purple-500/10",
            },
            {
              title: "Concurrency Stress",
              desc: "Simulating 15,000 concurrent shoppers with Apache JMeter to protect SLAs.",
              badge: "p95 < 1.74s",
              gradient: "from-purple-500/20 to-pink-500/10",
            },
            {
              title: "Quality Governance",
              desc: "7-Dimension audit framework maintaining 99.4% platform uptime across 15+ sprints.",
              badge: "Award Winner",
              gradient: "from-pink-500/20 to-cyan-500/10",
            },
          ].map((c, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-gradient-to-b ${c.gradient} border border-white/15 backdrop-blur-2xl shadow-xl shadow-black/40 hover:border-white/30 transition-all`}
            >
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 text-white font-mono text-[11px] font-bold mb-3">
                {c.badge}
              </div>
              <h3 className="text-lg font-bold text-white">{c.title}</h3>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* THEME 4: CYBERNETIC QA COMMAND DECK                                       */
/* ========================================================================= */
function CyberdeckPreview() {
  return (
    <div className="bg-[#0B0F19] text-zinc-200 p-8 sm:p-14 font-mono text-xs selection:bg-emerald-500/30">
      {/* Top Telemetry Header */}
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between pb-6 border-b border-zinc-800 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-zinc-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
            &gt;_
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-wide">
              SYSTEM://SHAZZAD.DEV [NODE: BS23]
            </div>
            <div className="text-zinc-500 text-[10px]">
              ROLE: SQA_ENGINEER_II // CLEARANCE: LEAD
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
            STATUS: ACTIVE [100% ONLINE]
          </span>
          <span className="text-zinc-500">UPTIME: 99.4%</span>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto pt-10 pb-8">
        <div className="text-emerald-400 text-xs mb-2">
          $ init-suite --target=&quot;shwapno-production&quot; --mode=parallel
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          AUTOMATED TEST RUNNER &amp; HIGH-CONCURRENCY VOLUMETRIC HARNESS
        </h2>

        <p className="mt-3 text-zinc-400 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Executing automated Page Object Model verification across 120+ digital
          commerce transactions. Slashing release test cycles by 75% while
          eliminating flake in CI/CD pipeline webhooks.
        </p>

        {/* Live Terminal Output Console */}
        <div className="mt-8 rounded-xl bg-black border border-zinc-800 p-5 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-900 text-zinc-500 text-[11px]">
            <span>TERMINAL_OUTPUT // PLAYWRIGHT_WORKER_04</span>
            <span className="text-emerald-400 font-bold">ALL 120 CHECKS GREEN</span>
          </div>

          <div className="space-y-1.5 mt-3 text-[11px]">
            <div className="text-zinc-500">
              [00:00:01] <span className="text-zinc-300">PASS</span> auth/login_bkash_otp.spec.ts (412ms)
            </div>
            <div className="text-zinc-500">
              [00:00:02] <span className="text-zinc-300">PASS</span> cart/algolia_multibranch_stock_sync.spec.ts (840ms)
            </div>
            <div className="text-zinc-500">
              [00:00:03] <span className="text-zinc-300">PASS</span> checkout/nagad_instant_refund_webhook.spec.ts (590ms)
            </div>
            <div className="text-emerald-400 font-bold pt-1">
              ✓ 120 passed, 0 failed, 0 flaky (Total Runtime: 3.5h vs 14h manual baseline)
            </div>
          </div>
        </div>

        {/* Telemetry Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="p-3 rounded bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-500 text-[10px]">CONCURRENCY_TESTED</span>
            <div className="text-lg font-bold text-white mt-0.5">15,000 VUs</div>
          </div>
          <div className="p-3 rounded bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-500 text-[10px]">P95_RESPONSE_SLA</span>
            <div className="text-lg font-bold text-emerald-400 mt-0.5">1.74s [PASS]</div>
          </div>
          <div className="p-3 rounded bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-500 text-[10px]">AWARD_RECOGNITION</span>
            <div className="text-lg font-bold text-white mt-0.5">nopStation Agility</div>
          </div>
          <div className="p-3 rounded bg-zinc-900/60 border border-zinc-800">
            <span className="text-zinc-500 text-[10px]">EDUCATION_CREDENTIAL</span>
            <div className="text-lg font-bold text-white mt-0.5">B.Sc. in CSE (DIU)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* THEME 5: STARK BAUHAUS / HIGH-CONTRAST MONOCHROME                         */
/* ========================================================================= */
function StarkBauhausPreview() {
  return (
    <div className="bg-white text-black p-8 sm:p-14 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <div className="max-w-5xl mx-auto flex items-center justify-between pb-8 border-b-2 border-black">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black text-xs">
            01
          </div>
          <div>
            <div className="text-sm font-black uppercase tracking-tight">
              Muhammad Shazzad Mia
            </div>
            <div className="text-[10px] font-mono uppercase text-zinc-600">
              SQA Engineer II · Brain Station 23
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-600 rounded-full inline-block" />
          <span className="text-xs font-black uppercase tracking-wider">
            Dhaka // Bangladesh
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto pt-14 pb-12">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-4">
          [ ARCHITECTURAL QUALITY ENGINEERING ]
        </div>

        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          Zero Defects. <br />
          Deterministic Code. <br />
          Maximum Velocity.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 pt-8 border-t-2 border-black">
          <div className="md:col-span-8 text-base text-zinc-800 font-medium leading-relaxed">
            Leading software quality assurance and high-concurrency performance
            architecture. Engineered Playwright Page Object Model automation
            suites protecting 120+ core shopping journeys and payment channels
            for Bangladesh&apos;s largest retail platform.
          </div>

          <div className="md:col-span-4 flex flex-col justify-center space-y-3">
            <a
              href="/resume.pdf"
              className="w-full py-3 bg-black text-white text-center font-black text-xs uppercase tracking-wider hover:bg-blue-600 transition-colors"
            >
              Download Resume (PDF)
            </a>
            <div className="text-center font-mono text-[11px] text-zinc-500">
              Verified 2-Page Technical CV
            </div>
          </div>
        </div>

        {/* 3-Column Stark Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-black mt-12">
          <div className="p-6 border-b sm:border-b-0 sm:border-r-2 border-black">
            <span className="text-xs font-mono font-bold uppercase text-zinc-500">
              01 // AUTOMATION
            </span>
            <div className="text-4xl font-black text-black mt-2">80%+</div>
            <p className="text-xs text-zinc-700 mt-2 font-medium">
              Automated test coverage cutting release execution from 14 hours down to 3.5 hours.
            </p>
          </div>

          <div className="p-6 border-b sm:border-b-0 sm:border-r-2 border-black">
            <span className="text-xs font-mono font-bold uppercase text-zinc-500">
              02 // STRESS LOAD
            </span>
            <div className="text-4xl font-black text-blue-600 mt-2">15,000</div>
            <p className="text-xs text-zinc-700 mt-2 font-medium">
              Virtual users benchmarked concurrently in Apache JMeter under SLA thresholds.
            </p>
          </div>

          <div className="p-6">
            <span className="text-xs font-mono font-bold uppercase text-zinc-500">
              03 // RELIABILITY
            </span>
            <div className="text-4xl font-black text-black mt-2">99.4%</div>
            <p className="text-xs text-zinc-700 mt-2 font-medium">
              Platform availability verified across 15+ major production deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
