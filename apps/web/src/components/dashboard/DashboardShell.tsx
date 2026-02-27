import Link from 'next/link'

export interface DashboardNavItem {
  key: string
  href: string
  active?: boolean
}

interface DashboardShellProps {
  topbarLeft: React.ReactNode
  topbarRight: React.ReactNode
  brandTitle: string
  navItems: DashboardNavItem[]
  sidebar: React.ReactNode
  children: React.ReactNode
}

export default function DashboardShell({
  topbarLeft,
  topbarRight,
  brandTitle,
  navItems,
  sidebar,
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="h-10 border-b border-border-subtle bg-bg-void">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-4 lg:px-10">
          <div className="min-w-0">{topbarLeft}</div>
          <div>{topbarRight}</div>
        </div>
      </div>

      <nav className="h-16 border-b border-border-subtle bg-[rgba(13,17,23,0.95)] backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-6 px-4 lg:px-10">
          <Link
            href="/dashboard"
            className="font-display text-xs uppercase tracking-[0.1em] text-gold-primary sm:text-sm"
          >
            {brandTitle}
          </Link>
          <span className="font-ui text-[10px] uppercase tracking-[0.1em] text-text-muted">
            [{brandTitle}]
          </span>
        </div>
      </nav>

      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-4 py-6 lg:px-10">
        <aside className="col-span-12 xl:col-span-3">
          <div className="space-y-4 xl:sticky xl:top-6">
            <div
              className="border border-border-default bg-bg-secondary p-4"
              style={{ borderRadius: '8px' }}
            >
              <p className="font-ui text-[10px] uppercase tracking-[0.1em] text-cyan-primary">{brandTitle}</p>
              <div className="mt-3 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block border px-3 py-2 font-ui text-[11px] uppercase tracking-[0.1em] transition-colors duration-200"
                    style={{
                      borderRadius: '4px',
                      borderColor: item.active ? '#c9a84c' : '#2a3d52',
                      color: item.active ? '#c9a84c' : '#9ba8b4',
                      background: item.active ? 'rgba(77,61,26,0.25)' : 'rgba(8,9,10,0.45)',
                    }}
                  >
                    {item.key}
                  </Link>
                ))}
              </div>
            </div>
            {sidebar}
          </div>
        </aside>
        <main className="col-span-12 xl:col-span-9">{children}</main>
      </div>
    </div>
  )
}
