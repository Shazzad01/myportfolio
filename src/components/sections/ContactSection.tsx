"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Sparkles, Copy, Check, Phone, ArrowUpRight } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone", e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } else {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const contactChannels = [
    {
      icon: Mail,
      label: "Direct Email",
      value: "shazzadm065@gmail.com",
      description: "Primary channel for inquiries, job opportunities & test consulting",
      href: "mailto:shazzadm065@gmail.com",
      actionText: "Send Email",
      isCopyable: true,
      copyType: "email" as const,
      isCopied: emailCopied,
      highlight: true,
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+8801621864789",
      description: "Direct mobile & WhatsApp line for urgent discussions",
      href: "tel:+8801621864789",
      actionText: "Call / WhatsApp",
      isCopyable: true,
      copyType: "phone" as const,
      isCopied: phoneCopied,
      highlight: false,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/md-shazzad-mia",
      description: "Connect professionally and review endorsements & career milestones",
      href: "https://linkedin.com/in/md-shazzad-mia",
      actionText: "Open LinkedIn",
      isCopyable: false,
      highlight: false,
    },
    {
      icon: GithubIcon,
      label: "GitHub Repositories",
      value: "github.com/Shazzad01",
      description: "Explore open-source test frameworks, POM scripts & automation tools",
      href: "https://github.com/Shazzad01",
      actionText: "View Repositories",
      isCopyable: false,
      highlight: false,
    },
    {
      icon: MapPin,
      label: "Current Base",
      value: "Mirpur-11.5, Dhaka, Bangladesh",
      description: "GMT+6 Timezone · Open to Remote, Hybrid & Onsite Roles Globally",
      href: null,
      actionText: "Available for SDET Roles",
      isCopyable: false,
      highlight: false,
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-amber-700 dark:text-[#fbbf24] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-amber-600 dark:text-amber-400" />
            Initiate Connection
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Interested in discussing test automation frameworks, SDET opportunities, or high-concurrency JMeter performance benchmarks? Reach out directly.
          </p>
        </motion.div>

        {/* Centered Direct Communication Cards Grid */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 text-left">
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon;
            const isFullWidth = channel.highlight;

            return (
              <motion.div
                key={channel.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className={`${
                  isFullWidth ? "sm:col-span-2" : "col-span-1"
                } glass-card p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/50 transition-all flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 dark:text-[#fbbf24] shrink-0 group-hover:scale-105 transition-transform">
                        <Icon />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {channel.label}
                        </span>
                        <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#fbbf24] transition-colors">
                          {channel.value}
                        </h3>
                      </div>
                    </div>

                    {/* Copy Button if copyable */}
                    {channel.isCopyable && (
                      <button
                        type="button"
                        onClick={(e) => copyToClipboard(channel.value, channel.copyType!, e)}
                        className="p-2.5 rounded-xl bg-black/5 dark:bg-white/10 border border-slate-200 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shrink-0"
                        title={`Copy ${channel.label}`}
                      >
                        {channel.isCopied ? (
                          <Check size={15} className="text-emerald-500" />
                        ) : (
                          <Copy size={15} />
                        )}
                      </button>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-white/10 text-xs font-semibold text-amber-700 dark:text-[#fbbf24] hover:text-amber-800 dark:hover:text-[#f59e0b] group/link"
                  >
                    <span>{channel.actionText}</span>
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {channel.actionText}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
