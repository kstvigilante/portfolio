import { profile } from '../../data/profile.ts';
import { Icon } from '../Icon/Icon.tsx';
import { CodeCard } from './CodeCard.tsx';
import './Hero.scss';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__badge" data-reveal>
            <span className="hero__badge-dot" aria-hidden="true" />
            {profile.role} · {profile.yearsOfExperience} years
          </p>

          <h1
            className="hero__title"
            id="hero-title"
            data-reveal
            style={{ '--reveal-delay': '0.08s' }}
          >
            Building reliable,
            <br />
            scalable <em>frontends</em>
            <br />
            for the web.
          </h1>

          <p className="hero__lead" data-reveal style={{ '--reveal-delay': '0.16s' }}>
            I&apos;m <strong>{profile.name}</strong>, a senior frontend engineer with{' '}
            {profile.yearsOfExperience} years of experience building React and TypeScript
            applications — most recently the web and mobile UI for a crypto-backed lending platform
            and an NFT marketplace.
          </p>

          <div className="hero__ctas" data-reveal style={{ '--reveal-delay': '0.24s' }}>
            <a href="#work" className="hero__button hero__button--primary">
              See selected work
              <Icon name="arrowRight" size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="hero__button hero__button--secondary">
              <Icon name="mail" size={18} />
              Get in touch
            </a>
          </div>

          <ul className="hero__meta" data-reveal style={{ '--reveal-delay': '0.32s' }}>
            <li className="hero__meta-item">
              <Icon name="pin" size={16} />
              {profile.location}
            </li>
            <li className="hero__meta-item">
              <Icon name="spark" size={16} />
              Open to frontend roles
            </li>
          </ul>
        </div>

        <div className="hero__visual" data-reveal style={{ '--reveal-delay': '0.2s' }}>
          <CodeCard />
        </div>
      </div>

      <a href="#recent" className="hero__scroll-cue" aria-label="Scroll to recent project">
        <span className="hero__scroll-dot" />
      </a>
    </section>
  );
}
