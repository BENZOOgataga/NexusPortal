import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import MemberDashboardOverview from '@/components/member/MemberDashboardOverview'
import { auth } from '@/lib/auth'

export default async function MemberDashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect('/sign-in')
  }

  const operator = session.user.name ?? session.user.email ?? session.user.id

  return <MemberDashboardOverview operator={operator} />
}
