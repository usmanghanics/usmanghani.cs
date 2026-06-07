import { Button } from "@/components/ui/Button";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { apps } from "@/data/apps";
import { profile, proofPoints } from "@/data/profile";

export function Hero() {
  const heroApps = ["makki-autocare", "bizcare", "snapcut"].map((id) => {
    const app = apps.find((item) => item.id === id);
    return app ?? apps[0];
  });

  return (
    <section className="hero page-shell" id="top">
      <RevealOnScroll className="hero-copy">
        <p className="hero-eyebrow mono">{profile.eyebrow}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-bio">{profile.bio}</p>
        <div className="hero-actions">
          <Button href="#work" icon="down">
            View Work
          </Button>
          <Button href={profile.resumeUrl} variant="ghost" external>
            Download Resume
          </Button>
        </div>
        <div className="hero-proof">
          {proofPoints.slice(0, 3).map((point) => (
            <span className="glass mono" key={point}>
              {point}
            </span>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="hero-visual" delay={0.12}>
        <DeviceFrame app={heroApps[1]} size="large" className="hero-device hero-device-left" />
        <DeviceFrame app={heroApps[0]} size="large" className="hero-device hero-device-main" />
        <DeviceFrame app={heroApps[2]} size="large" className="hero-device hero-device-right" />
      </RevealOnScroll>
    </section>
  );
}
