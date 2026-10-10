"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  PlaywrightIcon,
  SeleniumIcon,
  CypressIcon,
  AppiumIcon,
  JMeterIcon,
  PostmanIcon,
  K6Icon,
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  JavaIcon,
  GitHubActionsIcon,
  DockerIcon,
  GitLabIcon,
  JiraIcon,
  AzureBoardsIcon,
  TrelloIcon,
} from "@/components/ui/SvgIcons";

interface SkillItem {
  id: string;
  name: string;
  category: "automation" | "performance" | "languages" | "devops" | "governance";
  role: string;
  tag: string;
  metricChip: string;
  proficiency: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const skillsData: SkillItem[] = [
  // 1. Test Automation & E2E
  {
    id: "playwright",
    name: "Playwright",
    category: "automation",
    role: "Lead E2E Automation Framework",
    tag: "[PRIMARY_E2E]",
    metricChip: "120+ High-Value E2E Flows",
    proficiency: 98,
    description:
      "Hermetic browser fixtures, multi-role auth injection, dynamic locators, and parallel worker execution across Shwapno & Paragon staging.",
    icon: PlaywrightIcon,
    accentColor: "#2EAD33",
  },
  {
    id: "selenium",
    name: "Selenium WebDriver",
    category: "automation",
    role: "Enterprise Cross-Browser Core",
    tag: "[ENTERPRISE_POM]",
    metricChip: "80+ Regression Suites",
    proficiency: 92,
    description:
      "Robust Page Object Model architectures, explicit synchronization guards, cross-browser grid nodes, and legacy suite hardening.",
    icon: SeleniumIcon,
    accentColor: "#43B02A",
  },
  {
    id: "cypress",
    name: "Cypress",
    category: "automation",
    role: "Component & Web Testing",
    tag: "[DOM_STUBBING]",
    metricChip: "45+ E2E Workflows",
    proficiency: 90,
    description:
      "Real-time DOM inspection, time-travel assertion debugging, network intercept stubbing, and headless CI regression runs.",
    icon: CypressIcon,
    accentColor: "#69D3A7",
  },
  {
    id: "appium",
    name: "Appium Mobile",
    category: "automation",
    role: "Mobile E2E Testing",
    tag: "[NATIVE_MOBILE]",
    metricChip: "30+ Native Flows",
    proficiency: 88,
    description:
      "Android and iOS native app test automation, touch gesture emulation, native UI automator integration, and staging device matrix.",
    icon: AppiumIcon,
    accentColor: "#EE376D",
  },

  // 2. Performance & API Engineering
  {
    id: "jmeter",
    name: "Apache JMeter",
    category: "performance",
    role: "Distributed Stress Engine",
    tag: "[15K_VU_STRESS]",
    metricChip: "15,000+ Concurrent VUs",
    proficiency: 96,
    description:
      "Distributed master-slave stress testing, multi-scenario load profiles, throughput pacing, and retail checkout SLA verification.",
    icon: JMeterIcon,
    accentColor: "#D22128",
  },
  {
    id: "postman",
    name: "Postman & Newman",
    category: "performance",
    role: "API Contract Verification",
    tag: "[CONTRACT_TESTS]",
    metricChip: "200+ Endpoint Suites",
    proficiency: 95,
    description:
      "Automated RESTful regression collections, dynamic pre-request bearer token generation, JSON schema validation, and Newman CI hooks.",
    icon: PostmanIcon,
    accentColor: "#F37036",
  },
  {
    id: "k6",
    name: "K6 Load Engine",
    category: "performance",
    role: "Latency & Stress Guard",
    tag: "[LATENCY_SLA]",
    metricChip: "Sub-Second Thresholds",
    proficiency: 90,
    description:
      "Scriptable JavaScript load testing, strict P95/P99 latency threshold assertions, and automated PR performance regress gates.",
    icon: K6Icon,
    accentColor: "#7D64FF",
  },

  // 3. Core Languages & Runtime
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    role: "Strict Type Safety",
    tag: "[PRIMARY_LANG]",
    metricChip: "Strict Zero-Any Policy",
    proficiency: 95,
    description:
      "Strongly typed test fixtures, contract interfaces, custom Playwright page extensions, and runtime Zod validation schemas.",
    icon: TypeScriptIcon,
    accentColor: "#3178C6",
  },
  {
    id: "javascript",
    name: "JavaScript (Node.js)",
    category: "languages",
    role: "Async/Await & Runtime",
    tag: "[ASYNC_RUNTIME]",
    metricChip: "Non-Blocking Concurrency",
    proficiency: 94,
    description:
      "Event loop orchestration, custom reporter plugins, promise concurrency, and NPM test ecosystem automation.",
    icon: JavaScriptIcon,
    accentColor: "#F7DF1E",
  },
  {
    id: "python",
    name: "Python 3",
    category: "languages",
    role: "PyTest & Scripting",
    tag: "[AUTOMATION_GLUE]",
    metricChip: "Parametrized PyTest Suites",
    proficiency: 88,
    description:
      "Automated data synthesis utilities, PyTest parameterized test runs, database state assertions, and backend validation scripts.",
    icon: PythonIcon,
    accentColor: "#3776AB",
  },
  {
    id: "java",
    name: "Java",
    category: "languages",
    role: "Enterprise OOP Test Frameworks",
    tag: "[JVM_TESTNG]",
    metricChip: "JUnit & TestNG Engines",
    proficiency: 85,
    description:
      "Object-oriented test design, TestNG parallel execution, Maven dependency lifecycle, and custom JMeter Java samplers.",
    icon: JavaIcon,
    accentColor: "#0074BD",
  },

  // 4. DevOps & CI/CD Pipelines
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "devops",
    role: "Parallel PR Verification Matrix",
    tag: "[PRIMARY_CI_CD]",
    metricChip: "Parallel PR Quality Gates",
    proficiency: 94,
    description:
      "Multi-runner matrix workflows, automated PR gate validations, sharded test dispatch, and HTML report artifact publishing.",
    icon: GitHubActionsIcon,
    accentColor: "#2088FF",
  },
  {
    id: "docker",
    name: "Docker Grid",
    category: "devops",
    role: "Hermetic Containerized Grid",
    tag: "[HERMETIC_GRID]",
    metricChip: "Reproducible Ephemeral Runs",
    proficiency: 92,
    description:
      "Headless browser execution containers, hermetic staging environments, Docker-compose service virtualization, and Grid scaling.",
    icon: DockerIcon,
    accentColor: "#2496ED",
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI",
    category: "devops",
    role: "Continuous Integration Pipelines",
    tag: "[STAGING_PIPELINE]",
    metricChip: "Multi-Stage Regression",
    proficiency: 88,
    description:
      "Multi-stage pipeline definitions, containerized runner caching, automated sanity checks, and staging deployment gates.",
    icon: GitLabIcon,
    accentColor: "#FC6D26",
  },

  // 5. Quality Governance & Test Ops
  {
    id: "jira",
    name: "Jira Software",
    category: "governance",
    role: "Defect Lifecycle Governance",
    tag: "[TRACEABILITY_P0]",
    metricChip: "100% Defect Traceability",
    proficiency: 95,
    description:
      "Sprint bug lifecycle governance, severity-to-priority triage matrices, automated Slack alert links, and release sign-off gates.",
    icon: JiraIcon,
    accentColor: "#0052CC",
  },
  {
    id: "azure-boards",
    name: "Azure DevOps / Boards",
    category: "governance",
    role: "RTM Traceability Matrix",
    tag: "[RTM_MAPPING]",
    metricChip: "Enterprise Backlog Alignment",
    proficiency: 90,
    description:
      "Requirements Traceability Matrix (RTM) mapping, user story acceptance criteria verification, and agile sprint boards.",
    icon: AzureBoardsIcon,
    accentColor: "#0078D4",
  },
  {
    id: "trello",
    name: "Trello",
    category: "governance",
    role: "Agile Task Coordination",
    tag: "[SPRINT_SYNC]",
    metricChip: "Exploratory Charters",
    proficiency: 92,
    description:
      "Rapid exploratory testing charter boards, blocker triage boards, bug reproduction Kanban workflows, and cross-team sync.",
    icon: TrelloIcon,
    accentColor: "#0052CC",
  },
];

const categories = [
  { id: "all", label: "All Arsenal (17)" },
  { id: "automation", label: "Test Automation & E2E" },
  { id: "performance", label: "Performance & API" },
  { id: "languages", label: "Languages & Runtime" },
  { id: "devops", label: "DevOps & CI/CD" },
  { id: "governance", label: "Quality Governance" },
] as const;

export default function SkillsSectionV2() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Horizon Specular Ambient Radiance */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[360px] bg-gradient-to-b from-black/[0.03] dark:from-white/[0.025] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-10 sm:mb-14 border-b border-black/10 dark:border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [AUTOMATION_ARSENAL]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Engineered Tech Stack &amp; Tooling
            </h2>
            <p className="font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mt-2 max-w-3xl font-normal leading-relaxed">
              Specialized test automation frameworks, distributed load testing suites, and continuous quality infrastructure deployed across enterprise retail applications.
            </p>
          </div>

          <div className="mt-2 sm:mt-0 text-left sm:text-right shrink-0">
            <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 block">
              17 Verified Enterprise Tools
            </span>
            <span className="font-mono-geist text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              Zero Generic Fallback SVGs
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-geist transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Container-Level AnimatePresence to Prevent Grid Collisions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredSkills.map((skill, index) => {
              const SvgIcon = skill.icon;

              return (
                <motion.div
                  key={skill.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.25, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }
                  }
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="group relative p-6 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-white/[0.04] transition-all flex flex-col justify-between"
                >
                  {/* Top Bar: Icon + Category Tag */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      {/* Official Multi-Color Brand SVG Container */}
                      <div className="w-12 h-12 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] p-2.5 flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:scale-105 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all duration-300 shrink-0">
                        <SvgIcon className="w-full h-full" />
                      </div>

                      {/* Tag Chip */}
                      <span className="font-mono-geist text-[10px] uppercase font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full tracking-wider">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Tool Name & Role */}
                    <h3 className="font-geist text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                      {skill.role}
                    </p>

                    {/* Technical Description Context */}
                    <p className="font-geist text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2.5">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom: Proficiency Metric & Test Count Chip */}
                  <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/5">
                    <div className="flex items-center justify-between text-[11px] font-mono-geist mb-2">
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                        {skill.metricChip}
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Precision Meter Bar */}
                    <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full transition-all duration-500 group-hover:bg-emerald-400"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Competency Summary & Architecture Footer */}
        <div className="mt-14 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-geist text-zinc-500 dark:text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse" />
            <span>17 Official Brand Vector SVGs · Strict Zero-Flakiness Architecture</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span>120+ Playwright E2E</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>15,000+ JMeter VU Concurrency</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>200+ Postman Contract Assertions</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>100% Hermetic Fixtures</span>
          </div>
        </div>
      </div>
    </section>
  );
}
