import { ArrowUpRight } from "lucide-react";
import type { App } from "@/data/apps";
import { AppStore } from "@/components/ui/AppStore";
import { GooglePlay } from "@/components/ui/GooglePlay";
import { MagneticButton } from "@/components/ui/MagneticButton";

type AppCardProps = {
  app: App;
};

export function AppCard({ app }: AppCardProps) {
  return (
    <article className="app-card solid-card">
      <div className={`app-card-visual tone-${app.visual.tone}`}>
        <div className="app-screenshot-stack">
          {app.screenshots.map((screenshot, index) => (
            <div className="app-screenshot-shell" key={screenshot}>
              <img
                src={screenshot}
                alt={`${app.name} screenshot ${index + 1}`}
                loading="lazy"
              />
            </div>
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
            <MagneticButton
              href={app.links.play}
              className="button button-primary store-cta ghost-hover"
              external
              strength={0.22}
              icon={<ArrowUpRight size={16} />}
            >
              <>
                <GooglePlay className="google-play-icon" width={13} height={13} />
                Play Store
              </>
            </MagneticButton>
          ) : null}
          {app.links.appStore ? (
            <MagneticButton
              href={app.links.appStore}
              className="button button-primary store-cta ghost-hover"
              external
              strength={0.22}
              icon={<ArrowUpRight size={16} />}
            >
              <>
                <AppStore className="brand-store-icon" width={13} height={13} />
                App Store
              </>
            </MagneticButton>
          ) : null}
        </div>
      </div>
    </article>
  );
}
