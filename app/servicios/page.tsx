import type { Metadata } from 'next'
import Link from 'next/link'
import { Hammer, RefreshCcw, Settings, Building, Gauge, ArrowRight, Shield, CheckCircle, Award } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Construcción, renovación, mantenimiento y equipamiento de albercas premium con tecnología RENOLIT ARKORPLAN en Guadalajara y toda México.',
}

const servicios = [
  {
    Icon: Hammer,
    number: '01',
    title: 'Construcción',
    slug: 'construccion',
    description:
      'Albercas nuevas residenciales, para hoteles, fraccionamientos y proyectos de competencia. Con sistema RENOLIT y garantía de 15 años por escrito.',
    tag: 'Nueva construcción',
  },
  {
    Icon: RefreshCcw,
    number: '02',
    title: 'Renovación sin demolición',
    slug: 'renovacion',
    description:
      'Renovamos albercas con fugas SIN retirar el mosaico veneciano existente. Cambio total de apariencia. Garantía 15 años.',
    tag: 'El más solicitado',
  },
  {
    Icon: Settings,
    number: '03',
    title: 'Mantenimiento',
    slug: 'mantenimiento',
    description:
      'Servicio continuo de limpieza, equilibrio químico del agua y revisión de equipos para mantener tu alberca en perfectas condiciones.',
    tag: 'Servicio continuo',
  },
  {
    Icon: Building,
    number: '04',
    title: 'Edificios y Azoteas',
    slug: 'edificios-azoteas',
    description:
      'Sistema 100% impermeable diseñado especialmente para albercas en altura. Torres residenciales, hoteles y azoteas.',
    tag: 'Especialidad única en GDL',
  },
  {
    Icon: Gauge,
    number: '05',
    title: 'Equipamiento',
    slug: 'equipamiento',
    description:
      'Venta e instalación de filtros alemanes, iluminación LED, calefacción híbrida, automatización WiFi y más.',
    tag: 'Alta gama',
  },
]

const diferenciadores = [
  {
    Icon: Shield,
    title: 'Garantía 15 años por escrito',
    body: '10 años base + 5 extendida. Incomparable en el mercado mundial. Respaldada por RENOLIT ARKORPLAN.',
  },
  {
    Icon: RefreshCcw,
    title: 'Renovación sin demolición',
    body: 'Renovamos con fugas SIN retirar el mosaico veneciano. Menos tiempo, menos costo, mismo resultado definitivo.',
  },
  {
    Icon: CheckCircle,
    title: '100% impermeable',
    body: 'Membrana armada de PVC con soldadura a testa de 3 cordones. Sin fugas, sin grietas, sin alga negra.',
  },
  {
    Icon: Building,
    title: 'Albercas en azoteas',
    body: 'El único sistema confiable para albercas en altura. Experiencia comprobada en torres de Guadalajara y Puerto Vallarta.',
  },
  {
    Icon: Gauge,
    title: '20+ diseños RENOLIT',
    body: 'Catálogo completo: ALKORPLAN 2000, 3000, CERAMICS y TOUCH 3D. Hay un modelo para cada proyecto.',
  },
  {
    Icon: Award,
    title: 'Equipo certificado en España',
    body: 'Personal capacitado en la central RENOLIT en España. Instalación a estándares europeos en cada obra.',
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Lo que hacemos
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cinco líneas de servicio,
              <br />
              <span className="text-cyan">una sola garantía</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Construcción, renovación, mantenimiento y equipamiento de albercas premium con
              tecnología RENOLIT ARKORPLAN y respaldo de 15 años por escrito.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Lista de Servicios ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-5">
            {servicios.map(({ Icon, number, title, slug, description, tag }, i) => (
              <FadeIn key={slug} delay={i * 0.07}>
                <Link
                  href={`/servicios/${slug}`}
                  className="group flex items-start gap-5 sm:gap-8 bg-white border border-smoke hover:border-cyan/40 hover:shadow-lg hover:shadow-cyan/5 rounded-2xl p-6 sm:p-8 transition-all duration-300"
                >
                  <div className="flex-none w-14 h-14 rounded-2xl bg-smoke group-hover:bg-cyan/10 flex items-center justify-center transition-colors">
                    <Icon size={26} className="text-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className="font-body text-xs text-charcoal/25 font-bold tracking-wider">
                        {number}
                      </span>
                      <h2 className="font-display font-bold text-navy text-xl sm:text-2xl group-hover:text-cyan transition-colors">
                        {title}
                      </h2>
                      <span className="text-xs font-body font-semibold text-cyan bg-cyan/10 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    </div>
                    <p className="font-body text-charcoal/60 leading-relaxed text-sm sm:text-base">
                      {description}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="shrink-0 mt-1 text-charcoal/20 group-hover:text-cyan group-hover:translate-x-1 transition-all"
                  />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿Por qué AlbercasVIP? ─────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-smoke">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Diferenciadores
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                ¿Por qué AlbercasVIP?
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {diferenciadores.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed">{body}</p>
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
              ¿Qué servicio necesitas?
            </h2>
            <p className="font-body text-navy/70 text-lg mb-8">
              Eduardo Macías te asesora directamente. Sin intermediarios, sin compromisos.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%2C%20me%20interesa%20información%20sobre%20los%20servicios%20de%20AlbercasVIP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Cotizar ahora
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
