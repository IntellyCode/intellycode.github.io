import { useState } from 'react'
import Section from '../components/Section'
import { projects } from './projects'
import './Work.scss'

const VISIBLE_ON_PHONE = 4

export default function Work() {
  const [expanded, setExpanded] = useState(false)
  const hidden = projects.length - VISIBLE_ON_PHONE

  return (
    <Section id="work" tone="white" title="Work" subtitle="Selected engineering work across automation, robotics, and research systems.">
      <div className="row g-3">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`col-sm-6${index >= VISIBLE_ON_PHONE && !expanded ? ' d-none d-sm-block' : ''}`}
          >
            <div className="reveal work-item h-100 p-3 ps-4">
              <h3 className="h6 fw-semibold mb-2" style={{ fontFamily: 'inherit' }}>{project.name}</h3>
              <p className="small text-body-secondary mb-2">{project.description}</p>
              <div className="d-flex flex-wrap align-items-center gap-2 small">
                <span className="text-body-secondary">{project.tags.join(' · ')}</span>
                {project.links ? (
                  project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener" className="fw-semibold">
                      {link.label} <i className="bi bi-arrow-up-right" />
                    </a>
                  ))
                ) : (
                  <span className="text-body-secondary"><i className="bi bi-lock" /> Proprietary</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {!expanded && (
        <button type="button" className="btn btn-ghost w-100 mt-3 d-sm-none" onClick={() => setExpanded(true)}>
          Show {hidden} more <i className="bi bi-arrow-down ms-1" />
        </button>
      )}
    </Section>
  )
}
