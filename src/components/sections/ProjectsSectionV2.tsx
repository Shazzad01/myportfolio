"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  PlaywrightIcon,
  JMeterIcon,
  GitHubActionsIcon,
  GitLabIcon,
  PostmanIcon,
  TypeScriptIcon,
  DockerIcon,
} from "@/components/ui/SvgIcons";

interface CaseStudy {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  scope: string;
  period: string;
  award?: string;
  brandIcons: React.ComponentType<{ className?: string }>[];
  challenge: string;
  approach: string;
  impact: string;
  beforeAfter: {
    before: string;
    after: string;
  };
  architectureFlow: string[];
}

export default function ProjectsSectionV2() {
  const shouldReduceMotion = useReducedMotion();

  const caseStudies: CaseStudy[] = [
    {
      id: "shwopno",
      stepNumber: "01",
      title: "Shwopno.com",
      subtitle: "Enterprise Omnichannel E-Commerce Platform (ACI Logistics)",
      scope: "SQA Automation & Performance Lead · Brain Station 23",
      period: "Apr 2024 – Present",
      award: "nopStation Agility & Excellence Award Winner",
      brandIcons: [PlaywrightIcon, JMeterIcon, GitHubActionsIcon, TypeScriptIcon],
      challenge:
        "High-concurrency checkout traffic floods during national flash sales created checkout failures and cart inventory drift across 60+ retail outlets. Manual regression took 14 hours per release cycle.",
      approach:
        "Architected a modular Playwright (TypeScript) test framework utilizing Page Object Models (POM) across 120+ flows. Benchmarked server capacity in Apache JMeter simulating 15,000+ concurrent virtual users (10,000+ RPM) and established automated PR gates in GitHub Actions.",
      impact:
        "Maintained 99.4% platform uptime with zero critical production outages across 15+ major releases supporting 500,000+ monthly active shoppers. Slashed regression runtime by 75% (from 14 hours down to 3.5 hours).",
      beforeAfter: {
        before: "14 hours manual regression · Checkout bottlenecks during flash sales",
        after: "3.5 hours automated suite (75% cut) · 500,000+ active shoppers · 99.4% uptime",
      },
      architectureFlow: [
        "Storefront Web & Native Mobile Apps",
        "Parallel Playwright Grid (4 Workers)",
        "Real-Time Multi-Branch Stock Sync",
        "bKash / Nagad 0-Defect Release Gate",
      ],
    },
    {
      id: "paragon",
      stepNumber: "02",
      title: "Paragon Food Delivery",
      subtitle: "Food & FMCG Online Delivery Platform (paragonfood.com.bd)",
      scope: "Lead SQA Engineer · Brain Station 23",
      period: "Jul 2025 – Mar 2026",
      award: "nopStation Agility & Excellence Award Winner",
      brandIcons: [PlaywrightIcon, GitLabIcon, PostmanIcon, DockerIcon],
      challenge:
        "Manual validation of dynamic discount coupons, multi-warehouse stock allocations, and express delivery slots consumed 6 hours per deployment, risking cart payment drop-offs.",
      approach:
        "Engineered end-to-end cross-browser Playwright test suites and Postman/Newman automated API contract testing integrated into containerized GitLab CI runner pipelines.",
      impact:
        "Accelerated release validation cycles from 6 hours to 90 minutes (75% faster), sustaining a 99% bug-free release standard and zero downtime across major delivery surges.",
      beforeAfter: {
        before: "6-hour manual release verification · Disjointed API & warehouse slot testing",
        after: "90-minute automated GitLab CI pipeline · 99% bug-free release standard",
      },
      architectureFlow: [
        "Web Storefront & Logistics Fleet App",
        "GitLab Runner Dockerized Browser Grid",
        "Postman / Newman API Contract Suite",
        "Slot-Based Dispatch & Zero-Downtime Gate",
      ],
    },
    {
      id: "nopstation",
      stepNumber: "03",
      title: "nopStation E-Commerce Suites",
      subtitle: "Global Enterprise nopCommerce Plugins & Theme Architectures",
      scope: "SQA Automation Specialist · Brain Station 23",
      period: "2024 – Present",
      award: "nopStation Technical Excellence",
      brandIcons: [PlaywrightIcon, TypeScriptIcon, GitHubActionsIcon],
      challenge:
        "Validating multi-tenant plugin compatibility across diverse nopCommerce enterprise storefront architectures and third-party payment gateways without manual regression drag.",
      approach:
        "Built reusable test harnesses with automated smoke suites, boundary edge-case fuzzing, and cross-version regression testing running on parallel matrix builds.",
      impact:
        "Achieved a 98.8% automated test pass rate across all enterprise customer plugin deployments and secured on-time release sign-offs.",
      beforeAfter: {
        before: "Fragmented multi-tenant testing · High manual regression overhead",
        after: "98.8% automated pass rate · Zero critical client escalation",
      },
      architectureFlow: [
        "Multi-Tenant Plugin Architecture",
        "Matrix Cross-Version Test Runner",
        "Third-Party Payment Contract Fuzzing",
        "Automated Production Packaging",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-max">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
              // 06 · Enterprise Automation Showcase
            </span>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Featured Case Studies
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            Production Quality Engineering
          </span>
        </div>

        {/* Unboxed Case Studies Stream (Zero Container Cards) */}
        <div className="space-y-16 sm:space-y-20">
          {caseStudies.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="border-b border-zinc-200/60 dark:border-zinc-800/60 pb-16 sm:pb-20 space-y-8"
            >
              {/* Project Meta Bar */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono-geist text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {project.stepNumber}
                    </span>
                    <h3 className="font-geist text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Scope, Award & Brand Icons */}
                <div className="flex flex-wrap items-center gap-3 font-mono-geist text-xs">
                  {project.award && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                      ★ {project.award}
                    </span>
                  )}
                  
                  {/* Brand SVGs */}
                  <div className="flex items-center gap-2 pl-2">
                    {project.brandIcons.map((IconComp, i) => (
                      <div key={i} className="w-5 h-5 flex items-center justify-center">
                        <IconComp className="w-full h-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Problem · Approach · Impact Triad (Pure Unboxed Typography) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-2">
                <div className="space-y-1.5">
                  <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-widest block font-semibold">
                    The Challenge
                  </span>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono-geist text-[11px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                    Engineering Approach
                  </span>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {project.approach}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-widest block font-semibold">
                    Quantified Outcome
                  </span>
                  <p className="text-sm text-zinc-900 dark:text-zinc-200 leading-relaxed font-medium">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Before vs After Impact Telemetry (Clean Minimalist Line) */}
              <div className="pt-4 border-t border-zinc-200/40 dark:border-zinc-800/40 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-geist gap-2">
                <div className="text-zinc-500">
                  <span className="text-zinc-400">Baseline:</span> {project.beforeAfter.before}
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span className="text-zinc-400">Result:</span> {project.beforeAfter.after}
                </div>
              </div>

              {/* Minimalist Pipeline Flow (Floating Horizontal Steps) */}
              <div className="pt-2">
                <span className="font-mono-geist text-[10px] text-zinc-400 uppercase tracking-wider block mb-2 font-semibold">
                  Automated Pipeline Architecture:
                </span>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono-geist text-zinc-600 dark:text-zinc-400">
                  {project.architectureFlow.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-800 dark:text-zinc-200">
                        {step}
                      </span>
                      {sIdx < project.architectureFlow.length - 1 && (
                        <span className="text-zinc-400">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
