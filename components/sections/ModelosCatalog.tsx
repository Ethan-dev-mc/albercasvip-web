'use client'

import { useState, useEffect } from 'react'
import { X, Shield, Layers } from 'lucide-react'
import { membranas, type Linea, type Membrana } from '@/lib/membranas'

type Filtro = Linea | 'all'

const FILTROS: { id: Filtro; label: string }[] = [
  { id: 'all', label: 'Todos los modelos' },
  { id: 'alkorplan-2000', label: 'ALKORPLAN 2000' },
  { id: 'alkorplan-3000', label: 'ALKORPLAN 3000' },
  { id: 'ceramics', label: 'CERAMICS' },
  { id: 'touch-3d', label: 'TOUCH 3D' },
]

const GARANTIA_COLOR: Record<string, string> = {
  '10 años': 'bg-blue-50 text-blue-700',
  '15 años': 'bg-cyan/10 text-cyan',
}

export function ModelosCatalog() {
  const [filtro, setFiltro] = useState<Filtro>('all')
  const [modelo, setModelo] = useState<Membrana | null>(null)

  const filtered = filtro === 'all' ? membranas : membranas.filter((m) => m.linea === filtro)

  const waUrl = modelo
    ? `https://wa.me/5213310808938?text=${encodeURIComponent(
        `Hola, me interesa el modelo ${modelo.lineaNombre} ${modelo.nombre} de AlbercasVIP`
      )}`
    : '#'

  // Escape key closes modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModelo(null)
    }
    if (modelo) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modelo])

  return (
    <>
      {/* ── Sticky filter bar ────────────────────────────────── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-smoke shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 overflow-x-auto">
          {FILTROS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFiltro(id)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-body font-semibold transition-all ${
                filtro === id
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-smoke text-charcoal/65 hover:bg-cyan/10 hover:text-cyan'
              }`}
            >
              {label}
            </button>
          ))}
          <span className="shrink-0 ml-auto font-body text-xs text-charcoal/35 whitespace-nowrap pl-4 border-l border-smoke">
            {filtered.length} modelos
          </span>
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((m) => (
            <button
              key={m.id}
              onClick={() => setModelo(m)}
              className="group text-left bg-white border border-smoke hover:border-cyan/40 hover:shadow-xl hover:shadow-cyan/5 rounded-2xl overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={m.imagen}
                  alt={`Membrana RENOLIT ${m.lineaNombre} ${m.nombre}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Color dot */}
                <div className="absolute top-3 left-3">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: m.color }}
                    aria-label={`Color: ${m.nombre}`}
                  />
                </div>
                {/* Warranty badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-xs font-body font-bold px-2.5 py-1 rounded-full ${
                      GARANTIA_COLOR[m.garantia] ?? 'bg-white/80 text-charcoal'
                    }`}
                  >
                    {m.garantia}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <p className="text-cyan text-[10px] font-body font-bold uppercase tracking-widest mb-1">
                  {m.lineaNombre}
                </p>
                <h3 className="font-display font-bold text-navy text-xl group-hover:text-cyan transition-colors mb-2">
                  {m.nombre}
                </h3>
                <p className="font-body text-charcoal/55 text-sm leading-relaxed">
                  {m.descripcion}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-smoke">
                  <span className="text-xs font-body text-charcoal/35">{m.grosor}</span>
                  <span className="text-xs font-body font-semibold text-cyan">
                    Ver detalles →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal ────────────────────────────────────────────── */}
      {modelo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Modelo ${modelo.nombre}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy/75 backdrop-blur-sm"
            onClick={() => setModelo(null)}
          />

          {/* Card */}
          <div className="relative bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl flex flex-col sm:flex-row max-h-[90vh]">
            {/* Close */}
            <button
              onClick={() => setModelo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-smoke transition-colors shadow-sm"
              aria-label="Cerrar"
            >
              <X size={16} className="text-charcoal" />
            </button>

            {/* Image */}
            <div className="sm:w-2/5 flex-none">
              <img
                src={modelo.imagen}
                alt={`${modelo.lineaNombre} ${modelo.nombre}`}
                className="w-full h-52 sm:h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
              {/* Color + line */}
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-7 h-7 rounded-full border border-charcoal/10 shrink-0 shadow-sm"
                  style={{ backgroundColor: modelo.color }}
                />
                <p className="text-cyan text-xs font-body font-bold uppercase tracking-widest">
                  {modelo.lineaNombre}
                </p>
              </div>

              {/* Name */}
              <h2 className="font-display font-bold text-navy text-3xl mb-4">{modelo.nombre}</h2>

              {/* Aspirational description */}
              <p className="font-body text-charcoal/70 leading-relaxed mb-6 text-base">
                {modelo.descripcion}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-smoke rounded-xl p-4 text-center">
                  <Shield size={18} className="text-cyan mx-auto mb-1.5" />
                  <p className="font-display font-bold text-navy text-xl">{modelo.garantia}</p>
                  <p className="font-body text-xs text-charcoal/45 mt-0.5">garantía escrita</p>
                </div>
                <div className="bg-smoke rounded-xl p-4 text-center">
                  <Layers size={18} className="text-cyan mx-auto mb-1.5" />
                  <p className="font-display font-bold text-navy text-xl">{modelo.grosor}</p>
                  <p className="font-body text-xs text-charcoal/45 mt-0.5">espesor de membrana</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-cyan text-navy font-body font-bold text-center py-3.5 rounded-xl hover:bg-cyan-dark transition-colors"
              >
                Me interesa este modelo
              </a>

              <p className="text-center font-body text-xs text-charcoal/35 mt-3">
                Cotización sin compromiso con Eduardo Macías
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
