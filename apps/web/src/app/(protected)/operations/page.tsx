import MemberModulePage from '@/components/member/MemberModulePage'

export default function OperationsPage() {
  return (
    <MemberModulePage
      titleKey="member.page.operations.title"
      titleFallback="// OPERATIONS"
      descriptionKey="member.page.operations.description"
      descriptionFallback="Centre operationnel detaille, assignations et debriefings."
    />
  )
}
