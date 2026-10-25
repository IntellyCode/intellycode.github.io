import { engagements } from './engagements'
import './Offers.scss'

export default function Offers() {
  return (
    <section id="offers" className="py-5 section-white">
      <div className="container py-md-5">
        <div className="reveal mb-4 mb-md-5" style={{ maxWidth: '36em' }}>
          <h2 className="section-title mb-3">Offers</h2>
          <p className="text-body-secondary mb-0">Fixed price, fixed timeline. Email me and let me know which one fits.</p>
        </div>
        <div className="row g-3">
          {engagements.map((engagement) => (
            <div key={engagement.name} className="col-lg-4">
              <div className={`reveal offer h-100${engagement.price ? '' : ' offer-open'}`}>
                <span className="offer-icon text-primary rounded-3 d-grid mb-4">
                  <i className={`bi bi-${engagement.icon}`} />
                </span>
                <h3 className="offer-symptom mb-2">{engagement.symptom}</h3>
                <p className="fw-semibold mb-2">{engagement.name}</p>
                <p className="small text-body-secondary mb-4">{engagement.description}</p>
                <div className="offer-footer d-flex justify-content-between align-items-baseline gap-2 mt-auto">
                  <span className="small text-body-secondary">{engagement.terms}</span>
                  {engagement.price && <span className="fw-semibold text-nowrap">{engagement.price}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
