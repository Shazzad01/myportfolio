"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap, Target } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Experience",
    value: "2+ Years",
    sub: "Brain Station 23",
  },
  {
    icon: Target,
    label: "Specialty",
    value: "Automation",
    sub: "Playwright & JMeter",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "BSc CSE",
    sub: "DIU · 3.59 GPA",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka",
    sub: "Bangladesh",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container-max" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[hsl(var(--primary))] tracking-widest uppercase mb-3">
            Get to know me
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              I&apos;m a <span className="text-[hsl(var(--foreground))] font-semibold">SQA Engineer II at Brain Station 23</span>,
              where I&apos;ve spent 2+ years growing from trainee to leading quality assurance
              for two of Bangladesh&apos;s most significant e-commerce platforms.
            </p>
            <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              My philosophy on QA: testing is not a phase — it&apos;s a{" "}
              <span className="text-[hsl(var(--primary))] font-semibold">continuous system</span>.
              I specialize in <strong className="text-[hsl(var(--foreground))]">Playwright (TypeScript)</strong> automation
              and <strong className="text-[hsl(var(--foreground))]">JMeter</strong> performance testing,
              but what I care most about is building processes that prevent production issues before they reach users.
            </p>
            <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              I work directly with clients, communicate across teams, and take full ownership
              of product quality — from requirement analysis to release. I also pioneered
              an <span className="text-[hsl(var(--accent))] font-semibold">AI-assisted bug resolution workflow</span> using
              GitHub Copilot Agent to shorten our bug-to-merge cycle.
            </p>
            <p className="text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              When I&apos;m not testing software, I&apos;m sharpening my automation skills and
              exploring ways to make the QA process smarter — not just more thorough.{" "}
              <span className="text-[hsl(var(--foreground))] font-semibold">Let&apos;s build something reliable together.</span>
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-[hsl(var(--primary))] text-white font-semibold text-sm hover:bg-[hsl(var(--primary-glow))] transition-all duration-200 glow"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-5 py-2.5 rounded-xl glass border border-[hsl(var(--card-border))] font-semibold text-sm hover:border-[hsl(var(--primary)/0.5)] transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary)/0.1)] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--primary)/0.2)] transition-colors">
                  <item.icon size={20} className="text-[hsl(var(--primary))]" />
                </div>
                <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-heading font-bold text-lg text-[hsl(var(--foreground))]">
                  {item.value}
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
