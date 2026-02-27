import MemberModulePage from '@/components/member/MemberModulePage'

export default function IntelPage() {
  return (
    <MemberModulePage
      titleKey="member.page.intel.title"
      titleFallback="// INTEL"
      descriptionKey="member.page.intel.description"
      descriptionFallback="Intel board, reports terrain et expiration des signaux."
    />
  )
}
