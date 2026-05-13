'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import { proyectos, tipoLabels, type TipoProyecto } from '@/lib/proyectos'

type Filtro = TipoProyecto | 'all'

const FILTROS: { id: Filtro; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'construccion', label: 'Construcción' },
  { id: 'renovacion', label: 'Renovación' },
  { id: 'torre', label: 'Torres' },
  { id: 'hotel', label: 'Hotel / Comercial' },
]

const TIPO_COLORS: Record<TipoProyecto, string> = {
  construccion: 'bg-emerald-500/90',
  renovacion: 'bg-cyan/90',
  equipamiento: 'bg-purple-500/90',
  torre: 'bg-navy/90',
  hotel: 'bg-amber-500/90',
}

export function ProyectosGaleria() {
  const [filtro, setFiltro] = useState<Filtro>('all')

  const filtered = filtro === 'all' ? proyectos : proyectos.filter((p) => p.tipo === filtro)

  return (
    <>
      {/* ── Filter bar ─────────────────────────────────────── */}
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
            {filtered.length} proyectos
          </span>
        </div>
      </div>

      {/* ── Masonry grid ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={filtro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5"
          >
            {filtered.map((proyecto, i) => (
              <motion.div
                key={proyecto.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="break-inside-avoid mb-5"
              >
                <Link
                  href={`/proyectos/${proyecto.id}`}
                  className="group relative block overflow-hidden rounded-2xl bg-navy"
                >
                  {/* Image */}
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      proyecto.destacado ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                    loading="lazy"
                  />

                  {/* Permanent gradient bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  {/* Tipo badge - top left */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white ${
                        TIPO_COLORS[proyecto.tipo]
                      }`}
                    >
                      {tipoLabels[proyecto.tipo]}
                    </span>
                  </div>

                  {/* Year - top right */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-body font-semibold text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {proyecto.año}
                    </span>
                  </div>

                  {/* Content - bottom (always visible, slides up on hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">
                      {proyecto.titulo}
                    </h3>
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      <MapPin size={12} className="text-cyan shrink-0" />
                      <p className="font-body text-white/70 text-xs">
                        {proyecto.ubicacion}, {proyecto.estado}
                      </p>
                    </div>
                    <p className="font-body text-white/50 text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                      {proyecto.membrana}
                    </p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      <span className="text-xs font-body font-semibold text-cyan">
                        Ver proyecto →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-charcoal/40 text-lg">
              No hay proyectos en esta categoría aún.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
