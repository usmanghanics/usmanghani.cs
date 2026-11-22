import type { CSSProperties } from 'react';
import type { Shot } from '@/data/work';

/** A real app screen inside the glass-rim phone frame. */
export function Phone({
  shot,
  className,
  eager = false,
  style,
}: {
  shot: Shot;
  className?: string;
  eager?: boolean;
  style?: CSSProperties;
}) {
  return (
    <figure className={`phone${className ? ` ${className}` : ''}`} style={{ ...style, ['--ratio' as string]: shot.ratio }}>
      <div className="phone-screen">
        <img
          src={shot.src}
          alt={shot.alt}
          width={540}
          height={Math.round(540 / shot.ratio)}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : undefined}
        />
      </div>
    </figure>
  );
}

export function Trio({ shots, eager = false }: { shots: Shot[]; eager?: boolean }) {
  return (
    <div className="trio">
      {shots.slice(0, 3).map((s) => (
        <Phone key={s.src} shot={s} eager={eager} />
      ))}
    </div>
  );
}
