"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

interface Skill {
  name: string;
  category: "all" | "automation" | "performance" | "cicd" | "languages";
  context: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function SkillsSectionV2() {
  const [activeFilter, setActiveFilter] = useState("all");
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { id: "all", label: "All Arsenal" },
    { id: "automation", label: "E2E & Mobile" },
    { id: "performance", label: "Load & Stress" },
    { id: "cicd", label: "CI/CD & DevOps" },
    { id: "languages", label: "Languages & Core" },
  ];

  const skills: Skill[] = [
    // Automation
    {
      name: "Playwright",
      category: "automation",
      context: "Page Object Model (POM) E2E Automation",
      badge: "Lead Framework",
      icon: PlaywrightIcon,
    },
    {
      name: "Selenium WebDriver",
      category: "automation",
      context: "Cross-Browser Regression Suites",
      badge: "Enterprise Core",
      icon: SeleniumIcon,
    },
    {
      name: "Appium Mobile",
      category: "automation",
      context: "Android & iOS Native App Automation",
      badge: "Mobile Testing",
      icon: AppiumIcon,
    },
    {
      name: "Postman & Newman",
      category: "automation",
      context: "RESTful API Contract & Regression Suites",
      badge: "API Automation",
      icon: PostmanIcon,
    },

    // Performance
    {
      name: "Apache JMeter",
      category: "performance",
      context: "15,000+ VU High-Concurrency Stress",
      badge: "Distributed Load",
      icon: JMeterIcon,
    },
    {
      name: "K6 Load Engine",
      category: "performance",
      context: "Developer-Centric Cloud Stress Benchmarks",
      badge: "k6 Scripts",
      icon: K6Icon,
    },

    // CI/CD & DevOps
    {
      name: "GitHub Actions",
      category: "cicd",
      context: "Parallel Test Matrix & Automated PR Gates",
      badge: "CI/CD Lead",
      icon: GitHubActionsIcon,
    },
    {
      name: "GitLab CI",
      category: "cicd",
      context: "Containerized Runner Pipelines",
      badge: "Enterprise CI",
      icon: GitLabIcon,
    },
    {
      name: "Docker Grid",
      category: "cicd",
      context: "Hermetic Headless Browser Environments",
      badge: "Containerization",
      icon: DockerIcon,
    },

    // Languages
    {
      name: "TypeScript",
      category: "languages",
      context: "Type-Safe Playwright Test Frameworks",
      badge: "Primary Language",
      icon: TypeScriptIcon,
    },
    {
      name: "Python",
      category: "languages",
      context: "Automation Utilities & Data Validation",
      badge: "Scripting",
      icon: PythonIcon,
    },
    {
      name: "JavaScript",
      category: "languages",
      context: "Node.js Automation Ecosystem & Async Flow",
      badge: "Runtime",
      icon: JavaScriptIcon,
    },
    {
      name: "Java",
      category: "languages",
      context: "OOP Test Frameworks & JMeter Custom Plugins",
      badge: "OOP Test Suites",
      icon: JavaIcon,
    },
    {
      name: "Jira Software",
      category: "cicd",
      context: "Sprint Defect Governance & RTM Traceability",
      badge: "Agile Tracking",
      icon: JiraIcon,
    },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-max">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-6 mb-10 border-b border-zinc-200/60 dark:border-zinc-800/60 gap-4">
          <div>
            <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
              // 04 · Production Arsenal &amp; Tooling
            </span>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Battle-Tested Automation Stack
            </h2>
          </div>

          {/* Minimalist Filter Navigation (Unboxed Text Tabs) */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono-geist text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Unboxed Skills Flow (Zero Container Boxes, Clean Item Grid) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4"
          >
            {filteredSkills.map((skill) => {
              const SvgIcon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="group flex items-start gap-4 transition-all duration-200"
                >
                  {/* Official Brand SVG Icon */}
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 p-2 shrink-0 flex items-center justify-center border border-zinc-200/80 dark:border-zinc-800/80 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-colors">
                    <SvgIcon className="w-full h-full" />
                  </div>

                  {/* Tool Metadata */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-geist text-base font-bold text-zinc-900 dark:text-white truncate">
                        {skill.name}
                      </h3>
                      <span className="font-mono-geist text-[10px] text-emerald-600 dark:text-emerald-400 shrink-0">
                        {skill.badge}
                      </span>
                    </div>

                    <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 leading-normal mt-0.5 truncate">
                      {skill.context}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Unboxed Competency Summary Footer */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-geist text-zinc-500 dark:text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Official Multi-Color Brand Logos Loaded From Source</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Hermetic Fixtures</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Parallel Workers</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Zero Flakiness Invariant</span>
          </div>
        </div>

      </div>
    </section>
  );
}
