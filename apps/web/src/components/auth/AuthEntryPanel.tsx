'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslate } from '@tolgee/react'
import { authClient } from '@/lib/auth-client'

type AuthMode = 'sign-in' | 'sign-up'

interface AuthEntryPanelProps {
  mode: AuthMode
  discordEnabled: boolean
}

export default function AuthEntryPanel({ mode, discordEnabled }: AuthEntryPanelProps) {
  const { t } = useTranslate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [pendingMode, setPendingMode] = useState<'email' | 'discord' | null>(null)
  const isSignIn = mode === 'sign-in'

  async function handleEmailAuth() {
    if (!email || !password || (!isSignIn && !name)) {
      setErrorMessage(
        !isSignIn && !name
          ? t('auth.form_error_missing_name', 'Display name is required.')
          : t('auth.form_error_missing_fields', 'Email and password are required.'),
      )
      return
    }

    setErrorMessage('')
    setPendingMode('email')

    try {
      const result = isSignIn
        ? await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: '/dashboard',
          })
        : await authClient.signUp.email({
            name,
            email,
            password,
            callbackURL: '/dashboard',
          })

      if (result.error) {
        setErrorMessage(result.error.message ?? t('auth.form_error_generic', 'AUTH_FAILED'))
        return
      }

      window.location.href = '/dashboard'
    } finally {
      setPendingMode(null)
    }
  }

  async function handleDiscordAuth() {
    try {
      if (!discordEnabled) {
        setErrorMessage(t('auth.form_error_discord_unavailable', 'Discord authentication is currently unavailable.'))
        return
      }

      setErrorMessage('')
      setPendingMode('discord')
      const result = await authClient.signIn.social({
        provider: 'discord',
        callbackURL: '/dashboard',
      })

      if (result?.error) {
        setErrorMessage(result.error.message ?? t('auth.form_error_discord_unavailable', 'Discord authentication is currently unavailable.'))
      }
    } finally {
      setPendingMode(null)
    }
  }

  return (
    <main className="min-h-screen bg-bg-primary text-text-primary px-6 py-16 sm:px-10">
      <div
        className="mx-auto max-w-2xl border border-border-default bg-bg-secondary p-8 sm:p-10"
        style={{ borderRadius: '8px' }}
      >
        <p className="font-mono uppercase text-cyan-primary" style={{ fontSize: '11px', letterSpacing: '0.1em' }}>
          {t('auth.page_section_label', '// AUTHENTICATION GATE')}
        </p>
        <h1 className="font-display uppercase text-gold-primary mt-3" style={{ fontSize: '30px', letterSpacing: '0.08em' }}>
          {isSignIn ? t('auth.page_sign_in_heading', 'ACCESS MEMBER CHANNEL') : t('auth.page_sign_up_heading', 'REGISTER MEMBER PROFILE')}
        </h1>
        <p className="font-body text-text-secondary mt-4" style={{ fontSize: '15px', lineHeight: 1.7 }}>
          {isSignIn
            ? t('auth.page_sign_in_description', 'Authenticate with your command credentials to continue.')
            : t('auth.page_sign_up_description', 'Create your command credentials to initialize your member profile.')}
        </p>

        {!isSignIn && (
          <div className="mt-8">
            <label className="font-mono uppercase text-text-secondary block mb-2" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
              {t('auth.form_name_label', 'DISPLAY NAME')}
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full bg-bg-primary border border-border-default text-text-primary px-4 py-3 focus:border-gold-muted focus:outline-none"
              style={{ borderRadius: '4px', fontSize: '14px' }}
              placeholder={t('auth.form_name_placeholder', 'CMDR_NEXUS')}
              autoComplete="name"
            />
          </div>
        )}

        <div className="mt-4">
          <label className="font-mono uppercase text-text-secondary block mb-2" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
            {t('auth.form_email_label', 'EMAIL')}
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full bg-bg-primary border border-border-default text-text-primary px-4 py-3 focus:border-gold-muted focus:outline-none"
            style={{ borderRadius: '4px', fontSize: '14px' }}
            placeholder={t('auth.form_email_placeholder', 'operator@nexus-horizon.local')}
            autoComplete="email"
          />
        </div>

        <div className="mt-4">
          <label className="font-mono uppercase text-text-secondary block mb-2" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
            {t('auth.form_password_label', 'PASSWORD')}
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full bg-bg-primary border border-border-default text-text-primary px-4 py-3 focus:border-gold-muted focus:outline-none"
            style={{ borderRadius: '4px', fontSize: '14px' }}
            placeholder={t('auth.form_password_placeholder', '••••••••')}
            autoComplete={isSignIn ? 'current-password' : 'new-password'}
          />
        </div>

        {errorMessage && (
          <p className="mt-4 font-mono uppercase text-status-error" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>
            {errorMessage}
          </p>
        )}

        <button
          type="button"
          className="mt-8 w-full font-mono uppercase transition-all duration-200 hover:opacity-90 hover:-translate-y-px disabled:opacity-70"
          style={{
            background: 'linear-gradient(135deg, #c9a84c 0%, #e8c56d 50%, #a07830 100%)',
            color: '#0d1117',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            padding: '12px 24px',
            borderRadius: '4px',
          }}
          onClick={handleEmailAuth}
          disabled={pendingMode !== null}
        >
          {pendingMode === 'email'
            ? t('auth.form_submit_pending', 'AUTH_INIT')
            : isSignIn
              ? t('auth.form_submit_sign_in', 'LOG IN')
              : t('auth.form_submit_sign_up', 'CREATE ACCOUNT')}
        </button>

        {discordEnabled && (
          <>
            <p className="mt-6 font-mono uppercase text-text-muted text-center" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
              {t('auth.form_or_divider', 'OR CONTINUE WITH')}
            </p>
            <button
              type="button"
              className="mt-3 w-full font-mono uppercase transition-all duration-200 hover:opacity-90 hover:-translate-y-px disabled:opacity-70 border border-border-default text-text-secondary hover:text-cyan-primary"
              style={{
                background: 'transparent',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                padding: '10px 20px',
                borderRadius: '4px',
              }}
              onClick={handleDiscordAuth}
              disabled={pendingMode !== null}
            >
              {pendingMode === 'discord'
                ? t('auth.form_submit_pending', 'AUTH_INIT')
                : isSignIn
                  ? t('auth.action_sign_in_with_discord', 'DISCORD')
                  : t('auth.action_sign_up_with_discord', 'DISCORD')}
            </button>
          </>
        )}

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="font-mono uppercase text-text-muted" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
            {isSignIn
              ? t('auth.page_sign_in_switch_label', 'NO MEMBER PROFILE?')
              : t('auth.page_sign_up_switch_label', 'ALREADY REGISTERED?')}
          </span>
          <Link
            href={isSignIn ? '/sign-up' : '/sign-in'}
            className="font-mono uppercase text-cyan-primary hover:text-cyan-bright transition-colors duration-200"
            style={{ fontSize: '10px', letterSpacing: '0.1em' }}
          >
            {isSignIn ? t('auth.nav_sign_up', 'SIGN UP') : t('auth.nav_log_in', 'LOG IN')}
          </Link>
        </div>
      </div>
    </main>
  )
}
