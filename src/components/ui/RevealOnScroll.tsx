"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function RevealOnScroll({
  children,
  delay = 0,
  className,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
