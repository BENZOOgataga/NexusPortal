interface LoaderRSIProps {
  label: string
}

export default function LoaderRSI({ label }: LoaderRSIProps) {
  return (
    <div className="flex items-center justify-center gap-3 border border-border-default bg-bg-primary px-4 py-5">
      <span
        className="inline-block h-5 w-5 animate-rsi-spin rounded-full border-2 border-border-default border-t-gold-primary"
        aria-hidden="true"
      />
      <span className="font-ui text-[11px] uppercase tracking-[0.1em] text-text-secondary">{label}</span>
    </div>
  )
}
