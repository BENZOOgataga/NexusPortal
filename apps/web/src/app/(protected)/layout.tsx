import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import MemberConsoleShell from '@/components/member/MemberConsoleShell'
import { auth } from '@/lib/auth'
import { buildPolicyContext } from '@/server/policy'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect('/sign-in')
  }

  const operator = session.user.name ?? session.user.email ?? session.user.id
  const context = buildPolicyContext({
    id: session.user.id,
    name: session.user.name ?? null,
    email: session.user.email ?? null,
  })

  return (
    <MemberConsoleShell operator={operator} orgTag={context.orgTag}>
      {children}
    </MemberConsoleShell>
  )
}
