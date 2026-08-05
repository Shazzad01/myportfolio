"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Software Quality Assurance",
    issuer: "IT Training BD",
    batch: "Batch 16",
    year: "2023",
    type: "certification",
    icon: Award,
    color: "var(--primary)",
  },
];

const education = [
  {
    degree: "Bachelor of Science (BSc) in CSE",
    institution: "Daffodil International University",
    period: "Graduated Mar 2023",
    gpa: "3.59 / 4.00",
    icon: BookOpen,
    color: "var(--accent)",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[hsl(var(--primary))] tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            Certifications & Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Certifications */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <Award size={18} className="text-[hsl(var(--primary))]" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="glass rounded-2xl p-6 border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `hsl(${cert.color}/0.12)` }}
                    >
                      <cert.icon
                        size={22}
                        style={{ color: `hsl(${cert.color})` }}
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[hsl(var(--foreground))]">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-[hsl(var(--primary))] font-semibold mt-0.5">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[hsl(var(--muted-foreground))]">
                          {cert.batch}
                        </span>
                        <span className="text-[hsl(var(--muted-foreground))]">·</span>
                        <span className="text-xs text-[hsl(var(--muted-foreground))]">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <BookOpen size={18} className="text-[hsl(var(--accent))]" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass rounded-2xl p-6 border border-[hsl(var(--card-border))] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `hsl(${edu.color}/0.12)` }}
                    >
                      <edu.icon
                        size={22}
                        style={{ color: `hsl(${edu.color})` }}
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[hsl(var(--foreground))]">
                        {edu.degree}
                      </h4>
                      <p
                        className="text-sm font-semibold mt-0.5"
                        style={{ color: `hsl(${edu.color})` }}
                      >
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[hsl(var(--muted-foreground))]">
                          {edu.period}
                        </span>
                        <span className="text-[hsl(var(--muted-foreground))]">·</span>
                        <span className="text-xs font-semibold text-[hsl(var(--success))]">
                          GPA {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
