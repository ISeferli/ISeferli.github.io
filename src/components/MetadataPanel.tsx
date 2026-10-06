import type { Project } from '../types';

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function MetadataPanel({ project }: { project: Project }) {
  return (
    <section className="meta-panel" aria-label="Project details">
      <dl>
        <div>
          <dt>Category</dt>
          <dd>{project.category}</dd>
        </div>
        <div>
          <dt>Project type</dt>
          <dd>{project.projectType}</dd>
        </div>
        {project.jam && (
          <div>
            <dt>Game jam</dt>
            <dd>
              {project.jam.name}
              {project.jam.theme && <span className="dd-note">Theme: {project.jam.theme}</span>}
              {project.jam.result && <span className="dd-note">{project.jam.result}</span>}
            </dd>
          </div>
        )}
        {project.duration && (
          <div>
            <dt>Development time</dt>
            <dd>{project.duration}</dd>
          </div>
        )}
        {project.platforms && (
          <div>
            <dt>Platforms</dt>
            <dd>{project.platforms.join(', ')}</dd>
          </div>
        )}
        <div>
          <dt>Tech stack</dt>
          <dd>
            <Chips items={project.techStack} />
          </dd>
        </div>
        <div>
          <dt>My roles</dt>
          <dd>
            <Chips items={project.roles} />
          </dd>
        </div>
      </dl>

      {project.links.length > 0 && (
        <div className="link-list">
          {project.links.map((link) => (
            <a
              key={link.url + link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={link.primary ? 'btn btn-primary' : 'btn btn-secondary'}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
