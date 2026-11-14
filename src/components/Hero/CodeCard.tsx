import type { ReactNode } from 'react';
import { profile } from '../../data/profile.ts';
import './CodeCard.scss';

const stack = ['React', 'TypeScript', 'Redux', 'GraphQL'];
const shipped = ['web', 'mobile', 'web3'];

type TokenKind = 'keyword' | 'string' | 'type' | 'punct';

function Token({ kind, children }: { kind: TokenKind; children: ReactNode }) {
  return <span className={`code-card__token code-card__token--${kind}`}>{children}</span>;
}

function StringArray({ items }: { items: readonly string[] }) {
  return (
    <>
      <Token kind="punct">[</Token>
      {items.map((item, i) => (
        <span key={item}>
          <Token kind="string">&apos;{item}&apos;</Token>
          {i < items.length - 1 && <Token kind="punct">, </Token>}
        </span>
      ))}
      <Token kind="punct">],</Token>
    </>
  );
}

export function CodeCard() {
  return (
    <figure className="code-card" aria-label="Profile summary as TypeScript">
      <div className="code-card__bar">
        <span className="code-card__lights" aria-hidden="true">
          <i className="code-card__light" />
          <i className="code-card__light" />
          <i className="code-card__light" />
        </span>
        <span className="code-card__file">engineer.ts</span>
        <span className="code-card__status">
          <span className="code-card__pulse" aria-hidden="true" />
          available
        </span>
      </div>
      <pre className="code-card__code">
        <code>
          <Token kind="keyword">export const</Token> engineer<Token kind="punct">:</Token>{' '}
          <Token kind="type">Engineer</Token> <Token kind="punct">= {'{'}</Token>
          {'\n  '}name<Token kind="punct">:</Token>{' '}
          <Token kind="string">&apos;{profile.shortName}&apos;</Token>
          <Token kind="punct">,</Token>
          {'\n  '}role<Token kind="punct">:</Token>{' '}
          <Token kind="string">&apos;{profile.role}&apos;</Token>
          <Token kind="punct">,</Token>
          {'\n  '}years<Token kind="punct">:</Token>{' '}
          <Token kind="type">{profile.yearsOfExperience}</Token>
          <Token kind="punct">,</Token>
          {'\n  '}stack<Token kind="punct">: </Token>
          <StringArray items={stack} />
          {'\n  '}ships<Token kind="punct">: </Token>
          <StringArray items={shipped} />
          {'\n  '}coverage<Token kind="punct">:</Token>{' '}
          <Token kind="string">&apos;~90%&apos;</Token>
          <Token kind="punct">,</Token>
          {'\n'}
          <Token kind="punct">{'}'}</Token> <Token kind="keyword">satisfies</Token>{' '}
          <Token kind="type">Senior</Token>
          <Token kind="punct">;</Token>
          <span className="code-card__caret" aria-hidden="true" />
        </code>
      </pre>
    </figure>
  );
}
