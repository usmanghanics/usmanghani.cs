import { AppCard } from "@/components/ui/AppCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { apps } from "@/data/apps";

export function AppsSection() {
  const commercialApps = apps.filter((app) => app.type === "commercial");
  const personalApps = apps.filter((app) => app.type === "personal");

  return (
    <section className="section-pad page-shell" id="apps">
      <RevealOnScroll className="section-heading">
        <SectionLabel>Apps in production</SectionLabel>
        <h2>Published mobile apps across client and personal work.</h2>
        <p>
          Commercial Android and iOS products built with BizCare Software
          Solutions, plus independent Android utilities published through
          BlueX Software Solutions.
        </p>
      </RevealOnScroll>

      <AppGroup title="Commercial apps - BizCare Software Solutions" apps={commercialApps} />
      <AppGroup title="Personal apps - BlueX Software Solutions" apps={personalApps} />
    </section>
  );
}

function AppGroup({
  title,
  apps: groupApps,
}: {
  title: string;
  apps: typeof apps;
}) {
  return (
    <div className="app-group">
      <h3 className="app-group-title mono">{title}</h3>
      <div className="app-grid">
        {groupApps.map((app, index) => (
          <RevealOnScroll key={app.id} delay={index * 0.06}>
            <AppCard app={app} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
