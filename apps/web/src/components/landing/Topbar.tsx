export default function Topbar() {
  return (
    <div
      className="w-full bg-bg-void border-b border-border-subtle"
      style={{ height: '40px' }}
      role="banner"
      aria-label="Barre de statut organisation"
    >
      <div
        className="mx-auto flex items-center justify-between h-full px-10"
        style={{ maxWidth: '1440px' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-text-muted uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.1em' }}
          >
            ◆ NEXUS HORIZON TRADE & SECURE — ORGANISATION OPÉRATIONNELLE NHTSC
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span
            className="font-mono uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#4caf82' }}
          >
            RECRUTEMENT: OUVERT
          </span>
          <span
            className="font-mono text-text-muted uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.1em' }}
          >
            TAG: [NHTSC]
          </span>
          <span
            className="font-mono text-text-muted uppercase"
            style={{ fontSize: '10px', letterSpacing: '0.1em' }}
          >
            2954-02-26
          </span>
        </div>
      </div>
    </div>
  )
}
