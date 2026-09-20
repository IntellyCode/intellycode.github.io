import type { ReactNode } from 'react'
import './Section.scss'

type Props = { id: string; title: string; subtitle: string; tone: 'white' | 'pale'; children: ReactNode }

export default function Section({ id, title, subtitle, tone, children }: Props) {
  return (
    <section id={id} className={`py-5 section-${tone}`}>
      <div className="container py-md-5">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-4">
            <div className="section-rail reveal">
              <h2 className="section-title mb-3">{title}</h2>
              <p className="text-body-secondary mb-0">{subtitle}</p>
            </div>
          </div>
          <div className="col-lg-8">{children}</div>
        </div>
      </div>
    </section>
  )
}
