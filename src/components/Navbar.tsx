"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/berkeley", label: "Berkeley" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="sticky top-0 z-50 w-full bg-lavender-300 shadow-[0_2px_0_0_var(--lavender-600)]"
    >
      <div className="container-page flex h-12 items-center justify-between">
        <Link href="/" className="font-semibold text-black">
          Smriti Rangarajan
        </Link>
        <div className="flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-black/90 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <a href="https://github.com/smritirangarajan" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white p-1 shadow hover:scale-105 transition">
              <img src="/assets/logos/github.png" alt="GitHub" className="h-4 w-4" />
            </a>
            <a href="mailto:smriti_rangarajan@berkeley.edu" className="rounded-full border border-black/10 bg-white p-1 shadow hover:scale-105 transition">
              <img src="/email.png" alt="Email" className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/smriti-rangarajan/" target="_blank" rel="noreferrer" className="rounded-full border border-black/10 bg-white p-1 shadow hover:scale-105 transition">
              <img src="/assets/logos/linkedin.png" alt="LinkedIn" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}


