"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
} from "lucide-react";

export default function AboutSectionV2() {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      num: "01",
      title: "Shift-Left Defect Prevention",
      desc: "Modeling boundary conditions, acceptance criteria, and payment failure edge-cases before developers commit code — catching defects at the requirement stage.",
    },
    {
      num: "02",
      title: "Parallel Automation Guardrails",
      desc: "Engineering Page Object Model (POM) Playwright suites in TypeScript running across Chromium, Firefox, and WebKit on GitHub Actions CI/CD to gate pull requests.",
    },
    {
      num: "03",
      title: "High-Concurrency Resilience",
      desc: "Simulating 15,000+ concurrent virtual users at 10,000+ RPM in Apache JMeter, isolating microservice latency bottlenecks before national flash sale traffic spikes.",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
              // 02 · Career Architecture &amp; Engineering Core
            </span>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Quality as an Architectural Property
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            Brain Station 23 · SQA Engineer II
          </span>
        </div>

        {/* Narrative & Core Pillars (Unboxed, Pure Typography) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & 3 Architectural Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Lead Narrative */}
            <p className="font-geist text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              At <strong className="text-zinc-900 dark:text-white font-semibold">Brain Station 23</strong>, I lead test automation and performance reliability for enterprise applications. Rather than treating testing as a downstream bottleneck, I engineer continuous quality guardrails directly into the delivery pipeline — cutting regression runtimes by 75% and guaranteeing zero critical production outages.
            </p>

            {/* 3 Numbered Architectural Pillars */}
            <div className="space-y-6 pt-2">
              {corePillars.map((pillar) => (
                <motion.div
                  key={pillar.num}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <span className="font-mono-geist text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="font-geist text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1 font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Verified Credentials & Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6 lg:border-l lg:border-zinc-200/60 dark:lg:border-zinc-800/60">
            
            {/* Enterprise Role */}
            <div className="space-y-1.5">
              <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-widest block font-semibold">
                Current Role
              </span>
              <h4 className="font-geist text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                Brain Station 23
              </h4>
              <p className="font-mono-geist text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                SQA Engineer II · Automation Lead (Apr 2024 – Present)
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal pt-1">
                Leading automated regression and load testing on enterprise e-commerce platforms (Shwopno.com, Paragon Food) supporting 500,000+ monthly active users.
              </p>
            </div>

            {/* Academic Credential */}
            <div className="space-y-1.5 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-widest block font-semibold">
                Education &amp; Academic Honors
              </span>
              <h4 className="font-geist text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                B.Sc. in Computer Science &amp; Engineering
              </h4>
              <p className="font-mono-geist text-xs text-zinc-600 dark:text-zinc-400">
                Daffodil International University (2023)
              </p>
              <div className="inline-flex items-center gap-2 pt-0.5">
                <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  CGPA 3.59 / 4.00
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="font-mono-geist text-[11px] text-zinc-500">
                  Batch 16 SQA Professional Certified
                </span>
              </div>
            </div>

            {/* Recognized Honor */}
            <div className="space-y-1.5 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-widest block font-semibold">
                Industry Recognition
              </span>
              <h4 className="font-geist text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                nopStation Agility &amp; Excellence Award
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Awarded for technical execution and 99.4% uptime stability during nationwide platform rollout (Team Shwopno &amp; Paragon).
              </p>
            </div>

            {/* Location & Availability */}
            <div className="space-y-1 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-widest block font-semibold">
                Location &amp; Availability
              </span>
              <p className="font-geist text-sm text-zinc-900 dark:text-white font-medium">
                Mirpur-11.5, Dhaka, Bangladesh (GMT+6)
              </p>
              <p className="font-mono-geist text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Global Remote &amp; Hybrid SDET Roles
              </p>
            </div>

          </div>

        </div>

        {/* Minimalist Verified Metrics Strip (No Box, Pure Spatial Cadence) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="font-geist text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              80%+
            </div>
            <div className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
              Automated Coverage
            </div>
            <div className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
              120+ Core Flows in CI
            </div>
          </div>

          <div>
            <div className="font-geist text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              75%
            </div>
            <div className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
              Runtime Reduction
            </div>
            <div className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
              14h Manual → 3.5h CI
            </div>
          </div>

          <div>
            <div className="font-geist text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              15k+
            </div>
            <div className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
              Virtual Users
            </div>
            <div className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
              JMeter p95 &lt; 1.8s
            </div>
          </div>

          <div>
            <div className="font-geist text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
              99.4%
            </div>
            <div className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
              Platform Uptime
            </div>
            <div className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">
              15+ Major Releases
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
