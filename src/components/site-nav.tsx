"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:text-[#60a5fa] transition"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#0070f3] to-[#7928ca] text-xs font-bold text-white shadow-[0_0_10px_rgba(0,112,243,0.2)] transition group-hover:shadow-[0_0_20px_rgba(0,112,243,0.4)]">
            AA
          </span>
          <span>{siteConfig.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-[13px] text-[#888] transition hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary rounded-full px-4 py-1.5 text-[13px] font-medium"
        >
          Work with me
        </a>
      </nav>
    </motion.header>
  );
}
