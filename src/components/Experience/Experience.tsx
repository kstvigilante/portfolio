import { roles } from '../../data/profile.ts';
import { SectionHeader } from '../SectionHeader/SectionHeader.tsx';
import './Experience.scss';

export function Experience() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="experience__inner">
        <SectionHeader
          id="experience-title"
          index="03"
          eyebrow="Experience"
          title={
            <>
              Eight years, <em>one</em> obsession: shipping.
            </>
          }
        />

        <ol className="experience__timeline">
          {roles.map((role) => (
            <li key={role.company} className="role" data-reveal>
              <div className="role__aside">
                <p className="role__period">
                  {role.current && <span className="role__live" aria-hidden="true" />}
                  {role.period}
                </p>
                <p className="role__location">{role.location}</p>
              </div>

              <div className="role__body">
                <h3 className="role__title">
                  {role.title}
                  <span className="role__at"> at </span>
                  <span className="role__company">{role.company}</span>
                </h3>
                <p className="role__summary">{role.summary}</p>
                <ul className="role__points">
                  {role.points.map((point) => (
                    <li key={point} className="role__point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
