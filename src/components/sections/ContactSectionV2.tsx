"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactSectionV2() {
  const shouldReduceMotion = useReducedMotion();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const contactRows = [
    {
      key: "email",
      label: "Direct Email",
      value: "shazzadm065@gmail.com",
      description: "Primary channel for inquiries, SDET opportunities & automation architecture consulting.",
      icon: Mail,
      actionText: "Send Email",
      actionHref: "mailto:shazzadm065@gmail.com",
      isCopyable: true,
      copyValue: "shazzadm065@gmail.com",
    },
    {
      key: "phone",
      label: "Phone / WhatsApp",
      value: "+8801621864789",
      description: "Direct mobile & WhatsApp line for urgent discussions and quick alignments.",
      icon: Phone,
      actionText: "Chat on WhatsApp",
      actionHref: "https://wa.me/8801621864789",
      isCopyable: true,
      copyValue: "+8801621864789",
    },
    {
      key: "linkedin",
      label: "LinkedIn Profile",
      value: "linkedin.com/in/md-shazzad-mia",
      description: "Connect professionally, verify endorsements, and review career achievements.",
      icon: LinkedinIcon,
      actionText: "Open Profile",
      actionHref: "https://linkedin.com/in/md-shazzad-mia",
      isCopyable: false,
    },
    {
      key: "github",
      label: "GitHub Repositories",
      value: "github.com/Shazzad01",
      description: "Explore open-source Playwright POM test frameworks, utilities, and CI/CD workflows.",
      icon: GithubIcon,
      actionText: "View Code",
      actionHref: "https://github.com/Shazzad01",
      isCopyable: false,
    },
    {
      key: "location",
      label: "Base & Availability",
      value: "Mirpur-11.5, Dhaka, Bangladesh (UTC+6)",
      description: "Open to Global Remote, Hybrid & Onsite Senior SQA / SDET Roles.",
      icon: MapPin,
      statusBadge: "Available for Hire",
      isCopyable: false,
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-max">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-12 sm:mb-16 border-b border-zinc-200/60 dark:border-zinc-800/60">
          <div>
            <span className="font-mono-geist text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-2">
              // 09 · Direct Communication Hub
            </span>
            <h2 className="font-geist text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Initiate Contact
            </h2>
          </div>
          <span className="font-mono-geist text-xs text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-0">
            One-Click Verified Channels (No Forms)
          </span>
        </div>

        {/* Unboxed Communication Rows (Zero Boxes) */}
        <div className="space-y-6 sm:space-y-8">
          {contactRows.map((channel, idx) => {
            const IconComp = channel.icon;
            const isCopied = copiedKey === channel.key;

            return (
              <motion.div
                key={channel.key}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="pb-6 sm:pb-8 border-b border-zinc-200/60 dark:border-zinc-800/60 flex flex-col md:flex-row md:items-baseline justify-between gap-4"
              >
                {/* Left: Icon, Label & Description */}
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 font-mono-geist text-xs">
                    <span className="text-zinc-400">
                      <IconComp className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {channel.label}
                    </span>
                    {channel.statusBadge && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {channel.statusBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-geist text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    {channel.value}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                {/* Right: Actions (Copy & Direct Link) */}
                <div className="flex items-center gap-2 font-mono-geist text-xs self-start md:self-center shrink-0 pt-2 md:pt-0">
                  {channel.isCopyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(channel.copyValue!, channel.key)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                      title={`Copy ${channel.label}`}
                    >
                      {isCopied ? (
                        <>
                          <Check size={12} className="text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} className="text-zinc-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}

                  {channel.actionHref && (
                    <a
                      href={channel.actionHref}
                      target={channel.actionHref.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                      <span>{channel.actionText}</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
