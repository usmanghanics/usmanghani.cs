import { Button } from "@/components/ui/Button";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  const featuredCertifications = certifications.filter((cert) => cert.featured).slice(0, 6);

  return (
    <section className="section-pad page-shell certifications-preview">
      <RevealOnScroll className="section-heading section-heading-row">
        <div>
          <SectionLabel>Certifications</SectionLabel>
          <h2>Selected certifications by technical area.</h2>
          <p>
            A compact view of certifications across AI, mobile, web,
            automation, data, business, and security.
          </p>
        </div>
        <Button href="/certifications" variant="ghost">
          View all
        </Button>
      </RevealOnScroll>
      <div className="compact-grid certifications-grid">
        {featuredCertifications.map((cert, index) => (
          <RevealOnScroll delay={index * 0.04} key={cert.id}>
            <CertificationCard certification={cert} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
