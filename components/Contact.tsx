"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Check } from "lucide-react";
import { profile } from "@/lib/data";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  { icon: Linkedin, label: "LinkedIn", value: "View profile", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "View profile", href: profile.github },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight">
            Let&apos;s work together.
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
           Open to full-time roles in Data Science, Machine Learning
           and Data Analytics. Reach out and I&apos;ll get back to you soon.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {contactItems.map((item) => {
              const Content = (
                <>
                  <div className="h-11 w-11 rounded-lg bg-brand-light flex items-center justify-center text-brand shrink-0">
                    <item.icon size={19} />
                  </div>
                  <div>
                    <p className="text-xs text-ink-300 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-ink-900 mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="focus-ring flex items-center gap-4 rounded-xl2 bg-white border border-surface-border p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  {Content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl2 bg-white border border-surface-border p-5 shadow-card"
                >
                  {Content}
                </div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="rounded-xl2 bg-white border border-surface-border shadow-card p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink-700">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="focus-ring mt-1.5 w-full rounded-lg border border-surface-border bg-surface-soft px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 outline-none focus:border-brand"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="focus-ring mt-1.5 w-full rounded-lg border border-surface-border bg-surface-soft px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 outline-none focus:border-brand"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-ink-700">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="focus-ring mt-1.5 w-full rounded-lg border border-surface-border bg-surface-soft px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 outline-none focus:border-brand resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-brand text-white text-sm font-semibold px-5 py-3 hover:bg-brand-dark transition-colors"
            >
              {status === "sent" ? (
                <>
                  <Check size={17} /> Opening your email app…
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
