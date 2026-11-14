import 'react';

declare module 'react' {
  // Declaration merging needs an interface with an index signature, not a Record type.
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  interface CSSProperties {
    /** Allow CSS custom properties such as `--reveal-delay` in inline styles. */
    [key: `--${string}`]: string | number | undefined;
  }
}
