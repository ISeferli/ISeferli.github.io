import type { ReactNode } from 'react';
import type { ImageAsset, StoryBlock } from '../types';
import { slugify } from '../utils';
import { SmartImage } from './SmartImage';

interface Props {
  blocks: StoryBlock[];
  onOpenImage: (image: ImageAsset) => void;
}

/** Turns **bold** and `code` in paragraph text into elements. */
function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>;
    return part;
  });
}

export function StoryRenderer({ blocks, onOpenImage }: Props) {
  return (
    <div className="story">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h3 key={i} id={slugify(block.text)} className="story-heading">
                {block.text}
              </h3>
            );
          case 'paragraph':
            return <p key={i}>{renderInline(block.text)}</p>;
          case 'list':
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case 'quote':
            return (
              <blockquote key={i} className="story-quote">
                <p>{block.text}</p>
                {block.cite && <cite>{block.cite}</cite>}
              </blockquote>
            );
          case 'image':
            return (
              <figure key={i} className={`story-figure is-${block.layout ?? 'full'}`}>
                <SmartImage image={block.image} onClick={() => onOpenImage(block.image)} />
                {block.image.caption && <figcaption>{block.image.caption}</figcaption>}
              </figure>
            );
          case 'gallery':
            return (
              <div key={i} className={`story-gallery cols-${Math.min(block.images.length, 3)}`}>
                {block.images.map((img) => (
                  <figure key={img.src}>
                    <SmartImage image={img} onClick={() => onOpenImage(img)} />
                    {img.caption && <figcaption>{img.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            );
          case 'video':
            return (
              <div key={i} className="story-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${block.youtubeId}`}
                  title={block.title}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
        }
      })}
    </div>
  );
}
