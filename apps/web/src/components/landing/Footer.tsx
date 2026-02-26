'use client'

import Link from 'next/link'
import { useTranslate } from '@tolgee/react'

function FooterLogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
      <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" stroke="#8a6f35" strokeWidth="1" fill="rgba(201,168,76,0.06)" />
      <circle cx="14" cy="14" r="2" fill="#c9a84c" />
    </svg>
  )
}

const organisationLinks = [
  { key: 'footer.org_link_1', fallback: 'Doctrine', href: '#doctrine' },
  { key: 'footer.org_link_2', fallback: 'Operations', href: '#operations' },
  { key: 'footer.org_link_3', fallback: 'Structure', href: '#structure' },
  { key: 'footer.org_link_4', fallback: 'Recruitment', href: '#recrutement' },
] as const

const doctrineLinks = [
  { key: 'footer.doctrine_link_1', fallback: 'Rules of engagement', href: '#operations' },
  { key: 'footer.doctrine_link_2', fallback: 'Fleet standards', href: '#operations' },
  { key: 'footer.doctrine_link_3', fallback: 'Squad leadership', href: '#structure' },
  { key: 'footer.doctrine_link_4', fallback: 'Selection process', href: '#recrutement' },
] as const

const contactLinks = [
  { key: 'footer.contact_link_1', fallback: 'Spectrum channel', href: '#' },
  { key: 'footer.contact_link_2', fallback: 'Discord channel', href: '#' },
  { key: 'footer.contact_link_3', fallback: 'Recruitment office', href: '#contact' },
] as const

export default function Footer() {
  const { t } = useTranslate()

  return (
    <footer className="w-full" style={{ background: '#08090a', borderTop: '1px solid #1e2d3d' }} role="contentinfo" aria-label={t('footer.aria', 'Nexus Horizon Trade & Secure footer')}>
      <div className="mx-auto px-10 pt-16 pb-8" style={{ maxWidth: '1440px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label={t('footer.home_aria', 'Nexus Horizon Trade & Secure - Home')}>
              <FooterLogoMark />
              <span className="font-display text-gold-primary uppercase" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em' }}>
                {t('footer.org_name', 'NEXUS HORIZON TRADE & SECURE')}
              </span>
            </Link>
            <p className="font-body text-text-muted" style={{ fontSize: '12px', lineHeight: '1.7', maxWidth: '200px' }}>
              {t('footer.tagline', 'Multi-vector Star Citizen organization. Disciplined command and coordinated operations.')}
            </p>
            <div className="font-mono text-status-online uppercase mt-6" style={{ fontSize: '10px', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#4caf82',
                  display: 'inline-block',
                  animation: 'rsi-pulse 2s ease-in-out infinite',
                }}
                aria-hidden="true"
              />
              {t('footer.recruitment_status', 'RECRUITMENT OPEN')}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-text-muted uppercase mb-5" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
              {t('footer.col_org', 'ORGANIZATION')}
            </h3>
            <nav aria-label={t('footer.aria_org_links', 'Organization links')}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {organisationLinks.map((link) => (
                  <li key={link.key}>
                    <a href={link.href} className="font-body text-text-muted hover:text-text-secondary transition-colors duration-200" style={{ fontSize: '13px' }}>
                      {t(link.key, link.fallback)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-mono text-text-muted uppercase mb-5" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
              {t('footer.col_doctrine', 'DOCTRINE')}
            </h3>
            <nav aria-label={t('footer.aria_doctrine_links', 'Doctrine links')}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {doctrineLinks.map((link) => (
                  <li key={link.key}>
                    <a href={link.href} className="font-body text-text-muted hover:text-text-secondary transition-colors duration-200" style={{ fontSize: '13px' }}>
                      {t(link.key, link.fallback)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-mono text-text-muted uppercase mb-5" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>
              {t('footer.col_contact', 'CONTACT')}
            </h3>
            <nav aria-label={t('footer.aria_contact_links', 'Contact links')}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {contactLinks.map((link) => (
                  <li key={link.key}>
                    <a href={link.href} className="font-body text-text-muted hover:text-text-secondary transition-colors duration-200" style={{ fontSize: '13px' }}>
                      {t(link.key, link.fallback)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div id="contact" style={{ marginTop: '24px', padding: '10px 14px', background: '#0d1117', border: '1px solid #1e2d3d', borderRadius: '4px' }}>
              <div className="font-mono text-text-muted" style={{ fontSize: '10px', letterSpacing: '0.06em', lineHeight: '1.8' }}>
                <div>{t('footer.card_line_1', 'PRIORITY: OPERATOR RECRUITMENT')}</div>
                <div>{t('footer.card_line_2', 'ORG TAG')}: [NHTSC]</div>
                <div>{t('footer.card_line_3', 'SECTOR')}: STANTON / PYRO</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rsi-divider mb-6" aria-hidden="true" style={{ color: '#1e2d3d' }}>
          <span className="font-mono" style={{ fontSize: '10px', color: '#2a3d52', letterSpacing: '0.1em' }}>
            ◆◇◆
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-text-muted" style={{ fontSize: '10px', letterSpacing: '0.06em', textAlign: 'center' }}>
            {t('footer.copyright', '© 2954 Nexus Horizon Trade & Secure. All rights reserved.')}
          </p>
          <p className="font-mono text-text-muted" style={{ fontSize: '10px', letterSpacing: '0.06em', textAlign: 'center' }}>
            {t(
              'footer.disclaimer',
              'Star Citizen and RSI are trademarks of Roberts Space Industries Corp. Nexus Horizon Trade & Secure is an unofficial fan project.'
            )}
          </p>
        </div>
      </div>
    </footer>
  )
}
