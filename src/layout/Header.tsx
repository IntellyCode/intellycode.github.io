import { useEffect, useState } from 'react'
import { navLinks, site } from '../site'
import NavDrawer from './NavDrawer'
import './Header.scss'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header sticky-top${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container d-flex align-items-center py-3">
        <a href="/" className="d-flex align-items-center gap-2 text-body fw-semibold text-decoration-none">
          <img src={site.avatar} alt={site.name} width={34} height={34} className="rounded-circle border" />
          {site.name}
        </a>
        <nav className="ms-auto d-none d-lg-flex align-items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
          <a href={`mailto:${site.email}`} className="btn btn-primary ms-2">
            <i className="bi bi-envelope-fill me-2" />Email me
          </a>
        </nav>
        <button type="button" className="btn ms-auto me-n2 d-lg-none" aria-label="Open menu" onClick={() => setOpen(true)}>
          <i className="bi bi-list fs-3" />
        </button>
      </div>
      <NavDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
