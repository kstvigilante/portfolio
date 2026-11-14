import { achievements, education } from '../../data/profile.ts';
import { SectionHeader } from '../SectionHeader/SectionHeader.tsx';
import './Leadership.scss';

export function Leadership() {
  return (
    <section className="leadership" id="leadership" aria-labelledby="leadership-title">
      <div className="leadership__inner">
        <SectionHeader
          id="leadership-title"
          index="05"
          eyebrow="Beyond the code"
          title={
            <>
              Senior means <em>owning</em> the outcome.
            </>
          }
          intro="Leading people, wrangling requirements and keeping delivery honest matters as much as the components themselves."
        />

        <ol className="leadership__list">
          {achievements.map((item, index) => (
            <li
              key={item.title}
              className="achievement"
              data-reveal
              style={{ '--reveal-delay': `${(index % 3) * 0.06}s` }}
            >
              <span className="achievement__index">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="achievement__title">{item.title}</h3>
              <p className="achievement__body">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className="education" data-reveal>
          <p className="education__label">Education</p>
          {education.map((entry) => (
            <div key={entry.degree} className="education__row">
              <p className="education__degree">{entry.degree}</p>
              <p className="education__school">
                {entry.school} · {entry.location}
              </p>
              <p className="education__year">{entry.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
