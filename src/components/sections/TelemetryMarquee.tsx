"use client";

import React from "react";
import {
  Award,
  Zap,
  Activity,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Clock,
  Radio,
} from "lucide-react";
import {
  PlaywrightIcon,
  JMeterIcon,
  TypeScriptIcon,
  PostmanIcon,
  DockerIcon,
  GitHubActionsIcon,
  JiraIcon,
} from "@/components/ui/SvgIcons";

interface TelemetryItem {
  id: string;
  name: string;
  data: string;
  badge: string;
  icon?: React.ComponentType<{ className?: string }>;
  lucideIcon?: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  accentColor: string;
}

const telemetryItems: TelemetryItem[] = [
  {
    id: "playwright",
    name: "Playwright POM",
    data: "120+ E2E Flows",
    badge: "Deterministic",
    icon: PlaywrightIcon,
    accentColor: "#2EAD33",
  },
  {
    id: "runtime",
    name: "Regression Runtime",
    data: "75% Faster · 14h ➔ 3.5h",
    badge: "Parallel CI",
    lucideIcon: Zap,
    accentColor: "#10b981",
  },
  {
    id: "jmeter",
    name: "Apache JMeter",
    data: "15,000+ VUs Benchmarked",
    badge: "Load Surge",
    icon: JMeterIcon,
    accentColor: "#D22128",
  },
  {
    id: "sla",
    name: "p95 Latency SLA",
    data: "< 1.74s · 0.00% Error Rate",
    badge: "Production SLA",
    lucideIcon: Activity,
    accentColor: "#06b6d4",
  },
  {
    id: "award",
    name: "nopStation Award",
    data: "Zero-Defect Releases",
    badge: "Team Shwapno & Paragon",
    lucideIcon: Award,
    accentColor: "#f59e0b",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    data: "4 Cloud Workers Parallel",
    badge: "CI/CD Gate",
    icon: GitHubActionsIcon,
    accentColor: "#2088FF",
  },
  {
    id: "flakes",
    name: "Zero Flakiness",
    data: "0ms Arbitrary Waits",
    badge: "Strict Locators",
    lucideIcon: ShieldCheck,
    accentColor: "#10b981",
  },
  {
    id: "brain-station",
    name: "Brain Station 23",
    data: "nopStation Division",
    badge: "SQA Engineer II",
    lucideIcon: Building2,
    accentColor: "#10b981",
  },
  {
    id: "postman",
    name: "Payment Gateways",
    data: "bKash & Nagad Mocks",
    badge: "FinTech Webhooks",
    icon: PostmanIcon,
    accentColor: "#F37036",
  },
  {
    id: "rollbacks",
    name: "Release Stability",
    data: "0 Rollbacks · 15+ Sprints",
    badge: "Zero Defect",
    lucideIcon: CheckCircle2,
    accentColor: "#10b981",
  },
  {
    id: "batch16",
    name: "Batch 16 Certified",
    data: "350+ Test Cases",
    badge: "IT Training BD",
    lucideIcon: CheckCircle2,
    accentColor: "#8b5cf6",
  },
  {
    id: "docker",
    name: "Docker Grid",
    data: "Hermetic Ubuntu Containers",
    badge: "Headless E2E",
    icon: DockerIcon,
    accentColor: "#2496ED",
  },
];

export default function TelemetryMarquee() {
  // Seamless loop by duplicating items array
  const tickerItems = [...telemetryItems, ...telemetryItems];

  return (
    <section
      id="telemetry-ticker"
      aria-label="Live Telemetry Conveyor"
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
            const LucideIcon = item.lucideIcon;

            return (
              <div
                key={`${item.id}-${idx}`}
                className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.04] dark:bg-white/[0.03] border-t border-black/15 dark:border-t-white/20 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-md shadow-xs hover:border-emerald-500/30 hover:scale-[1.02] transition-all select-none shrink-0"
              >
                {/* Icon Rendering */}
                {BrandIcon ? (
                  <BrandIcon className="w-4 h-4 shrink-0" />
                ) : LucideIcon ? (
                  <LucideIcon size={14} className="shrink-0" style={{ color: item.accentColor }} />
                ) : (
                  <span
                    className="w-2 h-2 rounded-full shrink-0 shadow-xs animate-pulse"
                    style={{ backgroundColor: item.accentColor }}
                  />
                )}

                {/* Name / Category */}
                <span className="font-geist text-xs font-semibold text-zinc-800 dark:text-zinc-200 whitespace-nowrap">
                  {item.name}
                </span>

                <span className="text-zinc-300 dark:text-zinc-700 text-xs">•</span>

                {/* Metric / Live Telemetry Data */}
                <span className="font-mono-geist text-xs font-medium text-emerald-600 dark:text-emerald-400 tabular-nums whitespace-nowrap">
                  {item.data}
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
