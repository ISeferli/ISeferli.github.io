import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { KIND_LABELS } from '../utils';
import { SmartImage } from './SmartImage';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <SmartImage image={project.cover} />
      <div className="card-meta">
        <span>{project.jam ? project.jam.name : KIND_LABELS[project.kind]}</span>
        <span className="year">{project.year}</span>
      </div>
      <h2>{project.title}</h2>
      <p>{project.tagline}</p>
    </Link>
  );
}
