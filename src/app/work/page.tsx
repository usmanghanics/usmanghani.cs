import type { Metadata } from 'next';
import { Apps, Contact, PlayAccount, WebWork } from '@/components/Blocks';
import { SITE_URL, ogImage } from '@/data/site';
import { apps, labs } from '@/data/work';
import { JsonLd, crumbs, person } from '@/lib/seo';

const title = 'Work: Apps and Web Platforms I’ve Shipped';
const desc =
  'Apps and platforms built by Usman Ghani: SnapCut, Makki AutoCare, Madadgar Kisan and BizCare on Google Play and the App Store, plus bizcare.pk, Leafyio, AutoScale Agents and Talent Pool.';

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
            hasPart: apps.map((a) => ({ '@type': 'MobileApplication', name: a.name, url: `${SITE_URL}/work/${a.slug}` })),
          },
        ]}
      />
      <header className="case-head">
        <div className="wrap">
          <h1 className="display">
            Shipped, live and <span className="accent">in use</span>.
          </h1>
          <p className="lead">
            Every project here is out in the world: apps on Google Play and the App Store, and web platforms with real customers.
          </p>
        </div>
      </header>

      <section className="section soft" aria-labelledby="apps-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title" id="apps-title">
              Mobile apps
            </h2>
          </div>
          <Apps />
          <PlayAccount />
        </div>
      </section>

      <section className="section band" aria-labelledby="web-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title" id="web-title">
              Web platforms
            </h2>
          </div>
          <WebWork />
        </div>
      </section>

      <section className="section" aria-labelledby="labs-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <div>
              <h2 className="title" id="labs-title">
                University projects
              </h2>
              <p className="lead">Security and mobile projects from my degree at Namal University.</p>
            </div>
          </div>
          <ul className="labs">
            {labs.map((l) => (
              <li key={l.name} className="lab" data-reveal>
                <h3>
                  {l.name}
                  {l.status && <span className="tag">{l.status}</span>}
                </h3>
                <p>{l.text}</p>
                <span>{l.tools}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}
