import type { Metadata } from 'next';
import { Case } from '@/components/Case';
import { AppCards } from '@/components/AppCards';
import { Contact } from '@/components/Contact';
import { Labs, Sites } from '@/components/Sections';
import { bluexApps, work } from '@/data/work';
import { JsonLd, crumbs, person } from '@/lib/seo';
import { SITE_URL, ogImage } from '@/data/site';

const title = 'Work: Apps, AI Products and Websites';
const desc =
  'Projects by Usman Ghani: SnapCut on Google Play, FG AI Studio at Fatima Group, business apps at BizCare, AI products at Veloq, websites and university projects.';

export const metadata: Metadata = {
  title,
  description: desc,
  alternates: { canonical: '/work' },
  openGraph: { url: '/work', title: `${title} | Usman Ghani`, description: desc, images: [ogImage] },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          person,
          crumbs([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
          ]),
          {
            '@type': 'CollectionPage',
            url: `${SITE_URL}/work`,
            name: title,
            description: desc,
            author: { '@id': person['@id'] },
            hasPart: work.map((w) => ({ '@type': 'CreativeWork', name: w.name, url: `${SITE_URL}/work/${w.slug}` })),
          },
        ]}
      />
      <header className="page-head">
        <div className="wrap">
          <h1 className="h1">Work I’m proud of.</h1>
          <p className="lead">
            Apps on Google Play and the App Store, an enterprise AI platform, AI products for clients and fast websites. Client
            names stay private; the work speaks for itself.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Case studies">
        <div className="wrap cases">
          {work.map((w, i) => (
            <Case key={w.slug} item={w} flip={i % 2 === 1} headingLevel={2} />
          ))}
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="apps-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <h2 className="h2" id="apps-title">
                My apps
              </h2>
              <p>Published on Google Play under my developer name, BlueX Software Solutions.</p>
            </div>
          </div>
          <AppCards apps={bluexApps} />
        </div>
      </section>

      <section className="section" aria-labelledby="sites-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <h2 className="h2" id="sites-title">
              Websites
            </h2>
          </div>
          <Sites />
        </div>
      </section>

      <section className="section" aria-labelledby="labs-title">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <h2 className="h2" id="labs-title">
                University and earlier projects
              </h2>
              <p>From my final year project back to the chess game I wrote in my first semester.</p>
            </div>
          </div>
          <Labs />
        </div>
      </section>

      <Contact />
    </>
  );
}
