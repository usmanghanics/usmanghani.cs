import Link from 'next/link';
import { me } from '@/data/site';
import { Brand } from './Logos';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} Usman Ghani · {me.location}</p>
        <nav aria-label="Footer">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/certifications">Certificates</Link>
          <a href={`mailto:${me.email}`}>Email</a>
        </nav>
        <div className="row" style={{ gap: 2 }}>
          <a className="icon-btn" href={me.links.linkedin} target="_blank" rel="noopener me" aria-label="LinkedIn">
            <Brand name="linkedin" size={18} />
          </a>
          <a className="icon-btn" href={me.links.github} target="_blank" rel="noopener me" aria-label="GitHub">
            <Brand name="github" size={18} />
          </a>
          <a className="icon-btn" href={me.links.x} target="_blank" rel="noopener me" aria-label="X">
            <Brand name="x" size={16} />
          </a>
          <a className="icon-btn" href={me.links.play} target="_blank" rel="noopener" aria-label="My apps on Google Play">
            <Brand name="googleplay" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
