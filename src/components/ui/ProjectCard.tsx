import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const images = project.images ?? (project.image ? [project.image] : []);
  const tone =
    project.type === "mobile"
      ? "blue"
      : project.type === "web"
        ? "green"
        : project.type === "automation"
          ? "red"
          : "coral";
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Build request: ${project.name}`,
  )}&body=${encodeURIComponent(
    `Hi Usman,\n\nI’d like to request a build/demo for: ${project.name}\n\nThanks!`,
  )}`;

  return (
    <article className="grid-card project-grid-card solid-card">
      <div
        className={`grid-card-media project-card-media ${
          images.length === 0 && project.type === "automation" ? "automation-media" : `tone-${tone}`
        }`}
      >
        {images.length > 0 ? (
          <ProjectImageStack images={images} name={project.name} />
        ) : (
          <AutomationVisual name={project.name} />
        )}
      </div>
      <div className="grid-card-body">
        <div className="grid-card-title-row">
          <h3>{project.name}</h3>
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
        <div className="store-row">
          <MagneticButton
            href={project.link ?? mailto}
            className="button button-primary ghost-hover"
            strength={0.22}
            external={Boolean(project.link)}
            icon={<ArrowUpRight size={16} />}
          >
            {project.link ? "View project" : project.type === "mobile" ? "Request APK" : "Request access"}
          </MagneticButton>
        </div>
      </div>
    </article>
  );
}

function ProjectImageStack({ images, name }: { images: string[]; name: string }) {
  const mainImage = images[0];
  if (!mainImage) return null;
  const stackImages = Array.from({ length: 3 }, (_, index) => images[index % images.length] ?? mainImage);

  return (
    <div className="app-screenshot-stack project-screenshot-stack">
      {stackImages.map((image, index) => (
        <div className="app-screenshot-shell project-screenshot-shell" key={`${image}-${index}`}>
          <img src={image} alt={`${name} screenshot ${index + 1}`} loading="lazy" />
        </div>
      ))}
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
