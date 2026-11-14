import { projects } from '../../data/profile.ts';
import { SectionHeader } from '../SectionHeader/SectionHeader.tsx';
import { ProjectCard } from './ProjectCard.tsx';
import './Work.scss';

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="work__inner">
        <SectionHeader
          id="work-title"
          index="02"
          eyebrow="Selected work"
          title={
            <>
              Features I&apos;ve <em>shipped</em>.
            </>
          }
          intro="Notable features from SALT Lending, plus the PixelPark NFT marketplace."
        />

        <div className="work__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
