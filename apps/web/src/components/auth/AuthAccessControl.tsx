'use client'

import Link from 'next/link'
import { useTranslate } from '@tolgee/react'
import { authClient } from '@/lib/auth-client'

export default function AuthAccessControl() {
  const { t } = useTranslate()
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return (
      <span className="font-mono uppercase text-text-muted" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
        {t('auth.status_syncing', 'AUTH_SYNC')}
      </span>
    )
  }

  if (session?.user) {
    return (
      <Link
        href="/dashboard"
        className="font-mono uppercase text-text-secondary hover:text-gold-primary transition-colors duration-200"
        style={{ fontSize: '10px', letterSpacing: '0.1em' }}
      >
        {t('auth.action_open_dashboard', 'MEMBER DASHBOARD')}
      </Link>
    )
  }

  return (
    <Link
      href="/sign-in"
      className="font-mono uppercase text-text-secondary hover:text-gold-primary transition-colors duration-200"
      style={{ fontSize: '10px', letterSpacing: '0.1em' }}
    >
      {t('auth.nav_log_in', 'LOG IN')}
    </Link>
  )
}
