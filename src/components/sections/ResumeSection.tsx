"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding bg-[hsl(var(--muted)/0.4)]">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass rounded-3xl p-12 border border-[hsl(var(--card-border))]">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.2)] flex items-center justify-center mx-auto mb-8">
              <FileText size={36} className="text-[hsl(var(--primary))]" />
            </div>

            <p className="text-sm font-semibold text-[hsl(var(--primary))] tracking-widest uppercase mb-4">
              My Resume
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Want the full picture?
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-10 max-w-xl mx-auto">
              Download my resume for a complete overview of my experience, skills, projects,
              and certifications as an SQA Automation Engineer at Brain Station 23.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/resume.pdf"
                download
                id="resume-download-btn"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[hsl(var(--primary))] text-white font-bold text-lg hover:bg-[hsl(var(--primary-glow))] transition-all duration-200 glow hover:scale-105"
              >
                <Download size={22} />
                Download Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass border border-[hsl(var(--card-border))] font-bold text-lg hover:border-[hsl(var(--primary)/0.5)] transition-all duration-200 hover:scale-105"
              >
                <FileText size={22} />
                View Online
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
