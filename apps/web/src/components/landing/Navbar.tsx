'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'ACCUEIL',     href: '#' },
  { label: 'DOCTRINE',    href: '#doctrine' },
  { label: 'OPÉRATIONS',  href: '#operations' },
  { label: 'STRUCTURE',   href: '#structure' },
  { label: 'RECRUTEMENT', href: '#recrutement' },
]

function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="14,2 26,8 26,20 14,26 2,20 2,8"
        stroke="#c9a84c"
        strokeWidth="1.5"
        fill="none"
      />
      <polygon
        points="14,7 21,11 21,17 14,21 7,17 7,11"
        stroke="#c9a84c"
        strokeWidth="1"
        fill="rgba(201,168,76,0.06)"
      />
      <circle cx="14" cy="14" r="2" fill="#c9a84c" />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-border-subtle"
      style={{
        height: '64px',
        background: 'rgba(13, 17, 23, 0.95)',
        backdropFilter: 'blur(12px)',
      }}
      aria-label="Navigation principale"
    >
      <div
        className="mx-auto flex items-center justify-between h-full px-10"
        style={{ maxWidth: '1440px' }}
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="Nexus Horizon Trade & Secure — Accueil"
        >
          <LogoMark />
          <span
            className="font-display text-gold-primary uppercase hidden md:inline"
            style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em' }}
          >
            NEXUS HORIZON TRADE & SECURE
          </span>
          <span
            className="font-display text-gold-primary uppercase md:hidden"
            style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em' }}
          >
            NHTSC
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-text-secondary uppercase transition-colors duration-200 hover:text-gold-primary"
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                padding: '8px 16px',
                borderBottom: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderBottomColor = '#c9a84c'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderBottomColor = 'transparent'
              }}
              role="listitem"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#recrutement"
            className="font-mono uppercase transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #c9a84c 0%, #e8c56d 50%, #a07830 100%)',
              color: '#0d1117',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              padding: '10px 24px',
              borderRadius: '4px',
              whiteSpace: 'nowrap',
              display: 'inline-block',
            }}
          >
            DÉPOSER CANDIDATURE →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className="block w-5 h-px bg-text-secondary transition-all duration-200"
            style={{ transform: mobileOpen ? 'translateY(4px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-5 h-px bg-text-secondary transition-all duration-200"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-text-secondary transition-all duration-200"
            style={{ transform: mobileOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border-subtle"
          style={{ background: 'rgba(13, 17, 23, 0.98)' }}
        >
          <div className="px-10 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-text-secondary hover:text-gold-primary uppercase py-2 border-b border-border-subtle transition-colors duration-200"
                style={{ fontSize: '12px', letterSpacing: '0.1em' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#recrutement"
              className="font-mono uppercase text-center mt-2 transition-opacity duration-200 hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #e8c56d 50%, #a07830 100%)',
                color: '#0d1117',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                padding: '10px 24px',
                borderRadius: '4px',
              }}
            >
              DÉPOSER CANDIDATURE →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
