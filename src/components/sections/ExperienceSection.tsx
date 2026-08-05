"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "SQA Engineer II",
    company: "Brain Station 23",
    period: "Jan 2026 – Present",
    type: "Full-time",
    highlights: [
      "Led requirement reviews and website analysis to identify testability risks early, aligning test coverage with business expectations",
      "Designed and maintained a Playwright (TypeScript) automation framework, significantly improving regression coverage and cutting manual testing effort per release",
      "Pioneered an AI-assisted bug resolution workflow using GitHub Issues + GitHub Copilot Agent — reducing developer effort and shortening the bug-to-merge cycle",
      "Managed independent client communication for QA status updates, risk reporting, and issue escalation",
      "Coordinated and executed UAT with structured test cases aligned to client expectations",
      "Worked cross-functionally with developers, BAs, and PMs in Agile/Scrum sprints",
    ],
  },
  {
    title: "SQA Engineer I",
    company: "Brain Station 23",
    period: "Jan 2025 – Dec 2025",
    type: "Full-time",
    highlights: [
      "Designed and executed comprehensive test cases covering functional, regression, and usability scenarios for web and mobile",
      "Contributed to the Playwright (TypeScript) automation suite — converting repetitive regression flows to automated scripts",
      "Conducted JMeter performance testing to benchmark response times and identify scalability bottlenecks",
      "Tracked and resolved defects in Jira and Trello with detailed bug reports",
      "Delivered high-quality product releases on schedule within Agile/Scrum teams",
    ],
  },
  {
    title: "Associate SQA Engineer & Trainee",
    company: "Brain Station 23",
    period: "Apr 2024 – Dec 2024",
    type: "Full-time",
    highlights: [
      "Executed functional and regression testing for web and mobile applications",
      "Prepared test plans and quality reports for stakeholder review",
      "Gained hands-on experience in Agile QA workflows and full testing lifecycle management",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[hsl(var(--primary))] tracking-widest uppercase mb-3">
            Career journey
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.3)] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-5.5 top-1 w-5 h-5 rounded-full border-2 border-[hsl(var(--primary))] bg-[hsl(var(--background))] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]" />
                </div>

                <div className="glass rounded-2xl p-6 border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[hsl(var(--foreground))]">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--primary))] font-semibold text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[hsl(var(--muted-foreground))]">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[hsl(var(--muted-foreground))]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary)/0.7)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
