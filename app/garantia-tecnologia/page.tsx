import type { Metadata } from 'next'
import { Shield, Layers, Droplets, ThumbsUp, Thermometer, Scissors, AlertTriangle, CheckCircle } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Garantía y Tecnología RENOLIT',
  description:
    '15 años de garantía de estanqueidad por escrito — la mejor del mercado mundial. Sistema RENOLIT ALKORPLAN con Soldadura a Testa exclusiva de 3 cordones. Respaldado por el Grupo RENOLIT, 75+ años.',
}

const composicion = [
  { n: '01', label: 'Doble lámina PVC', desc: 'Dos capas de policloruro de vinilo que trabajan en sinergia para máxima resistencia.' },
  { n: '02', label: 'Núcleo de poliéster', desc: 'Malla reforzante interna que da rigidez estructural y resistencia al desgarro.' },
  { n: '03', label: '+400 g/m²', desc: 'Densidad de peso que garantiza longevidad superior en cualquier condición climática.' },
  { n: '04', label: 'Tratamiento antibacterial', desc: 'Barrera activa contra bacterias y microorganismos. Agua más limpia, menos química.' },
  { n: '05', label: '1.5mm – 2mm', desc: 'El mayor espesor del mercado según la línea. Más material, más protección.' },
  { n: '06', label: 'Pigmentación de alta longevidad', desc: 'Color que no desvanece. Plastificantes que no se degradan con el sol ni el cloro.' },
]

const beneficios = [
  { icon: Droplets, label: 'Sin grietas ni filtraciones', desc: '100% de estanqueidad total — 0 fugas.' },
  { icon: AlertTriangle, label: 'Sin fichas caídas', desc: 'Olvídate de reparaciones de mosaico veneciano.' },
  { icon: Layers, label: 'Sin alga negra', desc: 'Sin juntas donde el alga negra pueda instalarse.' },
  { icon: ThumbsUp, label: 'Sin sarro', desc: 'Superficie no porosa que no acumula depósitos.' },
  { icon: Scissors, label: 'Sin riesgo de cortes', desc: 'Superficie continua y lisa, segura para toda la familia.' },
  { icon: Thermometer, label: 'Membrana térmica', desc: 'Gran ahorro energético en la climatización del agua.' },
]

const garantia = [
  { tipo: 'Garantía base de estanqueidad', años: '10 años', desc: 'Por escrito en cada proyecto' },
  { tipo: 'Garantía extendida exclusiva', años: '+5 años', desc: 'Extensión única AlbercasVIP' },
  { tipo: 'Total garantizado', años: '15 años', desc: 'Incomparable en el mercado mundial', highlight: true },
]

export default function GarantiaTecnologiaPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Tecnología y garantía
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              La mejor garantía
              <br />
              <span className="text-cyan">del mercado mundial</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              15 años de estanqueidad por escrito, respaldados por el Grupo RENOLIT — más de 75 años
              marcando estándares globales de calidad e innovación.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { val: '15 años', label: 'garantía total' },
                { val: '75+', label: 'años RENOLIT' },
                { val: '3', label: 'cordones soldadura' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display font-bold text-3xl text-cyan">{val}</p>
                  <p className="font-body text-white/50 text-sm mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Tabla garantía ────────────────────────────────────────── */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Estructura de la garantía
              </p>
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
                Por escrito en cada proyecto
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {garantia.map(({ tipo, años, desc, highlight }, i) => (
              <FadeIn key={tipo} delay={i * 0.1}>
                <div className={`rounded-2xl px-6 sm:px-8 py-5 flex items-center justify-between gap-6 ${
                  highlight
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white border border-smoke'
                }`}>
                  <div>
                    <p className={`font-body font-semibold text-base ${highlight ? 'text-white' : 'text-navy'}`}>
                      {tipo}
                    </p>
                    <p className={`font-body text-sm mt-0.5 ${highlight ? 'text-cyan' : 'text-charcoal/50'}`}>
                      {desc}
                    </p>
                  </div>
                  <span className={`font-display font-bold shrink-0 ${
                    highlight ? 'text-cyan text-3xl sm:text-4xl' : 'text-navy/70 text-2xl sm:text-3xl'
                  }`}>
                    {años}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.35}>
            <p className="text-center font-body text-charcoal/40 text-xs mt-6 max-w-lg mx-auto">
              Aplica para todos los proyectos certificados con sistema RENOLIT ALKORPLAN instalados por AlbercasVIP.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── El Sistema VIP ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="left">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                El sistema VIP
              </p>
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-6">
                Una funda perfecta a la medida de tu alberca
              </h2>
              <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-8">
                El sistema VIP consiste en unir láminas flexibles de PVC reforzadas con mallas
                intermedias de poliéster, fabricadas con los más altos estándares de calidad y
                unidas mediante termofusión — diseñando una funda perfecta a la medida con
                diseños de vanguardia en 3D.
              </p>
              <p className="font-display italic text-charcoal/40 text-sm">
                "100% de estanqueidad total — 0 fugas"
              </p>
            </FadeIn>
            <FadeIn delay={0.15} direction="right">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=85"
                  alt="Sistema RENOLIT ALKORPLAN instalado en alberca premium"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Composición ───────────────────────────────────────────── */}
      <section className="bg-smoke py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Composición
              </p>
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
                Membrana RENOLIT ALKORPLAN capa por capa
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {composicion.map(({ n, label, desc }, i) => (
              <FadeIn key={n} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-smoke hover:border-cyan/30 hover:shadow-md transition-all duration-300">
                  <p className="font-display font-black text-navy/15 text-4xl leading-none mb-3">{n}</p>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{label}</h3>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Soldadura a Testa ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85"
                  alt="Soldadura a Testa — unión imperceptible"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-cyan text-navy rounded-2xl px-4 py-3 shadow-lg">
                  <p className="font-display font-black text-3xl leading-none">3</p>
                  <p className="font-body font-bold text-[10px] uppercase tracking-widest mt-0.5">cordones</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} direction="right">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Innovación exclusiva
              </p>
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-6">
                Soldadura a Testa
              </h2>
              <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-8">
                Las soldaduras a Testa son una de las muchas innovaciones que RENOLIT AlkorPlan
                aplica en cada proyecto. La mejor soldadura del mercado para garantizar
                estanqueidad total.
              </p>
              <div className="space-y-4">
                {[
                  { title: '3 cordones de soldadura por térmicos', desc: 'Triple sellado que distribuye la carga de forma uniforme.' },
                  { title: 'Sellado completo de las uniones', desc: 'Sin microfisuras. Sin propagación de fugas.' },
                  { title: 'Acabado imperceptible al tacto', desc: 'La unión es invisible e indistinguible de la membrana.' },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle size={18} className="text-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body font-semibold text-navy text-sm">{title}</p>
                      <p className="font-body text-charcoal/55 text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Beneficios ────────────────────────────────────────────── */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Para el cliente final
              </p>
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
                Problemas resueltos para siempre
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {beneficios.map(({ icon: Icon, label, desc }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-smoke hover:border-cyan/30 hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-navy" />
                  </div>
                  <h3 className="font-body font-semibold text-navy text-sm mb-1.5">{label}</h3>
                  <p className="font-body text-charcoal/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Respaldo RENOLIT ──────────────────────────────────────── */}
      <section className="bg-navy py-16 sm:py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                El respaldo que lo cambia todo
              </p>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-6">
                Grupo RENOLIT —<br />
                <span className="text-cyan">75 años de liderazgo mundial</span>
              </h2>
              <p className="font-body text-white/65 text-lg leading-relaxed mb-8">
                AlbercasVIP es empresa certificada por RENOLIT. El personal está capacitado
                directamente en la central RENOLIT en España. Cada instalación cumple los
                estándares de la multinacional líder en soluciones de PVC para agua.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '75+', label: 'Años en el mercado' },
                  { val: 'Global', label: 'Presencia mundial' },
                  { val: 'Cert.', label: 'Alemania / España' },
                ].map(({ val, label }) => (
                  <div key={label} className="border border-white/15 rounded-xl p-4 text-center">
                    <p className="font-display font-bold text-cyan text-xl">{val}</p>
                    <p className="font-body text-white/40 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15} direction="right">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85"
                  alt="Alberca con sistema RENOLIT"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-cyan py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
              Tu alberca merece los 15 años de tranquilidad
            </h2>
            <p className="font-body text-navy/65 text-lg mb-8">
              Pregunta a Eduardo cómo aplica la garantía a tu proyecto específico.
            </p>
            <a
              href="https://wa.me/5213310808938?text=Hola%20Eduardo%2C%20quiero%20saber%20c%C3%B3mo%20aplica%20la%20garant%C3%ADa%20de%2015%20a%C3%B1os%20en%20mi%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white font-body font-bold px-8 py-4 rounded-full hover:bg-navy-dark transition-colors"
            >
              Preguntar sobre la garantía
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
