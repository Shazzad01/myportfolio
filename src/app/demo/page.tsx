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
} from "lucide-react";

type GradientOption = "mesh-aurora" | "cyber-conic" | "sunset-prismatic";

interface OptionMeta {
  id: GradientOption;
  name: string;
  tagline: string;
  vibe: string;
  palette: string[];
  recommended?: boolean;
  effectDescription: string;
  cssSpecs: string;
}

const GRADIENT_OPTIONS: OptionMeta[] = [
  {
    id: "mesh-aurora",
    name: "Option 1: Cosmic Liquid Mesh Aurora",
    tagline: "Multi-Layer Fluid Liquid Gradient Mesh with Drifting Luminous Blobs & Top Specular Beam",
    vibe: "Stripe & Linear — Organic, fluid luxury tech, hypnotic glass refraction",
    recommended: true,
    palette: [
      "Electric Cyan (#06b6d4)",
      "Royal Indigo (#4f46e5)",
      "Cosmic Violet (#7c3aed)",
      "Deep Rose (#be185d)",
    ],
    effectDescription:
      "4 large radial gradient orbs (blur-[140px] to blur-[180px]) continuously drift in smooth elliptical orbits. A cold specular beam illuminates the top horizon, casting realistic downward illumination across glass cards.",
    cssSpecs: `/* Cosmic Liquid Mesh Aurora */
background-color: #040612;
/* 4 Drifting GPU-Accelerated Luminous Orbs */
Orb 1 (Cyan): radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, transparent 60%) [drift: 22s]
Orb 2 (Indigo): radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 65%) [drift: 26s]
Orb 3 (Violet): radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, transparent 60%) [drift: 30s]
Orb 4 (Deep Rose): radial-gradient(circle, rgba(190, 24, 93, 0.12) 0%, transparent 55%) [drift: 24s]
/* Top Horizon Specular Beam */
linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(6, 182, 212, 0.06) 40%, transparent 100%)`,
  },
  {
    id: "cyber-conic",
    name: "Option 2: Cybernetic Horizon Pulse & Conic Spotlight",
    tagline: "Sweeping 360° Conic Gradient Radar, Pulsing Laser Horizon Beam & High-Speed Data Streaks",
    vibe: "Raycast & Vercel — High-energy automated control plane, telemetry radar",
    palette: [
      "Electric Cyan (#00f2fe)",
      "Emerald Pass (#10b981)",
      "Deep Royal Navy (#0f172a)",
      "Neon Lime (#84cc16)",
    ],
    effectDescription:
      "A slow-revolving conic gradient halo radiates from the top-center, creating sweeping ambient light waves. A glowing laser horizon bar pulses across the header, with vertical gradient data beams fading in and out.",
    cssSpecs: `/* Cybernetic Horizon Pulse */
background-color: #02040a;
/* Rotating Conic Gradient Radar */
conic-gradient(from 0deg at 50% 10%, rgba(6, 182, 212, 0.18), rgba(16, 185, 129, 0.12), transparent 45%, rgba(6, 182, 212, 0.18))
/* Glowing Pulsing Laser Horizon Bar */
linear-gradient(90deg, transparent 0%, #00f2fe 30%, #10b981 70%, transparent 100%) [box-shadow: 0 0 25px rgba(0, 242, 254, 0.5)]`,
  },
  {
    id: "sunset-prismatic",
    name: "Option 3: Prismatic Sunset Glass Refraction",
    tagline: "Bold Warm & Cool Contrast — Twilight Navy Merging into Radiant Amber, Rose & Ultra-Violet",
    vibe: "Awwwards & Minimal Gallery — Distinctive, warm luxury, iridescent glass caustic reflections",
    palette: [
      "Sunset Rose (#f43f5e)",
      "Radiant Amber (#f59e0b)",
      "Ultra Violet (#8b5cf6)",
      "Twilight Navy (#070913)",
    ],
    effectDescription:
      "Warm sunset amber and radiant rose collide with ultra-violet using screen blending, creating glowing iridescent caustics that pulse gently. Replaces cold developer blues with rich, warm, bespoke confidence.",
    cssSpecs: `/* Prismatic Sunset Glass Refraction */
background-color: #070913;
/* Multi-Stop Blended Sunset Mesh */
radial-gradient(ellipse at 70% 15%, rgba(244, 63, 94, 0.18) 0%, transparent 55%)
radial-gradient(circle at 25% 30%, rgba(245, 158, 11, 0.16) 0%, transparent 50%)
radial-gradient(circle at 50% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)
/* Caustic Shimmer Light Bar */
linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(244, 63, 94, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)`,
  },
];

export default function GradientDemoLaboratory() {
  const [activeOption, setActiveOption] = useState<GradientOption>("mesh-aurora");
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [copiedChoice, setCopiedChoice] = useState<boolean>(false);
  const [copiedCss, setCopiedCss] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  const current =
    GRADIENT_OPTIONS.find((opt) => opt.id === activeOption) ||
    GRADIENT_OPTIONS[0];

  const handleCopyChoice = () => {
    navigator.clipboard.writeText(
      `I choose Gradient Background: ${current.name} (${current.id})`
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
        isLightMode ? "light bg-[#faf8f5] text-zinc-950" : "dark bg-[#040612] text-white"
      }`}
    >
      {/* =================================================================== */}
      {/* DYNAMIC GRADIENT & EFFECT ENGINE LAYER                              */}
      {/* =================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-700">
        {/* =============================================================== */}
        {/* OPTION 1: COSMIC LIQUID MESH AURORA                             */}
        {/* =============================================================== */}
        {activeOption === "mesh-aurora" && (
          <div className="absolute inset-0">
            {/* Top Specular Horizon Downward Beam */}
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 w-[160%] max-w-[1500px] h-[400px] rounded-[100%] blur-[130px] pointer-events-none transition-opacity duration-700 ${
                isLightMode
                  ? "bg-gradient-to-b from-indigo-500/15 via-cyan-400/10 to-transparent"
                  : "bg-gradient-to-b from-white/18 via-cyan-400/12 to-transparent"
              }`}
            />

            {/* Drifting Luminous Blob 1: Electric Cyan (Upper-Left to Center) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, 80, -40, 0],
                      y: [0, -60, 40, 0],
                      scale: [1, 1.15, 0.92, 1],
                    }
              }
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[8%] left-[8%] w-[620px] h-[620px] rounded-full blur-[140px] pointer-events-none ${
                isLightMode ? "bg-cyan-500/20" : "bg-[#06b6d4]/[0.18]"
              }`}
            />

            {/* Drifting Luminous Blob 2: Royal Indigo (Mid-Right to Upper-Center) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, -90, 50, 0],
                      y: [0, 70, -35, 0],
                      scale: [1, 0.88, 1.12, 1],
                    }
              }
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[22%] right-[6%] w-[680px] h-[680px] rounded-full blur-[150px] pointer-events-none ${
                isLightMode ? "bg-indigo-500/20" : "bg-[#4f46e5]/[0.17]"
              }`}
            />

            {/* Drifting Luminous Blob 3: Cosmic Violet (Lower-Left to Center) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, 60, -70, 0],
                      y: [0, -45, 60, 0],
                      scale: [1, 1.1, 0.95, 1],
                    }
              }
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[52%] left-[16%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none ${
                isLightMode ? "bg-purple-600/18" : "bg-[#7c3aed]/[0.15]"
              }`}
            />

            {/* Drifting Luminous Blob 4: Deep Rose / Magenta (Bottom-Right) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, -50, 40, 0],
                      y: [0, 50, -40, 0],
                      scale: [1, 0.95, 1.08, 1],
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[68%] right-[18%] w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none ${
                isLightMode ? "bg-rose-500/15" : "bg-[#be185d]/[0.13]"
              }`}
            />
          </div>
        )}

        {/* =============================================================== */}
        {/* OPTION 2: CYBERNETIC HORIZON PULSE & CONIC SPOTLIGHT            */}
        {/* =============================================================== */}
        {activeOption === "cyber-conic" && (
          <div className="absolute inset-0">
            {/* Revolving Conic Gradient Radar Halo */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 360],
                    }
              }
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-[140px] pointer-events-none ${
                isLightMode
                  ? "bg-[conic-gradient(from_0deg_at_50%_50%,rgba(6,182,212,0.2),rgba(16,185,129,0.15),transparent_40%,rgba(6,182,212,0.2))]"
                  : "bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,242,254,0.22),rgba(16,185,129,0.16),transparent_40%,rgba(0,242,254,0.22))]"
              }`}
            />

            {/* Glowing Laser Horizon Beam at Header */}
            <div className="absolute top-[88px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00f2fe] opacity-80" />

            {/* Pulsing Emerald Pass Glow Hub (Lower Center) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.25, 1],
                      opacity: [0.6, 0.9, 0.6],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[160px] pointer-events-none ${
                isLightMode ? "bg-emerald-500/15" : "bg-emerald-500/[0.14]"
              }`}
            />

            {/* Vertical Speed Trail Accents */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_30%,rgba(2,4,10,0.85)_100%)] pointer-events-none" />
          </div>
        )}

        {/* =============================================================== */}
        {/* OPTION 3: PRISMATIC SUNSET GLASS REFRACTION                     */}
        {/* =============================================================== */}
        {activeOption === "sunset-prismatic" && (
          <div className="absolute inset-0">
            {/* Top Caustic Sunset Light Bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-[380px] blur-[130px] pointer-events-none ${
                isLightMode
                  ? "bg-gradient-to-b from-amber-500/20 via-rose-500/15 to-transparent"
                  : "bg-gradient-to-b from-amber-400/18 via-rose-500/15 to-transparent"
              }`}
            />

            {/* Luminous Warm Amber Orb (Upper Left) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, 70, -30, 0],
                      y: [0, -40, 50, 0],
                      scale: [1, 1.12, 0.94, 1],
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[12%] left-[10%] w-[620px] h-[620px] rounded-full blur-[140px] pointer-events-none ${
                isLightMode ? "bg-amber-500/22" : "bg-[#f59e0b]/[0.18]"
              }`}
            />

            {/* Luminous Sunset Rose Orb (Upper Right) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, -60, 40, 0],
                      y: [0, 60, -30, 0],
                      scale: [1, 0.92, 1.1, 1],
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[20%] right-[10%] w-[650px] h-[650px] rounded-full blur-[150px] pointer-events-none ${
                isLightMode ? "bg-rose-500/20" : "bg-[#f43f5e]/[0.17]"
              }`}
            />

            {/* Luminous Ultra-Violet Caustic (Lower Center) */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, 40, -50, 0],
                      y: [0, -30, 40, 0],
                    }
              }
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute top-[55%] left-1/2 -translate-x-1/2 w-[750px] h-[600px] rounded-full blur-[160px] pointer-events-none ${
                isLightMode ? "bg-purple-600/18" : "bg-[#8b5cf6]/[0.16]"
              }`}
            />
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* STICKY CONTROL & NAVIGATION HEADER                                  */}
      {/* =================================================================== */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${
          isLightMode
            ? "bg-white/80 border-black/10 shadow-sm"
            : "bg-[#040612]/80 border-white/10 shadow-2xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Gradient Effects Lab
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                  REAL-TIME EFFECTS
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Live interactive testing of animated gradient backgrounds
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
                  <span>Approve This Gradient</span>
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

        {/* Gradient Switcher Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-3 pt-1">
          <div
            role="tablist"
            aria-label="Gradient effect options"
            className={`grid grid-cols-1 md:grid-cols-3 gap-2.5 p-1.5 rounded-2xl border ${
              isLightMode
                ? "bg-zinc-100/90 border-zinc-200"
                : "bg-black/50 border-white/10"
            }`}
          >
            {GRADIENT_OPTIONS.map((opt) => {
              const isActive = activeOption === opt.id;
              return (
                <button
                  key={opt.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveOption(opt.id)}
                  className={`relative px-4 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isLightMode
                        ? "bg-white text-zinc-950 font-semibold shadow-md border border-zinc-300"
                        : "bg-white/15 text-white font-semibold shadow-xl border border-white/25"
                      : isLightMode
                      ? "text-zinc-600 hover:text-zinc-950 hover:bg-white/50"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold">
                      {opt.id === "mesh-aurora"
                        ? "1. Cosmic Liquid Mesh Aurora"
                        : opt.id === "cyber-conic"
                        ? "2. Cybernetic Pulse & Conic Radar"
                        : "3. Prismatic Sunset Refraction"}
                    </span>
                    {opt.recommended && (
                      <span className="text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-400/40">
                        TOP PICK
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                    {opt.id === "mesh-aurora"
                      ? "Stripe / Linear — 4 Drifting fluid blobs + specular beam"
                      : opt.id === "cyber-conic"
                      ? "Raycast — 360° Conic radar + glowing laser horizon"
                      : "Awwwards — Warm amber & rose caustics + twilight navy"}
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all ${
              isLightMode
                ? "bg-white/75 border-zinc-200 shadow-xl"
                : "bg-white/[0.035] border-t-white/35 border-white/10 shadow-2xl"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                    Active Gradient Effect
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
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans italic">
                  {current.effectDescription}
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
                      <span>Apply This Gradient To Main Site</span>
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

            {/* Color Palette Chips */}
            <div className="mt-6 pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mr-2">
                Harmonic Palette:
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
                Glass Refraction Test Bed (Watch How The Glass Catches Moving Colors)
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
                    : "bg-white/[0.03] border-t-white/40 border-white/10 shadow-2xl hover:bg-white/[0.05]"
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
                : "bg-black/75 text-zinc-200 border-t-white/35 border-white/10"
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

          {/* Test Specimen 3: Authority Banner */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${
              isLightMode
                ? "bg-white/80 border-zinc-200 shadow-xl"
                : "bg-white/[0.035] border-t-white/35 border-white/10 shadow-2xl"
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
                Active Gradient CSS Architecture Specification
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
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#06b6d4]" />
            <div>
              <div className="text-xs font-bold leading-tight">
                Previewing: {current.name.split(":")[0]}
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Click button to approve and apply to your main site
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyChoice}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 hover:opacity-95 text-white transition-all shadow-md hover:shadow-cyan-500/25 cursor-pointer whitespace-nowrap"
          >
            {copiedChoice ? "Copied!" : "Approve This Gradient"}
          </button>
        </div>
      </div>
    </div>
  );
}
