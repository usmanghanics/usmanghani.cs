import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Contact } from '@/components/Blocks';
import { Icon } from '@/components/Icon';
import { AppStoreBadge, PlayBadge } from '@/components/Logos';
import { SITE_URL, ogImage } from '@/data/site';
import { apps, findApp } from '@/data/work';
import { JsonLd, crumbs, person } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = findApp((await params).slug);
  if (!a) return {};
  return {
    title: a.seo.title,
    description: a.seo.description,
    alternates: { canonical: `/work/${a.slug}` },
    openGraph: { type: 'article', url: `/work/${a.slug}`, title: `${a.seo.title} | Usman Ghani`, description: a.seo.description, images: [{ url: a.media, width: 1600, height: 1000, alt: `${a.name} app screens` }, ogImage] },
  };
}

export default async function CaseStudy({ params }: Props) {
  const a = findApp((await params).slug);
  if (!a) notFound();
  const next = apps[(apps.indexOf(a) + 1) % apps.length];

  return (
    <>
      <JsonLd
        data={[
          person,
          crumbs([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' },
            { name: a.name, path: `/work/${a.slug}` },
          ]),
          {
            '@type': 'MobileApplication',
            name: a.name,
            description: a.summary,
            operatingSystem: a.appStore ? 'Android, iOS' : 'Android',
            applicationCategory: a.slug === 'snapcut' ? 'MultimediaApplication' : 'BusinessApplication',
            image: `${SITE_URL}${a.media}`,
            url: a.play ?? a.appStore,
            sameAs: [a.play, a.appStore].filter(Boolean),
            author: { '@id': person['@id'] },
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          },
        ]}
      />
      <header className="case-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/work">Work</Link>
            <Icon name="caret-right" size={14} />
            <span aria-current="page">{a.name}</span>
          </nav>
          <div className="case-id">
            <img src={a.icon} alt="" width={68} height={68} />
            <div>
              <b>{a.name}</b>
              <span>{a.client}</span>
            </div>
          </div>
          <h1 className="display">{a.tagline}</h1>
          <p className="lead">{a.summary}</p>
          <div className="row" style={{ marginTop: 32 }}>
            {a.play && <PlayBadge href={a.play} name={a.name} />}
            {a.appStore && <AppStoreBadge href={a.appStore} name={a.name} />}
            {a.website && (
              <a className="btn btn-line btn-sm" href={a.website} target="_blank" rel="noopener">
                Website <Icon name="arrow-up-right" size={16} className="out" />
              </a>
            )}
          </div>
          <dl className="case-meta">
            {[
              ['My role', a.role],
              ['Platforms', a.platforms],
              ['When', a.period],
              ...a.stats.slice(0, 1).map((s) => [s.label, s.value]),
            ].map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="wrap" data-reveal>
        <div className="case-hero" style={{ ['--tint' as string]: a.tint }}>
          <img src={a.media} alt={`${a.name} app screens`} width={1600} height={1000} fetchPriority="high" />
        </div>
      </div>

      <section className="section" aria-labelledby="feat-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <h2 className="title" id="feat-title">
              What it does
            </h2>
          </div>
          <ul className="features">
            {a.features.map((f, i) => (
              <li key={f.title} className="feat" data-reveal style={{ ['--delay' as string]: `${(i % 3) * 0.07}s` }}>
                <i>
                  <Icon name={f.icon} size={22} />
                </i>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section soft" aria-labelledby="gal-title">
        <div className="wrap">
          <div className="head" data-reveal>
            <div>
              <h2 className="title" id="gal-title">
                {a.gallery[0].kind === 'mockup' ? 'On the store' : 'Inside the app'}
              </h2>
              <p className="lead">{a.gallery[0].kind === 'mockup' ? 'The images people see on the store listing.' : 'Real screens from the live app.'}</p>
            </div>
          </div>
          <div className="gallery" tabIndex={0} aria-label={`${a.name} images`}>
            {a.gallery.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} width={540} height={g.kind === 'mockup' ? 960 : 1170} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="did-title">
        <div className="wrap split2">
          <div data-reveal>
            <h2 className="title-sm" id="did-title">
              What I did
            </h2>
          </div>
          <div data-reveal>
            <ul className="did">
              {a.did.map((x) => (
                <li key={x}>
                  <Icon name="check-circle" size={20} />
                  {x}
                </li>
              ))}
            </ul>
            <ul className="tools-line" style={{ marginTop: 32 }} aria-label="Tools">
              {a.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <Link className="next" href={`/work/${next.slug}`} data-reveal>
          <span>
            <small>Next project</small>
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
