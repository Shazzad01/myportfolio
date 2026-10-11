"use client";

import { useEffect, useRef } from "react";

/**
 * MonolithicSpecularHorizon
 * High-performance, living 120 FPS Monolithic Specular Horizon background.
 *
 * Key Architecture Upgrades:
 * 1. Continuous Organic Kinetic Pulse: The horizon arc and caustic aura continuously breathe via GPU keyframes so the background is NEVER static or "stuck".
 * 2. Liquid Glass Spring Damping: Direct DOM ref lerp interpolation (0.075 factor) gives the cursor spotlight silky smooth inertia without abrupt stops.
 * 3. Idle Harmonic Drift: When the mouse is stationary, the spotlight gently floats in a subtle Lissajous orbit, feeling alive and responsive.
 * 4. Zero DOM Thrashing: Updates are applied directly to transform: translate3d() on the isolated elements, avoiding whole-document CSS variable style recalculations.
 */
export default function MonolithicSpecularHorizon() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const glintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let targetX = typeof window !== "undefined" ? window.innerWidth / 2 : 720;
    let targetY = typeof window !== "undefined" ? window.innerHeight * 0.3 : 300;
    let currentX = targetX;
    let currentY = targetY;
    let isMoving = false;
    let idleTimer: ReturnType<typeof setTimeout>;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isMoving = false;
      }, 1500);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    let t = 0;
    const render = () => {
      t += 0.02;

      // Subtle harmonic idle drift when mouse is stationary so the light is never frozen
      const idleOffsetX = isMoving ? 0 : Math.sin(t * 0.7) * 32;
      const idleOffsetY = isMoving ? 0 : Math.cos(t * 0.5) * 20;

      // Spring-damped liquid lerp for silky organic glide (factor: 0.075)
      currentX += (targetX + idleOffsetX - currentX) * 0.075;
      currentY += (targetY + idleOffsetY - currentY) * 0.075;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      }
      if (glintRef.current) {
        glintRef.current.style.transform = `translate3d(${currentX - 90}px, ${currentY - 90}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animId);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Void Obsidian / Champagne Base Surface */}
      <div className="absolute inset-0 bg-[#faf8f5] dark:bg-[#030408] transition-colors duration-500" />

      {/* Top Specular Horizon Arc with Continuous Sinusoidal Breathing Animation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] max-w-[1400px] h-[440px] rounded-[100%] blur-[100px] pointer-events-none transition-opacity duration-1000 dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(255,255,255,0.14)_0%,rgba(56,189,248,0.07)_45%,transparent_75%)] bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(0,0,0,0.06)_0%,rgba(6,182,212,0.03)_45%,transparent_75%)] animate-[pulse_8s_ease-in-out_infinite]" />

      {/* Secondary Ethereal Caustic Wave Drifting Horizontally */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1100px] h-[360px] rounded-full blur-[120px] pointer-events-none dark:bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,rgba(139,92,246,0.04)_50%,transparent_75%)] bg-[radial-gradient(circle,rgba(6,182,212,0.04)_0%,transparent_70%)] animate-[pulse_12s_ease-in-out_infinite_reverse]" />

      {/* Razor-Sharp Horizon Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[1200px] h-[1px] dark:bg-gradient-to-r dark:from-transparent dark:via-white/40 dark:to-transparent dark:shadow-[0_0_15px_rgba(255,255,255,0.35)] bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent shadow-[0_0_10px_rgba(0,0,0,0.05)]" />

      {/* 120 FPS GPU Hardware-Accelerated Specular Spotlight with Liquid Spring Lerp */}
      <div
        ref={spotlightRef}
        style={{
          transform: "translate3d(calc(50vw - 300px), calc(30vh - 300px), 0)",
          willChange: "transform",
        }}
        className="absolute w-[600px] h-[600px] rounded-full dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(56,189,248,0.08)_35%,transparent_70%)] bg-[radial-gradient(circle,rgba(0,0,0,0.05)_0%,rgba(6,182,212,0.03)_40%,transparent_70%)] blur-[75px] pointer-events-none"
      />

      {/* High-Refraction Concentric Core Pinpoint Glint with Liquid Spring Lerp */}
      <div
        ref={glintRef}
        style={{
          transform: "translate3d(calc(50vw - 90px), calc(30vh - 90px), 0)",
          willChange: "transform",
        }}
        className="absolute w-[180px] h-[180px] rounded-full dark:bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,rgba(56,189,248,0.12)_45%,transparent_70%)] bg-[radial-gradient(circle,rgba(0,0,0,0.07)_0%,transparent_65%)] blur-[30px] pointer-events-none"
      />
    </div>
  );
}
