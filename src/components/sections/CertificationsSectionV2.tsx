"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  Award,
  GraduationCap,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  ZoomIn,
  X,
  FileText,
  Sparkles,
  CheckCircle2,
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

interface ModalItem {
  title: string;
  subtitle: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  externalUrl?: string;
  externalLabel?: string;
  fileUrl?: string;
  fileLabel?: string;
  citation?: string;
}

export default function CertificationsSectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [activeModalItem, setActiveModalItem] = useState<ModalItem | null>(null);

  // Close modal on Escape and prevent body scrolling
  useEffect(() => {
    if (!activeModalItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalItem]);

  const showResearch = activeCategory === "all" || activeCategory === "research";
  const showHonors = activeCategory === "all" || activeCategory === "honors";
  const showDegree = activeCategory === "all" || activeCategory === "degree";

  return (
    <section id="honors" className="section-padding relative overflow-hidden">
      {/* Anchor alias for legacy hash navigation */}
      <span id="certifications" className="absolute -top-24" aria-hidden="true" />

      {/* Specular Ambient Horizon Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] bg-gradient-to-b from-blue-500/[0.03] dark:from-emerald-500/[0.03] to-transparent rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-8 sm:mb-10 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [VISUAL_CREDENTIAL_GALLERY]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Research Publications &amp; Verified Honors
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            5 Physical &amp; Published Artifacts · Click Any to Inspect
          </span>
        </div>

        {/* Minimalist Visual Prompt */}
        <p className="max-w-3xl font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-8 sm:mb-10">
          Authentic peer-reviewed research literature, conference presentation certificates, and industry excellence awards. Every credential features high-resolution document previews for immediate verification.
        </p>

        {/* Category Filter Tabs */}
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
                aria-controls="visual-credentials-grid"
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

        {/* Container-Level AnimatePresence for Category Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            id="visual-credentials-grid"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="space-y-10 sm:space-y-12"
          >
            {/* ========================================================================= */}
            {/* ROW 1: FLAGSHIP SHOWCASE — IEEE RESEARCH & NOPSTATION CRYSTAL TROPHY */}
            {/* ========================================================================= */}
            {(showResearch || showHonors) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                
                {/* Visual Card 1: IEEE ICCCI 2023 Peer-Reviewed Research Publication */}
                {showResearch && (
                  <div className="group rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-black/30 dark:hover:border-white/35 transition-all p-5 sm:p-7 flex flex-col justify-between">
                    <div className="space-y-5">
                      
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between font-mono-geist text-xs">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold text-[11px]">
                          <BookOpen size={13} className="shrink-0" />
                          [IEEE XPLORE PUBLISHED RESEARCH]
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">Year: 2023</span>
                      </div>

                      {/* Visual Certificate Frame (Click to Zoom) */}
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          setActiveModalItem({
                            title: "An Approach to Detect Melanoma Skin Cancer Using Fast.ai CNN Models",
                            subtitle: "13th International Conference on Computer Communication and Informatics (ICCCI 2023)",
                            badge: "IEEE XPLORE PUBLISHED RESEARCH",
                            imageSrc: "/certificates/ieee_iccci_2023_preview.png",
                            imageAlt: "Official IEEE ICCCI 2023 Presentation Certificate - Md Shazzad Mia",
                            externalUrl: "https://ieeexplore.ieee.org/abstract/document/10128274",
                            externalLabel: "Read on IEEE Xplore",
                            fileUrl: "/certificates/ieee_iccci_2023_certificate.pdf",
                            fileLabel: "Download Original PDF Certificate",
                            citation: "Md Shazzad Mia, Md. Jahid Hasan, et al. · DOI: 10.1109/ICCCI56745.2023.10128274 · Electronic ISBN: 979-8-3503-1002-3",
                          })
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setActiveModalItem({
                              title: "An Approach to Detect Melanoma Skin Cancer Using Fast.ai CNN Models",
                              subtitle: "13th International Conference on Computer Communication and Informatics (ICCCI 2023)",
                              badge: "IEEE XPLORE PUBLISHED RESEARCH",
                              imageSrc: "/certificates/ieee_iccci_2023_preview.png",
                              imageAlt: "Official IEEE ICCCI 2023 Presentation Certificate - Md Shazzad Mia",
                              externalUrl: "https://ieeexplore.ieee.org/abstract/document/10128274",
                              externalLabel: "Read on IEEE Xplore",
                              fileUrl: "/certificates/ieee_iccci_2023_certificate.pdf",
                              fileLabel: "Download Original PDF Certificate",
                              citation: "Md Shazzad Mia, Md. Jahid Hasan, et al. · DOI: 10.1109/ICCCI56745.2023.10128274 · Electronic ISBN: 979-8-3503-1002-3",
                            });
                          }
                        }}
                        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-black/40 cursor-pointer group/img transition-all"
                        aria-label="Inspect IEEE ICCCI 2023 Presentation Certificate in high resolution"
                      >
                        <Image
                          src="/certificates/ieee_iccci_2023_preview.png"
                          alt="IEEE ICCCI 2023 Presentation Certificate - Md Shazzad Mia"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />
                        
                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-600/90 text-white font-mono-geist text-xs font-semibold shadow-lg backdrop-blur-md">
                            <ZoomIn size={14} />
                            Click to Inspect Certificate
                          </span>
                        </div>

                        {/* Bottom Floating Pill inside image */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-geist text-white/90">
                          <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/15">
                            Coimbatore, India · IEEE Madras
                          </span>
                          <span className="px-2 py-0.5 rounded bg-blue-500/80 font-semibold backdrop-blur-sm">
                            Official Paper Certificate
                          </span>
                        </div>
                      </div>

                      {/* Paper Title & Citation */}
                      <div>
                        <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                          An Approach to Detect Melanoma Skin Cancer Using Fast.ai CNN Models
                        </h3>
                        <p className="font-mono-geist text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                          13th ICCCI 2023 · Authors: <span className="text-zinc-900 dark:text-white font-semibold">Md Shazzad Mia</span>, et al.
                        </p>
                      </div>

                      {/* High-Impact Visual Telemetry Chips */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono-geist text-xs">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
                          Fast.ai ResNet CNN
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300">
                          Computer Vision
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300">
                          ROC-AUC Validated
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                          IEEE Indexed ✓
                        </span>
                      </div>
                    </div>

                    {/* Dual Action CTAs */}
                    <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center gap-3">
                      <a
                        href="https://ieeexplore.ieee.org/abstract/document/10128274"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono-geist text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
                      >
                        <ExternalLink size={13} />
                        <span>Read on IEEE Xplore</span>
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveModalItem({
                            title: "An Approach to Detect Melanoma Skin Cancer Using Fast.ai CNN Models",
                            subtitle: "13th International Conference on Computer Communication and Informatics (ICCCI 2023)",
                            badge: "IEEE XPLORE PUBLISHED RESEARCH",
                            imageSrc: "/certificates/ieee_iccci_2023_preview.png",
                            imageAlt: "Official IEEE ICCCI 2023 Presentation Certificate - Md Shazzad Mia",
                            externalUrl: "https://ieeexplore.ieee.org/abstract/document/10128274",
                            externalLabel: "Read on IEEE Xplore",
                            fileUrl: "/certificates/ieee_iccci_2023_certificate.pdf",
                            fileLabel: "Download Original PDF Certificate",
                            citation: "Md Shazzad Mia, Md. Jahid Hasan, et al. · DOI: 10.1109/ICCCI56745.2023.10128274 · Electronic ISBN: 979-8-3503-1002-3",
                          })
                        }
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white font-mono-geist text-xs font-semibold transition-all"
                      >
                        <ZoomIn size={13} className="text-blue-500" />
                        <span>Inspect Certificate</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Visual Card 2: nopStation Agility & Excellence Award (Crystal Trophy) */}
                {showHonors && (
                  <div className="group rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-black/30 dark:hover:border-white/35 transition-all p-5 sm:p-7 flex flex-col justify-between">
                    <div className="space-y-5">
                      
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between font-mono-geist text-xs">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                          <Trophy size={13} className="shrink-0" />
                          [INDUSTRY EXCELLENCE · ZERO ROLLBACK]
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">Year: 2024</span>
                      </div>

                      {/* Visual Crystal Trophy Photo Frame (Click to Zoom) */}
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          setActiveModalItem({
                            title: "nopStation Agility & Excellence Award",
                            subtitle: "Awarded to Team Shwapno & Paragon · Brain Station 23",
                            badge: "INDUSTRY AWARD OF EXCELLENCE",
                            imageSrc: "/images/awards/nopstation-award.jpg",
                            imageAlt: "Official nopStation Agility & Excellence Award Crystal Trophy - Brain Station 23",
                            citation: "In recognition of exceptional Agility & Excellence in delivering impactful solutions. This award highlights teamwork, innovation, and commitment to driving results.",
                          })
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setActiveModalItem({
                              title: "nopStation Agility & Excellence Award",
                              subtitle: "Awarded to Team Shwapno & Paragon · Brain Station 23",
                              badge: "INDUSTRY AWARD OF EXCELLENCE",
                              imageSrc: "/images/awards/nopstation-award.jpg",
                              imageAlt: "Official nopStation Agility & Excellence Award Crystal Trophy - Brain Station 23",
                              citation: "In recognition of exceptional Agility & Excellence in delivering impactful solutions. This award highlights teamwork, innovation, and commitment to driving results.",
                            });
                          }
                        }}
                        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-black/40 cursor-pointer group/img transition-all"
                        aria-label="Inspect nopStation Agility and Excellence Award Crystal Trophy in high resolution"
                      >
                        <Image
                          src="/images/awards/nopstation-award.jpg"
                          alt="Official nopStation Agility & Excellence Award Crystal Trophy"
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />
                        
                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-600/90 text-white font-mono-geist text-xs font-semibold shadow-lg backdrop-blur-md">
                            <ZoomIn size={14} />
                            Click to Inspect Trophy
                          </span>
                        </div>

                        {/* Bottom Floating Pill inside image */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono-geist text-white/90">
                          <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/15">
                            Brain Station 23 · Dhaka
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/80 font-semibold backdrop-blur-sm">
                            Physical Crystal Inscribed Trophy
                          </span>
                        </div>
                      </div>

                      {/* Award Title & Team Context */}
                      <div>
                        <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                          nopStation Agility &amp; Excellence Award
                        </h3>
                        <p className="font-mono-geist text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                          Awarded to Team Shwapno &amp; Paragon · Brain Station 23
                        </p>
                      </div>

                      {/* High-Impact SLA Metrics */}
                      <div className="grid grid-cols-3 gap-2 pt-1 font-mono-geist text-xs">
                        <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center">
                          <span className="font-bold text-zinc-900 dark:text-white block text-sm">99.4%</span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Uptime SLA</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center">
                          <span className="font-bold text-zinc-900 dark:text-white block text-sm">75% Cut</span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Regression</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center">
                          <span className="font-bold text-zinc-900 dark:text-white block text-sm">15,000+</span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Stress VUs</span>
                        </div>
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono-geist text-xs">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveModalItem({
                            title: "nopStation Agility & Excellence Award",
                            subtitle: "Awarded to Team Shwapno & Paragon · Brain Station 23",
                            badge: "INDUSTRY AWARD OF EXCELLENCE",
                            imageSrc: "/images/awards/nopstation-award.jpg",
                            imageAlt: "Official nopStation Agility & Excellence Award Crystal Trophy - Brain Station 23",
                            citation: "In recognition of exceptional Agility & Excellence in delivering impactful solutions. This award highlights teamwork, innovation, and commitment to driving results.",
                          })
                        }
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white font-mono-geist text-xs font-semibold transition-all"
                      >
                        <ZoomIn size={13} className="text-emerald-500" />
                        <span>Inspect Physical Trophy</span>
                      </button>
                      <span className="text-zinc-500 text-[11px]">Brain Station 23</span>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* ========================================================================= */}
            {/* ROW 2: VISUAL 3-COLUMN GRID — DELHI RESEARCH, SQA CREDENTIAL, B.SC. DEGREE */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Visual Card 3: ICDABM 2022 Healthcare ML Conference Paper Certificate */}
              {showResearch && (
                <div className="group rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-black/30 dark:hover:border-white/35 transition-all p-5 sm:p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Top Badge */}
                    <div className="flex items-center justify-between font-mono-geist text-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-semibold text-[11px]">
                        <BookOpen size={13} className="shrink-0" />
                        [HEALTHCARE ML RESEARCH]
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400">Year: 2022</span>
                    </div>

                    {/* Visual Certificate Frame */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setActiveModalItem({
                          title: "An Effective System of Diabetes Readmission Prediction",
                          subtitle: "International Conference on Data Analytics in Business and Marketing (ICDABM 2022)",
                          badge: "HEALTHCARE ML RESEARCH PAPER",
                          imageSrc: "/certificates/diabetes_readmission_preview.png",
                          imageAlt: "ICDABM 2022 Conference Paper Presentation Certificate - Md Shazzad Mia",
                          fileUrl: "/certificates/diabetes_readmission_icdabm_certificate.pdf",
                          fileLabel: "Download Original Presentation PDF",
                          citation: "Md Shazzad Mia, et al. · Jointly organized by Shivaji College, University of Delhi & Daffodil International University · 100,000+ patient encounters.",
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveModalItem({
                            title: "An Effective System of Diabetes Readmission Prediction",
                            subtitle: "International Conference on Data Analytics in Business and Marketing (ICDABM 2022)",
                            badge: "HEALTHCARE ML RESEARCH PAPER",
                            imageSrc: "/certificates/diabetes_readmission_preview.png",
                            imageAlt: "ICDABM 2022 Conference Paper Presentation Certificate - Md Shazzad Mia",
                            fileUrl: "/certificates/diabetes_readmission_icdabm_certificate.pdf",
                            fileLabel: "Download Original Presentation PDF",
                            citation: "Md Shazzad Mia, et al. · Jointly organized by Shivaji College, University of Delhi & Daffodil International University · 100,000+ patient encounters.",
                          });
                        }
                      }}
                      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-black/40 cursor-pointer group/img transition-all"
                      aria-label="Inspect ICDABM 2022 Conference Presentation Certificate"
                    >
                      <Image
                        src="/certificates/diabetes_readmission_preview.png"
                        alt="ICDABM 2022 Conference Paper Certificate"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-600/90 text-white font-mono-geist text-xs font-semibold shadow-md backdrop-blur-md">
                          <ZoomIn size={13} />
                          Inspect Certificate
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono-geist text-white/90">
                        <span className="px-1.5 py-0.5 rounded bg-black/60">Univ of Delhi &amp; DIU</span>
                        <span className="px-1.5 py-0.5 rounded bg-purple-500/80 font-semibold">100k+ Dataset</span>
                      </div>
                    </div>

                    {/* Paper Title & Authors */}
                    <div>
                      <h3 className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        Diabetes Readmission Prediction
                      </h3>
                      <p className="font-mono-geist text-xs text-purple-600 dark:text-purple-400 mt-1">
                        ICDABM 2022 · Md Shazzad Mia, et al.
                      </p>
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-1.5 font-mono-geist text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-semibold">
                        100k+ Patients
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300">
                        30-Day Clinical ML
                      </span>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="pt-4 mt-5 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono-geist text-xs">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveModalItem({
                          title: "An Effective System of Diabetes Readmission Prediction",
                          subtitle: "International Conference on Data Analytics in Business and Marketing (ICDABM 2022)",
                          badge: "HEALTHCARE ML RESEARCH PAPER",
                          imageSrc: "/certificates/diabetes_readmission_preview.png",
                          imageAlt: "ICDABM 2022 Conference Paper Presentation Certificate - Md Shazzad Mia",
                          fileUrl: "/certificates/diabetes_readmission_icdabm_certificate.pdf",
                          fileLabel: "Download Original Presentation PDF",
                          citation: "Md Shazzad Mia, et al. · Jointly organized by Shivaji College, University of Delhi & Daffodil International University · 100,000+ patient encounters.",
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-purple-600 dark:text-purple-400 hover:underline font-semibold"
                    >
                      <ZoomIn size={13} />
                      <span>Inspect (PDF Preview)</span>
                    </button>
                    <span className="text-zinc-500 text-[11px]">DU &amp; DIU</span>
                  </div>
                </div>
              )}

              {/* Visual Card 4: IT Training BD SQA Professional Certification (Batch 16) */}
              {showHonors && (
                <div className="group rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-black/30 dark:hover:border-white/35 transition-all p-5 sm:p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Top Badge */}
                    <div className="flex items-center justify-between font-mono-geist text-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                        <Award size={13} className="shrink-0" />
                        [PROFESSIONAL SQA · BATCH 16]
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400">Year: 2023</span>
                    </div>

                    {/* Visual Certificate Frame */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setActiveModalItem({
                          title: "SQA & Cyber Security Professional Certification",
                          subtitle: "IT Training BD · Batch 16 Comprehensive SQA Program",
                          badge: "PROFESSIONAL SQA CERTIFICATION",
                          imageSrc: "/certificates/sqa_batch16_certificate.png",
                          imageAlt: "IT Training BD SQA Professional Certificate (Batch 16) - Md Shazzad Mia",
                          fileUrl: "/certificates/sqa_batch16_certificate.png",
                          fileLabel: "Download Original Certificate Image",
                          citation: "Certificate ID: ITB-B16-366 · Instructor: Sabiul Islam Rashed (Head of Cyber Security & SQA @BurnSys) · Awarded for stellar performance in test automation & security.",
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveModalItem({
                            title: "SQA & Cyber Security Professional Certification",
                            subtitle: "IT Training BD · Batch 16 Comprehensive SQA Program",
                            badge: "PROFESSIONAL SQA CERTIFICATION",
                            imageSrc: "/certificates/sqa_batch16_certificate.png",
                            imageAlt: "IT Training BD SQA Professional Certificate (Batch 16) - Md Shazzad Mia",
                            fileUrl: "/certificates/sqa_batch16_certificate.png",
                            fileLabel: "Download Original Certificate Image",
                            citation: "Certificate ID: ITB-B16-366 · Instructor: Sabiul Islam Rashed (Head of Cyber Security & SQA @BurnSys) · Awarded for stellar performance in test automation & security.",
                          });
                        }
                      }}
                      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-black/40 cursor-pointer group/img transition-all"
                      aria-label="Inspect SQA Professional Certificate Batch 16"
                    >
                      <Image
                        src="/certificates/sqa_batch16_certificate.png"
                        alt="SQA Professional Certificate (Batch 16)"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600/90 text-white font-mono-geist text-xs font-semibold shadow-md backdrop-blur-md">
                          <ZoomIn size={13} />
                          Inspect Certificate
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono-geist text-white/90">
                        <span className="px-1.5 py-0.5 rounded bg-black/60">ID: ITB-B16-366</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/80 font-semibold">Stellar Grade</span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        SQA Professional Certification
                      </h3>
                      <p className="font-mono-geist text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                        IT Training BD · BurnSys Head of SQA
                      </p>
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-1.5 font-mono-geist text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                        Selenium &amp; Playwright
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300">
                        JMeter Stress
                      </span>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="pt-4 mt-5 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono-geist text-xs">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveModalItem({
                          title: "SQA & Cyber Security Professional Certification",
                          subtitle: "IT Training BD · Batch 16 Comprehensive SQA Program",
                          badge: "PROFESSIONAL SQA CERTIFICATION",
                          imageSrc: "/certificates/sqa_batch16_certificate.png",
                          imageAlt: "IT Training BD SQA Professional Certificate (Batch 16) - Md Shazzad Mia",
                          fileUrl: "/certificates/sqa_batch16_certificate.png",
                          fileLabel: "Download Original Certificate Image",
                          citation: "Certificate ID: ITB-B16-366 · Instructor: Sabiul Islam Rashed (Head of Cyber Security & SQA @BurnSys) · Awarded for stellar performance in test automation & security.",
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                    >
                      <ZoomIn size={13} />
                      <span>Inspect Certificate</span>
                    </button>
                    <span className="text-zinc-500 text-[11px]">ITB-B16-366</span>
                  </div>
                </div>
              )}

              {/* Visual Card 5: B.Sc. in Computer Science & Engineering (DIU Parchment Plaque) */}
              {showDegree && (
                <div className="group rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-black/30 dark:hover:border-white/35 transition-all p-5 sm:p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Top Badge */}
                    <div className="flex items-center justify-between font-mono-geist text-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                        <GraduationCap size={13} className="shrink-0" />
                        [ACADEMIC DEGREE · CSE]
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400">2019 – 2023</span>
                    </div>

                    {/* Academic Parchment Visual Box */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 p-4 flex flex-col justify-between shadow-inner">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <GraduationCap size={20} className="text-emerald-600 dark:text-emerald-400" />
                          <span className="font-mono-geist text-xs font-bold text-zinc-900 dark:text-white">
                            DIU FACULTY OF CSE
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono-geist text-[10px] font-bold">
                          HONORS
                        </span>
                      </div>

                      <div className="text-center py-1">
                        <span className="font-geist text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight tabular-nums block">
                          3.59
                        </span>
                        <span className="font-mono-geist text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block uppercase">
                          CGPA Out of 4.00
                        </span>
                      </div>

                      <div className="flex items-center justify-between font-mono-geist text-[10px] text-zinc-500 dark:text-zinc-400 pt-1 border-t border-black/5 dark:border-white/5">
                        <span>Daffodil Int&apos;l University</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Distinction ✓</span>
                      </div>
                    </div>

                    {/* Degree Title & Institution */}
                    <div>
                      <h3 className="font-geist text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                        B.Sc. in Computer Science &amp; Engineering
                      </h3>
                      <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        Daffodil International University (DIU)
                      </p>
                    </div>

                    {/* Academic Foundation Chips */}
                    <div className="flex flex-wrap gap-1.5 font-mono-geist text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                        Graduated with Distinction
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300">
                        Clean Architecture
                      </span>
                    </div>
                  </div>

                  {/* Footer Standing */}
                  <div className="pt-4 mt-5 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono-geist text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      <ShieldCheck size={13} />
                      Verified Degree (CGPA 3.59)
                    </span>
                    <span>Dhaka, BD</span>
                  </div>
                </div>
              )}

            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE HIGH-DEFINITION LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-credential-title"
          >
            {/* Backdrop Dismiss Button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute inset-0 w-full h-full cursor-default"
              aria-label="Close high-resolution inspection modal"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl p-4 sm:p-7 flex flex-col justify-between space-y-5"
            >
              {/* Modal Top Bar: Title, Badge & Close Button */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded bg-white/10 text-white font-mono-geist text-[10px] font-semibold tracking-wider uppercase">
                      {activeModalItem.badge}
                    </span>
                  </div>
                  <h3 id="modal-credential-title" className="font-geist text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeModalItem.title}
                  </h3>
                  <p className="font-mono-geist text-xs text-zinc-400 mt-1">
                    {activeModalItem.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all shrink-0"
                  aria-label="Close modal window"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Center Image Preview (Full Width / Contain) */}
              <div className="relative w-full h-[45vh] sm:h-[55vh] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-inner flex items-center justify-center">
                <Image
                  src={activeModalItem.imageSrc}
                  alt={activeModalItem.imageAlt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 85vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Citation / Bottom Bar */}
              {activeModalItem.citation && (
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono-geist text-xs text-zinc-300">
                  <span className="text-zinc-500 block text-[10px] uppercase font-semibold mb-0.5">Citation &amp; Metadata:</span>
                  {activeModalItem.citation}
                </div>
              )}

              {/* Modal Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 font-mono-geist text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  {activeModalItem.externalUrl && (
                    <a
                      href={activeModalItem.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/30"
                    >
                      <ExternalLink size={14} />
                      <span>{activeModalItem.externalLabel || "Visit External Publication"}</span>
                    </a>
                  )}

                  {activeModalItem.fileUrl && (
                    <a
                      href={activeModalItem.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/15 transition-all"
                    >
                      <FileText size={14} className="text-emerald-400" />
                      <span>{activeModalItem.fileLabel || "View Original File"}</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all font-mono-geist"
                >
                  Close (Esc)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
