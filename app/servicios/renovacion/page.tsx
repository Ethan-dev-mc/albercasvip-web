import type { Metadata } from 'next'
import { Shield, CheckCircle, RefreshCcw, Clock, Layers, Award } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Renovación de Albercas sin Demolición',
  description:
    'Renovamos tu alberca con fugas SIN retirar el mosaico veneciano. Cambio total de apariencia y 15 años de garantía. Guadalajara y toda México.',
}

const beneficios = [
  {
    Icon: RefreshCcw,
    title: 'Sin demolición',
    desc: 'Instalamos la membrana directamente sobre el mosaico veneciano existente. Sin obra, sin escombros, sin polvo.',
  },
  {
    Icon: Clock,
    title: 'Listo en días, no semanas',
    desc: 'El proceso de renovación es significativamente más rápido que una rehabilitación tradicional.',
  },
  {
    Icon: Shield,
    title: 'Garantía 15 años por escrito',
    desc: '10 años base + 5 extendida. Incomparable en el mercado mundial. Respaldada por RENOLIT ARKORPLAN.',
  },
  {
    Icon: CheckCircle,
    title: 'Solución definitiva para fugas',
    desc: 'La membrana armada elimina fugas de forma permanente. No es un parche — es una funda impermeable completa.',
  },
  {
    Icon: Layers,
    title: 'Cambio total de apariencia',
    desc: 'Elige entre 20+ modelos RENOLIT. Tu alberca vieja tendrá un acabado completamente nuevo y premium.',
  },
  {
    Icon: Award,
    title: 'Soldadura a testa exclusiva',
    desc: '3 cordones de soldadura por térmicos. Sellado total con acabado imperceptible al tacto.',
  },
]

const proceso = [
  {
    n: '01',
    title: 'Diagnóstico técnico',
    desc: 'Inspección de fugas, evaluación del estado del mosaico y diagnóstico completo de la alberca.',
  },
  {
    n: '02',
    title: 'Selección de membrana',
    desc: 'Elige el modelo RENOLIT que transformará la apariencia de tu alberca. Te mostramos el catálogo completo.',
  },
  {
    n: '03',
    title: 'Preparación de superficie',
    desc: 'Limpieza y tratamiento de la superficie existente. Sin romper, sin demoler el mosaico veneciano.',
  },
  {
    n: '04',
    title: 'Instalación de membrana',
    desc: 'Termofusión de la membrana armada RENOLIT directamente sobre la superficie, formando una funda perfecta.',
  },
  {
    n: '05',
    title: 'Soldadura a testa',
    desc: '3 cordones de sellado total en todas las uniones. Acabado imperceptible al tacto — el mejor del mercado.',
  },
  {
    n: '06',
    title: 'Prueba de estanqueidad y entrega',
    desc: 'Llenado, verificación de impermeabilidad y entrega de garantía escrita de 15 años.',
  },
]

export default function RenovacionPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/75 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Servicio 02
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Renueva tu alberca
              <br />
              <span className="text-cyan">sin demolición</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Reparamos albercas con fugas SIN retirar el mosaico veneciano existente. Cambio total
              de apariencia. Garantía de 15 años por escrito.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Descripción ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <img
                src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=900&q=80"
                alt="Alberca renovada con membrana RENOLIT"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                loading="lazy"
              />
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
                Renovación sin obra
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                De alberca con fugas a alberca nueva,
                sin romper nada
              </h2>
              <div className="space-y-4 text-charcoal/65 font-body leading-relaxed">
                <p>
                  La renovación sin demolición es uno de los servicios más innovadores de
                  AlbercasVIP y el que más tiempo y dinero le ahorra al cliente. Si tu alberca tiene
                  fugas, fichas caídas, alga negra en las juntas o un aspecto desgastado, podemos
                  transformarla completamente sin necesidad de romper nada.
                </p>
                <p>
                  Instalamos la membrana RENOLIT ARKORPLAN directamente sobre el mosaico veneciano
                  existente, mediante termofusión y soldadura a testa de 3 cordones que garantiza
                  estanqueidad total por 15 años. El resultado es una alberca que parece nueva —
                  porque lo es.
                </p>
              </div>

              {/* Highlight box */}
              <div className="mt-8 bg-navy text-white rounded-2xl p-6">
                <p className="font-display italic text-lg text-cyan mb-2">
                  "Renovamos albercas con fugas SIN retirar el mosaico veneciano existente."
                </p>
                <p className="font-body text-white/60 text-sm">
                  La única empresa en GDL con esta tecnología y 15 años de garantía escrita.
                </p>
              </div>
            </FadeIn>
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
                Por qué renovar con AlbercasVIP
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
                Paso a paso
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Así renovamos tu alberca
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
              ¿Tu alberca tiene fugas?
            </h2>
            <p className="font-body text-navy/70 text-lg mb-8">
              Cuéntanos el problema. Eduardo te dice si aplica renovación sin demolición — sin costo
              y sin compromiso.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%2C%20me%20interesa%20renovar%20mi%20alberca%20sin%20demolición"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Cotizar renovación
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
