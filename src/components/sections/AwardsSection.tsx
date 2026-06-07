import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { awards } from "@/data/awards";

export function AwardsSection() {
  return (
    <section className="section-pad page-shell awards-section">
      <RevealOnScroll className="section-heading">
        <SectionLabel>Awards</SectionLabel>
        <h2>Programming results and academic recognition.</h2>
      </RevealOnScroll>
      <div className="awards-grid">
        {awards.map((award, index) => (
          <RevealOnScroll className={`award-card award-${award.tone}`} delay={index * 0.06} key={award.event}>
            <p className="award-place mono">{award.place}</p>
            <h3>{award.title}</h3>
            <p>{award.event}</p>
            <span>{award.organization}</span>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
