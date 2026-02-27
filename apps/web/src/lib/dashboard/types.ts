export type DashboardPanelState = 'ready' | 'loading' | 'empty' | 'error'

export interface DashboardPanelData<T> {
  state: DashboardPanelState
  data?: T
  errorCode?: string
}

export type PresenceStatus = 'online' | 'afk' | 'offline'

export interface DashboardIdentityCard {
  handle: string
  orgTag: string
  citizenId: string
  status: PresenceStatus
  accreditationKey: string
  reputation: number
}

export interface DashboardOperation {
  id: string
  titleKey: string
  startsAtIso: string
  assignedRoleKey: string
  assignedSlot: string
}

export interface DashboardOperationsCenter {
  nextOperation?: DashboardOperation
  operationsHref: string
}

export type CommunicationKind = 'mention' | 'announcement' | 'thread'

export interface DashboardCommunicationItem {
  id: string
  kind: CommunicationKind
  channelKey: string
  summaryKey: string
  createdAtIso: string
  unread: boolean
}

export interface DashboardCommunications {
  items: DashboardCommunicationItem[]
  communicationsHref: string
}

export interface DashboardIntelReport {
  id: string
  sector: string
  summaryKey: string
  expiresAtIso: string
}

export interface DashboardIntel {
  reports: DashboardIntelReport[]
  intelHref: string
}

export interface DashboardFleetSummary {
  available: number
  inService: number
  inRepair: number
  fleetHref: string
}

export interface DashboardNotificationItem {
  id: string
  titleKey: string
  detailKey: string
  unread: boolean
  createdAtIso: string
}

export interface DashboardNotifications {
  source: 'mock-server'
  notificationsHref: string
  items: DashboardNotificationItem[]
}

export interface DashboardCommandStat {
  labelKey: string
  value?: string
}

export interface DashboardCommandConsole {
  stats: DashboardCommandStat[]
}

export interface MemberDashboardData {
  generatedAtIso: string
  orgTag: string
  identity?: DashboardPanelData<DashboardIdentityCard>
  operations?: DashboardPanelData<DashboardOperationsCenter>
  communications?: DashboardPanelData<DashboardCommunications>
  intel?: DashboardPanelData<DashboardIntel>
  fleet?: DashboardPanelData<DashboardFleetSummary>
  notifications?: DashboardPanelData<DashboardNotifications>
  command?: DashboardPanelData<DashboardCommandConsole>
}
