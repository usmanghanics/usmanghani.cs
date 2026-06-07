import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects, type Project } from "@/data/projects";

const groups: Array<{ label: string; type: Project["type"] }> = [
  { label: "Mobile Apps", type: "mobile" },
  { label: "Web & Enterprise", type: "web" },
  { label: "Automation", type: "automation" },
  { label: "Academic Labs", type: "academic" },
];

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="subpage page-shell" id="top">
        <div className="subpage-hero">
          <SectionLabel>All projects</SectionLabel>
          <h1>Project work, sorted by purpose.</h1>
          <p>
            A broader view of mobile apps, AI product work, automation systems,
            web utilities, and academic engineering labs.
          </p>
        </div>
        {groups.map((group) => {
          const groupProjects = projects.filter((project) => project.type === group.type);
          return (
            <section className="subpage-group" key={group.type}>
              <h2 className="app-group-title mono">{group.label}</h2>
              <div className="compact-grid all-grid">
                {groupProjects.map((project) => (
                  <ProjectCard project={project} key={project.id} />
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
