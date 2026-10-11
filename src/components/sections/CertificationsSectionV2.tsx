"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  Award,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  FileText,
  BookOpen,
  Sparkles,
} from "lucide-react";

type CategoryId = "all" | "research" | "honors" | "degree";

interface CategoryTab {
  id: CategoryId;
  label: string;
  count: number;
}

const categories: CategoryTab[] = [
  { id: "all", label: "All Credentials", count: 5 },
  { id: "research", label: "Peer-Reviewed Research", count: 2 },
  { id: "honors", label: "Industry Honors & SQA", count: 2 },
  { id: "degree", label: "Academic Degree", count: 1 },
];

export default function CertificationsSectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const showResearch = activeCategory === "all" || activeCategory === "research";
  const showHonors = activeCategory === "all" || activeCategory === "honors";
  const showDegree = activeCategory === "all" || activeCategory === "degree";

  return (
    <section id="honors" className="section-padding relative overflow-hidden">
      {/* Anchor alias for legacy hash navigation */}
      <span id="certifications" className="absolute -top-24" aria-hidden="true" />

      {/* Specular Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[340px] bg-gradient-to-b from-black/[0.02] dark:from-white/[0.02] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-8 sm:mb-10 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [RESEARCH_&amp;_CREDENTIALS]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Research Publications &amp; Industry Honors
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            5 Audited Credentials · Zero Hallucinations
          </span>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-8 sm:mb-12">
          Peer-reviewed scientific publications, formal test engineering certifications, and recognized industry awards. Every entry verified with published DOI records and physical institutional certificates.
        </p>

        {/* Monolithic Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter credentials by category"
          className="flex flex-wrap items-center gap-2 p-1.5 mb-10 sm:mb-14 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 w-fit"
        >
          {categories.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls="credentials-grid"
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2 rounded-xl font-mono-geist text-xs transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-md"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] tabular-nums font-mono-geist ${
                    isActive
                      ? "bg-white/20 dark:bg-black/20 text-white dark:text-zinc-950"
                      : "bg-black/5 dark:bg-white/10 text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category-Filtered Grid Container with Container-Level AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id="credentials-grid"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="space-y-10 sm:space-y-12"
          >
            {/* ========================================================================= */}
            {/* 1. IEEE XPLORE PEER-REVIEWED PUBLICATION (FLAGSHIP RESEARCH SLAB) */}
            {/* ========================================================================= */}
            {showResearch && (
              <div className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 hover:bg-white/[0.03] transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
                  
                  {/* Left Column: Citation, Narrative & Metadata */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* Top Badge & Metadata */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-geist text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold text-[11px]">
                        <BookOpen size={13} className="shrink-0" />
                        [IEEE XPLORE PUBLISHED RESEARCH · ICCCI &apos;23]
                      </span>
                      <span className="text-zinc-400 dark:text-zinc-600">•</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Year: 2023</span>
                      <span className="text-zinc-400 dark:text-zinc-600">•</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Technically Sponsored by IEEE Madras Section</span>
                    </div>

                    {/* Paper Title */}
                    <div>
                      <h3 className="font-geist text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        An Approach to Detect Melanoma Skin Cancer Using Fast.ai CNN Models
                      </h3>
                      <p className="font-mono-geist text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium mt-2">
                        13th International Conference on Computer Communication and Informatics (ICCCI 2023)
                      </p>
                    </div>

                    {/* Authorship Citation */}
                    <div className="border-l-2 border-blue-500 pl-4 py-1 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-mono-geist bg-black/[0.01] dark:bg-white/[0.01] rounded-r-lg">
                      <span className="text-zinc-500 dark:text-zinc-400 block font-sans text-xs mb-0.5">Authors:</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">Md Shazzad Mia</span>, Md. Jahid Hasan, et al.
                    </div>

                    {/* Research Summary */}
                    <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      Peer-reviewed scientific publication presenting an automated deep learning diagnostic pipeline for early malignant melanoma skin cancer classification. Leveraged Fast.ai transfer learning on deep convolutional neural networks (ResNet), cyclical learning rate policies, and automated ROC-AUC evaluation curves to achieve high-precision lesion discrimination.
                    </p>

                    {/* Quantified Research Metrics & Publication Chips */}
                    <div className="space-y-3 pt-2">
                      <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                        Peer-Reviewed Technical Specifications:
                      </span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                          <span className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white block">
                            Fast.ai CNN
                          </span>
                          <span className="font-mono-geist text-[11px] text-blue-600 dark:text-blue-400 font-semibold block mt-0.5">
                            Deep Learning Model
                          </span>
                          <span className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                            Transfer learning with progressive image resizing and fine-tuning.
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                          <span className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white block">
                            Computer Vision
                          </span>
                          <span className="font-mono-geist text-[11px] text-blue-600 dark:text-blue-400 font-semibold block mt-0.5">
                            Dermoscopic Analysis
                          </span>
                          <span className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                            Automated segmentation &amp; binary classification (Malignant vs Benign).
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                          <span className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white block">
                            IEEE Indexed
                          </span>
                          <span className="font-mono-geist text-[11px] text-blue-600 dark:text-blue-400 font-semibold block mt-0.5">
                            Electronic ISBN
                          </span>
                          <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                            979-8-3503-1002-3
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons: Direct IEEE Link + Conference Certificate */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href="https://ieeexplore.ieee.org/abstract/document/10128274"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono-geist text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all"
                      >
                        <ExternalLink size={14} />
                        <span>Read on IEEE Xplore</span>
                      </a>

                      <a
                        href="/certificates/ieee_iccci_2023_certificate.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] dark:bg-white/[0.05] hover:bg-white/[0.1] border border-black/10 dark:border-white/15 text-zinc-900 dark:text-white font-mono-geist text-xs font-semibold transition-all"
                      >
                        <FileText size={14} className="text-blue-500" />
                        <span>View Presentation Certificate (PDF)</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Publication Telemetry Box */}
                  <div className="lg:col-span-4 w-full">
                    <div className="rounded-2xl border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.02] p-5 sm:p-6 space-y-4 font-mono-geist text-xs shadow-xl">
                      <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                        <span className="text-zinc-500 dark:text-zinc-400 uppercase text-[10px] tracking-wider font-semibold">
                          Publication Citation
                        </span>
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-semibold">
                          VERIFIED
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="text-zinc-500 dark:text-zinc-400 block text-[11px]">Conference:</span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-xs">
                            13th ICCCI (Coimbatore, India)
                          </span>
                        </div>

                        <div>
                          <span className="text-zinc-500 dark:text-zinc-400 block text-[11px]">IEEE Sponsor:</span>
                          <span className="text-zinc-800 dark:text-zinc-200 text-xs">
                            IEEE Madras Section
                          </span>
                        </div>

                        <div>
                          <span className="text-zinc-500 dark:text-zinc-400 block text-[11px]">DOI:</span>
                          <a
                            href="https://doi.org/10.1109/ICCCI56745.2023.10128274"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline break-all text-[11px]"
                          >
                            10.1109/ICCCI56745.2023.10128274
                          </a>
                        </div>

                        <div>
                          <span className="text-zinc-500 dark:text-zinc-400 block text-[11px]">DVD ISBN:</span>
                          <span className="text-zinc-700 dark:text-zinc-300 text-xs">
                            979-8-3503-1001-6
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                        <span>Indexed in IEEE Xplore Digital Library</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* 2. FEATURED INDUSTRY HONOR — nopStation Agility & Excellence Award */}
            {/* ========================================================================= */}
            {showHonors && (
              <div className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 hover:bg-white/[0.04] transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                  
                  {/* Left Column: Citation, Narrative & Quantified Delivery Metrics */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Top Badge & Metadata */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-geist text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                        <Trophy size={13} className="shrink-0" />
                        [AWARD OF EXCELLENCE · ZERO ROLLBACK]
                      </span>
                      <span className="text-zinc-400 dark:text-zinc-600">•</span>
                      <span className="text-zinc-600 dark:text-zinc-400">Year: 2024</span>
                      <span className="text-zinc-400 dark:text-zinc-600">•</span>
                      <span className="text-zinc-600 dark:text-zinc-400">nopStation × Brain Station 23</span>
                    </div>

                    {/* Award Title */}
                    <div>
                      <h3 className="font-geist text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        nopStation Agility &amp; Excellence Award
                      </h3>
                      <p className="font-mono-geist text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-2">
                        Awarded to Team Shwapno &amp; Paragon for High-Impact Quality Engineering
                      </p>
                    </div>

                    {/* Official Citation Quote */}
                    <div className="border-l-2 border-emerald-500 pl-4 py-1.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 italic font-normal leading-relaxed bg-black/[0.01] dark:bg-white/[0.01] rounded-r-lg">
                      &ldquo;In recognition of exceptional Agility &amp; Excellence in delivering impactful solutions. This award highlights teamwork, innovation, and commitment to driving results.&rdquo;
                    </div>

                    {/* Context Summary */}
                    <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      Recognized for outstanding agility, test coverage leadership, and zero-defect deliveries across Bangladesh&apos;s premier grocery e-commerce platform (Shwapno) and enterprise agro-food supply operations (Paragon).
                    </p>

                    {/* Quantified SQA Delivery Highlights */}
                    <div className="space-y-3 pt-2">
                      <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                        Verified SQA Lead Contributions &amp; SLA Metrics:
                      </span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                          <span className="font-geist text-xl font-bold text-zinc-900 dark:text-white block">
                            99.4%
                          </span>
                          <span className="font-mono-geist text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                            Platform Uptime
                          </span>
                          <span className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                            Zero critical defects across 15+ major production releases.
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                          <span className="font-geist text-xl font-bold text-zinc-900 dark:text-white block">
                            75% Cut
                          </span>
                          <span className="font-mono-geist text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                            Regression Runtime
                          </span>
                          <span className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                            Playwright POM reduced 14h manual cycles down to 3.5h.
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
                          <span className="font-geist text-xl font-bold text-zinc-900 dark:text-white block">
                            15,000+
                          </span>
                          <span className="font-mono-geist text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                            Virtual Users
                          </span>
                          <span className="font-geist text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">
                            Apache JMeter distributed stress benchmarking (p95 &lt; 1.74s).
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status Verification Pip */}
                    <div className="pt-2 flex items-center gap-2 font-mono-geist text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Verified physical crystal trophy inscribed to Team Shwapno &amp; Paragon · Brain Station 23</span>
                    </div>
                  </div>

                  {/* Right Column: Physical Crystal Trophy Photograph */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center">
                    <div className="w-full max-w-xs sm:max-w-sm overflow-hidden rounded-2xl border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] shadow-2xl">
                      <Image
                        src="/images/awards/nopstation-award.jpg"
                        alt="nopStation Agility & Excellence Award Crystal Trophy - Team Shwapno & Paragon, Brain Station 23"
                        width={480}
                        height={640}
                        className="w-full h-auto object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                        priority
                      />
                      <div className="p-4 bg-zinc-50/80 dark:bg-zinc-950/80 border-t border-black/5 dark:border-white/5 text-center font-mono-geist">
                        <p className="text-xs font-semibold text-zinc-900 dark:text-white">
                          Official Crystal Trophy
                        </p>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                          Brain Station 23 · Dhaka, Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* 3, 4, 5: GRID OF RESEARCH PAPER 2, SQA PROFESSIONAL & ACADEMIC DEGREE */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Plaque 3: Healthcare ML Research Paper (ICDABM 2022) */}
              {showResearch && (
                <div className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between font-mono-geist text-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-semibold text-[11px]">
                        <BookOpen size={13} className="shrink-0" />
                        [HEALTHCARE ML RESEARCH]
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400 font-mono-geist">
                        Year: 2022
                      </span>
                    </div>

                    {/* Title & Forum */}
                    <div>
                      <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                        An Effective System of Diabetes Readmission Prediction
                      </h3>
                      <p className="font-mono-geist text-xs text-purple-600 dark:text-purple-400 mt-1">
                        ICDABM 2022 · Shivaji College (Univ of Delhi) &amp; DIU
                      </p>
                    </div>

                    {/* Authorship */}
                    <div className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400">
                      <span>Authors: </span>
                      <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Md Shazzad Mia</span>, et al.
                    </div>

                    {/* Description */}
                    <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      Predictive healthcare machine learning investigation into 30-day clinical readmission factors among diabetic inpatients across a clinical dataset of 100,000+ patient encounters. Handled class imbalance and optimized ROC-AUC clinical recall sensitivity.
                    </p>

                    {/* Technical Highlights */}
                    <div className="space-y-2 pt-2">
                      <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                        Key Research Contributions:
                      </span>
                      <ul className="space-y-2 font-geist text-xs text-zinc-700 dark:text-zinc-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                          <span><strong>100,000+ Patient Cohort:</strong> Large-scale clinical inpatient records analyzed for readmission risks.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                          <span><strong>Feature Pipeline:</strong> Clinical feature encoding, variance thresholding, and outlier normalization.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                          <span><strong>International Forum:</strong> Presented at ICDABM2022 with academic delegation.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Verification Footer & CTA */}
                  <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 space-y-3">
                    <a
                      href="/certificates/diabetes_readmission_icdabm_certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-mono-geist text-xs font-semibold transition-all"
                    >
                      <FileText size={13} />
                      <span>View Paper Certificate (PDF)</span>
                    </a>
                    <div className="flex items-center justify-between font-mono-geist text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-medium">
                        <ShieldCheck size={13} />
                        Verified Paper Presentation
                      </span>
                      <span>Univ of Delhi &amp; DIU</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Plaque 4: Batch 16 SQA Professional Certification */}
              {showHonors && (
                <div className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between font-mono-geist text-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                        <Award size={13} className="shrink-0" />
                        [PROFESSIONAL SQA · BATCH 16]
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400 font-mono-geist">
                        Year: 2023
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                        SQA Professional Certification
                      </h3>
                      <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        IT Training BD · Certificate ID: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">ITB-B16-366</span>
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      Hands-on professional SQA and cyber security program under Sabiul Islam Rashed (Head of Cyber Security &amp; SQA @BurnSys). Awarded for stellar performance across automated test architectures and security validation.
                    </p>

                    {/* Core Modules & Competencies */}
                    <div className="space-y-2 pt-2">
                      <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                        Core Curriculum Modules:
                      </span>
                      <ul className="space-y-2 font-geist text-xs text-zinc-700 dark:text-zinc-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span><strong>Manual Rigor:</strong> Test planning, severity matrices, and Jira RTM traceability.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span><strong>Automation Frameworks:</strong> Selenium WebDriver, Playwright, POM design patterns.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span><strong>API &amp; Performance:</strong> Postman schema testing and JMeter load benchmarking.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Verification Footer & CTA */}
                  <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 space-y-3">
                    <a
                      href="/certificates/sqa_batch16_certificate.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-mono-geist text-xs font-semibold transition-all"
                    >
                      <FileText size={13} />
                      <span>View Course Certificate (PNG)</span>
                    </a>
                    <div className="flex items-center justify-between font-mono-geist text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                        <ShieldCheck size={13} />
                        ID: ITB-B16-366
                      </span>
                      <span>Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Plaque 5: B.Sc. in Computer Science & Engineering */}
              {showDegree && (
                <div className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all flex flex-col justify-between">
                  <div className="space-y-5">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between font-mono-geist text-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                        <GraduationCap size={13} className="shrink-0" />
                        [ACADEMIC DEGREE · CSE]
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400 font-mono-geist">
                        2019 – 2023
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                        B.Sc. in Computer Science &amp; Engineering
                      </h3>
                      <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        Daffodil International University (DIU) · <span className="text-emerald-600 dark:text-emerald-400 font-semibold">CGPA 3.59 / 4.00</span>
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      Four-year formal engineering degree establishing deep mathematical and computational foundations in software architecture, algorithms, database systems, and object-oriented design patterns.
                    </p>

                    {/* Core Foundations & Academic Standing */}
                    <div className="space-y-2 pt-2">
                      <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                        Engineering Foundations:
                      </span>
                      <ul className="space-y-2 font-geist text-xs text-zinc-700 dark:text-zinc-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span><strong>Architecture:</strong> OOP principles, Clean Architecture, design patterns.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span><strong>Database Systems:</strong> Relational schema normalization &amp; indexing.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span><strong>Distinction:</strong> Maintained high academic standing (CGPA 3.59 / 4.00).</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 space-y-3">
                    <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center font-mono-geist text-xs text-zinc-700 dark:text-zinc-300">
                      Graduated with Academic Distinction
                    </div>
                    <div className="flex items-center justify-between font-mono-geist text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                        <ShieldCheck size={13} />
                        Verified B.Sc. Degree
                      </span>
                      <span>Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
