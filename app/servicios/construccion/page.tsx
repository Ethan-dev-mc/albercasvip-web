import type { Metadata } from 'next'
import { Shield, CheckCircle, Award, Zap, Layers, Hammer } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Construcción de Albercas',
  description:
    'Construcción de albercas nuevas residenciales, hoteles y fraccionamientos con tecnología RENOLIT ARKORPLAN. 15 años de garantía por escrito en Guadalajara.',
}

const beneficios = [
  {
    Icon: Shield,
    title: 'Garantía 15 años por escrito',
    desc: '10 años de estanqueidad + 5 extendida. Incomparable en el mercado mundial y respaldada por RENOLIT.',
  },
  {
    Icon: CheckCircle,
    title: '100% impermeable desde el día uno',
    desc: 'Membrana armada de PVC con termofusión. Sin goteras, sin fugas, sin filtraciones — nunca.',
  },
  {
    Icon: Hammer,
    title: 'Sin grietas, sin sarro, sin alga negra',
    desc: 'Superficie uniforme sin juntas. Olvídate de fichas caídas y alga negra en las uniones.',
  },
  {
    Icon: Layers,
    title: '20+ diseños disponibles',
    desc: 'Elige entre ALKORPLAN 2000, 3000, CERAMICS y TOUCH 3D. Del blanco luminoso al mármol oscuro.',
  },
  {
    Icon: Zap,
    title: 'Membrana térmica',
    desc: 'Las membranas RENOLIT actúan como aislante térmico natural, reduciendo el costo de climatización.',
  },
  {
    Icon: Award,
    title: 'Equipo certificado en España',
    desc: 'Personal capacitado en la central RENOLIT en España. Instalación a estándares europeos.',
  },
]

const proceso = [
  {
    n: '01',
    title: 'Visita técnica',
    desc: 'Evaluamos el espacio, las dimensiones deseadas, condiciones del terreno y necesidades del proyecto.',
  },
  {
    n: '02',
    title: 'Diseño y propuesta',
    desc: 'Selección del modelo de membrana, forma de la alberca, equipamiento y presupuesto detallado.',
  },
  {
    n: '03',
    title: 'Construcción de estructura',
    desc: 'Excavación, muros, dalas y losa de concreto armado según diseño aprobado.',
  },
  {
    n: '04',
    title: 'Instalaciones hidráulicas y eléctricas',
    desc: 'Ramales hidráulicos, sistema de filtrado, circuito eléctrico para LEDs y equipos.',
  },
  {
    n: '05',
    title: 'Revestimiento RENOLIT',
    desc: 'Instalación de membrana armada mediante termofusión y soldadura a testa de 3 cordones — sellado total.',
  },
  {
    n: '06',
    title: 'Equipamiento y entrega',
    desc: 'Instalación de filtros, LEDs, calefacción y automatización. Prueba de estanqueidad y garantía escrita.',
  },
]

export default function ConstruccionPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/75 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Servicio 01
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Construcción de albercas
              <br />
              <span className="text-cyan">con tecnología europea</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Diseñamos y construimos tu alberca desde cero con el sistema RENOLIT ARKORPLAN y
              garantía de 15 años por escrito — la mejor del mercado mundial.
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
                src="https://images.unsplash.com/photo-1572993506534-39b9c4d6e30a?w=900&q=80"
                alt="Alberca nueva construida por AlbercasVIP"
                className="w-full rounded-2xl object-cover aspect-[4/3]"
                loading="lazy"
              />
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
                Construcción
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                Tu alberca perfecta,
                construida para durar generaciones
              </h2>
              <div className="space-y-4 text-charcoal/65 font-body leading-relaxed">
                <p>
                  AlbercasVIP construye albercas residenciales, para hoteles, fraccionamientos
                  exclusivos y proyectos de competencia en todo México. Utilizamos el sistema de
                  membrana armada RENOLIT ARKORPLAN — el más avanzado del mercado mundial — que
                  garantiza impermeabilidad total desde el primer día.
                </p>
                <p>
                  A diferencia del acabado tradicional en gresite o azulejo, la membrana RENOLIT
                  elimina juntas y grietas. No hay alga negra, no hay sarro, no hay fichas caídas.
                  Solo agua limpia y una superficie perfecta, respaldada por 15 años de garantía
                  escrita.
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
                Por qué construir con AlbercasVIP
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
                Cómo construimos tu alberca
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
              Cotiza tu alberca nueva
            </h2>
            <p className="font-body text-navy/70 text-lg mb-8">
              Dinos las dimensiones y el tipo de proyecto. Eduardo te responde hoy.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%2C%20me%20interesa%20cotizar%20la%20construcción%20de%20una%20alberca%20nueva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Cotizar construcción
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
