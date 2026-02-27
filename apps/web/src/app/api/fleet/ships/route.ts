import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/lib/auth'
import { getGlobalFleetShips, mutateGlobalFleetShip } from '@/server/fleet/service'

const patchBodySchema = z.object({
  shipId: z.string().min(1),
  action: z.enum(['cycle_status', 'toggle_track']),
})

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.json({ error: 'AUTH_DENIED' }, { status: 401 })
  }

  const ships = await getGlobalFleetShips({
    id: session.user.id,
    name: session.user.name ?? null,
    email: session.user.email ?? null,
  })

  return NextResponse.json({ ships })
}

export async function PATCH(request: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return NextResponse.json({ error: 'AUTH_DENIED' }, { status: 401 })
  }

  const body = patchBodySchema.parse(await request.json())

  const ship = await mutateGlobalFleetShip(
    {
      id: session.user.id,
      name: session.user.name ?? null,
      email: session.user.email ?? null,
    },
    body,
  )

  return NextResponse.json({ ship })
}
