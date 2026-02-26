'use client'

import { useTranslate } from '@tolgee/react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const squads = [
  { id: 'ALPHA-7', branchKey: 'hierarchy.squad_alpha_branch', branchFallback: 'Combat', lead: 'CMDR VANCE', members: ['MBMR-001', 'MBMR-002', 'MBMR-003'] },
  { id: 'BRAVO-3', branchKey: 'hierarchy.squad_bravo_branch', branchFallback: 'Recon', lead: 'LT ARDEN', members: ['MBMR-004', 'MBMR-005', 'MBMR-006'] },
  { id: 'CHARLIE-1', branchKey: 'hierarchy.squad_charlie_branch', branchFallback: 'Support', lead: 'LT KAEL', members: ['MBMR-007', 'MBMR-008', 'MBMR-009'] },
] as const

function HierarchyDiagram() {
  const { t } = useTranslate()

  return (
    <div style={{ padding: '20px 16px 18px' }} aria-label={t('hierarchy.aria_diagram', 'Hierarchy diagram: organization, squads, and members')} role="img">
      <div className="flex justify-center">
        <div style={{ width: '100%', maxWidth: '360px', background: '#111820', border: '1px solid #2a3d52', borderRadius: '6px', padding: '12px 14px' }}>
          <div className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.12em', color: '#8a6f35' }}>
            {t('hierarchy.org_label', 'Organization')}
          </div>
          <div className="font-display uppercase" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.09em', color: '#e8c56d', marginTop: '2px' }}>
            {t('hierarchy.org_name', 'NEXUS HORIZON TRADE & SECURE')}
          </div>
          <div className="font-body" style={{ fontSize: '12px', color: '#9ba8b4', marginTop: '5px' }}>
            {t('hierarchy.org_caption', 'Central command')}
          </div>
        </div>
      </div>

      <div className="flex justify-center" aria-hidden="true" style={{ margin: '10px 0 12px' }}>
        <span style={{ width: '1px', height: '18px', background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.2))', display: 'block' }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {squads.map((squad) => (
          <article key={squad.id} style={{ background: '#111820', border: '1px solid #2a3d52', borderRadius: '6px', padding: '12px' }}>
            <div className="flex items-center justify-between gap-3">
              <div className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.1em', color: '#5a6a7a' }}>
                {t('hierarchy.squad_label', 'Squad')}
              </div>
              <span className="font-mono uppercase" style={{ fontSize: '9px', letterSpacing: '0.08em', color: '#35b6ec' }}>
                {t(squad.branchKey, squad.branchFallback)}
              </span>
            </div>

            <div className="font-display uppercase" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#c9a84c', marginTop: '3px' }}>
              {squad.id}
            </div>

            <div className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.07em', color: '#9ba8b4', marginTop: '8px' }}>
              {t('hierarchy.squad_lead', 'Lead')}: {squad.lead}
            </div>

            <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {squad.members.map((member) => (
                <span
                  key={member}
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    color: '#5a6a7a',
                    border: '1px solid #1e2d3d',
                    background: '#0d1117',
                    borderRadius: '4px',
                    padding: '3px 6px',
                  }}
                >
                  {member}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '12px', borderTop: '1px solid #1e2d3d', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
        <span className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#5a6a7a' }}>
          {t('hierarchy.footer_1', '1 central command')}
        </span>
        <span className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#5a6a7a' }}>
          {t('hierarchy.footer_2', '3 active squads')}
        </span>
        <span className="font-mono uppercase" style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#5a6a7a' }}>
          {t('hierarchy.footer_3', '9 visible operators')}
        </span>
      </div>
    </div>
  )
}

export default function HierarchySection() {
  const { t } = useTranslate()

  return (
    <section className="w-full py-24" style={{ background: '#0d1117' }} id="structure" aria-labelledby="hierarchy-heading">
      <div className="mx-auto px-10" style={{ maxWidth: '1440px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll direction="left">
            <div>
              <div className="font-mono text-text-muted uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }} aria-hidden="true">
                {t('hierarchy.section_label', '// COMMAND STRUCTURE')}
              </div>

              <h2 id="hierarchy-heading" className="font-display text-gold-primary uppercase mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '0.08em', lineHeight: '1.2' }}>
                {t('hierarchy.heading', 'A CLEAR COMMAND STRUCTURE')}
              </h2>

              <p className="font-body text-text-secondary mb-6" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                {t(
                  'hierarchy.paragraph_1',
                  'The structure is easy to understand: one central command, specialized squads, and clear responsibilities. Everyone knows where they stand and what they are expected to do.'
                )}
              </p>

              <p className="font-body text-text-secondary mb-10" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                {t(
                  'hierarchy.paragraph_2',
                  'Squad leaders have real autonomy to manage their teams while staying aligned with organization rules. Result: less confusion, better coordination, and faster decisions.'
                )}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { value: '24/7', label: t('hierarchy.stat_1', 'Active command') },
                  { value: '4', label: t('hierarchy.stat_2', 'Main branches') },
                  { value: 'N+', label: t('hierarchy.stat_3', 'Squads on mission') },
                  { value: '100%', label: t('hierarchy.stat_4', 'Clear roles') },
                ].map((stat, i) => (
                  <div key={i} style={{ background: '#111820', border: '1px solid #2a3d52', borderRadius: '4px', padding: '16px' }}>
                    <div className="font-display text-gold-primary" style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>
                      {stat.value}
                    </div>
                    <div className="font-mono text-text-muted uppercase" style={{ fontSize: '10px', letterSpacing: '0.08em' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150}>
            <div style={{ background: '#08090a', border: '1px solid #1e2d3d', borderRadius: '8px', padding: '8px', overflow: 'hidden' }}>
              <div style={{ borderBottom: '1px solid #1e2d3d', padding: '8px 16px', marginBottom: '8px' }}>
                <span className="font-mono text-text-muted uppercase" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
                  {t('hierarchy.visualization_header', 'VISUALIZATION - STRUCTURE_NHTSC // CMD_CHAIN')}
                </span>
              </div>
              <HierarchyDiagram />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
