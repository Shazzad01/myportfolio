"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Command, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Methodology", href: "#methodology" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Honors", href: "#honors" },
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace("#", "");
    const element =
      document.getElementById(targetId) ||
      (targetId === "frameworks" ? document.getElementById("projects") : null) ||
      (targetId === "honors" ? document.getElementById("certifications") : null) ||
      (targetId === "pipeline" ? document.getElementById("hero") : null);

    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <nav
        className={cn(
          "pointer-events-auto max-w-6xl mx-auto flex items-center justify-between h-14 px-3 sm:px-5 rounded-full transition-all duration-300 backdrop-blur-2xl shadow-xl dark:shadow-2xl",
          "bg-white/80 dark:bg-white/[0.03] border-t border-black/20 dark:border-t-white/30 border-x border-black/10 dark:border-x-white/10 border-b border-black/10 dark:border-b-white/10",
          scrolled && "shadow-black/10 dark:shadow-black/60 bg-white/95 dark:bg-[#030408]/90"
        )}
      >
        {/* Brand Monogram Group */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 sm:gap-3 group"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-mono-geist font-bold text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform">
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

        {/* Desktop Nav Links (Full) */}
        <ul className="hidden xl:flex items-center gap-0.5 bg-black/[0.03] dark:bg-white/[0.03] p-1 rounded-full border border-black/10 dark:border-white/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1 rounded-full text-xs font-geist text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Compact Desktop Nav (Medium/Large screens) */}
        <ul className="hidden md:flex xl:hidden items-center gap-0.5 bg-black/[0.03] dark:bg-white/[0.03] p-1 rounded-full border border-black/10 dark:border-white/10">
          {navLinks
            .filter((l) => ["#hero", "#pipeline", "#skills", "#experience", "#frameworks", "#contact"].includes(l.href))
            .map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-2.5 py-1 rounded-full text-xs font-geist text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>

        {/* Actions Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Status Beacon */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono-geist font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for SDET Roles</span>
          </div>

          {/* Direct Resume CTA */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-mono-primary text-xs font-medium cursor-pointer"
            title="Download Curriculum Vitae (PDF)"
          >
            <Download size={12} />
            <span>CV</span>
          </a>

          {/* Command Palette Trigger */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            className="hidden sm:inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-black/25 dark:hover:border-white/25 transition-all cursor-pointer"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command size={12} className="text-zinc-500 dark:text-zinc-400" />
            <span className="font-mono-geist text-[10px]">⌘K</span>
          </button>

          {/* Spring-physics Theme Toggle */}
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile navigation menu"
            className="p-2 rounded-lg md:hidden text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white cursor-pointer"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Responsive Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto md:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-white/95 dark:bg-[#030408]/95 backdrop-blur-2xl border-t border-black/20 dark:border-t-white/30 border-x border-black/10 dark:border-x-white/10 border-b border-black/10 dark:border-b-white/10 shadow-2xl"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      setMobileOpen(false);
                      handleNavClick(e, link.href);
                    }}
                    className="block px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium font-geist text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-2 py-1 text-[11px] font-mono-geist text-emerald-600 dark:text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for SDET Roles
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">Dhaka / Remote</span>
              </div>
              <a
                href="/resume.pdf"
                download
                className="w-full text-center inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl btn-mono-primary text-xs font-semibold"
              >
                <Download size={14} />
                <span>Download Resume (CV)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
