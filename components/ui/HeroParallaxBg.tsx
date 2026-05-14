'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

interface Props {
  src: string
  alt: string
  priority?: boolean
}

export function HeroParallaxBg({ src, alt, priority = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? ['0%', '0%'] : ['0%', '25%'])

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0"
      style={{ y, willChange: 'transform' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover scale-110"
        unoptimized
      />
    </motion.div>
  )
}
