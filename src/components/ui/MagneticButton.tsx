"use client";

import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  strength?: number;
};

export function MagneticButton({
  href,
  children,
  className = "button button-ghost",
  external,
  strength = 0.35,
}: MagneticButtonProps) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const btn = btnRef.current;
    if (!zone || !btn) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const onMove = (event: MouseEvent) => {
      const rect = zone.getBoundingClientRect();
      const x = gsap.utils.mapRange(
        rect.left,
        rect.right,
        -rect.width / 2,
        rect.width / 2,
        event.clientX,
      );
      const y = gsap.utils.mapRange(
        rect.top,
        rect.bottom,
        -rect.height / 2,
        rect.height / 2,
        event.clientY,
      );

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const onLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: true,
      });
    };

    zone.addEventListener("mousemove", onMove);
    zone.addEventListener("mouseleave", onLeave);

    return () => {
      zone.removeEventListener("mousemove", onMove);
      zone.removeEventListener("mouseleave", onLeave);
      gsap.set(btn, { x: 0, y: 0 });
    };
  }, [strength]);

  return (
    <div ref={zoneRef} className="magnetic-button-zone">
      <a
        ref={btnRef}
        className={className}
        href={href}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        <span>{children}</span>
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
