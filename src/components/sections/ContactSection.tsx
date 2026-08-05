"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

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

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // EmailJS integration placeholder — replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
    try {
      await new Promise((res) => setTimeout(res, 1200)); // simulate send
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shazzadm065@gmail.com",
      href: "mailto:shazzadm065@gmail.com",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "md-shazzad-mia",
      href: "https://linkedin.com/in/md-shazzad-mia",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "Shazzad01",
      href: "https://github.com/Shazzad01",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[hsl(var(--primary))] tracking-widest uppercase mb-3">
            Let&apos;s connect
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] mt-4 max-w-xl mx-auto">
            Whether you have a project, a question, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-2xl mb-6">Contact Details</h3>
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-xl border border-[hsl(var(--card-border))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--primary)/0.2)] transition-colors">
                      <info.icon size={18} className="text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="font-medium text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass rounded-xl border border-[hsl(var(--card-border))]">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center">
                      <info.icon size={18} className="text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-2xl mb-6">Send a Message</h3>
            {status === "sent" ? (
              <div className="glass rounded-2xl p-10 border border-[hsl(var(--success)/0.4)] flex flex-col items-center justify-center text-center gap-4 h-64">
                <CheckCircle size={48} className="text-[hsl(var(--success))]" />
                <p className="font-semibold text-lg">Message sent! I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl glass border border-[hsl(var(--card-border))] bg-[hsl(var(--muted)/0.5)] focus:border-[hsl(var(--primary)/0.6)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.2)] transition-all duration-200 placeholder:text-[hsl(var(--muted-foreground))]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl glass border border-[hsl(var(--card-border))] bg-[hsl(var(--muted)/0.5)] focus:border-[hsl(var(--primary)/0.6)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.2)] transition-all duration-200 placeholder:text-[hsl(var(--muted-foreground))]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 rounded-xl glass border border-[hsl(var(--card-border))] bg-[hsl(var(--muted)/0.5)] focus:border-[hsl(var(--primary)/0.6)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary)/0.2)] transition-all duration-200 placeholder:text-[hsl(var(--muted-foreground))] resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-500">Something went wrong. Please try emailing directly.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[hsl(var(--primary))] text-white font-semibold hover:bg-[hsl(var(--primary-glow))] transition-all duration-200 glow disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span className="animate-spin border-2 border-white/30 border-t-white rounded-full w-4 h-4" />
                  ) : (
                    <Send size={18} />
                  )}
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
