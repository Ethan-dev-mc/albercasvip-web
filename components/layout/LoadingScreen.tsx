'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORD_A = 'ALBERCAS'.split('')
const WORD_B = 'VIP'.split('')

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
                style={{ width: 160 + i * 110, height: 160 + i * 110 }}
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
            {/* AV Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 240, damping: 20, delay: 0.15 }}
              className="w-20 h-20 rounded-full bg-cyan flex items-center justify-center shadow-lg shadow-cyan/30"
            >
              <span className="font-display font-black text-white text-2xl tracking-tight">AV</span>
            </motion.div>

            {/* Word mark */}
            <div className="flex items-center gap-2">
              <div className="flex gap-[1px]">
                {WORD_A.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.045, duration: 0.35, ease: 'easeOut' }}
                    className="font-display font-bold text-white text-4xl sm:text-5xl tracking-[0.06em]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="w-2 sm:w-3" />
              <div className="flex gap-[1px]">
                {WORD_B.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
                    className="font-display font-bold text-cyan text-4xl sm:text-5xl tracking-[0.06em]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

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
