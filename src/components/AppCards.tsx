import type { StoreApp } from '@/data/work';
import { Icon } from './Icon';
import { StoreLinks } from './Store';

export function AppCards({ apps }: { apps: StoreApp[] }) {
  return (
    <ul className="apps-grid">
      {apps.map((a, i) => (
        <li key={a.name} className="card app-card" data-reveal style={{ ['--delay' as string]: `${i * 0.08}s` }}>
          <header>
            <img src={a.icon} alt="" width={56} height={56} loading="lazy" />
            <div>
              <h3>{a.name}</h3>
              {a.rating ? (
                <span>
                  <Icon name="star" size={14} /> {a.rating} on Google Play
                </span>
              ) : (
                <span>On Google Play</span>
              )}
            </div>
          </header>
          <p>{a.text}</p>
          <StoreLinks play={a.play} appStore={a.appStore} web={a.web} name={a.name} />
        </li>
      ))}
    </ul>
  );
}
