"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Target, GraduationCap, MapPin, CheckCircle, Cpu, ShieldAlert, Sparkles } from "lucide-react";

const personas = [
  {
    id: "automation",
    label: "Automation Architect",
    icon: Cpu,
    title: "Building Resilient Test Suites",
    description:
      "I design Playwright TypeScript and Selenium frameworks that execute in CI/CD pipelines on every Pull Request, catching regressions before code merges.",
  },
  {
    id: "performance",
    label: "Performance Engineer",
    icon: Zap,
    title: "Load & Stress Benchmarking",
    description:
      "Using Apache JMeter and BlazeMeter, I simulate thousands of concurrent users to diagnose API latency bottlenecks and server memory limits.",
  },
  {
    id: "qa-lead",
    label: "Quality Lead",
    icon: ShieldAlert,
    title: "Client & UAT Ownership",
    description:
      "I manage direct client communication, UAT sign-offs, daily QA reporting, and defect lifecycle in Jira across web, Android, and iOS platforms.",
  },
];

function Zap(props: any) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const metrics = [
  { label: "Years Experience", value: "2+", sub: "Brain Station 23" },
  { label: "E-Commerce Users Tested", value: "1M+", sub: "Shwopno & Paragon" },
  { label: "Automated Suite Coverage", value: "85%", sub: "Playwright TS" },
  { label: "Degree GPA", value: "3.59", sub: "BSc CSE (DIU)" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activePersona, setActivePersona] = useState(personas[0]);

  return (
    <section id="about" className="section-padding relative">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[hsl(var(--accent))]" />
            Engineering Philosophy
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">About Me</h2>
        </motion.div>

        {/* Metric Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className="glass-card p-6 rounded-2xl text-center border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.4)]"
            >
              <p className="font-heading text-3xl sm:text-4xl font-bold text-gradient mb-1">
                {metric.value}
              </p>
              <p className="text-xs font-semibold text-[hsl(var(--foreground))] mb-0.5">
                {metric.label}
              </p>
              <p className="text-[11px] text-[hsl(var(--muted-foreground))]">{metric.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Text Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            <h3 className="font-heading font-bold text-2xl sm:text-3xl leading-snug">
              Preventing production defects before they reach users.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
              As an <strong className="text-[hsl(var(--foreground))]">SQA Engineer II at Brain Station 23</strong>,
              I safeguard high-scale applications including Bangladesh&apos;s leading e-commerce platforms.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
              I introduced an <span className="text-[hsl(var(--accent))] font-semibold">AI-assisted bug resolution workflow</span> using GitHub Issues and GitHub Copilot Agent — accelerating developer remediation speed and shortening the bug-to-merge cycle.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-[hsl(var(--primary))] text-white font-semibold text-sm hover:bg-[hsl(var(--primary-glow))] transition-all duration-200 glow-purple"
              >
                Let&apos;s Connect
              </a>
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl glass border border-[hsl(var(--card-border))] font-semibold text-sm hover:border-[hsl(var(--primary)/0.5)] transition-all duration-200"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>

          {/* Interactive Persona Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-[hsl(var(--card-border))]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-4 text-left">
              Select Focus Role
            </p>

            {/* Persona Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {personas.map((p) => {
                const Icon = p.icon;
                const isActive = activePersona.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePersona(p)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[hsl(var(--primary))] text-white shadow-lg glow-purple"
                        : "glass text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                    }`}
                  >
                    <Icon size={14} />
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Active Persona Details */}
            <motion.div
              key={activePersona.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-left space-y-3 p-5 rounded-2xl bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--card-border))]"
            >
              <h4 className="font-heading font-bold text-lg text-[hsl(var(--primary))]">
                {activePersona.title}
              </h4>
              <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {activePersona.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
