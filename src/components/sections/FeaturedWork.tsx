"use client";

import { Maximize2 } from "lucide-react";
import { useState } from "react";
import { ImageLightbox, type LightboxImage } from "@/components/ui/ImageLightbox";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredWork, type FeaturedProject } from "@/data/featuredWork";

export function FeaturedWork() {
  return (
    <section className="featured-work" id="work">
      <div className="page-shell">
        <RevealOnScroll className="section-heading">
          <SectionLabel>Featured work</SectionLabel>
          <h2>Selected production work.</h2>
          <p>
            A closer look at shipped apps, AI-enabled products, business
            software, and integration work built for real workflows.
          </p>
        </RevealOnScroll>
      </div>
      {featuredWork.map((project, index) => (
        <FeaturedBand key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}

function FeaturedBand({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const imageFirst = project.imagePosition === "left";
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const images: LightboxImage[] =
    project.images?.map((image, imageIndex) => ({
      src: image,
      alt: `${project.name} screenshot ${imageIndex + 1}`,
      label: `${imageIndex + 1} of ${project.images?.length ?? 1}`,
    })) ?? [];
  const canViewImages = images.length > 0;

  return (
    <article className="featured-band">
      <div className={`page-shell featured-band-inner ${imageFirst ? "image-first" : ""}`}>
        <RevealOnScroll className="featured-copy" delay={0.05}>
          <p className="featured-category mono">{project.category}</p>
          <h3>{project.headline}</h3>
          <p className="featured-description">{project.description}</p>
          <span className="role-badge mono">{project.role}</span>
          <div className="featured-bullets">
            {project.bullets.map((bullet) => (
              <p key={bullet}>
                <span>·</span>
                {bullet}
              </p>
            ))}
          </div>
          <div className="tag-row">
            {project.stack.map((item) => (
              <span className="stack-tag mono" key={item}>
                {item}
              </span>
            ))}
          </div>
          {canViewImages ? (
            <div className="featured-links">
              <MagneticButton
                className="button button-primary ghost-hover featured-primary-cta"
                icon={<Maximize2 size={16} />}
                strength={0.22}
                onClick={() => {
                  setActiveIndex(0);
                  setViewerOpen(true);
                }}
              >
                View images
              </MagneticButton>
            </div>
          ) : null}
        </RevealOnScroll>
        <RevealOnScroll className="featured-visual-wrap" delay={0.14 + index * 0.03}>
          <ProjectVisual
            project={project}
            images={images}
            activeIndex={activeIndex}
            viewerOpen={viewerOpen}
            onThumbSelect={(imageIndex) => {
              setActiveIndex(imageIndex);
              setViewerOpen(true);
            }}
            onClose={() => setViewerOpen(false)}
          />
        </RevealOnScroll>
      </div>
    </article>
  );
}

function ProjectVisual({
  project,
  images,
  activeIndex,
  viewerOpen,
  onThumbSelect,
  onClose,
}: {
  project: FeaturedProject;
  images: LightboxImage[];
  activeIndex: number;
  viewerOpen: boolean;
  onThumbSelect: (imageIndex: number) => void;
  onClose: () => void;
}) {
  if (!project.image || images.length === 0) {
    return (
      <div className={`project-visual glass visual-${project.visual}`}>
        <div className="featured-placeholder">
          <div className="placeholder-device">
            <div className="placeholder-device-bar" />
            <h4>{project.placeholder?.title ?? project.name}</h4>
            <div className="placeholder-metrics">
              {(project.placeholder?.items ?? ["Workflow", "Reporting", "Mobile", "APIs"]).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="placeholder-panels" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-visual glass visual-${project.visual}`}>
      <div className="featured-image-frame">
        <img src={project.image} alt={`${project.name} interface preview`} loading="lazy" />
      </div>
      <div className="featured-thumb-row">
        {images.map((image, index) => (
          <button
            type="button"
            onClick={() => onThumbSelect(index)}
            key={image.src}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>
      <ImageLightbox
        images={images}
        initialIndex={activeIndex}
        open={viewerOpen}
        title={project.name}
        onClose={onClose}
      />
    </div>
  );
}
