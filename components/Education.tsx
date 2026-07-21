"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-surface-soft">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Education</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight">
            Academic foundation.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 max-w-3xl rounded-xl2 bg-white border border-surface-border shadow-card overflow-hidden"
        >
          <div className="p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-brand-light flex items-center justify-center text-brand">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg text-ink-900">
                  {education.degree}
                </h3>
                <p className="text-sm font-medium text-ink-500 mt-0.5">
                  {education.institution}
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-ink-300">
                  <MapPin size={13} /> {education.location}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-surface-soft border border-surface-border p-4">
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-ink-300">
                  Progress
                </dt>
                <dd className="font-mono font-semibold text-ink-900 mt-1 text-sm">
                  {education.progress}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-ink-300">
                  CGPA
                </dt>
                <dd className="font-mono font-semibold text-brand mt-1 text-sm">
                  {education.cgpa}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-ink-300">
                  Graduation
                </dt>
                <dd className="font-mono font-semibold text-ink-900 mt-1 text-sm">
                  Jan 2028
                </dd>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-300 mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-medium text-ink-700 bg-white border border-surface-border rounded-md px-2.5 py-1.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
