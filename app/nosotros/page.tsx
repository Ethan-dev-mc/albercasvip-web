import type { Metadata } from 'next'
import { Shield, Leaf, Zap, Award, CheckCircle, Users, Thermometer } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { NosotrosTimeline } from '@/components/sections/NosotrosTimeline'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce la historia de AlbercasVIP, el liderazgo de Eduardo Macías con más de 25 años de experiencia y el respaldo de RENOLIT ARKORPLAN.',
}

const valores = [
  {
    Icon: Shield,
    title: 'Calidad sin compromisos',
    description:
      'Instalaciones de primer nivel y materiales certificados internacionalmente en cada proyecto.',
  },
  {
    Icon: Leaf,
    title: 'Compromiso ambiental',
    description:
      'Albercas térmicas que generan ahorro energético y procesos constructivos eficientes.',
  },
  {
    Icon: Zap,
    title: 'Innovación constante',
    description:
      'Tecnologías de vanguardia: TOUCH 3D, automatización WiFi, soldadura a testa exclusiva.',
  },
  {
    Icon: Award,
    title: 'Profesionalismo certificado',
    description:
      'Personal capacitado directamente en la central RENOLIT en España.',
  },
  {
    Icon: CheckCircle,
    title: 'Garantía y confianza',
    description:
      'Respaldo escrito de 15 años en cada proyecto. Incomparable en el mercado mundial.',
  },
  {
    Icon: Users,
    title: 'Cercanía con el cliente',
    description:
      'Comunicación directa con el director general y atención personalizada en todo momento.',
  },
]

const ambiental = [
  {
    Icon: Thermometer,
    title: 'Albercas térmicas',
    description:
      'Las membranas RENOLIT funcionan como aislante térmico natural, reduciendo el consumo energético en climatización del agua.',
  },
  {
    Icon: Zap,
    title: 'Ahorro energético',
    description:
      'Sistemas de calefacción híbrida (solar + bomba de calor eléctrica) y bombeo inteligente con WiFi para máxima eficiencia operativa.',
  },
  {
    Icon: Leaf,
    title: 'Construcción eficiente',
    description:
      'Renovación sin demolición: sin retirar el mosaico existente, se genera una fracción mínima de residuos comparado con métodos tradicionales.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572993506534-39b9c4d6e30a?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/80 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Nuestra Historia
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Más de 25 años
              <br />
              <span className="text-cyan">creando experiencias</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Desde SOLAR POOL hasta AlbercasVIP, una historia de perseverancia técnica, respaldo
              europeo y la pasión de Eduardo Macías por construir espacios que trascienden.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-14 mt-12">
              {[
                { value: '+25', label: 'Años de experiencia' },
                { value: '+378', label: 'Proyectos realizados' },
                { value: '15', label: 'Años de garantía' },
                { value: '+75', label: 'Años de RENOLIT' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-cyan">{stat.value}</p>
                  <p className="font-body text-sm text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Historia — Timeline ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-smoke">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Línea del Tiempo
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                De SOLAR POOL a AlbercasVIP
              </h2>
              <p className="font-body text-charcoal/60 mt-4 max-w-xl mx-auto">
                Haz clic en cada hito para ver los proyectos de ese período.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <NosotrosTimeline />
          </FadeIn>
        </div>
      </section>

      {/* ── Fundador — Eduardo Macías ──────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                  alt="Eduardo Macías, fundador de AlbercasVIP"
                  className="w-full rounded-2xl object-cover aspect-[4/5]"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-navy/90 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-display font-bold text-white text-lg">
                    Eduardo Javier Macías Sánchez
                  </p>
                  <p className="font-body text-cyan text-sm">Director General y Fundador</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
                El Fundador
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                25 años de pasión<br />por el agua
              </h2>
              <div className="space-y-4 text-charcoal/65 font-body leading-relaxed">
                <p>
                  Eduardo Macías inició su camino en la industria de las piscinas con la fundación
                  de SOLAR POOL hace más de 25 años. Con trabajo constante y una visión clara de lo
                  que debía ser una alberca premium en México, construyó desde cero una de las
                  empresas más respetadas del sector.
                </p>
                <p>
                  En 2019, con el crecimiento sostenido y el desarrollo de nuevos servicios
                  especializados, SOLAR POOL se subdividió, dando origen formal a AlbercasVIP: una
                  empresa con misión clara de ofrecer los más altos estándares de calidad europea en
                  construcción, renovación y equipamiento de piscinas.
                </p>
                <p>
                  Hoy Eduardo atiende personalmente cada proyecto, garantizando que cada alberca que
                  lleva su firma cumpla con los estándares que lo han distinguido durante más de dos
                  décadas.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { label: '+25', sub: 'años de experiencia' },
                  { label: '+378', sub: 'proyectos realizados' },
                  { label: '100%', sub: 'atención directa' },
                ].map((item) => (
                  <div key={item.label} className="bg-smoke rounded-xl px-5 py-4">
                    <p className="font-display font-bold text-navy text-2xl">{item.label}</p>
                    <p className="font-body text-xs text-charcoal/50 mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── RENOLIT ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-ink text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
                Nuestro Respaldo
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-6">
                Respaldados por
                <br />
                <span className="text-cyan">RENOLIT ARKORPLAN</span>
              </h2>
              <div className="space-y-4 text-white/65 font-body leading-relaxed mb-8">
                <p>
                  AlbercasVIP es distribuidor y aplicador certificado de RENOLIT ARKORPLAN, el
                  grupo industrial alemán con más de 75 años de trayectoria y presencia en todo el
                  mundo.
                </p>
                <p>
                  Nuestro equipo técnico está capacitado directamente en la central de RENOLIT en
                  España, asegurando que cada instalación cumpla con los estándares europeos de
                  excelencia que caracterizan a la marca.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '+75 años', label: 'en el mercado mundial' },
                  { value: 'Global', label: 'presencia en todos los continentes' },
                  { value: '15 años', label: 'garantía con respaldo multinacional' },
                  { value: 'España', label: 'central de capacitación técnica' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <p className="font-display font-bold text-cyan text-lg">{item.value}</p>
                    <p className="font-body text-xs text-white/45 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
                <div className="w-20 h-20 rounded-full bg-cyan/20 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display font-black text-cyan text-3xl">R</span>
                </div>
                <p className="font-display italic text-white/80 text-xl leading-relaxed mb-6">
                  "Más de 75 años marcando estándares mundiales de calidad e innovación en
                  recubrimientos de piscinas."
                </p>
                <p className="font-body text-white/35 text-sm">
                  Grupo RENOLIT — Líder mundial en membranas armadas de PVC
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-2">
                    Garantía por escrito respaldada por
                  </p>
                  <p className="font-display font-bold text-2xl text-white">RENOLIT ARKORPLAN</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Misión, Visión y Valores ───────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Identidad
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                Misión, Visión y Valores
              </h2>
            </div>
          </FadeIn>

          {/* Misión y Visión */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <FadeIn direction="left">
              <div className="bg-navy text-white rounded-2xl p-8 h-full">
                <p className="text-cyan font-body font-semibold text-xs uppercase tracking-widest mb-4">
                  Misión
                </p>
                <p className="font-body text-white/75 leading-relaxed">
                  Diseñar, construir, renovar y equipar piscinas con los más altos estándares de
                  calidad europea, ofreciendo soluciones estructurales e impermeables que generen
                  experiencias de bienestar duraderas para nuestros clientes, respaldadas por la
                  mejor garantía del mercado.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="bg-smoke rounded-2xl p-8 h-full">
                <p className="text-cyan font-body font-semibold text-xs uppercase tracking-widest mb-4">
                  Visión
                </p>
                <p className="font-body text-charcoal/70 leading-relaxed">
                  Ser la empresa líder en México en construcción y renovación de albercas con sistema
                  europeo de membrana armada, reconocida por la excelencia técnica, la innovación
                  tecnológica y la satisfacción incomparable de cada uno de nuestros clientes.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map(({ Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div className="bg-smoke rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
                  <p className="font-body text-charcoal/65 text-sm leading-relaxed">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compromiso Ambiental ──────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Sostenibilidad
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">
                Compromiso con el medio ambiente
              </h2>
              <p className="font-body text-white/60 mt-4 max-w-xl mx-auto">
                Las albercas AlbercasVIP están diseñadas para ser eficientes, duraderas y
                respetuosas con el entorno.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ambiental.map(({ Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-cyan/15 flex items-center justify-center mx-auto mb-5">
                    <Icon size={26} className="text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cyan">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
              ¿Listo para crear tu historia?
            </h2>
            <p className="font-body text-navy/70 text-lg mb-8">
              Consulta directa con Eduardo Macías. Sin intermediarios, con 25 años de experiencia
              y 15 años de garantía escrita.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%2C%20me%20interesa%20información%20sobre%20AlbercasVIP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Hablar con Eduardo
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
