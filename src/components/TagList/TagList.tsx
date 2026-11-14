import { cx } from '../../utils/cx.ts';
import './TagList.scss';

interface TagListProps {
  items: readonly string[];
  /** `outline` (default) for small mono pills, `filled` for larger chips. */
  variant?: 'outline' | 'filled';
  /** Extra class for BEM mixes, e.g. `project-card__tags`. */
  className?: string;
  label?: string;
}

export function TagList({
  items,
  variant = 'outline',
  className,
  label = 'Technologies',
}: TagListProps) {
  return (
    <ul className={cx('tag-list', `tag-list--${variant}`, className)} aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
}
