"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Check,
  Phone,
  MapPin,
} from "lucide-react";

interface MetricSlab {
  value: string;
  label: string;
  description: string;
  tag: string;
  accent?: boolean;
}

const metricSlabs: MetricSlab[] = [
  {
    value: "80%+",
    label: "Automated Coverage",
    description: "120+ E2E journeys automated with Page Object Model across Chromium, Firefox & WebKit.",
    tag: "[120+ FLOWS]",
  },
  {
    value: "75%",
    label: "Runtime Reduction",
    description: "14h manual regression cycle slashed to 3.5h parallel multi-worker grid execution.",
    tag: "[PARALLEL GRID]",
  },
  {
    value: "15k+",
    label: "Virtual Users",
    description: "Apache JMeter concurrency stress peak under 2.0s SLA with zero HTTP drop rate.",
    tag: "[APACHE JMETER]",
  },
  {
    value: "99.4%",
    label: "Verified Platform Uptime",
    description: "15+ zero-defect production releases across Shwapno & Paragon retail platforms.",
    tag: "[ZERO ROLLBACK]",
    accent: true,
  },
];

export default function HeroSectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("shazzadm065@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = "mailto:shazzadm065@gmail.com";
    }
  };

  const handleFrameworksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target =
      document.getElementById("frameworks") ||
      document.getElementById("projects");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#frameworks");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Cold Specular Horizon Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-black/[0.04] via-black/[0.015] to-transparent dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent rounded-[100%] blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Dot Matrix Texture */}
      <div
        className="absolute inset-0 mono-grid opacity-50 dark:opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* Monospace Subtitle Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse" />
          <span className="font-mono-geist text-xs font-semibold tracking-wider uppercase text-zinc-800 dark:text-zinc-200">
            [VERIFIED] SQA ENGINEER II · BRAIN STATION 23
          </span>
        </motion.div>

        {/* Flagship Typography */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-4xl"
        >
          <h1 className="font-geist text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.05]">
            Quality, reduced to its essence.
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed">
            Senior automation engineer architecting deterministic{" "}
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              Playwright E2E frameworks
            </span>{" "}
            and{" "}
            <span className="text-zinc-900 dark:text-zinc-100 font-medium">
              15,000+ VU JMeter concurrency stress pipelines
            </span>{" "}
            for enterprise retail platforms (Shwapno &amp; Paragon).
          </p>

          {/* Dual Monolithic Glass CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8">
            <a
              href="#frameworks"
              onClick={handleFrameworksClick}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold font-geist bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Automation Frameworks</span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium font-geist bg-black/[0.02] dark:bg-white/[0.03] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] backdrop-blur-xl transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Download size={14} />
              <span>Download Curriculum Vitae</span>
            </a>
          </div>

          {/* Direct Communication Channels Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6 text-xs font-mono-geist">
            {/* 1-Click Copy Email Badge */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-black/25 dark:hover:border-white/25 transition-all cursor-pointer shadow-sm"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Copied to clipboard
                  </span>
                </>
              ) : (
                <>
                  <Mail
                    size={13}
                    className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors"
                  />
                  <span>shazzadm065@gmail.com</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp / Phone */}
            <a
              href="https://wa.me/8801621864789"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-black/25 dark:hover:border-white/25 transition-all cursor-pointer shadow-sm"
              title="Open WhatsApp chat"
            >
              <Phone
                size={13}
                className="text-zinc-400 group-hover:text-emerald-500 transition-colors"
              />
              <span>+8801621864789</span>
            </a>

            {/* Location Beacon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md text-zinc-600 dark:text-zinc-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin size={13} className="text-zinc-400" />
              <span>Dhaka, Bangladesh (UTC+6)</span>
            </div>
          </div>
        </motion.div>

        {/* 4 Massive Monolithic Glass Metric Slabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl mt-14 sm:mt-20 text-left">
          {metricSlabs.map((slab, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="relative group p-6 sm:p-8 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-2xl hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Laser Horizon Top Rim Highlight */}
              <div
                className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-black/20 dark:via-white/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Header: Tag + Status Pip */}
              <div className="flex items-center justify-between">
                <span className="font-mono-geist text-[11px] font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">
                  {slab.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
              </div>

              {/* Metric Hero Number */}
              <div className="mt-6 mb-4">
                <div
                  className={`font-mono-geist font-bold tabular-nums text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none ${
                    slab.accent
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-zinc-900 dark:text-white"
                  }`}
                >
                  {slab.value}
                </div>
                <div className="font-geist text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 mt-2">
                  {slab.label}
                </div>
              </div>

              {/* Quantified Impact Description */}
              <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-2 border-t border-black/5 dark:border-white/5">
                {slab.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Copied Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-2xl border border-black/10 dark:border-white/20 text-xs font-mono-geist"
            role="status"
            aria-live="polite"
          >
            <Check size={14} className="text-emerald-500" />
            <span>Copied shazzadm065@gmail.com</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
