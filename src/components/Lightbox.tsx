import { useCallback, useEffect, useRef } from 'react';
import type { ImageAsset } from '../types';
import { SmartImage } from './SmartImage';

interface Props {
  images: ImageAsset[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, go, onClose]);

  if (index === null) return null;
  const image = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <SmartImage key={image.src} image={image} loading="eager" />
        <figcaption>
          <span>{image.caption ?? image.alt}</span>
          {images.length > 1 && (
            <span className="lightbox-count">
              {index + 1} of {images.length}
            </span>
          )}
        </figcaption>
      </figure>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox-btn prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox-btn next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            ›
          </button>
        </>
      )}
      <button ref={closeRef} type="button" className="lightbox-btn close" aria-label="Close" onClick={onClose}>
        ×
      </button>
    </div>
  );
}
