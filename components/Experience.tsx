"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Experience</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight">
            Where the theory met the data.
          </h2>
        </motion.div>

        <div className="mt-14 relative max-w-3xl">
          <div
            className="absolute left-5 top-2 bottom-2 w-px bg-surface-border"
            aria-hidden="true"
          />
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.org}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              <span className="absolute left-0 top-0 h-10 w-10 rounded-full bg-brand-light border-4 border-white shadow-card flex items-center justify-center text-brand">
                <Briefcase size={17} />
              </span>

              <div className="rounded-xl2 bg-white border border-surface-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display font-semibold text-lg text-ink-900">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-brand bg-brand-light rounded-md px-2.5 py-1">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink-500">
                  {exp.org}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-sm text-ink-500 leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
