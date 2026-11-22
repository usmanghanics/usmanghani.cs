import Link from 'next/link';
import type { Work } from '@/data/work';
import { Icon } from './Icon';
import { Visual } from './Visual';

/** One project on the home and work pages: the visual on one side, the story on the other. */
export function Case({ item, flip = false, headingLevel = 3 }: { item: Work; flip?: boolean; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <article className={`case${flip ? ' flip' : ''}`} data-reveal>
      <Link href={`/work/${item.slug}`} tabIndex={-1} aria-hidden="true">
        <Visual visual={item.visual} />
      </Link>
      <div className="case-copy">
        <p className="meta">
          <b>{item.name}</b>
          <span>{item.org}</span>
          <span>{item.period}</span>
        </p>
        <H className="h3">{item.title}</H>
        <p>{item.summary}</p>
        <dl className="facts" style={{ ['--cols' as string]: item.facts.length }}>
          {item.facts.map((f) => (
            <div key={f.label}>
              <dt className="num">{f.value}</dt>
              <dd>{f.label}</dd>
            </div>
          ))}
        </dl>
        {item.apps && item.slug !== 'snapcut' && (
          <div className="app-icons" aria-label="Apps in this project">
            {item.apps.map((a) => (
              <img key={a.name} src={a.icon} alt={a.name} title={a.name} width={44} height={44} loading="lazy" />
            ))}
          </div>
        )}
        <Link className="link" href={`/work/${item.slug}`}>
          <span>Read the case study</span>
          <Icon name="arrow-right" size={18} />
        </Link>
      </div>
    </article>
  );
}
