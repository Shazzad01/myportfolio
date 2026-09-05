"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Command, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Cockpit", href: "#hero" },
  { label: "Telemetry", href: "#about" },
  { label: "Arsenal", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Frameworks", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <nav
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between h-16 px-5 rounded-full transition-all duration-300",
          scrolled
            ? "glass shadow-xl shadow-black/5 dark:shadow-black/80 border border-[#f59e0b]/25"
            : "bg-white/90 dark:bg-[#0c0e14]/85 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-none"
        )}
      >
        {/* Brand Group */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center font-heading font-black text-xs text-[#07070a] shadow-[0_0_15px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform">
            MSM
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm text-slate-900 dark:text-white tracking-tight leading-none">
              Muhammad Shazzad Mia
            </span>
            <span className="font-mono text-[10px] text-[#f59e0b] font-bold tracking-wider mt-0.5 uppercase">
              SQA Engineer II
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-black/40 p-1.5 rounded-full border border-black/5 dark:border-white/5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for SDET Roles</span>
          </div>

          {/* Quick Resume CTA */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-gold-glow text-xs"
          >
            <Download size={13} />
            <span>CV</span>
          </a>

          {/* Command Palette */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-[#f59e0b]/40 transition-all"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command size={13} className="text-[#f59e0b]" />
            <span className="font-mono text-[10px]">⌘K</span>
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg md:hidden text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl glass border border-[#f59e0b]/20 shadow-2xl"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-gold-glow text-xs"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
