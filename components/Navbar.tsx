"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-nav"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="section-container flex items-center justify-between h-16 md:h-20"
      >
        <a
          href="#home"
          className="focus-ring flex items-center justify-center h-10 w-10 rounded-xl bg-brand text-white font-display font-semibold text-sm tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          {profile.initials}
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="focus-ring px-3.5 py-2 rounded-lg text-sm font-medium text-ink-500 hover:text-brand hover:bg-brand-light transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden lg:inline-flex items-center rounded-lg bg-brand text-white text-sm font-semibold px-4 py-2.5 shadow-sm hover:bg-brand-dark transition-colors"
        >
          Let&apos;s talk
        </a>

        <button
          className="focus-ring lg:hidden p-2 rounded-lg text-ink-700 hover:bg-brand-light"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden bg-white border-t border-surface-border"
        >
          <ul className="section-container py-3 flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block px-2 py-3 text-sm font-medium text-ink-700 hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
