import { useRef, useState } from 'react'
import Section from '../components/Section'
import { testimonials } from './quotes'
import './Testimonials.scss'

export default function Testimonials() {
  const row = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    const element = row.current!
    setActive(Math.round(element.scrollLeft / (element.scrollWidth / testimonials.length)))
  }

  const goTo = (index: number) => {
    const element = row.current!
    element.scrollTo({ left: (element.scrollWidth / testimonials.length) * index, behavior: 'smooth' })
  }

  return (
    <Section id="testimonials" tone="white" title="What clients say" subtitle="From the reference letters of people I worked with directly.">
      <div className="swipe-row" ref={row} onScroll={onScroll}>
        {testimonials.map((item) => (
          <figure key={item.name} className="reveal quote-card card p-4 mb-0">
            <blockquote className="mb-3">{item.quote}</blockquote>
            <figcaption className="small mt-auto">
              <span className="fw-semibold">{item.name}</span>
              <span className="text-body-secondary d-block">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="d-flex d-lg-none justify-content-center gap-2 mt-1">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show quote from ${item.name}`}
            aria-current={index === active}
            className={`swipe-dot${index === active ? ' is-active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </Section>
  )
}
