"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/berkeley", label: "Berkeley" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light"|"dark">("light");
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
  },[theme]);
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
          <button onClick={()=>setTheme(t=>t==="light"?"dark":"light")} className="rounded-md border border-black/20 bg-white/60 px-3 py-1 text-sm shadow hover:opacity-90">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}


