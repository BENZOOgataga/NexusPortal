'use client'

import { DevTools, FormatSimple, LanguageDetector, LanguageStorage, Tolgee } from '@tolgee/react'

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL
const hasRemoteConfig = Boolean(apiKey && apiUrl)

if (!hasRemoteConfig && process.env.NODE_ENV !== 'production') {
  console.warn('[Tolgee] Missing NEXT_PUBLIC_TOLGEE_API_URL or NEXT_PUBLIC_TOLGEE_API_KEY. Using fallback strings only.')
}

const tolgeeInstance = Tolgee()
  .use(FormatSimple())
  .use(LanguageDetector())
  .use(LanguageStorage())

if (process.env.NODE_ENV !== 'production') {
  tolgeeInstance.use(DevTools())
}

export const tolgee = tolgeeInstance
  .init({
    defaultLanguage: 'en',
    availableLanguages: ['en', 'fr'],
    ...(hasRemoteConfig ? { apiKey, apiUrl } : {}),
    fallbackLanguage: 'en',
  })
