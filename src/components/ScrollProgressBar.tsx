"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] md:h-1 bg-[#C8A45D] origin-left z-[100] pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
