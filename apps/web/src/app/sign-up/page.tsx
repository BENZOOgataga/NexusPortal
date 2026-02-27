import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import AuthEntryPanel from '@/components/auth/AuthEntryPanel'
import { auth } from '@/lib/auth'
import { isDiscordProviderEnabled } from '@/lib/discord-provider'

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    redirect('/member/dashboard')
  }

  const discordEnabled = isDiscordProviderEnabled()

  return <AuthEntryPanel mode="sign-up" discordEnabled={discordEnabled} />
}
