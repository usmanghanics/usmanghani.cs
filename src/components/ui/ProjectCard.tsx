"use client";

import { ArrowUpRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { MagneticButton } from "@/components/ui/MagneticButton";

type ProjectCardProps = {
  project: Project;
  onViewImages?: (payload: { title: string; images: string[] }) => void;
};

export function ProjectCard({ project, onViewImages }: ProjectCardProps) {
  const images = project.images ?? (project.image ? [project.image] : []);
  const tone =
    project.type === "mobile"
      ? "blue"
      : project.type === "web"
        ? "green"
        : project.type === "automation"
          ? "red"
          : "coral";
  const isMobileLayout = project.type === "mobile";

  return (
    <article className="grid-card project-grid-card solid-card">
      <div
        className={`grid-card-media project-card-media ${
          images.length === 0 && project.type === "automation" ? "automation-media" : `tone-${tone}`
        }`}
      >
        {images.length > 0 ? (
          isMobileLayout ? (
            <MobileScreenshotStack images={images} name={project.name} />
          ) : (
            <DesktopImageStack images={images} name={project.name} />
          )
        ) : (
          <AutomationVisual name={project.name} />
        )}
      </div>
      <div className="grid-card-body">
        <div className="grid-card-title-row">
          <h3>{project.name}</h3>
          {!isMobileLayout && images.length > 1 && onViewImages ? (
            <ViewImagesButton
              onClick={() => onViewImages({ title: project.name, images })}
            />
          ) : null}
        </div>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.stack.map((item) => (
            <span className="stack-tag mono" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="store-row">
          <DisabledHint message="Link coming soon">
            <button className="button button-primary ghost-hover button-disabled" type="button" aria-disabled="true">
              View project
              <ArrowUpRight size={16} />
            </button>
          </DisabledHint>
        </div>
      </div>
    </article>
  );
}

function ViewImagesButton({ onClick }: { onClick: () => void }) {
  return (
    <MagneticButton
      className="button button-primary ghost-hover project-view-images"
      icon={<Maximize2 size={16} />}
      strength={0.2}
      onClick={onClick}
    >
      View images
    </MagneticButton>
  );
}

function DisabledHint({ children, message }: { children: React.ReactNode; message: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className={`disabled-hint ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => {
        setOpen(true);
        window.setTimeout(() => setOpen(false), 1400);
      }}
    >
      {children}
      <span className="disabled-hint-toast glass mono" role="status">
        {message}
      </span>
    </span>
  );
}

function MobileScreenshotStack({ images, name }: { images: string[]; name: string }) {
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

function DesktopImageStack({ images, name }: { images: string[]; name: string }) {
  const mainImage = images[0];
  if (!mainImage) return null;
  const thumbImages = Array.from({ length: 2 }, (_, index) => images[(index + 1) % images.length] ?? mainImage);

  return (
    <div className="project-image-stack">
      <img className="project-image-main" src={mainImage} alt={`${name} preview`} loading="lazy" />
      <div className="project-card-thumbs" aria-hidden="true">
        {thumbImages.map((image, index) => (
          <img
            src={image}
            alt=""
            loading="lazy"
            key={`${image}-${index}`}
            style={{ zIndex: thumbImages.length - index }}
          />
        ))}
      </div>
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
