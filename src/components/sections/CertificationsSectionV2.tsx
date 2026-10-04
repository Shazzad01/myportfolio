"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  Award,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Quote,
} from "lucide-react";

export default function CertificationsSectionV2() {
  const shouldReduceMotion = useReducedMotion();

  const credentials = [
    {
      id: "sqa-batch-16",
      number: "01",
      title: "Batch 16 SQA Professional",
      organization: "IT Training BD · Dhaka",
      period: "2023 – 2024",
      tag: "Certified Professional",
      description:
        "Comprehensive software quality assurance certification covering manual testing rigor, test plan architecture, Playwright/Selenium automation, JMeter load benchmarking, and defect governance.",
      highlights: [
        "Manual & Automation Test Frameworks",
        "Apache JMeter Concurrency & Stress Benchmarks",
        "Jira Bug Lifecycle & Traceability Governance",
      ],
      icon: Award,
    },
    {
      id: "bsc-cse",
      number: "02",
      title: "B.Sc. in Computer Science & Engineering",
      organization: "Daffodil International University",
      period: "2019 – 2023",
      tag: "CGPA 3.59 / 4.00",
      description:
        "Rigorous foundation in computer science, software engineering principles, object-oriented design patterns, database architecture (SQL), and algorithmic complexity analysis.",
      highlights: [
        "Software Engineering Architecture & OOP",
        "Relational Database Systems & SQL Optimization",
        "Graduated with Distinction (CGPA 3.59)",
      ],
      icon: GraduationCap,
    },
    {
      id: "ieee-publication",
      number: "03",
      title: "Skin Cancer Detection via CNN",
      organization: "IEEE ICCCI 2023 Conference",
      period: "Peer-Reviewed Publication",
      tag: "97% Accuracy",
      description:
        "Peer-reviewed conference research on automated melanoma classification from dermatoscopic images utilizing custom convolutional neural network architectures with fastai.",
      highlights: [
        "97% Melanoma Classification Accuracy",
        "fastai Deep Learning Image Classification",
        "Indexed in IEEE Xplore Digital Library",
      ],
      link: {
        text: "IEEE Xplore DOI",
        url: "https://ieeexplore.ieee.org/abstract/document/10128274",
      },
      icon: BookOpen,
    },
    {
      id: "seven-dimension",
      number: "04",
      title: "7-Dimension QA Audit Methodology",
      organization: "Brain Station 23 Practice",
      period: "Active SQA Standard",
      tag: "Enterprise Protocol",
      description:
        "Holistic quality governance framework evaluating enterprise software across Content & Copy, Visual & Layout, Ergonomic Feedback, Consistency, User Journeys, Edge Chaos, and WCAG AA Accessibility.",
      highlights: [
        "Full-Spectrum Usability & Accessibility (WCAG AA)",
        "GitHub Copilot AI Triage (35% faster test authoring)",
        "Zero-Defect Release Sign-Off Protocol",
      ],
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-max">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
              // 07 · Verified Credentials &amp; Honors
            </span>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Honors, Certifications &amp; Research
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            Verified SQA Engineering Standards
          </span>
        </div>

        {/* Featured Industry Honor: nopStation Agility & Excellence Award (Unboxed Split Layout) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="pb-16 sm:pb-20 border-b border-zinc-200/60 dark:border-zinc-800/60"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Column: Citation & Verified Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2 font-mono-geist text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                  <Trophy size={12} />
                  Official Industry Recognition
                </span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  nopStation × Brain Station 23
                </span>
                <span className="text-zinc-400">·</span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  Team Shwapno &amp; Paragon
                </span>
              </div>

              <div>
                <h3 className="font-geist text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  Agility &amp; Excellence Award
                </h3>
                <p className="font-mono-geist text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1.5">
                  Awarded to Team Shwapno &amp; Paragon for High-Impact Quality Engineering
                </p>
              </div>

              {/* Official Citation Quote */}
              <div className="border-l-2 border-emerald-500 pl-4 py-1 text-sm text-zinc-600 dark:text-zinc-300 italic font-normal leading-relaxed">
                &ldquo;In recognition of exceptional Agility &amp; Excellence in delivering impactful solutions. This award highlights teamwork, innovation, and commitment to driving results.&rdquo;
              </div>

              {/* SQA Lead Engineering Contributions */}
              <div className="space-y-3 pt-2">
                <span className="font-mono-geist text-[11px] text-zinc-400 uppercase tracking-wider block font-semibold">
                  SQA Lead Automation &amp; Performance Highlights:
                </span>
                <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-300 font-normal">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-white font-medium">99.4% Platform Uptime:</strong> Zero critical production defects across 15+ major releases serving 500,000+ monthly shoppers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-white font-medium">75% Regression Reduction:</strong> Architected modular Playwright (TS) POM test suites, slashing regression time from 14h down to 3.5h.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900 dark:text-white font-medium">15k+ Concurrency Stress Tests:</strong> Validated high-load flash sale stability via Apache JMeter (10,000+ RPM, p95 &lt; 1.8s).
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex items-center gap-2 font-mono-geist text-xs text-zinc-500">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified physical crystal trophy inscribed to Team Shwapno &amp; Paragon</span>
              </div>
            </div>

            {/* Right Column: Physical Crystal Trophy Photograph (Unboxed Minimalist Framing) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-xs sm:max-w-sm overflow-hidden rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-900/10">
                <Image
                  src="/images/awards/nopstation-award.jpg"
                  alt="nopStation Agility & Excellence Award Trophy - Team Shwapno & Paragon, Brain Station 23"
                  width={480}
                  height={640}
                  className="w-full h-auto object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
                <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-800/60 text-center font-mono-geist">
                  <p className="text-[11px] font-semibold text-zinc-900 dark:text-white">
                    Official Crystal Trophy
                  </p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                    Brain Station 23 · Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Unboxed Credentials & Research Stream (4 Editorial Entries) */}
        <div className="pt-12 sm:pt-16 space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {credentials.map((cred, idx) => {
              const IconComponent = cred.icon;
              return (
                <motion.div
                  key={cred.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="space-y-4 border-b border-zinc-200/40 dark:border-zinc-800/40 pb-8 md:border-b-0 md:pb-0"
                >
                  {/* Top Meta */}
                  <div className="flex items-center justify-between font-mono-geist text-xs">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      // {cred.number}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800/60 text-[10px] font-medium">
                      {cred.tag}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h4 className="font-geist text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                      <IconComponent size={18} className="text-zinc-400 shrink-0" />
                      {cred.title}
                    </h4>
                    <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {cred.organization} · {cred.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {cred.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 font-mono-geist text-xs text-zinc-600 dark:text-zinc-400 pt-1">
                    {cred.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional External Research Link */}
                  {cred.link && (
                    <div className="pt-2 font-mono-geist text-xs">
                      <a
                        href={cred.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                      >
                        <span>{cred.link.text}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
