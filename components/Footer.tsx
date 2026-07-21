"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-surface-border py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-300">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="focus-ring flex items-center justify-center h-9 w-9 rounded-lg border border-surface-border text-ink-500 hover:text-brand hover:border-brand transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring flex items-center justify-center h-9 w-9 rounded-lg border border-surface-border text-ink-500 hover:text-brand hover:border-brand transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring flex items-center justify-center h-9 w-9 rounded-lg border border-surface-border text-ink-500 hover:text-brand hover:border-brand transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {visible && (
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            aria-label="Back to top"
            className="focus-ring fixed bottom-6 right-6 z-40 flex items-center justify-center h-11 w-11 rounded-full bg-brand text-white shadow-card-hover hover:bg-brand-dark transition-colors"
          >
            <ArrowUp size={18} />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
