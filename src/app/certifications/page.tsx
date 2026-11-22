import type { Metadata } from 'next';
import { Contact } from '@/components/Contact';
import { certifications } from '@/data/certifications';
import { ogImage } from '@/data/site';
import { JsonLd, crumbs, person } from '@/lib/seo';

const desc = 'Certificates earned by Usman Ghani in mobile development, AI, web development, security, data and automation.';

export const metadata: Metadata = {
  title: 'Certificates',
  description: desc,
  alternates: { canonical: '/certifications' },
  openGraph: { url: '/certifications', title: 'Certificates | Usman Ghani', description: desc, images: [ogImage] },
};

export default function Certificates() {
  const order = ['Work', 'Mobile', 'AI', 'Web', 'Security', 'Automation', 'Data', 'Business'];
  const list = [...certifications].sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
  return (
    <>
      <JsonLd
        data={[
          person,
          crumbs([
            { name: 'Home', path: '/' },
            { name: 'Certificates', path: '/certifications' },
          ]),
        ]}
      />
      <header className="page-head">
        <div className="wrap">
          <h1 className="h1">Certificates</h1>
          <p className="lead">
            {certifications.length} certificates in mobile development, AI, the web, security and more. Tap one to see it full size.
          </p>
        </div>
      </header>
      <section className="section" style={{ paddingTop: 0 }} aria-label="All certificates">
        <div className="wrap">
          <ul className="certs">
            {list.map((c) => (
              <li key={c.id}>
                <a className="card cert" href={c.image} target="_blank" rel="noopener" data-reveal>
                  <div className="cert-img">
                    <img src={c.image} alt={`${c.name} certificate from ${c.issuer}`} loading="lazy" width={800} height={600} />
                  </div>
                  <div className="cert-text">
                    <h3>{c.name}</h3>
                    <p>
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Contact />
    </>
  );
}
