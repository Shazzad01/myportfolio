"use client";

import React from "react";
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
  ClaudeCodeIcon,
  AntigravityIcon,
  VSCodeIcon,
} from "@/components/ui/SvgIcons";

interface TechToolItem {
  id: string;
  name: string;
  role: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const techToolItems: TechToolItem[] = [
  {
    id: "playwright",
    name: "Playwright",
    role: "Page Object Model · E2E Automation",
    badge: "E2E_AUTOMATION",
    icon: PlaywrightIcon,
  },
  {
    id: "jmeter",
    name: "Apache JMeter",
    role: "15k VU Concurrency · Stress Profiling",
    badge: "PERFORMANCE",
    icon: JMeterIcon,
  },
  {
    id: "typescript",
    name: "TypeScript",
    role: "Strict Type Safety · Zero-Any Fixtures",
    badge: "LANGUAGE",
    icon: TypeScriptIcon,
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    role: "4x Parallel CI/CD · PR Quality Gates",
    badge: "CI_CD",
    icon: GitHubActionsIcon,
  },
  {
    id: "docker",
    name: "Docker Grid",
    role: "Hermetic Containerized Test Grid",
    badge: "DEVOPS",
    icon: DockerIcon,
  },
  {
    id: "selenium",
    name: "Selenium WebDriver",
    role: "Cross-Browser Grid · Enterprise POM",
    badge: "AUTOMATION",
    icon: SeleniumIcon,
  },
  {
    id: "postman",
    name: "Postman & Newman",
    role: "Automated REST Collections & Mocks",
    badge: "API_TESTING",
    icon: PostmanIcon,
  },
  {
    id: "cypress",
    name: "Cypress",
    role: "Component & Time-Travel Debugging",
    badge: "WEB_TEST",
    icon: CypressIcon,
  },
  {
    id: "appium",
    name: "Appium Mobile",
    role: "Native Mobile Automation (Android & iOS)",
    badge: "MOBILE_QA",
    icon: AppiumIcon,
  },
  {
    id: "k6",
    name: "Grafana k6",
    role: "JavaScript Latency SLA & Threshold Gates",
    badge: "PERFORMANCE",
    icon: K6Icon,
  },
  {
    id: "javascript",
    name: "JavaScript",
    role: "Node.js Runtime & Async Automation",
    badge: "RUNTIME",
    icon: JavaScriptIcon,
  },
  {
    id: "python",
    name: "Python 3",
    role: "PyTest Engine & Automation Scripting",
    badge: "LANGUAGE",
    icon: PythonIcon,
  },
  {
    id: "java",
    name: "Java",
    role: "TestNG / JUnit Enterprise Test Suites",
    badge: "LANGUAGE",
    icon: JavaIcon,
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI",
    role: "Multi-Stage Regression Pipelines",
    badge: "CI_CD",
    icon: GitLabIcon,
  },
  {
    id: "jira",
    name: "Jira Software",
    role: "P0 Defect Governance & Traceability",
    badge: "TEST_OPS",
    icon: JiraIcon,
  },
  {
    id: "azure-boards",
    name: "Azure Boards",
    role: "RTM Enterprise Requirements Mapping",
    badge: "TEST_OPS",
    icon: AzureBoardsIcon,
  },
  {
    id: "claude-code",
    name: "Claude Code",
    role: "Autonomous Agentic CLI · Test Scaffolding",
    badge: "AI_AGENT",
    icon: ClaudeCodeIcon,
  },
  {
    id: "antigravity",
    name: "Antigravity IDE",
    role: "Agentic Workspace · Multi-Model Pair Programming",
    badge: "AGENTIC_IDE",
    icon: AntigravityIcon,
  },
  {
    id: "vscode",
    name: "VS Code",
    role: "Primary IDE · Playwright & Container Extension Matrix",
    badge: "CORE_IDE",
    icon: VSCodeIcon,
  },
];

export default function TelemetryMarquee() {
  // Seamless loop by duplicating items array
  const tickerItems = [...techToolItems, ...techToolItems];

  return (
    <section
      id="telemetry-ticker"
      aria-label="Tech Stack and Tooling Conveyor"
      className="relative w-full py-4 sm:py-5 overflow-hidden border-y border-black/5 dark:border-white/5 bg-black/[0.015] dark:bg-white/[0.015] backdrop-blur-xl"
    >
      {/* Top subtle specular highlight edge */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Left and Right Fade Masks */}
      <div
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-max items-center gap-3 sm:gap-4 animate-marquee-ltr hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {tickerItems.map((item, idx) => {
            const BrandIcon = item.icon;

            return (
              <div
                key={`${item.id}-${idx}`}
                className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.04] dark:bg-white/[0.03] border-t border-black/15 dark:border-t-white/20 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-md shadow-xs hover:border-emerald-500/30 hover:scale-[1.02] transition-all select-none shrink-0"
              >
                {/* Official Brand Vector SVG */}
                <BrandIcon className="w-4 h-4 shrink-0" />

                {/* Tool Name */}
                <span className="font-geist text-xs font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                  {item.name}
                </span>

                <span className="text-zinc-300 dark:text-zinc-700 text-xs">•</span>

                {/* Technical Role / Specialization */}
                <span className="font-mono-geist text-xs font-medium text-emerald-600 dark:text-emerald-400 tabular-nums whitespace-nowrap">
                  {item.role}
                </span>

                {/* Scope Tag Badge */}
                <span className="font-mono-geist text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 border border-black/5 dark:border-white/5 whitespace-nowrap">
                  {item.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom subtle specular highlight edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
