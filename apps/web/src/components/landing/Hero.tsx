'use client'

function DecorativeHex() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 'min(70vw, 700px)',
        height: 'min(70vw, 700px)',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.045,
        pointerEvents: 'none',
      }}
    >
      <polygon points="200,20 360,110 360,290 200,380 40,290 40,110" stroke="#c9a84c" strokeWidth="1" fill="none"/>
      <polygon points="200,50 335,125 335,275 200,350 65,275 65,125" stroke="#c9a84c" strokeWidth="0.5" fill="none"/>
      <polygon points="200,90 310,148 310,252 200,310 90,252 90,148" stroke="#c9a84c" strokeWidth="0.5" fill="none"/>
      <line x1="200" y1="20"  x2="200" y2="380" stroke="#c9a84c" strokeWidth="0.3"/>
      <line x1="40"  y1="110" x2="360" y2="290" stroke="#c9a84c" strokeWidth="0.3"/>
      <line x1="40"  y1="290" x2="360" y2="110" stroke="#c9a84c" strokeWidth="0.3"/>
      <circle cx="200" cy="200" r="12" stroke="#c9a84c" strokeWidth="0.8" fill="none"/>
      <circle cx="200" cy="200" r="4"  fill="#c9a84c" opacity="0.5"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #04050a 0%, #08090a 30%, #0d1117 60%, #0a1520 100%)',
      }}
      aria-labelledby="hero-heading"
    >
      {/* ── Animated star layers ── */}
      <div className="absolute inset-0 star-field-1 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 star-field-2 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 star-field-3 pointer-events-none" aria-hidden="true" />

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(4,5,10,0.75) 100%)',
        }}
      />

      {/* ── Decorative hex geometry ── */}
      <DecorativeHex />

      {/* ── Scan line sweep ── */}
      <div className="hero-scan-line" aria-hidden="true" />

      {/* ── Top edge line ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.15) 30%, rgba(201,168,76,0.4) 50%, rgba(201,168,76,0.15) 70%, transparent 100%)',
        }}
      />

      {/* ── Main content ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ maxWidth: '860px', paddingTop: '80px', paddingBottom: '80px' }}
      >
        {/* Corner decorators */}
        <div className="absolute pointer-events-none" aria-hidden="true" style={{ inset: 0 }}>
          <span style={{ position:'absolute', top:0, left:0, width:20, height:20, borderTop:'1px solid rgba(201,168,76,0.5)', borderLeft:'1px solid rgba(201,168,76,0.5)' }} />
          <span style={{ position:'absolute', top:0, right:0, width:20, height:20, borderTop:'1px solid rgba(201,168,76,0.5)', borderRight:'1px solid rgba(201,168,76,0.5)' }} />
          <span style={{ position:'absolute', bottom:0, left:0, width:20, height:20, borderBottom:'1px solid rgba(201,168,76,0.5)', borderLeft:'1px solid rgba(201,168,76,0.5)' }} />
          <span style={{ position:'absolute', bottom:0, right:0, width:20, height:20, borderBottom:'1px solid rgba(201,168,76,0.5)', borderRight:'1px solid rgba(201,168,76,0.5)' }} />
        </div>

        {/* UEE classification label */}
        <div
          className="hero-el font-mono uppercase mb-8"
          style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#5a6a7a', animationDelay: '0.3s' }}
        >
          — ORGANISATION MULTI-VECTEUR — UEE 2954 —
        </div>

        {/* Org name */}
        <h1
          id="hero-heading"
          className="hero-el font-display uppercase"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '0.14em',
            lineHeight: '1.0',
            marginBottom: '20px',
            color: '#c9a84c',
            textShadow: '0 0 60px rgba(201,168,76,0.25), 0 0 120px rgba(201,168,76,0.1)',
            animationDelay: '0.55s',
          }}
        >
          NEXUS HORIZON TRADE & SECURE
        </h1>

        {/* Motto */}
        <p
          className="hero-el font-display uppercase"
          style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            color: '#9ba8b4',
            marginBottom: '32px',
            animationDelay: '0.75s',
          }}
        >
          Au-delà de l&apos;horizon.
        </p>

        {/* Divider */}
        <div
          className="hero-el-fade rsi-divider w-full mb-8"
          style={{ maxWidth: '280px', animationDelay: '0.95s' }}
          aria-hidden="true"
        >
          <span className="font-mono text-gold-muted" style={{ fontSize: '11px' }}>◆</span>
        </div>

        {/* Org description */}
        <p
          className="hero-el font-body text-text-secondary mb-12"
          style={{
            fontSize: '14px',
            lineHeight: '1.9',
            maxWidth: '580px',
            letterSpacing: '0.01em',
            animationDelay: '1.05s',
          }}
        >
          Fondée pour opérer là où d&apos;autres s&apos;arrêtent.
          Combat, commandement stratégique, exploration profonde et opérations industrielles —
          Nexus Horizon Trade & Secure couvre tous les vecteurs avec discipline, structure et initiative.
          Chaque membre est un opérateur. Chaque décision, un engagement.
        </p>

        {/* CTAs */}
        <div
          className="hero-el flex flex-col sm:flex-row gap-4 mb-14"
          style={{ animationDelay: '1.2s' }}
        >
          <a
            href="#recrutement"
            className="btn-cta-primary font-mono uppercase text-center"
            style={{
              background: 'linear-gradient(135deg, #c9a84c 0%, #e8c56d 50%, #a07830 100%)',
              color: '#0d1117',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              padding: '14px 40px',
              borderRadius: '4px',
              boxShadow: '0 0 20px rgba(201,168,76,0.2)',
              display: 'inline-block',
            }}
          >
            REJOINDRE LA FLOTTE
          </a>
          <a
            href="#doctrine"
            className="btn-cta-secondary font-mono uppercase text-center"
            style={{
              background: 'transparent',
              color: '#c9a84c',
              border: '1px solid rgba(201,168,76,0.6)',
              fontSize: '13px',
              letterSpacing: '0.10em',
              padding: '13px 40px',
              borderRadius: '4px',
              display: 'inline-block',
            }}
          >
            DÉCOUVRIR L&apos;ORGANISATION
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="hero-el-fade font-mono text-text-muted uppercase flex flex-col items-center gap-2"
          style={{ fontSize: '10px', letterSpacing: '0.2em', animationDelay: '1.6s' }}
          aria-hidden="true"
        >
          <span>↓ EXPLORER</span>
          <span style={{ display:'block', width:'1px', height:'32px', background:'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{ height: '160px', background: 'linear-gradient(to bottom, transparent, #0d1117)' }}
      />
    </section>
  )
}
