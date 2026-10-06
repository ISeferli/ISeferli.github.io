import { useState } from 'react';
import type { ImageAsset } from '../types';

interface Props {
  image: ImageAsset;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

/** An image that shows a labelled placeholder until you add the real file. */
export function SmartImage({ image, className = '', loading = 'lazy', onClick }: Props) {
  const [failed, setFailed] = useState(false);

  const content = failed ? (
    <div className="img-fallback" role="img" aria-label={image.alt}>
      <span>{image.alt}</span>
    </div>
  ) : (
    <img src={image.src} alt={image.alt} loading={loading} onError={() => setFailed(true)} />
  );

  if (onClick) {
    return (
      <button
        type="button"
        className={`img-frame is-zoomable ${className}`}
        onClick={onClick}
        aria-label={`Enlarge image: ${image.alt}`}
      >
        {content}
      </button>
    );
  }
  return <div className={`img-frame ${className}`}>{content}</div>;
}
