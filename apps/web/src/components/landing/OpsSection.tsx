'use client'

import { useTranslate } from '@tolgee/react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function OpsSection() {
  const { t } = useTranslate()

  const terminalLines = [
    { prefix: '>', text: t('ops.line_1', 'OP_ID: NOVA-STRIKE-7742'), color: '#35b6ec' },
    { prefix: '>', text: t('ops.line_2', 'STATUS: SCHEDULED'), color: '#f5a623' },
    { prefix: '>', text: t('ops.line_3', 'T-MINUS: 04:32:17'), color: '#e8eaed' },
    { prefix: '>', text: t('ops.line_4', 'REGISTERED MEMBERS: 12/16'), color: '#e8eaed' },
    { prefix: '>', text: t('ops.line_5', 'PHASES:'), color: '#9ba8b4' },
    { prefix: ' ', text: t('ops.line_6', '  [01] APPROACH       - STANDBY'), color: '#5a6a7a' },
    { prefix: ' ', text: t('ops.line_7', '  [02] ENGAGEMENT     - STANDBY'), color: '#5a6a7a' },
    { prefix: ' ', text: t('ops.line_8', '  [03] EXTRACTION     - STANDBY'), color: '#5a6a7a' },
    { prefix: '>', text: t('ops.line_9', 'COMMANDER: CMDR_VANCE'), color: '#35b6ec' },
    { prefix: '>', text: t('ops.line_10', 'CLASSIFICATION: CONFIDENTIAL-NHTSC'), color: '#e05252' },
  ]

  return (
    <section className="w-full py-24" style={{ background: '#111820' }} id="operations" aria-labelledby="ops-heading">
      <div className="mx-auto px-10" style={{ maxWidth: '1440px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div
              className="relative"
              style={{
                background: 'rgba(8, 14, 22, 0.92)',
                border: '1px solid #1c4d6e',
                borderRadius: '4px',
                fontFamily: "'Share Tech Mono', 'Courier New', monospace",
                overflow: 'hidden',
              }}
              aria-label={t('ops.aria_terminal', 'Operational terminal - briefing example')}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />

              <div
                style={{
                  padding: '10px 20px',
                  borderBottom: '1px solid #1c4d6e',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#e05252', opacity: 0.8 }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f5a623', opacity: 0.8 }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4caf82', opacity: 0.8 }} />
                <span style={{ fontSize: '10px', color: '#1c4d6e', textTransform: 'uppercase', letterSpacing: '0.12em', marginLeft: 8 }}>
                  NEXUS_TERMINAL - OPS_CENTER v2.4.1
                </span>
              </div>

              <div style={{ padding: '24px', position: 'relative', zIndex: 2 }}>
                <div
                  style={{
                    fontSize: '10px',
                    color: '#1c4d6e',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    borderBottom: '1px solid #1c4d6e',
                    paddingBottom: '8px',
                    marginBottom: '16px',
                  }}
                >
                  {t('ops.terminal_header', 'OPERATIONAL_BRIEFING // RESTRICTED_ACCESS')}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {terminalLines.map((line, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#8a6f35', flexShrink: 0, fontSize: '13px' }}>{line.prefix}</span>
                      <span style={{ color: line.color, fontSize: '13px', letterSpacing: '0.02em' }}>{line.text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '16px', color: '#35b6ec', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }} aria-hidden="true">
                  <span>{'>'}</span>
                  <span style={{ animation: 'blink 1s step-end infinite' }}>█</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150}>
            <div>
              <div className="font-mono text-text-muted uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.2em' }} aria-hidden="true">
                {t('ops.section_label', '// OPERATIONS CENTER')}
              </div>

              <h2
                id="ops-heading"
                className="font-display text-gold-primary uppercase mb-6"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '0.08em', lineHeight: '1.2' }}
              >
                {t('ops.heading', 'THE OPERATIONAL RHYTHM OF NEXUS HORIZON TRADE & SECURE')}
              </h2>

              <p className="font-body text-text-secondary mb-6" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                {t(
                  'ops.paragraph_1',
                  "Our campaigns are prepared like staff-level operations: explicit objectives, validated chain of command, and coordinated execution across specialized squads."
                )}
              </p>

              <p className="font-body text-text-secondary mb-8" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                {t(
                  'ops.paragraph_2',
                  "From tactical interception to multi-vector offensives, our doctrine stays the same: collective discipline, individual accountability, and systematic debrief after engagement."
                )}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  t('ops.bullet_1', 'Tactical briefings with roles and deployment windows'),
                  t('ops.bullet_2', 'Combat, logistics, and reconnaissance coordination'),
                  t('ops.bullet_3', 'Formalized debriefs to capitalize on every mission'),
                  t('ops.bullet_4', 'Permanent readiness of crews and fleet'),
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: 6, height: 6, background: '#c9a84c', flexShrink: 0, transform: 'rotate(45deg)' }} aria-hidden="true" />
                    <span className="font-body text-text-secondary" style={{ fontSize: '13px' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
