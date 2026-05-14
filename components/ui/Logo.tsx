'use client'

import { useEffect, useRef, useState } from 'react'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function LogoHorizontal({ className = '' }: { className?: string }) {
  const [iconLoaded, setIconLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIconLoaded(true)
    }
  }, [])

  return (
    <div className={`flex items-center gap-2 shrink-0 ${className}`}>
      <div className="relative w-9 h-9 shrink-0">
        <div
          className="absolute inset-0 rounded-full bg-cyan flex items-center justify-center"
          style={{ display: iconLoaded ? 'none' : 'flex' }}
        >
          <span className="text-white font-display font-bold text-xs">AV</span>
        </div>
        <img
          ref={imgRef}
          src={`${BASE}/logo-icon.png`}
          alt=""
          aria-hidden="true"
          className="w-9 h-9 object-contain"
          style={{ display: iconLoaded ? 'block' : 'none' }}
          onLoad={() => setIconLoaded(true)}
        />
      </div>

      <span className="font-display text-base font-semibold tracking-wide leading-none">
        <span className="text-white">ALBERCAS</span>
        <span className="text-cyan font-bold">VIP</span>
      </span>
    </div>
  )
}

export function LogoScreen({ className = '' }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-24 h-24 rounded-full bg-cyan flex items-center justify-center shadow-lg shadow-cyan/30"
        style={{ display: loaded ? 'none' : 'flex' }}
      >
        <span className="font-display font-black text-white text-3xl tracking-tight">AV</span>
      </div>
      <img
        ref={imgRef}
        src={`${BASE}/logo-screen.png`}
        alt="AlbercasVIP"
        className={`object-contain ${className || 'w-[70vw] max-w-[520px]'}`}
        style={{ display: loaded ? 'block' : 'none', mixBlendMode: 'screen' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export function LogoIcon({ className = '' }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  return (
    <div className={className}>
      <div
        className="w-20 h-20 rounded-full bg-cyan flex items-center justify-center shadow-lg shadow-cyan/30"
        style={{ display: loaded ? 'none' : 'flex' }}
      >
        <span className="font-display font-black text-white text-2xl tracking-tight">AV</span>
      </div>
      <img
        ref={imgRef}
        src={`${BASE}/logo-icon.png`}
        alt="AlbercasVIP"
        className="w-20 h-20 object-contain drop-shadow-lg"
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
