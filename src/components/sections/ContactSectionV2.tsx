"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

// Official GitHub Vector Icon
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// Official LinkedIn Vector Icon
function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactSectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string, key: string, label: string) => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setToastMessage(`Copied ${label} to clipboard: ${text}`);

      setTimeout(() => {
        setCopiedKey(null);
      }, 2000);

      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }
  };

  const contactChannels = [
    {
      key: "email",
      tag: "[DIRECT_EMAIL · PRIMARY]",
      label: "Direct Email",
      value: "shazzadm065@gmail.com",
      description:
        "Primary channel for architectural SQA discussions, SDET recruitment, framework audits, and contract consulting.",
      icon: Mail,
      isCopyable: true,
      copyValue: "shazzadm065@gmail.com",
      actionText: "Send Direct Email",
      actionHref: "mailto:shazzadm065@gmail.com",
      previewChip: "shazzadm065@gmail.com",
    },
    {
      key: "phone",
      tag: "[WHATSAPP_PHONE · DIRECT_LINE]",
      label: "Phone & WhatsApp",
      value: "+8801621864789",
      description:
        "Direct voice & encrypted WhatsApp channel for fast alignment, urgent interview scheduling, and real-time communication.",
      icon: Phone,
      isCopyable: true,
      copyValue: "+8801621864789",
      actionText: "Chat on WhatsApp",
      actionHref: "https://wa.me/8801621864789",
      previewChip: "+880 1621-864789",
    },
    {
      key: "linkedin",
      tag: "[PROFESSIONAL_NETWORK]",
      label: "LinkedIn Profile",
      value: "linkedin.com/in/md-shazzad-mia",
      description:
        "Verify endorsements, review professional network connections, and inspect enterprise recommendations at Brain Station 23.",
      icon: LinkedinIcon,
      isCopyable: true,
      copyValue: "https://linkedin.com/in/md-shazzad-mia",
      actionText: "Open LinkedIn",
      actionHref: "https://linkedin.com/in/md-shazzad-mia",
      previewChip: "in/md-shazzad-mia",
    },
    {
      key: "github",
      tag: "[CODE_REPOSITORIES]",
      label: "GitHub Repositories",
      value: "github.com/Shazzad01",
      description:
        "Inspect open-source Playwright Page Object Model suites, automated JMeter test plans, and CI/CD quality gate configurations.",
      icon: GithubIcon,
      isCopyable: true,
      copyValue: "https://github.com/Shazzad01",
      actionText: "Explore GitHub",
      actionHref: "https://github.com/Shazzad01",
      previewChip: "github.com/Shazzad01",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Specular Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[340px] bg-gradient-to-b from-black/[0.02] dark:from-white/[0.02] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        
        {/* Monolithic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-geist text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                [DIRECT_COMMUNICATION_HUB]
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] motion-reduce:animate-none animate-pulse" />
            </div>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Initiate Direct Communication
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            Zero Form Friction · Immediate Human Access
          </span>
        </div>

        {/* Subtitle */}
        <p className="max-w-3xl font-geist text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-12 sm:mb-16">
          Skip unmonitored message forms. Connect directly via encrypted channels, calendar booking, or instant copyable contacts.
        </p>

        {/* ========================================================================= */}
        {/* COMMUNICATION CHANNELS GRID (2x2 Monolithic Glass Slabs) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {contactChannels.map((channel, idx) => {
            const IconComp = channel.icon;
            const isCopied = copiedKey === channel.key;

            return (
              <motion.div
                key={channel.key}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Meta Tag & Icon */}
                  <div className="flex items-center justify-between font-mono-geist text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                      {channel.tag}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/5 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Channel Name & Value */}
                  <div>
                    <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 block font-medium">
                      {channel.label}
                    </span>
                    <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1 break-all">
                      {channel.value}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-geist text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {channel.description}
                  </p>
                </div>

                {/* Bottom Action Buttons: 1-Click Copy + Direct External Action */}
                <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center gap-3 font-mono-geist text-xs">
                  {channel.isCopyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(channel.copyValue, channel.key, channel.label)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] text-zinc-800 dark:text-zinc-200 border border-black/10 dark:border-white/10 hover:bg-black/[0.08] dark:hover:bg-white/[0.1] transition-all active:scale-95"
                      title={`Copy ${channel.label} to clipboard`}
                    >
                      {isCopied ? (
                        <>
                          <Check size={14} className="text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            Copied!
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} className="text-zinc-500 dark:text-zinc-400" />
                          <span>Copy Value</span>
                        </>
                      )}
                    </button>
                  )}

                  {channel.actionHref && (
                    <a
                      href={channel.actionHref}
                      target={channel.actionHref.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm ml-auto"
                    >
                      <span>{channel.actionText}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* LOCATION & ACTIVE AVAILABILITY BEACON (Full-Width Monolithic Glass Slab) */}
        {/* ========================================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border-t border-black/20 dark:border-t-white/30 border-x border-b border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl p-6 sm:p-8 hover:bg-white/[0.04] transition-all"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left: Location & Working Coordinates */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5 font-mono-geist text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px]">
                  <MapPin size={12} className="shrink-0" />
                  [LOCATION_BEACON]
                </span>
                <span className="text-zinc-400 dark:text-zinc-600">•</span>
                <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                  <Clock size={12} />
                  Timezone: UTC+6 (Bangladesh Standard Time)
                </span>
              </div>

              <h3 className="font-geist text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                Mirpur-11.5, Dhaka, Bangladesh (UTC+6)
              </h3>

              <p className="font-geist text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                Operating out of Dhaka with full support for global asynchronous workflows across North America (EST/PST), Europe (GMT/CET), and Asia-Pacific timezones.
              </p>
            </div>

            {/* Right: Availability Status Badge */}
            <div className="lg:border-l border-black/5 dark:border-white/5 lg:pl-8 flex flex-col justify-center space-y-2 shrink-0">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono-geist text-xs font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse shrink-0" />
                <span>Active Lead SQA / SDET · Ready for Enterprise Impact</span>
              </div>
              <span className="font-mono-geist text-[11px] text-zinc-500 dark:text-zinc-400 pl-1">
                Open for Remote, Hybrid &amp; Onsite Opportunities
              </span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* FLOATING MONOLITHIC TOAST NOTIFICATION */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-zinc-900/95 dark:bg-white/95 text-white dark:text-zinc-900 shadow-2xl backdrop-blur-2xl border border-white/20 dark:border-black/20 font-mono-geist text-xs max-w-md"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="font-medium truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
