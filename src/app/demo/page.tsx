"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Terminal,
  Activity,
  Layers,
  Cpu,
  Flame,
  ShieldCheck,
  GitBranch,
  Download,
  Copy,
  ExternalLink,
  Check,
  Zap,
  Globe,
  Gauge,
  Radio,
  Share2,
} from "lucide-react";

type LiquidVariant = "prism" | "flow" | "opaline" | "monolith" | "hologram";

interface VariantMeta {
  id: LiquidVariant;
  name: string;
  tagline: string;
  vibe: string;
  bgHex: string;
  accentColors: string[];
  visualHighlights: string[];
}

const VARIANTS: VariantMeta[] = [
  {
    id: "prism",
    name: "Obsidian Prism Glass",
    tagline: "Deep Midnight Canvas, Specular Caustics & 3D Glass Tiles",
    vibe: "Ultra-dark luxury, crystalline 1px border refractions",
    bgHex: "#05060F",
    accentColors: ["#8B5CF6 (Violet)", "#10B981 (Emerald)", "#38BDF8 (Sky)"],
    visualHighlights: [
      "Translucent frosted glass with 1px gradient specular top rim",
      "Interactive 4-node QA pipeline SVG connector graph",
      "Floating 3D glass metric tiles with glowing indicator pips",
      "Zero walls of text — 100% focused visual telemetry",
    ],
  },
  {
    id: "flow",
    name: "Cyan & Indigo Aurora Flow",
    tagline: "Dynamic Fluid Aurora Beams & Interactive Latency Spline Wave",
    vibe: "High-energy cosmic ocean, kinetic visual curves",
    bgHex: "#040816",
    accentColors: ["#06B6D4 (Cyan)", "#6366F1 (Indigo)", "#3B82F6 (Royal Blue)"],
    visualHighlights: [
      "Visual SVG latency curve visualizing 15,000 VU stress test (p95 1.74s)",
      "Floating cockpit pill bar with ambient glow halos",
      "Dual cyan-indigo kinetic aurora beams sweeping in background",
      "Interactive status rings and live pulse beacons",
    ],
  },
  {
    id: "opaline",
    name: "Frosted Opaline & Sunset Mesh",
    tagline: "Nebula Rose & Violet Glows with Circular SVG Metric Dial",
    vibe: "Warm cosmic elegance, soft iridescent glass refraction",
    bgHex: "#090514",
    accentColors: ["#F43F5E (Rose)", "#8B5CF6 (Violet)", "#F59E0B (Amber)"],
    visualHighlights: [
      "Circular SVG 80% automated coverage gauge with gradient sweep",
      "Smoked opaline glass panels with frosted multi-layer blur",
      "Floating sunset cosmic mesh spheres radiating through glass",
      "Refined pill chips for tools and direct communication hub",
    ],
  },
  {
    id: "monolith",
    name: "Monolithic Minimalist Glass",
    tagline: "Extreme Negative Space, Laser Specular Rims & Massive Numerals",
    vibe: "Apple-tier quiet luxury, pure visual restraint",
    bgHex: "#030408",
    accentColors: ["#FFFFFF (Specular White)", "#94A3B8 (Platinum)", "#38BDF8 (Cyan Mist)"],
    visualHighlights: [
      "Expansive negative space with zero unnecessary decorative noise",
      "Monolithic glass slabs with razor-sharp 1px top edge shine",
      "Oversized architectural metric numbers with micro-caption hierarchy",
      "Ultra-clean 1-click copyable communication glass cards",
    ],
  },
  {
    id: "hologram",
    name: "Kinetic Hologram Deck",
    tagline: "Simulated Playwright Live Terminal & Multi-Node Hologram Web",
    vibe: "Next-gen test automation cockpit, cyberpunk elegance",
    bgHex: "#050711",
    accentColors: ["#22C55E (Matrix Green)", "#EC4899 (Pink Neon)", "#06B6D4 (Electric Cyan)"],
    visualHighlights: [
      "Live Playwright interactive terminal console inside frosted glass",
      "Visual multi-node web linking PR → Playwright → JMeter → Deploy",
      "Holographic glowing hover borders that react to cursor focus",
      "Maximum visual density engineered for instant recruiter impact",
    ],
  },
];

export default function DemoPage() {
  const [activeVariant, setActiveVariant] = useState<LiquidVariant>("prism");
  const [copiedVariant, setCopiedVariant] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const currentMeta =
    VARIANTS.find((v) => v.id === activeVariant) || VARIANTS[0];

  const handleSelectVariant = () => {
    navigator.clipboard.writeText(
      `I choose Liquid Glass Variant: ${currentMeta.name} (${currentMeta.id})`
    );
    setCopiedVariant(true);
    setTimeout(() => setCopiedVariant(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#030408] text-white font-sans selection:bg-indigo-500/30 selection:text-white pb-32">
      {/* =================================================================== */}
      {/* FLOATING STUDIO CONTROL BAR                                         */}
      {/* =================================================================== */}
      <div className="sticky top-0 z-50 bg-[#030408]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Studio Brand */}
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Liquid Glass Studio
                </span>
                <span className="text-zinc-600">|</span>
                <span className="text-xs text-indigo-300 font-medium">
                  5 Visual-First Variations
                </span>
              </div>
            </div>
          </div>

          {/* Variant Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
            {VARIANTS.map((v) => {
              const isSelected = activeVariant === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveVariant(v.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-white text-zinc-950 font-bold shadow-lg shadow-white/10 scale-[1.02]"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        v.id === "prism"
                          ? "#8b5cf6"
                          : v.id === "flow"
                          ? "#06b6d4"
                          : v.id === "opaline"
                          ? "#f43f5e"
                          : v.id === "monolith"
                          ? "#e2e8f0"
                          : "#22c55e",
                    }}
                  />
                  <span>{v.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleSelectVariant}
            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-500/25 transition-all cursor-pointer"
          >
            {copiedVariant ? (
              <>
                <Check size={14} />
                <span>Choice Copied!</span>
              </>
            ) : (
              <>
                <CheckCircle2 size={14} />
                <span>Select {currentMeta.name.split(" ")[0]}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* VARIANT HIGHLIGHT HUD                                               */}
      {/* =================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4 relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-mono text-xs font-semibold uppercase">
                  Liquid Glass #{VARIANTS.findIndex((v) => v.id === activeVariant) + 1}
                </span>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {currentMeta.name}
                </h1>
              </div>
              <p className="text-sm text-zinc-300 mt-1 font-normal">
                {currentMeta.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-zinc-500">Base: </span>
                <span className="text-zinc-200 font-semibold">{currentMeta.bgHex}</span>
              </div>
              <div className="bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-zinc-500">Accents: </span>
                <span className="text-indigo-300 font-semibold">
                  {currentMeta.accentColors.join(", ")}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-xs relative z-10">
            {currentMeta.visualHighlights.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-zinc-200 bg-black/40 p-3 rounded-xl border border-white/10"
              >
                <Sparkles size={13} className="text-indigo-400 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 1:1 SCALE VISUAL PREVIEW CONTAINER                                  */}
      {/* =================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border border-white/15 rounded-3xl overflow-hidden shadow-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVariant}
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }
              }
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeVariant === "prism" && <ObsidianPrismPreview />}
              {activeVariant === "flow" && <CyanIndigoFlowPreview />}
              {activeVariant === "opaline" && <FrostedOpalinePreview />}
              {activeVariant === "monolith" && <MonolithicMinimalistPreview />}
              {activeVariant === "hologram" && <KineticHologramPreview />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =================================================================== */}
      {/* BOTTOM SELECTION CALLOUT                                            */}
      {/* =================================================================== */}
      <div className="max-w-3xl mx-auto px-4 text-center mt-12">
        <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2">
          Visual-First Selection
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Which Liquid Glass variant feels like home?
        </h2>
        <p className="text-sm text-zinc-400 mt-2">
          Tell me in the chat:{" "}
          <code className="text-indigo-300 font-mono bg-white/10 px-2 py-0.5 rounded border border-white/15">
            I choose {currentMeta.name}
          </code>
          . Then I will execute the complete rebuild using that exact visual system!
        </p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSelectVariant}
            className="px-6 py-3 rounded-2xl bg-white text-zinc-950 font-bold text-sm shadow-xl hover:bg-zinc-200 transition-all cursor-pointer flex items-center gap-2"
          >
            {copiedVariant ? (
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
/* VARIANT 1: OBSIDIAN PRISM GLASS (Midnight Caustics & 3D Glass Tiles)     */
/* ========================================================================= */
function ObsidianPrismPreview() {
  return (
    <div className="relative bg-[#05060F] text-zinc-100 p-8 sm:p-14 overflow-hidden">
      {/* Multi-Layer Ambient Caustic Lights */}
      <div className="absolute top-10 left-1/3 w-[550px] h-[350px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Glass Navbar */}
      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between p-3 px-5 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-xl shadow-black/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-700 flex items-center justify-center font-bold text-xs text-white shadow-md shadow-violet-500/30">
            MSM
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            Muhammad Shazzad Mia
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SQA II · Brain Station 23</span>
          </div>
          <a
            href="/resume.pdf"
            className="hidden sm:inline-flex px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-white transition-all"
          >
            CV
          </a>
        </div>
      </div>

      {/* Hero Visual Display */}
      <div className="relative z-10 max-w-5xl mx-auto pt-14 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md text-xs font-mono text-violet-300 mb-6">
          <Sparkles size={13} className="text-violet-400" />
          <span>70% Visual Telemetry · Zero Prose Wall</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05] max-w-3xl">
          Automating Quality with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-300 to-emerald-400">
            Prism Precision.
          </span>
        </h2>

        {/* 4 Prism 3D Glass Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {[
            {
              val: "80%+",
              sub: "Coverage",
              desc: "120+ E2E Journeys",
              accent: "text-violet-400",
              border: "border-violet-500/30",
            },
            {
              val: "75%",
              sub: "Runtime Cut",
              desc: "14h → 3.5h Parallel",
              accent: "text-emerald-400",
              border: "border-emerald-500/30",
            },
            {
              val: "15k+",
              sub: "Concurrency",
              desc: "Virtual Users Tested",
              accent: "text-sky-400",
              border: "border-sky-500/30",
            },
            {
              val: "99.4%",
              sub: "Uptime",
              desc: "Zero Rollback Gate",
              accent: "text-pink-400",
              border: "border-pink-500/30",
            },
          ].map((m, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl bg-white/[0.03] border ${m.border} backdrop-blur-3xl shadow-xl shadow-black/50 hover:bg-white/[0.06] transition-all group`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  {m.sub}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:scale-150 transition-transform" />
              </div>
              <div className={`text-3xl font-black mt-2 font-mono ${m.accent}`}>
                {m.val}
              </div>
              <div className="text-xs text-zinc-400 mt-1">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* Visual Pipeline SVG Flow */}
        <div className="mt-8 p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 pb-3 border-b border-white/10">
            <span className="flex items-center gap-2 text-white font-semibold">
              <Cpu size={14} className="text-violet-400" />
              Visual Automated Pipeline Architecture (Shwapno &amp; Paragon)
            </span>
            <span className="text-emerald-400 font-bold">100% Deterministic</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            {[
              {
                step: "01",
                title: "PR Static Ingest",
                detail: "Lint, Typecheck & Secret Scan",
                tag: "Webhook",
              },
              {
                step: "02",
                title: "Playwright E2E Grid",
                detail: "4 Parallel Workers (POM)",
                tag: "Chromium, WebKit",
              },
              {
                step: "03",
                title: "JMeter Concurrency",
                detail: "15,000 VUs Flash Surges",
                tag: "p95 < 1.74s",
              },
              {
                step: "04",
                title: "Release Sign-off",
                detail: "Zero-defect verified deploy",
                tag: "Excellence Award",
              },
            ].map((node, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-violet-500/40 transition-all relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>NODE {node.step}</span>
                  <span className="text-violet-300 font-bold">{node.tag}</span>
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {node.title}
                </div>
                <div className="text-xs text-zinc-400 mt-1">{node.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* VARIANT 2: CYAN & INDIGO AURORA FLOW (Dynamic Latency Wave & Cockpit)    */
/* ========================================================================= */
function CyanIndigoFlowPreview() {
  return (
    <div className="relative bg-[#040816] text-zinc-100 p-8 sm:p-14 overflow-hidden">
      {/* Flowing Aurora Beams */}
      <div className="absolute top-0 right-10 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Cockpit Nav */}
      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between pb-8 border-b border-cyan-500/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-xs text-black">
            MSM
          </div>
          <div>
            <div className="text-sm font-bold text-white">Muhammad Shazzad Mia</div>
            <div className="text-[10px] font-mono text-cyan-400">
              SQA Automation Engineer II
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            Active Telemetry Feed
          </span>
        </div>
      </div>

      {/* Hero Visual Area */}
      <div className="relative z-10 max-w-5xl mx-auto pt-10 pb-8">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-3xl leading-[1.08]">
          Fluid Aurora Telemetry for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
            Enterprise Concurrency.
          </span>
        </h2>

        {/* Visual Latency Curve Wave Card */}
        <div className="mt-8 p-6 rounded-3xl bg-cyan-950/20 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cyan-500/20 text-xs font-mono">
            <div className="flex items-center gap-2 text-cyan-300 font-bold">
              <Activity size={16} className="text-cyan-400 animate-pulse" />
              <span>APACHE JMETER LATENCY PROFILING (15,000 VUs)</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-300">
              <span>p95: 1.74s</span>
              <span className="text-cyan-400 font-bold">Error Rate: 0.02%</span>
              <span className="text-emerald-400 font-bold">PASS &lt; 2.0s SLA</span>
            </div>
          </div>

          {/* SVG Spline Curve Visualization */}
          <div className="py-6 relative">
            <svg
              viewBox="0 0 800 180"
              className="w-full h-36 stroke-cyan-400 fill-none"
            >
              <defs>
                <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Fill area */}
              <path
                d="M 0 140 Q 150 135 250 80 T 500 60 T 700 95 T 800 100 L 800 180 L 0 180 Z"
                fill="url(#cyanGradient)"
                stroke="none"
              />
              {/* Main curve */}
              <path
                d="M 0 140 Q 150 135 250 80 T 500 60 T 700 95 T 800 100"
                strokeWidth="3"
                className="stroke-cyan-400"
              />
              {/* Threshold line */}
              <line
                x1="0"
                y1="40"
                x2="800"
                y2="40"
                stroke="#ec4899"
                strokeWidth="1.5"
                strokeDasharray="6,6"
              />
              <text x="10" y="32" fill="#ec4899" fontSize="10" fontFamily="monospace">
                SLA CEILING: 2.00s
              </text>
              <circle cx="500" cy="60" r="5" fill="#06b6d4" className="animate-ping" />
              <circle cx="500" cy="60" r="5" fill="#ffffff" />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-cyan-500/20 text-center text-xs font-mono">
            <div>
              <span className="text-zinc-500 text-[10px]">PEAK CONCURRENCY</span>
              <div className="text-lg font-bold text-white">15,000 Users</div>
            </div>
            <div>
              <span className="text-zinc-500 text-[10px]">AVG LATENCY</span>
              <div className="text-lg font-bold text-cyan-300">1.12s</div>
            </div>
            <div>
              <span className="text-zinc-500 text-[10px]">TOTAL REQUESTS</span>
              <div className="text-lg font-bold text-white">1.8M / Session</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* VARIANT 3: FROSTED OPALINE & SUNSET MESH (Circular Gauge & Sunset Glow)   */
/* ========================================================================= */
function FrostedOpalinePreview() {
  return (
    <div className="relative bg-[#090514] text-zinc-100 p-8 sm:p-14 overflow-hidden">
      {/* Sunset Mesh Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-rose-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-violet-600/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Opaline Bar */}
      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between pb-8 border-b border-rose-500/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-violet-600 flex items-center justify-center font-bold text-xs text-white">
            MSM
          </div>
          <div>
            <div className="text-sm font-bold text-white">Muhammad Shazzad Mia</div>
            <div className="text-[10px] text-rose-300">Brain Station 23 · SQA II</div>
          </div>
        </div>

        <button className="px-4 py-1.5 rounded-full bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-200 text-xs font-semibold backdrop-blur-md">
          Download Resume (PDF)
        </button>
      </div>

      {/* Hero Visual Area with Circular Gauge */}
      <div className="relative z-10 max-w-5xl mx-auto pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-mono text-rose-300">
              ✦ Frosted Opaline &amp; Sunset Mesh
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mt-4 leading-[1.08]">
              Soft Refraction.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-purple-300 to-amber-300">
                Rigorous Proof.
              </span>
            </h2>
            <p className="mt-4 text-base text-zinc-300 max-w-xl leading-relaxed">
              Precision test automation engineering eliminating manual overhead
              across nationwide enterprise platforms.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Playwright TS",
                "JMeter 15k",
                "CI/CD Gate",
                "Shwapno",
                "Paragon",
                "Batch 16 SQA",
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 backdrop-blur-md"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Circular SVG 80% Metric Wheel */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-rose-500/30 backdrop-blur-3xl shadow-2xl flex flex-col items-center text-center">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#2e1065"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#sunsetStroke)"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="sunsetStroke" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black text-white font-mono">80%+</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    Automated
                  </span>
                </div>
              </div>
              <div className="text-sm font-bold text-white mt-4">
                120+ High-Value User Flows
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                Slashing regression cycles by 75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* VARIANT 4: MONOLITHIC MINIMALIST GLASS (Laser Specular Rims & Pure Space) */
/* ========================================================================= */
function MonolithicMinimalistPreview() {
  return (
    <div className="relative bg-[#030408] text-white p-8 sm:p-16 overflow-hidden">
      {/* Subtle Cold Light Horizon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Nav */}
      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between pb-10 border-b border-white/10">
        <span className="font-mono text-xs font-bold tracking-widest text-white uppercase">
          MUHAMMAD SHAZZAD MIA // SQA II
        </span>
        <span className="text-xs font-mono text-zinc-400">
          Brain Station 23 · Dhaka
        </span>
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-5xl mx-auto pt-16 pb-12">
        <div className="max-w-3xl">
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[0.98]">
            Quality, reduced to its essence.
          </h2>
          <p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
            Lead automation engineer specializing in resilient Playwright
            frameworks and high-concurrency JMeter stress architecture.
          </p>
        </div>

        {/* Monolithic Glass Slabs with Top Specular Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {[
            {
              num: "80%",
              label: "Automated Suite",
              detail: "120+ Production Flows",
            },
            {
              num: "15k",
              label: "Concurrent Users",
              detail: "JMeter Flash Surges",
            },
            {
              num: "99.4%",
              label: "Verified Uptime",
              detail: "15+ Zero-Defect Sprints",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/[0.02] border-t border-white/30 border-x border-b border-white/5 backdrop-blur-2xl shadow-2xl relative group hover:bg-white/[0.04] transition-all"
            >
              <div className="text-5xl sm:text-6xl font-extralight tracking-tight text-white font-mono">
                {card.num}
              </div>
              <div className="text-sm font-semibold text-zinc-200 mt-4">
                {card.label}
              </div>
              <div className="text-xs text-zinc-500 mt-1">{card.detail}</div>
            </div>
          ))}
        </div>

        {/* Direct Contact Glass Row */}
        <div className="mt-12 p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-300">
          <div>
            <span>DIRECT CHANNELS: </span>
            <strong className="text-white">shazzadm065@gmail.com</strong>
            <span className="mx-2 text-zinc-600">|</span>
            <strong className="text-white">+8801621864789</strong>
          </div>
          <a
            href="/resume.pdf"
            className="text-white font-bold hover:underline flex items-center gap-1.5"
          >
            <span>Download Curriculum Vitae</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* VARIANT 5: KINETIC HOLOGRAM DECK (Glass Terminal Simulator & Node Web)    */
/* ========================================================================= */
function KineticHologramPreview() {
  return (
    <div className="relative bg-[#050711] text-zinc-100 p-8 sm:p-14 overflow-hidden">
      {/* Multi-chroma laser ambient glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[300px] bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Deck Bar */}
      <div className="relative z-10 max-w-5xl mx-auto flex items-center justify-between pb-6 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black border border-emerald-400/40 flex items-center justify-center font-mono text-xs font-bold text-emerald-400">
            &gt;_
          </div>
          <div className="font-mono text-xs text-zinc-300">
            <strong className="text-white">HOLOGRAPHIC_COCKPIT</strong> // SHAZZAD.DEV
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>PLAYWRIGHT_GRID_READY</span>
          </span>
        </div>
      </div>

      {/* Hero Visual Telemetry */}
      <div className="relative z-10 max-w-5xl mx-auto pt-8 pb-6">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          TEST RUNNER HOLOGRAM &amp; AUTOMATION WEB
        </h2>

        {/* Live Terminal Console Glass Window */}
        <div className="mt-6 rounded-2xl bg-black/60 border border-emerald-500/30 backdrop-blur-2xl p-5 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
            <span className="text-zinc-400 flex items-center gap-2">
              <Terminal size={14} className="text-emerald-400" />
              <span>TERMINAL TELEMETRY // 4 WORKERS PARALLEL</span>
            </span>
            <span className="text-emerald-400 font-bold">120/120 PASSED (0 FLAKES)</span>
          </div>

          <div className="mt-3 space-y-1.5 font-mono text-xs text-zinc-300">
            <div className="flex items-center justify-between text-zinc-400">
              <span>● [P1] Shwapno bKash OTP Webhook Checkout</span>
              <span className="text-emerald-400 font-bold">PASS (412ms)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>● [P1] Paragon Multi-Branch Inventory Sync</span>
              <span className="text-emerald-400 font-bold">PASS (720ms)</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>● [P1] Algolia Search Indexing Stress Test</span>
              <span className="text-emerald-400 font-bold">PASS (380ms)</span>
            </div>
          </div>
        </div>

        {/* 4 Hologram Visual Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-emerald-500/30 backdrop-blur-xl">
            <div className="text-[10px] font-mono text-zinc-400 uppercase">COVERAGE</div>
            <div className="text-2xl font-black text-emerald-400 font-mono mt-1">80%+</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-cyan-500/30 backdrop-blur-xl">
            <div className="text-[10px] font-mono text-zinc-400 uppercase">LOAD TEST</div>
            <div className="text-2xl font-black text-cyan-400 font-mono mt-1">15,000 VUs</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-purple-500/30 backdrop-blur-xl">
            <div className="text-[10px] font-mono text-zinc-400 uppercase">EXECUTION CUT</div>
            <div className="text-2xl font-black text-purple-400 font-mono mt-1">75% Faster</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-pink-500/30 backdrop-blur-xl">
            <div className="text-[10px] font-mono text-zinc-400 uppercase">PLATFORM SLA</div>
            <div className="text-2xl font-black text-pink-400 font-mono mt-1">99.4% Up</div>
          </div>
        </div>
      </div>
    </div>
  );
}
