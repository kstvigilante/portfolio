import { skillGroups } from '../../data/profile.ts';
import { SectionHeader } from '../SectionHeader/SectionHeader.tsx';
import { TagList } from '../TagList/TagList.tsx';
import './Skills.scss';

export function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="skills__inner">
        <SectionHeader
          id="skills-title"
          index="04"
          eyebrow="Toolkit"
          title={
            <>
              The stack I reach for, <em>and why</em> it works.
            </>
          }
          intro="TypeScript-first React, predictable state, and tests that let a team ship on a Friday."
        />

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="skill-group"
              data-reveal
              style={{ '--reveal-delay': `${(index % 4) * 0.06}s` }}
            >
              <h3 className="skill-group__title">{group.title}</h3>
              <TagList items={group.items} variant="filled" label={group.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
