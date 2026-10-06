import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import { HomeHero } from '../components/HomeHero';
import { ProjectCard } from '../components/ProjectCard';
import { KIND_LABELS } from '../utils';
import type { ProjectKind } from '../types';

type Filter = 'all' | ProjectKind;
const FILTER_ORDER: ProjectKind[] = ['professional', 'jam', 'personal'];
const FILTER_LABELS: Record<ProjectKind, string> = {
  professional: 'Professional',
  jam: 'Game Jams',
  personal: 'Personal',
};

export function HomePage() {
  const [filter, setFilter] = useState<Filter>('all');

  const sorted = useMemo(() => [...projects].sort((a, b) => b.year - a.year), []);
  const visible = filter === 'all' ? sorted : sorted.filter((p) => p.kind === filter);
  // Only show filters that actually have projects in them
  const kinds = FILTER_ORDER.filter((k) => projects.some((p) => p.kind === k));

  return (
    <>
      <HomeHero />
      <div className="container projects-section">
        <h2 className="section-title">Projects</h2>

      <div className="filters" role="group" aria-label="Filter projects">
        <button type="button" className="filter" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          All<span className="count">{projects.length}</span>
        </button>
        {kinds.map((kind) => (
          <button
            key={kind}
            type="button"
            className="filter"
            aria-pressed={filter === kind}
            title={KIND_LABELS[kind]}
            onClick={() => setFilter(kind)}
          >
            {FILTER_LABELS[kind]}
            <span className="count">{projects.filter((p) => p.kind === kind).length}</span>
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      </div>
    </>
  );
}
