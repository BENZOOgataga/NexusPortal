import MemberModulePage from '@/components/member/MemberModulePage'

export default function CommunicationsPage() {
  return (
    <MemberModulePage
      titleKey="member.page.communications.title"
      titleFallback="// COMMUNICATIONS"
      descriptionKey="member.page.communications.description"
      descriptionFallback="Channels, annonces, mentions et threads suivis."
    />
  )
}
