"use client";

import { useState } from "react";
import { ImageLightbox, type LightboxImage } from "@/components/ui/ImageLightbox";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerTitle, setViewerTitle] = useState("");
  const [viewerImages, setViewerImages] = useState<LightboxImage[]>([]);

  return (
    <section className="section-pad page-shell projects-section">
      <RevealOnScroll className="section-heading section-heading-row">
        <div>
          <SectionLabel>Academic & Personal Projects</SectionLabel>
          <h2>Additional work across mobile, web, and automation.</h2>
          <p>
            Focused builds that show supporting skills beyond the published
            apps and featured production work.
          </p>
        </div>
        <Button href="/projects" variant="ghost">
          View all
        </Button>
      </RevealOnScroll>

      <div className="compact-grid project-preview-grid">
        {featuredProjects.map((project, index) => (
          <RevealOnScroll delay={index * 0.05} key={project.id}>
            <ProjectCard
              project={project}
              onViewImages={({ title, images }) => {
                const usable = images.slice(0, 3);
                const lightboxImages: LightboxImage[] = usable.map((src, imageIndex) => ({
                  src,
                  alt: `${title} screenshot ${imageIndex + 1}`,
                  label: `${imageIndex + 1} of ${usable.length}`,
                }));
                setViewerTitle(title);
                setViewerImages(lightboxImages);
                setActiveIndex(0);
                setViewerOpen(true);
              }}
            />
          </RevealOnScroll>
        ))}
      </div>
      <ImageLightbox
        images={viewerImages}
        initialIndex={activeIndex}
        open={viewerOpen}
        title={viewerTitle}
        onClose={() => setViewerOpen(false)}
      />
    </section>
  );
}
