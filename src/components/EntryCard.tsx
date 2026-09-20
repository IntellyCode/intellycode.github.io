import type { Entry } from '../content'
import './EntryCard.scss'

export default function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="reveal entry-row position-relative p-3 p-md-4">
      <div className="d-flex gap-3 gap-md-4">
        <span className="entry-icon text-primary rounded-3 d-grid flex-shrink-0" style={{ width: 42, height: 42, placeItems: 'center' }}>
          <i className={`bi bi-${entry.meta.icon ?? 'journal-text'}`} />
        </span>
        <div>
          <h3 className="h5 mb-2">
            <a href={`/${entry.kind}/${entry.slug}`} className="stretched-link text-body text-decoration-none">
              {entry.meta.title}
            </a>
          </h3>
          <p className="text-body-secondary mb-3" style={{ fontSize: '.95rem' }}>{entry.meta.summary}</p>
          <span className="text-primary fw-semibold small">
            Read {entry.kind === 'blog' ? 'post' : 'case study'} <i className="arrow bi bi-arrow-right d-inline-block ms-1" />
            <span className="text-body-secondary fw-normal ms-3">{entry.meta.minutes} min</span>
          </span>
        </div>
      </div>
    </article>
  )
}
