import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { certifications, type Certification } from "@/data/certifications";

const categories: Certification["category"][] = [
  "AI",
  "Mobile",
  "Web",
  "Automation",
  "Data",
  "Business",
  "Security",
];

export default function CertificationsPage() {
  return (
    <>
      <Nav />
      <main className="subpage page-shell" id="top">
        <div className="subpage-hero">
          <SectionLabel>All certifications</SectionLabel>
          <h1>Verified learning, grouped by signal.</h1>
          <p>
            Certificates across AI, mobile, web, automation, data, business,
            and security, grouped for quick review. Open any card to inspect
            the full certificate.
          </p>
        </div>
        {categories.map((category) => {
          const categoryCerts = certifications.filter((cert) => cert.category === category);
          if (categoryCerts.length === 0) return null;

          return (
            <section className="subpage-group" key={category}>
              <h2 className="app-group-title mono">{category}</h2>
              <div className="compact-grid certifications-grid all-grid">
                {categoryCerts.map((cert) => (
                  <CertificationCard certification={cert} key={cert.id} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
