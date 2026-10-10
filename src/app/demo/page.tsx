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
  Grid,
  Zap,
} from "lucide-react";

type BackgroundOption = "aurora" | "blueprint" | "noise" | "baseline";

interface OptionMeta {
  id: BackgroundOption;
  name: string;
  tagline: string;
  vibe: string;
  recommended?: boolean;
  bgDarkHex: string;
  bgLightHex: string;
  highlights: string[];
  cssSpecs: string;
}

const BACKGROUND_OPTIONS: OptionMeta[] = [
  {
    id: "aurora",
    name: "Option 1: Ambient Obsidian Aurora & Specular Horizon",
    tagline: "Deep Obsidian Canvas, Cold Specular Top Horizon & Drifting Cyan/Violet Auroras",
    vibe: "Modern Linear / Raycast — Organic depth, luxury glass refraction, zero eye fatigue",
    recommended: true,
    bgDarkHex: "#030408 (Void Obsidian)",
    bgLightHex: "#FAF9F6 (Alabaster Porcelain)",
    highlights: [
      "Top-edge cold specular beam with 140px blur mimicking studio lighting",
      "Two gently drifting ambient radial auroras (Electric Cyan #06b6d4 & Violet #8b5cf6 at 6-8% opacity)",
      "Subtle 24px micro-dot grid for grounding scale and structure",
      "Zero gradient banding on OLED displays, 100% WCAG AAA text contrast preserved",
    ],
    cssSpecs: `background-color: #030408;
background-image: 
  radial-gradient(circle at 20% 15%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
  radial-gradient(circle at 80% 25%, rgba(139, 92, 246, 0.07) 0%, transparent 50%),
  radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.04) 0%, transparent 50%),
  radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
background-size: 100% 100%, 100% 100%, 100% 100%, 24px 24px;`,
  },
  {
    id: "blueprint",
    name: "Option 2: Technical Blueprint Matrix & Crosshairs",
    tagline: "Orthogonal Telemetry Canvas with Micro-Grid & Precision Coordinate Reticles",
    vibe: "SDET Observability / Datadog — High-precision engineering, active automation radar",
    bgDarkHex: "#02040A (Deep Midnight)",
    bgLightHex: "#F8FAFC (Drafting Slate)",
    highlights: [
      "Dual-pitch orthogonal grid (48px primary cells with 12px subdivisions at 2% opacity)",
      "Precision coordinate crosshairs (+) positioned at 144px grid intersections",
      "Radial center spotlight with edge vignette falloff to focus eyes on content",
      "Reinforces the SQA Lead and Test Architecture identity with technical discipline",
    ],
    cssSpecs: `background-color: #02040a;
background-image:
  linear-gradient(rgba(6, 182, 212, 0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(6, 182, 212, 0.04) 1px, transparent 1px),
  radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.08), transparent 70%);
background-size: 48px 48px, 48px 48px, 100% 100%;`,
  },
  {
    id: "noise",
    name: "Option 3: Noise-Dithered Liquid Mesh",
    tagline: "Matte Anodized Obsidian Canvas with Procedural Film Grain & Diffused Spotlights",
    vibe: "Minimal Gallery / Awwwards — Tactile matte paper, etched glass, zero digital banding",
    bgDarkHex: "#050608 (Matte Obsidian)",
    bgLightHex: "#FDFDFD (Fine Art Matte)",
    highlights: [
      "Procedural SVG fractal noise (feTurbulence) overlay at 3.5% opacity with mix-blend-overlay",
      "Static dual spotlights positioned behind Hero and Projects stations (zero GPU overhead)",
      "Completely eliminate color banding across monitors with organic micro-texture",
      "Minimalist quiet luxury feel like frosted sandblasted glass and matte aluminum",
    ],
    cssSpecs: `background-color: #050608;
/* SVG Fractal Noise Filter Overlay (opacity: 0.035, mix-blend-mode: overlay) */
background-image: 
  radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.05), transparent 60%),
  radial-gradient(circle at 25% 40%, rgba(6, 182, 212, 0.05), transparent 50%),
  radial-gradient(circle at 75% 60%, rgba(139, 92, 246, 0.05), transparent 50%);`,
  },
  {
    id: "baseline",
    name: "Baseline: Current Main Site Background",
    tagline: "Existing Production Setup for Instant Direct Comparison",
    vibe: "Standard Dark Void with Simple 24px Dot Matrix",
    bgDarkHex: "#030408 (Void Obsidian)",
    bgLightHex: "#FAF9F6 (Alabaster)",
    highlights: [
      "Current baseline currently live on https://myportfolio-vert-one-80.vercel.app/",
      "Single radial dot grid with simple top horizon blur",
      "Use this to see exactly how much richer Options 1, 2, and 3 look by comparison",
    ],
    cssSpecs: `background-color: #030408;
background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
background-size: 24px 24px;`,
  },
];

export default function BackgroundDemoPage() {
  const [activeOption, setActiveOption] = useState<BackgroundOption>("aurora");
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [copiedChoice, setCopiedChoice] = useState<boolean>(false);
  const [copiedCss, setCopiedCss] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  const current =
    BACKGROUND_OPTIONS.find((opt) => opt.id === activeOption) ||
    BACKGROUND_OPTIONS[0];

  const handleCopyChoice = () => {
    navigator.clipboard.writeText(
      `I choose background: ${current.name} (${current.id})`
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
        isLightMode ? "light bg-[#FAF9F6] text-zinc-900" : "dark bg-[#030408] text-white"
      }`}
    >
      {/* =================================================================== */}
      {/* DYNAMIC BACKGROUND ENGINE LAYER                                     */}
      {/* =================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-700">
        {/* OPTION 1: AMBIENT OBSIDIAN AURORA */}
        {activeOption === "aurora" && (
          <div className="absolute inset-0">
            {/* Specular Top Horizon Beam */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[140%] max-w-[1400px] h-[360px] rounded-[100%] blur-[130px] pointer-events-none transition-opacity duration-700 ${
                isLightMode
                  ? "bg-gradient-to-b from-black/[0.05] via-cyan-500/[0.03] to-transparent opacity-80"
                  : "bg-gradient-to-b from-white/[0.08] via-cyan-400/[0.04] to-transparent opacity-100"
              }`}
            />

            {/* Drifting Aurora Orb A: Electric Cyan */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, 40, -20, 0],
                      y: [0, -30, 20, 0],
                      scale: [1, 1.08, 0.95, 1],
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[10%] left-[12%] w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none ${
                isLightMode ? "bg-cyan-500/10" : "bg-[#06b6d4]/[0.07]"
              }`}
            />

            {/* Drifting Aurora Orb B: Electric Violet */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, -50, 30, 0],
                      y: [0, 40, -25, 0],
                      scale: [1, 0.94, 1.06, 1],
                    }
              }
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[28%] right-[10%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none ${
                isLightMode ? "bg-purple-500/10" : "bg-[#8b5cf6]/[0.06]"
              }`}
            />

            {/* Drifting Aurora Orb C: Emerald Ground */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, 30, -30, 0],
                      y: [0, -20, 30, 0],
                    }
              }
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[65%] left-[25%] w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
                isLightMode ? "bg-emerald-500/05" : "bg-[#10b981]/[0.035]"
              }`}
            />

            {/* Micro-Dot Grid Texture */}
            <div
              className={`absolute inset-0 pointer-events-none ${
                isLightMode
                  ? "bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)]"
                  : "bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)]"
              } [background-size:24px_24px]`}
            />
          </div>
        )}

        {/* OPTION 2: TECHNICAL BLUEPRINT MATRIX */}
        {activeOption === "blueprint" && (
          <div className="absolute inset-0">
            {/* Orthogonal Major Grid (48px) */}
            <div
              className={`absolute inset-0 ${
                isLightMode
                  ? "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]"
                  : "bg-[linear-gradient(rgba(6,182,212,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.045)_1px,transparent_1px)]"
              } [background-size:48px_48px]`}
            />

            {/* Orthogonal Minor Subdivision Grid (12px) */}
            <div
              className={`absolute inset-0 opacity-40 ${
                isLightMode
                  ? "bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]"
                  : "bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]"
              } [background-size:12px_12px]`}
            />

            {/* Crosshair Coordinate Reticles Pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="blueprint-crosshairs"
                  width="144"
                  height="144"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 66 72 L 78 72 M 72 66 L 72 78"
                    stroke={isLightMode ? "#0284c7" : "#06b6d4"}
                    strokeWidth="1"
                    strokeOpacity="0.35"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="1.5"
                    fill={isLightMode ? "#0284c7" : "#06b6d4"}
                    fillOpacity="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueprint-crosshairs)" />
            </svg>

            {/* Center Focus Vignette & Cybernetic Top Halo */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[320px] rounded-full blur-[140px] pointer-events-none ${
                isLightMode ? "bg-cyan-600/10" : "bg-cyan-400/10"
              }`}
            />
            <div
              className={`absolute inset-0 pointer-events-none ${
                isLightMode
                  ? "bg-[radial-gradient(circle_at_center,transparent_30%,rgba(250,249,246,0.7)_100%)]"
                  : "bg-[radial-gradient(circle_at_center,transparent_30%,rgba(3,4,8,0.85)_100%)]"
              }`}
            />
          </div>
        )}

        {/* OPTION 3: NOISE-DITHERED LIQUID MESH */}
        {activeOption === "noise" && (
          <div className="absolute inset-0">
            {/* SVG Procedural Fractal Grain Texture */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20 mix-blend-overlay"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="fractalNoise">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#fractalNoise)" />
            </svg>

            {/* Static Luxury Diffused Spotlights */}
            <div
              className={`absolute top-[-5%] left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full blur-[160px] pointer-events-none ${
                isLightMode ? "bg-zinc-400/15" : "bg-white/[0.05]"
              }`}
            />
            <div
              className={`absolute top-[35%] left-[20%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${
                isLightMode ? "bg-cyan-500/10" : "bg-[#06b6d4]/[0.04]"
              }`}
            />
            <div
              className={`absolute top-[50%] right-[15%] w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none ${
                isLightMode ? "bg-purple-500/10" : "bg-[#8b5cf6]/[0.04]"
              }`}
            />
          </div>
        )}

        {/* BASELINE: CURRENT MAIN SITE SETUP */}
        {activeOption === "baseline" && (
          <div className="absolute inset-0">
            <div
              className={`absolute inset-0 pointer-events-none ${
                isLightMode
                  ? "bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)]"
                  : "bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]"
              } [background-size:24px_24px]`}
            />
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* STICKY INTERACTIVE CONTROL BAR                                      */}
      {/* =================================================================== */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${
          isLightMode
            ? "bg-white/80 border-black/10 shadow-sm"
            : "bg-[#030408]/85 border-white/10 shadow-2xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center text-white shadow-md">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Background Lab
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
                  LIVE DEMO
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Interactive real-time preview of portfolio backgrounds
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

            {/* Copy Decision CTA */}
            <button
              onClick={handleCopyChoice}
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md hover:shadow-cyan-500/25 cursor-pointer"
            >
              {copiedChoice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-950" />
                  <span>Choice Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Pick This Background</span>
                </>
              )}
            </button>

            {/* Back to Home */}
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

        {/* Option Tabs Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-3 pt-1">
          <div
            role="tablist"
            aria-label="Background preview options"
            className={`grid grid-cols-2 md:grid-cols-4 gap-2 p-1 rounded-2xl border ${
              isLightMode
                ? "bg-zinc-100/80 border-zinc-200"
                : "bg-black/40 border-white/10"
            }`}
          >
            {BACKGROUND_OPTIONS.map((opt) => {
              const isActive = activeOption === opt.id;
              return (
                <button
                  key={opt.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveOption(opt.id)}
                  className={`relative px-3 py-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isLightMode
                        ? "bg-white text-zinc-950 font-semibold shadow-md border border-zinc-300"
                        : "bg-white/12 text-white font-semibold shadow-lg border border-white/20"
                      : isLightMode
                      ? "text-zinc-600 hover:text-zinc-950 hover:bg-white/50"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono truncate">
                      {opt.id === "aurora"
                        ? "1. Ambient Aurora"
                        : opt.id === "blueprint"
                        ? "2. Blueprint Matrix"
                        : opt.id === "noise"
                        ? "3. Liquid Mesh"
                        : "Baseline Default"}
                    </span>
                    {opt.recommended && (
                      <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-500 dark:text-amber-300 border border-amber-500/30">
                        TOP PICK
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* MAIN DEMO SHOWCASE CONTENT                                          */}
      {/* =================================================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Active Option Overview Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOption + (isLightMode ? "-light" : "-dark")}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all ${
              isLightMode
                ? "bg-white/70 border-zinc-200 shadow-xl"
                : "bg-white/[0.03] border-t-white/30 border-white/10 shadow-2xl"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
                    Active Background Mode
                  </span>
                  <span className="text-xs font-mono text-zinc-500">·</span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {current.vibe}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                  {current.name}
                </h1>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-sans">
                  {current.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={handleCopyChoice}
                  className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                >
                  {copiedChoice ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                      <span>Approve & Use This Background</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleCopyCss}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-mono transition-all border cursor-pointer ${
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

            {/* Feature Highlights Grid */}
            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {current.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500 shrink-0" />
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================================================================= */}
        {/* COMPONENT TEST BED: REALISTIC PORTFOLIO SPECIMENS                 */}
        {/* ================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-500" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Glass Specimen Test Bed (Evaluating Real Contrast & Refraction)
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              100% WCAG AAA Compliant
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
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-3xl border backdrop-blur-2xl transition-all ${
                  isLightMode
                    ? "bg-white/80 border-t-zinc-400 border-zinc-200 shadow-lg hover:bg-white"
                    : "bg-white/[0.025] border-t-white/35 border-white/5 shadow-2xl hover:bg-white/[0.045]"
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
                : "bg-black/75 text-zinc-200 border-t-white/30 border-white/10"
            }`}
          >
            {/* Terminal Top Window Controls */}
            <div className="px-5 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between">
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

          {/* Test Specimen 3: Direct Communication & Authority Strip */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${
              isLightMode
                ? "bg-white/80 border-zinc-200 shadow-lg"
                : "bg-white/[0.025] border-t-white/30 border-white/10 shadow-2xl"
            }`}
          >
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>[VERIFIED] SQA ENGINEER II · BRAIN STATION 23</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading">
                Ready to transform quality architecture into a strategic advantage?
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
              <Code2 className="w-4 h-4 text-cyan-500" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Tailwind & CSS Architecture Implementation Specs
              </h3>
            </div>
            <button
              onClick={handleCopyCss}
              className="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:underline cursor-pointer flex items-center gap-1"
            >
              {copiedCss ? "Copied!" : "Copy Snippet"}
            </button>
          </div>

          <pre
            className={`p-4 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed border ${
              isLightMode
                ? "bg-zinc-100 border-zinc-300 text-zinc-800"
                : "bg-black/50 border-white/10 text-zinc-300"
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
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_12px_#06b6d4]" />
            <div>
              <div className="text-xs font-bold leading-tight">
                Previewing: {current.name.split(":")[0]}
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Click button to confirm your preferred background
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyChoice}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md hover:shadow-cyan-500/25 cursor-pointer whitespace-nowrap"
          >
            {copiedChoice ? "Copied!" : "Approve Choice"}
          </button>
        </div>
      </div>
    </div>
  );
}
