import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stackGroups } from "@/data/stack";

export function StackSection() {
  return (
    <section className="section-pad page-shell stack-section" id="stack">
      <RevealOnScroll className="section-heading">
        <SectionLabel>Stack</SectionLabel>
        <h2>Tools grouped by the work they help me ship.</h2>
      </RevealOnScroll>
      <div className="stack-list">
        {stackGroups.map((group, index) => (
          <RevealOnScroll className="stack-group" delay={index * 0.04} key={group.title}>
            <h3 className="mono">{group.title}</h3>
            <div className="tag-row">
              {group.items.map((item) => (
                <span className="stack-tag stack-tag-large mono" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
