'use client'

import Image from 'next/image'
import { useTranslate } from '@tolgee/react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function CtaBanner() {
  const { t } = useTranslate()

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
        <div className="mx-auto px-10 py-20 flex flex-col items-center text-center" style={{ maxWidth: '1440px' }}>
          <div className="rsi-divider w-full max-w-md mb-10" aria-hidden="true" style={{ color: '#8a6f35' }}>
            <span className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>
              ◆ NHTSC ◆
            </span>
          </div>

          <div
            style={{
              width: '100%',
              maxWidth: '860px',
              border: '1px solid #2a3d52',
              borderRadius: '6px',
              overflow: 'hidden',
              marginBottom: '12px',
              background: '#0d1117',
            }}
          >
            <Image
              src="/images/landing/footer.jpg"
              alt={t('cta.image_alt', 'Nexus Horizon Trade & Secure recruitment banner')}
              width={1600}
              height={900}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div className="font-mono text-text-muted uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '0.2em' }} aria-hidden="true">
            {t('cta.section_label', '- APPLICATIONS OPEN -')}
          </div>

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
            {t('cta.heading', 'Join a mission-focused organization.')}
          </h2>

          <p className="font-body text-text-secondary mb-12" style={{ fontSize: '14px', lineHeight: '1.8', maxWidth: '520px' }}>
            {t(
              'cta.description',
              'We recruit reliable profiles for combat, logistics support, industry, and reconnaissance. Discipline matters more than image.'
            )}
          </p>

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
              {t('cta.primary_button', 'Open candidate file')}
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
              {t('cta.secondary_button', 'Read doctrine')}
            </a>
          </div>

          <div className="rsi-divider w-full max-w-md" aria-hidden="true" style={{ color: '#8a6f35' }}>
            <span className="font-mono" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>
              ◆ NHTSC-2954 ◆
            </span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
