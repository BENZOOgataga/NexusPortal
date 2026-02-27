'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslate } from '@tolgee/react'
import { authClient } from '@/lib/auth-client'

interface MemberDashboardOverviewProps {
  operator: string
}

export default function MemberDashboardOverview({ operator }: MemberDashboardOverviewProps) {
  const { t } = useTranslate()
  const [isMutating, setIsMutating] = useState(false)

  async function handleSignOut() {
    try {
      setIsMutating(true)
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = '/'
          },
        },
      })
    } finally {
      setIsMutating(false)
    }
  }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary px-6 py-16 sm:px-10">
      <div
        className="mx-auto max-w-5xl border border-border-default bg-bg-secondary p-8 sm:p-10"
        style={{ borderRadius: '8px' }}
      >
        <p className="font-mono uppercase text-cyan-primary" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
          {t('member.dashboard_section_label', '// MEMBER COMMAND DASHBOARD')}
        </p>
        <h1 className="font-display uppercase text-gold-primary mt-3" style={{ fontSize: '32px', letterSpacing: '0.08em' }}>
          {t('member.dashboard_heading', 'NEXUS HORIZON MEMBER BRIDGE')}
        </h1>
        <p className="font-body text-text-secondary mt-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
          {t('member.dashboard_description', 'Authentication complete. Your command session is active and synchronized.')}
        </p>
        <p className="font-mono uppercase text-text-secondary mt-8" style={{ fontSize: '12px', letterSpacing: '0.08em' }}>
          {t('member.dashboard_operator_label', 'OPERATOR')}: {operator}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/"
            className="font-mono uppercase text-cyan-primary hover:text-cyan-bright transition-colors duration-200"
            style={{ fontSize: '11px', letterSpacing: '0.1em' }}
          >
            {t('member.dashboard_action_return', 'RETURN TO LANDING')}
          </Link>
          <button
            type="button"
            className="font-mono uppercase text-text-muted hover:text-cyan-primary transition-colors duration-200 disabled:opacity-70"
            style={{ fontSize: '11px', letterSpacing: '0.1em' }}
            onClick={handleSignOut}
            disabled={isMutating}
          >
            {isMutating ? t('auth.action_disconnect_pending', 'SIGNING OUT') : t('auth.action_disconnect', 'SIGN OUT')}
          </button>
        </div>
      </div>
    </main>
  )
}
