import Tags from './Tags.jsx'
import { selectedWork } from '../data/content.js'

export default function SelectedWork() {
  return (
    <>
      <p className="lead">{selectedWork.lead}</p>
      <div className="cols cols--spaced">
        {selectedWork.cards.map((card, index) => (
          <article className="box nda" key={index}>
            <h3>
              Client
              <span className="redact" style={{ width: card.redactWidth }} />
            </h3>
            <dl>
              <dt>Domain</dt>
              <dd className="todo">{card.domain}</dd>
              <dt>My part</dt>
              <dd className="todo">{card.part}</dd>
              <dt>Stack</dt>
              <dd>
                <Tags items={card.stack} />
              </dd>
            </dl>
          </article>
        ))}
      </div>
    </>
  )
}
