'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const handle = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(handle)
    }
  }, [])

  return <>{children}</>
}
