import type { CSSProperties } from 'react'
import { site } from '../site'
import './Hero.scss'

const taglines = [
  "I'm a computational engineer. I work at the intersection of physics, engineering, and software, on the problems that don't have an off-the-shelf answer.",
  "The hardest problems live where several fields overlap. Take robotics: a robot that loses its target isn't a vision problem or a control problem or a software problem on its own. It's all of them at once.",
  'I work across all three, producing systems whose behaviour you can trust. Only edge cases imposed by nature are out of reach. The case studies below show what that looks like.',
]

const step = (n: number) => ({ '--step': n }) as CSSProperties

export default function Hero() {
  return (
    <section className="hero py-5">
      <div className="container py-md-4">
        <p className="rise small text-uppercase fw-semibold text-primary mb-2" style={{ ...step(0), letterSpacing: '.12em' }}>
          {site.role} · ML · Simulation · Robotics
        </p>
        <h1 className="rise display-name mb-4" style={step(1)}>{site.name}</h1>
        <div className="rise" style={{ ...step(3), maxWidth: '36em' }}>
          {taglines.map((line) => (
            <p key={line} className="hero-tagline text-body-secondary mb-3">{line}</p>
          ))}
        </div>
        <div className="rise d-flex flex-wrap gap-2 mt-4" style={step(4)}>
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
