'use client'

import { useRef, useEffect, type JSX } from 'react'

interface RevealOnScrollProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as: Tag = 'div',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dirClass =
    direction === 'left' ? 'reveal-left' :
    direction === 'right' ? 'reveal-right' :
    'reveal'

  const AnyTag = Tag as React.ElementType
  return (
    <AnyTag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${dirClass} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </AnyTag>
  )
}
