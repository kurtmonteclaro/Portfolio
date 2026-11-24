import { ExternalLink, GitBranch } from 'lucide-react';

import type { Project } from '@/data/portfolio';

export function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) return null;

  return (
    <div className="project-links">
      {project.github && (
        <a aria-label={`View on GitHub (${project.name})`} href={project.github}>
          <GitBranch aria-hidden="true" size={16} /> View on GitHub
        </a>
      )}
      {project.demo && (
        <a aria-label={`Live demo (${project.name})`} href={project.demo}>
          <ExternalLink aria-hidden="true" size={16} /> Live demo
        </a>
      )}
    </div>
  );
}
