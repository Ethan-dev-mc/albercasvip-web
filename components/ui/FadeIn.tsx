'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode, useMemo } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: Props) {
  const prefersReduced = useReducedMotion()

  const initial = useMemo(() => {
    if (prefersReduced) return { opacity: 0 }
    if (direction === 'up') return { opacity: 0, y: 28 }
    if (direction === 'left') return { opacity: 0, x: -28 }
    if (direction === 'right') return { opacity: 0, x: 28 }
    return { opacity: 0 }
  }, [direction, prefersReduced])

  const animate = useMemo(() => {
    if (direction === 'left' || direction === 'right') return { opacity: 1, x: 0 }
    if (direction === 'up') return { opacity: 1, y: 0 }
    return { opacity: 1 }
  }, [direction])

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: prefersReduced ? 0 : 0.5,
        delay: prefersReduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
