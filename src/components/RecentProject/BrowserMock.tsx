import { Icon } from '../Icon/Icon.tsx';
import './BrowserMock.scss';

/** Schematic (not a screenshot) of a borrower payment screen inside a browser frame. */
export function BrowserMock({ url }: { url: string }) {
  return (
    <div className="browser-mock" aria-hidden="true">
      <div className="browser-mock__bar">
        <span className="browser-mock__lights">
          <i className="browser-mock__light" />
          <i className="browser-mock__light" />
          <i className="browser-mock__light" />
        </span>
        <span className="browser-mock__url">
          <Icon name="lock" size={12} />
          {url}
        </span>
      </div>

      <div className="browser-mock__body">
        <div className="browser-mock__sidebar">
          <i className="browser-mock__skeleton browser-mock__skeleton--active" />
          <i className="browser-mock__skeleton" />
          <i className="browser-mock__skeleton" />
          <i className="browser-mock__skeleton" />
        </div>

        <div className="browser-mock__main">
          <div className="browser-mock__head">
            <b className="browser-mock__heading">Make a payment</b>
            <span className="browser-mock__chip">ACH · Stablecoin</span>
          </div>
          <div className="browser-mock__meter">
            <span className="browser-mock__meter-fill" />
          </div>
          <ul className="browser-mock__options">
            <li className="browser-mock__option">
              <i className="browser-mock__skeleton" />
            </li>
            <li className="browser-mock__option">
              <i className="browser-mock__skeleton" />
            </li>
            <li className="browser-mock__option browser-mock__option--active">
              Finance interest <em className="browser-mock__badge">new</em>
            </li>
          </ul>
          <div className="browser-mock__rows">
            <i className="browser-mock__skeleton browser-mock__skeleton--muted" />
            <i className="browser-mock__skeleton browser-mock__skeleton--muted" />
            <i className="browser-mock__skeleton browser-mock__skeleton--muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
