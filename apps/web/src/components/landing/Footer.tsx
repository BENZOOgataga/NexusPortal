function FooterLogoMark() {
  return (
    <svg
      width="24"
      height="24"
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
        stroke="#8a6f35"
        strokeWidth="1"
        fill="rgba(201,168,76,0.06)"
      />
      <circle cx="14" cy="14" r="2" fill="#c9a84c" />
    </svg>
  )
}

const organisationLinks = [
  { label: 'Doctrine', href: '#doctrine' },
  { label: 'Opérations', href: '#operations' },
  { label: 'Structure', href: '#structure' },
  { label: 'Recrutement', href: '#recrutement' },
]

const doctrineLinks = [
  { label: "Règles d'engagement", href: '#operations' },
  { label: 'Standards flotte', href: '#operations' },
  { label: 'Commandement escouades', href: '#structure' },
  { label: 'Processus de sélection', href: '#recrutement' },
]

const contactLinks = [
  { label: 'Canal Spectrum', href: '#' },
  { label: 'Canal Discord', href: '#' },
  { label: 'Bureau recrutement', href: '#contact' },
]

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: '#08090a',
        borderTop: '1px solid #1e2d3d',
      }}
      role="contentinfo"
      aria-label="Pied de page Nexus Horizon Trade & Secure"
    >
      <div className="mx-auto px-10 pt-16 pb-8" style={{ maxWidth: '1440px' }}>

        {/* Main footer grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Col 1: Logo + tagline */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4" aria-label="Nexus Horizon Trade & Secure — Accueil">
              <FooterLogoMark />
              <span
                className="font-display text-gold-primary uppercase"
                style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em' }}
              >
                NEXUS HORIZON TRADE & SECURE
              </span>
            </a>
            <p
              className="font-body text-text-muted"
              style={{ fontSize: '12px', lineHeight: '1.7', maxWidth: '200px' }}
            >
              Organisation multi-vecteur Star Citizen.
              Commandement discipline, opérations coordonnées.
            </p>
            <div
              className="font-mono text-status-online uppercase mt-6"
              style={{ fontSize: '10px', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#4caf82',
                  display: 'inline-block',
                  animation: 'rsi-pulse 2s ease-in-out infinite',
                }}
                aria-hidden="true"
              />
              RECRUTEMENT OUVERT
            </div>
          </div>

          {/* Col 2: Organisation links */}
          <div>
            <h3
              className="font-mono text-text-muted uppercase mb-5"
              style={{ fontSize: '10px', letterSpacing: '0.15em' }}
            >
              ORGANISATION
            </h3>
            <nav aria-label="Liens organisation">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {organisationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-text-muted hover:text-text-secondary transition-colors duration-200"
                      style={{ fontSize: '13px' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3: Doctrine links */}
          <div>
            <h3
              className="font-mono text-text-muted uppercase mb-5"
              style={{ fontSize: '10px', letterSpacing: '0.15em' }}
            >
              DOCTRINE
            </h3>
            <nav aria-label="Liens doctrine">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {doctrineLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-text-muted hover:text-text-secondary transition-colors duration-200"
                      style={{ fontSize: '13px' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3
              className="font-mono text-text-muted uppercase mb-5"
              style={{ fontSize: '10px', letterSpacing: '0.15em' }}
            >
              CONTACT
            </h3>
            <nav aria-label="Liens contact">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-text-muted hover:text-text-secondary transition-colors duration-200"
                      style={{ fontSize: '13px' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact card */}
            <div
              id="contact"
              style={{
                marginTop: '24px',
                padding: '10px 14px',
                background: '#0d1117',
                border: '1px solid #1e2d3d',
                borderRadius: '4px',
              }}
            >
              <div
                className="font-mono text-text-muted"
                style={{ fontSize: '10px', letterSpacing: '0.06em', lineHeight: '1.8' }}
              >
                <div>PRIORITÉ: RECRUTEMENT OPÉRATEURS</div>
                <div>TAG ORG: [NHTSC]</div>
                <div>SECTEUR: STANTON / PYRO</div>
              </div>
            </div>
          </div>
        </div>

        {/* RSI divider */}
        <div
          className="rsi-divider mb-6"
          aria-hidden="true"
          style={{ color: '#1e2d3d' }}
        >
          <span className="font-mono" style={{ fontSize: '10px', color: '#2a3d52', letterSpacing: '0.1em' }}>
            ◆◇◆
          </span>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="font-mono text-text-muted"
            style={{ fontSize: '10px', letterSpacing: '0.06em', textAlign: 'center' }}
          >
            © 2954 Nexus Horizon Trade & Secure. Tous droits réservés.
          </p>
          <p
            className="font-mono text-text-muted"
            style={{ fontSize: '10px', letterSpacing: '0.06em', textAlign: 'center' }}
          >
            Star Citizen et RSI sont des marques de Roberts Space Industries Corp. Nexus Horizon Trade & Secure est un projet fan non-officiel.
          </p>
        </div>
      </div>
    </footer>
  )
}
