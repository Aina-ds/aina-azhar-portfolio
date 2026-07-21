"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Wrench,
  Database,
  Languages,
} from "lucide-react";
import { skillGroups } from "@/lib/data";

const icons: Record<string, ElementType> = {
  "Programming Languages": Code2,
  "Libraries & Frameworks": BrainCircuit,
  "Tools & Platforms": Wrench,
  Databases: Database,
  Languages: Languages,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Skills</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight">
            The stack behind the work.
          </h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.category] ?? Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-xl2 bg-white border border-surface-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-brand-light flex items-center justify-center text-brand">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-display font-semibold text-ink-900">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium font-mono text-ink-700 bg-surface-soft border border-surface-border rounded-md px-2.5 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
