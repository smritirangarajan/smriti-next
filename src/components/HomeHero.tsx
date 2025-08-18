"use client";

import { motion } from "framer-motion";
import HeroCanvas from "@/components/three/HeroCanvas";

export default function HomeHero() {
  return (
    <div className="container-page mt-8 grid gap-6 md:grid-cols-2">
      <div className="flex flex-col justify-center gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-black"
        >
          Hi! I’m Smriti, a UC Berkeley student studying Computer Science and Data Science.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black/80"
        >
          I love building products and solving problems across data, design, and engineering.
        </motion.p>
        <div className="flex gap-4">
          <a className="btn-primary" href="/projects">My Projects</a>
          <a className="btn-outline" href="mailto:smriti_rangarajan@berkeley.edu">Contact Me</a>
        </div>
      </div>
      <div className="rounded-xl border-2 border-lavender-600 bg-white p-2 shadow-[6px_6px_0_0_var(--lavender-600)]">
        <HeroCanvas />
      </div>
    </div>
  );
}


