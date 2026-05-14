'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogoScreen } from '@/components/ui/Logo'

export function LoadingScreen() {
  const [shouldRender, setShouldRender] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const seen = sessionStorage.getItem('av-splash')
    if (!seen) {
      setShouldRender(true)
      sessionStorage.setItem('av-splash', '1')
      const t = setTimeout(() => setVisible(false), 2600)
      return () => clearTimeout(t)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-navy flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ripple rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-cyan/20"
                style={{ width: 160 + i * 110, height: 160 + i * 110, willChange: 'transform, opacity' }}
                animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>

          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 400px 300px at 50% 50%, rgba(0,188,212,0.08) 0%, transparent 70%)',
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Full logo (mascot + text) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <LogoScreen className="w-[70vw] max-w-[520px]" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="font-display italic text-white/45 text-sm sm:text-base tracking-wide"
            >
              Diseñamos espacios que crean historias
            </motion.p>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="flex gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
