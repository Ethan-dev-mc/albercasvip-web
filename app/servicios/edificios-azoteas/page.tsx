import type { Metadata } from 'next'
import { Shield, CheckCircle, Building, Award, Layers, Zap } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Albercas en Edificios y Azoteas',
  description:
    'Albercas 100% impermeables para edificios, torres residenciales y azoteas. Sistema RENOLIT especializado para condiciones de altura en Guadalajara.',
}

const beneficios = [
  {
    Icon: Shield,
    title: '100% impermeable en altura',
    desc: 'En una azotea no hay margen para errores. La membrana armada RENOLIT garantiza cero filtraciones hacia las plantas inferiores.',
  },
  {
    Icon: Zap,
    title: 'Sin obra pesada',
    desc: 'El sistema de membrana es más ligero que el concreto tradicional — ideal para las cargas estructurales de edificios.',
  },
  {
    Icon: CheckCircle,
    title: 'Soldadura a testa exclusiva',
    desc: '3 cordones de sellado total en todas las uniones. El mismo estándar que en cualquier otra obra, adaptado a la altura.',
  },
  {
    Icon: Layers,
    title: 'Catálogo completo RENOLIT',
    desc: '20+ modelos disponibles — incluyendo TOUCH 3D y CERAMICS. Diseños premium para proyectos de alto nivel.',
  },
  {
    Icon: Award,
    title: 'Garantía 15 años por escrito',
    desc: 'La misma garantía que en cualquier proyecto AlbercasVIP, sin excepción, independientemente de la altura o el tipo de edificio.',
  },
  {
    Icon: Building,
    title: 'Experiencia comprobada en altura',
    desc: 'Proyectos en pisos 22, hoteles y torres residenciales en Guadalajara, Puerto Vallarta y Nayarit.',
  },
]

const proyectosRef = [
  { nombre: 'Torre Estrato', detalle: 'Guadalajara — Carril de nado + jacuzzi en piso 22' },
  { nombre: 'Torre Latitud Providencia', detalle: 'Guadalajara — Alberca 20m × 10m' },
  { nombre: 'Torre Orchit', detalle: 'Puerto Vallarta — Cuarzo blanco' },
  { nombre: 'Torre Andares', detalle: 'Guadalajara — Reparación y revestimiento' },
  { nombre: 'La Cruz Encantada', detalle: 'La Cruz de Huanacaxtle, Nayarit — Piso 4' },
]

const proceso = [
  {
    n: '01',
    title: 'Evaluación estructural',
    desc: 'Verificamos cargas, impermeabilización existente, accesos y condiciones específicas del edificio o azotea.',
  },
  {
    n: '02',
    title: 'Diseño especializado',
    desc: 'Adaptación del sistema RENOLIT a las condiciones de altura, estructura y requerimientos del proyecto.',
  },
  {
    n: '03',
    title: 'Impermeabilización base',
    desc: 'Tratamiento de la losa y zona perimetral si se requiere, antes de instalar la membrana principal.',
  },
  {
    n: '04',
    title: 'Membrana RENOLIT',
    desc: 'Termofusión y soldadura a testa en toda la superficie. Sellado total con 3 cordones de soldadura.',
  },
  {
    n: '05',
    title: 'Equipamiento adaptado',
    desc: 'Instalación de filtros, LEDs y calefacción con las adaptaciones necesarias para la ubicación en altura.',
  },
  {
    n: '06',
    title: 'Prueba y certificación',
    desc: 'Prueba de estanqueidad, verificación de impermeabilidad y entrega de garantía escrita de 15 años.',
  },
]

export default function EdificiosAzoteasPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/75 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Servicio 04
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Albercas en altura,
              <br />
              <span className="text-cyan">impermeabilización sin compromiso</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              El sistema RENOLIT es la solución perfecta para albercas en edificios, torres
              residenciales y azoteas. 100% impermeable. Sin filtraciones a plantas inferiores.
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
                alt="Alberca en azotea de edificio"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                loading="lazy"
              />
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
                Especialidad única en GDL
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                Donde el concreto tradicional
                no puede garantizar lo que sí garantizamos nosotros
              </h2>
              <div className="space-y-4 text-charcoal/65 font-body leading-relaxed">
                <p>
                  Construir una alberca en una azotea o edificio requiere garantías absolutas de
                  impermeabilización — no hay margen para errores cuando hay departamentos o
                  locales debajo. El sistema RENOLIT ARKORPLAN, con su membrana armada de PVC y
                  soldadura a testa de 3 cordones, es la tecnología más avanzada disponible para
                  este tipo de proyectos.
                </p>
                <p>
                  AlbercasVIP tiene experiencia comprobada en proyectos de altura en Guadalajara,
                  Puerto Vallarta y la Riviera Nayarit. Desde un carril de nado en el piso 22 hasta
                  albercas de uso hotelero con flujo constante de usuarios.
                </p>
              </div>

              {/* Proyectos referencia */}
              <div className="mt-8">
                <p className="font-body text-xs text-cyan uppercase tracking-widest font-semibold mb-3">
                  Proyectos en altura realizados
                </p>
                <ul className="space-y-2">
                  {proyectosRef.map((p) => (
                    <li key={p.nombre} className="flex items-start gap-2.5 font-body text-sm text-charcoal/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 shrink-0" />
                      <span>
                        <strong className="text-navy">{p.nombre}</strong> — {p.detalle}
                      </span>
                    </li>
                  ))}
                </ul>
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
                Por qué RENOLIT en altura
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                El sistema diseñado para este reto
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
                Así lo hacemos en altura
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
              ¿Tienes un proyecto en altura?
            </h2>
            <p className="font-body text-navy/70 text-lg mb-8">
              Cuéntanos el proyecto. Eduardo evalúa si es viable y te dice qué sistema aplica.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%2C%20me%20interesa%20una%20alberca%20para%20edificio%20o%20azotea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Consultar proyecto en altura
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
