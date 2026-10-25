import Section from '../components/Section'
import { caseStudies } from '../content'
import './CaseStudies.scss'

export default function CaseStudies() {
  return (
    <Section id="case-studies" tone="white" title="Case Studies" subtitle="A closer look at how a hard problem became a working system.">
      {caseStudies.map((entry) => (
        <article key={entry.slug} className="reveal case-row position-relative p-3 p-md-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="case-icon text-primary rounded-3 d-grid flex-shrink-0">
              <i className={`bi bi-${entry.meta.icon}`} />
            </span>
            <div>
              <h3 className="case-class mb-1">{entry.meta.problem!.area}</h3>
              <p className="case-title mb-0">
                <a href={`/case-studies/${entry.slug}`} className="stretched-link text-body text-decoration-none">
                  {entry.meta.title}
                </a>
              </p>
            </div>
          </div>
          <p className="text-body-secondary mb-3" style={{ fontSize: '.95rem' }}>{entry.meta.summary}</p>
          <span className="text-primary fw-semibold small">
            Read case study <i className="arrow bi bi-arrow-right d-inline-block ms-1" />
            <span className="text-body-secondary fw-normal ms-3">{entry.meta.minutes} min</span>
          </span>
        </article>
      ))}
    </Section>
  )
}
