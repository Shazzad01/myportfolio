"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Command, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Methodology", href: "#methodology" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Frameworks", href: "#projects" },
  { label: "Honors", href: "#certifications" },
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
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <nav
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between h-14 sm:h-16 px-4 sm:px-5 rounded-full transition-all duration-300",
          scrolled
            ? "bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-black/5 dark:shadow-black/50"
            : "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm"
        )}
      >
        {/* Brand Group */}
        <Link href="#hero" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-geist font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
            MSM
          </div>
          <div className="flex flex-col">
            <span className="font-geist font-semibold text-xs sm:text-sm text-zinc-900 dark:text-white tracking-tight leading-none">
              Muhammad Shazzad Mia
            </span>
            <span className="font-mono-geist text-[10px] text-zinc-500 dark:text-zinc-400 font-medium tracking-wide mt-0.5">
              SQA Engineer II · BS23
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden xl:flex items-center gap-0.5 bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-full border border-zinc-200/60 dark:border-zinc-800/60">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-1 rounded-full text-xs font-geist text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Compact Desktop Nav (Medium/Large screens) */}
        <ul className="hidden md:flex xl:hidden items-center gap-0.5 bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-full border border-zinc-200/60 dark:border-zinc-800/60">
          {navLinks.filter((l) => ["#hero", "#skills", "#experience", "#projects", "#contact"].includes(l.href)).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-2.5 py-1 rounded-full text-xs font-geist text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono-geist font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for SDET Roles</span>
          </div>

          {/* Quick Resume CTA */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-mono-primary text-xs font-medium cursor-pointer"
          >
            <Download size={12} />
            <span>CV</span>
          </a>

          {/* Command Palette */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="hidden sm:inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all cursor-pointer"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command size={12} className="text-zinc-500 dark:text-zinc-400" />
            <span className="font-mono-geist text-[10px]">⌘K</span>
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg md:hidden text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium font-geist text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <a
                href="/resume.pdf"
                download
                className="w-full text-center inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg btn-mono-primary text-xs font-semibold"
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
