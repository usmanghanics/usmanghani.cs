"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
  label?: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  initialIndex?: number;
  open: boolean;
  title: string;
  onClose: () => void;
};

export function ImageLightbox({
  images,
  initialIndex = 0,
  open,
  title,
  onClose,
}: ImageLightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [viewport, setViewport] = useState({ width: 1024, height: 768 });
  const activeImage = images[activeIndex];
  const hasMultiple = images.length > 1;
  const hasLimitedSpace = viewport.width < 390 || viewport.height < 540;

  useEffect(() => {
    if (open) setActiveIndex(initialIndex);
  }, [initialIndex, open]);

  useEffect(() => {
    if (!open) return;

    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && hasMultiple) {
        setActiveIndex((current) => (current + 1) % images.length);
      }
      if (event.key === "ArrowLeft" && hasMultiple) {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    const originalOverflow = document.body.style.overflow;
    updateViewport();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", updateViewport);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", updateViewport);
    };
  }, [hasMultiple, images.length, onClose, open]);

  if (!open || !activeImage) return null;

  return (
    <div
      className={`image-lightbox ${hasLimitedSpace ? "limited-space" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button className="image-lightbox-backdrop" type="button" onClick={onClose} aria-label="Close image viewer" />
      <div className="image-lightbox-dialog">
        <div className="image-lightbox-topbar">
          <div>
            <p className="mono">{title}</p>
            <span>{activeImage.label ?? `${activeIndex + 1} of ${images.length}`}</span>
          </div>
          <button className="icon-button lightbox-close" type="button" onClick={onClose} aria-label="Close image viewer">
            <X size={18} />
          </button>
        </div>

        {hasLimitedSpace ? (
          <div className="viewer-toast" role="status">
            Limited screen space. Rotate your device or open on a larger screen for a clearer view.
          </div>
        ) : null}

        <div className="image-lightbox-stage">
          {hasMultiple ? (
            <button
              className="lightbox-nav lightbox-prev"
              type="button"
              onClick={() => setActiveIndex((current) => (current - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
          ) : null}
          <img src={activeImage.src} alt={activeImage.alt} />
          {hasMultiple ? (
            <button
              className="lightbox-nav lightbox-next"
              type="button"
              onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          ) : null}
        </div>

        {hasMultiple ? (
          <div className="image-lightbox-thumbs">
            {images.map((image, index) => (
              <button
                className={index === activeIndex ? "active" : ""}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                key={image.src}
              >
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
