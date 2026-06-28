"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { ImageLightbox, type LightboxImage } from "@/components/ui/ImageLightbox";
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
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerTitle, setViewerTitle] = useState("");
  const [viewerImages, setViewerImages] = useState<LightboxImage[]>([]);

  function handleViewImages({ title, images }: { title: string; images: string[] }) {
    const usable = images.slice(0, 3);
    const lightboxImages: LightboxImage[] = usable.map((src, i) => ({
      src,
      alt: `${title} screenshot ${i + 1}`,
      label: `${i + 1} of ${usable.length}`,
    }));
    setViewerTitle(title);
    setViewerImages(lightboxImages);
    setActiveIndex(0);
    setViewerOpen(true);
  }

  return (
    <>
      <Nav />
      <main className="subpage page-shell" id="top">
        <div className="subpage-hero">
          <SectionLabel>All projects</SectionLabel>
          <h1>Project archive.</h1>
          <p>
            Mobile apps, web utilities, automation systems, and academic
            projects grouped by type.
          </p>
        </div>
        {groups.map((group) => {
          const groupProjects = projects.filter((project) => project.type === group.type);
          // Only pass onViewImages for non-mobile, non-automation types (those have images worth lightboxing)
          const supportsLightbox = group.type !== "mobile" && group.type !== "automation";
          return (
            <section className="subpage-group" key={group.type}>
              <h2 className="app-group-title mono">{group.label}</h2>
              <div className="compact-grid all-grid">
                {groupProjects.map((project) => (
                  <ProjectCard
                    project={project}
                    key={project.id}
                    onViewImages={supportsLightbox ? handleViewImages : undefined}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <ImageLightbox
        images={viewerImages}
        initialIndex={activeIndex}
        open={viewerOpen}
        title={viewerTitle}
        onClose={() => setViewerOpen(false)}
      />
      <Footer />
    </>
  );
}
