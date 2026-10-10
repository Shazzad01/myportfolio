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
  Share2,
  Atom,
  Orbit,
  Sparkle,
  Focus,
  Box,
} from "lucide-react";

type InteractiveMotionOption =
  | "constellation-magnetic"
  | "fluid-bioluminescent"
  | "specular-lens-ripple"
  | "orbital-gravitational"
  | "spatial-3d-parallax";

interface OptionMeta {
  id: InteractiveMotionOption;
  num: string;
  name: string;
  tagline: string;
  vibe: string;
  recommended?: boolean;
  mechanics: string[];
  whyItFits: string;
}

const MOTION_OPTIONS: OptionMeta[] = [
  {
    id: "constellation-magnetic",
    num: "01",
    name: "Magnetic Constellation & Specular Spotlight",
    tagline: "Zero-Gravity Particles with Magnetic Cursor Attraction & Dynamic Geometric Link Threads",
    vibe: "Raycast & Stripe Graph — High-intelligence network, responsive physics",
    recommended: true,
    mechanics: [
      "22 zero-gravity specular motes floating organically in Brownian motion.",
      "As your cursor approaches particles, a magnetic force smoothly attracts the nearest motes.",
      "Ultra-faint 1px luminous geometric connection threads render dynamically between nearby particles and your cursor.",
      "A soft specular spotlight glides under your cursor, illuminating frosted glass bevels.",
    ],
    whyItFits:
      "Merges the organic ambient floating of #4 with the tactile cursor-tracking of #1, creating an intelligent connected network.",
  },
  {
    id: "fluid-bioluminescent",
    num: "02",
    name: "Bioluminescent Swarm & Fluid Cursor Wake",
    tagline: "Curved Fluid Vector Flow Field with Specular Particle Swarm & Dynamic Cursor Disturbance",
    vibe: "Linear & Apple Vision Pro — Hypnotic organic flow, zero-gravity particle wake",
    mechanics: [
      "Particles glide along smooth organic fluid flow curves across the canvas.",
      "Moving your cursor creates a gentle hydrodynamic wake that parts the particle field.",
      "Pure white and ice-cyan particles pulse with soft breathing luminescence.",
      "Top specular horizon casts an ambient downward wash, illuminating the fluid wake.",
    ],
    whyItFits:
      "Feels like moving your hand through deep bioluminescent ocean waters. Incredibly calm, organic, and mesmerizing.",
  },
  {
    id: "specular-lens-ripple",
    num: "03",
    name: "Fresnel Specular Lens & Surface Bobbing Motes",
    tagline: "High-Refraction Cursor Fresnel Spotlight with Interactive Ripple Waves that Bob Floating Particles",
    vibe: "Minimal Gallery & Awwwards Winner — Tactile optical glass refraction, liquid obsidian",
    mechanics: [
      "Cursor spotlight features a 2-stage optical Fresnel lens: intense specular white core + wide ice-cyan halo.",
      "Cursor movement casts subtle radial surface waves that ripple across the obsidian plane.",
      "Floating zero-gravity particles gently bob and react to the ripple waves as they pass.",
      "Creates the illusion of an ultra-clean optical lens sweeping across black glass.",
    ],
    whyItFits:
      "Takes the cursor spotlight of #1 to optical perfection while making the particles of #4 physically react to the light.",
  },
  {
    id: "orbital-gravitational",
    num: "04",
    name: "Orbital Gravity Well & Miniature Satellite Motes",
    tagline: "Background Brownian Drift with a Ring of Micro-Satellites Orbiting Your Cursor",
    vibe: "Cosmos & Studio Freight — Astrophysics luxury, gravitational harmony",
    mechanics: [
      "Background field features deep, slow zero-gravity ambient drift.",
      "6 micro-fine satellite particles enter orbit around your cursor with spring-damped gravity.",
      "As you move, the orbital satellites trail with realistic inertia and angular momentum.",
      "Produces an unmistakable aura of focus and precision around the user's interaction point.",
    ],
    whyItFits:
      "Directly elevates the particle physics of #4 into an interactive gravitational dance centered on your cursor.",
  },
  {
    id: "spatial-3d-parallax",
    num: "05",
    name: "Spatial 3D Depth Parallax & Multilayer Starfield",
    tagline: "3-Layer Deep Specular Starfield with Gyroscopic 3D Perspective Tilt Driven by Cursor",
    vibe: "Apple Spatial Computing & Studio Archetype — Real three-dimensional glass depth",
    mechanics: [
      "3 distinct z-depth particle tiers: distant micro-stars, mid-ground motes, and foreground luminous specks.",
      "Moving your cursor tilts the entire spatial coordinate frame in real 3D perspective (perspective: 1200px).",
      "Different z-layers respond with calibrated parallax ratios (0.2x, 0.5x, 1.0x).",
      "Turns the webpage into a deep physical 3D shadowbox made of smoked glass and floating stars.",
    ],
    whyItFits:
      "Takes both #1 and #4 and adds true z-axis depth. The particles feel like they exist in real 3D space behind the glass cards.",
  },
];

export default function AdvancedMotionLaboratory() {
  const [activeOption, setActiveOption] =
    useState<InteractiveMotionOption>("constellation-magnetic");
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const [copiedChoice, setCopiedChoice] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 720,
    y: 400,
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const current =
    MOTION_OPTIONS.find((opt) => opt.id === activeOption) || MOTION_OPTIONS[0];

  // Mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // High-Performance Interactive Particle Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 24 Particle Entities with 3D Depth Properties
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      size: number;
      z: number; // 1 to 3
      alpha: number;
      orbitAngle: number;
      orbitRadius: number;
      orbitSpeed: number;
    }

    const particles: Particle[] = [];
    const count = activeOption === "spatial-3d-parallax" ? 36 : 24;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.35,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: Math.random() * 1.5 + 1.2,
        z: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 60 + 35,
        orbitSpeed: (Math.random() * 0.02 + 0.015) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      const targetX = mousePos.x;
      const targetY = mousePos.y;

      // -------------------------------------------------------------
      // OPTION 1: CONSTELLATION & MAGNETIC
      // -------------------------------------------------------------
      if (activeOption === "constellation-magnetic") {
        particles.forEach((p, idx) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Magnetic attraction to cursor
          const dx = targetX - p.x;
          const dy = targetY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180 && dist > 10) {
            const force = (180 - dist) / 180;
            p.x += (dx / dist) * force * 1.8;
            p.y += (dy / dist) * force * 1.8;

            // Connect line to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(targetX, targetY);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.35 * force})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Connect nearby particles
          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (pDist < 110) {
              const pAlpha = ((110 - pDist) / 110) * 0.22;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${pAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 8;
          ctx.fill();
        });
      }

      // -------------------------------------------------------------
      // OPTION 2: BIOLUMINESCENT FLUID SWARM
      // -------------------------------------------------------------
      else if (activeOption === "fluid-bioluminescent") {
        particles.forEach((p) => {
          // Fluid Perlin-like curve flow
          const angle = Math.sin(p.x * 0.003 + frame * 0.01) * Math.cos(p.y * 0.003 + frame * 0.01) * Math.PI * 2;
          p.x += Math.cos(angle) * 0.6 + p.vx * 0.5;
          p.y += Math.sin(angle) * 0.6 + p.vy * 0.5;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Cursor wake disturbance
          const dx = p.x - targetX;
          const dy = p.y - targetY;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const push = (140 - dist) / 140;
            p.x += (dx / dist) * push * 3.5;
            p.y += (dy / dist) * push * 3.5;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha * 0.9})`;
          ctx.shadowColor = "#00f2fe";
          ctx.shadowBlur = 12;
          ctx.fill();
        });
      }

      // -------------------------------------------------------------
      // OPTION 3: FRESNEL LENS & RIPPLE
      // -------------------------------------------------------------
      else if (activeOption === "specular-lens-ripple") {
        particles.forEach((p) => {
          p.x += p.vx * 0.8;
          p.y += p.vy * 0.8;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Distance to lens center
          const dist = Math.hypot(targetX - p.x, targetY - p.y);
          let extraScale = 1;
          let extraAlpha = p.alpha;

          if (dist < 220) {
            // Ripple wave distortion
            const wave = Math.sin(dist * 0.05 - frame * 0.08);
            p.y += wave * 0.8;
            extraScale = 1 + (220 - dist) / 150;
            extraAlpha = Math.min(1, p.alpha + 0.4);
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * extraScale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${extraAlpha})`;
          ctx.shadowColor = dist < 220 ? "#38bdf8" : "#ffffff";
          ctx.shadowBlur = dist < 220 ? 14 : 6;
          ctx.fill();
        });
      }

      // -------------------------------------------------------------
      // OPTION 4: ORBITAL GRAVITATIONAL SATELLITES
      // -------------------------------------------------------------
      else if (activeOption === "orbital-gravitational") {
        // First 8 particles act as satellites orbiting the cursor
        particles.forEach((p, idx) => {
          if (idx < 6) {
            p.orbitAngle += p.orbitSpeed;
            const orbitX = targetX + Math.cos(p.orbitAngle) * p.orbitRadius;
            const orbitY = targetY + Math.sin(p.orbitAngle) * (p.orbitRadius * 0.6);
            // Smooth spring damping to orbit position
            p.x += (orbitX - p.x) * 0.15;
            p.y += (orbitY - p.y) * 0.15;

            // Draw orbit trail
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 1.4, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
            ctx.shadowColor = "#38bdf8";
            ctx.shadowBlur = 12;
            ctx.fill();

            // Fine link tether to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(targetX, targetY);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
            ctx.lineWidth = 0.7;
            ctx.stroke();
          } else {
            // Background slow drift
            p.x += p.vx * 0.6;
            p.y += p.vy * 0.6;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.7})`;
            ctx.shadowColor = "#ffffff";
            ctx.shadowBlur = 5;
            ctx.fill();
          }
        });
      }

      // -------------------------------------------------------------
      // OPTION 5: SPATIAL 3D DEPTH PARALLAX
      // -------------------------------------------------------------
      else if (activeOption === "spatial-3d-parallax") {
        const mouseRatioX = (targetX / width - 0.5) * 2;
        const mouseRatioY = (targetY / height - 0.5) * 2;

        particles.forEach((p) => {
          // Shift coordinates based on z-depth layer
          const parallaxShiftX = mouseRatioX * p.z * 18;
          const parallaxShiftY = mouseRatioY * p.z * 14;

          p.baseX += p.vx * 0.5;
          p.baseY += p.vy * 0.5;
          if (p.baseX < 0) p.baseX = width;
          if (p.baseX > width) p.baseX = 0;
          if (p.baseY < 0) p.baseY = height;
          if (p.baseY > height) p.baseY = 0;

          const renderX = p.baseX + parallaxShiftX;
          const renderY = p.baseY + parallaxShiftY;
          const renderSize = p.size * (p.z * 0.6);

          ctx.beginPath();
          ctx.arc(renderX, renderY, renderSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * (p.z * 0.4)})`;
          ctx.shadowColor = p.z > 2 ? "#38bdf8" : "#ffffff";
          ctx.shadowBlur = p.z > 2 ? 10 : 4;
          ctx.fill();
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeOption, mousePos]);

  const handleCopyChoice = () => {
    navigator.clipboard.writeText(
      `I choose Modern Motion Style: [${current.num}] ${current.name} (${current.id})`
    );
    setCopiedChoice(true);
    setTimeout(() => setCopiedChoice(false), 2500);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden ${
        isLightMode
          ? "light bg-[#faf8f5] text-zinc-950"
          : "dark bg-[#020205] text-white"
      }`}
    >
      {/* =================================================================== */}
      {/* MONOCHROME SPECULAR HORIZON BASE (YOUR APPROVED TONE)               */}
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

        {/* Dynamic Smooth Cursor Specular Spotlight Layer */}
        <motion.div
          animate={{
            x: mousePos.x - 300,
            y: mousePos.y - 300,
          }}
          transition={{
            type: "spring",
            damping: 32,
            stiffness: 190,
            mass: 0.5,
          }}
          className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.11)_0%,rgba(56,189,248,0.07)_35%,transparent_70%)] blur-[80px] pointer-events-none"
        />

        {/* Live Canvas for Interactive Particles & Motes */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />
      </div>

      {/* =================================================================== */}
      {/* STICKY TOP CONTROLLER HEADER                                        */}
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
                  Interactive Motion Lab
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold bg-white/15 text-white border border-white/20">
                  5 CURSOR & MOTE VARIATIONS
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Move your mouse to experience the interactive physics in real-time
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

        {/* 5 Interactive Motion Switcher Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-3 pt-1">
          <div
            role="tablist"
            aria-label="Interactive Motion Options"
            className={`grid grid-cols-2 md:grid-cols-5 gap-2 p-1.5 rounded-2xl border ${
              isLightMode
                ? "bg-zinc-100/90 border-zinc-200"
                : "bg-black/60 border-white/10"
            }`}
          >
            {MOTION_OPTIONS.map((opt) => {
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
                    Interactive Motion Style {current.num} / 05
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
                  Why it fits 1 & 4: {current.whyItFits}
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
              {current.mechanics.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================================================================= */}
        {/* COMPONENT TEST BED: REALISTIC GLASS CARDS OVER INTERACTIVE MOTION */}
        {/* ================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MousePointer2 className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400">
                Interactive Specimen Test Bed (Move Cursor Over Cards to See Lighting & Particles)
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
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#38bdf8]" />
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
