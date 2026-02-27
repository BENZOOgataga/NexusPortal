import OperationsFleetManager from '@/components/member/OperationsFleetManager'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { getGlobalFleetShips } from '@/server/fleet/service'

export default async function OperationsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect('/sign-in')
  }

  const ships = await getGlobalFleetShips({
    id: session.user.id,
    name: session.user.name ?? null,
    email: session.user.email ?? null,
  })

  return <OperationsFleetManager ships={ships} />
}
