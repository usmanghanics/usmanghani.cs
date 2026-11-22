import type { Metadata } from 'next';
import { Achievements, Contact, Education, Experience, Stack } from '@/components/Blocks';
import { Icon } from '@/components/Icon';
import { Brand } from '@/components/Logos';
import { SITE_URL, me, ogImage } from '@/data/site';
import { JsonLd, crumbs, person } from '@/lib/seo';

const desc =
  'About Usman Ghani: software engineer in Lahore, computer science at Namal University, Software & Application Engineer at Veloq, apps live on Google Play and the App Store, winner of CodeX 3.0.';

export const metadata: Metadata = {
  title: { absolute: 'About Usman Ghani: Software Engineer in Lahore' },
  description: desc,
  alternates: { canonical: '/about' },
  openGraph: { type: 'profile', url: '/about', title: 'About Usman Ghani', description: desc, images: [ogImage] },
};

export default function About() {
  return (
    <>
      <JsonLd
        data={[
          person,
          crumbs([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          { '@type': 'AboutPage', url: `${SITE_URL}/about`, name: 'About Usman Ghani', description: desc, mainEntity: { '@id': person['@id'] } },
        ]}
      />
      <header className="case-head">
        <div className="wrap about-head">
          <div className="portrait">
            <img src={me.photo} alt="Usman Ghani" width={960} height={960} fetchPriority="high" />
          </div>
          <div>
            <h1 className="display">
              Hi, I’m <span className="accent">Usman Ghani</span>.
            </h1>
            <div className="prose" style={{ marginTop: 28 }}>
              <p>
                I build and ship products. My first app came out of a challenge in an algorithms course: build something that runs on a
                phone. Today <strong>SnapCut</strong>, the video editor I publish as BlueX Software Solutions, has more than 5,000
                downloads, and the apps I built at <strong>BizCare</strong> run car care, farm supply and ERP businesses on Android and
                iOS.
              </p>
              <p>
                At <strong>Veloq</strong> I build web platforms and AI products for clients in recruitment, property and logistics. In
                summer 2026 I redesigned <strong>FG AI Studio</strong>, Fatima Group’s platform for AI agents, during their Empower to
                Lead internship.
              </p>
              <p>
                I study computer science at <strong>Namal University</strong>, compete in programming contests, and sit at the top of
                CTF Square, Pakistan’s national capture-the-flag platform.
              </p>
            </div>
            <div className="row" style={{ marginTop: 32 }}>
              <a className="btn btn-ink" href={`mailto:${me.email}`}>
                <Icon name="envelope-simple" size={20} /> Email Me
              </a>
              <a className="btn btn-line" href={me.links.linkedin} target="_blank" rel="noopener me">
                <Brand name="linkedin" size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section soft" aria-labelledby="ach-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title" id="ach-title">
              Achievements
            </h2>
          </div>
          <Achievements />
          <div className="photos" style={{ marginTop: 20 }}>
            <figure data-reveal>
              <img src="/img/me/codex-trophy.webp" alt="1st Position trophy, Competitive Programming, CodeX 3.0, Namal University" width={895} height={1200} loading="lazy" />
              <figcaption>CodeX 3.0 trophy, 5 December 2025</figcaption>
            </figure>
            <figure data-reveal>
              <img src="/img/me/ctf-leaderboard.webp" alt="CTF Square individual leaderboard with Usman Ghani at number one" width={1000} height={750} loading="lazy" />
              <figcaption>CTF Square leaderboard, National CERT</figcaption>
            </figure>
            <figure data-reveal>
              <img src="/img/me/aurex-team.webp" alt="Usman Ghani with the AUREX 2026 winners at Bahria University, Islamabad" width={1195} height={896} loading="lazy" />
              <figcaption>AUREX 2026, Bahria University</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="xp-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title" id="xp-title">
              Experience
            </h2>
          </div>
          <Experience />
        </div>
      </section>

      <section className="section soft" aria-labelledby="edu-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title" id="edu-title">
              Education
            </h2>
          </div>
          <Education />
        </div>
      </section>

      <section className="section" aria-labelledby="stack-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title" id="stack-title">
              Tools
            </h2>
          </div>
          <Stack />
        </div>
      </section>

      <Contact />
    </>
  );
}
