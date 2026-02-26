'use client'

import { useTolgee, useTranslate } from '@tolgee/react'

const LANGUAGES = ['en', 'fr'] as const

export default function LanguageSwitcher() {
  const tolgee = useTolgee(['language'])
  const { t } = useTranslate()
  const currentLanguage = tolgee.getLanguage() || 'en'

  const changeLanguage = async (language: (typeof LANGUAGES)[number]) => {
    if (language === currentLanguage) {
      return
    }
    await tolgee.changeLanguage(language)
  }

  return (
    <div className="flex items-center gap-1" aria-label={t('common.language_switcher_aria', 'Language switcher')}>
      {LANGUAGES.map((language) => {
        const isActive = currentLanguage === language
        return (
          <button
            key={language}
            type="button"
            onClick={() => void changeLanguage(language)}
            aria-pressed={isActive}
            className="font-mono uppercase"
            style={{
              fontSize: '10px',
              letterSpacing: '0.08em',
              padding: '3px 8px',
              borderRadius: '4px',
              border: `1px solid ${isActive ? '#c9a84c' : '#2a3d52'}`,
              color: isActive ? '#c9a84c' : '#9ba8b4',
              background: isActive ? 'rgba(77,61,26,0.35)' : 'transparent',
              cursor: 'pointer',
            }}
          >
            {language === 'en' ? t('common.lang_en', 'EN') : t('common.lang_fr', 'FR')}
          </button>
        )
      })}
    </div>
  )
}
