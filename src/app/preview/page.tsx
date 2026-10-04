"use client";

import HeroSectionV2 from "@/components/sections/HeroSectionV2";
import AboutSectionV2 from "@/components/sections/AboutSectionV2";
import QaMethodologySectionV2 from "@/components/sections/QaMethodologySectionV2";
import SkillsSectionV2 from "@/components/sections/SkillsSectionV2";
import ExperienceSectionV2 from "@/components/sections/ExperienceSectionV2";
import ProjectsSectionV2 from "@/components/sections/ProjectsSectionV2";
import CertificationsSectionV2 from "@/components/sections/CertificationsSectionV2";
import ResumeSectionV2 from "@/components/sections/ResumeSectionV2";
import ContactSectionV2 from "@/components/sections/ContactSectionV2";
import { Sparkles, Eye, CheckCircle2, ArrowRight } from "lucide-react";

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      
      {/* Staging Control Bar */}
      <div className="sticky top-16 z-40 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-md px-4 py-3">
        <div className="container-max flex flex-wrap items-center justify-between gap-3 text-xs font-mono-geist">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              Staging Preview Hub
            </span>
            <span className="text-zinc-400">|</span>
            <span className="text-zinc-600 dark:text-zinc-400">
              Milestone 8: Resume CTA &amp; Direct Communication Hub (All Sections Rebuilt)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
              <CheckCircle2 size={12} />
              <span>Full Portfolio V2 Rebuilt</span>
            </div>
            <span className="text-zinc-500 text-[11px]">
              Ready for Chat Review
            </span>
          </div>
        </div>
      </div>

      {/* Render Rebuilt Sections */}
      <HeroSectionV2 />
      <AboutSectionV2 />
      <QaMethodologySectionV2 />
      <SkillsSectionV2 />
      <ExperienceSectionV2 />
      <ProjectsSectionV2 />
      <CertificationsSectionV2 />
      <ResumeSectionV2 />
      <ContactSectionV2 />

      {/* Review Notes Footer Drawer */}
      <div className="container-max px-4 py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 p-6 text-sm">
          <h3 className="font-geist font-bold text-base text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
            <Eye size={16} className="text-zinc-500" />
            Milestone 8 Architectural Review Checklist
          </h3>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 font-normal">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>Unboxed Resume Callout</strong>: Direct PDF download and in-browser viewing for the verified 2-page ATS CV (`/resume.pdf`) with zero card boxes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>Direct Communication Hub (No Forms)</strong>: One-click copyable Email (`shazzadm065@gmail.com`) and Phone/WhatsApp (`+8801621864789`) with instant copy confirmation feedback.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>Professional Profiles &amp; Location</strong>: Direct links to LinkedIn (`linkedin.com/in/md-shazzad-mia`), GitHub (`github.com/Shazzad01`), and live availability status in Dhaka (UTC+6).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">✓</span>
              <span><strong>Complete V2 Alignment</strong>: All 8 core milestones are fully rebuilt in the Vercel/Stripe minimalist monochrome design system with zero card boxes and seamless dark/light modes.</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
