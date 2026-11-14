import type { ReactNode } from 'react';
import './SectionHeader.scss';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  id: string;
}

export function SectionHeader({ index, eyebrow, title, intro, id }: SectionHeaderProps) {
  return (
    <header className="section-header" data-reveal>
      <p className="section-header__eyebrow">
        <span className="section-header__index">{index}</span>
        <span className="section-header__rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section-header__title" id={id}>
        {title}
      </h2>
      {intro && <p className="section-header__intro">{intro}</p>}
    </header>
  );
}
