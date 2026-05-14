'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const x = useSpring(rawX, { damping: 28, stiffness: 250, mass: 0.5 })
  const y = useSpring(rawY, { damping: 28, stiffness: 250, mass: 0.5 })

  const rafRef = useRef<number | null>(null)
  const targetX = useRef(-100)
  const targetY = useRef(-100)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return
    setIsTouchDevice(false)

    const onMove = (e: MouseEvent) => {
      targetX.current = e.clientX
      targetY.current = e.clientY
      if (!visible) setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      setHovering(!!el.closest('a, button, [role="button"], input, textarea, select, label'))
    }

    const loop = () => {
      rawX.set(targetX.current)
      rawY.set(targetY.current)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [rawX, rawY, visible])

  if (isTouchDevice || !visible) return null

  return (
    <>
      {/* Dot — follows precisely */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-cyan"
        style={{
          x: rawX,
          y: rawY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          willChange: 'transform',
        }}
      />
      {/* Ring — follows with spring lag */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-cyan/60 mix-blend-difference"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        animate={{
          width: hovering ? 42 : 20,
          height: hovering ? 42 : 20,
          backgroundColor: hovering ? 'rgba(0,188,212,0.15)' : 'transparent',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />
    </>
  )
}
