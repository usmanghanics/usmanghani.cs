"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Apps", href: "/#apps" },
  { label: "Projects", href: "/projects" },
  { label: "Certs", href: "/certifications" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 48);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${isScrolled ? "is-scrolled glass" : ""}`}>
      <div className="site-nav-inner">
        <a className="nav-brand" href="/#top" onClick={() => setIsOpen(false)}>
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation menu"
            className="menu-toggle glass"
            type="button"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div className={`mobile-menu glass ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
