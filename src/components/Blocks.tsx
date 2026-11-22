import Link from 'next/link';
import { achievements, education, jobs, me, orgs, stack } from '@/data/site';
import { apps, bizcarePk, playAccount, web, type AppWork } from '@/data/work';
import { certifications } from '@/data/certifications';
import { AppStoreBadge, BizcareLogo, Brand, PlayBadge } from './Logos';
import { CopyEmail } from './CopyEmail';
import { Icon } from './Icon';

const d = (i: number) => ({ ['--delay' as string]: `${i * 0.07}s` });

export function Orgs() {
  return (
    <div className="orgs" aria-label="Where I have worked and studied">
      <span className="orgs-label">Where I’ve built and studied</span>
      {orgs.map((o) => (
        <span key={o.name} className="org" title={o.name}>
          {o.logo === 'ieee' ? (
            <Brand name="ieee" size={o.h} />
          ) : o.logo === 'bizcare' ? (
            <BizcareLogo height={o.h} />
          ) : (
            <img className={o.invert ? 'inv' : undefined} src={o.logo} alt={o.name} style={{ height: o.h }} />
          )}
          {o.label && <span>{o.label}</span>}
        </span>
      ))}
    </div>
  );
}

export function AppCard({ a, i = 0 }: { a: AppWork; i?: number }) {
  return (
    <article className="app" data-reveal style={d(i)}>
      <Link href={`/work/${a.slug}`} className="app-media" style={{ ['--tint' as string]: a.tint }} aria-label={`${a.name} case study`}>
        <img src={a.media} alt={`${a.name} app screens`} width={1600} height={1000} loading="lazy" />
      </Link>
      <div className="app-body">
        <div className="app-top">
          <img src={a.icon} alt="" width={56} height={56} loading="lazy" />
          <div>
            <h3>{a.name}</h3>
            <p>
              {a.client} · {a.platforms}
            </p>
          </div>
        </div>
        <p className="app-tag">{a.tagline}</p>
        <p className="app-text">{a.summary}</p>
        <dl className="app-stats">
          {a.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd style={{ margin: 0 }}>
                <b className="num">{s.value}</b>
                <span>{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        <div className="app-foot">
          <div className="badges">
            {a.play && <PlayBadge href={a.play} name={a.name} />}
            {a.appStore && <AppStoreBadge href={a.appStore} name={a.name} />}
          </div>
          <Link className="link" href={`/work/${a.slug}`}>
            <span>Case study</span>
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Apps() {
  return (
    <div className="apps">
      {apps.map((a, i) => (
        <AppCard key={a.slug} a={a} i={i % 2} />
      ))}
    </div>
  );
}

function Shot({ src, alt, host }: { src: string; alt: string; host: string }) {
  return (
    <div className="shot">
      <div className="shot-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{host}</span>
      </div>
      <img src={src} alt={alt} width={1600} height={1000} loading="lazy" />
    </div>
  );
}

export function WebWork() {
  return (
    <>
      <article className="feature" data-reveal>
        <a className="feature-media" href={bizcarePk.href} target="_blank" rel="noopener" aria-label="Visit bizcare.pk">
          <Shot src={bizcarePk.image} alt="bizcare.pk home page on a laptop" host="bizcare.pk" />
          <div className="shot-phone">
            <img src={bizcarePk.phone} alt="bizcare.pk on a phone" width={600} height={1298} loading="lazy" />
          </div>
        </a>
        <div className="feature-copy">
          <span className="org-line">
            <img src="/img/apps/bizcare-icon.webp" alt="" width={26} height={26} />
            BizCare Software Solutions · Website
          </span>
          <h3 className="title-sm">{bizcarePk.title}</h3>
          <p className="muted">{bizcarePk.text}</p>
          <ul className="ticks">
            {bizcarePk.points.map((p) => (
              <li key={p}>
                <Icon name="check" size={18} />
                {p}
              </li>
            ))}
          </ul>
          <a className="btn btn-ink btn-sm" href={bizcarePk.href} target="_blank" rel="noopener">
            Visit bizcare.pk <Icon name="arrow-up-right" size={18} className="out" />
          </a>
        </div>
      </article>
      <div className="webs">
        {web.map((w, i) => (
          <a key={w.name} className="web" href={w.href} target="_blank" rel="noopener" data-reveal style={d(i)}>
            <Shot src={w.image} alt={`${w.name} home page`} host={w.host} />
            <div className="web-body">
              <span className="org-line">
                <img src={w.orgLogo} alt="" width={20} height={20} />
                {w.org} · {w.role}
              </span>
              <h3>{w.name}</h3>
              <p>{w.text}</p>
              <div className="web-foot">
                <span>{w.tools.join(' · ')}</span>
                <b>
                  <Icon name="arrow-up-right" size={18} />
                </b>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export function Experience() {
  return (
    <ol className="xp">
      {jobs.map((j) => {
        const fill = j.logo.includes('/apps/') || j.logo.includes('bluex-tile');
        const inv = j.logo.includes('ieee') || j.logo.includes('fg-mark');
        return (
          <li key={j.org} className="job" data-reveal>
            <span className={`job-logo${fill ? ' fill' : ''}${inv ? ' inv' : ''}`}>
              <img src={j.logo} alt={`${j.org} logo`} width={64} height={64} loading="lazy" />
            </span>
            <div className="job-main">
              <div>
                <h3>{j.org}</h3>
                <p className="role">{j.role}</p>
              </div>
              {j.intro && <p className="intro">{j.intro}</p>}
              <ul>
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {j.links && (
                <div className="job-links">
                  {j.links.map((l) => (
                    <a key={l.href} className="chip-link" href={l.href} target="_blank" rel="noopener">
                      {l.label} <Icon name="arrow-up-right" size={14} />
                    </a>
                  ))}
                </div>
              )}
              {j.certificate && (
                <a className="cert-link" href={j.certificate.image} target="_blank" rel="noopener" data-zoom={`${j.org} ${j.certificate.label.toLowerCase()}`}>
                  <img src={j.certificate.image} alt={`${j.org} ${j.certificate.label}`} width={74} height={54} loading="lazy" />
                  <span>
                    <b>{j.certificate.label}</b>
                    <small>FG Tech, Fatima Group</small>
                  </span>
                </a>
              )}
            </div>
            <div className="job-side">
              <b className="num">{j.period}</b>
              <span>{j.type}</span>
              <span>{j.place}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function Achievements() {
  return (
    <ul className="achs">
      {achievements.map((a, i) => (
        <li key={a.event} className="ach" data-reveal style={d(i)}>
          <div className={`ach-top${a.photo ? ' has-photo' : ''}`} style={{ ['--tint' as string]: a.tint }}>
            {a.photo ? (
              <a className="ach-zoom" href={a.photo} target="_blank" rel="noopener" data-zoom={`${a.event}, ${a.title}`} aria-label={`View photo: ${a.event}`}>
                <img className="ach-photo" src={a.photo} alt={`${a.event}, ${a.title}`} loading="lazy" />
                <span className="zoom-hint" aria-hidden="true">
                  <Icon name="arrows-out" size={18} />
                </span>
              </a>
            ) : (
              <img className="ach-big-logo" src={a.logo} alt={`${a.org} logo`} loading="lazy" />
            )}
            <span className="ach-rank">{a.rank}</span>
            {a.photo && (
              <span className="ach-logo">
                <img src={a.logo} alt={`${a.org} logo`} loading="lazy" />
              </span>
            )}
          </div>
          <div className="ach-body">
            <span className="event">{a.event}</span>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
            <small>
              {a.org} · {a.date}
            </small>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function PlayAccount() {
  return (
    <div className="play-account" data-reveal>
      <div className="play-id">
        <span className="play-logo">
          <Brand name="googleplay" size={24} color="#fff" />
        </span>
        <div>
          <h3>My Google Play developer account</h3>
          <p>
            Published as <b>{playAccount.name}</b>. I design, build, release and support every app on it.
          </p>
        </div>
      </div>
      <a className="btn btn-ink btn-sm play-cta" href={playAccount.href} target="_blank" rel="noopener">
        View on Google Play <Icon name="arrow-up-right" size={18} className="out" />
      </a>
      <ul className="play-apps">
        {playAccount.apps.map((p) => (
          <li key={p.name}>
            <a href={p.href} target="_blank" rel="noopener">
              <img src={p.icon} alt="" width={48} height={48} loading="lazy" />
              <span>
                <b>{p.name}</b>
                <small>{p.text}</small>
              </span>
              <Icon name="arrow-up-right" size={16} className="play-go" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Education() {
  return (
    <ul className="edus">
      {education.map((e) => (
        <li key={e.school} className="edu" data-reveal>
          <span className="edu-logo">{e.logo ? <img src={e.logo} alt={`${e.school} logo`} loading="lazy" /> : <span>PD</span>}</span>
          <div>
            <h3>{e.school}</h3>
            <p className="deg">{e.degree}</p>
            <p className="when">
              {e.place} · {e.period}
            </p>
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Certificates({ limit }: { limit?: number }) {
  const list = limit ? certifications.slice(0, limit) : certifications;
  return (
    <ul className="certs">
      {list.map((c, i) => (
        <li key={c.id} style={{ display: 'grid' }}>
          <a className="cert" href={c.image} target="_blank" rel="noopener" data-zoom={`${c.name}, ${c.issuer}`} data-reveal style={d(i % 3)}>
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
  );
}

export function Stack() {
  return (
    <ul className="stack">
      {stack.map((t, i) => (
        <li key={t.name} className="tool" data-reveal style={d(i % 6)}>
          <Brand name={t.logo} size={24} color={t.color} />
          {t.name}
        </li>
      ))}
    </ul>
  );
}

export function Contact() {
  return (
    <section className="section band" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact">
        <div data-reveal>
          <h2 className="title" id="contact-title">
            Let’s build something people <span className="accent">use</span>.
          </h2>
          <p className="lead">An app, an AI product or a website. Tell me what it needs to do and I’ll tell you how I’d build it.</p>
          <div className="mail">
            <a href={`mailto:${me.email}`}>{me.email}</a>
            <CopyEmail email={me.email} />
          </div>
        </div>
        <div className="contact-side" data-reveal>
          <div className="row">
            <a className="btn btn-ink" href={`mailto:${me.email}`}>
              <Icon name="envelope-simple" size={20} /> Email Me
            </a>
            <a className="btn btn-line" href={me.links.linkedin} target="_blank" rel="noopener me">
              <Brand name="linkedin" size={18} /> LinkedIn
            </a>
            <a className="btn btn-line" href={me.links.github} target="_blank" rel="noopener me">
              <Brand name="github" size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
