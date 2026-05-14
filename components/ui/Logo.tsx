'use client'

import { useState } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

/* ── Text fallbacks ─────────────────────────────────────────────────────── */

function TextMark({ size = 'base' }: { size?: 'sm' | 'base' | 'lg' }) {
  const textCls = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
  const dotCls  = size === 'sm' ? 'w-7 h-7 text-[10px]' : size === 'lg' ? 'w-10 h-10 text-sm' : 'w-9 h-9 text-xs'
  return (
    <div className="flex items-center gap-2">
      <div className={`${dotCls} rounded-full bg-cyan flex items-center justify-center shrink-0`}>
        <span className="text-white font-display font-bold">AV</span>
      </div>
      <span className={`font-display font-semibold tracking-wide ${textCls}`}>
        <span className="text-white">ALBERCAS</span>
        <span className="text-cyan font-bold">VIP</span>
      </span>
    </div>
  )
}

function TextIcon() {
  return (
    <div className="w-20 h-20 rounded-full bg-cyan flex items-center justify-center shadow-lg shadow-cyan/30">
      <span className="font-display font-black text-white text-2xl tracking-tight">AV</span>
    </div>
  )
}

/* ── Exported components ─────────────────────────────────────────────────── */

/**
 * Logo horizontal (ícono + texto).
 * Muestra texto por defecto; cambia a imagen cuando logo.png carga exitosamente.
 */
export function LogoHorizontal({ className = '', size = 'base' }: { className?: string; size?: 'sm' | 'base' | 'lg' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={className}>
      {/* Texto siempre montado; se oculta si la imagen carga */}
      <div style={{ display: loaded ? 'none' : 'flex' }} className="items-center">
        <TextMark size={size} />
      </div>
      {/* Imagen: visible solo al cargar exitosamente */}
      <img
        src={`${BASE}/logo.png`}
        alt="AlbercasVIP"
        style={{ display: loaded ? 'block' : 'none' }}
        className="h-9 w-auto object-contain"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

/**
 * Logo ícono solo (para loading screen y otros).
 * Muestra "AV" por defecto; cambia a logo-icon.png si existe.
 */
export function LogoIcon({ className = '' }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={className}>
      <div style={{ display: loaded ? 'none' : 'flex' }}>
        <TextIcon />
      </div>
      <img
        src={`${BASE}/logo-icon.png`}
        alt="AlbercasVIP"
        style={{ display: loaded ? 'block' : 'none' }}
        className="w-20 h-20 object-contain drop-shadow-lg"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
