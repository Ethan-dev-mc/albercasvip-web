'use client'

import { useState } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

/* ──────────────────────────────────────────────────────────────────────────
   LogoHorizontal
   Muestra: ícono mascota (logo-icon.png) + texto "ALBERCASVIP"
   Fallback: círculo AV + texto
────────────────────────────────────────────────────────────────────────── */
export function LogoHorizontal({ className = '' }: { className?: string }) {
  const [iconLoaded, setIconLoaded] = useState(false)

  return (
    <div className={`flex items-center gap-2 shrink-0 ${className}`}>
      {/* Ícono: imagen real o círculo AV como fallback */}
      <div className="relative w-9 h-9 shrink-0">
        {/* Fallback siempre montado, se oculta si la imagen carga */}
        <div
          className="absolute inset-0 rounded-full bg-cyan flex items-center justify-center"
          style={{ display: iconLoaded ? 'none' : 'flex' }}
        >
          <span className="text-white font-display font-bold text-xs">AV</span>
        </div>
        {/* Imagen del ícono mascota */}
        <img
          src={`${BASE}/logo-icon.png`}
          alt=""
          aria-hidden="true"
          className="w-9 h-9 object-contain"
          style={{ display: iconLoaded ? 'block' : 'none' }}
          onLoad={() => setIconLoaded(true)}
        />
      </div>

      {/* Texto siempre visible */}
      <span className="font-display text-base font-semibold tracking-wide leading-none">
        <span className="text-white">ALBERCAS</span>
        <span className="text-cyan font-bold">VIP</span>
      </span>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   LogoScreen
   Para la pantalla de carga: logo completo (mascota + texto).
   Usa logo-screen.png. Fallback: ícono solo.
────────────────────────────────────────────────────────────────────────── */
export function LogoScreen({ className = '' }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Fallback: ícono AV mientras carga */}
      <div
        className="w-24 h-24 rounded-full bg-cyan flex items-center justify-center shadow-lg shadow-cyan/30"
        style={{ display: loaded ? 'none' : 'flex' }}
      >
        <span className="font-display font-black text-white text-3xl tracking-tight">AV</span>
      </div>
      {/* Logo completo */}
      <img
        src={`${BASE}/logo-screen.png`}
        alt="AlbercasVIP"
        className="max-w-[260px] w-full object-contain drop-shadow-xl"
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   LogoIcon — solo el ícono mascota (para usos aislados)
────────────────────────────────────────────────────────────────────────── */
export function LogoIcon({ className = '' }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={className}>
      <div
        className="w-20 h-20 rounded-full bg-cyan flex items-center justify-center shadow-lg shadow-cyan/30"
        style={{ display: loaded ? 'none' : 'flex' }}
      >
        <span className="font-display font-black text-white text-2xl tracking-tight">AV</span>
      </div>
      <img
        src={`${BASE}/logo-icon.png`}
        alt="AlbercasVIP"
        className="w-20 h-20 object-contain drop-shadow-lg"
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
