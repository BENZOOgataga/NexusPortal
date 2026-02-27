'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslate } from '@tolgee/react'
import DashboardShell from '@/components/dashboard/DashboardShell'
import { authClient } from '@/lib/auth-client'

interface MemberConsoleShellProps {
  operator: string
  orgTag: string
  children: React.ReactNode
}

export default function MemberConsoleShell({
  operator,
  orgTag,
  children,
}: MemberConsoleShellProps) {
  const { t } = useTranslate()
  const pathname = usePathname()
  const [isSigningOut, setIsSigningOut] = useState(false)

  async function handleSignOut() {
    try {
      setIsSigningOut(true)
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = '/'
          },
        },
      })
    } finally {
      setIsSigningOut(false)
    }
  }

  const navItems = [
    { key: t('dashboard.nav.member_hub', 'MEMBER HUB'), href: '/dashboard' },
    { key: t('dashboard.nav.operations', 'OPERATIONS'), href: '/operations' },
    { key: t('dashboard.nav.communications', 'COMMUNICATIONS'), href: '/communications' },
    { key: t('dashboard.nav.intel', 'INTEL'), href: '/intel' },
    { key: t('dashboard.nav.fleet', 'FLEET'), href: '/fleet' },
  ].map((item) => ({
    ...item,
    active: pathname === item.href,
  }))

  return (
    <DashboardShell
      brandTitle={t('dashboard.shell.brand', 'NEXUS HORIZON COMMAND NET')}
      navItems={navItems}
      topbarLeft={
        <p className="truncate font-ui text-[10px] uppercase tracking-[0.1em] text-text-muted">
          {t('dashboard.shell.topbar_left', 'NEXUS HORIZON // MEMBER TERMINAL // CLASSIFIED')}
        </p>
      }
      topbarRight={
        <div className="flex items-center gap-3">
          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-text-muted">
            {t('dashboard.shell.topbar_org', 'ORG')}: [{orgTag}]
          </p>
          <button
            type="button"
            className="font-ui text-[10px] uppercase tracking-[0.1em] text-text-secondary transition-colors duration-200 hover:text-cyan-primary"
            onClick={handleSignOut}
            disabled={isSigningOut}
          >
            {isSigningOut
              ? t('auth.action_disconnect_pending', 'SIGNING OUT')
              : t('auth.action_disconnect', 'SIGN OUT')}
          </button>
        </div>
      }
      sidebar={
        <div
          className="border border-border-default bg-bg-secondary p-4"
          style={{ borderRadius: '8px' }}
        >
          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary">
            {t('dashboard.panel.session.title', '// SESSION')}
          </p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                {t('dashboard.session.label.operator', 'OPERATEUR')}
              </p>
              <p className="font-ui text-[11px] uppercase tracking-[0.08em] text-cyan-primary">
                {operator}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                {t('dashboard.session.label.last_sync', 'DERNIERE SYNCHRONISATION')}
              </p>
              <p className="font-ui text-[11px] uppercase tracking-[0.08em] text-text-secondary">
                {new Date().toISOString().slice(0, 16).replace('T', ' ')}
              </p>
            </div>
          </div>
        </div>
      }
    >
      {children}
    </DashboardShell>
  )
}
