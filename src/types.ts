export type ProjectKind = 'professional' | 'jam' | 'personal';

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * The development story is a list of blocks, so text and images can be
 * mixed in any order. Paragraph text supports **bold** and `code`.
 */
export type StoryBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; image: ImageAsset; layout?: 'full' | 'left' | 'right' }
  | { type: 'gallery'; images: ImageAsset[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'list'; items: string[] }
  | { type: 'video'; youtubeId: string; title: string };

export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface GameJamInfo {
  name: string;
  theme?: string;
  result?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  kind: ProjectKind;
  year: number;
  cover: ImageAsset;
  category: string;
  projectType: string;
  duration?: string;
  platforms?: string[];
  techStack: string[];
  roles: string[];
  jam?: GameJamInfo;
  links: ProjectLink[];
  story: StoryBlock[];
  gallery?: ImageAsset[];
}
