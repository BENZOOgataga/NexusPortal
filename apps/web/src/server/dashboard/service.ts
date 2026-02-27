import 'server-only'
import { z } from 'zod'
import type {
  DashboardCommandConsole,
  DashboardCommunications,
  DashboardFleetSummary,
  DashboardIdentityCard,
  DashboardIntel,
  DashboardNotifications,
  DashboardOperationsCenter,
  DashboardPanelData,
  DashboardPanelState,
  MemberDashboardData,
} from '@/lib/dashboard/types'
import {
  assertCan,
  buildPolicyContext,
  can,
  type PolicyAction,
  type PolicyUser,
} from '@/server/policy'

const panelStateSchema = z.enum(['ready', 'loading', 'empty', 'error'] as const satisfies DashboardPanelState[])

const inputSchema = z.object({
  user: z.object({
    id: z.string().min(1),
    name: z.string().trim().nullable().optional(),
    email: z.string().trim().email().nullable().optional(),
  }),
})

const identitySchema = z.object({
  handle: z.string().min(1),
  orgTag: z.string().min(1),
  citizenId: z.string().min(1),
  status: z.enum(['online', 'afk', 'offline']),
  accreditationKey: z.string().min(1),
  reputation: z.number().min(0).max(100),
})

const operationsCenterSchema = z.object({
  nextOperation: z
    .object({
      id: z.string().min(1),
      titleKey: z.string().min(1),
      startsAtIso: z.string().datetime(),
      assignedRoleKey: z.string().min(1),
      assignedSlot: z.string().min(1),
    })
    .optional(),
  operationsHref: z.string().min(1),
})

const communicationsSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.string().min(1),
        kind: z.enum(['mention', 'announcement', 'thread']),
        channelKey: z.string().min(1),
        summaryKey: z.string().min(1),
        createdAtIso: z.string().datetime(),
        unread: z.boolean(),
      }),
    )
    .max(5),
  communicationsHref: z.string().min(1),
})

const intelSchema = z.object({
  reports: z.array(
    z.object({
      id: z.string().min(1),
      sector: z.string().min(1),
      summaryKey: z.string().min(1),
      expiresAtIso: z.string().datetime(),
    }),
  ),
  intelHref: z.string().min(1),
})

const fleetSchema = z.object({
  available: z.number().int().nonnegative(),
  inService: z.number().int().nonnegative(),
  inRepair: z.number().int().nonnegative(),
  fleetHref: z.string().min(1),
})

const notificationsSchema = z.object({
  source: z.literal('mock-server'),
  notificationsHref: z.string().min(1),
  items: z.array(
    z.object({
      id: z.string().min(1),
      titleKey: z.string().min(1),
      detailKey: z.string().min(1),
      unread: z.boolean(),
      createdAtIso: z.string().datetime(),
    }),
  ),
})

const commandSchema = z.object({
  stats: z.array(
    z.object({
      labelKey: z.string().min(1),
      value: z.string().min(1).optional(),
    }),
  ),
})

const panelErrorCodeByAction: Record<PolicyAction, string> = {
  'dashboard.identity.read': 'ERR_2401',
  'dashboard.operations.read': 'ERR_2402',
  'dashboard.communications.read': 'ERR_2403',
  'dashboard.intel.read': 'ERR_2404',
  'dashboard.fleet.read': 'ERR_2405',
  'dashboard.notifications.read': 'ERR_2406',
  'dashboard.command.read': 'ERR_2407',
  'fleet.ship.read': 'ERR_2501',
  'fleet.ship.update': 'ERR_2502',
}

function panelSchema<T extends z.ZodTypeAny>(dataSchema: T) {
  return z.object({
    state: panelStateSchema,
    data: dataSchema.optional(),
    errorCode: z.string().optional(),
  })
}

function normalizeHandle(user: PolicyUser) {
  const source = user.name?.trim() || user.email?.split('@')[0] || user.id
  return source.replace(/\s+/g, '_').toUpperCase()
}

function buildCitizenId(userId: string) {
  return `NXP-${userId.replace(/[^A-Za-z0-9]/g, '').slice(0, 8).toUpperCase().padEnd(8, '0')}`
}

function buildIdentityPanel(user: PolicyUser, orgTag: string): DashboardPanelData<DashboardIdentityCard> {
  return {
    state: 'ready',
    data: {
      handle: normalizeHandle(user),
      orgTag,
      citizenId: buildCitizenId(user.id),
      status: 'online',
      accreditationKey: 'dashboard.identity.accreditation.operator',
      reputation: 78,
    },
  }
}

function buildOperationsPanel(now: Date): DashboardPanelData<DashboardOperationsCenter> {
  const startsAtIso = new Date(now.getTime() + 1000 * 60 * 83).toISOString()

  return {
    state: 'ready',
    data: {
      operationsHref: '/operations',
      nextOperation: {
        id: 'OP-7742',
        titleKey: 'dashboard.ops.operation_7742.title',
        startsAtIso,
        assignedRoleKey: 'dashboard.ops.operation_7742.role',
        assignedSlot: '01/02',
      },
    },
  }
}

function buildCommunicationsPanel(now: Date): DashboardPanelData<DashboardCommunications> {
  const items = [
    {
      id: 'COM-1052',
      kind: 'mention',
      channelKey: 'dashboard.comms.channel.command',
      summaryKey: 'dashboard.comms.item_1052.summary',
      createdAtIso: new Date(now.getTime() - 1000 * 60 * 7).toISOString(),
      unread: true,
    },
    {
      id: 'COM-1049',
      kind: 'announcement',
      channelKey: 'dashboard.comms.channel.announces',
      summaryKey: 'dashboard.comms.item_1049.summary',
      createdAtIso: new Date(now.getTime() - 1000 * 60 * 19).toISOString(),
      unread: true,
    },
    {
      id: 'COM-1044',
      kind: 'thread',
      channelKey: 'dashboard.comms.channel.briefing',
      summaryKey: 'dashboard.comms.item_1044.summary',
      createdAtIso: new Date(now.getTime() - 1000 * 60 * 33).toISOString(),
      unread: false,
    },
    {
      id: 'COM-1038',
      kind: 'mention',
      channelKey: 'dashboard.comms.channel.intel',
      summaryKey: 'dashboard.comms.item_1038.summary',
      createdAtIso: new Date(now.getTime() - 1000 * 60 * 52).toISOString(),
      unread: false,
    },
    {
      id: 'COM-1033',
      kind: 'thread',
      channelKey: 'dashboard.comms.channel.logistics',
      summaryKey: 'dashboard.comms.item_1033.summary',
      createdAtIso: new Date(now.getTime() - 1000 * 60 * 74).toISOString(),
      unread: false,
    },
  ] as const

  return {
    state: items.length > 0 ? 'ready' : 'empty',
    data: {
      communicationsHref: '/communications',
      items: items.slice(0, 5),
    },
  }
}

function buildIntelPanel(now: Date): DashboardPanelData<DashboardIntel> {
  const reports = [
    {
      id: 'INT-554',
      sector: 'ARC-L2',
      summaryKey: 'dashboard.intel.report_554.summary',
      expiresAtIso: new Date(now.getTime() + 1000 * 60 * 41).toISOString(),
    },
    {
      id: 'INT-549',
      sector: 'HURSTON-SOUTH',
      summaryKey: 'dashboard.intel.report_549.summary',
      expiresAtIso: new Date(now.getTime() + 1000 * 60 * 96).toISOString(),
    },
    {
      id: 'INT-545',
      sector: 'PYRO-GATE',
      summaryKey: 'dashboard.intel.report_545.summary',
      expiresAtIso: new Date(now.getTime() + 1000 * 60 * 118).toISOString(),
    },
    {
      id: 'INT-541',
      sector: 'LYRIA-RING',
      summaryKey: 'dashboard.intel.report_541.summary',
      expiresAtIso: new Date(now.getTime() + 1000 * 60 * 146).toISOString(),
    },
  ]

  return {
    state: reports.length > 0 ? 'ready' : 'empty',
    data: {
      reports,
      intelHref: '/intel',
    },
  }
}

function buildFleetPanel(): DashboardPanelData<DashboardFleetSummary> {
  return {
    state: 'ready',
    data: {
      available: 34,
      inService: 9,
      inRepair: 4,
      fleetHref: '/fleet',
    },
  }
}

function buildNotificationsPanel(now: Date): DashboardPanelData<DashboardNotifications> {
  return {
    state: 'ready',
    data: {
      source: 'mock-server',
      notificationsHref: '/notifications',
      items: [
        {
          id: 'EVT-8002',
          titleKey: 'dashboard.notifications.event_8002.title',
          detailKey: 'dashboard.notifications.event_8002.detail',
          unread: true,
          createdAtIso: new Date(now.getTime() - 1000 * 60 * 5).toISOString(),
        },
        {
          id: 'EVT-8000',
          titleKey: 'dashboard.notifications.event_8000.title',
          detailKey: 'dashboard.notifications.event_8000.detail',
          unread: true,
          createdAtIso: new Date(now.getTime() - 1000 * 60 * 18).toISOString(),
        },
        {
          id: 'EVT-7997',
          titleKey: 'dashboard.notifications.event_7997.title',
          detailKey: 'dashboard.notifications.event_7997.detail',
          unread: false,
          createdAtIso: new Date(now.getTime() - 1000 * 60 * 46).toISOString(),
        },
      ],
    },
  }
}

function buildCommandPanel(): DashboardPanelData<DashboardCommandConsole> {
  return {
    state: 'ready',
    data: {
      stats: [
        { labelKey: 'dashboard.command.metric_active_members', value: '128' },
        { labelKey: 'dashboard.command.metric_success_rate', value: '72%' },
        { labelKey: 'dashboard.command.metric_channel_activity', value: '1 482 MSG' },
        { labelKey: 'dashboard.command.metric_merit_rollup' },
      ],
    },
  }
}

async function loadAuthorizedPanel<T>(
  user: PolicyUser,
  action: PolicyAction,
  panelDefinition: {
    schema: z.ZodType<DashboardPanelData<T>>
    loader: () => DashboardPanelData<T> | Promise<DashboardPanelData<T>>
  },
  context = buildPolicyContext(user),
): Promise<DashboardPanelData<T> | undefined> {
  if (!can(user, action, context)) {
    return undefined
  }

  try {
    assertCan(user, action, context)
    return panelDefinition.schema.parse(await panelDefinition.loader())
  } catch {
    return {
      state: 'error',
      errorCode: panelErrorCodeByAction[action],
    }
  }
}

const outputSchema = z.object({
  generatedAtIso: z.string().datetime(),
  orgTag: z.string().min(1),
  identity: panelSchema(identitySchema).optional(),
  operations: panelSchema(operationsCenterSchema).optional(),
  communications: panelSchema(communicationsSchema).optional(),
  intel: panelSchema(intelSchema).optional(),
  fleet: panelSchema(fleetSchema).optional(),
  notifications: panelSchema(notificationsSchema).optional(),
  command: panelSchema(commandSchema).optional(),
})

export async function getMemberDashboardData(input: unknown): Promise<MemberDashboardData> {
  const parsedInput = inputSchema.parse(input)
  const user = parsedInput.user
  const context = buildPolicyContext(user)
  const now = new Date()

  const [identity, operations, communications, intel, fleet, notifications, command] =
    await Promise.all([
      loadAuthorizedPanel(
        user,
        'dashboard.identity.read',
        { schema: panelSchema(identitySchema), loader: () => buildIdentityPanel(user, context.orgTag) },
        context,
      ),
      loadAuthorizedPanel(
        user,
        'dashboard.operations.read',
        { schema: panelSchema(operationsCenterSchema), loader: () => buildOperationsPanel(now) },
        context,
      ),
      loadAuthorizedPanel(
        user,
        'dashboard.communications.read',
        { schema: panelSchema(communicationsSchema), loader: () => buildCommunicationsPanel(now) },
        context,
      ),
      loadAuthorizedPanel(
        user,
        'dashboard.intel.read',
        { schema: panelSchema(intelSchema), loader: () => buildIntelPanel(now) },
        context,
      ),
      loadAuthorizedPanel(
        user,
        'dashboard.fleet.read',
        { schema: panelSchema(fleetSchema), loader: () => buildFleetPanel() },
        context,
      ),
      loadAuthorizedPanel(
        user,
        'dashboard.notifications.read',
        { schema: panelSchema(notificationsSchema), loader: () => buildNotificationsPanel(now) },
        context,
      ),
      loadAuthorizedPanel(
        user,
        'dashboard.command.read',
        { schema: panelSchema(commandSchema), loader: () => buildCommandPanel() },
        context,
      ),
    ])

  return outputSchema.parse({
    generatedAtIso: now.toISOString(),
    orgTag: context.orgTag,
    identity,
    operations,
    communications,
    intel,
    fleet,
    notifications,
    command,
  })
}
