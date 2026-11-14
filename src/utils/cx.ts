/** Joins class names, skipping falsy values: cx('nav', open && 'nav--open'). */
export function cx(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
