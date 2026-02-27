import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import MemberDashboardOverview from '@/components/member/MemberDashboardOverview'
import { auth } from '@/lib/auth'
import { getMemberDashboardData } from '@/server/dashboard/service'

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect('/sign-in')
  }

  const operator = session.user.name ?? session.user.email ?? session.user.id

  const data = await getMemberDashboardData({
    user: {
      id: session.user.id,
      name: session.user.name ?? null,
      email: session.user.email ?? null,
    },
  })

  return <MemberDashboardOverview data={data} operator={operator} />
}
