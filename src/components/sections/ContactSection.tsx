"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Sparkles, AlertCircle, Copy, Check, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

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

const quickIntents = [
  {
    label: "💼 Discuss Open Role",
    text: "Hi Shazzad, we have an exciting SQA / SDET opening and would love to discuss your experience in Playwright, JMeter, and CI/CD automation.",
  },
  {
    label: "⚡ QA Consultation",
    text: "Hi Shazzad, we are looking for guidance on setting up an automated testing framework and reducing our release regression cycle.",
  },
  {
    label: "🔍 Automation Review",
    text: "Hi Shazzad, I would love to get your thoughts on our test automation architecture and CI/CD quality gates.",
  },
  {
    label: "🤝 General Networking",
    text: "Hi Shazzad, impressed by your portfolio and quality engineering work! Would love to connect.",
  },
];

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [emailCopied, setEmailCopied] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleIntentClick = (intent: { label: string; text: string }) => {
    setSelectedIntent(intent.label);
    setValue("message", intent.text, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: "Shazzad",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      reset();
      setSelectedIntent(null);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Direct Email",
      value: "shazzadm065@gmail.com",
      href: "mailto:shazzadm065@gmail.com",
      isEmail: true,
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+8801621864789",
      href: "tel:+8801621864789",
      isEmail: false,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/md-shazzad-mia",
      href: "https://linkedin.com/in/md-shazzad-mia",
      isEmail: false,
    },
    {
      icon: GithubIcon,
      label: "GitHub Repositories",
      value: "github.com/Shazzad01",
      href: "https://github.com/Shazzad01",
      isEmail: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mirpur-11.5, Dhaka, Bangladesh",
      href: null,
      isEmail: false,
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
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-amber-700 dark:text-[#fbbf24] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-amber-600 dark:text-amber-400" />
            Initiate Connection
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto text-left">
          {/* Contact Information Channels */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-4">Direct Channels</h3>
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.label}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 glass-card rounded-2xl border border-slate-200 dark:border-white/10 hover:border-[#f59e0b]/50 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 dark:text-[#fbbf24] shrink-0">
                          <Icon />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            {info.label}
                          </p>
                          <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#f59e0b] transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </div>

                      {info.isEmail && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigator.clipboard.writeText("shazzadm065@gmail.com");
                            setEmailCopied(true);
                            setTimeout(() => setEmailCopied(false), 2000);
                          }}
                          className="p-2 rounded-lg bg-black/5 dark:bg-white/10 border border-slate-200 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all"
                          title="Copy Email to Clipboard"
                        >
                          {emailCopied ? (
                            <Check size={14} className="text-emerald-500" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      )}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5 p-4 glass-card rounded-2xl border border-slate-200 dark:border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-700 dark:text-[#fbbf24] shrink-0">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10"
          >
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-4">Send a Message</h3>

            {status === "sent" ? (
              <div className="p-8 text-center flex flex-col items-center justify-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                <CheckCircle2 size={40} className="text-emerald-500" />
                <p className="font-bold text-base text-emerald-800 dark:text-emerald-300">Message Received!</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. I will respond to your email shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs font-semibold text-amber-600 dark:text-[#f59e0b] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>Failed to send. Please email me directly at <strong>shazzadm065@gmail.com</strong></span>
                  </div>
                )}

                {/* Quick Message Intent Pills */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Quick Topic Intent
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {quickIntents.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleIntentClick(item)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          selectedIntent === item.label
                            ? "bg-[#f59e0b] text-slate-950 font-bold shadow-sm shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                            : "bg-black/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#07070a]/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20 text-xs sm:text-sm transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#07070a]/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20 text-xs sm:text-sm transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    {...register("message")}
                    placeholder="Discuss automation testing, QA consultation, or open roles..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#07070a]/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20 text-xs sm:text-sm transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message.message}
                    </p>
                  )}
                </div>

                  <motion.button
                  whileHover={shouldReduceMotion || status === "sending" ? {} : { scale: 1.02, y: -1 }}
                  whileTap={shouldReduceMotion || status === "sending" ? {} : { scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-gold-glow font-bold text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {status === "sending" ? "Sending Message..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
