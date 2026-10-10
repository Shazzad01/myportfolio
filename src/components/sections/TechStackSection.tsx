"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  GitLabIcon,
  DockerIcon,
  JiraIcon,
} from "@/components/ui/SvgIcons";

interface TechItem {
  name: string;
  cat: string;
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
}

const techStack: TechItem[] = [
  { name: "Playwright", cat: "Lead E2E Automation", metric: "120+ Flows", icon: PlaywrightIcon },
  { name: "Apache JMeter", cat: "Distributed Stress", metric: "15,000+ VU", icon: JMeterIcon },
  { name: "Selenium", cat: "Cross-Browser Web", metric: "80+ Suites", icon: SeleniumIcon },
  { name: "Cypress", cat: "Component & Web", metric: "45+ Workflows", icon: CypressIcon },
  { name: "Appium Mobile", cat: "Native Android & iOS", metric: "30+ Native", icon: AppiumIcon },
  { name: "Postman / Newman", cat: "API Contract Testing", metric: "200+ Endpoints", icon: PostmanIcon },
  { name: "K6 Load Engine", cat: "Latency & SLA Guard", metric: "Sub-Second P99", icon: K6Icon },
  { name: "TypeScript", cat: "Strict Type Safety", metric: "Primary Lang", icon: TypeScriptIcon },
  { name: "JavaScript", cat: "Node.js Runtime", metric: "Async Concurrency", icon: JavaScriptIcon },
  { name: "Python", cat: "Scripting & PyTest", metric: "Data Synthesis", icon: PythonIcon },
  { name: "Java", cat: "Enterprise JVM", metric: "TestNG / JUnit", icon: JavaIcon },
  { name: "GitHub Actions", cat: "CI/CD Pipeline Matrix", metric: "Parallel Gates", icon: GitHubActionsIcon },
  { name: "GitLab CI/CD", cat: "Continuous Delivery", metric: "Staging Triggers", icon: GitLabIcon },
  { name: "Docker", cat: "Containerized Grid", metric: "Hermetic Runs", icon: DockerIcon },
  { name: "Jira Software", cat: "Defect Governance", metric: "100% Traceability", icon: JiraIcon },
];

export default function TechStackSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">
      {/* Horizon Specular Radiance */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] bg-gradient-to-b from-black/[0.02] dark:from-white/[0.02] to-transparent rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              [ECOSYSTEM_TELEMETRY]
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
          </div>
          <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Battle-Tested Tooling Matrix
          </h2>
          <p className="font-geist text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 font-normal leading-relaxed">
            Universal brand vector SVGs powering hermetic test automation, distributed concurrency, and automated deployment verification.
          </p>
        </motion.div>

        {/* Brand SVG Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 280, damping: 24, delay: i * 0.03 }
                }
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="p-5 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl hover:bg-white/[0.04] flex flex-col items-center justify-center gap-3 text-center group cursor-pointer transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-geist font-bold text-sm text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {tech.cat}
                  </p>
                  <span className="font-mono-geist text-[10px] text-emerald-600 dark:text-emerald-400 font-medium block mt-1">
                    {tech.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
