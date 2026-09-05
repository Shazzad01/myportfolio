"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Search,
  Command,
  Download,
  Moon,
  Sun,
  Copy,
  Check,
  ExternalLink,
  Compass,
  Briefcase,
  FolderGit2,
  Cpu,
  Mail,
  Award,
  Layers,
  ShieldCheck,
  X,
} from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Quick Actions";
  icon: React.ComponentType<{ className?: string; size?: number }>;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const navigateTo = (hash: string) => {
    setIsOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("shazzadm065@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  };

  const downloadResume = () => {
    setIsOpen(false);
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Muhammad_Shazzad_Mia_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-hero",
      label: "Home / Hero",
      category: "Navigation",
      icon: Compass,
      action: () => navigateTo("#hero"),
    },
    {
      id: "nav-about",
      label: "About Me & Philosophy",
      category: "Navigation",
      icon: ShieldCheck,
      action: () => navigateTo("#about"),
    },
    {
      id: "nav-methodology",
      label: "Shift-Left QA Methodology",
      category: "Navigation",
      icon: Layers,
      action: () => navigateTo("#methodology"),
    },
    {
      id: "nav-skills",
      label: "Skills & Frameworks",
      category: "Navigation",
      icon: Cpu,
      action: () => navigateTo("#skills"),
    },
    {
      id: "nav-experience",
      label: "Work Experience & Brain Station 23",
      category: "Navigation",
      icon: Briefcase,
      action: () => navigateTo("#experience"),
    },
    {
      id: "nav-projects",
      label: "Featured Projects (Shwopno, Paragon)",
      category: "Navigation",
      icon: FolderGit2,
      action: () => navigateTo("#projects"),
    },
    {
      id: "nav-certifications",
      label: "Certifications & Education",
      category: "Navigation",
      icon: Award,
      action: () => navigateTo("#certifications"),
    },
    {
      id: "nav-contact",
      label: "Get in Touch / Contact Form",
      category: "Navigation",
      icon: Mail,
      action: () => navigateTo("#contact"),
    },

    // Quick Actions
    {
      id: "act-resume",
      label: "Download Official Resume (PDF)",
      category: "Quick Actions",
      icon: Download,
      action: downloadResume,
      shortcut: "PDF",
    },
    {
      id: "act-theme",
      label: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      category: "Quick Actions",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsOpen(false);
      },
      shortcut: "Theme",
    },
    {
      id: "act-email",
      label: copied ? "Email Copied to Clipboard!" : "Copy Email (shazzadm065@gmail.com)",
      category: "Quick Actions",
      icon: copied ? Check : Copy,
      action: copyEmail,
      shortcut: "Copy",
    },
    {
      id: "act-github",
      label: "Open GitHub Profile (@Shazzad01)",
      category: "Quick Actions",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open("https://github.com/Shazzad01", "_blank");
      },
    },
    {
      id: "act-linkedin",
      label: "Open LinkedIn Profile",
      category: "Quick Actions",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open("https://linkedin.com/in/md-shazzad-mia", "_blank");
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Global key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  // Auto-focus input
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setSearch("");
    }
  }, [isOpen]);

  // Keyboard navigation inside palette
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-xl rounded-2xl glass-card border border-[hsl(var(--card-border))] shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[hsl(var(--card-border))] bg-[hsl(var(--background)/0.5)]">
              <Search size={18} className="text-[hsl(var(--muted-foreground))] shrink-0" />
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Type a command or jump to section..."
                className="w-full bg-transparent text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] transition-colors"
                aria-label="Close Command Palette"
              >
                <X size={16} />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs text-[hsl(var(--muted-foreground))]">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-all ${
                        isSelected
                          ? "bg-[hsl(var(--primary))] text-white shadow-md glow-purple"
                          : "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                          }`}
                        >
                          <Icon size={14} />
                        </div>
                        <span className="font-medium text-[13px]">{cmd.label}</span>
                      </div>

                      {cmd.shortcut && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                          }`}
                        >
                          {cmd.shortcut}
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Shortcut Legend */}
            <div className="px-4 py-2.5 bg-[hsl(var(--muted)/0.5)] border-t border-[hsl(var(--card-border))] flex items-center justify-between text-[11px] text-[hsl(var(--muted-foreground))]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[hsl(var(--card))] border border-[hsl(var(--card-border))] text-[10px]">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[hsl(var(--card))] border border-[hsl(var(--card-border))] text-[10px]">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-[hsl(var(--card))] border border-[hsl(var(--card-border))] text-[10px]">esc</kbd>
                  Close
                </span>
              </div>
              <span className="font-mono text-[10px] text-[hsl(var(--primary))]">Muhammad Shazzad Mia</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
