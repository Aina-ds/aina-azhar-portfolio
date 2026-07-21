"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { profile } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 bg-surface-soft">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl2 bg-brand text-white px-8 py-14 sm:px-14 text-center"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_1px_1px,#FFFFFF_1px,transparent_0)] [background-size:26px_26px]"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="eyebrow !text-white/80">Resume</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Want the full picture?
            </h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto leading-relaxed">
              Get a complete overview of {profile.name}&apos;s education,
              projects, internship experience and certifications in one
              PDF.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white text-brand text-sm font-semibold px-5 py-3 hover:bg-brand-light transition-colors"
              >
                <Download size={17} /> Download Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/40 text-white text-sm font-semibold px-5 py-3 hover:bg-white/10 transition-colors"
              >
                <Eye size={17} /> View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
