'use client'

import { useTranslate } from '@tolgee/react'

interface PortalOverviewProps {
  operator: string
}

export default function PortalOverview({ operator }: PortalOverviewProps) {
  const { t } = useTranslate()

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-5xl border border-border-default bg-bg-secondary p-8 sm:p-10" style={{ borderRadius: '8px' }}>
        <p className="font-mono uppercase text-cyan-primary" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
          {t('portal.section_label', '// AUTHORIZED ACCESS')}
        </p>
        <h1 className="font-display uppercase text-gold-primary mt-3" style={{ fontSize: '32px', letterSpacing: '0.08em' }}>
          {t('portal.heading', 'NEXUS PORTAL COMMAND BRIDGE')}
        </h1>
        <p className="font-body text-text-secondary mt-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
          {t('portal.description', 'Authentication validated. Your operational session is now active.')}
        </p>
        <p className="font-mono uppercase text-text-secondary mt-8" style={{ fontSize: '12px', letterSpacing: '0.08em' }}>
          {t('portal.operator_label', 'OPERATOR')}: {operator}
        </p>
      </div>
    </main>
  )
}
