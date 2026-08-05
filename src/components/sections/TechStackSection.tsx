"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  PlaywrightIcon,
  SeleniumIcon,
  JMeterIcon,
  PostmanIcon,
  DockerIcon,
  TypeScriptIcon,
  PythonIcon,
  GitHubActionsIcon,
  GitLabIcon,
  JiraIcon,
} from "@/components/ui/SvgIcons";

const techStack = [
  { name: "Playwright", cat: "Automation Framework", icon: PlaywrightIcon, color: "#45BA4B" },
  { name: "Apache JMeter", cat: "Performance & Load", icon: JMeterIcon, color: "#D22128" },
  { name: "Selenium", cat: "Cross-Browser Web", icon: SeleniumIcon, color: "#CF0A2C" },
  { name: "Postman & Newman", cat: "API Testing & Runner", icon: PostmanIcon, color: "#FF6C37" },
  { name: "TypeScript", cat: "Primary Language", icon: TypeScriptIcon, color: "#3178C6" },
  { name: "Python", cat: "Scripting & PyTest", icon: PythonIcon, color: "#3776AB" },
  { name: "GitHub Actions", cat: "CI/CD Automation", icon: GitHubActionsIcon, color: "#2088FF" },
  { name: "GitLab CI/CD", cat: "Pipeline Integration", icon: GitLabIcon, color: "#FC6D26" },
  { name: "Docker", cat: "Containerized Grid", icon: DockerIcon, color: "#2496ED" },
  { name: "Jira & Agile", cat: "Defect Management", icon: JiraIcon, color: "#0052CC" },
];

export default function TechStackSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="container-max text-center">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-[hsl(var(--accent))]" />
            Technology Ecosystem
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Tech Stack & Brand Tools</h2>
        </motion.div>

        {/* Brand SVG Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 260, damping: 22, delay: i * 0.04 }
                }
                whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.03 }}
                className="glass-card p-5 rounded-2xl border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.5)] flex flex-col items-center justify-center gap-3 text-center group cursor-pointer transition-colors duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}15` }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5">
                    {tech.cat}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
