import Link from 'next/link';
import { me } from '@/data/site';
import { Icon } from './Icon';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <b>Usman Ghani</b>
            <p>
              Software engineer in {me.location}. Founder of{' '}
              <a href={me.links.bluex} target="_blank" rel="noopener" style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
                BlueX Software Solutions
              </a>
              , developer at Veloq and BizCare.
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/certifications">Certificates</Link>
            <a href={me.links.bluex} target="_blank" rel="noopener">
              My Apps
            </a>
            <a href={`mailto:${me.email}`}>Email</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {year} Usman Ghani</p>
          <div className="socials">
            <a className="icon-btn" href={me.links.linkedin} target="_blank" rel="noopener me" aria-label="LinkedIn">
              <Icon name="linkedin-logo" size={20} />
            </a>
            <a className="icon-btn" href={me.links.github} target="_blank" rel="noopener me" aria-label="GitHub">
              <Icon name="github-logo" size={20} />
            </a>
            <a className="icon-btn" href={me.links.x} target="_blank" rel="noopener me" aria-label="X">
              <Icon name="x-logo" size={20} />
            </a>
            <a className="icon-btn" href={me.links.play} target="_blank" rel="noopener" aria-label="My apps on Google Play">
              <Icon name="google-play-logo" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
