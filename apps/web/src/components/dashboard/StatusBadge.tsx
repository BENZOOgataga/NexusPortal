interface StatusBadgeProps {
  label: string
  tone?: 'online' | 'warning' | 'error' | 'info' | 'offline'
}

const toneMap: Record<NonNullable<StatusBadgeProps['tone']>, { border: string; text: string; background: string }> = {
  online: {
    border: 'rgba(76, 175, 130, 0.35)',
    text: '#4caf82',
    background: 'rgba(76, 175, 130, 0.15)',
  },
  warning: {
    border: 'rgba(245, 166, 35, 0.35)',
    text: '#f5a623',
    background: 'rgba(245, 166, 35, 0.15)',
  },
  error: {
    border: 'rgba(224, 82, 82, 0.35)',
    text: '#e05252',
    background: 'rgba(224, 82, 82, 0.15)',
  },
  info: {
    border: 'rgba(53, 182, 236, 0.35)',
    text: '#35b6ec',
    background: 'rgba(53, 182, 236, 0.15)',
  },
  offline: {
    border: 'rgba(74, 85, 104, 0.35)',
    text: '#9ba8b4',
    background: 'rgba(74, 85, 104, 0.2)',
  },
}

export default function StatusBadge({ label, tone = 'info' }: StatusBadgeProps) {
  const palette = toneMap[tone]

  return (
    <span
      className="inline-flex items-center border px-2 py-1 font-ui text-[10px] uppercase tracking-[0.08em]"
      style={{
        borderRadius: '2px',
        borderColor: palette.border,
        color: palette.text,
        background: palette.background,
      }}
    >
      {label}
    </span>
  )
}
