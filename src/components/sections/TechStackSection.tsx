"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
  { name: "Playwright TS", cat: "Automation Framework", icon: PlaywrightIcon, color: "#45BA4B" },
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="container-max text-center" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card p-5 rounded-2xl border border-[hsl(var(--card-border))] flex flex-col items-center justify-center gap-3 text-center group cursor-pointer"
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
