import type { Metadata } from 'next'
import { FadeIn } from '@/components/ui/FadeIn'
import { ProyectosGaleria } from '@/components/sections/ProyectosGaleria'

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos',
  description:
    '+145 albercas construidas y +233 renovaciones en Jalisco, Nayarit, Colima y Estado de México. Construcción, renovación sin demolición y albercas en torres residenciales.',
}

export default function ProyectosPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" />

        {/* Accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 600px 400px at 50% 60%, rgba(0,188,212,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Portafolio de proyectos
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cada alberca,
              <br />
              <span className="text-cyan">una historia</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Desde casas particulares hasta torres de lujo en el piso 22. Más de 25 años
              construyendo espacios que crean historias en toda la República Mexicana.
            </p>
          </FadeIn>

          {/* Stats row */}
          <FadeIn delay={0.35}>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mt-12">
              {[
                { valor: '+145', label: 'albercas construidas' },
                { valor: '+233', label: 'renovaciones realizadas' },
                { valor: '+300', label: 'clientes satisfechos' },
              ].map(({ valor, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display font-bold text-3xl text-cyan">{valor}</p>
                  <p className="font-body text-white/50 text-sm mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Gallery with filter bar ───────────────────────────────── */}
      <ProyectosGaleria />

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              ¿Tu proyecto podría{' '}
              <span className="text-cyan">estar aquí?</span>
            </h2>
            <p className="font-body text-white/60 text-lg mb-8">
              Cuéntanos tu idea. En 24 horas te enviamos una propuesta inicial sin costo.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%20Eduardo%2C%20vi%20el%20portafolio%20de%20AlbercasVIP%20y%20me%20interesa%20hablar%20sobre%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cyan text-navy font-body font-bold px-8 py-4 rounded-full hover:bg-cyan-dark transition-colors"
            >
              Iniciar mi proyecto
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
