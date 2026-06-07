import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects, type Project } from "@/data/projects";

const groups: Array<{ label: string; type: Project["type"] }> = [
  { label: "Mobile Apps", type: "mobile" },
  { label: "Web & Enterprise", type: "web" },
  { label: "Automation", type: "automation" },
  { label: "Academic Labs", type: "academic" },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="section-pad page-shell projects-section">
      <RevealOnScroll className="section-heading section-heading-row">
        <div>
          <SectionLabel>Selected projects</SectionLabel>
          <h2>Supporting work across mobile, AI, web, and automation.</h2>
          <p>
            Android apps, web utilities, workflow automation, and academic labs
            that round out the production work shown above.
          </p>
        </div>
        <Button href="/projects" variant="ghost">
          View all
        </Button>
      </RevealOnScroll>

      <div className="compact-grid project-preview-grid">
        {featuredProjects.map((project, index) => (
          <RevealOnScroll delay={index * 0.05} key={project.id}>
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>

      <div className="project-list">
        {groups.map((group) => {
          const groupProjects = projects.filter((project) => project.type === group.type);
          return (
            <div className="project-group" key={group.type}>
              <h3 className="project-group-title mono">{group.label}</h3>
              {groupProjects.map((project, index) => (
                <RevealOnScroll delay={index * 0.03} key={project.id}>
                  <ProjectRow project={project} />
                </RevealOnScroll>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const content = (
    <>
      <div>
        <div className="project-row-top">
          <h4>{project.name}</h4>
          <span className={`type-badge mono type-${project.type}`}>{project.type}</span>
        </div>
        <p>{project.description}</p>
        <span className="project-role mono">{project.role}</span>
      </div>
      <div className="project-row-meta">
        <div className="tag-row">
          {project.stack.map((item) => (
            <span className="stack-tag mono" key={item}>
              {item}
            </span>
          ))}
        </div>
        {project.link ? <ArrowUpRight size={17} /> : null}
      </div>
    </>
  );

  if (project.link) {
    return (
      <a className="project-row" href={project.link} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <div className="project-row">{content}</div>;
}
