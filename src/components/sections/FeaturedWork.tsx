"use client";

import { ArrowUpRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { AppStore } from "@/components/ui/AppStore";
import { GitHub } from "@/components/ui/GitHub";
import { GooglePlay } from "@/components/ui/GooglePlay";
import { ImageLightbox, type LightboxImage } from "@/components/ui/ImageLightbox";
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
          <div className="featured-links">
            {Object.entries(project.links).map(([label, url]) =>
              url ? (
                <a href={url} key={label} target="_blank" rel="noreferrer">
                  {getLinkIcon(label)}
                  {formatLinkLabel(label)}
                  <ArrowUpRight size={15} />
                </a>
              ) : null,
            )}
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="featured-visual-wrap" delay={0.14 + index * 0.03}>
          <ProjectVisual project={project} />
        </RevealOnScroll>
      </div>
    </article>
  );
}

function ProjectVisual({ project }: { project: FeaturedProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const images: LightboxImage[] =
    project.images?.map((image, index) => ({
      src: image,
      alt: `${project.name} screenshot ${index + 1}`,
      label: `${index + 1} of ${project.images?.length ?? 1}`,
    })) ?? [];

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
        <div className="featured-image-actions">
          <button
            type="button"
            onClick={() => {
              setActiveIndex(0);
              setViewerOpen(true);
            }}
          >
            View images
            <Maximize2 size={15} />
          </button>
          <span className="mono">{images.length} views</span>
        </div>
      </div>
      <div className="featured-thumb-row">
        {images.map((image, index) => (
          <button
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setViewerOpen(true);
            }}
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
        onClose={() => setViewerOpen(false)}
      />
    </div>
  );
}

function formatLinkLabel(label: string) {
  if (label === "github") return "GitHub";
  if (label === "playStore") return "Play Store";
  if (label === "appStore") return "App Store";
  return "Live";
}

function getLinkIcon(label: string) {
  if (label === "github") {
    return <GitHub className="brand-link-icon brand-link-icon-github" width={14} height={14} />;
  }

  if (label === "playStore") {
    return <GooglePlay className="brand-link-icon" width={14} height={14} />;
  }

  if (label === "appStore") {
    return <AppStore className="brand-link-icon" width={14} height={14} />;
  }

  return null;
}
