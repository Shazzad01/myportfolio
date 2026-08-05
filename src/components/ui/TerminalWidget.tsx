"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, CheckCircle2, Terminal, RefreshCw } from "lucide-react";

const testLogs = [
  { text: "npx playwright test e2e/checkout.spec.ts", type: "cmd" },
  { text: "Running 3 tests using 2 workers", type: "info" },
  { text: "✓ [chromium] › e2e/checkout.spec.ts:12 › Login & Auth (412ms)", type: "pass" },
  { text: "✓ [chromium] › e2e/checkout.spec.ts:28 › Add to Cart (289ms)", type: "pass" },
  { text: "✓ [chromium] › e2e/checkout.spec.ts:45 › Payment Gateway UAT (610ms)", type: "pass" },
  { text: "3 passed (1.3s)", type: "summary" },
];

export default function TerminalWidget() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < testLogs.length - 1) return prev + 1;
        setIsRunning(false);
        return prev;
      });
    }, 600);
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleRestart = () => {
    setActiveStep(0);
    setIsRunning(true);
  };

  return (
    <div className="w-full max-w-lg rounded-2xl glass border border-[hsl(var(--card-border))] overflow-hidden shadow-2xl glow-purple text-left text-xs font-mono">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[hsl(var(--card)/0.8)] border-b border-[hsl(var(--card-border))]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 text-[hsl(var(--muted-foreground))] flex items-center gap-1.5 font-sans font-medium text-xs">
            <Terminal size={13} className="text-[hsl(var(--primary))]" />
            playwright-e2e-runner.ts
          </span>
        </div>
        <button
          onClick={handleRestart}
          title="Rerun Tests"
          className="p-1 rounded hover:bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] transition-colors"
        >
          <RefreshCw size={12} className={isRunning ? "animate-spin" : ""} />
        </button>
      </div>

      {/* Code / Output Screen */}
      <div className="p-5 space-y-3 bg-[hsl(var(--background)/0.9)] min-h-[220px]">
        {testLogs.slice(0, activeStep + 1).map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-2 leading-relaxed"
          >
            {log.type === "cmd" && (
              <span className="text-[hsl(var(--accent))] flex items-center gap-1">
                <Play size={10} className="fill-[hsl(var(--accent))]" />
                <span className="text-[hsl(var(--foreground))]">{log.text}</span>
              </span>
            )}
            {log.type === "info" && (
              <span className="text-[hsl(var(--muted-foreground))]">{log.text}</span>
            )}
            {log.type === "pass" && (
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                {log.text}
              </span>
            )}
            {log.type === "summary" && (
              <span className="mt-2 block px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                🎉 {log.text}
              </span>
            )}
          </motion.div>
        ))}

        {isRunning && (
          <span className="inline-block w-2 h-4 bg-[hsl(var(--primary))] animate-pulse ml-1" />
        )}
      </div>

      {/* Footer info */}
      <div className="px-4 py-2 bg-[hsl(var(--muted)/0.5)] border-t border-[hsl(var(--card-border))] text-[11px] text-[hsl(var(--muted-foreground))] flex justify-between items-center">
        <span>Framework: Playwright v1.42</span>
        <span className="text-emerald-400 font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CI/CD Pipeline Passing
        </span>
      </div>
    </div>
  );
}
