"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Play,
  CheckCircle2,
  Terminal,
  RefreshCw,
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  Flame,
} from "lucide-react";

interface TestSuite {
  id: string;
  name: string;
  framework: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  file: string;
  stats: { label: string; value: string }[];
  logs: { text: string; type: "cmd" | "info" | "pass" | "summary" }[];
}

const testSuites: TestSuite[] = [
  {
    id: "playwright",
    name: "Playwright E2E",
    framework: "Playwright TS v1.42",
    icon: ShieldCheck,
    file: "shwapno.checkout.spec.ts",
    stats: [
      { label: "Parallel Workers", value: "4 Chromium" },
      { label: "Assertions", value: "142 Verified" },
      { label: "Exec Time", value: "1.12s" },
      { label: "Pass Rate", value: "100%" },
    ],
    logs: [
      { text: "npx playwright test e2e/shwapno.checkout.spec.ts --project=chromium", type: "cmd" },
      { text: "Running 3 tests using 4 parallel workers on headless Chromium", type: "info" },
      { text: "✓ [chromium] › auth.setup.ts:14 › Hydrate Session & bKash Escrow (190ms)", type: "pass" },
      { text: "✓ [chromium] › cart-sync.spec.ts:32 › Hyperlocal Stock Lock in SAP S/4HANA (310ms)", type: "pass" },
      { text: "✓ [chromium] › checkout.spec.ts:58 › bKash One-Page Checkout Authorization (420ms)", type: "pass" },
      { text: "3 passed in 1.12s across 4 workers (0 flakiness, 100% assertions satisfied)", type: "summary" },
    ],
  },
  {
    id: "jmeter",
    name: "JMeter Stress",
    framework: "Apache JMeter 5.6",
    icon: Flame,
    file: "shwapno.spike-5k-users.jmx",
    stats: [
      { label: "Concurrent Users", value: "5,000 VUs" },
      { label: "Throughput", value: "1,240 req/s" },
      { label: "p95 Latency", value: "184ms" },
      { label: "Error Rate", value: "0.00%" },
    ],
    logs: [
      { text: "jmeter -n -t shwapno.spike-5k-users.jmx -l results.jtl -e -o ./report", type: "cmd" },
      { text: "Ramping 5,000 Concurrent Virtual Users over 10s window", type: "info" },
      { text: "✓ 200 OK › GET /api/v2/catalog/search?q=dairy (p95: 142ms)", type: "pass" },
      { text: "✓ 200 OK › POST /api/v2/cart/checkout (p95: 280ms)", type: "pass" },
      { text: "✓ 200 OK › POST /api/v2/payment/bkash/callback (p95: 310ms)", type: "pass" },
      { text: "150,000 sampled requests completed: 0.00% error rate (Target p95 < 500ms met)", type: "summary" },
    ],
  },
  {
    id: "newman",
    name: "Newman API",
    framework: "Postman CLI v1.1",
    icon: Zap,
    file: "paragon.delivery-api.json",
    stats: [
      { label: "Contract Tests", value: "28 Endpoints" },
      { label: "Schema Spec", value: "OpenAPI 3.0" },
      { label: "Response Avg", value: "68ms" },
      { label: "Status", value: "Regressions: 0" },
    ],
    logs: [
      { text: "newman run paragon.delivery-api.json -e staging.json --bail", type: "cmd" },
      { text: "Executing contract assertion grid across delivery warehouse APIs", type: "info" },
      { text: "✓ [200 OK] › GET /warehouses/nearby › Schema contract validation passed (48ms)", type: "pass" },
      { text: "✓ [200 OK] › POST /slots/reserve › Slot idempotency check pass (62ms)", type: "pass" },
      { text: "✓ [201 Created] › POST /orders/dispatch › EventBridge scaling trigger verified (94ms)", type: "pass" },
      { text: "All 28 automated API contract assertions passed in 780ms (Zero regressions)", type: "summary" },
    ],
  },
];

export default function TerminalWidget() {
  const [activeSuiteIndex, setActiveSuiteIndex] = useState(0);
  const currentSuite = testSuites[activeSuiteIndex];

  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Restart execution on suite switch or manual restart
  useEffect(() => {
    setActiveStep(0);
    setIsRunning(true);
  }, [activeSuiteIndex]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < currentSuite.logs.length - 1) return prev + 1;
        setIsRunning(false);
        return prev;
      });
    }, 450);
    return () => clearInterval(interval);
  }, [isRunning, currentSuite]);

  const handleRestart = () => {
    setActiveStep(0);
    setIsRunning(true);
  };

  return (
    <div className="w-full max-w-xl rounded-2xl glass-card border border-[hsl(var(--card-border))] overflow-hidden shadow-2xl glow-purple text-left text-xs font-mono">
      {/* Top Suite Selector Tabs */}
      <div className="flex items-center justify-between px-3 py-2 bg-[hsl(var(--card)/0.9)] border-b border-[hsl(var(--card-border))]">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {testSuites.map((suite, idx) => {
            const Icon = suite.icon;
            const isActive = idx === activeSuiteIndex;
            return (
              <button
                key={suite.id}
                onClick={() => setActiveSuiteIndex(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                  isActive
                    ? "bg-[hsl(var(--primary))] text-white shadow-md glow-purple font-semibold"
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
                }`}
              >
                <Icon size={12} />
                <span>{suite.name}</span>
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0 pl-2">
          <button
            onClick={handleRestart}
            title="Rerun Suite"
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.2)] hover:text-[hsl(var(--primary))] transition-all font-sans text-[11px]"
          >
            <RefreshCw size={11} className={isRunning ? "animate-spin" : ""} />
            <span>{isRunning ? "Running" : "Rerun"}</span>
          </button>
        </div>
      </div>

      {/* Terminal Sub-header with File & Runner Info */}
      <div className="flex items-center justify-between px-4 py-2 bg-[hsl(var(--background)/0.8)] border-b border-[hsl(var(--card-border))] text-[11px] text-[hsl(var(--muted-foreground))]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-1 text-[hsl(var(--foreground))] font-medium flex items-center gap-1">
            <Terminal size={12} className="text-[hsl(var(--primary))]" />
            {currentSuite.file}
          </span>
        </div>
        <span className="text-[hsl(var(--primary))] font-medium hidden sm:inline">
          {currentSuite.framework}
        </span>
      </div>

      {/* Code / Output Screen */}
      <div className="p-4 sm:p-5 space-y-2.5 bg-[hsl(var(--background)/0.95)] min-h-[220px]">
        {currentSuite.logs.slice(0, activeStep + 1).map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18 }}
            className="flex items-start gap-2 leading-relaxed"
          >
            {log.type === "cmd" && (
              <span className="text-[hsl(var(--accent))] flex items-center gap-1 font-semibold">
                <Play size={9} className="fill-[hsl(var(--accent))] shrink-0 mt-1" />
                <span className="text-[hsl(var(--foreground))] break-all">{log.text}</span>
              </span>
            )}
            {log.type === "info" && (
              <span className="text-[hsl(var(--muted-foreground))]">{log.text}</span>
            )}
            {log.type === "pass" && (
              <span className="text-emerald-400 font-medium flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{log.text}</span>
              </span>
            )}
            {log.type === "summary" && (
              <span className="mt-2 block px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold text-[11px] sm:text-xs">
                🎉 {log.text}
              </span>
            )}
          </motion.div>
        ))}

        {isRunning && (
          <span className="inline-block w-2 h-4 bg-[hsl(var(--primary))] animate-pulse ml-1" />
        )}
      </div>

      {/* Live Quality Telemetry Grid */}
      <div className="px-4 py-2.5 bg-[hsl(var(--muted)/0.6)] border-t border-[hsl(var(--card-border))] grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-sans">
        {currentSuite.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-[hsl(var(--muted-foreground))] uppercase font-bold text-[9px]">
              {stat.label}
            </span>
            <span className="font-semibold text-[hsl(var(--foreground))] font-mono">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
