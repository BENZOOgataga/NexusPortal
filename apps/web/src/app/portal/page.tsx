import { redirect } from 'next/navigation'

export default async function PortalPage() {
  redirect('/member/dashboard')
}
