'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

type Shot = { src: string; alt: string };

/**
 * One full-screen photo viewer for the whole site. Any link with `data-zoom`
 * opens its `href` here instead of in a new tab; without JavaScript the link
 * still opens the image on its own.
 */
export function Zoom() {
  const [shot, setShot] = useState<Shot | null>(null);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[data-zoom]');
      if (!a) return;
      e.preventDefault();
      setShot({ src: a.getAttribute('href') ?? '', alt: a.dataset.zoom || a.querySelector('img')?.alt || '' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (shot && !d.open) d.showModal();
    if (!shot && d.open) d.close();
  }, [shot]);

  return (
    <dialog ref={ref} className="zoom" aria-label={shot?.alt || 'Photo'} onClose={() => setShot(null)} onClick={() => setShot(null)}>
      {shot && (
        <figure>
          <img src={shot.src} alt={shot.alt} />
          {shot.alt && <figcaption>{shot.alt}</figcaption>}
        </figure>
      )}
      <button type="button" className="zoom-close" aria-label="Close photo" onClick={() => setShot(null)}>
        <Icon name="x" size={22} />
      </button>
    </dialog>
  );
}
