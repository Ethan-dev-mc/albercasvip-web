import type { Metadata } from 'next'
import { Gauge, Zap, Thermometer, Settings, Wifi, Award } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Equipamiento de Albercas',
  description:
    'Venta e instalación de equipamiento premium para albercas: filtros alemanes, LEDs Jandy, calefacción híbrida, automatización WiFi y más.',
}

const categorias = [
  {
    Icon: Settings,
    title: 'Filtración',
    items: [
      'Filtrado alemán de alta eficiencia',
      'Sistemas de zeolita (menor consumo, mayor filtrado)',
      'Equipos Astral Pool',
    ],
  },
  {
    Icon: Zap,
    title: 'Iluminación LED',
    items: [
      'LEDs subacuáticos Jandy Hidro Cool 6w 12v',
      'Cascadas LED laminares',
      'Jets Deck LED Laminar',
      'Chorros Borbotón LED Laminar',
    ],
  },
  {
    Icon: Thermometer,
    title: 'Calefacción',
    items: [
      'Sistemas de calefacción híbrida (solar + bomba de calor eléctrica)',
      'Módulos intercambiadores de calor solar',
      'Bombas de calor de alta eficiencia',
    ],
  },
  {
    Icon: Wifi,
    title: 'Automatización',
    items: [
      'Bombeo inteligente con WiFi',
      'Automatización completa del sistema',
      'Cubiertas enrolables',
      'Control remoto desde celular',
    ],
  },
  {
    Icon: Gauge,
    title: 'Hidromasaje y recreación',
    items: [
      'Nado contra corriente',
      'Jets Deck LED Laminar',
      'Chorros Borbotón LED',
      'Cascadas laminares',
    ],
  },
  {
    Icon: Settings,
    title: 'Sanitización',
    items: [
      'Sanitización por dosificación de cloración',
      'Sistemas de tratamiento de agua',
      'Medición y control automático de pH',
    ],
  },
]

const beneficios = [
  {
    Icon: Award,
    title: 'Marcas de primer nivel',
    desc: 'Trabajamos con Jandy, Astral Pool y filtración alemana. Equipos con respaldo, garantía y refacciones disponibles.',
  },
  {
    Icon: Wifi,
    title: 'Automatización WiFi',
    desc: 'Controla tu alberca desde el celular: encender LEDs, ajustar calefacción, activar el sistema de cobertura.',
  },
  {
    Icon: Thermometer,
    title: 'Ahorro energético',
    desc: 'Calefacción híbrida solar + bomba de calor. El agua a la temperatura ideal con el mínimo consumo eléctrico.',
  },
  {
    Icon: Gauge,
    title: 'Instalación certificada',
    desc: 'El mismo equipo técnico que instaló tu membrana RENOLIT instala y calibra todos los equipos.',
  },
]

const proceso = [
  {
    n: '01',
    title: 'Diagnóstico',
    desc: 'Evaluamos las necesidades de tu alberca, el estado del equipamiento actual y los objetivos: recreación, competencia, hotel o residencia.',
  },
  {
    n: '02',
    title: 'Propuesta de equipamiento',
    desc: 'Seleccionamos los equipos ideales según uso, dimensiones de la alberca y presupuesto disponible.',
  },
  {
    n: '03',
    title: 'Instalación',
    desc: 'Montaje y conexión de todos los equipos por técnicos certificados. Cada instalación sigue los estándares del fabricante.',
  },
  {
    n: '04',
    title: 'Calibración y pruebas',
    desc: 'Ajuste de todos los sistemas: presión del filtro, temperatura de calefacción, ángulo y flujo de jets y cascadas.',
  },
  {
    n: '05',
    title: 'Configuración WiFi',
    desc: 'Programación del sistema de automatización y control remoto desde tu celular (cuando aplique).',
  },
  {
    n: '06',
    title: 'Capacitación',
    desc: 'Te explicamos cómo operar cada sistema. También te damos la documentación de los equipos instalados.',
  },
]

export default function EquipamientoPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/75 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Servicio 05
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Equipa tu alberca
              <br />
              <span className="text-cyan">con lo mejor del mundo</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Venta e instalación de filtros alemanes, iluminación Jandy, calefacción híbrida,
              automatización WiFi y equipamiento de alta gama para máximo confort y eficiencia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Categorías de equipamiento ───────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Catálogo
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Todo el equipamiento en un solo lugar
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categorias.map(({ Icon, title, items }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div className="bg-smoke rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-3">{title}</h3>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-sm text-charcoal/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beneficios ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Por qué elegirnos
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">
                Equipamiento de alta gama,
                instalación certificada
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {beneficios.map(({ Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-cyan/15 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Proceso
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Del diagnóstico a la primera zambullida
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {proceso.map(({ n, title, desc }, i) => (
              <FadeIn key={n} delay={i * 0.07}>
                <div className="flex gap-4 bg-smoke rounded-2xl p-6">
                  <span className="flex-none font-display font-bold text-3xl text-cyan/30 leading-none mt-0.5">
                    {n}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-navy text-lg mb-1">{title}</h3>
                    <p className="font-body text-charcoal/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cyan">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
              ¿Qué quieres mejorar en tu alberca?
            </h2>
            <p className="font-body text-navy/70 text-lg mb-8">
              Cuéntanos qué necesitas. Te recomendamos el equipamiento ideal para tu proyecto.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%2C%20me%20interesa%20equipamiento%20para%20mi%20alberca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Cotizar equipamiento
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
