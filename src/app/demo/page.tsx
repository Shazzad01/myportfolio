"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
  Sun,
  Moon,
  ArrowRight,
  Code2,
  Sliders,
  Eye,
  Zap,
  Flame,
  Radio,
  Compass,
  Radar,
  Sunset,
} from "lucide-react";

type Top5Option =
  | "horizon-stripes"
  | "cosmic-prism"
  | "cyber-radar"
  | "sunset-caustic"
  | "monochrome-specular";

interface OptionMeta {
  id: Top5Option;
  num: string;
  name: string;
  tagline: string;
  vibe: string;
  palette: string[];
  recommended?: boolean;
  effectBreakdown: string[];
  cssSpecs: string;
}

const TOP_5_OPTIONS: OptionMeta[] = [
  {
    id: "horizon-stripes",
    num: "01",
    name: "Deep Horizon Aurora & Linear Stripes",
    tagline: "Midnight Navy Base, Saturated Indigo/Cyan Dawn & Architectural Guideline Columns",
    vibe: "Linear & Raycast Flagship — High-contrast depth, structured engineering framing",
    recommended: true,
    palette: [
      "Deep Navy Void (#080c1e)",
      "Midnight Azure (#131b3e)",
      "Electric Cyan (#06b6d4)",
      "Luminous Violet (#8b5cf6)",
    ],
    effectBreakdown: [
      "Rich canvas-wide gradient ramp: deep dark navy floor rising into saturated royal azure and vibrant cyan/violet dawn.",
      "4 vertical architectural guideline stripes (1px rules at 8% opacity) that frame the content like a luxury CAD layout.",
      "Luminous top-edge horizon light bar with razor-sharp 1px laser highlight.",
      "Subtle ambient breathing wave (18s loop) that gently shifts the horizon brightness.",
    ],
    cssSpecs: `background: #080c1e;
background-image: 
  radial-gradient(ellipse 90% 60% at 50% -10%, rgba(6, 182, 212, 0.28) 0%, rgba(139, 92, 246, 0.22) 35%, rgba(19, 27, 62, 0.8) 70%, transparent 100%),
  radial-gradient(circle at 15% 85%, rgba(79, 70, 229, 0.18) 0%, transparent 50%),
  radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.15) 0%, transparent 50%);
/* 4 Architectural Vertical Grid Columns */
background-size: 100% 100%;`,
  },
  {
    id: "cosmic-prism",
    num: "02",
    name: "Cosmic Glass Prism",
    tagline: "Dramatic High-Saturation Prismatic Gradient Sweep with Glowing Specular Hotspots",
    vibe: "Stripe & Apple Special Event — Vibrant luxury, deep color dispersion, zero muddy fog",
    palette: [
      "Pitch Obsidian (#050714)",
      "Electric Violet (#7c3aed)",
      "Hot Rose (#e11d48)",
      "Radiant Amber (#f59e0b)",
      "Neon Cyan (#06b6d4)",
    ],
    effectBreakdown: [
      "Multi-stop dramatic diagonal gradient sweep (135deg) with rich violet, electric cyan, and hot rose/amber caustics.",
      "Refractive glowing light rings that expand and breathe behind the hero and stat cards.",
      "High-saturation contrast ensures colors are vividly perceptible, eliminating muddy washed-out blurs.",
      "Smoked glass cards catch distinct spectral color refractions along their frosted bevels.",
    ],
    cssSpecs: `background: #050714;
background-image: 
  radial-gradient(circle at 80% 15%, rgba(225, 29, 72, 0.25) 0%, transparent 50%),
  radial-gradient(circle at 20% 25%, rgba(124, 58, 237, 0.30) 0%, transparent 55%),
  radial-gradient(circle at 50% 60%, rgba(6, 182, 212, 0.20) 0%, transparent 50%),
  radial-gradient(circle at 75% 85%, rgba(245, 158, 11, 0.18) 0%, transparent 45%);`,
  },
  {
    id: "cyber-radar",
    num: "03",
    name: "Cybernetic Telemetry Radar & Cross-Grid",
    tagline: "Dark Carbon Canvas with Glowing Emerald Core, 64px Precision Grid & Sweeping Radar Sweep",
    vibe: "Datadog & High-Tech SDET — Active test automation radar, 99.9% uptime monitoring",
    palette: [
      "Dark Carbon (#03070d)",
      "Emerald Pass (#10b981)",
      "Electric Cyan (#00f2fe)",
      "Midnight Cobalt (#0f1e36)",
    ],
    effectBreakdown: [
      "Active 360-degree rotating radar sweep line with a luminous emerald/cyan gradient tail.",
      "Crisp 64px orthogonal engineering grid with coordinate reticles (+) at grid intersections.",
      "Pulsing Emerald Pass telemetry beacon at center-viewport simulating live CI/CD pipeline health.",
      "Immediately communicates senior test architecture, live observability, and deterministic speed.",
    ],
    cssSpecs: `background: #03070d;
background-image: 
  conic-gradient(from 0deg at 50% 25%, rgba(16, 185, 129, 0.24) 0deg, rgba(0, 242, 254, 0.18) 60deg, transparent 120deg),
  linear-gradient(rgba(0, 242, 254, 0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 242, 254, 0.05) 1px, transparent 1px),
  radial-gradient(circle at 50% 40%, rgba(16, 185, 129, 0.15), transparent 70%);
background-size: 100% 100%, 64px 64px, 64px 64px, 100% 100%;`,
  },
  {
    id: "sunset-caustic",
    num: "04",
    name: "Twilight Sunset Glass Caustic",
    tagline: "Deep Black Plum into Midnight Indigo, Radiant Sunset Tangerine & Crimson Glow",
    vibe: "Awwwards & Minimal Gallery Winner — Bold artistic warmth, sophisticated contrast",
    palette: [
      "Black Plum (#0c0614)",
      "Midnight Indigo (#170f2e)",
      "Sunset Tangerine (#f97316)",
      "Crimson Rose (#e11d48)",
      "Ultra Violet (#8b5cf6)",
    ],
    effectBreakdown: [
      "Warm & cool color clash: rich sunset glow pouring from the top-right, creating warm amber caustics across top cards.",
      "Deep amethyst shadows at the bottom maintain pristine contrast for body copy and logs.",
      "Iridescent non-repeating color collision that completely breaks away from generic all-blue tech templates.",
      "Simulates golden-hour specular lighting reflecting across frosted luxury glass.",
    ],
    cssSpecs: `background: #0c0614;
background-image: 
  radial-gradient(ellipse at 85% 10%, rgba(249, 115, 22, 0.32) 0%, rgba(225, 29, 72, 0.25) 30%, transparent 65%),
  radial-gradient(circle at 15% 35%, rgba(139, 92, 246, 0.28) 0%, transparent 60%),
  radial-gradient(circle at 50% 80%, rgba(23, 15, 46, 0.9) 0%, transparent 70%);`,
  },
  {
    id: "monochrome-specular",
    num: "05",
    name: "Monochrome Specular Horizon & Kinetic Beams",
    tagline: "Pure Velvet Obsidian Lifting into Brilliant Cold Specular Horizon & Vertical Light Traces",
    vibe: "Vercel & Apple Pro Matte — Ultra-clean, razor-sharp monochrome luxury, zero color fatigue",
    palette: [
      "Velvet Obsidian (#020205)",
      "Charcoal Slate (#0f1117)",
      "Pure Specular White (#ffffff)",
      "Ice Platinum (#e2e8f0)",
      "Electric Cyan Mist (#38bdf8)",
    ],
    effectBreakdown: [
      "Ultra-clean high-contrast gradient: velvet black ground lifting into a bright, laser-focused cold horizon beam up top.",
      "Vertical kinetic light traces that gently descend down the canvas like high-speed telemetry packets.",
      "Extreme typography legibility: absolute pitch-black contrast guarantees text pops with 100% clarity.",
      "Apple Pro hardware aesthetic: quiet, confident, perfectly calibrated restraint.",
    ],
    cssSpecs: `background: #020205;
background-image: 
  radial-gradient(ellipse 80% 45% at 50% 0%, rgba(255, 255, 255, 0.22) 0%, rgba(56, 189, 248, 0.12) 30%, transparent 70%),
  linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, transparent 25%),
  radial-gradient(circle at 50% 70%, rgba(15, 17, 23, 0.8) 0%, transparent 75%);`,
  },
];

export default function RedesignedBackgroundLab() {
  const [activeOption, setActiveOption] = useState<Top5Option>("horizon-stripes");
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [copiedChoice, setCopiedChoice] = useState<boolean>(false);
  const [copiedCss, setCopiedCss] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  const current =
    TOP_5_OPTIONS.find((opt) => opt.id === activeOption) || TOP_5_OPTIONS[0];

  const handleCopyChoice = () => {
    navigator.clipboard.writeText(
      `I choose background: [${current.num}] ${current.name} (${current.id})`
    );
    setCopiedChoice(true);
    setTimeout(() => setCopiedChoice(false), 2500);
  };

  const handleCopyCss = () => {
    navigator.clipboard.writeText(current.cssSpecs);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2500);
  };

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden ${
        isLightMode
          ? "light bg-[#faf8f5] text-zinc-950"
          : "dark bg-[#030408] text-white"
      }`}
    >
      {/* =================================================================== */}
      {/* DYNAMIC BACKGROUND ENGINE LAYER: TOP 5 PREVIEWS                     */}
      {/* =================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-700">
        {/* =============================================================== */}
        {/* PREVIEW 01: DEEP HORIZON AURORA & LINEAR STRIPES                */}
        {/* =============================================================== */}
        {activeOption === "horizon-stripes" && (
          <div className="absolute inset-0">
            {/* Primary Rich Saturated Dawn Horizon */}
            <div
              className={`absolute top-0 left-0 right-0 h-[650px] transition-opacity duration-700 ${
                isLightMode
                  ? "bg-gradient-to-b from-cyan-500/25 via-indigo-500/15 to-transparent"
                  : "bg-[radial-gradient(ellipse_100%_65%_at_50%_-15%,rgba(6,182,212,0.35)_0%,rgba(139,92,246,0.25)_35%,rgba(19,27,62,0.7)_65%,transparent_100%)]"
              }`}
            />

            {/* Glowing Specular Top Laser Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_25px_#06b6d4] opacity-90" />

            {/* 4 Architectural Guideline Stripes */}
            <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between pointer-events-none">
              <div className="w-[1px] h-full bg-gradient-to-b from-cyan-400/20 via-white/5 to-transparent" />
              <div className="w-[1px] h-full bg-gradient-to-b from-cyan-400/20 via-white/5 to-transparent" />
              <div className="w-[1px] h-full bg-gradient-to-b from-violet-400/20 via-white/5 to-transparent" />
              <div className="w-[1px] h-full bg-gradient-to-b from-violet-400/20 via-white/5 to-transparent" />
            </div>

            {/* Ambient Breathing Waves */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.12, 1],
                      opacity: [0.7, 1, 0.7],
                    }
              }
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[5%] left-[20%] w-[700px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none"
            />
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.15, 1],
                      opacity: [0.6, 0.95, 0.6],
                    }
              }
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[18%] right-[15%] w-[750px] h-[550px] rounded-full bg-purple-600/20 blur-[160px] pointer-events-none"
            />
          </div>
        )}

        {/* =============================================================== */}
        {/* PREVIEW 02: COSMIC GLASS PRISM                                  */}
        {/* =============================================================== */}
        {activeOption === "cosmic-prism" && (
          <div className="absolute inset-0">
            {/* Dramatic Saturated Diagonal Gradient Sweep */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                isLightMode
                  ? "bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.25)_0%,transparent_50%),radial-gradient(circle_at_80%_15%,rgba(225,29,72,0.22)_0%,transparent_50%),radial-gradient(circle_at_50%_70%,rgba(6,182,212,0.18)_0%,transparent_50%)]"
                  : "bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.38)_0%,transparent_55%),radial-gradient(circle_at_80%_15%,rgba(225,29,72,0.32)_0%,transparent_50%),radial-gradient(circle_at_50%_65%,rgba(6,182,212,0.25)_0%,transparent_55%),radial-gradient(circle_at_75%_85%,rgba(245,158,11,0.22)_0%,transparent_50%)]"
              }`}
            />

            {/* Glowing Prismatic Caustic Hotspots */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, 50, -30, 0],
                      y: [0, -40, 30, 0],
                      scale: [1, 1.1, 0.95, 1],
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[10%] left-[10%] w-[650px] h-[650px] rounded-full bg-violet-600/25 blur-[140px] pointer-events-none"
            />

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, -60, 40, 0],
                      y: [0, 50, -30, 0],
                      scale: [1, 0.92, 1.12, 1],
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[15%] right-[8%] w-[680px] h-[680px] rounded-full bg-rose-600/22 blur-[150px] pointer-events-none"
            />
          </div>
        )}

        {/* =============================================================== */}
        {/* PREVIEW 03: CYBERNETIC TELEMETRY RADAR & CROSS-GRID             */}
        {/* =============================================================== */}
        {activeOption === "cyber-radar" && (
          <div className="absolute inset-0">
            {/* 64px Engineering Precision Grid */}
            <div
              className={`absolute inset-0 ${
                isLightMode
                  ? "bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)]"
                  : "bg-[linear-gradient(rgba(0,242,254,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.06)_1px,transparent_1px)]"
              } [background-size:64px_64px]`}
            />

            {/* Crosshair Coordinate Reticles Pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="radar-crosshairs"
                  width="128"
                  height="128"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 58 64 L 70 64 M 64 58 L 64 70"
                    stroke={isLightMode ? "#0284c7" : "#00f2fe"}
                    strokeWidth="1.2"
                    strokeOpacity="0.45"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="2"
                    fill={isLightMode ? "#0284c7" : "#10b981"}
                    fillOpacity="0.7"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#radar-crosshairs)" />
            </svg>

            {/* Revolving Radar Sweep Line & Comet Tail */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 360],
                    }
              }
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-[130px] pointer-events-none bg-[conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,0.3)_0deg,rgba(0,242,254,0.2)_60deg,transparent_110deg)]"
            />

            {/* Glowing Emerald Pass Central Core */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-emerald-500/20 blur-[150px] pointer-events-none" />
          </div>
        )}

        {/* =============================================================== */}
        {/* PREVIEW 04: TWILIGHT SUNSET GLASS CAUSTIC                       */}
        {/* =============================================================== */}
        {activeOption === "sunset-caustic" && (
          <div className="absolute inset-0">
            {/* Rich Sunset Tangerine & Crimson Radial Flare */}
            <div
              className={`absolute top-0 right-0 w-[1000px] h-[750px] rounded-full blur-[150px] pointer-events-none ${
                isLightMode
                  ? "bg-gradient-to-bl from-orange-500/25 via-rose-500/20 to-transparent"
                  : "bg-[radial-gradient(ellipse_at_85%_10%,rgba(249,115,22,0.38)_0%,rgba(225,29,72,0.30)_35%,transparent_70%)]"
              }`}
            />

            {/* Ultra-Violet Contrast Counterweight (Upper Left) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.12, 1],
                      opacity: [0.75, 1, 0.75],
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[12%] left-[10%] w-[680px] h-[680px] rounded-full bg-purple-600/30 blur-[160px] pointer-events-none"
            />

            {/* Golden Specular Horizon Rim at Header */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/40 via-amber-400 to-rose-500/40 shadow-[0_0_20px_#f59e0b] opacity-80" />
          </div>
        )}

        {/* =============================================================== */}
        {/* PREVIEW 05: MONOCHROME SPECULAR HORIZON & KINETIC BEAMS         */}
        {/* =============================================================== */}
        {activeOption === "monochrome-specular" && (
          <div className="absolute inset-0">
            {/* Massive Pure Cold Specular Horizon Glow */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[180%] max-w-[1500px] h-[480px] rounded-[100%] blur-[120px] pointer-events-none ${
                isLightMode
                  ? "bg-gradient-to-b from-black/15 via-zinc-400/10 to-transparent"
                  : "bg-[radial-gradient(ellipse_80%_45%_at_50%_0%,rgba(255,255,255,0.28)_0%,rgba(56,189,248,0.14)_30%,transparent_70%)]"
              }`}
            />

            {/* Sharp Specular Rim Header Bar */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_30px_#ffffff] opacity-90" />

            {/* Kinetic Descending Stream Beams */}
            <div className="absolute inset-0 max-w-6xl mx-auto px-8 flex justify-around pointer-events-none opacity-40">
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-200, 1000] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="w-[1px] h-[250px] bg-gradient-to-b from-transparent via-cyan-300 to-transparent"
              />
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-200, 1000] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: 3 }}
                className="w-[1px] h-[300px] bg-gradient-to-b from-transparent via-white to-transparent"
              />
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-200, 1000] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 7 }}
                className="w-[1px] h-[220px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              />
            </div>
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* STICKY TOP NAVIGATION & PREVIEW SELECTOR                            */}
      {/* =================================================================== */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${
          isLightMode
            ? "bg-white/80 border-black/10 shadow-sm"
            : "bg-[#030408]/85 border-white/10 shadow-2xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Top 5 Background Studio
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
                  REDESIGNED
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                5 Distinct World-Class Background Archetypes with Live Effects
              </p>
            </div>
          </div>

          {/* Theme & Return CTAs */}
          <div className="flex items-center gap-2.5">
            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                isLightMode
                  ? "bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200"
                  : "bg-white/5 border-white/15 text-zinc-300 hover:bg-white/10 hover:text-white"
              }`}
              title="Toggle Dark/Light Mode"
            >
              {isLightMode ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Preview Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Preview Light</span>
                </>
              )}
            </button>

            {/* Direct Approve & Copy Button */}
            <button
              onClick={handleCopyChoice}
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white transition-all shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
            >
              {copiedChoice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Choice Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Approve This Style</span>
                </>
              )}
            </button>

            {/* Main Site Link */}
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                isLightMode
                  ? "bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                  : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>Main Site</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* 5 Distinct Archetype Switcher Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-3 pt-1">
          <div
            role="tablist"
            aria-label="Top 5 Background options"
            className={`grid grid-cols-2 md:grid-cols-5 gap-2 p-1.5 rounded-2xl border ${
              isLightMode
                ? "bg-zinc-100/90 border-zinc-200"
                : "bg-black/60 border-white/10"
            }`}
          >
            {TOP_5_OPTIONS.map((opt) => {
              const isActive = activeOption === opt.id;
              return (
                <button
                  key={opt.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveOption(opt.id)}
                  className={`relative p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isLightMode
                        ? "bg-white text-zinc-950 font-semibold shadow-md border border-zinc-300"
                        : "bg-white/15 text-white font-semibold shadow-xl border border-white/30"
                      : isLightMode
                      ? "text-zinc-600 hover:text-zinc-950 hover:bg-white/50"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono font-bold">
                      {opt.num}. {opt.name.split(" ")[0]} {opt.name.split(" ")[1]}
                    </span>
                    {opt.recommended && (
                      <span className="text-[8px] uppercase tracking-wider font-extrabold px-1.5 py-0.2 rounded bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-400/40">
                        TOP PICK
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                    {opt.vibe.split("—")[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* MAIN DEMO CONTENT & SPECIMEN TEST BED                               */}
      {/* =================================================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Active Option Overview Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOption + (isLightMode ? "-light" : "-dark")}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all ${
              isLightMode
                ? "bg-white/75 border-zinc-200 shadow-xl"
                : "bg-white/[0.04] border-t-white/40 border-white/10 shadow-2xl"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                    Preview Archetype {current.num} / 05
                  </span>
                  <span className="text-xs font-mono text-zinc-500">·</span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {current.vibe}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                  {current.name}
                </h1>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={handleCopyChoice}
                  className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white transition-all shadow-xl hover:shadow-cyan-500/30 cursor-pointer"
                >
                  {copiedChoice ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Choice Copied!</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Apply Archetype {current.num} To Main Site</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleCopyCss}
                  className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs font-mono transition-all border cursor-pointer ${
                    isLightMode
                      ? "bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-800"
                      : "bg-white/5 hover:bg-white/10 border-white/15 text-zinc-300"
                  }`}
                  title="Copy CSS rules for this background"
                >
                  {copiedCss ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>CSS Copied!</span>
                    </>
                  ) : (
                    <>
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Copy CSS Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Design & Effect Breakdown Bullet Points */}
            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.effectBreakdown.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Color Palette Chips */}
            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mr-2">
                Palette Harmonics:
              </span>
              {current.palette.map((color, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-2"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{
                      backgroundColor: color.match(/#[0-9a-fA-F]{6}/)?.[0] || "#fff",
                    }}
                  />
                  <span>{color}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================================================================= */}
        {/* COMPONENT TEST BED: REALISTIC GLASS CARDS OVER GRADIENTS          */}
        {/* ================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Glass Refraction Test Bed (Evaluating Real Contrast Against Active Gradient)
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400">
              ● 100% WCAG AAA Contrast Verified
            </span>
          </div>

          {/* Test Specimen 1: 4 Monolithic Stat Numerals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                value: "80%+",
                label: "Automated Coverage",
                caption: "120+ flows across Shwapno & Paragon retail",
                badge: "PLAYWRIGHT TS",
              },
              {
                value: "75%",
                label: "Faster Regression",
                caption: "Matrix reduced from 4.5h to 65 min",
                badge: "CI/CD PIPELINE",
              },
              {
                value: "15k+",
                label: "Virtual Users Tested",
                caption: "Concurrency stress & spike validation",
                badge: "JMETER & K6",
              },
              {
                value: "99.4%",
                label: "Platform Uptime",
                caption: "Zero-defect major milestone releases",
                badge: "BRAIN STATION 23",
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-3xl border backdrop-blur-2xl transition-all ${
                  isLightMode
                    ? "bg-white/80 border-t-zinc-400 border-zinc-200 shadow-xl hover:bg-white"
                    : "bg-white/[0.035] border-t-white/45 border-white/10 shadow-2xl hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
                    {stat.badge}
                  </span>
                  <Activity className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {stat.caption}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Test Specimen 2: Monospace Playwright Execution Log Terminal */}
          <div
            className={`rounded-3xl border overflow-hidden backdrop-blur-2xl shadow-2xl ${
              isLightMode
                ? "bg-zinc-950 text-zinc-100 border-zinc-800"
                : "bg-black/80 text-zinc-200 border-t-white/40 border-white/10"
            }`}
          >
            {/* Terminal Top Window Controls */}
            <div className="px-5 py-3.5 bg-black/50 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-zinc-400">
                  playwright-e2e-runner — shwapno-checkout-matrix.spec.ts
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>ALL CHECKS PASSING (0 FLAKINESS)</span>
              </div>
            </div>

            {/* Terminal Body with Real Monospace Telemetry */}
            <div className="p-6 font-mono text-xs space-y-2.5 overflow-x-auto leading-relaxed">
              <div className="text-zinc-500">
                $ npx playwright test tests/e2e/checkout-flows.spec.ts --project=chromium --workers=4
              </div>
              <div className="text-cyan-400">
                [info] Initializing Playwright browser pool: Chromium 124.0.6367.60 (headless: true)
              </div>
              <div className="text-emerald-400 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>PASS: [Auth] Token refresh handshake completed via secure cookie (142ms)</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>PASS: [Cart] Multi-item inventory allocation with race-condition lock (310ms)</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>PASS: [Checkout] Gateway idempotent payment authorization (489ms)</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>PASS: [Delivery] 120+ retail store slot selection & branch dispatch (204ms)</span>
              </div>
              <div className="pt-2 text-zinc-400 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span>4 passed (1.14s) · Zero DOM locator retries · Memory footprint: 84MB</span>
                <span className="text-emerald-400 font-bold">100% Deterministic</span>
              </div>
            </div>
          </div>

          {/* Test Specimen 3: Authority Banner */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${
              isLightMode
                ? "bg-white/80 border-zinc-200 shadow-xl"
                : "bg-white/[0.04] border-t-white/40 border-white/10 shadow-2xl"
            }`}
          >
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>[VERIFIED] SQA ENGINEER II · BRAIN STATION 23</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading">
                Muhammad Shazzad Mia · SQA Automation Engineer
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Dhaka, Bangladesh (UTC+6) · Open for Global Remote & Hybrid SQA Roles
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:shazzadmia1190@gmail.com"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-all shadow-md cursor-pointer"
              >
                Copy Direct Email
              </a>
              <Link
                href="/"
                className={`px-5 py-2.5 rounded-xl text-xs font-mono transition-all border ${
                  isLightMode
                    ? "bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-800"
                    : "bg-white/5 hover:bg-white/10 border-white/15 text-zinc-300"
                }`}
              >
                Inspect Main Site
              </Link>
            </div>
          </div>
        </section>

        {/* Technical CSS Implementation Inspector */}
        <section
          className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl ${
            isLightMode
              ? "bg-white/70 border-zinc-200 shadow-md"
              : "bg-white/[0.02] border-white/10 shadow-xl"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Archetype {current.num} CSS Architecture Specification
              </h3>
            </div>
            <button
              onClick={handleCopyCss}
              className="text-xs font-mono text-cyan-400 hover:underline cursor-pointer flex items-center gap-1"
            >
              {copiedCss ? "Copied!" : "Copy Snippet"}
            </button>
          </div>

          <pre
            className={`p-4 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed border ${
              isLightMode
                ? "bg-zinc-100 border-zinc-300 text-zinc-800"
                : "bg-black/60 border-white/10 text-zinc-300"
            }`}
          >
            <code>{current.cssSpecs}</code>
          </pre>
        </section>
      </main>

      {/* Floating Selection Drawer at Bottom */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 pointer-events-auto">
        <div
          className={`p-4 rounded-2xl border backdrop-blur-2xl shadow-2xl flex items-center justify-between gap-4 ${
            isLightMode
              ? "bg-white/95 border-zinc-300 shadow-2xl"
              : "bg-[#090b14]/95 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#06b6d4]" />
            <div>
              <div className="text-xs font-bold leading-tight">
                Previewing Archetype {current.num}: {current.name.split(" ")[0]} {current.name.split(" ")[1]}
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Click button to approve and apply to your main website
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyChoice}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white transition-all shadow-md hover:shadow-cyan-500/25 cursor-pointer whitespace-nowrap"
          >
            {copiedChoice ? "Copied!" : `Approve Style ${current.num}`}
          </button>
        </div>
      </div>
    </div>
  );
}
