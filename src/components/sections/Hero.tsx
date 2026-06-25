import { Button } from "@/components/ui/Button";
import { HeroPhoneStage } from "@/components/sections/HeroPhoneStage";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { apps } from "@/data/apps";
import { profile } from "@/data/profile";

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
          <Button href="#work" variant="ghost" icon="down">
            View Work
          </Button>
          <MagneticButton
            href={profile.resumeUrl}
            className="button button-primary ghost-hover"
            external
          >
            Download Resume
          </MagneticButton>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.12}>
        <HeroPhoneStage apps={[heroApps[1], heroApps[0], heroApps[2]]} />
      </RevealOnScroll>
    </section>
  );
}
