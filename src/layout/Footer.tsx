import { navLinks, site } from '../site'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="site-footer border-top text-body-secondary small">
      <div className="container d-flex flex-column flex-sm-row gap-2 justify-content-between align-items-sm-center">
        <span>&copy; {site.name} · {site.brand}</span>
        <nav className="d-none d-sm-flex flex-wrap gap-3">
          {[...navLinks, { label: 'GitHub', href: site.github }].map((link) => (
            <a key={link.href} href={link.href} className="text-body-secondary">{link.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
