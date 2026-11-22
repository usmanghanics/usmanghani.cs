'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';
import { me } from '@/data/site';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/about', label: 'About' },
  { href: '/certifications', label: 'Certificates' },
];

/** Full-width bar at the top of the page; it turns into a floating pill once you scroll. */
export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const current = (href: string) => (!href.includes('#') && (path === href || path.startsWith(`${href}/`)) ? 'page' : undefined);

  return (
    <header className="nav" data-scrolled={scrolled || open}>
      <nav className="nav-inner" aria-label="Main">
        <Link href="/" className="brand" aria-label="Usman Ghani, home">
          <img src={me.avatar} alt="" width={36} height={36} />
          <span>Usman Ghani</span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn btn-ink btn-sm nav-cta" href="#contact">
            Get in Touch
          </a>
          <button type="button" className="icon-btn menu-btn" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'x' : 'list'} size={22} />
          </button>
        </div>
      </nav>
      <div className="sheet" id="menu" data-open={open} inert={!open}>
        {[{ href: '/', label: 'Home' }, ...links].map((l) => (
          <Link key={l.href} href={l.href} aria-current={l.href === '/' ? (path === '/' ? 'page' : undefined) : current(l.href)} onClick={() => setOpen(false)}>
            {l.label} <Icon name="arrow-right" size={20} />
          </Link>
        ))}
        <a className="btn btn-ink" href="#contact" onClick={() => setOpen(false)}>
          Get in Touch
        </a>
      </div>
    </header>
  );
}
