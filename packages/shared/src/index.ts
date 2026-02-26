// Nexus Portal — Shared Types & Constants
// Stub: will be populated as features are implemented.

// ─── UEE Date utilities ───────────────────────────────────────────────────────

/**
 * Format a date for display in UEE style: "30 NOV 2954"
 */
export function formatUEEDate(date: Date): string {
  return date
    .toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .toUpperCase()
}

/**
 * Format a date for technical display: "2954-11-30"
 */
export function formatUEETechnical(date: Date): string {
  return date.toISOString().split('T')[0]
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const APP_NAME = 'Nexus Portal' as const
export const APP_VERSION = 'NXP-3.21.0' as const
export const UEE_YEAR_OFFSET = 930 as const // Star Citizen UEE year = real year + offset

// ─── Types (stubs) ───────────────────────────────────────────────────────────
// Full types will be defined alongside Prisma models.

export type OrgScope = {
  orgId: string
}

export type SquadScope = {
  orgId: string
  squadId: string
}

export type PermissionAction =
  | 'org.read'
  | 'org.update'
  | 'org.delete'
  | 'squad.create'
  | 'squad.update'
  | 'squad.delete'
  | 'member.invite'
  | 'member.kick'
  | 'member.promote'
  | 'ops.create'
  | 'ops.update'
  | 'fleet.manage'
  | 'intel.read'
  | 'audit.read'
