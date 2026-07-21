"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, moreProjectsNote, profile } from "@/lib/data";

// Small hand-built visuals that reference what each project actually does,
// instead of one repeated stock icon.
function ProjectVisual({ id }: { id: string }) {
  if (id === "fuel-efficiency") {
    return (
      <svg viewBox="0 0 220 120" className="w-full h-full" aria-hidden="true">
        {[
          [18, 92], [34, 78], [40, 88], [58, 70], [66, 60], [78, 66],
          [92, 48], [104, 52], [118, 40], [130, 34], [140, 44], [156, 26],
          [168, 30], [182, 18], [196, 24],
        ].map(([x, y], idx) => (
          <circle key={idx} cx={x} cy={y} r="2.6" fill="#93B1F5" />
        ))}
        <path
          d="M14 96 C 60 90, 90 58, 130 40 S 190 16, 204 12"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (id === "customer-segmentation") {
    const clusterA = [[30,30],[42,24],[24,44],[46,40],[36,52]];
    const clusterB = [[110,60],[124,50],[100,74],[130,70],[116,84]];
    const clusterC = [[176,26],[192,36],[168,44],[198,20],[184,54]];
    return (
      <svg viewBox="0 0 220 120" className="w-full h-full" aria-hidden="true">
        {clusterA.map(([x, y], idx) => (
          <circle key={`a${idx}`} cx={x} cy={y} r="4.5" fill="#2563EB" fillOpacity="0.85" />
        ))}
        {clusterB.map(([x, y], idx) => (
          <circle key={`b${idx}`} cx={x} cy={y} r="4.5" fill="#60A5FA" fillOpacity="0.85" />
        ))}
        {clusterC.map(([x, y], idx) => (
          <circle key={`c${idx}`} cx={x} cy={y} r="4.5" fill="#1E3A8A" fillOpacity="0.85" />
        ))}
        <circle cx="36" cy="38" r="18" fill="none" stroke="#2563EB" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="116" cy="68" r="20" fill="none" stroke="#2563EB" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="184" cy="36" r="18" fill="none" stroke="#2563EB" strokeOpacity="0.25" strokeWidth="1.5" />
      </svg>
    );
  }
  // EDA supermarket sales — simple bar chart
  const bars = [38, 62, 46, 80, 54, 70, 30];
  return (
    <svg viewBox="0 0 220 120" className="w-full h-full" aria-hidden="true">
      {bars.map((h, idx) => (
        <rect
          key={idx}
          x={16 + idx * 27}
          y={100 - h}
          width="16"
          height={h}
          rx="3"
          fill={idx === 3 ? "#2563EB" : "#B9CCF7"}
        />
      ))}
      <line x1="10" y1="101" x2="212" y2="101" stroke="#C7D2E4" strokeWidth="1" />
    </svg>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface-soft">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">Projects</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight">
            Selected work.
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            A few projects that show how I approach a dataset — from
            cleaning and feature engineering to modeling and clear visual
            storytelling. Each chart below is a rough sketch of the
            project&apos;s actual output, not a stock graphic.
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {/* Featured project — full width, editorial layout */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="group grid md:grid-cols-[1.1fr_1fr] rounded-xl2 bg-white border border-surface-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-brand-light to-white p-6 flex items-center min-h-[220px]">
              <ProjectVisual id={featured.id} />
              {featured.metric && (
                <span className="absolute top-4 right-4 rounded-md bg-white border border-surface-border px-2.5 py-1 text-xs font-mono font-semibold text-brand">
                  {featured.metric.label} = {featured.metric.value}
                </span>
              )}
            </div>
            <div className="flex flex-col p-7 sm:p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand mb-2">
                Featured
              </span>
              <h3 className="font-display text-xl font-semibold text-ink-900 leading-snug">
                {featured.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {featured.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-ink-500 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {featured.tech.map((t) => (
                  <span key={t} className="text-[11px] font-mono font-medium text-brand-dark bg-brand-light rounded-md px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-surface-border flex items-center gap-3">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-lg bg-brand text-white text-sm font-semibold px-4 py-2.5 hover:bg-brand-dark transition-colors"
                >
                  <Github size={16} /> View repository
                </a>
              </div>
            </div>
          </motion.article>

          {/* Remaining projects — compact side by side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-xl2 bg-white border border-surface-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[16/9] bg-gradient-to-br from-surface-soft to-white p-5">
                  <ProjectVisual id={project.id} />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display font-semibold text-ink-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-ink-500 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono font-medium text-brand-dark bg-brand-light rounded-md px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-surface-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 hover:text-brand transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring ml-auto inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                    >
                      View Details <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl2 border border-dashed border-brand/40 bg-brand-light/40 px-6 py-5"
        >
          <p className="text-sm text-ink-700">
            <span className="font-semibold text-ink-900">{moreProjectsNote}</span>{" "}
            are available on GitHub.
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white border border-surface-border text-ink-700 text-sm font-semibold px-4 py-2.5 hover:border-brand hover:text-brand transition-colors whitespace-nowrap"
          >
            <Github size={16} /> View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
