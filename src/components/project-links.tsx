import type { Project } from '@/data/portfolio';

export function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) return null;

  return (
    <div className="project-links">
      {project.github && (
        <a aria-label={`View on GitHub (${project.name})`} className="button project-code-link" href={project.github}>
          View on GitHub
        </a>
      )}
      {project.demo && (
        <a aria-label={`Live demo (${project.name})`} className="button button-secondary" href={project.demo}>
          Live demo
        </a>
      )}
    </div>
  );
}
