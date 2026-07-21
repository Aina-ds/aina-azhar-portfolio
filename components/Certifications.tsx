"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Certifications</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight">
            Continuous learning, verified.
          </h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl2 bg-white border border-surface-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-lg bg-brand-light flex items-center justify-center text-brand">
                  <Award size={20} />
                </div>
                <BadgeCheck size={17} className="text-brand/60" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink-900 leading-snug">
                {cert.name}
              </h3>
              <p className="mt-1 text-xs font-mono text-ink-500">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
