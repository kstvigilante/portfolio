import { useEffect, useState } from 'react';
import { navItems, profile } from '../../data/profile.ts';
import { useActiveSection } from '../../hooks/useActiveSection.ts';
import type { Theme } from '../../hooks/useTheme.ts';
import { cx } from '../../utils/cx.ts';
import { Icon } from '../Icon/Icon.tsx';
import './Nav.scss';

const sectionIds = navItems.map((item) => item.id);

interface NavProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 12);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
  };
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className={cx('nav', scrolled && 'nav--scrolled', open && 'nav--open')}>
      <nav className="nav__inner" aria-label="Primary">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__mark" aria-hidden="true">
            KS
          </span>
          <span className="nav__brand-text">
            {profile.name.split(' ').slice(0, 2).join(' ')}
            <span className="nav__dot" aria-hidden="true" />
          </span>
        </a>

        <ul className="nav__links" id="primary-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav__item">
              <a
                href={`#${item.id}`}
                className={cx('nav__link', active === item.id && 'nav__link--active')}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav__item nav__item--mobile-only">
            <a href={profile.resumeUrl} className="nav__link" download onClick={close}>
              Résumé
            </a>
          </li>
        </ul>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__icon-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a href={profile.resumeUrl} className="nav__cta" download>
            <Icon name="download" size={16} />
            Résumé
          </a>
          <button
            type="button"
            className="nav__icon-button nav__icon-button--menu"
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => {
              setOpen((value) => !value);
            }}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  );
}
