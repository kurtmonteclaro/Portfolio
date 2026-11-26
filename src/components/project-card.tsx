import Image from 'next/image';

import type { Project } from '@/data/portfolio';
import { TagList } from './tag-list';
import { ProjectLinks } from './project-links';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article aria-labelledby={`${project.id}-title`} className={`project-card project-${project.id}`}>
      <div className="project-preview">
        <div aria-hidden="true" className="project-preview-bar" />
        <Image
          alt={project.screenshot.alt}
          className="project-screenshot"
          height={338}
          src={project.screenshot.src}
          width={600}
        />
      </div>
      <div className="project-content">
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="project-title">{project.title}</p>
        <p className="project-description">{project.description}</p>
        <TagList items={project.technologies} />

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
