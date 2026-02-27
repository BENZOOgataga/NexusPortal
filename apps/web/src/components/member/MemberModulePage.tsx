'use client'

import Link from 'next/link'
import { useTranslate } from '@tolgee/react'
import DashboardPanel from '@/components/dashboard/DashboardPanel'
import EmptyState from '@/components/dashboard/EmptyState'

interface MemberModulePageProps {
  titleKey: string
  titleFallback: string
  descriptionKey: string
  descriptionFallback: string
}

export default function MemberModulePage({
  titleKey,
  titleFallback,
  descriptionKey,
  descriptionFallback,
}: MemberModulePageProps) {
  const { t } = useTranslate()

  return (
    <div className="space-y-6">
      <div
        className="border border-border-default bg-bg-secondary/40 p-4"
        style={{ borderRadius: '8px' }}
      >
        <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary">
          {t(titleKey, titleFallback)}
        </p>
      </div>

      <DashboardPanel
        title={t(titleKey, titleFallback)}
        subtitle={t(descriptionKey, descriptionFallback)}
        action={
          <Link
            href="/dashboard"
            className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary transition-colors duration-200 hover:text-cyan-bright"
          >
            {t('member.page.back_dashboard', 'RETOUR DASHBOARD')}
          </Link>
        }
      >
        <EmptyState message={t('member.page.placeholder.note', 'SYNCHRONISATION EN COURS')} />
      </DashboardPanel>
    </div>
  )
}
