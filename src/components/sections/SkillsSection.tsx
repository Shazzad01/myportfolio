"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Test Automation",
    color: "var(--primary)",
    skills: ["Playwright (TypeScript)", "Selenium WebDriver", "Appium", "Postman / Newman"],
  },
  {
    title: "Performance Testing",
    color: "var(--accent)",
    skills: ["Apache JMeter", "BlazeMeter", "K6"],
  },
  {
    title: "Manual Testing",
    color: "var(--success)",
    skills: [
      "Test Planning",
      "Test Case Design",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "UAT",
      "Bug Reporting",
    ],
  },
  {
    title: "CI/CD & Version Control",
    color: "var(--primary)",
    skills: ["GitHub Actions", "GitLab CI/CD", "GitHub", "GitLab"],
  },
  {
    title: "Project & Agile Tools",
    color: "var(--accent)",
    skills: ["Jira", "Trello", "Asana", "Azure Boards", "Scrum / Agile"],
  },
  {
    title: "Languages & Web",
    color: "var(--success)",
    skills: ["TypeScript", "JavaScript", "Java", "HTML", "CSS"],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-[hsl(var(--muted)/0.4)]">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[hsl(var(--primary))] tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Skills & Tools</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-2 h-8 rounded-full mb-4"
                style={{ backgroundColor: `hsl(${category.color})` }}
              />
              <h3 className="font-heading font-bold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-sm font-medium hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
