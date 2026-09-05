"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Play,
  CheckCircle2,
  Terminal,
  RefreshCw,
  ShieldCheck,
  Flame,
  Zap,
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
      { label: "Workers", value: "4 Chromium" },
      { label: "Assertions", value: "142 Verified" },
      { label: "Exec Time", value: "1.12s" },
      { label: "Pass Rate", value: "100%" },
    ],
    logs: [
      { text: "npx playwright test e2e/checkout.spec.ts --project=chromium", type: "cmd" },
      { text: "Running 3 tests across 4 parallel workers on headless Chromium", type: "info" },
      { text: "✓ [chromium] › auth.setup.ts:14 › Hydrate Session & bKash Escrow (190ms)", type: "pass" },
      { text: "✓ [chromium] › cart-sync.spec.ts:32 › Stock Lock in SAP S/4HANA (310ms)", type: "pass" },
      { text: "✓ [chromium] › checkout.spec.ts:58 › bKash Checkout Authorization (420ms)", type: "pass" },
      { text: "3 passed in 1.12s across 4 workers (0 flakiness, 100% satisfied)", type: "summary" },
    ],
  },
  {
    id: "jmeter",
    name: "JMeter Stress",
    framework: "Apache JMeter 5.6",
    icon: Flame,
    file: "shwapno.spike-5k.jmx",
    stats: [
      { label: "Concurrent", value: "5,000 VUs" },
      { label: "Throughput", value: "1,240 req/s" },
      { label: "p95 Latency", value: "184ms" },
      { label: "Error Rate", value: "0.00%" },
    ],
    logs: [
      { text: "jmeter -n -t spike-5k-users.jmx -l results.jtl -e -o ./report", type: "cmd" },
      { text: "Ramping 5,000 Concurrent Virtual Users over 10s window", type: "info" },
      { text: "✓ 200 OK › GET /api/v2/catalog/search?q=grocery (p95: 142ms)", type: "pass" },
      { text: "✓ 200 OK › POST /api/v2/cart/checkout (p95: 280ms)", type: "pass" },
      { text: "✓ 200 OK › POST /api/v2/payment/callback (p95: 310ms)", type: "pass" },
      { text: "150,000 sampled requests completed: 0.00% error rate (p95 < 500ms)", type: "summary" },
    ],
  },
  {
    id: "newman",
    name: "Newman API",
    framework: "Postman CLI v1.1",
    icon: Zap,
    file: "paragon.delivery-api.json",
    stats: [
      { label: "Endpoints", value: "28 Verified" },
      { label: "Schema Spec", value: "OpenAPI 3.0" },
      { label: "Avg Latency", value: "68ms" },
      { label: "Regressions", value: "0 Detected" },
    ],
    logs: [
      { text: "newman run delivery-api.json -e staging.json --bail", type: "cmd" },
      { text: "Executing contract assertions across logistics warehouse APIs", type: "info" },
      { text: "✓ [200 OK] › GET /warehouses/nearby › Schema contract passed (48ms)", type: "pass" },
      { text: "✓ [200 OK] › POST /slots/reserve › Slot idempotency check pass (62ms)", type: "pass" },
      { text: "✓ [201 Created] › POST /orders/dispatch › EventBridge scaling ok (94ms)", type: "pass" },
      { text: "All 28 API contract assertions passed in 780ms (Zero regressions)", type: "summary" },
    ],
  },
];

export default function TerminalWidget() {
  const [activeSuiteIndex, setActiveSuiteIndex] = useState(0);
  const currentSuite = testSuites[activeSuiteIndex];

  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

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
    <div className="w-full max-w-xl rounded-2xl bg-[#0a0b10] border border-[#f59e0b]/25 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(245,158,11,0.15)] text-left text-xs font-mono">
      {/* Top Suite Selector Tabs */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#10121a] border-b border-white/10">
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
                    ? "bg-[#f59e0b] text-[#07070a] font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
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
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 text-slate-300 hover:text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all font-sans text-[11px]"
          >
            <RefreshCw size={11} className={isRunning ? "animate-spin text-[#f59e0b]" : ""} />
            <span>{isRunning ? "Running" : "Rerun"}</span>
          </button>
        </div>
      </div>

      {/* Terminal Sub-header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#07080d] border-b border-white/5 text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-1 text-white font-medium flex items-center gap-1">
            <Terminal size={12} className="text-[#f59e0b]" />
            {currentSuite.file}
          </span>
        </div>
        <span className="text-[#f59e0b] font-medium hidden sm:inline">
          {currentSuite.framework}
        </span>
      </div>

      {/* Code / Output Screen */}
      <div className="p-4 sm:p-5 space-y-2.5 bg-[#07070b] min-h-[220px]">
        {currentSuite.logs.slice(0, activeStep + 1).map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18 }}
            className="flex items-start gap-2 leading-relaxed"
          >
            {log.type === "cmd" && (
              <span className="text-[#f59e0b] flex items-center gap-1 font-semibold">
                <Play size={9} className="fill-[#f59e0b] shrink-0 mt-1" />
                <span className="text-white break-all">{log.text}</span>
              </span>
            )}
            {log.type === "info" && (
              <span className="text-slate-400">{log.text}</span>
            )}
            {log.type === "pass" && (
              <span className="text-emerald-400 font-medium flex items-start gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{log.text}</span>
              </span>
            )}
            {log.type === "summary" && (
              <span className="mt-2 block px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold text-[11px] sm:text-xs">
                ✔ {log.text}
              </span>
            )}
          </motion.div>
        ))}

        {isRunning && (
          <span className="inline-block w-2 h-4 bg-[#f59e0b] animate-pulse ml-1" />
        )}
      </div>

      {/* Live Quality Telemetry Grid */}
      <div className="px-4 py-2.5 bg-[#0e1017] border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-sans">
        {currentSuite.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-slate-500 uppercase font-bold text-[9px]">
              {stat.label}
            </span>
            <span className="font-semibold text-white font-mono">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
