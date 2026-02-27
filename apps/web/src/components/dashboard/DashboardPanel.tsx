interface DashboardPanelProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
  children: React.ReactNode
}

export default function DashboardPanel({ title, subtitle, action, children }: DashboardPanelProps) {
  return (
    <section
      className="card--accent-gold h-full border border-border-default bg-bg-secondary p-5 transition-colors duration-200 hover:border-border-strong hover:bg-bg-elevated"
      style={{ borderRadius: '8px' }}
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary">{title}</p>
          {subtitle ? (
            <p className="mt-2 font-body text-[13px] leading-relaxed text-text-secondary">{subtitle}</p>
          ) : null}
        </div>
        {action ? <div>{action}</div> : null}
      </header>
      <div className="mt-4">{children}</div>
    </section>
  )
}
