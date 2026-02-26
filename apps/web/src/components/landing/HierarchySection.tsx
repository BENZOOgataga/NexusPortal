import RevealOnScroll from '@/components/ui/RevealOnScroll'

const squads = [
  {
    id: 'ALPHA-7',
    branch: 'Combat',
    lead: 'CMDR VANCE',
    members: ['MBMR-001', 'MBMR-002', 'MBMR-003'],
  },
  {
    id: 'BRAVO-3',
    branch: 'Recon',
    lead: 'LT ARDEN',
    members: ['MBMR-004', 'MBMR-005', 'MBMR-006'],
  },
  {
    id: 'CHARLIE-1',
    branch: 'Support',
    lead: 'LT KAEL',
    members: ['MBMR-007', 'MBMR-008', 'MBMR-009'],
  },
]

function HierarchyDiagram() {
  return (
    <div
      style={{ padding: '20px 16px 18px' }}
      aria-label="Diagramme de la structure hiérarchique: organisation, escouades et membres"
      role="img"
    >
      <div className="flex justify-center">
        <div
          style={{
            width: '100%',
            maxWidth: '360px',
            background: '#111820',
            border: '1px solid #2a3d52',
            borderRadius: '6px',
            padding: '12px 14px',
          }}
        >
          <div
            className="font-mono uppercase"
            style={{ fontSize: '9px', letterSpacing: '0.12em', color: '#8a6f35' }}
          >
            Organisation
          </div>
          <div
            className="font-display uppercase"
            style={{
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.09em',
              color: '#e8c56d',
              marginTop: '2px',
            }}
          >
            NEXUS HORIZON TRADE & SECURE
          </div>
          <div
            className="font-body"
            style={{ fontSize: '12px', color: '#9ba8b4', marginTop: '5px' }}
          >
            Commandement central
          </div>
        </div>
      </div>

      <div className="flex justify-center" aria-hidden="true" style={{ margin: '10px 0 12px' }}>
        <span
          style={{
            width: '1px',
            height: '18px',
            background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.2))',
            display: 'block',
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {squads.map((squad) => (
          <article
            key={squad.id}
            style={{
              background: '#111820',
              border: '1px solid #2a3d52',
              borderRadius: '6px',
              padding: '12px',
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <div
                className="font-mono uppercase"
                style={{ fontSize: '9px', letterSpacing: '0.1em', color: '#5a6a7a' }}
              >
                Escouade
              </div>
              <span
                className="font-mono uppercase"
                style={{ fontSize: '9px', letterSpacing: '0.08em', color: '#35b6ec' }}
              >
                {squad.branch}
              </span>
            </div>

            <div
              className="font-display uppercase"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#c9a84c',
                marginTop: '3px',
              }}
            >
              {squad.id}
            </div>

            <div
              className="font-mono uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.07em', color: '#9ba8b4', marginTop: '8px' }}
            >
              Chef: {squad.lead}
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

      <div
        style={{
          marginTop: '12px',
          borderTop: '1px solid #1e2d3d',
          paddingTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <span
          className="font-mono uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#5a6a7a' }}
        >
          1 commandement central
        </span>
        <span
          className="font-mono uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#5a6a7a' }}
        >
          3 escouades actives
        </span>
        <span
          className="font-mono uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.08em', color: '#5a6a7a' }}
        >
          9 opérateurs visibles
        </span>
      </div>
    </div>
  )
}

export default function HierarchySection() {
  return (
    <section
      className="w-full py-24"
      style={{ background: '#0d1117' }}
      id="structure"
      aria-labelledby="hierarchy-heading"
    >
      <div className="mx-auto px-10" style={{ maxWidth: '1440px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll direction="left">
            <div>
              <div
                className="font-mono text-text-muted uppercase mb-4"
                style={{ fontSize: '11px', letterSpacing: '0.2em' }}
                aria-hidden="true"
              >
                // STRUCTURE DE COMMANDEMENT
              </div>

              <h2
                id="hierarchy-heading"
                className="font-display text-gold-primary uppercase mb-6"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  lineHeight: '1.2',
                }}
              >
                UNE STRUCTURE DE COMMANDEMENT CLAIRE
              </h2>

              <p
                className="font-body text-text-secondary mb-6"
                style={{ fontSize: '14px', lineHeight: '1.8' }}
              >
                La structure est simple à comprendre: un commandement central, des escouades spécialisées
                et des responsabilités bien définies. Chacun sait où il se place et ce qu&apos;il doit faire.
              </p>

              <p
                className="font-body text-text-secondary mb-10"
                style={{ fontSize: '14px', lineHeight: '1.8' }}
              >
                Les chefs d&apos;escouade disposent d&apos;une vraie autonomie pour gérer leurs équipes, tout
                en restant alignés avec les règles de l&apos;organisation. Le résultat: moins de confusion,
                plus de coordination et des décisions plus rapides.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { value: '24/7', label: 'Commandement actif' },
                  { value: '4', label: 'Branches principales' },
                  { value: 'N+', label: 'Escouades en mission' },
                  { value: '100%', label: 'Rôles clairs' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#111820',
                      border: '1px solid #2a3d52',
                      borderRadius: '4px',
                      padding: '16px',
                    }}
                  >
                    <div
                      className="font-display text-gold-primary"
                      style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="font-mono text-text-muted uppercase"
                      style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150}>
            <div
              style={{
                background: '#08090a',
                border: '1px solid #1e2d3d',
                borderRadius: '8px',
                padding: '8px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  borderBottom: '1px solid #1e2d3d',
                  padding: '8px 16px',
                  marginBottom: '8px',
                }}
              >
                <span
                  className="font-mono text-text-muted uppercase"
                  style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                >
                  VISUALISATION — STRUCTURE_NHTSC // CMD_CHAIN
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
