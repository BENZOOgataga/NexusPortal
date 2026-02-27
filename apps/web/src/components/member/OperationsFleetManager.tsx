'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslate } from '@tolgee/react'
import type { FleetShipRecord } from '@/lib/fleet/types'

interface OperationsFleetManagerProps {
  ships: FleetShipRecord[]
}

function ActionRecallIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 7L4 12L9 17" stroke="#8a6f35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 7H11.5C8.5 7 6 9.5 6 12.5C6 15.5 8.5 18 11.5 18H17" stroke="#8a6f35" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 14L19 19L20 18" stroke="#8a6f35" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ActionTrackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C14.8 17.7 18 14.8 18 10.8C18 7.1 15.3 4 12 4C8.7 4 6 7.1 6 10.8C6 14.8 9.2 17.7 12 21Z" stroke="#8a6f35" strokeWidth="1.8" />
      <circle cx="12" cy="10.5" r="2.3" stroke="#8a6f35" strokeWidth="1.8" />
    </svg>
  )
}

export default function OperationsFleetManager({ ships }: OperationsFleetManagerProps) {
  const { t } = useTranslate()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [activeShipId, setActiveShipId] = useState<string | null>(null)

  function vehicleKeyFromCode(code: string) {
    return `member.operations.fleet_manager.row.${code.replace(/-/g, '_')}`
  }

  function infoKey(label: string) {
    return `member.operations.fleet_manager.value.${label}`
  }

  function locationKey(label: string) {
    return `member.operations.fleet_manager.value.${label}`
  }

  function statusLabelKey(status: FleetShipRecord['statusLabel']) {
    return `member.operations.fleet_manager.status.${status}`
  }

  function focusKey(label: string) {
    return `member.operations.fleet_manager.value.focus.${label}`
  }

  async function mutateShip(shipId: string, action: 'cycle_status' | 'toggle_track') {
    setActiveShipId(shipId)
    startTransition(async () => {
      await fetch('/api/fleet/ships', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shipId, action }),
      })
      router.refresh()
      setActiveShipId(null)
    })
  }

  return (
    <section className="space-y-4">
      <div
        className="overflow-hidden border border-border-gold bg-[linear-gradient(180deg,#070c12_0%,#090e15_60%,#101923_100%)] shadow-glow-gold"
        style={{ borderRadius: '10px' }}
      >
        <div className="border-b border-gold-dark px-4 py-4">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3L20 18H4L12 3Z" stroke="#c9a84c" strokeWidth="1.8" />
              <path d="M12 8V15" stroke="#c9a84c" strokeWidth="1.8" />
              <path d="M9 12H15" stroke="#c9a84c" strokeWidth="1.8" />
            </svg>
            <h2 className="font-display text-[46px] uppercase tracking-[0.04em] text-text-primary sm:text-[52px]">
              {t('member.operations.fleet_manager.title', 'Fleet Manager')}
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full border-collapse">
            <thead>
              <tr className="border-b border-gold-dark bg-[rgba(8,9,10,0.85)]">
                <th className="px-4 py-3 text-left font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">{t('member.operations.fleet_manager.col.vehicle', 'VEHICLE')}</th>
                <th className="px-4 py-3 text-left font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">{t('member.operations.fleet_manager.col.info', 'INFO')}</th>
                <th className="px-4 py-3 text-left font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">{t('member.operations.fleet_manager.col.location', 'LOCATION')}</th>
                <th className="px-4 py-3 text-left font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">{t('member.operations.fleet_manager.col.status', 'STATUS')}</th>
                <th className="px-4 py-3 text-left font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">{t('member.operations.fleet_manager.col.focus', 'FOCUS')}</th>
                <th className="px-4 py-3 text-left font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">{t('member.operations.fleet_manager.col.cargo', 'CARGO')}</th>
                <th className="px-4 py-3 text-left font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">{t('member.operations.fleet_manager.col.crew', 'CREW')}</th>
                <th className="px-4 py-3 text-left font-ui text-[11px] uppercase tracking-[0.1em] text-gold-primary">{t('member.operations.fleet_manager.col.actions', 'ACTIONS')}</th>
              </tr>
            </thead>
            <tbody>
              {ships.map((row, index) => {
                const isSelected = index === 1
                const isActive = isPending && activeShipId === row.id
                return (
                  <tr
                    key={row.id}
                    className="border-b border-[rgba(138,111,53,0.4)]"
                    style={{
                      background: isSelected ? 'rgba(13,17,23,0.88)' : 'linear-gradient(90deg, #c9a84c 0%, #d8b65a 100%)',
                    }}
                  >
                    <td className="px-4 py-4 font-body text-[16px] font-semibold text-[#2a2a2a]" style={{ color: isSelected ? '#d7d7d7' : '#2a2a2a' }}>
                      {t(vehicleKeyFromCode(row.shipCode), row.vehicleName)}
                    </td>
                    <td className="px-4 py-4 font-body text-[16px] font-semibold" style={{ color: isSelected ? '#b9b9b9' : '#2a2a2a' }}>
                      {t(infoKey(row.infoLabel), row.infoLabel)}
                    </td>
                    <td className="px-4 py-4 font-body text-[16px] font-semibold" style={{ color: isSelected ? '#b9b9b9' : '#2a2a2a' }}>
                      {t(locationKey(row.locationLabel), row.locationLabel)}
                    </td>
                    <td className="px-4 py-4 font-ui text-[16px] font-bold" style={{ color: isSelected ? '#b9b9b9' : '#2a2a2a' }}>
                      {t(statusLabelKey(row.statusLabel), row.statusLabel)}
                    </td>
                    <td className="px-4 py-4 font-body text-[16px] font-semibold" style={{ color: isSelected ? '#d7d7d7' : '#2a2a2a' }}>
                      {t(focusKey(row.focusLabel), row.focusLabel)}
                    </td>
                    <td className="px-4 py-4 font-body text-[16px] font-bold" style={{ color: isSelected ? '#d7d7d7' : '#2a2a2a' }}>
                      {row.cargo}
                    </td>
                    <td className="px-4 py-4 font-body text-[16px] font-bold" style={{ color: isSelected ? '#d7d7d7' : '#2a2a2a' }}>
                      {row.crew}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          disabled={isPending}
                          className="rounded-sm border border-transparent p-1 transition-colors duration-150 hover:border-gold-dark"
                          aria-label={t('member.operations.fleet_manager.action.retrieve', 'Retrieve')}
                          onClick={() => mutateShip(row.id, 'cycle_status')}
                        >
                          <ActionRecallIcon />
                        </button>
                        <button
                          type="button"
                          disabled={isPending}
                          className="rounded-sm border border-transparent p-1 transition-colors duration-150 hover:border-gold-dark"
                          aria-label={t(
                            row.isTracked
                              ? 'member.operations.fleet_manager.action.untrack'
                              : 'member.operations.fleet_manager.action.track',
                            row.isTracked ? 'Untrack' : 'Track',
                          )}
                          onClick={() => mutateShip(row.id, 'toggle_track')}
                        >
                          <ActionTrackIcon />
                        </button>
                        {row.isTracked ? (
                          <span className="font-ui text-[10px] uppercase tracking-[0.08em] text-cyan-primary">
                            {t('member.operations.fleet_manager.track_state.on', 'TRACKED')}
                          </span>
                        ) : null}
                        {isActive ? (
                          <span className="font-ui text-[10px] uppercase tracking-[0.08em] text-text-muted">
                            {t('member.operations.fleet_manager.syncing', 'SYNC')}
                          </span>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-gold-dark bg-[rgba(7,12,18,0.9)] px-4 py-2">
          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-text-muted">
            {t('member.operations.fleet_manager.footer.total', 'TOTALS')}: {ships.length}
          </p>
          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary">
            {t('member.operations.fleet_manager.footer.rank', 'RANK')}: 02
          </p>
        </div>
      </div>
    </section>
  )
}
