import MemberModulePage from '@/components/member/MemberModulePage'

export default function FleetPage() {
  return (
    <MemberModulePage
      titleKey="member.page.fleet.title"
      titleFallback="// FLEET"
      descriptionKey="member.page.fleet.description"
      descriptionFallback="Registre flotte, disponibilite et statut de service."
    />
  )
}
