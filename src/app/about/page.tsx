import type { Metadata } from 'next';
import Link from 'next/link';
import { Contact } from '@/components/Contact';
import { Icon } from '@/components/Icon';
import { EduAwards, Jobs, MoreLink, Skills } from '@/components/Sections';
import { certifications } from '@/data/certifications';
import { SITE_URL, me, ogImage } from '@/data/site';
import { JsonLd, crumbs, person } from '@/lib/seo';

const title = 'About Usman Ghani';
const desc =
  'Usman Ghani is a software engineer and computer science student at Namal University. He builds mobile apps, AI agents and web platforms at Veloq and BizCare, and runs BlueX Software Solutions.';

export const metadata: Metadata = {
  title: { absolute: 'About Usman Ghani: Software Engineer and Founder of BlueX' },
  description: desc,
  alternates: { canonical: '/about' },
  openGraph: { type: 'profile', url: '/about', title: `${title}`, description: desc, images: [ogImage] },
};

export default function About() {
  const featured = certifications.filter((c) => c.featured).slice(0, 6);
  return (
    <>
      <JsonLd
        data={[
          person,
          crumbs([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          {
            '@type': 'AboutPage',
            url: `${SITE_URL}/about`,
            name: title,
            description: desc,
            mainEntity: { '@id': person['@id'] },
          },
        ]}
      />
      <header className="page-head">
        <div className="wrap about" style={{ alignItems: 'center' }}>
          <div className="portrait">
            <img src={me.photo} alt="Usman Ghani" width={720} height={795} fetchPriority="high" />
          </div>
          <div>
            <h1 className="h1" style={{ marginTop: 0 }}>
              Hi, I’m Usman Ghani.
            </h1>
            <div className="prose" style={{ marginTop: 28 }}>
              <p>
                I’m a software engineer from Pakistan and a computer science student at <strong>Namal University</strong>, Mianwali,
                graduating in 2027. I build mobile apps, AI agents and web platforms, and I like to own them from the first sketch
                to the store page.
              </p>
              <p>
                At <strong>BizCare Software Solutions</strong> I build and publish the mobile apps that businesses use with the
                company ERP. At <strong>Veloq</strong> I build AI products for clients abroad: agents, document checkers, research
                assistants and SaaS platforms. In 2026 I led the frontend overhaul of FG AI Studio during my internship at{' '}
                <strong>Fatima Group</strong>.
              </p>
              <p>
                <strong>BlueX Software Solutions</strong> is my own Google Play developer name. Its main app, SnapCut, is a video
                editor with more than 5,000 downloads and a 4.4 rating.
              </p>
            </div>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <a className="btn btn-primary" href={`mailto:${me.email}`}>
                <Icon name="envelope-simple" size={20} /> Email Me
              </a>
              <a className="btn btn-outline" href={me.links.linkedin} target="_blank" rel="noopener me">
                <Icon name="linkedin-logo" size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section" aria-labelledby="exp-title">
        <div className="wrap split">
          <div className="split-aside" data-reveal>
            <h2 className="h2" id="exp-title">
              Experience
            </h2>
            <MoreLink href="/work">See the work</MoreLink>
          </div>
          <Jobs />
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="skills-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <h2 className="h2" id="skills-title">
                What I work with
              </h2>
              <p>The tools I use every week, grouped by the kind of work.</p>
            </div>
          </div>
          <Skills />
        </div>
      </section>

      <section className="section" aria-labelledby="edu-title">
        <div className="wrap about">
          <figure className="award-photo" data-reveal>
            <img src="/img/me/award.webp" alt="Usman Ghani with other winners at a university programming contest" width={1000} height={750} loading="lazy" />
          </figure>
          <div data-reveal>
            <h2 className="h2" id="edu-title">
              Education and awards
            </h2>
            <EduAwards />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="certs-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <h2 className="h2" id="certs-title">
                Certificates
              </h2>
              <p>A few highlights. The full list is on its own page.</p>
            </div>
            <MoreLink href="/certifications">All certificates</MoreLink>
          </div>
          <ul className="certs">
            {featured.map((c) => (
              <li key={c.id} className="card cert" data-reveal>
                <div className="cert-img">
                  <img src={c.image} alt={`${c.name} certificate from ${c.issuer}`} loading="lazy" width={800} height={600} />
                </div>
                <div className="cert-text">
                  <h3>{c.name}</h3>
                  <p>
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}
