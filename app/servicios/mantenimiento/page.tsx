import type { Metadata } from 'next'
import { Shield, Zap, CheckCircle, Settings, Wrench, Award } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Mantenimiento de Albercas',
  description:
    'Servicio continuo de mantenimiento de albercas: limpieza, equilibrio químico y revisión de equipos en Guadalajara y Jalisco.',
}

const pilares = [
  {
    Icon: Settings,
    title: 'Limpieza completa',
    desc: 'Aspirado de fondo, cepillado de paredes, limpieza de skimmers y superficies. Tu alberca impecable en cada visita.',
  },
  {
    Icon: Zap,
    title: 'Equilibrio químico',
    desc: 'Análisis y ajuste de pH, cloro, sanitizantes y alcalinidad. Agua siempre segura, clara y sin irritaciones.',
  },
  {
    Icon: Wrench,
    title: 'Revisión de equipos',
    desc: 'Verificación de bomba, filtro, iluminación LED y sistemas de calefacción. Prevención antes de que haya problemas.',
  },
]

const beneficios = [
  {
    Icon: Shield,
    title: 'Tu inversión protegida',
    desc: 'El mantenimiento correcto extiende la vida útil de la membrana, equipos y estructura de tu alberca.',
  },
  {
    Icon: CheckCircle,
    title: 'Agua siempre en condiciones',
    desc: 'Equilibrio químico en cada visita. No más agua turbia, verde o con irritaciones en piel y ojos.',
  },
  {
    Icon: Award,
    title: 'Técnicos certificados',
    desc: 'El mismo equipo que construyó o renovó tu alberca la mantiene. Conocen cada detalle de tu proyecto.',
  },
  {
    Icon: Zap,
    title: 'Equipos al 100%',
    desc: 'Revisión constante de bomba, filtros, LEDs y calefacción. Detectamos fallas menores antes de que sean costosas.',
  },
  {
    Icon: Settings,
    title: 'Sin preocupaciones',
    desc: 'Nosotros nos encargamos de todo. Tú solo disfrutas el agua.',
  },
  {
    Icon: Wrench,
    title: 'Informe en cada visita',
    desc: 'Reporte del estado general del agua y los equipos. Siempre sabrás cómo está tu alberca.',
  },
]

const proceso = [
  {
    n: '01',
    title: 'Evaluación inicial',
    desc: 'Análisis del estado actual del agua y los equipos. Establecemos el programa de mantenimiento ideal para tu alberca.',
  },
  {
    n: '02',
    title: 'Limpieza general',
    desc: 'Aspirado de fondo, cepillado de paredes y limpieza de todos los elementos de la alberca.',
  },
  {
    n: '03',
    title: 'Balance químico',
    desc: 'Toma de muestra, análisis y ajuste de pH, cloro, sanitizantes y alcalinidad total.',
  },
  {
    n: '04',
    title: 'Revisión de equipos',
    desc: 'Verificación de bomba de circulación, filtro, LEDs, termostato y sistemas de dosificación.',
  },
  {
    n: '05',
    title: 'Informe y recomendaciones',
    desc: 'Reporte del estado general. Si hay algo que atender, te avisamos antes de que sea un problema mayor.',
  },
  {
    n: '06',
    title: 'Seguimiento periódico',
    desc: 'Visitas regulares según el programa acordado. Tu alberca siempre en perfectas condiciones.',
  },
]

export default function MantenimientoPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572993506534-39b9c4d6e30a?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/75 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Servicio 03
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tu alberca siempre lista,
              <br />
              <span className="text-cyan">sin que tengas que pensar en ella</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Servicio continuo de limpieza, equilibrio químico del agua y revisión de equipos para
              mantener tu alberca en perfectas condiciones todo el año.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Tres pilares ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Nuestro servicio
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Tres pilares de un mantenimiento correcto
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pilares.map(({ Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-navy text-white rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-cyan/20 flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
                  <p className="font-body text-white/65 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beneficios ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-smoke">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Ventajas
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                El mantenimiento correcto hace la diferencia
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {beneficios.map(({ Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed">{desc}</p>
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
                Así trabajamos
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Cada visita de mantenimiento
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
              ¿Tu alberca necesita mantenimiento?
            </h2>
            <p className="font-body text-navy/70 text-lg mb-8">
              Cuéntanos sobre tu alberca y te armamos el programa de mantenimiento ideal.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20mantenimiento%20para%20mi%20alberca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Contratar mantenimiento
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
