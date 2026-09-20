import { useState } from 'react'
import type { MouseEvent } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { navLinks, site } from '../site'
import './NavDrawer.scss'

type Props = { open: boolean; onClose: () => void }

export default function NavDrawer({ open, onClose }: Props) {
  const [pending, setPending] = useState<string | null>(null)

  const follow = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setPending(event.currentTarget.getAttribute('href'))
    onClose()
  }

  const navigate = () => {
    if (pending) window.location.assign(pending)
    setPending(null)
  }

  return (
    <Offcanvas show={open} onHide={onClose} onExited={navigate} restoreFocus={false} placement="end">
      <Offcanvas.Header closeButton className="px-4 pt-4">
        <Offcanvas.Title className="small text-uppercase fw-semibold text-body-secondary" style={{ letterSpacing: '.14em' }}>
          Menu
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column px-4 pb-4">
        <nav>
          {[...navLinks, { label: 'Contact', href: '/#contact' }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={follow}
              className="drawer-link font-serif d-flex align-items-center justify-content-between py-3 text-body text-decoration-none"
            >
              {link.label}
              <i className="bi bi-arrow-right fs-6" />
            </a>
          ))}
        </nav>
        <div className="mt-auto d-grid gap-2">
          <a href={`mailto:${site.email}`} className="btn btn-primary btn-lg">
            <i className="bi bi-envelope-fill me-2" />Email me
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">
            <i className="bi bi-linkedin me-2" />LinkedIn
          </a>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
