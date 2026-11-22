import type { Visual as V } from '@/data/work';
import { Trio } from './Phone';
import { Browser } from './Browser';
import { Flow } from './Flow';

export function Visual({ visual, big = false, eager = false }: { visual: V; big?: boolean; eager?: boolean }) {
  const cls = `case-visual${visual.type === 'phones' ? '' : ' center'}${big ? ' big-visual' : ''}`;
  return (
    <div className={cls} style={{ ['--tint' as string]: visual.tint }}>
      {visual.type === 'phones' && <Trio shots={visual.shots} eager={eager} />}
      {visual.type === 'diagram' && <Flow />}
      {visual.type === 'browser' && <Browser src={visual.src} alt={visual.alt} url={visual.url} eager={eager} />}
    </div>
  );
}
