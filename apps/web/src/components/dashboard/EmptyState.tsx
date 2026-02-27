interface EmptyStateProps {
  message: string
  tone?: 'default' | 'error'
}

export default function EmptyState({ message, tone = 'default' }: EmptyStateProps) {
  const palette =
    tone === 'error'
      ? {
          border: '#e05252',
          text: '#e05252',
        }
      : {
          border: '#2a3d52',
          text: '#9ba8b4',
        }

  return (
    <div
      className="border bg-bg-primary px-4 py-5 text-center font-ui text-[11px] uppercase tracking-[0.1em]"
      style={{
        borderRadius: '4px',
        borderColor: palette.border,
        color: palette.text,
      }}
    >
      {message}
    </div>
  )
}
