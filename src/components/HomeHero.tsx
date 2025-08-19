"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HomeHero() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="container-page mt-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/hero/nameimage.png"
              alt="Smriti Rangarajan"
              width={500}
              height={125}
              className="h-auto"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl italic text-lavender-600 font-serif"
          >
            I build things with code and solve problems with data
          </motion.p>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-black/80 leading-relaxed"
            >
              Hi! I'm Smriti, a Computer Science and Data Science student at UC
              Berkeley. I love building full-stack applications, exploring
              machine learning, and creating meaningful user experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-black/80 leading-relaxed"
            >
              Right now, I'm a Production Engineering Fellow at Meta and Major
              League Hacking, working on full-stack applications and system
              automation. When I'm not coding, you'll find me dancing,
              gardening, playing piano, or traveling to new places.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="/projects"
              className="px-6 py-3 bg-lavender-300 text-black font-semibold rounded-lg border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              My Projects
            </a>
            <a
              href="mailto:smriti_rangarajan@berkeley.edu"
              className="px-6 py-3 bg-white text-black font-semibold rounded-lg border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Column - Flip Image */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full max-w-md aspect-square [perspective:1000px]"
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer ${
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              }`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front Side */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border-4 border-lavender-300 bg-lavender-100 shadow-[8px_8px_0_0_var(--lavender-600)] flex items-center justify-center">
                <Image
                  src="/assets/hero/pwlogo.png"
                  alt="Smriti Logo"
                  width={300}
                  height={300}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border-4 border-lavender-300 bg-white shadow-[8px_8px_0_0_var(--lavender-600)] overflow-hidden">
                <Image
                  src="/assets/hero/smriti.png"
                  alt="Smriti"
                  fill
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>

            {/* Flip Button */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-4 py-2 bg-lavender-600 text-white text-sm font-semibold rounded-lg border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                {isFlipped ? "Show Logo" : "Show Photo"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
