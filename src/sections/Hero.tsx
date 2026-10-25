import type { CSSProperties } from 'react'
import { site } from '../site'
import './Hero.scss'

const step = (n: number) => ({ '--step': n }) as CSSProperties

export default function Hero() {
  return (
    <section className="hero py-5">
      <div className="container py-md-5">
        <h1 className="rise hero-headline mb-4" style={step(0)}>{site.headline}</h1>
        <p className="rise hero-tagline text-body-secondary mb-0" style={{ ...step(1), maxWidth: '34em' }}>
          {site.symptoms} {site.invitation}
        </p>
        <div className="rise d-flex flex-wrap gap-2 mt-4" style={step(2)}>
          <a href={`mailto:${site.email}`} className="btn btn-primary btn-lg">
            <i className="bi bi-envelope-fill me-2" />Email me
          </a>
          <a href="#case-studies" className="btn btn-ghost btn-lg">
            Case studies <i className="bi bi-arrow-down ms-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
