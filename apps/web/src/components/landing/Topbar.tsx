'use client'

import { useTranslate } from '@tolgee/react'
import LanguageSwitcher from '@/components/i18n/LanguageSwitcher'
import AuthAccessControl from '@/components/auth/AuthAccessControl'

export default function Topbar() {
  const { t } = useTranslate()

  return (
    <div
      className="w-full bg-bg-void border-b border-border-subtle"
      style={{ height: '40px' }}
      role="banner"
      aria-label={t('topbar.aria_status_bar', 'Organization status bar')}
    >
      <div className="mx-auto flex items-center justify-between h-full px-10" style={{ maxWidth: '1440px' }}>
        <div className="flex items-center gap-2">
          <span className="font-mono text-text-muted uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
            {t('topbar.banner', 'NEXUS HORIZON - NHTSC OPERATIONAL ORGANIZATION')}
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <span className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#4caf82' }}>
            {t('topbar.recruitment_open', 'RECRUITMENT: OPEN')}
          </span>
          <span className="font-mono text-text-muted uppercase" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
            {t('topbar.tag', 'TAG')}: [NHTSC]
          </span>
          <AuthAccessControl />
          <LanguageSwitcher />
          <span className="font-mono text-text-muted uppercase hidden sm:inline" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
            2954-02-26
          </span>
        </div>
      </div>
    </div>
  )
}


