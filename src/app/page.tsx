import type { Metadata } from 'next';
import { Case } from '@/components/Case';
import { AppCards } from '@/components/AppCards';
import { Contact } from '@/components/Contact';
import { Icon } from '@/components/Icon';
import { Phone } from '@/components/Phone';
import { EduAwards, Jobs, Labs, MoreLink, Sites } from '@/components/Sections';
import { me, places, stats } from '@/data/site';
import { bluexApps, work } from '@/data/work';
import { JsonLd, bluexOrg, person, website } from '@/lib/seo';
import { SITE_URL } from '@/data/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const heroShots = [
  { src: '/img/apps/makki-autocare-home.webp', alt: 'Makki AutoCare, a car care app built at BizCare', ratio: 0.4614 },
  { src: '/img/apps/snapcut-editor.webp', alt: 'SnapCut, the video editor I publish on Google Play', ratio: 0.5 },
  { src: '/img/apps/clippy-home.webp', alt: 'Clippy, my clipboard app for Android', ratio: 0.45 },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          person,
          website,
          bluexOrg,
          {
            '@type': 'ProfilePage',
            '@id': `${SITE_URL}/#profile`,
            url: `${SITE_URL}/`,
            name: 'Usman Ghani',
            isPartOf: { '@id': website['@id'] },
            mainEntity: { '@id': person['@id'] },
            dateModified: new Date().toISOString().slice(0, 10),
          },
        ]}
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hello">
                <img src={me.avatar} alt="" width={36} height={36} />
                <span>
                  <b>Usman Ghani</b> · Software Engineer<span className="where"> in {me.location}</span>
                </span>
              </p>
              <h1 className="h1" id="hero-title">
                I build mobile apps and AI products that people use.
              </h1>
              <p className="lead">
                I publish my own Android apps as BlueX Software Solutions, build business apps at BizCare and AI agents and SaaS
                platforms at Veloq. SnapCut, my video editor, has been downloaded more than 5,000 times.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="#work">
                  See My Work <Icon name="arrow-right" size={18} className="go" />
                </a>
                <a className="btn btn-outline" href="#contact">
                  <Icon name="envelope-simple" size={20} /> Email Me
                </a>
              </div>
            </div>
            <div className="hero-stage" aria-label="Apps I have built">
              <Phone shot={heroShots[0]} className="p1" eager />
              <Phone shot={heroShots[1]} className="p2" eager />
              <Phone shot={heroShots[2]} className="p3" eager />
            </div>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <dt className="sr-only">{s.label}</dt>
                <dd style={{ margin: 0 }}>
                  <b className="num">{s.value}</b>
                  <span>{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label="Where I work">
        <div className="wrap">
          <ul className="places">
            <li className="places-label">Where I build</li>
            {places.map((p) => (
              <li key={p.name}>
                {p.name} <small>{p.note}</small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <h2 className="h2" id="work-title">
                Selected work
              </h2>
              <p>Apps on the stores, an enterprise AI platform and products for clients. My strongest work first.</p>
            </div>
            <MoreLink href="/work">All work</MoreLink>
          </div>
          <div className="cases">
            {work.map((w, i) => (
              <Case key={w.slug} item={w} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="apps" aria-labelledby="apps-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <h2 className="h2" id="apps-title">
                Apps I publish
              </h2>
              <p>
                BlueX Software Solutions is my Google Play developer name. I design, build, publish and support every one of these
                apps myself.
              </p>
            </div>
            <a className="link" href={me.links.bluex} target="_blank" rel="noopener">
              <span>Visit BlueX</span>
              <Icon name="arrow-up-right" size={18} />
            </a>
          </div>
          <AppCards apps={bluexApps} />
        </div>
      </section>

      <section className="section" aria-labelledby="more-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <h2 className="h2" id="more-title">
                Websites and more
              </h2>
              <p>Fast, search-friendly websites, and the projects I build at university.</p>
            </div>
          </div>
          <Sites />
          <div style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}>
            <Labs limit={3} />
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="exp-title">
        <div className="wrap split">
          <div className="split-aside" data-reveal>
            <h2 className="h2" id="exp-title">
              Experience
            </h2>
            <p>Two companies, one internship and my own apps, alongside a computer science degree.</p>
            <MoreLink href="/about">More about me</MoreLink>
          </div>
          <Jobs />
        </div>
      </section>

      <section className="section section-soft" id="about" aria-labelledby="about-title">
        <div className="wrap about">
          <div className="portrait" data-reveal>
            <img src={me.photo} alt="Usman Ghani" width={720} height={795} loading="lazy" />
          </div>
          <div data-reveal>
            <h2 className="h2" id="about-title" style={{ marginBottom: 28 }}>
              I like owning the whole product.
            </h2>
            <div className="prose">
              <p>
                I’m Usman, a computer science student at <strong>Namal University</strong> and a working software engineer. I started
                by publishing my own Android apps, and I still run them: SnapCut, Clippy and Scanix are mine, from the code to the
                store page to the support inbox.
              </p>
              <p>
                Today I build mobile apps that businesses run on at <strong>BizCare</strong>, and AI agents and SaaS platforms at{' '}
                <strong>Veloq</strong>. In 2026 I led the frontend rebuild of FG AI Studio during my internship at{' '}
                <strong>Fatima Group</strong>.
              </p>
              <p>I care most about the parts people feel: speed, clear screens and apps that never lose your work.</p>
            </div>
            <EduAwards />
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
