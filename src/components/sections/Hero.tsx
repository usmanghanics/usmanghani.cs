import { Button } from "@/components/ui/Button";
import { DeviceFrame } from "@/components/ui/DeviceFrame";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { apps } from "@/data/apps";
import { profile, proofPoints } from "@/data/profile";

export function Hero() {
  const heroApp = apps.find((item) => item.id === "makki-autocare") ?? apps[0];

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
        <div className="hero-visual-copy">
          <p className="hero-visual-label mono">Featured app</p>
          <h2>{heroApp.name}</h2>
          <p className="hero-visual-description">{heroApp.tagline}</p>
          <div className="hero-visual-meta mono">
            <span>{heroApp.type === "commercial" ? "Commercial build" : "Personal product"}</span>
            <span>{heroApp.stack.slice(0, 2).join(" + ")}</span>
          </div>
        </div>
        <DeviceFrame app={heroApp} size="large" className="hero-device hero-device-featured" />
      </RevealOnScroll>
    </section>
  );
}
