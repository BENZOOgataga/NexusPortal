import 'server-only'
import { z } from 'zod'
import { prisma } from '@nexus/db'
import type { FleetShipRecord, FleetShipStatus } from '@/lib/fleet/types'
import { assertCan, buildPolicyContext, type PolicyUser } from '@/server/policy'

const statusSchema = z.enum(['stored', 'in_service', 'in_repair'] satisfies FleetShipStatus[])

const fleetShipSchema = z.object({
  id: z.string().min(1),
  shipCode: z.string().min(1),
  vehicleName: z.string().min(1),
  infoLabel: z.string().min(1),
  locationLabel: z.string().min(1),
  statusLabel: statusSchema,
  focusLabel: z.string().min(1),
  cargo: z.number().int().nonnegative(),
  crew: z.number().int().nonnegative(),
  isTracked: z.boolean(),
})

const patchInputSchema = z.object({
  shipId: z.string().min(1),
  action: z.enum(['cycle_status', 'toggle_track']),
})

const defaultFleetShips = [
  {
    shipCode: 'prospector',
    vehicleName: 'MISC Prospector',
    infoLabel: 'stored',
    locationLabel: 'port_olisar',
    statusLabel: 'stored' as FleetShipStatus,
    focusLabel: 'light_mining',
    cargo: 32,
    crew: 1,
  },
  {
    shipCode: 'reliant-kore',
    vehicleName: 'MISC Reliant Kore',
    infoLabel: 'stored',
    locationLabel: 'port_olisar',
    statusLabel: 'stored' as FleetShipStatus,
    focusLabel: 'light_freight',
    cargo: 6,
    crew: 1,
  },
  {
    shipCode: 'reliant-kore-2',
    vehicleName: 'MISC Reliant Kore - 2',
    infoLabel: 'stored',
    locationLabel: 'port_olisar',
    statusLabel: 'stored' as FleetShipStatus,
    focusLabel: 'light_freight',
    cargo: 6,
    crew: 1,
  },
  {
    shipCode: 'reliant-kore-3',
    vehicleName: 'MISC Reliant Kore - 3',
    infoLabel: 'stored',
    locationLabel: 'port_olisar',
    statusLabel: 'stored' as FleetShipStatus,
    focusLabel: 'light_freight',
    cargo: 6,
    crew: 1,
  },
  {
    shipCode: 'constellation-aquila',
    vehicleName: 'RSI Constellation Aquila',
    infoLabel: 'stored',
    locationLabel: 'port_olisar',
    statusLabel: 'stored' as FleetShipStatus,
    focusLabel: 'expedition',
    cargo: 96,
    crew: 1,
  },
  {
    shipCode: 'scythe',
    vehicleName: 'Vanduul Scythe',
    infoLabel: 'stored',
    locationLabel: 'port_olisar',
    statusLabel: 'stored' as FleetShipStatus,
    focusLabel: 'medium_fighter',
    cargo: 0,
    crew: 1,
  },
]

function toFleetShipRecord(row: {
  id: string
  shipCode: string
  vehicleName: string
  infoLabel: string
  locationLabel: string
  statusLabel: string
  focusLabel: string
  cargo: number
  crew: number
  isTracked: boolean
}) {
  return fleetShipSchema.parse({
    ...row,
    statusLabel: statusSchema.parse(row.statusLabel),
  })
}

async function ensureGlobalFleetSeed(orgTag: string) {
  const count = await prisma.fleetShip.count({ where: { orgTag } })
  if (count > 0) {
    return
  }

  await prisma.fleetShip.createMany({
    data: defaultFleetShips.map((ship) => ({
      ...ship,
      orgTag,
    })),
  })
}

function nextStatus(current: FleetShipStatus): FleetShipStatus {
  if (current === 'stored') return 'in_service'
  if (current === 'in_service') return 'in_repair'
  return 'stored'
}

export async function getGlobalFleetShips(user: PolicyUser): Promise<FleetShipRecord[]> {
  const context = buildPolicyContext(user)
  assertCan(user, 'fleet.ship.read', context)

  await ensureGlobalFleetSeed(context.orgTag)

  const ships = await prisma.fleetShip.findMany({
    where: { orgTag: context.orgTag },
    orderBy: [{ createdAt: 'asc' }],
  })

  return ships.map((ship) => toFleetShipRecord(ship))
}

export async function mutateGlobalFleetShip(user: PolicyUser, input: unknown): Promise<FleetShipRecord> {
  const parsedInput = patchInputSchema.parse(input)
  const context = buildPolicyContext(user)
  assertCan(user, 'fleet.ship.update', context)

  const ship = await prisma.fleetShip.findFirst({
    where: {
      id: parsedInput.shipId,
      orgTag: context.orgTag,
    },
  })

  if (!ship) {
    throw new Error('Fleet ship not found in authorized scope')
  }

  const updated = await prisma.fleetShip.update({
    where: { id: ship.id },
    data:
      parsedInput.action === 'cycle_status'
        ? {
            statusLabel: nextStatus(statusSchema.parse(ship.statusLabel)),
            updatedByUserId: user.id,
          }
        : {
            isTracked: !ship.isTracked,
            updatedByUserId: user.id,
          },
  })

  return toFleetShipRecord(updated)
}
