'use client'

import Link from 'next/link'
import { useTranslate } from '@tolgee/react'
import Countdown from '@/components/dashboard/Countdown'
import DashboardPanel from '@/components/dashboard/DashboardPanel'
import DataTableMini from '@/components/dashboard/DataTableMini'
import EmptyState from '@/components/dashboard/EmptyState'
import LoaderRSI from '@/components/dashboard/LoaderRSI'
import StatusBadge from '@/components/dashboard/StatusBadge'
import type { DashboardPanelData, MemberDashboardData } from '@/lib/dashboard/types'

interface MemberDashboardOverviewProps {
  data: MemberDashboardData
  operator: string
}

function renderPanel<T>(
  panel: DashboardPanelData<T> | undefined,
  options: {
    onReady: (payload: T) => React.ReactNode
    loadingLabel: string
    emptyLabel: string
    errorLabel: (code: string) => string
  },
) {
  if (!panel || panel.state === 'empty' || !panel.data) {
    return <EmptyState message={options.emptyLabel} />
  }

  if (panel.state === 'loading') {
    return <LoaderRSI label={options.loadingLabel} />
  }

  if (panel.state === 'error') {
    return <EmptyState tone="error" message={options.errorLabel(panel.errorCode ?? 'ERR_0000')} />
  }

  return options.onReady(panel.data)
}

function formatIso(iso: string) {
  const date = new Date(iso)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export default function MemberDashboardOverview({ data, operator }: MemberDashboardOverviewProps) {
  const { t } = useTranslate()
  const formatErrorLabel = (code: string) =>
    t('dashboard.state.error', 'CONNEXION INTERROMPUE - Code {code}', { code })

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-12 gap-6">
        <div id="identity-record" className="col-span-12 lg:col-span-8">
          <DashboardPanel
            title={t('dashboard.panel.identity.title', '// IDENTITE ET STATUT')}
            subtitle={t('dashboard.panel.identity.subtitle', 'Enregistrement citoyen et statut operationnel courant.')}
          >
            {renderPanel(data.identity, {
              loadingLabel: t('dashboard.state.loading', 'SYNCHRONISATION EN COURS'),
              emptyLabel: t('dashboard.state.empty', 'AUCUNE DONNEE DETECTEE DANS CE SECTEUR'),
              errorLabel: formatErrorLabel,
              onReady: (identity) => (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-border-subtle bg-bg-primary p-3" style={{ borderRadius: '4px' }}>
                      <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                        {t('dashboard.identity.label.handle', 'HANDLE RSI')}
                      </p>
                      <p className="mt-1 font-ui text-[12px] uppercase tracking-[0.08em] text-text-primary">{identity.handle}</p>
                    </div>
                    <div className="border border-border-subtle bg-bg-primary p-3" style={{ borderRadius: '4px' }}>
                      <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                        {t('dashboard.identity.label.citizen_id', 'IDENTIFIANT CITOYEN')}
                      </p>
                      <p className="mt-1 font-ui text-[12px] uppercase tracking-[0.08em] text-text-primary">{identity.citizenId}</p>
                    </div>
                    <div className="border border-border-subtle bg-bg-primary p-3" style={{ borderRadius: '4px' }}>
                      <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                        {t('dashboard.identity.label.org', 'ORGANISATION')}
                      </p>
                      <p className="mt-1 font-ui text-[12px] uppercase tracking-[0.08em] text-text-primary">[{identity.orgTag}]</p>
                    </div>
                    <div className="border border-border-subtle bg-bg-primary p-3" style={{ borderRadius: '4px' }}>
                      <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                        {t('dashboard.identity.label.accreditation', 'NIVEAU D ACCREDITATION')}
                      </p>
                      <p className="mt-1 font-ui text-[12px] uppercase tracking-[0.08em] text-text-primary">
                        {t(identity.accreditationKey, 'OPERATEUR')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <StatusBadge
                      tone={identity.status === 'online' ? 'online' : identity.status === 'afk' ? 'warning' : 'offline'}
                      label={
                        identity.status === 'online'
                          ? t('dashboard.identity.status.online', 'ONLINE')
                          : identity.status === 'afk'
                            ? t('dashboard.identity.status.afk', 'AFK')
                            : t('dashboard.identity.status.offline', 'OFFLINE')
                      }
                    />
                    <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-secondary">
                      {t('dashboard.identity.label.reputation', 'REPUTATION')}: {identity.reputation}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center justify-center border border-gold-primary px-3 py-2 font-ui text-[11px] uppercase tracking-[0.08em] text-gold-primary transition-colors duration-200 hover:bg-gold-dark"
                      style={{ borderRadius: '4px' }}
                    >
                      {t('dashboard.identity.action.profile', 'ACCEDER AU PROFIL')}
                    </Link>
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center border border-border-default px-3 py-2 font-ui text-[11px] uppercase tracking-[0.08em] text-text-muted"
                      style={{ borderRadius: '4px' }}
                    >
                      {t('dashboard.identity.action.export_svg', 'EXPORTER CARTE (SVG)')}
                    </button>
                  </div>
                </div>
              ),
            })}
          </DashboardPanel>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <DashboardPanel
            title={t('dashboard.panel.session.title', '// SESSION')}
            subtitle={t('dashboard.panel.session.subtitle', 'Etat de la session membre et synchronisation terminal.')}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                  {t('dashboard.session.label.operator', 'OPERATEUR')}
                </p>
                <p className="font-ui text-[11px] uppercase tracking-[0.08em] text-cyan-primary">{operator}</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                  {t('dashboard.session.label.last_sync', 'DERNIERE SYNCHRONISATION')}
                </p>
                <p className="font-ui text-[11px] uppercase tracking-[0.08em] text-text-secondary">{formatIso(data.generatedAtIso)}</p>
              </div>
              <StatusBadge label={t('dashboard.session.status.live', 'SESSION ACTIVE')} tone="info" />
            </div>
          </DashboardPanel>
        </div>
      </section>

      <section className="border border-border-default bg-bg-secondary/40 p-4" style={{ borderRadius: '8px' }}>
        <header className="border-b border-border-subtle pb-3">
          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary">
            {t('dashboard.nav.operations', 'OPERATIONS')}
          </p>
        </header>
        <div className="mt-4 grid grid-cols-12 gap-6">
          <div id="panel-operations" className="col-span-12 lg:col-span-7">
            <DashboardPanel
              title={t('dashboard.panel.ops.title', '// CENTRE OPERATIONNEL')}
              subtitle={t('dashboard.panel.ops.subtitle', 'Prochaine operation planifiee et affectation immediate.')}
              action={
                <Link
                  href="/operations"
                  className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary transition-colors duration-200 hover:text-cyan-bright"
                >
                  {t('dashboard.panel.ops.action', 'VOIR OPERATIONS')}
                </Link>
              }
            >
              {renderPanel(data.operations, {
                loadingLabel: t('dashboard.state.loading', 'SYNCHRONISATION EN COURS'),
                emptyLabel: t('dashboard.state.empty', 'AUCUNE DONNEE DETECTEE DANS CE SECTEUR'),
                errorLabel: formatErrorLabel,
                onReady: (operations) => {
                  if (!operations.nextOperation) {
                    return <EmptyState message={t('dashboard.ops.no_upcoming', 'AUCUNE OPERATION PLANIFIEE')} />
                  }

                  return (
                    <div className="space-y-4">
                      <div className="border border-border-subtle bg-bg-primary p-4" style={{ borderRadius: '4px' }}>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">
                            {operations.nextOperation.id}
                          </p>
                          <Countdown
                            targetIso={operations.nextOperation.startsAtIso}
                            expiredLabel={t('dashboard.ops.started', 'OPERATION EN COURS')}
                          />
                        </div>
                        <p className="mt-2 font-body text-[14px] text-text-primary">
                          {t(operations.nextOperation.titleKey, 'ESCORTE CORRIDOR HURSTON')}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <StatusBadge
                            tone="info"
                            label={`${t('dashboard.ops.assigned_role', 'ROLE')}: ${t(operations.nextOperation.assignedRoleKey, 'FIGHTER LEAD')}`}
                          />
                          <StatusBadge
                            tone="warning"
                            label={`${t('dashboard.ops.assigned_slot', 'SLOT')}: ${operations.nextOperation.assignedSlot}`}
                          />
                        </div>
                      </div>
                    </div>
                  )
                },
              })}
            </DashboardPanel>
          </div>

          <div id="panel-communications" className="col-span-12 lg:col-span-5">
            <DashboardPanel
              title={t('dashboard.panel.comms.title', '// COMMUNICATIONS')}
              subtitle={t('dashboard.panel.comms.subtitle', 'Mentions, annonces et threads suivis (5 maximum).')}
              action={
                <Link
                  href="/communications"
                  className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary transition-colors duration-200 hover:text-cyan-bright"
                >
                  {t('dashboard.panel.comms.action', 'VOIR MODULE')}
                </Link>
              }
            >
              {renderPanel(data.communications, {
                loadingLabel: t('dashboard.state.loading', 'SYNCHRONISATION EN COURS'),
                emptyLabel: t('dashboard.state.empty', 'AUCUNE DONNEE DETECTEE DANS CE SECTEUR'),
                errorLabel: formatErrorLabel,
                onReady: (communications) => (
                  <DataTableMini
                    columns={[
                      {
                        key: 'kindLabel',
                        label: t('dashboard.comms.table.type', 'TYPE'),
                        render: (value) => <span className="font-ui text-[10px] uppercase tracking-[0.08em] text-cyan-primary">{String(value)}</span>,
                      },
                      {
                        key: 'channelLabel',
                        label: t('dashboard.comms.table.channel', 'CANAL'),
                        render: (value) => <span className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-secondary">{String(value)}</span>,
                      },
                      {
                        key: 'summaryLabel',
                        label: t('dashboard.comms.table.summary', 'DETAIL'),
                      },
                    ]}
                    rows={communications.items.map((item) => ({
                      kindLabel:
                        item.kind === 'mention'
                          ? t('dashboard.comms.kind.mention', 'MENTION')
                          : item.kind === 'announcement'
                            ? t('dashboard.comms.kind.announcement', 'ANNONCE')
                            : t('dashboard.comms.kind.thread', 'THREAD'),
                      channelLabel: t(item.channelKey, 'CHANNEL'),
                      summaryLabel: `${item.unread ? '[' + t('dashboard.comms.unread', 'NON LU') + '] ' : ''}${t(item.summaryKey, 'Mise a jour communication.')}`,
                    }))}
                  />
                ),
              })}
            </DashboardPanel>
          </div>
        </div>
      </section>

      <section className="border border-border-default bg-bg-secondary/40 p-4" style={{ borderRadius: '8px' }}>
        <header className="border-b border-border-subtle pb-3">
          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary">
            {t('dashboard.nav.intel', 'INTEL')}
          </p>
        </header>
        <div className="mt-4 grid grid-cols-12 gap-6">
          <div id="panel-intel" className="col-span-12 lg:col-span-6">
            <DashboardPanel
              title={t('dashboard.panel.intel.title', '// INTEL RECENT')}
              subtitle={t('dashboard.panel.intel.subtitle', 'Derniers reports non expires visibles par le membre.')}
              action={
                <Link
                  href="/intel"
                  className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary transition-colors duration-200 hover:text-cyan-bright"
                >
                  {t('dashboard.panel.intel.action', 'VOIR INTEL BOARD')}
                </Link>
              }
            >
              {renderPanel(data.intel, {
                loadingLabel: t('dashboard.state.loading', 'SYNCHRONISATION EN COURS'),
                emptyLabel: t('dashboard.state.empty', 'AUCUNE DONNEE DETECTEE DANS CE SECTEUR'),
                errorLabel: formatErrorLabel,
                onReady: (intel) => (
                  <div className="space-y-3">
                    {intel.reports.map((report) => (
                      <article
                        key={report.id}
                        className="border border-border-subtle bg-bg-primary p-3"
                        style={{ borderRadius: '4px' }}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-gold-primary">
                            {report.id} / {report.sector}
                          </p>
                          <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                            {formatIso(report.expiresAtIso)}
                          </p>
                        </div>
                        <p className="mt-2 font-body text-[13px] leading-relaxed text-text-secondary">
                          {t(report.summaryKey, 'Report intel mis a jour.')}
                        </p>
                      </article>
                    ))}
                  </div>
                ),
              })}
            </DashboardPanel>
          </div>

          <div id="panel-fleet" className="col-span-12 lg:col-span-3">
            <DashboardPanel
              title={t('dashboard.panel.fleet.title', '// FLEET')}
              subtitle={t('dashboard.panel.fleet.subtitle', 'Disponibilite immediate du registre de flotte.')}
              action={
                <Link
                  href="/fleet"
                  className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary transition-colors duration-200 hover:text-cyan-bright"
                >
                  {t('dashboard.panel.fleet.action', 'VOIR REGISTRY')}
                </Link>
              }
            >
              {renderPanel(data.fleet, {
                loadingLabel: t('dashboard.state.loading', 'SYNCHRONISATION EN COURS'),
                emptyLabel: t('dashboard.state.empty', 'AUCUNE DONNEE DETECTEE DANS CE SECTEUR'),
                errorLabel: formatErrorLabel,
                onReady: (fleet) => (
                  <div className="grid grid-cols-1 gap-3">
                    <div className="border border-border-subtle bg-bg-primary p-3" style={{ borderRadius: '4px' }}>
                      <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                        {t('dashboard.fleet.available', 'DISPONIBLES')}
                      </p>
                      <p className="mt-1 font-display text-xl uppercase tracking-[0.06em] text-gold-primary">{fleet.available}</p>
                    </div>
                    <div className="border border-border-subtle bg-bg-primary p-3" style={{ borderRadius: '4px' }}>
                      <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                        {t('dashboard.fleet.in_service', 'EN SERVICE')}
                      </p>
                      <p className="mt-1 font-display text-xl uppercase tracking-[0.06em] text-cyan-primary">{fleet.inService}</p>
                    </div>
                    <div className="border border-border-subtle bg-bg-primary p-3" style={{ borderRadius: '4px' }}>
                      <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                        {t('dashboard.fleet.in_repair', 'EN REPARATION')}
                      </p>
                      <p className="mt-1 font-display text-xl uppercase tracking-[0.06em] text-status-warning">{fleet.inRepair}</p>
                    </div>
                  </div>
                ),
              })}
            </DashboardPanel>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <DashboardPanel
              title={t('dashboard.panel.notifications.title', '// NOTIFICATIONS')}
              subtitle={t('dashboard.panel.notifications.subtitle', 'Evenements recents et badges non lus.')}
              action={
                <StatusBadge tone="info" label={t('dashboard.notifications.source_mock', 'SOURCE: MOCK-SRV')} />
              }
            >
              {renderPanel(data.notifications, {
                loadingLabel: t('dashboard.state.loading', 'SYNCHRONISATION EN COURS'),
                emptyLabel: t('dashboard.state.empty', 'AUCUNE DONNEE DETECTEE DANS CE SECTEUR'),
                errorLabel: formatErrorLabel,
                onReady: (notifications) => (
                  <div className="space-y-3">
                    {notifications.items.map((event) => (
                      <article key={event.id} className="border border-border-subtle bg-bg-primary p-3" style={{ borderRadius: '4px' }}>
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-ui text-[10px] uppercase tracking-[0.08em] text-gold-primary">
                            {t(event.titleKey, 'EVENEMENT')}
                          </p>
                          {event.unread ? <StatusBadge tone="warning" label={t('dashboard.notifications.unread', 'NON LU')} /> : null}
                        </div>
                        <p className="mt-2 font-body text-[13px] text-text-secondary">{t(event.detailKey, 'Notification operationnelle.')}</p>
                      </article>
                    ))}
                  </div>
                ),
              })}
            </DashboardPanel>
          </div>
        </div>
      </section>

      {data.command ? (
        <section className="border border-border-default bg-bg-secondary/40 p-4" style={{ borderRadius: '8px' }}>
          <header className="border-b border-border-subtle pb-3">
            <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary">
              {t('dashboard.panel.command.title', '// CONSOLE COMMANDEMENT')}
            </p>
          </header>
          <div className="mt-4">
            <DashboardPanel
              title={t('dashboard.panel.command.title', '// CONSOLE COMMANDEMENT')}
              subtitle={t('dashboard.panel.command.subtitle', 'Statistiques rapides organisation reservees aux officiers.')}
            >
              {renderPanel(data.command, {
                loadingLabel: t('dashboard.state.loading', 'SYNCHRONISATION EN COURS'),
                emptyLabel: t('dashboard.state.empty', 'AUCUNE DONNEE DETECTEE DANS CE SECTEUR'),
                errorLabel: formatErrorLabel,
                onReady: (command) => (
                  <DataTableMini
                    columns={[
                      { key: 'label', label: t('dashboard.command.table.metric', 'METRIQUE') },
                      {
                        key: 'value',
                        label: t('dashboard.command.table.value', 'VALEUR'),
                        render: (value) =>
                          value ? (
                            <span className="font-ui text-[11px] uppercase tracking-[0.08em] text-cyan-primary">{String(value)}</span>
                          ) : (
                            <StatusBadge tone="warning" label={t('dashboard.command.syncing', 'SYNCHRONISATION EN COURS')} />
                          ),
                      },
                    ]}
                    rows={command.stats.map((stat) => ({
                      label: t(stat.labelKey, 'METRIQUE'),
                      value: stat.value,
                    }))}
                  />
                ),
              })}
            </DashboardPanel>
          </div>
        </section>
      ) : null}
    </div>
  )
}
