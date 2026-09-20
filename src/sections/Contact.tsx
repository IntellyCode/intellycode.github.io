import { site } from '../site'

export default function Contact() {
  return (
    <section id="contact" className="py-5 section-white">
      <div className="container py-md-5 reveal">
        <h2 className="section-title mb-3">Contact</h2>
        <p className="hero-tagline text-body-secondary mb-4" style={{ maxWidth: '34em' }}>
          If there's something computational your team has wanted to try but hasn't had someone to get it working, let me know.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <a href={`mailto:${site.email}`} className="btn btn-primary btn-lg">
            <i className="bi bi-envelope-fill me-2" />Email me
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">
            <i className="bi bi-linkedin me-2" />LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
