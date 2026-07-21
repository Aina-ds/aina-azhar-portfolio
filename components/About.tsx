"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

const facts = [
  { k: "Based in", v: "Islamabad, Pakistan" },
  { k: "Studying", v: "BS Data Science, COMSATS University" },
  { k: "Currently", v: `${education.progress} · CGPA ${education.cgpa}` },
  { k: "Core tools", v: "Python, R, SQL, Scikit-learn" },
  { k: "Looking for", v: "DS / ML / Data Analyst internships" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface-soft">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">About</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight">
              Grounded in fundamentals,
              <br /> curious about data.
            </h2>

            <div className="mt-7 space-y-5 text-ink-500 leading-relaxed">
              <p>
                I&apos;m a sixth-semester Data Science student at COMSATS
                University Islamabad, and most of what I know I&apos;ve
                learned by taking a dataset apart — messy columns,
                inconsistent units, missing values and all — until it tells
                me something true.
              </p>
              <p className="text-xl font-display text-ink-900 leading-snug border-l-2 border-brand pl-5">
                I&apos;m more interested in why a model gets something
                wrong than in the accuracy score it ends up with.
              </p>
              <p>
                That habit is what pushed me past coursework into 15+
                self-directed projects — regression, clustering,
                classification, SQL analytics — and into a four-week
                internship at Estrat&apos;s, where I got to run EDA and
                train models on real data instead of textbook examples for
                the first time. My toolkit is Python, R and SQL, with
                Pandas, NumPy and Scikit-learn doing most of the heavy
                lifting.
              </p>
              <p>
                Right now I&apos;m looking for a Data Science, Machine
                Learning or Data Analyst internship where I can trade
                classroom problems for real ones.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl2 bg-white border border-surface-border shadow-card p-7 sm:p-8 lg:sticky lg:top-28"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300 mb-5">
              At a glance
            </p>
            <dl className="space-y-4">
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`flex flex-col gap-0.5 ${
                    i !== 0 ? "pt-4 border-t border-surface-border" : ""
                  }`}
                >
                  <dt className="text-xs text-ink-300">{f.k}</dt>
                  <dd className="text-sm font-medium text-ink-900">{f.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
