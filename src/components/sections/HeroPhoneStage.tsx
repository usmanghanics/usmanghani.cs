"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import type { App } from "@/data/apps";

type HeroPhoneStageProps = {
  apps: [App, App, App];
};

export function HeroPhoneStage({ apps }: HeroPhoneStageProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  const rotateY = useTransform(progress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [-10, 0, 8]);
  const rotateX = useTransform(progress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [4, 0, -3]);
  const depth = useTransform(progress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [-16, 0, 14]);
  const sideFade = useTransform(progress, [0, 0.35, 1], prefersReducedMotion ? [0.92, 0.92, 0.92] : [0.72, 0.92, 0.82]);

  return (
    <motion.div
      ref={stageRef}
      className="hero-visual hero-carousel"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
    >
      <motion.div className="hero-depth-plane" aria-hidden="true" style={{ z: depth }} />
      <motion.div className="hero-phone-layer hero-phone-left" style={{ opacity: sideFade }}>
        <DeviceFrame app={apps[0]} size="large" className="hero-device hero-device-left" />
      </motion.div>
      <motion.div className="hero-phone-layer hero-phone-main">
        <DeviceFrame app={apps[1]} size="large" className="hero-device hero-device-main" />
      </motion.div>
      <motion.div className="hero-phone-layer hero-phone-right" style={{ opacity: sideFade }}>
        <DeviceFrame app={apps[2]} size="large" className="hero-device hero-device-right" />
      </motion.div>
    </motion.div>
  );
}
