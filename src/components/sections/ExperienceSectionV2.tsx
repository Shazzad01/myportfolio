"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Award, Sparkles } from "lucide-react";

interface RoleExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  scope: string;
  badge: string;
  achievements: string[];
  techStack: string[];
}

export default function ExperienceSectionV2() {
  const shouldReduceMotion = useReducedMotion();

  const experiences: RoleExperience[] = [
    {
      period: "Apr 2024 – Present",
      role: "SQA Engineer II · Automation Lead",
      company: "Brain Station 23",
      location: "Dhaka, Bangladesh (Hybrid)",
      scope: "Enterprise E-Commerce Platforms (ACI Logistics Shwopno.com & Paragon Food)",
      badge: "Current Role",
      achievements: [
        "Architected modular Playwright (TypeScript) test automation framework with Page Object Model (POM), expanding regression coverage to 80%+ across 120+ core user flows.",
        "Slashed automated regression suite execution runtime by 75% — reducing verification cycles from 14 hours manual testing down to 3.5 hours parallel CI execution.",
        "Simulated 15,000+ concurrent virtual users at 10,000+ RPM in Apache JMeter, isolating 8 critical microservice latency bottlenecks to benchmark p95 response time under 1.8 seconds.",
        "Maintained 99.4% platform uptime with zero critical production outages across 15+ major releases supporting over 500,000 monthly active customers.",
        "Authored 350+ structured test scenarios and Requirements Traceability Matrices (RTM) in Jira, achieving a 98.5% defect catch rate before code reaches staging.",
        "Pioneered AI-assisted defect triage with GitHub Copilot Agent, auto-generating bug reproduction scripts to accelerate issue turnaround by 35%.",
        "Honored with the nopStation Agility & Excellence Award for QA leadership during nationwide enterprise platform deployment.",
      ],
      techStack: [
        "Playwright",
        "TypeScript",
        "Apache JMeter",
        "GitHub Actions",
        "GitLab CI",
        "Postman",
        "Docker",
        "Jira",
      ],
    },
    {
      period: "2023",
      role: "SQA Professional Trainee · Batch 16 Certified",
      company: "IT Training BD",
      location: "Dhaka, Bangladesh",
      scope: "Software Quality Assurance Professional Certification",
      badge: "Professional Certification",
      achievements: [
        "Completed rigorous intensive training in manual and automated test life cycle: boundary value analysis, equivalence partitioning, test case design, and bug reporting.",
        "Authored end-to-end test documentation and standardized Requirements Traceability Matrices (RTM) boosting test coverage.",
        "Awarded Batch 16 SQA Professional Certification with high distinction.",
      ],
      techStack: ["Manual Testing", "Test Case Design", "Bug Reporting", "Jira", "SQL"],
    },
    {
      period: "2019 – 2023",
      role: "B.Sc. in Computer Science & Engineering",
      company: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      scope: "Undergraduate Degree · CGPA 3.59 / 4.00",
      badge: "Academic Degree",
      achievements: [
        "Graduated with CGPA 3.59 / 4.00, specializing in software engineering, algorithms, database architectures, and distributed systems.",
        "Engineered software capstone projects emphasizing automated test verification, database normalization, and web security.",
      ],
      techStack: ["Computer Science", "Algorithms", "Software Engineering", "OOP", "DBMS"],
    },
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
              // 05 · Enterprise Experience &amp; Milestones
            </span>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Work Experience &amp; Impact
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            Brain Station 23 · 2024 – Present
          </span>
        </div>

        {/* Unboxed Vertical Timeline (Zero Container Boxes, Pure Editorial Spine) */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-200 dark:border-zinc-800 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.period}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative space-y-4"
            >
              {/* Timeline Indicator Node on Spine */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-black border-2 border-emerald-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Header: Period & Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono-geist text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <Calendar size={13} />
                  {exp.period}
                </span>

                <span className="font-mono-geist text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {exp.badge}
                </span>

                <span className="text-zinc-400 text-xs hidden sm:inline">•</span>

                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {exp.location}
                </span>
              </div>

              {/* Title & Company */}
              <div>
                <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  {exp.role}
                </h3>
                <div className="font-mono-geist text-sm text-zinc-700 dark:text-zinc-300 font-medium mt-0.5">
                  {exp.company}
                </div>
                <p className="font-mono-geist text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                  Scope: {exp.scope}
                </p>
              </div>

              {/* Verified Achievements List */}
              <div className="space-y-2.5 pt-2 max-w-4xl">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="leading-relaxed font-normal">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills (Minimalist Inline) */}
              <div className="flex flex-wrap items-center gap-2 pt-3">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-geist text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-800/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unboxed Summary Footer */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-geist text-zinc-500 dark:text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Strict Ground-Truth Data Invariant · Verified Master Profile</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Brain Station 23</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>nopStation Agility &amp; Excellence Award</span>
          </div>
        </div>

      </div>
    </section>
  );
}
