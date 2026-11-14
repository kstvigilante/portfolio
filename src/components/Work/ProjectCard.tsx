import type { PointerEvent } from 'react';
import type { Project } from '../../data/types.ts';
import { TagList } from '../TagList/TagList.tsx';
import './ProjectCard.scss';

function trackPointer(event: PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  el.style.setProperty('--my', `${event.clientY - rect.top}px`);
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article
      className={`project-card project-card--${project.id}`}
      onPointerMove={trackPointer}
      data-reveal
      style={{ '--reveal-delay': `${(index % 3) * 0.08}s` }}
      aria-labelledby={`project-${project.id}`}
    >
      <div className="project-card__top">
        <span className="project-card__client">{project.client}</span>
        <span className="project-card__number">{number}</span>
      </div>

      <h3 className="project-card__title" id={`project-${project.id}`}>
        {project.title}
      </h3>
      <p className="project-card__summary">{project.summary}</p>

      {project.metric && (
        <p className="project-card__metric">
          <span className="project-card__metric-value">{project.metric.value}</span>
          <span className="project-card__metric-label">{project.metric.label}</span>
        </p>
      )}

      <ul className="project-card__highlights">
        {project.highlights.map((item) => (
          <li key={item} className="project-card__highlight">
            {item}
          </li>
        ))}
      </ul>

      <TagList items={project.tags} className="project-card__tags" />
    </article>
  );
}
