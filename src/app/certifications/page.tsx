import type { Metadata } from 'next';
import { Contact } from '@/components/Blocks';
import { Brand } from '@/components/Logos';
import { certifications, groups } from '@/data/certifications';
import { ogImage } from '@/data/site';
import { JsonLd, crumbs, person } from '@/lib/seo';

const desc = 'Certificates earned by Usman Ghani from Meta, Microsoft, IBM, UC Irvine, Google and others, in mobile development, AI, the web and security.';

export const metadata: Metadata = {
  title: 'Certificates',
  description: desc,
  alternates: { canonical: '/certifications' },
  openGraph: { url: '/certifications', title: 'Certificates | Usman Ghani', description: desc, images: [ogImage] },
};

export default function Certificates() {
  return (
    <>
      <JsonLd data={[person, crumbs([{ name: 'Home', path: '/' }, { name: 'Certificates', path: '/certifications' }])]} />
      <header className="case-head">
        <div className="wrap">
          <h1 className="display">
            <span className="accent">Certificates</span>
          </h1>
          <p className="lead">
            {certifications.length} certificates in mobile development, AI, security, the web and automation. My internship certificate from Fatima Group is listed with my experience.
          </p>
        </div>
      </header>
      {groups.map((g, gi) => {
        const list = certifications.filter((c) => c.group === g);
        return (
          <section key={g} className={`section${gi % 2 ? ' soft' : ''}`} style={gi === 0 ? { paddingTop: 0 } : undefined} aria-labelledby={`g-${gi}`}>
            <div className="wrap">
              <div className="head" data-reveal>
                <h2 className="title-sm" id={`g-${gi}`}>
                  {g === 'Core' ? 'Mobile, AI and security' : g}
                </h2>
              </div>
              <ul className="certs">
                {list.map((c) => (
                  <li key={c.id} style={{ display: 'grid' }}>
                    <a className="cert" href={c.image} target="_blank" rel="noopener" data-reveal>
                      <div className="cert-img">
                        <img src={c.image} alt={`${c.name} certificate from ${c.issuer}`} width={800} height={600} loading="lazy" />
                      </div>
                      <div className="cert-body">
                        <span className="cert-issuer">
                          {c.logo && <Brand name={c.logo} size={18} />}
                          {c.issuer}
                        </span>
                        <h3>{c.name}</h3>
                        <small>Issued {c.date}</small>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
      <Contact />
    </>
  );
}
