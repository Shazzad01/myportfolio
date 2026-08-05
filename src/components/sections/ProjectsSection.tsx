"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Shwopno.com",
    subtitle: "Bangladesh's Largest E-Commerce Platform",
    period: "Apr 2024 – Present",
    platforms: ["Web", "Android", "iOS"],
    tags: ["Playwright", "TypeScript", "GitHub Actions", "JMeter", "CI/CD"],
    problem:
      "Shwopno needed reliable quality assurance for a high-traffic platform used by millions. Manual testing was slow, error-prone, and couldn't scale with rapid release cycles.",
    approach:
      "Built and maintained a Playwright (TypeScript) automation suite. Integrated it into CI/CD via GitHub Actions — automated regression runs triggered on every PR. Conducted JMeter performance tests to assess load capacity under concurrent spikes.",
    result:
      "Enhanced platform reliability and scalability. Regression runs now complete automatically on every PR, dramatically reducing the manual QA overhead per release.",
    accent: "var(--primary)",
  },
  {
    title: "Paragon Food",
    subtitle: "paragonfood.com.bd — Food Delivery & E-Commerce",
    period: "Jul 2025 – Mar 2026",
    platforms: ["Web", "Android", "iOS"],
    tags: ["Playwright", "GitLab CI/CD", "Manual Testing", "Trello", "Cross-browser"],
    problem:
      "A food delivery platform needed rigorous cross-platform quality coverage across web, Android, and iOS — with a tight release cadence and minimal QA headcount.",
    approach:
      "Executed functional testing of core user journeys: product browsing, cart, checkout, payment. Designed regression packs and smoke tests. Integrated automated tests into GitLab CI/CD pipeline.",
    result:
      "Improved release stability and reduced production defects. Cross-browser and cross-platform coverage ensured consistent user experience across all target devices.",
    accent: "var(--accent)",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-[hsl(var(--muted)/0.4)]">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[hsl(var(--primary))] tracking-widest uppercase mb-3">
            Real-world impact
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: `hsl(${project.accent})` }}
                    />
                    <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl">{project.title}</h3>
                  <p className="text-[hsl(var(--muted-foreground))] mt-0.5">{project.subtitle}</p>
                </div>

                <div className="flex items-center gap-2">
                  {project.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* P → A → R */}
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                {[
                  { label: "🔴 Problem", content: project.problem },
                  { label: "🔵 Approach", content: project.approach },
                  { label: "🟢 Result", content: project.result },
                ].map(({ label, content }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-2">
                      {label}
                    </p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
