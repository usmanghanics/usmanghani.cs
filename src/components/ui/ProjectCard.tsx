import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const images = project.images ?? (project.image ? [project.image] : []);
  const content = (
    <>
      <div className={`grid-card-media ${project.type === "automation" ? "automation-media" : ""}`}>
        {images.length > 0 ? (
          <ProjectImageStack images={images} name={project.name} />
        ) : (
          <AutomationVisual name={project.name} />
        )}
        <span className={`type-badge mono type-${project.type}`}>{project.type}</span>
      </div>
      <div className="grid-card-body">
        <div className="grid-card-title-row">
          <h3>{project.name}</h3>
          {project.link ? <ArrowUpRight size={16} /> : null}
        </div>
        <p>{project.description}</p>
        <span className="project-role mono">{project.role}</span>
        <div className="tag-row">
          {project.stack.map((item) => (
            <span className="stack-tag mono" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        className="grid-card project-grid-card solid-card"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="grid-card project-grid-card solid-card">
      {content}
    </article>
  );
}

function ProjectImageStack({ images, name }: { images: string[]; name: string }) {
  const visibleImages = images.slice(0, 3);
  const [mainImage, ...thumbs] = visibleImages;

  if (!mainImage) return null;

  return (
    <div className="project-image-stack">
      <img
        className="project-image-main"
        src={mainImage}
        alt={`${name} screenshot 1`}
        loading="lazy"
      />
      {thumbs.length > 0 ? (
        <div className="project-card-thumbs" aria-hidden="true">
          {thumbs.map((image, index) => (
            <img
              src={image}
              alt=""
              loading="lazy"
              key={image}
              style={{ zIndex: thumbs.length - index }}
            />
          ))}
        </div>
      ) : null}
      {visibleImages.length > 1 ? (
        <span className="project-image-count mono">{visibleImages.length} views</span>
      ) : null}
    </div>
  );
}

function AutomationVisual({ name }: { name: string }) {
  return (
    <div className="automation-visual" aria-label={`${name} workflow visual`}>
      <span />
      <span />
      <span />
      <div className="automation-line" />
    </div>
  );
}
