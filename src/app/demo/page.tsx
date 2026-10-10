"use client";

import { useState, useEffect } from "react";
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
  Zap,
  MousePointer2,
  Terminal,
  Play,
  Gauge,
  CheckCheck,
  Grid,
  Radio,
  Compass,
  Palette,
  Eye,
  Film,
  Waves,
  Maximize2,
} from "lucide-react";

export type BackgroundType =
  | "chromatic-mesh"
  | "linear-specular"
  | "perspective-grid"
  | "editorial-grain"
  | "prismatic-caustic"
  | "aurora-borealis"
  | "topographic-contour"
  | "neon-radar"
  | "sunset-amber"
  | "halftone-matrix";

interface BackgroundMeta {
  id: BackgroundType;
  num: string;
  name: string;
  tagline: string;
  styleCategory: string;
  inspiration: string;
  palette: string[];
  description: string;
  whyUnique: string;
}

export const BACKGROUND_TYPES: BackgroundMeta[] = [
  {
    id: "chromatic-mesh",
    num: "01",
    name: "Chromatic Fluid Mesh",
    tagline: "Deep Indigo & Electric Cyan Caustic Mesh with Fluid Morphing Blobs",
    styleCategory: "Fluid Mesh & Organic Light",
    inspiration: "Stripe Press & Vercel Ship",
    palette: ["#030712", "#0ea5e9", "#6366f1", "#a855f7"],
    description:
      "Multi-point organic mesh gradient with deep indigo, electric cyan, and soft violet blobs that slowly drift and merge in continuous fluid motion.",
    whyUnique:
      "Rich color depth and soft luminous curves that feel modern, warm, and highly alive.",
  },
  {
    id: "linear-specular",
    num: "02",
    name: "Monolithic Specular Horizon",
    tagline: "Velvet Obsidian with Razor Horizon Line & 120 FPS Specular Cursor Beam",
    styleCategory: "High-Precision Dark Luxury",
    inspiration: "Linear.app & Raycast Pro",
    palette: ["#030408", "#ffffff", "#38bdf8", "#0f172a"],
    description:
      "Deepest velvet obsidian void (#030408) with a crisp luminous top horizon razor line and an instantaneous 120 FPS specular light beam tracking the cursor.",
    whyUnique:
      "Maximum minimalism and surgical precision. High-contrast specular reflections on frosted glass borders without visual clutter.",
  },
  {
    id: "perspective-grid",
    num: "03",
    name: "Cyber 3D Perspective Grid",
    tagline: "Architectural CAD Wireframe Floor Fading to an Infinite Horizon Line",
    styleCategory: "Architectural & High-Tech",
    inspiration: "Vercel v0, Supabase & GitHub Universe",
    palette: ["#02040a", "#00f2fe", "#1e293b", "#3b82f6"],
    description:
      "A receding 3D perspective floor grid receding into a distant glowing horizon, paired with a subtle pointer radar beam scanning across the coordinate grid.",
    whyUnique:
      "Communicates engineering architecture, system structure, and spatial calculation—perfect for SQA automation frameworks.",
  },
  {
    id: "editorial-grain",
    num: "04",
    name: "Editorial 35mm Film Grain",
    tagline: "Analog Photographic Texture with Velvet Obsidian Vignette & Loupe Glint",
    styleCategory: "Analog Craft & Editorial Luxury",
    inspiration: "Minimal Gallery & Studio Freight",
    palette: ["#050507", "#e2e8f0", "#18181b", "#71717a"],
    description:
      "High-end SVG fractal noise texture recreating physical 35mm film grain over a rich charcoal-obsidian vignette, illuminated by an optical loupe cursor light.",
    whyUnique:
      "Feels like a physical, museum-grade art catalogue or luxury magazine rather than a digital website.",
  },
  {
    id: "prismatic-caustic",
    num: "05",
    name: "Prismatic Liquid Glass Caustics",
    tagline: "Liquid Optical Refraction with Subtle Chromatic Aberration & Water Caustics",
    styleCategory: "Optical Refraction & Liquid Glass",
    inspiration: "Apple macOS Sequoia & VisionOS",
    palette: ["#03050c", "#38bdf8", "#f43f5e", "#818cf8"],
    description:
      "Simulates liquid glass optical refractions where caustic light waves glide across smoked obsidian, accompanied by subtle chromatic fringe highlights.",
    whyUnique:
      "Hypnotic optical realism that gives frosted glass cards physical depth and refractive luxury.",
  },
  {
    id: "aurora-borealis",
    num: "06",
    name: "Dark Aurora Borealis Wave",
    tagline: "Sinusoidal Ethereal Ribbons of Emerald & Ice-Cyan Atmospheric Waves",
    styleCategory: "Atmospheric & Ethereal",
    inspiration: "Microsoft Fluent & Nordic Design",
    palette: ["#020617", "#10b981", "#06b6d4", "#6366f1"],
    description:
      "Serene, undulating ribbons of emerald-cyan and violet light drifting slowly across the upper horizon in harmonious sinusoidal cycles.",
    whyUnique:
      "Calm, soothing, and majestic. Adds high visual impact to the hero section while maintaining serene readability.",
  },
  {
    id: "topographic-contour",
    num: "07",
    name: "Topographic Elevation Matrix",
    tagline: "Delicate Geodetic Contour Lines with Acoustic Horizon Sonar Pulses",
    styleCategory: "Geodetic Precision & Telemetry",
    inspiration: "Teenage Engineering & Arc Browser",
    palette: ["#030408", "#38bdf8", "#64748b", "#0284c7"],
    description:
      "Faint geodetic elevation contour rings radiating softly from the horizon, illuminated by an interactive geodetic sonar beacon following the cursor.",
    whyUnique:
      "Surgical technical aesthetic resembling high-altitude flight telemetry or precision cartography.",
  },
  {
    id: "neon-radar",
    num: "08",
    name: "Cyberpunk HUD Radar Sweep",
    tagline: "Deep Obsidian with Rotating Horizon Radar Beam & Cyan Telemetry Coordinates",
    styleCategory: "Cyberpunk & Mission Control",
    inspiration: "Figma Config & High-Tech HUDs",
    palette: ["#020204", "#22d3ee", "#a855f7", "#0f172a"],
    description:
      "Dark room mission-control aesthetic featuring an ultra-subtle 360-degree radar beam sweep and concentric radar target rings centered on the upper canvas.",
    whyUnique:
      "Immersive mission-control vibe that screams high-tech engineering and real-time automated monitoring.",
  },
  {
    id: "sunset-amber",
    num: "09",
    name: "Velvet Obsidian & Champagne Amber",
    tagline: "Warm Gold Caustics with Copper Horizon Wash on Deep Velvet Black",
    styleCategory: "Warm Dark Luxury & Executive",
    inspiration: "Porsche Design, Bang & Olufsen & Stripe Press",
    palette: ["#050403", "#f59e0b", "#fbbf24", "#d97706"],
    description:
      "A departure from cold blues: rich velvet obsidian base infused with molten champagne gold, copper accents, and warm sunset caustics.",
    whyUnique:
      "Warm, opulent, and distinguished. Creates an executive presence with rich golden specular highlights.",
  },
  {
    id: "halftone-matrix",
    num: "10",
    name: "Dieter Rams Dot Halftone",
    tagline: "Precision Industrial Dot Grid with Dynamic Cursor Proximity Luminance",
    styleCategory: "Bauhaus Industrial & Minimalist",
    inspiration: "Braun, Teenage Engineering & Nothing Phone",
    palette: ["#030305", "#e2e8f0", "#52525b", "#27272a"],
    description:
      "A disciplined 20px geometric dot matrix where micro-dots illuminate with high-contrast platinum radiance as the cursor passes overhead.",
    whyUnique:
      "Timeless German industrial design purity. Clean, tactile, and immediately iconic without any flashy distractions.",
  },
];

export default function TenBackgroundLab() {
  const [activeType, setActiveType] =
    useState<BackgroundType>("linear-specular");
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [copiedChoice, setCopiedChoice] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(120);
  const shouldReduceMotion = useReducedMotion();

  const current =
    BACKGROUND_TYPES.find((b) => b.id === activeType) || BACKGROUND_TYPES[0];

  // =========================================================================
  // 120 FPS HARDWARE-ACCELERATED POINTER TRACKING (ZERO REACT RE-RENDERS)
  // =========================================================================
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
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

  // Real-Time FPS Telemetry
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
      `I choose Background Style [${current.num}] ${current.name} (${current.id})`
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
      {/* 10 DISTINCT 120 FPS PURE GPU COMPOSITED BACKGROUND ENGINES          */}
      {/* =================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Universal Void Base */}
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            isLightMode ? "bg-[#faf8f5]" : "bg-[#030408]"
          }`}
        />

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 01: CHROMATIC FLUID MESH (STRIPE / VERCEL)                   */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "chromatic-mesh" && (
          <>
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [-60, 60, -60],
                      y: [-40, 40, -40],
                      scale: [1, 1.15, 1],
                    }
              }
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[10%] w-[750px] h-[550px] rounded-full bg-[radial-gradient(circle,#0284c7_0%,#3b82f6_40%,transparent_70%)] opacity-35 blur-[120px]"
            />
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [70, -70, 70],
                      y: [40, -40, 40],
                      scale: [1.1, 0.95, 1.1],
                    }
              }
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[10%] w-[680px] h-[520px] rounded-full bg-[radial-gradient(circle,#8b5cf6_0%,#4f46e5_45%,transparent_70%)] opacity-30 blur-[130px]"
            />
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [30, -30, 30],
                      y: [-25, 25, -25],
                    }
              }
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[25%] left-[35%] w-[600px] h-[450px] rounded-full bg-[radial-gradient(circle,#06b6d4_0%,transparent_70%)] opacity-25 blur-[100px]"
            />
            {/* Smooth Cursor Light Refraction */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 250px), calc(var(--mouse-y, 30vh) - 250px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(14,165,233,0.08)_40%,transparent_70%)] blur-[70px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 02: MONOLITHIC SPECULAR HORIZON (LINEAR / RAYCAST)           */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "linear-specular" && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] max-w-[1400px] h-[420px] rounded-[100%] blur-[100px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(255,255,255,0.12)_0%,rgba(56,189,248,0.06)_45%,transparent_75%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 300px), calc(var(--mouse-y, 30vh) - 300px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.11)_0%,rgba(56,189,248,0.07)_35%,transparent_70%)] blur-[75px]"
            />
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 90px), calc(var(--mouse-y, 30vh) - 90px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(56,189,248,0.1)_45%,transparent_70%)] blur-[30px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 03: CYBER 3D PERSPECTIVE GRID (SUPABASE / V0)                */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "perspective-grid" && (
          <>
            {/* Top Horizon Neon Glow */}
            <div className="absolute top-0 left-0 right-0 h-[220px] bg-gradient-to-b from-cyan-500/15 via-blue-600/5 to-transparent blur-[60px]" />
            <div className="absolute top-[180px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_20px_#00f2fe]" />

            {/* Receding Perspective Grid Surface */}
            <div
              style={{
                perspective: "600px",
                perspectiveOrigin: "50% 0%",
              }}
              className="absolute inset-x-0 top-[180px] bottom-0 overflow-hidden opacity-30"
            >
              <div
                style={{
                  transform: "rotateX(72deg)",
                  transformOrigin: "top center",
                  backgroundImage:
                    "linear-gradient(to right, rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.3) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
                className="w-[200%] h-[300%] -left-[50%] absolute top-0"
              />
            </div>

            {/* Pointer Radar Scanner Light */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 220px), calc(var(--mouse-y, 30vh) - 220px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(0,242,254,0.12)_0%,rgba(59,130,246,0.06)_40%,transparent_70%)] blur-[60px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 04: EDITORIAL 35MM FILM GRAIN (STUDIO FREIGHT)               */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "editorial-grain" && (
          <>
            {/* Deep Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />

            {/* SVG Analog Film Grain Filter */}
            <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.045] contrast-175">
              <filter id="grain-filter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grain-filter)" />
            </svg>

            {/* Ultra-Refined Optical Loupe Glint */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 180px), calc(var(--mouse-y, 30vh) - 180px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.04)_45%,transparent_70%)] blur-[40px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 05: PRISMATIC LIQUID GLASS CAUSTICS (APPLE VISION)           */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "prismatic-caustic" && (
          <>
            {/* Liquid Caustic Wave Layers */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 360],
                    }
              }
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-[48%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(56,189,248,0.08)_90deg,transparent_180deg,rgba(244,63,94,0.06)_270deg,transparent_360deg)] blur-[80px]"
            />

            {/* Prismatic Chromatic Fringe Halo */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 260px), calc(var(--mouse-y, 30vh) - 260px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(56,189,248,0.08)_30%,rgba(244,63,94,0.05)_55%,transparent_75%)] blur-[65px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 06: DARK AURORA BOREALIS WAVE (NORDIC DESIGN)                */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "aurora-borealis" && (
          <>
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [-80, 80, -80],
                      skewY: [-3, 3, -3],
                    }
              }
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-100px] left-[-20%] w-[140%] h-[460px] bg-gradient-to-r from-emerald-500/20 via-cyan-400/20 to-indigo-500/15 blur-[90px] rounded-[100%]"
            />
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [70, -70, 70],
                      skewY: [2, -2, 2],
                    }
              }
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-40px] left-[-10%] w-[120%] h-[400px] bg-gradient-to-r from-indigo-500/15 via-teal-400/25 to-blue-600/15 blur-[85px] rounded-[100%]"
            />
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 240px), calc(var(--mouse-y, 30vh) - 240px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,rgba(6,182,212,0.07)_40%,transparent_70%)] blur-[70px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 07: TOPOGRAPHIC CONTOUR ELEVATION (TEENAGE ENG.)              */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "topographic-contour" && (
          <>
            {/* Concentric Horizon Contour Elevation Rings */}
            {[0, 1, 2, 3, 4].map((ring) => (
              <div
                key={ring}
                style={{
                  top: `${-40 + ring * 55}px`,
                  width: `${850 + ring * 180}px`,
                  height: `${340 + ring * 90}px`,
                }}
                className="absolute left-1/2 -translate-x-1/2 rounded-[100%] border border-cyan-400/15 opacity-60"
              />
            ))}
            {/* Elevation Radar Beam */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 200px), calc(var(--mouse-y, 30vh) - 200px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14)_0%,rgba(2,132,199,0.06)_45%,transparent_70%)] blur-[55px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 08: CYBERPUNK HUD RADAR SWEEP (MISSION CONTROL)              */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "neon-radar" && (
          <>
            {/* Concentric Mission Target Rings */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-cyan-500/15" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full border border-cyan-500/20" />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full border border-cyan-500/25" />

            {/* Continuous 360-degree Radar Sweep Beam */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 360],
                    }
              }
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center center" }}
              className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(34,211,238,0.18)_360deg)] blur-[25px]"
            />

            {/* Pointer Target Reticle Light */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 150px), calc(var(--mouse-y, 30vh) - 150px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,transparent_65%)] blur-[40px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 09: VELVET OBSIDIAN & CHAMPAGNE AMBER (PORSCHE / STRIPE)     */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "sunset-amber" && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] max-w-[1400px] h-[450px] rounded-[100%] blur-[110px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(245,158,11,0.18)_0%,rgba(217,119,6,0.08)_45%,transparent_75%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.35)]" />
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 275px), calc(var(--mouse-y, 30vh) - 275px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.12)_0%,rgba(245,158,11,0.07)_35%,transparent_70%)] blur-[75px]"
            />
          </>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TYPE 10: DIETER RAMS DOT HALFTONE (BRAUN / TEENAGE ENG.)          */}
        {/* ----------------------------------------------------------------- */}
        {activeType === "halftone-matrix" && (
          <>
            {/* Precision 20px Halftone Dot Pattern */}
            <div
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.14) 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
              className="absolute inset-0 opacity-40"
            />
            {/* Dynamic Halftone Proximity Spotlight */}
            <div
              style={{
                transform:
                  "translate3d(calc(var(--mouse-x, 50vw) - 250px), calc(var(--mouse-y, 30vh) - 250px), 0)",
                willChange: "transform",
              }}
              className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,transparent_65%)] blur-[60px]"
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
            ? "bg-[#faf8f5]/90 border-zinc-200/80"
            : "bg-[#030408]/90 border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
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
                  Atmosphere Lab
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                  10 DISTINCT TYPES
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                120 FPS Pure GPU · Zero React Re-Renders · Buttery Smooth
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
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

        {/* 10 Tab Switcher Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-3 pt-1">
          <div
            role="tablist"
            aria-label="10 Distinct Background Types"
            className={`grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-1.5 p-1.5 rounded-2xl border ${
              isLightMode
                ? "bg-zinc-100/90 border-zinc-200"
                : "bg-black/60 border-white/10"
            }`}
          >
            {BACKGROUND_TYPES.map((bg) => {
              const isActive = activeType === bg.id;
              return (
                <button
                  key={bg.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveType(bg.id)}
                  className={`group relative p-2 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? isLightMode
                        ? "bg-white text-zinc-950 shadow-md border border-zinc-300"
                        : "bg-white/15 text-white shadow-lg border border-white/30 backdrop-blur-md"
                      : isLightMode
                      ? "text-zinc-600 hover:text-zinc-950 hover:bg-white/60"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span
                      className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                          : "bg-white/5 text-zinc-400"
                      }`}
                    >
                      {bg.num}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
                    )}
                  </div>
                  <div className="text-[11px] font-bold leading-tight truncate">
                    {bg.name.split(" ")[0]} {bg.name.split(" ")[1] || ""}
                  </div>
                  <div className="text-[9px] text-zinc-500 truncate mt-0.5">
                    {bg.inspiration.split("&")[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* MAIN SPECIMEN TESTBED                                               */}
      {/* =================================================================== */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Metadata Banner */}
        <AnimatePresence mode="wait">
          <motion.section
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl relative overflow-hidden transition-all duration-300 ${
              isLightMode
                ? "bg-white/75 border-zinc-200/90 shadow-xl"
                : "bg-white/[0.03] border-white/15 shadow-2xl"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                    Type {current.num} / 10
                  </span>
                  <span className="text-xs font-mono text-zinc-500">·</span>
                  <span className="text-xs font-mono text-zinc-400">
                    Category: {current.styleCategory}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">·</span>
                  <span className="text-xs font-mono text-cyan-400">
                    Inspiration: {current.inspiration}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  {current.name}
                </h1>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {current.tagline}
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 font-mono">
                  {current.description}
                </p>
                <p className="text-xs text-cyan-400 font-mono">
                  Why it stands out: {current.whyUnique}
                </p>
              </div>

              {/* Color Swatch & Selection Button */}
              <div className="flex flex-col gap-3 shrink-0">
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-black/40 border border-white/10">
                  {current.palette.map((color, i) => (
                    <span
                      key={i}
                      style={{ backgroundColor: color }}
                      className="w-5 h-5 rounded-md border border-white/20 shadow-sm"
                      title={color}
                    />
                  ))}
                </div>

                <button
                  onClick={handleCopyChoice}
                  className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
                >
                  {copiedChoice ? (
                    <>
                      <CheckCheck className="w-4 h-4" />
                      <span>Copied Type {current.num}!</span>
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
          </motion.section>
        </AnimatePresence>

        {/* ================================================================= */}
        {/* REALISTIC PORTFOLIO CONTENT CARDS TO TEST LEGIBILITY              */}
        {/* ================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MousePointer2 className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400">
                Live Test Bed (Move Cursor to Experience Buttery Lighting Over Content)
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              120 FPS GPU Active
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

          {/* Card 4: Terminal Testbed */}
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
                Active Atmosphere Type {current.num}: {current.name}
              </div>
              <div className="text-[11px] text-zinc-400">
                Inspiration: {current.inspiration} · 120 FPS Pure GPU · 0 React Re-renders
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
                  <span>Approved Type {current.num}</span>
                </>
              ) : (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Select Type {current.num}</span>
                </>
              )}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
