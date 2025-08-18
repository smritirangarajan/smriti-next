"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay } });
  }, [controls, inView, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 12 }} animate={controls}>
      {children}
    </motion.div>
  );
}


