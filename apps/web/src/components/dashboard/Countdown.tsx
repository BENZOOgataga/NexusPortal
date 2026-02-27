'use client'

import { useEffect, useMemo, useState } from 'react'

interface CountdownProps {
  targetIso: string
  expiredLabel: string
}

function formatRemaining(targetMs: number, nowMs: number) {
  const delta = targetMs - nowMs
  if (delta <= 0) {
    return null
  }

  const totalSeconds = Math.floor(delta / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const hh = String(hours).padStart(2, '0')
  const mm = String(minutes).padStart(2, '0')
  const ss = String(seconds).padStart(2, '0')

  return `${hh}:${mm}:${ss}`
}

export default function Countdown({ targetIso, expiredLabel }: CountdownProps) {
  const targetMs = useMemo(() => new Date(targetIso).getTime(), [targetIso])
  const [nowMs, setNowMs] = useState(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNowMs(Date.now())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const remaining = formatRemaining(targetMs, nowMs)

  if (!remaining) {
    return (
      <span className="font-ui text-[11px] uppercase tracking-[0.08em] text-status-warning">
        {expiredLabel}
      </span>
    )
  }

  return (
    <span className="font-ui text-[11px] uppercase tracking-[0.08em] text-cyan-primary">T- {remaining}</span>
  )
}
