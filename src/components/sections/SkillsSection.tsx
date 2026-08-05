"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import {
  PlaywrightIcon,
  SeleniumIcon,
  AppiumIcon,
  PostmanIcon,
  JMeterIcon,
  K6Icon,
  TypeScriptIcon,
  JavaScriptIcon,
  JavaIcon,
  PythonIcon,
  Html5Icon,
  Css3Icon,
  GitHubActionsIcon,
  GitLabIcon,
  DockerIcon,
  JiraIcon,
  TrelloIcon,
  AzureBoardsIcon,
} from "@/components/ui/SvgIcons";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "automation", label: "Automation" },
  { id: "performance", label: "Performance" },
  { id: "manual", label: "Manual QA" },
  { id: "cicd", label: "CI/CD & DevOps" },
  { id: "web", label: "Languages & Web" },
];

const skillItems = [
  { name: "Playwright", cat: "automation", level: "Expert", icon: PlaywrightIcon, desc: "End-to-end web testing & CI/CD pipeline integration" },
  { name: "Selenium WebDriver", cat: "automation", level: "Advanced", icon: SeleniumIcon, desc: "Cross-browser regression suites & Java/TS scripts" },
  { name: "Appium Mobile", cat: "automation", level: "Advanced", icon: AppiumIcon, desc: "Mobile automation for Android & iOS native apps" },
  { name: "Postman & Newman", cat: "automation", level: "Expert", icon: PostmanIcon, desc: "API collection runs, assertions & automated CLI runs" },
  
  { name: "Apache JMeter", cat: "performance", level: "Expert", icon: JMeterIcon, desc: "Concurrent load testing, thread groups, latency reports" },
  { name: "K6 Load Engine", cat: "performance", level: "Intermediate", icon: K6Icon, desc: "Developer-centric load testing scripts in JS" },

  { name: "Test Case & Plan Design", cat: "manual", level: "Expert", icon: JiraIcon, desc: "Requirement traceability matrices & functional specs" },
  { name: "UAT & Client Escrow", cat: "manual", level: "Expert", icon: TrelloIcon, desc: "Client-facing acceptance runs & UAT sign-offs" },
  { name: "Azure Defect Triaging", cat: "manual", level: "Advanced", icon: AzureBoardsIcon, desc: "Jira/Trello bug triaging & regression packs" },

  { name: "GitHub Actions", cat: "cicd", level: "Expert", icon: GitHubActionsIcon, desc: "Automated test workflows triggered on Pull Requests" },
  { name: "GitLab CI/CD", cat: "cicd", level: "Advanced", icon: GitLabIcon, desc: "Pipeline YAML configuration & artifact reporting" },
  { name: "Docker Grid", cat: "cicd", level: "Intermediate", icon: DockerIcon, desc: "Containerized Selenium grid & test execution" },

  { name: "TypeScript", cat: "web", level: "Expert", icon: TypeScriptIcon, desc: "ES6+, async/await, custom automation utilities" },
  { name: "JavaScript", cat: "web", level: "Expert", icon: JavaScriptIcon, desc: "Modern ES6+ frontend and Node.js testing" },
  { name: "Java", cat: "web", level: "Advanced", icon: JavaIcon, desc: "Object-oriented test framework architectures" },
  { name: "HTML5 & CSS3", cat: "web", level: "Advanced", icon: Html5Icon, desc: "DOM element locators, XPath, CSS selectors" },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredSkills =
    activeFilter === "all"
      ? skillItems
      : skillItems.filter((item) => item.cat === activeFilter);

  return (
    <section id="skills" className="section-padding bg-[hsl(var(--muted)/0.3)]">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[hsl(var(--accent))]" />
            Core Toolkit & Mastery
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Skills & Frameworks</h2>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-[hsl(var(--primary))] text-white shadow-lg glow-purple scale-105"
                    : "glass text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const BrandIcon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card p-5 rounded-2xl border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.4)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[hsl(var(--muted)/0.7)] p-2 flex items-center justify-center border border-[hsl(var(--card-border))] shadow-sm">
                        <BrandIcon className="w-6 h-6" />
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
