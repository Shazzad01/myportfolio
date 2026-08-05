"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "SQA Engineer II",
    company: "Brain Station 23",
    period: "Jan 2026 – Present",
    badge: "Current Role",
    highlights: [
      "Led requirement reviews and website analysis to identify testability risks early, aligning test coverage with business expectations.",
      "Designed and maintained a Playwright (TypeScript) automation framework, significantly improving regression coverage and cutting manual testing effort per release.",
      "Pioneered an AI-assisted bug resolution workflow using GitHub Issues + GitHub Copilot Agent — reducing developer effort and shortening the bug-to-merge cycle.",
      "Managed independent client communication for QA status updates, risk reporting, and issue escalation.",
      "Coordinated and executed UAT with structured test cases aligned to client expectations.",
      "Worked cross-functionally with developers, BAs, and PMs in Agile/Scrum sprints.",
    ],
  },
  {
    title: "SQA Engineer I",
    company: "Brain Station 23",
    period: "Jan 2025 – Dec 2025",
    badge: "Full-Time",
    highlights: [
      "Designed and executed comprehensive test cases covering functional, regression, and usability scenarios for web and mobile.",
      "Contributed to the Playwright (TypeScript) automation suite — converting repetitive regression flows to automated scripts.",
      "Conducted JMeter performance testing to benchmark response times and identify scalability bottlenecks.",
      "Tracked and resolved defects in Jira and Trello with detailed bug reports.",
      "Delivered high-quality product releases on schedule within Agile/Scrum teams.",
    ],
  },
  {
    title: "Associate SQA Engineer & Trainee",
    company: "Brain Station 23",
    period: "Apr 2024 – Dec 2024",
    badge: "Full-Time",
    highlights: [
      "Executed functional and regression testing for web and mobile applications.",
      "Prepared test plans and quality reports for stakeholder review.",
      "Gained hands-on experience in Agile QA workflows and full testing lifecycle management.",
    ],
  },
];

export default function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[hsl(var(--accent))]" />
            Career Evolution
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Work Experience</h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cyber Spine Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-transparent opacity-60" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.title + exp.period}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 240, damping: 22, delay: i * 0.15 }
                  }
                  className={`relative flex flex-col ${
                    isEven ? "sm:flex-row-reverse" : "sm:flex-row"
                  } items-center`}
                >
                  {/* Timeline Pulse Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))] flex items-center justify-center z-10 shadow-lg glow-purple">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 text-left">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="glass-card p-6 sm:p-7 rounded-3xl border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.5)] transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))]">
                          {exp.badge}
                        </span>
                        <span className="text-xs text-[hsl(var(--muted-foreground))] flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-xl text-[hsl(var(--foreground))]">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold text-[hsl(var(--accent))] mb-4 flex items-center gap-1.5">
                        <Briefcase size={14} />
                        {exp.company}
                      </p>

                      <ul className="space-y-2.5">
                        {exp.highlights.map((h, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed"
                          >
                            <ChevronRight size={14} className="text-[hsl(var(--primary))] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
