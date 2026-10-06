import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { MetadataPanel } from '../components/MetadataPanel';
import { StoryRenderer } from '../components/StoryRenderer';
import { SmartImage } from '../components/SmartImage';
import { Lightbox } from '../components/Lightbox';
import { KIND_LABELS, collectStoryImages, slugify } from '../utils';
import type { ImageAsset } from '../types';

export function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Cover, story images and extra screenshots all open in one lightbox sequence
  const allImages = useMemo<ImageAsset[]>(
    () => (project ? [project.cover, ...collectStoryImages(project.story), ...(project.gallery ?? [])] : []),
    [project],
  );

  if (!project) {
    return (
      <div className="container not-found">
        <h1>Project not found</h1>
        <Link to="/">Go to all projects</Link>
      </div>
    );
  }

  const open = (image: ImageAsset) => setLightboxIndex(allImages.indexOf(image));
  const headings = project.story.filter((b) => b.type === 'heading').map((b) => (b as { text: string }).text);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="container">
      <Link to="/" className="back-link">
        ← All projects
      </Link>

      <header className="project-header">
        <p className="project-kind">
          {project.jam ? `${KIND_LABELS.jam}, ${project.jam.name}` : KIND_LABELS[project.kind]}, {project.year}
        </p>
        <h1>{project.title}</h1>
        <p className="tagline">{project.tagline}</p>
      </header>

      <div className="project-layout">
        <div className="project-main">
          <SmartImage image={project.cover} className="cover" loading="eager" onClick={() => open(project.cover)} />

          <h2 className="story-title">Development story</h2>
          <StoryRenderer blocks={project.story} onOpenImage={open} />

          {project.gallery && project.gallery.length > 0 && (
            <section className="extra-gallery">
              <h2 className="section-title">More screenshots</h2>
              <div className={`story-gallery cols-${Math.min(project.gallery.length, 3)}`}>
                {project.gallery.map((img) => (
                  <figure key={img.src}>
                    <SmartImage image={img} onClick={() => open(img)} />
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="project-aside">
          <MetadataPanel project={project} />
          {headings.length > 2 && (
            <nav className="toc" aria-label="In this story">
              <h2>In this story</h2>
              <ol>
                {headings.map((text) => (
                  <li key={text}>
                    <button
                      type="button"
                      onClick={() => document.getElementById(slugify(text))?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </aside>
      </div>

      <nav className="pager" aria-label="More projects">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="prev">
            <small>Previous project</small>
            <span>{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/projects/${next.slug}`} className="next">
            <small>Next project</small>
            <span>{next.title}</span>
          </Link>
        )}
      </nav>

      <Lightbox
        images={allImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </article>
  );
}
