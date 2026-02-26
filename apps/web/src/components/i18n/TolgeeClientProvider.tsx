'use client'

import { TolgeeProvider } from '@tolgee/react'
import { tolgee } from '@/i18n/tolgee'

interface Props {
  children: React.ReactNode
}

export default function TolgeeClientProvider({ children }: Props) {
  return <TolgeeProvider tolgee={tolgee}>{children}</TolgeeProvider>
}
