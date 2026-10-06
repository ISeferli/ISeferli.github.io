import type { ProjectKind, StoryBlock, ImageAsset } from './types';

export const KIND_LABELS: Record<ProjectKind, string> = {
  professional: 'Professional',
  jam: 'Game Jams',
  personal: 'Personal project',
};

/** Prefix a path inside /public so it works wherever the site is hosted. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** Every image in a story, in reading order (used by the lightbox). */
export function collectStoryImages(blocks: StoryBlock[]): ImageAsset[] {
  return blocks.flatMap((b) => {
    if (b.type === 'image') return [b.image];
    if (b.type === 'gallery') return b.images;
    return [];
  });
}
