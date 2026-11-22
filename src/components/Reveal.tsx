'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/** Fades sections in as they reach the screen; re-scans after each page change. */
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.seen)');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('seen'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('seen');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
