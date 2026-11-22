import type { Metadata } from 'next';
import Link from 'next/link';
import { Achievements, Apps, Certificates, Contact, Education, Experience, Orgs, PlayAccount, Stack, WebWork } from '@/components/Blocks';
import { Icon } from '@/components/Icon';
import { Brand } from '@/components/Logos';
import { SITE_URL, me, stats } from '@/data/site';
import { JsonLd, person, website } from '@/lib/seo';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          person,
          website,
          {
            '@type': 'ProfilePage',
            '@id': `${SITE_URL}/#profile`,
            url: `${SITE_URL}/`,
            name: 'Usman Ghani',
            isPartOf: { '@id': website['@id'] },
            mainEntity: { '@id': person['@id'] },
          },
        ]}
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="now">
                <img src="/img/logos/veloq-icon.png" alt="" width={28} height={28} />
                <span>
                  {me.role} at <b>Veloq</b>
                </span>
              </p>
              <h1 className="display" id="hero-title">
                I build and <span className="accent">ship</span> apps people use every day.
              </h1>
              <p className="lead">
                My apps are live on Google Play and the App Store with thousands of downloads, and I build AI platforms and web
                products for companies. Based in Lahore, studying computer science at Namal University.
              </p>
              <div className="row">
                <a className="btn btn-ink" href="#apps">
                  See What I’ve Shipped <Icon name="arrow-right" size={18} className="go" />
                </a>
                <a className="btn btn-line" href="#contact">
                  <Icon name="envelope-simple" size={20} /> Email Me
                </a>
                <span className="hero-socials">
                  <a className="icon-btn" href={me.links.linkedin} target="_blank" rel="noopener me" aria-label="LinkedIn">
                    <Brand name="linkedin" size={20} />
                  </a>
                  <a className="icon-btn" href={me.links.github} target="_blank" rel="noopener me" aria-label="GitHub">
                    <Brand name="github" size={20} />
                  </a>
                </span>
              </div>
            </div>

            <figure className="portrait-card">
              <div className="portrait">
                <img src={me.photo} alt="Usman Ghani" width={960} height={960} fetchPriority="high" />
              </div>
              <figcaption className="portrait-facts">
                <span>
                  <img src="/img/apps/snapcut-icon.webp" alt="" width={36} height={36} />
                  <span>
                    <b>5K+</b>
                    <small>SnapCut downloads</small>
                  </span>
                </span>
                <span>
                  <img className="pad" src="/img/logos/namal.png" alt="" width={36} height={36} />
                  <span>
                    <b>1st</b>
                    <small>CodeX 3.0</small>
                  </span>
                </span>
                <span>
                  <img className="pad" src="/img/logos/pkcert.png" alt="" width={36} height={36} />
                  <span>
                    <b>#1</b>
                    <small>CTF Square</small>
                  </span>
                </span>
              </figcaption>
            </figure>
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

      <div className="wrap">
        <Orgs />
      </div>

      <section className="section soft" id="apps" aria-labelledby="apps-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <div>
              <h2 className="title" id="apps-title">
                Apps people actually <span className="accent">download</span>.
              </h2>
              <p className="lead">
                Built and shipped to Google Play and the App Store, as an independent developer and for businesses across Pakistan.
                Every one is live and in daily use.
              </p>
            </div>
            <Link className="link" href="/work">
              <span>All work</span>
              <Icon name="arrow-right" size={18} />
            </Link>
          </div>
          <Apps />
          <PlayAccount />
        </div>
      </section>

      <section className="section band" id="web" aria-labelledby="web-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <div>
              <h2 className="title" id="web-title">
                Platforms businesses <span className="accent">run on</span>.
              </h2>
              <p className="lead">Websites and web products I’ve built, all live: for BizCare, and for Veloq’s clients.</p>
            </div>
          </div>
          <WebWork />
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="xp-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <div>
              <h2 className="title" id="xp-title">
                Where I’ve <span className="accent">worked</span>.
              </h2>
              <p className="lead">An AI software house, an ERP company, one of Pakistan’s largest business groups, and my own apps.</p>
            </div>
          </div>
          <Experience />
        </div>
      </section>

      <section className="section soft" id="achievements" aria-labelledby="ach-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <div>
              <h2 className="title" id="ach-title">
                Proven <span className="accent">under pressure</span>.
              </h2>
              <p className="lead">National programming contests and Pakistan’s national capture-the-flag platform.</p>
            </div>
          </div>
          <Achievements />
        </div>
      </section>

      <section className="section" id="education" aria-labelledby="edu-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title" id="edu-title">
              Education
            </h2>
          </div>
          <Education />
        </div>
      </section>

      <section className="section soft" id="certificates" aria-labelledby="cert-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <div>
              <h2 className="title" id="cert-title">
                Certified by <span className="accent">Meta, Microsoft and IBM</span>.
              </h2>
              <p className="lead">From Meta, Microsoft, IBM and UC Irvine. Tap any certificate to see it.</p>
            </div>
            <Link className="link" href="/certifications">
              <span>All certificates</span>
              <Icon name="arrow-right" size={18} />
            </Link>
          </div>
          <Certificates limit={6} />
        </div>
      </section>

      <section className="section" id="stack" aria-labelledby="stack-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <div>
              <h2 className="title" id="stack-title">
                The tools I <span className="accent">ship with</span>.
              </h2>
            </div>
          </div>
          <Stack />
        </div>
      </section>

      <Contact />
    </>
  );
}
