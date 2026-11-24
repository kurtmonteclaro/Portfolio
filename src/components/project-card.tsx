import { FileQuestion, QrCode, RadioTower } from 'lucide-react';
import Image from 'next/image';

import type { Project } from '@/data/portfolio';
import { TagList } from './tag-list';
import { ProjectLinks } from './project-links';

const projectIcons = {
  probetect: FileQuestion,
  creditor: QrCode,
  uddnrs: RadioTower,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.id];

  return (
    <article aria-labelledby={`${project.id}-title`} className={`project-card project-${project.id}`}>
      <div className="project-visual">
        <Image
          alt={project.screenshot.alt}
          className="project-screenshot"
          fill
          sizes="(max-width: 560px) calc(100vw - 2.5rem), (max-width: 1023px) 46vw, (max-width: 1300px) 31vw, 390px"
          src={project.screenshot.src}
        />
        <div aria-hidden="true" className="project-icon"><Icon size={20} strokeWidth={1.6} /></div>
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
