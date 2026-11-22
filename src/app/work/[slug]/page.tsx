import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Contact } from '@/components/Contact';
import { Icon } from '@/components/Icon';
import { StoreLinks } from '@/components/Store';
import { Visual } from '@/components/Visual';
import { findWork, work } from '@/data/work';
import { SITE_URL, ogImage } from '@/data/site';
import { JsonLd, crumbs, person } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const w = findWork(slug);
  if (!w) return {};
  return {
    title: w.seo.title,
    description: w.seo.description,
    alternates: { canonical: `/work/${w.slug}` },
    openGraph: {
      type: 'article',
      url: `/work/${w.slug}`,
      title: `${w.seo.title} | Usman Ghani`,
      description: w.seo.description,
      images: [ogImage],
    },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const w = findWork(slug);
  if (!w) notFound();
  const i = work.indexOf(w);
  const next = work[(i + 1) % work.length];

  return (
    <>
      <JsonLd
        data={[
          person,
          crumbs([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: w.name, path: `/work/${w.slug}` },
          ]),
          {
            '@type': 'CreativeWork',
            '@id': `${SITE_URL}/work/${w.slug}#work`,
            name: w.name,
            headline: w.title,
            description: w.seo.description,
            url: `${SITE_URL}/work/${w.slug}`,
            author: { '@id': person['@id'] },
            creator: { '@id': person['@id'] },
            keywords: w.stack.join(', '),
            ...(w.apps
              ? {
                  hasPart: w.apps.map((a) => ({
                    '@type': 'MobileApplication',
                    name: a.name,
                    operatingSystem: a.appStore ? 'Android, iOS' : 'Android',
                    applicationCategory: 'BusinessApplication',
                    url: a.play ?? a.appStore,
                  })),
                }
              : {}),
          },
        ]}
      />
      <header className="page-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/work">Work</Link>
            <Icon name="caret-right" size={14} />
            <span aria-current="page">{w.name}</span>
          </nav>
          <h1 className="h1">{w.title}</h1>
          <p className="lead">{w.summary}</p>
          <div className="head-row">
            <p className="meta">
              <b>{w.org}</b>
              <span>{w.role}</span>
              <span>{w.period}</span>
            </p>
            {w.links.length > 0 && (
              <div className="btn-row">
                {w.links.map((l) => (
                  <a
                    key={l.href}
                    className={l.kind === 'play' ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm'}
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <Icon name={l.kind === 'play' ? 'google-play-logo' : 'globe'} size={18} /> {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="wrap" data-reveal>
        <Visual visual={w.visual} big eager />
      </div>

      <div className="wrap">
        <section className="cols" aria-labelledby="facts-title">
          <h2 id="facts-title">In numbers</h2>
          <dl className="facts" style={{ ['--cols' as string]: w.facts.length, borderTop: 0, paddingTop: 0 }}>
            {w.facts.map((f) => (
              <div key={f.label}>
                <dt className="num" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {f.value}
                </dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="cols" aria-labelledby="built-title">
          <h2 id="built-title">What I built</h2>
          <ul className="built">
            {w.built.map((b) => (
              <li key={b} data-reveal>
                <Icon name="check-circle" size={20} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {w.apps && (
          <section className="cols" aria-labelledby="apps-title">
            <h2 id="apps-title">{w.slug === 'snapcut' ? 'My other apps' : 'The apps'}</h2>
            <ul className="app-rows">
              {w.apps
                .filter((a) => !(w.slug === 'snapcut' && a.name === 'SnapCut'))
                .map((a) => (
                  <li key={a.name} className="card app-row" data-reveal>
                    <img src={a.icon} alt="" width={56} height={56} loading="lazy" />
                    <div>
                      <h3>{a.name}</h3>
                      <p>{a.text}</p>
                    </div>
                    <StoreLinks play={a.play} appStore={a.appStore} web={a.web} name={a.name} />
                  </li>
                ))}
            </ul>
          </section>
        )}

        {w.more && (
          <section className="cols" aria-labelledby="more-title">
            <h2 id="more-title">Products</h2>
            <ul className="more-list">
              {w.more.map((m) => (
                <li key={m.name} className="card more-item" data-reveal>
                  <h3>
                    {m.href ? (
                      <a className="link" href={m.href} target="_blank" rel="noopener">
                        <span>{m.name}</span>
                        <Icon name="arrow-up-right" size={16} />
                      </a>
                    ) : (
                      m.name
                    )}
                  </h3>
                  <p>{m.text}</p>
                  <small>{m.stack.join(' · ')}</small>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="cols" aria-labelledby="stack-title">
          <h2 id="stack-title">Tools</h2>
          <ul className="inline-list">
            {w.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <Link className="next-case" href={`/work/${next.slug}`} data-reveal>
          <span>
            <small>Next case study</small>
            <b>{next.name}</b>
          </span>
          <span className="arrow">
            <Icon name="arrow-right" size={24} />
          </span>
        </Link>
      </div>

      <Contact />
    </>
  );
}
