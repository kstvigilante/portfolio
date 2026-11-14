import { useEffect, useState } from 'react';
import { profile } from '../../data/profile.ts';
import { Icon } from '../Icon/Icon.tsx';
import './Contact.scss';

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => {
      window.clearTimeout(timer);
    };
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true" />
      <div className="contact__inner">
        <p className="contact__eyebrow" data-reveal>
          <span className="contact__eyebrow-index">06</span> Contact
        </p>
        <h2 className="contact__title" id="contact-title" data-reveal>
          Have a product that
          <br />
          needs to <em>just work?</em>
        </h2>
        <p className="contact__lead" data-reveal>
          I&apos;m open to frontend roles and freelance projects. Reach me by email or phone.
        </p>

        <div className="contact__actions" data-reveal>
          <div className="contact__channels">
            <a href={`mailto:${profile.email}`} className="contact__channel">
              {profile.email}
              <Icon name="arrowUpRight" size={28} />
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__channel">
              {profile.phone}
              <Icon name="arrowUpRight" size={28} />
            </a>
          </div>

          <div className="contact__buttons">
            <button
              type="button"
              className="contact__button"
              onClick={() => {
                void copyEmail();
                console.log("copyEmail");
              }}
            >
              <Icon name={copied ? 'check' : 'copy'} size={16} />
              <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
            </button>
            <a href={profile.resumeUrl} className="contact__button" download>
              <Icon name="download" size={16} />
              Download résumé
            </a>
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <Icon name="arrowUpRight" size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="contact__footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, TypeScript &amp; SCSS</p>
      </footer>
    </section>
  );
}
