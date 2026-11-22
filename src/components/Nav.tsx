'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { ThemeToggle } from './ThemeToggle';
import { me } from '@/data/site';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/certifications', label: 'Certificates' },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const current = (href: string) => (path === href || path.startsWith(`${href}/`) ? 'page' : undefined);

  return (
    <header className="nav">
      <nav className="nav-bar" aria-label="Main">
        <Link href="/" className="brand" aria-label="Usman Ghani, home">
          <img src={me.avatar} alt="" width={34} height={34} />
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
          <a className="btn btn-primary btn-sm nav-cta" href="/#contact">
            Get in Touch
          </a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'x' : 'list'} size={22} />
          </button>
        </div>
      </nav>
      <div className="sheet" id="menu" data-open={open} inert={!open}>
        <Link href="/" aria-current={path === '/' ? 'page' : undefined}>
          Home <Icon name="arrow-right" size={20} />
        </Link>
        {links.map((l) => (
          <Link key={l.href} href={l.href} aria-current={current(l.href)}>
            {l.label} <Icon name="arrow-right" size={20} />
          </Link>
        ))}
        <a className="btn btn-primary" href="/#contact" onClick={() => setOpen(false)}>
          Get in Touch
        </a>
      </div>
    </header>
  );
}
