'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const milestones = [
  {
    year: 'Hace 25+ años',
    title: 'El origen — SOLAR POOL',
    description:
      'Eduardo Javier Macías Sánchez funda SOLAR POOL e inicia su camino en la industria de las piscinas, construyendo con sus propias manos los cimientos de lo que hoy es AlbercasVIP.',
    proyectos: [],
  },
  {
    year: '2016–2018',
    title: 'Primeros proyectos emblemáticos',
    description:
      'Los primeros grandes proyectos consolidan la reputación de calidad y precisión técnica en la zona metropolitana de Guadalajara y el área de Chapala.',
    proyectos: [
      'Vistas del Ángel — Riviera de Chapala, Jocotepec',
      'Las Cañadas — Zapopan, Jalisco',
      'Zapopan Resort — membrana + cascada LED',
      'Fraccionamiento Las Cañadas — Zapopan',
      'Pinar de la Venta del Astillero — renovación con jacuzzi',
    ],
  },
  {
    year: '2019',
    title: 'Nace AlbercasVIP — Año récord',
    description:
      'SOLAR POOL se subdivide y nace formalmente AlbercasVIP. El primer año supera todas las expectativas con 10 proyectos simultáneos en distintos estados del país.',
    proyectos: [
      'Torre Latitud Providencia — Guadalajara',
      'Hotel Don José — Lo de Marcos, Nayarit',
      'San Esteban — Zapopan (duplicó tamaño + calefacción híbrida)',
      'Torre Estrato — Guadalajara, piso 22 (carril de nado + jacuzzi)',
      'Torre Orchit — Puerto Vallarta',
      'Villa Corona — chapoteadero + nado contra corriente',
      'Casa Fuerte — Tlajomulco de Zúñiga',
      'Casa Cangrejo — Vida del Mar, Manzanillo (alberca infinita)',
      'Sayulita (2 proyectos) — Nayarit',
      'Santa Anita (Domunt Habita) — Tlajomulco',
    ],
  },
  {
    year: '2020',
    title: 'Expansión a la costa del Pacífico',
    description:
      'AlbercasVIP extiende su presencia a los destinos turísticos más exclusivos del Pacífico mexicano.',
    proyectos: [
      'La Cruz Encantada — La Cruz de Huanacaxtle, Nayarit (piso 4)',
      'El Risco Vida del Mar — Manzanillo',
    ],
  },
  {
    year: '2021',
    title: 'Alta gama y automatización completa',
    description:
      'Proyectos de mayor complejidad técnica consolidan la oferta de automatización WiFi, equipamiento premium y acabados de lujo.',
    proyectos: [
      'Torre Andares — Guadalajara',
      'Valle de Bravo — Estado de México (jets, chorros LED, nado contra corriente, cascada laminar, WiFi, calefacción, automatización, cubierta enrolable)',
    ],
  },
  {
    year: '2022',
    title: 'Nuevos acabados y mercados',
    description:
      'Diversificación hacia superficies como Cuarzo Ceramizado y expansión hacia nuevas plazas como Sonora.',
    proyectos: [
      'Puerto Peñasco — Sonora (Cuarzo Ceramizado)',
      'Plaza Midtown — Guadalajara (espejos de agua en plaza comercial)',
    ],
  },
  {
    year: '2023–2026',
    title: 'Consolidación y cobertura nacional',
    description:
      'Apertura de representación en Península (Cancún / Mérida) con Carlos Escamilla y crecimiento sostenido como referente nacional en albercas premium.',
    proyectos: [
      'Representación Península — Carlos Escamilla (Cancún / Mérida)',
      'Cobertura confirmada en Jalisco, Nayarit, Colima, Estado de México, Sonora y Quintana Roo',
    ],
  },
]

export function NosotrosTimeline() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-cyan/25" />

      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-start gap-6 sm:gap-8">
            {/* Dot */}
            <div className="relative z-10 flex-none mt-3">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  active === index
                    ? 'bg-cyan border-cyan shadow-lg shadow-cyan/30'
                    : 'bg-white border-cyan/40'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    active === index ? 'bg-white' : 'bg-cyan'
                  }`}
                />
              </div>
            </div>

            {/* Card */}
            <div className="flex-1 pb-2">
              <button
                className="w-full text-left"
                onClick={() => setActive(active === index ? null : index)}
                aria-expanded={active === index}
              >
                <div
                  className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
                    active === index
                      ? 'bg-navy border-cyan/40 shadow-lg shadow-navy/20'
                      : 'bg-white border-smoke hover:border-cyan/30 hover:shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-cyan font-body font-semibold text-xs uppercase tracking-widest mb-1">
                        {milestone.year}
                      </p>
                      <h3
                        className={`font-display font-bold text-lg sm:text-xl transition-colors ${
                          active === index ? 'text-white' : 'text-navy'
                        }`}
                      >
                        {milestone.title}
                      </h3>
                    </div>
                    {milestone.proyectos.length > 0 && (
                      <span
                        className={`shrink-0 mt-1 transition-colors ${
                          active === index ? 'text-cyan' : 'text-charcoal/30'
                        }`}
                      >
                        {active === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    )}
                  </div>

                  <p
                    className={`font-body text-sm sm:text-base mt-2 leading-relaxed transition-colors ${
                      active === index ? 'text-white/70' : 'text-charcoal/60'
                    }`}
                  >
                    {milestone.description}
                  </p>

                  {active === index && milestone.proyectos.length > 0 && (
                    <ul className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                      {milestone.proyectos.map((p, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/60 font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0 mt-1.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
