import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function CtaBanner() {
  return (
    <section
      className="w-full"
      style={{
        background: '#111820',
        borderTop: '1px solid #c9a84c',
        borderBottom: '1px solid #c9a84c',
      }}
      id="recrutement"
      aria-labelledby="cta-heading"
    >
      <RevealOnScroll>
      <div
        className="mx-auto px-10 py-20 flex flex-col items-center text-center"
        style={{ maxWidth: '1440px' }}
      >
        {/* RSI divider ornament above */}
        <div
          className="rsi-divider w-full max-w-md mb-10"
          aria-hidden="true"
          style={{ color: '#8a6f35' }}
        >
          <span className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>◆ UEE ◆</span>
        </div>

        {/* Section label */}
        <div
          className="font-mono text-text-muted uppercase mb-6"
          style={{ fontSize: '11px', letterSpacing: '0.2em' }}
          aria-hidden="true"
        >
          — OUVERTURE DES CANDIDATURES —
        </div>

        {/* Heading */}
        <h2
          id="cta-heading"
          className="font-display text-text-primary uppercase mb-6"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            lineHeight: '1.2',
            maxWidth: '700px',
          }}
        >
          Intégrez une organisation orientée mission.
        </h2>

        <p
          className="font-body text-text-secondary mb-12"
          style={{ fontSize: '14px', lineHeight: '1.8', maxWidth: '520px' }}
        >
          Nous recrutons des profils fiables pour le combat, le soutien logistique,
          l&apos;industrie et la reconnaissance. Votre discipline compte plus que votre vitrine.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="#contact"
            className="btn-cta-primary font-mono uppercase text-center"
            style={{
              background: 'linear-gradient(135deg, #c9a84c 0%, #e8c56d 50%, #a07830 100%)',
              color: '#0d1117',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              padding: '14px 36px',
              borderRadius: '4px',
              boxShadow: '0 0 24px rgba(201,168,76,0.15)',
              display: 'inline-block',
            }}
          >
            OUVRIR LE DOSSIER CANDIDAT
          </a>
          <a
            href="#doctrine"
            className="btn-cta-secondary font-mono uppercase text-center"
            style={{
              background: 'transparent',
              color: '#c9a84c',
              border: '1px solid rgba(201,168,76,0.6)',
              fontSize: '13px',
              letterSpacing: '0.08em',
              padding: '13px 36px',
              borderRadius: '4px',
              display: 'inline-block',
            }}
          >
            LIRE LA DOCTRINE
          </a>
        </div>

        {/* RSI divider ornament below */}
        <div
          className="rsi-divider w-full max-w-md"
          aria-hidden="true"
          style={{ color: '#8a6f35' }}
        >
          <span className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>◆ NHTSC-2954 ◆</span>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}
