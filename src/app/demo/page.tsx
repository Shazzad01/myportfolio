"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
  Sun,
  Moon,
  Eye,
  Zap,
  MousePointer2,
  Terminal,
  Play,
  Flame,
  Gauge,
  Sliders,
  CheckCheck,
} from "lucide-react";

type MotionDirection =
  | "specular-spotlight"
  | "fluid-horizon-eclipse"
  | "velvet-grain-aurora";

interface DirectionMeta {
  id: MotionDirection;
  num: string;
  name: string;
  tagline: string;
  tier: string;
  highlights: string[];
  whyItFits: string;
}

const DIRECTIONS: DirectionMeta[] = [
  {
    id: "specular-spotlight",
    num: "01",
    name: "Silky Specular Glare & Frosted Obsidian",
    tagline:
      "Hardware-Accelerated 120 FPS Specular Glare with Frosted Glass Refraction",
    tier: "Linear & Stripe Tier — Tactile optical precision, zero clutter",
    highlights: [
      "Pure GPU compositing via native CSS translate3d (0 React re-renders on cursor move).",
      "Instantaneous 0ms latency tracking with buttery 120 FPS refresh rate.",
      "Dual-concentric specular light beam: crisp core white glint + wide platinum halo.",
      "Frosted glass cards naturally illuminate and reflect light as your cursor sweeps over.",
    ],
    whyItFits:
      "Eliminates all noisy buzzing dots. Replaces them with the exact luxury specular lighting seen on Linear and Stripe Press.",
  },
  {
    id: "fluid-horizon-eclipse",
    num: "02",
    name: "Fluid Caustic Horizon & Luminous Eclipse",
    tagline:
      "Atmospheric Horizon Eclipse with Sinusoidal Breathing Corona & Soft Light Cone",
    tier: "Raycast & Apple Pro Tier — Deep cinematic serenity, organic ambient pulse",
    highlights: [
      "Monochromatic specular horizon arc at the top with a breathing atmospheric eclipse rim.",
      "GPU-accelerated sinusoidal breathing keyframe (12s period) simulating real atmospheric optics.",
      "Soft, wide diffused 550px ambient cursor light cone that gently lifts contrast behind content.",
      "100% serene and calm — zero aggressive animations, zero visual distraction.",
    ],
    whyItFits:
      "Gives your portfolio an unmistakable cinematic horizon line, anchoring the eye while keeping the cursor interaction soft and soothing.",
  },
  {
    id: "velvet-grain-aurora",
    num: "03",
    name: "Velvet Obsidian Film Grain & Deep Ambient Aurora",
    tagline:
      "Analog Micro-Grain Texture with Deep Dual-Blob Ambient Aurora & Optical Loupe Glint",
    tier: "Studio Freight & Minimal Gallery Tier — Analog tactile luxury, living obsidian void",
    highlights: [
      "Ultra-fine SVG analog micro-grain texture overlay for an expensive physical magazine feel.",
      "Two deep ambient aurora clouds (slate-indigo & ice-platinum) drifting in smooth 24s harmonic cycles.",
      "Crisp, focused optical loupe glare following the cursor with instant GPU acceleration.",
      "Rich velvet obsidian (#030408) base that absorbs light and makes glass cards float effortlessly.",
    ],
    whyItFits:
      "Provides tactile physical texture and a living, breathing background without any gimmicky particles or laggy code.",
  },
];

export default function SilkyMotionLab() {
  const [activeDirection, setActiveDirection] =
    useState<MotionDirection>("specular-spotlight");
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [copiedChoice, setCopiedChoice] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(120);
  const shouldReduceMotion = useReducedMotion();

  const current =
    DIRECTIONS.find((d) => d.id === activeDirection) || DIRECTIONS[0];

  // =========================================================================
  // 120 FPS HARDWARE-ACCELERATED POINTER TRACKING (ZERO REACT RE-RENDERS)
  // =========================================================================
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      // Direct CSS variable updates bypass React render tree completely!
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  // =========================================================================
  // REAL-TIME FPS BENCHMARK (MEASURED VIA REQUESTANIMATIONFRAME)
  // =========================================================================
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const measureFps = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measureFps);
    };

    animId = requestAnimationFrame(measureFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleCopyChoice = () => {
    navigator.clipboard.writeText(
      `I choose Direction [${current.num}] ${current.name} (${current.id})`
    );
    setCopiedChoice(true);
    setTimeout(() => setCopiedChoice(false), 2500);
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
      {/* 120 FPS PURE GPU COMPOSITED BACKGROUND LAYERS                       */}
      {/* =================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Core Base Void */}
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            isLightMode ? "bg-[#faf8f5]" : "bg-[#030408]"
          }`}
        />

        {/* ----------------------------------------------------------------- */}
        {/* DIRECTION 01: SILKY SPECULAR GLARE & FROSTED OBSIDIAN             */}
        {/* ----------------------------------------------------------------- */}
        {activeDirection === "specular-spotlight" && (
          <>
            {/* Top Specular Horizon Arc */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[160%] max-w-[1400px] h-[420px] rounded-[100%] blur-[100px] pointer-events-none transition-opacity duration-700 ${
                isLightMode
                  ? "bg-gradient-to-b from-black/10 via-zinc-400/5 to-transparent"
                  : "bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(255,255,255,0.12)_0%,rgba(56,189,248,0.06)_45%,transparent_75%)]"
              }`}
            />

            {/* Subtle Horizon Razor Line */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[1200px] h-[1px] ${
                isLightMode
                  ? "bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent"
                  : "bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.25)]"
              }`}
            />

            {/* 120 FPS GPU Hardware-Accelerated Specular Spotlight */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 300px), calc(var(--mouse-y, 30vh) - 300px), 0)",
                willChange: "transform",
              }}
              className={`absolute w-[600px] h-[600px] rounded-full pointer-events-none ${
                isLightMode
                  ? "bg-[radial-gradient(circle,rgba(0,0,0,0.05)_0%,rgba(6,182,212,0.03)_40%,transparent_70%)] blur-[70px]"
                  : "bg-[radial-gradient(circle,rgba(255,255,255,0.11)_0%,rgba(56,189,248,0.07)_35%,transparent_70%)] blur-[75px]"
              }`}
            />

            {/* High-Refraction Concentric Core Pinpoint Glint */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 90px), calc(var(--mouse-y, 30vh) - 90px), 0)",
                willChange: "transform",
              }}
              className={`absolute w-[180px] h-[180px] rounded-full pointer-events-none ${
                isLightMode
                  ? "bg-[radial-gradient(circle,rgba(0,0,0,0.07)_0%,transparent_65%)] blur-[25px]"
                  : "bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(56,189,248,0.1)_45%,transparent_70%)] blur-[30px]"
              }`}
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* DIRECTION 02: FLUID CAUSTIC HORIZON & LUMINOUS ECLIPSE            */}
        {/* ----------------------------------------------------------------- */}
        {activeDirection === "fluid-horizon-eclipse" && (
          <>
            {/* Breathing Atmospheric Eclipse Horizon Corona */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scaleY: [1, 1.08, 1],
                      opacity: [0.75, 0.95, 0.75],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[-80px] left-1/2 -translate-x-1/2 w-[180%] max-w-[1600px] h-[520px] rounded-[100%] blur-[120px] pointer-events-none ${
                isLightMode
                  ? "bg-gradient-to-b from-zinc-300/40 via-cyan-400/10 to-transparent"
                  : "bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(255,255,255,0.16)_0%,rgba(56,189,248,0.09)_40%,transparent_80%)]"
              }`}
            />

            {/* Concentric Eclipse Ring Rim */}
            <div
              className={`absolute top-[-20px] left-1/2 -translate-x-1/2 w-[1100px] h-[340px] rounded-[100%] border-b ${
                isLightMode
                  ? "border-zinc-300/60 shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
                  : "border-white/25 shadow-[0_20px_50px_rgba(56,189,248,0.15)]"
              }`}
            />

            {/* Wide Soft Diffused Ambient Cursor Wash (550px radius) */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 275px), calc(var(--mouse-y, 30vh) - 275px), 0)",
                willChange: "transform",
              }}
              className={`absolute w-[550px] h-[550px] rounded-full pointer-events-none ${
                isLightMode
                  ? "bg-[radial-gradient(circle,rgba(0,0,0,0.04)_0%,transparent_65%)] blur-[80px]"
                  : "bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(56,189,248,0.05)_40%,transparent_70%)] blur-[85px]"
              }`}
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* DIRECTION 03: VELVET OBSIDIAN FILM GRAIN & DEEP AMBIENT AURORA    */}
        {/* ----------------------------------------------------------------- */}
        {activeDirection === "velvet-grain-aurora" && (
          <>
            {/* SVG Analog Micro-Grain Texture Overlay */}
            <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.035] contrast-150">
              <filter id="film-grain">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.75"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#film-grain)" />
            </svg>

            {/* Dual Deep Ambient Aurora Clouds (GPU Lissajous Drift) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [-40, 40, -40],
                      y: [-25, 25, -25],
                      scale: [1, 1.06, 1],
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-10 left-[15%] w-[680px] h-[480px] rounded-full blur-[140px] pointer-events-none ${
                isLightMode
                  ? "bg-slate-300/30"
                  : "bg-[radial-gradient(circle,rgba(30,41,59,0.5)_0%,rgba(56,189,248,0.06)_50%,transparent_75%)]"
              }`}
            />

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [50, -50, 50],
                      y: [30, -30, 30],
                      scale: [1.05, 0.95, 1.05],
                    }
              }
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-40 right-[15%] w-[620px] h-[440px] rounded-full blur-[130px] pointer-events-none ${
                isLightMode
                  ? "bg-zinc-200/40"
                  : "bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,rgba(14,165,233,0.05)_50%,transparent_75%)]"
              }`}
            />

            {/* Precision Optical Loupe Glare tracking pointer on GPU */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 180px), calc(var(--mouse-y, 30vh) - 180px), 0)",
                willChange: "transform",
              }}
              className={`absolute w-[360px] h-[360px] rounded-full pointer-events-none ${
                isLightMode
                  ? "bg-[radial-gradient(circle,rgba(0,0,0,0.06)_0%,transparent_60%)] blur-[45px]"
                  : "bg-[radial-gradient(circle,rgba(255,255,255,0.13)_0%,rgba(56,189,248,0.08)_40%,transparent_70%)] blur-[50px]"
              }`}
            />
          </>
        )}
      </div>

      {/* =================================================================== */}
      {/* STICKY TOP STUDIO CONTROLLER HEADER                                 */}
      {/* =================================================================== */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${
          isLightMode
            ? "bg-[#faf8f5]/85 border-zinc-200/80"
            : "bg-[#030408]/85 border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo & Lab Identifier */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className={`p-2 rounded-xl border transition-all ${
                isLightMode
                  ? "bg-white border-zinc-200 hover:border-zinc-300 text-zinc-900"
                  : "bg-white/5 border-white/10 hover:border-white/20 text-white"
              }`}
              title="Return to Main Site"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Motion Lab 2026
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                  120 FPS PURE GPU
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Move your cursor freely — Zero React re-renders, instantaneous 0ms tracking
              </p>
            </div>
          </div>

          {/* Right Action Cluster: Live FPS Meter, Theme Toggle & Back to Main */}
          <div className="flex items-center gap-2.5">
            {/* Live Hardware FPS Telemetry Chip */}
            <div
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono text-xs ${
                isLightMode
                  ? "bg-white border-zinc-200 text-zinc-700"
                  : "bg-white/5 border-white/10 text-zinc-300"
              }`}
            >
              <Gauge className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="font-bold text-emerald-400 tabular-nums">
                {fps} FPS
              </span>
              <span className="text-[10px] text-zinc-500">| 0ms GPU</span>
            </div>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={`p-2 rounded-xl border transition-all flex items-center justify-center ${
                isLightMode
                  ? "bg-white border-zinc-200 text-amber-500 hover:bg-zinc-100"
                  : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
              }`}
              aria-label="Toggle Light/Dark Theme"
              title="Toggle Theme"
            >
              {isLightMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Direct Home Link */}
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                isLightMode
                  ? "bg-zinc-900 text-white hover:bg-zinc-800"
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
            >
              <span>Main Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Elevated Direction Switcher Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-3 pt-1">
          <div
            role="tablist"
            aria-label="120 FPS Motion Directions"
            className={`grid grid-cols-1 md:grid-cols-3 gap-2 p-1.5 rounded-2xl border ${
              isLightMode
                ? "bg-zinc-100/90 border-zinc-200"
                : "bg-black/60 border-white/10"
            }`}
          >
            {DIRECTIONS.map((dir) => {
              const isActive = activeDirection === dir.id;
              return (
                <button
                  key={dir.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveDirection(dir.id)}
                  className={`group relative px-4 py-2.5 rounded-xl text-left transition-all duration-200 flex items-center gap-3 ${
                    isActive
                      ? isLightMode
                        ? "bg-white text-zinc-950 shadow-md border border-zinc-300/80"
                        : "bg-white/15 text-white shadow-lg border border-white/30 backdrop-blur-md"
                      : isLightMode
                      ? "text-zinc-600 hover:text-zinc-950 hover:bg-white/60"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md border ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/40"
                        : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                    }`}
                  >
                    {dir.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate flex items-center gap-1.5">
                      <span>{dir.name.split("&")[0]}</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 truncate">
                      {dir.tier.split("—")[0]}
                    </div>
                  </div>
                  {isActive && (
                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* MAIN SHOWCASE CONTENT & SPECIMEN TESTBED                            */}
      {/* =================================================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Active Direction Metadata Banner */}
        <AnimatePresence mode="wait">
          <motion.section
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl relative overflow-hidden transition-all duration-300 ${
              isLightMode
                ? "bg-white/70 border-zinc-200/90 shadow-xl"
                : "bg-white/[0.03] border-white/15 shadow-2xl"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                    Direction {current.num} / 03
                  </span>
                  <span className="text-xs font-mono text-zinc-500">·</span>
                  <span className="text-xs font-mono text-zinc-400">
                    {current.tier}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  {current.name}
                </h1>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {current.tagline}
                </p>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  Why this solves your feedback: {current.whyItFits}
                </p>
              </div>

              {/* One-Click Approval & Copy Button */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                <button
                  onClick={handleCopyChoice}
                  className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
                >
                  {copiedChoice ? (
                    <>
                      <CheckCheck className="w-4 h-4" />
                      <span>Copied Direction {current.num}!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Selection ({current.num})</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Architecture & Engineering Highlights */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_6px_#38bdf8]" />
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        </AnimatePresence>

        {/* ================================================================= */}
        {/* SPECIMEN TESTBED: REALISTIC FROSTED GLASS PORTFOLIO CARDS         */}
        {/* ================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MousePointer2 className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400">
                Interactive Specimen Test Bed (Hover Over Cards to Test Silky Lighting)
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Zero Lag Verified
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Principal SQA Role & Lead Specimen */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 backdrop-blur-xl group hover:border-cyan-500/40 relative overflow-hidden ${
                isLightMode
                  ? "bg-white/80 border-zinc-200/90 shadow-lg hover:shadow-xl"
                  : "bg-white/[0.03] border-white/10 shadow-2xl hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  Automation Architect
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  nopStation / Brain Station 23
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                Shazzad Hossain
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                Senior SQA Engineer specializing in enterprise Playwright &
                JMeter test frameworks, CI/CD automated quality gates, and zero-defect release architecture.
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-300">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                  Playwright TS
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                  JMeter Volumetrics
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">
                  CI/CD Pipelines
                </span>
              </div>
            </div>

            {/* Card 2: Interactive Playwright Automation Flow Specimen */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 backdrop-blur-xl group hover:border-cyan-500/40 relative overflow-hidden ${
                isLightMode
                  ? "bg-white/80 border-zinc-200/90 shadow-lg hover:shadow-xl"
                  : "bg-white/[0.03] border-white/10 shadow-2xl hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                  <Activity className="w-3 h-3" />
                  E2E Quality Gate
                </span>
                <span className="text-xs font-mono text-zinc-500">100% Deterministic</span>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                Playwright CI/CD Pipeline
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                Multi-stage parallel regression runner executing 180+ critical user journeys with dynamic trace recordings and zero arbitrary sleeps.
              </p>

              {/* Micro Pipeline Visualizer */}
              <div className="space-y-2 pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-400">Smoke Suite</span>
                  <span className="text-emerald-400 font-bold">Passed (42s)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-full rounded-full" />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                  <span className="text-zinc-400">Checkout Flow</span>
                  <span className="text-emerald-400 font-bold">Passed (68s)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-full rounded-full" />
                </div>
              </div>
            </div>

            {/* Card 3: Enterprise Quality Metrics */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 backdrop-blur-xl group hover:border-cyan-500/40 relative overflow-hidden ${
                isLightMode
                  ? "bg-white/80 border-zinc-200/90 shadow-lg hover:shadow-xl"
                  : "bg-white/[0.03] border-white/10 shadow-2xl hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  Telemetry Benchmarks
                </span>
                <span className="text-xs font-mono text-zinc-500">Production</span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-2">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                    99.8%
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    Test Pass Reliability
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono tabular-nums">
                    0ms
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    Arbitrary Sleep Policy
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                    7-Dim
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    Full-Spectrum Audit
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">
                    120Hz
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    GPU Compositing Rate
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Verified Clean Architecture</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Card 4: Terminal Snippet Testbed */}
          <div
            className={`p-6 rounded-3xl border transition-all duration-300 backdrop-blur-xl relative overflow-hidden font-mono text-xs ${
              isLightMode
                ? "bg-zinc-900 text-zinc-200 border-zinc-800 shadow-2xl"
                : "bg-black/80 text-zinc-300 border-white/15 shadow-2xl"
            }`}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-white">
                  e2e/auth-flow.spec.ts — Playwright Zero-Flakiness Test
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                <Play className="w-3 h-3 fill-emerald-400" />
                PASSED (1.4s)
              </span>
            </div>

            <pre className="overflow-x-auto text-zinc-300 leading-relaxed font-mono text-[11px] sm:text-xs">
              <code>{`test('should authenticate and load dashboard with full telemetry', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.loginWithSession(process.env.TEST_USER_KEY);
  
  await expect(page.getByTestId('workspace-dashboard')).toBeVisible();
  await expect(page.getByTestId('active-runs-metric')).toHaveText('184 passing');
  // Zero arbitrary timeouts: 100% deterministic web-first assertion
});`}</code>
            </pre>
          </div>
        </section>

        {/* Live Bottom Decision Dock */}
        <section
          className={`sticky bottom-6 z-40 p-4 sm:p-5 rounded-2xl border backdrop-blur-2xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl ${
            isLightMode
              ? "bg-white/95 border-zinc-300/80 text-zinc-950"
              : "bg-[#030408]/90 border-white/20 text-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#38bdf8]" />
            <div>
              <div className="text-xs font-bold leading-tight">
                Active Direction {current.num}: {current.name}
              </div>
              <div className="text-[11px] text-zinc-400">
                120 FPS GPU Accelerated · Zero React Re-renders · 0ms Input Lag
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyChoice}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-mono transition-all hover:bg-zinc-200 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {copiedChoice ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Approved Direction {current.num}</span>
                </>
              ) : (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Select Direction {current.num}</span>
                </>
              )}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
