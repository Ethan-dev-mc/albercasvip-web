import type { Metadata } from 'next'
import { FadeIn } from '@/components/ui/FadeIn'
import { ModelosCatalog } from '@/components/sections/ModelosCatalog'

export const metadata: Metadata = {
  title: 'Catálogo de Modelos — Membranas RENOLIT ARKORPLAN',
  description:
    '24 modelos de membrana RENOLIT en 4 líneas exclusivas: ALKORPLAN 2000, 3000, CERAMICS y TOUCH 3D. Garantía de hasta 15 años. Disponibles en Guadalajara.',
}

const lineasInfo = [
  {
    nombre: 'ALKORPLAN 2000',
    descripcion: 'Lámina unicolor de 1.5mm, lacada con pigmentos de gran resistencia y plastificantes de alta longevidad.',
    specs: '6 modelos · 1.5mm · Garantía 10 años',
    color: '#5BB8D4',
  },
  {
    nombre: 'ALKORPLAN 3000',
    descripcion: 'Lámina de 1.5mm estampada, doblemente lacada con diseños exclusivos para decorar a la vez que impermeabilizar.',
    specs: '8 modelos · 1.5mm · Garantía 15 años',
    color: '#2A5FA5',
  },
  {
    nombre: 'CERAMICS',
    descripcion: '"Parece… ¡pero no lo es!" Inspirada en mosaicos griegos. Con relieve, 2mm y certificado de resbaladicidad C.',
    specs: '4 modelos · 2mm · Certificado antideslizante',
    color: '#00BCD4',
  },
  {
    nombre: 'TOUCH 3D',
    descripcion: 'La primera membrana armada de 2mm con relieve tridimensional. La más robusta y resistente del mercado.',
    specs: '6 modelos · 2mm · Garantía 15 años',
    color: '#1A3A6B',
  },
]

export default function ModelosPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Catálogo completo
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              24 modelos RENOLIT
              <br />
              <span className="text-cyan">para cada proyecto</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Cuatro líneas de membrana armada RENOLIT ARKORPLAN. Del unicolor clásico al relieve 3D.
              Selecciona el modelo que transformará tu alberca — haz clic para ver detalles y cotizar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Las 4 líneas ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-smoke">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Las 4 líneas
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Tecnología alemana en cada acabado
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lineasInfo.map(({ nombre, descripcion, specs, color }, i) => (
              <FadeIn key={nombre} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div
                    className="w-10 h-10 rounded-xl mb-4 shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{nombre}</h3>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed flex-1">
                    {descripcion}
                  </p>
                  <p className="font-body text-xs text-cyan font-semibold mt-4 pt-4 border-t border-smoke">
                    {specs}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catálogo interactivo (client) ────────────────────────── */}
      <section className="bg-offwhite pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-0">
          <div className="text-center pt-14 pb-4 px-4">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Elige tu modelo
              </h2>
              <p className="font-body text-charcoal/55 mt-3 max-w-xl mx-auto">
                Filtra por línea y haz clic en cualquier modelo para ver la descripción completa y cotizar por WhatsApp.
              </p>
            </FadeIn>
          </div>
          <ModelosCatalog />
        </div>
      </section>

      {/* ── CTA Final ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cyan">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
              ¿No sabes cuál elegir?
            </h2>
            <p className="font-body text-navy/70 text-lg mb-8">
              Eduardo te asesora sin compromiso. Dinos el tipo de proyecto y las condiciones de tu
              alberca — él te recomienda el modelo ideal.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%2C%20me%20interesa%20conocer%20los%20modelos%20de%20membrana%20RENOLIT%20para%20mi%20alberca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Asesoría sin compromiso
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
