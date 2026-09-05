import { Instagram } from './InstagramIcon'
import { useState } from 'react'
import { Heart, MapPin, Menu, X } from 'lucide-react'
import { Brand } from './Brand'
import { project } from '../data/project'

const links = [
  { href: '#adote', label: 'Quero adotar' },
  { href: '#quem-somos', label: 'Nossa história' },
  { href: '#como-ajudar', label: 'Como ajudar' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export function Header({ onSupport }: { onSupport: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="announcement" role="region" aria-label="Nossa causa">
        <span>Projeto independente de resgate e adoção</span>
        <span className="announcement-location">
          <MapPin size={13} aria-hidden="true" />
          {project.location}
        </span>
      </div>
      <header
        className="site-header"
        onKeyDown={(event) => {
          if (event.key === 'Escape') setMenuOpen(false)
        }}
      >
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              className="header-instagram"
              href={project.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ju Salva Patinhas no Instagram"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <button
              className="button button-primary header-donate"
              onClick={onSupport}
            >
              <Heart size={17} />
              Faça uma doação
            </button>
            <button
              className="icon-button menu-toggle"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Navegação mobile"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className="button button-primary"
              onClick={() => {
                setMenuOpen(false)
                onSupport()
              }}
            >
              <Heart size={17} />
              Faça uma doação
            </button>
          </nav>
        )}
      </header>
    </>
  )
}
