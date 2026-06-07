import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="section-pad page-shell experience-section" id="experience">
      <RevealOnScroll className="section-heading">
        <SectionLabel>Experience & education</SectionLabel>
        <h2>A practical path through product work, AI systems, and CS foundations.</h2>
      </RevealOnScroll>
      <div className="timeline">
        {experience.map((item, index) => (
          <RevealOnScroll className="timeline-item" delay={index * 0.04} key={`${item.period}-${item.title}`}>
            <div className={`timeline-dot ${item.current ? "current" : ""}`} />
            <div className="timeline-card solid-card">
              <p className="timeline-period mono">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
