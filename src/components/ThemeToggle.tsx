'use client';

import { Icon } from './Icon';

/** Light is the default. The choice is remembered on this device. */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#0e0e0f' : '#f7f6f3');
  };
  return (
    <button type="button" className="icon-btn theme-btn" onClick={toggle} aria-label="Switch between light and dark theme">
      <Icon name="moon" size={20} className="moon" />
      <Icon name="sun" size={20} className="sun" />
    </button>
  );
}
