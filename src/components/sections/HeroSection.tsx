"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[hsl(var(--primary)/0.15)] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[hsl(var(--accent)/0.12)] rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--primary)/0.05)] rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[hsl(var(--primary)/0.3)] text-sm font-medium text-[hsl(var(--primary))] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[hsl(var(--success))] animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Muhammad{" "}
          <span className="text-gradient">Shazzad</span>{" "}
          Mia
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-2xl sm:text-3xl font-semibold text-[hsl(var(--muted-foreground))] mb-6"
        >
          SQA Automation Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I don&apos;t just find bugs — I build systems that{" "}
          <span className="text-[hsl(var(--primary))] font-semibold">prevent them</span>.
          Playwright · JMeter · CI/CD · 2+ years at Brain Station 23.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[hsl(var(--primary))] text-white font-semibold hover:bg-[hsl(var(--primary-glow))] transition-all duration-200 glow hover:scale-105"
          >
            View Projects <ExternalLink size={16} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-[hsl(var(--card-border))] font-semibold hover:border-[hsl(var(--primary)/0.5)] transition-all duration-200 hover:scale-105"
          >
            Download Resume <Download size={16} />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://github.com/Shazzad01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-xl glass border border-[hsl(var(--card-border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-200 hover:scale-110"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/md-shazzad-mia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-xl glass border border-[hsl(var(--card-border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-200 hover:scale-110"
          >
            <LinkedinIcon />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground))]"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
