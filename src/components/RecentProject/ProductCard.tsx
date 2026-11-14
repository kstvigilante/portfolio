import type { ProductSurface } from '../../data/types.ts';
import { Icon } from '../Icon/Icon.tsx';
import { TagList } from '../TagList/TagList.tsx';
import './ProductCard.scss';

export function ProductCard({ surface, index }: { surface: ProductSurface; index: number }) {
  return (
    <article className="product-card" data-reveal style={{ '--reveal-delay': `${index * 0.08}s` }}>
      <p className="product-card__platform">{surface.platform}</p>
      <h3 className="product-card__name">{surface.name}</h3>
      <p className="product-card__text">{surface.description}</p>
      <TagList items={surface.stack} />
      {surface.link ? (
        <a
          className="product-card__footer product-card__footer--link"
          href={surface.link.href}
          target="_blank"
          rel="noreferrer"
        >
          {surface.link.label}
          <Icon name="arrowUpRight" size={16} />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      ) : (
        <p className="product-card__footer product-card__footer--internal">
          <Icon name="lock" size={14} />
          Internal tool · no public link
        </p>
      )}
    </article>
  );
}
