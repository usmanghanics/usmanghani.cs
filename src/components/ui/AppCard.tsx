import { Apple, Play } from "lucide-react";
import type { App } from "@/data/apps";

type AppCardProps = {
  app: App;
};

export function AppCard({ app }: AppCardProps) {
  return (
    <article className="app-card solid-card">
      <div className={`app-card-visual tone-${app.visual.tone}`}>
        {app.featured ? <span className="featured-pill mono">Featured</span> : null}
        <div className="app-screenshot-stack">
          {app.screenshots.map((screenshot, index) => (
            <img
              src={screenshot}
              alt={`${app.name} screenshot ${index + 1}`}
              loading="lazy"
              key={screenshot}
            />
          ))}
        </div>
      </div>
      <div className="app-card-body">
        <div className="app-card-header">
          <img className="app-icon-img" src={app.icon} alt={`${app.name} icon`} loading="lazy" />
          <div>
            <h3>{app.name}</h3>
            <p>{app.tagline}</p>
          </div>
        </div>
        <p className="app-description">{app.description}</p>
        <div className="tag-row">
          {app.stack.map((item) => (
            <span className="stack-tag mono" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="store-row">
          {app.links.play ? (
            <a href={app.links.play} target="_blank" rel="noreferrer">
              <Play size={13} fill="currentColor" />
              Play Store
            </a>
          ) : null}
          {app.links.appStore ? (
            <a href={app.links.appStore} target="_blank" rel="noreferrer">
              <Apple size={13} />
              App Store
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
