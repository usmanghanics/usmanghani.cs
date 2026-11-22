import Link from 'next/link';
import { awards, education, jobs, skills } from '@/data/site';
import { labs, sites } from '@/data/work';
import { Browser } from './Browser';
import { Icon } from './Icon';

export function Sites() {
  return (
    <ul className="sites">
      {sites.map((s, i) => (
        <li key={s.name} data-reveal style={{ ['--delay' as string]: `${i * 0.08}s` }}>
          <a className="site-card" href={s.href} target="_blank" rel="noopener">
            <Browser src={s.image} alt={`${s.name} home page`} url={s.href.replace(/^https:\/\//, '').replace(/\/$/, '')} />
            <div className="site-text">
              <div>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </div>
              <Icon name="arrow-up-right" size={22} />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Labs({ limit }: { limit?: number }) {
  return (
    <ul className="labs">
      {labs.slice(0, limit ?? labs.length).map((l) => (
        <li key={l.name} className="lab" data-reveal>
          <h3>
            {l.href ? (
              <a href={l.href} target="_blank" rel="noopener" className="link">
                <span>{l.name}</span>
              </a>
            ) : (
              l.name
            )}
            {l.status && <span className="tag">{l.status}</span>}
          </h3>
          <p>{l.text}</p>
          <span className="muted">{l.stack}</span>
        </li>
      ))}
    </ul>
  );
}

export function Jobs() {
  return (
    <ol className="jobs">
      {jobs.map((j) => (
        <li key={j.org} className="job" data-reveal>
          <div>
            <h3>
              {j.href ? (
                <a href={j.href} target="_blank" rel="noopener">
                  {j.org} <Icon name="arrow-up-right" size={16} />
                </a>
              ) : (
                j.org
              )}
            </h3>
            <p className="role">{j.role}</p>
          </div>
          <p className="period num">{j.period}</p>
          <p className="text">{j.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function EduAwards() {
  return (
    <div className="mini-lists">
      <div>
        <h3>Education</h3>
        <ul>
          {education.map((e) => (
            <li key={e.school}>
              <span>
                <b style={{ color: 'var(--ink)' }}>{e.what}</b>
                <small>
                  {e.school} · {e.period}
                </small>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Awards</h3>
        <ul>
          {awards.map((a) => (
            <li key={a.title}>
              <b>{a.place}</b>
              <span>
                {a.title}
                <small>
                  {a.where}
                  {a.year && ` · ${a.year}`}
                </small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <ul className="skills">
      {skills.map((s, i) => (
        <li key={s.group} className="card skill" data-reveal style={{ ['--delay' as string]: `${i * 0.06}s` }}>
          <h3>{s.group}</h3>
          <ul>
            {s.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="link" href={href}>
      <span>{children}</span>
      <Icon name="arrow-right" size={18} />
    </Link>
  );
}
