import { recentProject } from '../../data/profile.ts';
import { Icon } from '../Icon/Icon.tsx';
import { SectionHeader } from '../SectionHeader/SectionHeader.tsx';
import { TagList } from '../TagList/TagList.tsx';
import { BrowserMock } from './BrowserMock.tsx';
import { ProductCard } from './ProductCard.tsx';
import './RecentProject.scss';

const portal = recentProject.surfaces.find((surface) => surface.link)?.link;

export function RecentProject() {
  return (
    <section className="recent-project" id="recent" aria-labelledby="recent-title">
      <div className="recent-project__inner">
        <SectionHeader
          id="recent-title"
          index="01"
          eyebrow="Recent project"
          title={
            <>
              {recentProject.name}, <em>{recentProject.tagline.toLowerCase()}</em>.
            </>
          }
          intro={recentProject.summary}
        />

        <div className="recent-project__overview">
          <div className="recent-project__details" data-reveal>
            <p className="recent-project__label">What I worked on</p>
            <ul className="recent-project__contributions">
              {recentProject.contributions.map((item) => (
                <li key={item} className="recent-project__contribution">
                  {item}
                </li>
              ))}
            </ul>
            <TagList items={recentProject.stack} />
            {portal && (
              <a
                className="recent-project__cta"
                href={portal.href}
                target="_blank"
                rel="noreferrer"
              >
                Visit the Borrower Portal
                <Icon name="arrowUpRight" size={18} />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            )}
          </div>

          <div className="recent-project__preview" data-reveal style={{ '--reveal-delay': '0.1s' }}>
            {portal && <BrowserMock url={portal.label} />}
          </div>
        </div>

        <div className="recent-project__products">
          {recentProject.surfaces.map((surface, index) => (
            <ProductCard key={surface.name} surface={surface} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
