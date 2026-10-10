"use client";

import { useState, useEffect, useRef } from "react";
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
  Eye,
  Zap,
  MousePointer2,
  Waves,
  Scan,
  Sparkle,
  Radio,
} from "lucide-react";

type ModernAnimationOption =
  | "cursor-glare"
  | "breathing-corona"
  | "laser-glint"
  | "specular-motes"
  | "topographic-waves";

interface AnimationMeta {
  id: ModernAnimationOption;
  num: string;
  name: string;
  tagline: string;
  vibe: string;
  recommended?: boolean;
  motionMechanics: string[];
  whyItIsModern: string;
}

const ANIMATION_VARIATIONS: AnimationMeta[] = [
  {
    id: "cursor-glare",
    num: "01",
    name: "Interactive Cursor Specular Glare",
    tagline: "Fluid Mouse-Reactive Specular Spotlight with Smooth Spring Physics Damping",
    vibe: "Linear & Raycast Signature — Tactile physical illumination, responds to your presence",
    recommended: true,
    motionMechanics: [
      "Smooth 60fps physics-damped spotlight that follows your cursor across the obsidian floor.",
      "The top 1px diamond-cut horizon catches and reflects light as your cursor approaches it.",
      "Frosted glass cards naturally illuminate and reveal frosted bevels under your cursor spotlight.",
      "Zero-gravity fallback: smoothly orbits in an infinity loop on touch devices.",
    ],
    whyItIsModern:
      "Replaces cheesy looping screensavers with reactive, human-guided lighting. The page feels like a physical luxury device you can touch.",
  },
  {
    id: "breathing-corona",
    num: "02",
    name: "Breathing Atmospheric Corona",
    tagline: "Slow Sinusoidal Horizon Pulse & Luminous Specular Expansion",
    vibe: "Apple Pro Keynote — Meditative luxury, zero visual noise, hypnotic elegance",
    motionMechanics: [
      "The specular horizon beam at the top gently breathes in a deep 10-second harmonic cycle.",
      "Scale and luminance expand and contract with organic cubic-bezier(0.16, 1, 0.3, 1) ease.",
      "Pure velvet obsidian floor stays calm and anchored, ensuring zero distraction while reading.",
      "A soft specular wave washes down gently over the hero deck every cycle.",
    ],
    whyItIsModern:
      "Calm and confident. Unlike distracting animations that fight for attention, this creates atmospheric presence that calms the eye.",
  },
  {
    id: "laser-glint",
    num: "03",
    name: "Linear Horizon Glint & Edge Shimmer",
    tagline: "Single Razor-Sharp 1px Specular Light Glint Traveling Across Diamond Horizon",
    vibe: "Stripe Press & Linear Horizon — Architectural precision, titanium edge glint",
    motionMechanics: [
      "A razor-sharp 1px diamond glint sweeps smoothly across the top horizon edge every 7 seconds.",
      "Produces a localized flare and soft trailing specular lens refraction as it passes.",
      "Subtle 120px specular halo underneath follows the glint's path across the top.",
      "100% clean, non-repetitive: gives the impression of light catching a polished bevel.",
    ],
    whyItIsModern:
      "Precision-crafted micro-motion. It looks like natural sunlight catching the polished chamfered edge of an iPhone or luxury watch.",
  },
  {
    id: "specular-motes",
    num: "04",
    name: "Zero-Gravity Specular Motes (Brownian Drift)",
    tagline: "Micro-Fine Specular Dust Particles Drifting Organically in Zero Gravity",
    vibe: "Cosmos & Minimal Gallery — Cinematic film projection beam, organic ambient life",
    motionMechanics: [
      "18 micro-fine (1.5px–2px) glowing specular particles drifting in organic 2D Brownian motion.",
      "Gentle non-linear floating: particles drift upward and across with varying physics damping.",
      "Soft breathing opacities (fading from 0 to 0.7 and back) like dust caught in a cinema light beam.",
      "NOT falling matrix lines: completely random, organic, floating zero-gravity drift.",
    ],
    whyItIsModern:
      "Organic physics-driven Brownian motion. Feels like looking through an ultra-clean optical lens into ambient space.",
  },
  {
    id: "topographic-waves",
    num: "05",
    name: "Topographic Horizon Contour Waves",
    tagline: "Concentric 1px Acoustic Ripple Contours Radiating Outward from Specular Source",
    vibe: "Awwwards & Teenage Engineering — Sound design aesthetics, architectural topography",
    motionMechanics: [
      "Ultra-fine concentric elliptical 1px contour ripples gently expanding from the horizon source.",
      "Slow, measured outward expansion (14-second wave cycle) that dissolves smoothly into the obsidian void.",
      "Subtle ice-cyan specular refraction along the crest of each contour line.",
      "Geometric discipline: gives the feeling of sound waves radiating in an anechoic audio chamber.",
    ],
    whyItIsModern:
      "Architectural and acoustic. Combines hardware product design aesthetics with subtle wave theory.",
  },
];

export default function ModernAnimationLab() {
  const [activeOption, setActiveOption] =
    useState<ModernAnimationOption>("cursor-glare");
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [copiedChoice, setCopiedChoice] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 720,
    y: 350,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const current =
    ANIMATION_VARIATIONS.find((opt) => opt.id === activeOption) ||
    ANIMATION_VARIATIONS[0];

  // Mouse tracking for Option 1: Cursor Glare
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeOption !== "cursor-glare") return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCopyChoice = () => {
    navigator.clipboard.writeText(
      `I choose Modern Animation Variation: [${current.num}] ${current.name} (${current.id})`
    );
    setCopiedChoice(true);
    setTimeout(() => setCopiedChoice(false), 2500);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden ${
        isLightMode
          ? "light bg-[#faf8f5] text-zinc-950"
          : "dark bg-[#020205] text-white"
      }`}
    >
      {/* =================================================================== */}
      {/* MONOCHROME SPECULAR HORIZON BASE (THE USER'S APPROVED CANVAS)       */}
      {/* =================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Core Velvet Obsidian Floor */}
        <div className="absolute inset-0 bg-[#020205]" />

        {/* Cold Horizon Specular Glow Base */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[180%] max-w-[1500px] h-[480px] rounded-[100%] blur-[120px] pointer-events-none transition-opacity duration-700 ${
            isLightMode
              ? "bg-gradient-to-b from-black/15 via-zinc-400/10 to-transparent"
              : "bg-[radial-gradient(ellipse_80%_45%_at_50%_0%,rgba(255,255,255,0.28)_0%,rgba(56,189,248,0.14)_30%,transparent_70%)]"
          }`}
        />

        {/* 1px Diamond-Cut Horizon Laser Line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_25px_#ffffff] opacity-90" />

        {/* =============================================================== */}
        {/* ANIMATION VARIATION 01: INTERACTIVE CURSOR SPECULAR GLARE       */}
        {/* =============================================================== */}
        {activeOption === "cursor-glare" && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Dynamic Smooth Follow Spotlight */}
            <motion.div
              animate={{
                x: mousePos.x - 300,
                y: mousePos.y - 300,
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 180,
                mass: 0.6,
              }}
              className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(56,189,248,0.08)_35%,transparent_70%)] blur-[90px]"
            />

            {/* Ambient Secondary Breathing Halo */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.1, 1],
                      opacity: [0.35, 0.55, 0.35],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full bg-cyan-400/10 blur-[140px]"
            />
          </div>
        )}

        {/* =============================================================== */}
        {/* ANIMATION VARIATION 02: BREATHING ATMOSPHERIC CORONA            */}
        {/* =============================================================== */}
        {activeOption === "breathing-corona" && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Pulsing Specular Corona Expansion */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scaleY: [1, 1.35, 1],
                      scaleX: [1, 1.12, 1],
                      opacity: [0.65, 1, 0.65],
                    }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.22)_0%,rgba(56,189,248,0.15)_35%,transparent_75%)] blur-[110px]"
            />

            {/* Deep Slow Ambient Sub-Wave */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: [0.2, 0.45, 0.2],
                      y: [0, 40, 0],
                    }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full bg-cyan-500/10 blur-[150px]"
            />
          </div>
        )}

        {/* =============================================================== */}
        {/* ANIMATION VARIATION 03: LINEAR HORIZON GLINT & EDGE SHIMMER     */}
        {/* =============================================================== */}
        {activeOption === "laser-glint" && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Razor-Sharp Traveling Diamond Glint along 1px Rim */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [-200, 1640],
                    }
              }
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
                repeatDelay: 1.5,
              }}
              className="absolute top-0 w-[220px] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_35px_#ffffff,0_0_15px_#38bdf8]"
            >
              {/* Soft Trailing Specular Cone */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[160px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.35)_0%,rgba(56,189,248,0.18)_40%,transparent_80%)] blur-[25px]" />
            </motion.div>

            {/* Subtle Horizon Counter-Pulse */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: [0.4, 0.7, 0.4],
                    }
              }
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.5,
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-white/10 blur-[130px]"
            />
          </div>
        )}

        {/* =============================================================== */}
        {/* ANIMATION VARIATION 04: ZERO-GRAVITY SPECULAR MOTES (BROWNIAN)  */}
        {/* =============================================================== */}
        {activeOption === "specular-motes" && (
          <div className="absolute inset-0 pointer-events-none">
            {/* 16 Organic Brownian Drift Specular Particles */}
            {[
              { id: 1, x: "18%", y: "22%", size: 2.2, dur: 14, dx: 45, dy: -35 },
              { id: 2, x: "28%", y: "45%", size: 1.8, dur: 18, dx: -35, dy: 40 },
              { id: 3, x: "42%", y: "18%", size: 2.5, dur: 12, dx: 50, dy: -25 },
              { id: 4, x: "55%", y: "38%", size: 1.6, dur: 16, dx: -40, dy: -45 },
              { id: 5, x: "68%", y: "26%", size: 2.0, dur: 15, dx: 30, dy: 50 },
              { id: 6, x: "82%", y: "42%", size: 1.7, dur: 20, dx: -45, dy: -30 },
              { id: 7, x: "12%", y: "65%", size: 2.4, dur: 13, dx: 35, dy: 45 },
              { id: 8, x: "35%", y: "75%", size: 1.5, dur: 19, dx: -50, dy: -40 },
              { id: 9, x: "78%", y: "70%", size: 2.1, dur: 17, dx: 40, dy: 35 },
              { id: 10, x: "48%", y: "82%", size: 1.8, dur: 21, dx: -35, dy: 45 },
              { id: 11, x: "88%", y: "15%", size: 2.6, dur: 11, dx: -40, dy: 30 },
              { id: 12, x: "62%", y: "60%", size: 1.6, dur: 22, dx: 45, dy: -35 },
            ].map((p) => (
              <motion.div
                key={p.id}
                style={{
                  left: p.x,
                  top: p.y,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        x: [0, p.dx, -p.dx * 0.7, 0],
                        y: [0, p.dy, -p.dy * 0.8, 0],
                        opacity: [0.1, 0.85, 0.3, 0.85, 0.1],
                        scale: [0.8, 1.25, 0.9, 1.25, 0.8],
                      }
                }
                transition={{
                  duration: p.dur,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_15px_#38bdf8]"
              />
            ))}
          </div>
        )}

        {/* =============================================================== */}
        {/* ANIMATION VARIATION 05: TOPOGRAPHIC CONTOUR WAVES               */}
        {/* =============================================================== */}
        {activeOption === "topographic-waves" && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Concentric Horizon Contour Waves Radiating Outward */}
            {[0, 1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [0.85, 1.45],
                        opacity: [0.55, 0],
                      }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: [0.16, 1, 0.3, 1],
                  delay: ring * 3,
                }}
                className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] rounded-[100%] border border-cyan-400/25 shadow-[0_0_20px_rgba(56,189,248,0.15)] pointer-events-none"
              />
            ))}

            {/* Central Acoustic Pulse Focal Core */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.15, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[320px] rounded-full bg-cyan-400/12 blur-[120px]"
            />
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* STICKY TOP STUDIO CONTROLLER HEADER                                 */}
      {/* =================================================================== */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${
          isLightMode
            ? "bg-white/80 border-black/10 shadow-sm"
            : "bg-[#020205]/85 border-white/10 shadow-2xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-zinc-700 via-white to-cyan-400 flex items-center justify-center text-black shadow-lg">
              <Sparkles className="w-4 h-4 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Motion Lab
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold bg-white/15 text-white border border-white/20">
                  MONOCHROME SPECULAR
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                5 Modern 2026 Animation Styles on Approved Specular Horizon
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
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold bg-white hover:bg-zinc-200 text-black transition-all shadow-lg hover:shadow-white/20 cursor-pointer"
            >
              {copiedChoice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black" />
                  <span>Choice Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Approve This Motion</span>
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

        {/* 5 Modern Animation Switcher Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-3 pt-1">
          <div
            role="tablist"
            aria-label="Modern Animation Options"
            className={`grid grid-cols-2 md:grid-cols-5 gap-2 p-1.5 rounded-2xl border ${
              isLightMode
                ? "bg-zinc-100/90 border-zinc-200"
                : "bg-black/60 border-white/10"
            }`}
          >
            {ANIMATION_VARIATIONS.map((opt) => {
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
                        : "bg-white/20 text-white font-semibold shadow-xl border border-white/35"
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
                      <span className="text-[8px] uppercase tracking-wider font-extrabold px-1.5 py-0.2 rounded bg-white text-black">
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
        {/* Active Animation Overview Card */}
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
                : "bg-white/[0.04] border-t-white/45 border-white/10 shadow-2xl"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                    Animation Style {current.num} / 05
                  </span>
                  <span className="text-xs font-mono text-zinc-500">·</span>
                  <span className="text-xs font-mono text-zinc-400">
                    {current.vibe}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                  {current.name}
                </h1>
                <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                  {current.tagline}
                </p>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  Why this is modern: {current.whyItIsModern}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={handleCopyChoice}
                  className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider bg-white hover:bg-zinc-200 text-black transition-all shadow-xl hover:shadow-white/25 cursor-pointer"
                >
                  {copiedChoice ? (
                    <>
                      <Check className="w-4 h-4 text-black" />
                      <span>Choice Copied!</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-black" />
                      <span>Apply Motion Style {current.num}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Motion Mechanics Breakdown */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.motionMechanics.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="mt-1 h-2 w-2 rounded-full bg-white shrink-0" />
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================================================================= */}
        {/* COMPONENT TEST BED: REALISTIC GLASS CARDS OVER SPECULAR MOTION    */}
        {/* ================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-white" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400">
                Monochrome Specular Test Bed (Testing Legibility Against Motion)
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400">
              ● 100% WCAG AAA Contrast Guaranteed
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
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
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
                <div className="text-[11px] text-zinc-400">
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
                : "bg-black/85 text-zinc-200 border-t-white/40 border-white/10"
            }`}
          >
            {/* Terminal Top Window Controls */}
            <div className="px-5 py-3.5 bg-black/60 border-b border-white/10 flex items-center justify-between">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>[VERIFIED] SQA ENGINEER II · BRAIN STATION 23</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-heading">
                Muhammad Shazzad Mia · SQA Automation Engineer
              </h3>
              <p className="text-xs text-zinc-400">
                Dhaka, Bangladesh (UTC+6) · Open for Global Remote & Hybrid SQA Roles
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:shazzadmia1190@gmail.com"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all shadow-md cursor-pointer"
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
            <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-pulse shadow-[0_0_12px_#ffffff]" />
            <div>
              <div className="text-xs font-bold leading-tight">
                Previewing Motion {current.num}: {current.name.split(" ")[0]} {current.name.split(" ")[1]}
              </div>
              <div className="text-[11px] text-zinc-400">
                Click button to approve and apply to your main website
              </div>
            </div>
          </div>

          <button
            onClick={handleCopyChoice}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-zinc-200 text-black transition-all shadow-md hover:shadow-white/25 cursor-pointer whitespace-nowrap"
          >
            {copiedChoice ? "Copied!" : `Approve Motion ${current.num}`}
          </button>
        </div>
      </div>
    </div>
  );
}
