'use client'

import { useState } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function LogoHorizontal({ className = '', textSize = 'base' }: { className?: string; textSize?: 'sm' | 'base' | 'lg' }) {
  const [err, setErr] = useState(false)

  if (err) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="w-8 h-8 rounded-full bg-cyan flex items-center justify-center shrink-0">
          <span className="text-white font-display font-bold text-xs">AV</span>
        </div>
        <span className={`font-display font-semibold tracking-wide text-${textSize}`}>
          <span className="text-white">ALBERCAS</span>
          <span className="text-cyan font-bold">VIP</span>
        </span>
      </div>
    )
  }

  return (
    <img
      src={`${BASE}/logo.png`}
      alt="AlbercasVIP"
      className={`h-9 w-auto object-contain ${className}`}
      onError={() => setErr(true)}
    />
  )
}

export function LogoIcon({ className = '' }: { className?: string }) {
  const [err, setErr] = useState(false)

  if (err) {
    return (
      <div className={`w-20 h-20 rounded-full bg-cyan flex items-center justify-center shadow-lg shadow-cyan/30 ${className}`}>
        <span className="font-display font-black text-white text-2xl tracking-tight">AV</span>
      </div>
    )
  }

  return (
    <img
      src={`${BASE}/logo-icon.png`}
      alt="AlbercasVIP"
      className={`w-20 h-20 object-contain drop-shadow-lg ${className}`}
      onError={() => setErr(true)}
    />
  )
}
