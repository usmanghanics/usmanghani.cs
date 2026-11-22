import { Icon } from './Icon';

/**
 * An illustration of what FG AI Studio does: an agent workflow running step
 * by step, with the reply streaming in. Drawn in HTML, not a screenshot, as
 * the platform is internal to Fatima Group.
 */
export function Flow() {
  return (
    <div className="flow" role="img" aria-label="Illustration of an AI agent workflow running step by step while its reply streams in">
      <div className="flow-card" aria-hidden="true">
        <p className="flow-title">
          Support agent workflow <span>Running</span>
        </p>
        <ol className="flow-nodes">
          <li className="node">
            <i>
              <Icon name="chat-circle-text" size={18} />
            </i>
            <span>
              <b>Message received</b>
              <small>From the chat window</small>
            </span>
            <em>
              <Icon name="check" size={16} />
            </em>
          </li>
          <li className="node">
            <i>
              <Icon name="robot" size={18} />
            </i>
            <span>
              <b>Agent decides</b>
              <small>Picks the tools it needs</small>
            </span>
            <em>
              <Icon name="check" size={16} />
            </em>
          </li>
          <li className="node running">
            <i>
              <Icon name="database" size={18} />
            </i>
            <span>
              <b>Search knowledge</b>
              <small>Company documents</small>
            </span>
            <em className="mono" style={{ fontSize: 12 }}>
              1.2s
            </em>
          </li>
          <li className="node">
            <i>
              <Icon name="lightning" size={18} />
            </i>
            <span>
              <b>Stream reply</b>
              <small>Live, word by word</small>
            </span>
          </li>
        </ol>
      </div>
      <div className="flow-chat" aria-hidden="true">
        <b>Agent</b>
        Here is a short summary of the three supplier quotes you shared. The lowest
        <span className="caret" />
      </div>
    </div>
  );
}
