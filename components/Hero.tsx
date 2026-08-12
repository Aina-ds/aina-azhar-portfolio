"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { profile, stats } from "@/lib/data";

const dots = [
  { top: "12%", left: "8%", size: 6, delay: 0 },
  { top: "22%", left: "88%", size: 9, delay: 0.6 },
  { top: "68%", left: "5%", size: 5, delay: 1.1 },
  { top: "78%", left: "92%", size: 7, delay: 0.3 },
  { top: "40%", left: "95%", size: 4, delay: 1.6 },
  { top: "88%", left: "40%", size: 5, delay: 0.9 },
  { top: "8%", left: "45%", size: 4, delay: 1.3 },
  { top: "55%", left: "15%", size: 3, delay: 0.4 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      {/* subtle floating data-point background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {dots.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-brand/25 animate-float"
            style={{
              top: d.top,
              left: d.left,
              width: d.size,
              height: d.size,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-brand-light blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-brand-light blur-3xl opacity-60" />
      </div>

      <div className="section-container relative grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">Data Science · Machine Learning</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.08]">
            Hi, I&apos;m {profile.name}.
            <br />
            <span className="text-brand">Turning raw data</span> into
            decisions.
          </h1>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed max-w-xl">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-brand text-white text-sm font-semibold px-5 py-3 shadow-sm hover:bg-brand-dark transition-colors"
            >
              <Download size={17} /> Download Resume
            </a>
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-surface-border bg-white text-ink-700 text-sm font-semibold px-5 py-3 hover:border-brand hover:text-brand transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="focus-ring inline-flex items-center justify-center h-11 w-11 rounded-lg border border-surface-border text-ink-500 hover:text-brand hover:border-brand transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring inline-flex items-center justify-center h-11 w-11 rounded-lg border border-surface-border text-ink-500 hover:text-brand hover:border-brand transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                <dt className="font-mono text-2xl font-semibold text-ink-900">
                  {s.value}
                  <span className="text-brand">{s.suffix}</span>
                </dt>
                <dd className="mt-1 text-xs text-ink-500 uppercase tracking-wide">
                  {s.label}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm rounded-xl2 bg-surface-soft border border-surface-border shadow-card overflow-hidden">
            <Image
              src="/profile.jpg"
              alt={`${profile.name}, ${profile.shortTitle}`}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 384px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/40 to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 top-6 hidden sm:block rounded-xl bg-white border border-surface-border shadow-card px-4 py-3"
          >
            <span className="font-mono text-xs text-ink-500">CGPA</span>
            <p className="font-mono text-lg font-semibold text-brand leading-none mt-1">
              3.53/4.0
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
