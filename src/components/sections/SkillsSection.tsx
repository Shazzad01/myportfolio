"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Cpu, Target } from "lucide-react";
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
  { id: "all", label: "All Arsenal" },
  { id: "automation", label: "E2E & Mobile" },
  { id: "performance", label: "Load & Stress" },
  { id: "cicd", label: "CI/CD & Cloud" },
  { id: "languages", label: "Languages" },
];

const skillItems = [
  { name: "Playwright", cat: "automation", level: "98%", icon: PlaywrightIcon, tag: "E2E Automation" },
  { name: "Selenium", cat: "automation", level: "92%", icon: SeleniumIcon, tag: "Cross-Browser" },
  { name: "Appium Mobile", cat: "automation", level: "88%", icon: AppiumIcon, tag: "iOS & Android" },
  { name: "Postman & Newman", cat: "automation", level: "95%", icon: PostmanIcon, tag: "API Verification" },
  
  { name: "Apache JMeter", cat: "performance", level: "94%", icon: JMeterIcon, tag: "5k VUs Engine" },
  { name: "K6 Load Engine", cat: "performance", level: "85%", icon: K6Icon, tag: "Cloud Stress" },

  { name: "GitHub Actions", cat: "cicd", level: "92%", icon: GitHubActionsIcon, tag: "Matrix CI/CD" },
  { name: "GitLab CI/CD", cat: "cicd", level: "88%", icon: GitLabIcon, tag: "Runner Pipeline" },
  { name: "Docker Grid", cat: "cicd", level: "86%", icon: DockerIcon, tag: "Containerization" },

  { name: "TypeScript", cat: "languages", level: "95%", icon: TypeScriptIcon, tag: "Core Automation" },
  { name: "Python", cat: "languages", level: "88%", icon: PythonIcon, tag: "PyTest Scripts" },
  { name: "JavaScript", cat: "languages", level: "94%", icon: JavaScriptIcon, tag: "Node Runtime" },
  { name: "Java", cat: "languages", level: "85%", icon: JavaIcon, tag: "OOP Test Frameworks" },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const shouldReduceMotion = useReducedMotion();

  const filtered =
    activeFilter === "all"
      ? skillItems
      : skillItems.filter((item) => item.cat === activeFilter);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <div className="font-mono text-xs font-bold text-[#f59e0b] uppercase tracking-widest flex items-center gap-2 mb-2">
              <Cpu size={13} />
              Production Arsenal // Official Brand SVGs
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
              Technical <span className="text-gradient">Arsenal & Radar</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-4 sm:mt-0 bg-black/40 p-1.5 rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-[#f59e0b] text-[#07070a] font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Arsenal & Competency Radar Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand Grid (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3.5"
              >
                {filtered.map((skill) => {
                  const SvgIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="glass-card rounded-xl p-4 flex items-center gap-3.5 border border-white/10 hover:border-[#f59e0b]/40 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-black/50 p-2 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#f59e0b]/40 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all">
                        <SvgIcon className="w-full h-full" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-heading font-bold text-sm text-white truncate">
                          {skill.name}
                        </div>
                        <div className="font-mono text-[10px] text-slate-400 truncate">
                          {skill.tag}
                        </div>
                      </div>
                      <div className="font-mono text-xs font-bold text-[#f59e0b]">
                        {skill.level}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Competency Radar Breakdown (4 Cols) */}
          <div className="lg:col-span-4 glass-card rounded-2xl p-6 border border-[#f59e0b]/20">
            <div className="font-mono text-xs font-bold text-[#f59e0b] uppercase tracking-widest flex items-center gap-2 mb-4">
              <Target size={13} />
              Competency Radar
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-white">UI Automation (Playwright/Selenium)</span>
                  <span className="text-[#f59e0b] font-bold">98%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full" style={{ width: "98%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-white">API Testing & Contracts (Postman)</span>
                  <span className="text-[#f59e0b] font-bold">95%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full" style={{ width: "95%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-white">Load & Stress (JMeter 5k VUs)</span>
                  <span className="text-[#f59e0b] font-bold">92%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-white">CI/CD Quality Gates (GH Actions)</span>
                  <span className="text-[#f59e0b] font-bold">90%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full" style={{ width: "90%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-white">Core Scripting (TS, Python, Java)</span>
                  <span className="text-[#f59e0b] font-bold">94%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full" style={{ width: "94%" }} />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>ISTQB Certified Tester</span>
              <span className="text-emerald-400 font-bold">100% Quality Focus</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
