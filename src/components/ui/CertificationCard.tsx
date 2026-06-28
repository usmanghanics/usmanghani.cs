"use client";

import { useState } from "react";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import type { Certification } from "@/data/certifications";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <>
      <button
        className="grid-card certification-card solid-card"
        type="button"
        onClick={() => setViewerOpen(true)}
        aria-label={`View full certificate: ${certification.name}`}
      >
        <div className="grid-card-media certificate-media">
          <img
            src={certification.image}
            alt={`${certification.name} certificate`}
            loading="lazy"
          />
          <span className="cert-category mono">{certification.category}</span>
        </div>
        <div className="grid-card-body">
          <p className="cert-issuer mono">{certification.issuer}</p>
          <h3>{certification.name}</h3>
          <span>{certification.date}</span>
        </div>
      </button>
      <ImageLightbox
        images={[
          {
            src: certification.image,
            alt: `${certification.name} certificate`,
            label: certification.issuer,
          },
        ]}
        fit="certificate"
        open={viewerOpen}
        title={certification.name}
        onClose={() => setViewerOpen(false)}
      />
    </>
  );
}
