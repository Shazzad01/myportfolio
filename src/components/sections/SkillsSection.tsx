"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Zap, Shield, GitBranch, LayoutGrid, Code2 } from "lucide-react";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "automation", label: "Automation" },
  { id: "performance", label: "Performance" },
  { id: "manual", label: "Manual QA" },
  { id: "cicd", label: "CI/CD & DevOps" },
  { id: "web", label: "Languages & Web" },
];

const skillItems = [
  { name: "Playwright (TypeScript)", cat: "automation", level: "Expert", icon: Cpu, desc: "End-to-end web testing & CI/CD pipeline integration" },
  { name: "Selenium WebDriver", cat: "automation", level: "Advanced", icon: Cpu, desc: "Cross-browser regression suites & Java/TS scripts" },
  { name: "Appium", cat: "automation", level: "Advanced", icon: Cpu, desc: "Mobile automation for Android & iOS native apps" },
  { name: "Postman & Newman", cat: "automation", level: "Expert", icon: Cpu, desc: "API collection runs, assertions & automated CLI runs" },
  
  { name: "Apache JMeter", cat: "performance", level: "Expert", icon: Zap, desc: "Concurrent load testing, thread groups, latency reports" },
  { name: "BlazeMeter", cat: "performance", level: "Advanced", icon: Zap, desc: "Cloud performance runs & distributed load testing" },
  { name: "K6", cat: "performance", level: "Intermediate", icon: Zap, desc: "Developer-centric load testing scripts in JS" },

  { name: "Test Case & Plan Design", cat: "manual", level: "Expert", icon: Shield, desc: "Requirement traceability matrices & functional specs" },
  { name: "UAT & Client Escrow", cat: "manual", level: "Expert", icon: Shield, desc: "Client-facing acceptance runs & UAT sign-offs" },
  { name: "Defect Root Cause Analysis", cat: "manual", level: "Expert", icon: Shield, desc: "Jira/Trello bug triaging & regression packs" },

  { name: "GitHub Actions", cat: "cicd", level: "Expert", icon: GitBranch, desc: "Automated test workflows triggered on Pull Requests" },
  { name: "GitLab CI/CD", cat: "cicd", level: "Advanced", icon: GitBranch, desc: "Pipeline YAML configuration & artifact reporting" },
  { name: "Docker", cat: "cicd", level: "Intermediate", icon: GitBranch, desc: "Containerized Selenium grid & test execution" },

  { name: "TypeScript / JavaScript", cat: "web", level: "Expert", icon: Code2, desc: "ES6+, async/await, custom automation utilities" },
  { name: "Java", cat: "web", level: "Advanced", icon: Code2, desc: "Object-oriented test framework architectures" },
  { name: "HTML5 & CSS3", cat: "web", level: "Advanced", icon: Code2, desc: "DOM element locators, XPath, CSS selectors" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? skillItems
      : skillItems.filter((item) => item.cat === activeFilter);

  return (
    <section id="skills" className="section-padding bg-[hsl(var(--muted)/0.3)]">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3">
            Core Toolkit & Mastery
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Skills & Technologies</h2>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-[hsl(var(--primary))] text-white shadow-lg glow-purple scale-105"
                  : "glass text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-5 rounded-2xl border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.4)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[hsl(var(--primary)/0.1)] flex items-center justify-center text-[hsl(var(--primary))]">
                        <Icon size={18} />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))]">
                        {skill.level}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base mb-1 text-[hsl(var(--foreground))]">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
