'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { useTranslate } from '@tolgee/react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

interface FeatureCard {
  icon: ReactNode
  title: string
  description: string
}

function HierarchyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="2" width="8" height="6" rx="1" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <rect x="2" y="14" width="8" height="6" rx="1" stroke="#9ba8b4" strokeWidth="1.5" fill="none" />
      <rect x="12" y="14" width="8" height="6" rx="1" stroke="#9ba8b4" strokeWidth="1.5" fill="none" />
      <rect x="22" y="14" width="8" height="6" rx="1" stroke="#9ba8b4" strokeWidth="1.5" fill="none" />
      <line x1="16" y1="8" x2="16" y2="14" stroke="#c9a84c" strokeWidth="1.5" />
      <line x1="6" y1="14" x2="16" y2="10" stroke="#5a6a7a" strokeWidth="1" />
      <line x1="16" y1="10" x2="26" y2="14" stroke="#5a6a7a" strokeWidth="1" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 2L28 7V16C28 23 22 28 16 30C10 28 4 23 4 16V7L16 2Z" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <path d="M16 8L22 11V16C22 20 19 23 16 24C13 23 10 20 10 16V11L16 8Z" stroke="#9ba8b4" strokeWidth="1" fill="rgba(201,168,76,0.05)" />
      <line x1="16" y1="12" x2="16" y2="20" stroke="#c9a84c" strokeWidth="1.5" />
      <line x1="12" y1="16" x2="20" y2="16" stroke="#c9a84c" strokeWidth="1.5" />
    </svg>
  )
}

function ShipIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 4L28 12V20L16 28L4 20V12L16 4Z" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <path d="M16 10L22 14V18L16 22L10 18V14L16 10Z" stroke="#9ba8b4" strokeWidth="1" fill="none" />
      <circle cx="16" cy="16" r="2" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <line x1="4" y1="12" x2="10" y2="14" stroke="#5a6a7a" strokeWidth="1" />
      <line x1="28" y1="12" x2="22" y2="14" stroke="#5a6a7a" strokeWidth="1" />
      <line x1="4" y1="20" x2="10" y2="18" stroke="#5a6a7a" strokeWidth="1" />
      <line x1="28" y1="20" x2="22" y2="18" stroke="#5a6a7a" strokeWidth="1" />
    </svg>
  )
}

function RadarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="13" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="16" r="8" stroke="#9ba8b4" strokeWidth="1" fill="none" />
      <circle cx="16" cy="16" r="3" stroke="#9ba8b4" strokeWidth="1" fill="none" />
      <line x1="16" y1="3" x2="16" y2="29" stroke="#1e2d3d" strokeWidth="1" />
      <line x1="3" y1="16" x2="29" y2="16" stroke="#1e2d3d" strokeWidth="1" />
      <line x1="16" y1="16" x2="26" y2="6" stroke="#c9a84c" strokeWidth="1.5" />
      <circle cx="22" cy="11" r="1.5" fill="#35b6ec" />
      <circle cx="10" cy="20" r="1" fill="#35b6ec" opacity="0.5" />
    </svg>
  )
}

export default function FeaturesGrid() {
  const { t } = useTranslate()

  const features: FeatureCard[] = [
    {
      icon: <HierarchyIcon />,
      title: t('features.card_1_title', 'CHAIN OF COMMAND'),
      description: t(
        'features.card_1_desc',
        "A clear hierarchy, explicit ranks, and defined responsibilities. Every operator knows who to report to and what they commit to."
      ),
    },
    {
      icon: <ShieldIcon />,
      title: t('features.card_2_title', 'OPERATIONAL DOCTRINE'),
      description: t(
        'features.card_2_desc',
        'Preparation, execution, and debrief all follow one protocol. Missions are run with discipline, never improvised.'
      ),
    },
    {
      icon: <ShipIcon />,
      title: t('features.card_3_title', 'MULTI-VECTOR FLEET'),
      description: t(
        'features.card_3_desc',
        'Combat, logistics, exploration, and industrial support. Squads are organized to deploy the right force at the right moment.'
      ),
    },
    {
      icon: <RadarIcon />,
      title: t('features.card_4_title', 'INTEL AND SECURITY'),
      description: t(
        'features.card_4_desc',
        'Field intel, controlled information flow, and decision-chain protection. Information control remains a priority.'
      ),
    },
  ]

  return (
    <section className="w-full py-24 geo-grid-bg relative" style={{ background: '#0d1117' }} id="doctrine" aria-labelledby="features-heading">
      <div className="mx-auto px-10" style={{ maxWidth: '1440px' }}>
        <RevealOnScroll className="mb-16">
          <div className="font-mono text-text-muted uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }} aria-hidden="true">
            {t('features.section_label', '// PILLARS OF NEXUS HORIZON TRADE & SECURE')}
          </div>
          <h2 id="features-heading" className="font-display text-gold-primary uppercase" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, letterSpacing: '0.08em' }}>
            {t('features.heading', 'AN ORGANIZATION BUILT TO LAST')}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="mb-12">
          <div style={{ border: '1px solid #2a3d52', borderRadius: '8px', overflow: 'hidden', background: '#0d1117' }}>
            <Image
              src="/images/landing/teamup.png"
              alt={t('features.image_alt', 'Doctrine and fleet visual for Nexus Horizon Trade & Secure')}
              width={1600}
              height={900}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <article
                className="card--accent-gold feature-card"
                style={{
                  background: '#111820',
                  border: '1px solid #2a3d52',
                  borderRadius: '8px',
                  padding: '28px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    width: 12,
                    height: 12,
                    borderTop: '1px solid rgba(138,111,53,0.6)',
                    borderRight: '1px solid rgba(138,111,53,0.6)',
                    transition: 'border-color 0.25s ease',
                  }}
                />

                <div className="feature-icon mb-6">{feature.icon}</div>

                <h3 className="font-display text-gold-primary uppercase mb-3" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', lineHeight: '1.4' }}>
                  {feature.title}
                </h3>

                <p className="font-body text-text-secondary" style={{ fontSize: '13px', lineHeight: '1.75' }}>
                  {feature.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
