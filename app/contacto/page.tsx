import type { Metadata } from 'next'
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ContactoForm } from '@/components/sections/ContactoForm'

export const metadata: Metadata = {
  title: 'Contacto — Cotiza tu Proyecto',
  description:
    'Contacta a AlbercasVIP para cotizar tu proyecto de construcción, renovación o equipamiento de alberca. WhatsApp directo con Eduardo Macías. Guadalajara, Jalisco.',
}

const WA_CHANNELS = [
  {
    area: 'Ventas',
    nombre: 'Eduardo Macías',
    cargo: 'Director General',
    numero: '+52 1 33 1080 8938',
    href: 'https://wa.me/5213310808938?text=Hola%20Eduardo%2C%20me%20interesa%20cotizar%20una%20alberca%20con%20AlbercasVIP',
    desc: 'Proyectos nuevos, renovaciones, presupuestos y asesoría técnica.',
  },
  {
    area: 'Facturación',
    nombre: 'Área Administrativa',
    cargo: 'Facturación y cobranza',
    numero: '+52 1 65 7275 0305',
    href: 'https://wa.me/5216572750305?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20facturaci%C3%B3n%20de%20AlbercasVIP',
    desc: 'Facturas, RFC, comprobantes fiscales y trámites administrativos.',
  },
  {
    area: 'Península',
    nombre: 'Carlos Escamilla',
    cargo: 'Representante Península',
    numero: '+52 1 99 8319 7324',
    href: 'https://wa.me/5219983197324?text=Hola%20Carlos%2C%20me%20interesa%20un%20proyecto%20de%20AlbercasVIP%20en%20la%20pen%C3%ADnsula',
    desc: 'Proyectos en Yucatán, Quintana Roo, Campeche y estados del sureste.',
  },
]

export default function ContactoPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-4">
              Cotiza sin compromiso
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hablemos de tu alberca
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
              Eduardo responde en menos de 2 horas. Asesoría directa del Director General,
              sin intermediarios.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 3 Canales WhatsApp ────────────────────────────────────── */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Canales directos
              </p>
              <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
                Escríbenos por WhatsApp
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WA_CHANNELS.map(({ area, nombre, cargo, numero, href, desc }, i) => (
              <FadeIn key={area} delay={i * 0.1}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white border border-smoke hover:border-cyan/40 hover:shadow-xl hover:shadow-cyan/5 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-navy/5 text-navy">
                      {area}
                    </span>
                    <MessageCircle size={16} className="text-charcoal/20 group-hover:text-cyan transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-0.5">{nombre}</h3>
                  <p className="font-body text-charcoal/40 text-xs mb-4">{cargo}</p>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-smoke">
                    <span className="font-body text-charcoal/35 text-xs">{numero}</span>
                    <span className="font-body text-xs font-semibold text-cyan group-hover:text-navy transition-colors">
                      Abrir chat →
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulario + Info ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <p className="text-cyan font-body font-semibold text-sm uppercase tracking-widest mb-2">
                  Formulario de contacto
                </p>
                <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-2">
                  Cuéntanos tu proyecto
                </h2>
                <p className="font-body text-charcoal/55 text-sm mb-8">
                  Completa el formulario y recibirás una propuesta inicial en 24h.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <ContactoForm />
              </FadeIn>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              <FadeIn delay={0.15}>
                <div className="bg-smoke rounded-2xl p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <MapPin size={16} className="text-cyan" />
                    <p className="font-body font-semibold text-navy text-sm">Oficina Central</p>
                  </div>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed">
                    Av. Plutarco Elías Calles 465<br />
                    Col. Santa María del Silo, CP 44750<br />
                    Guadalajara, Jalisco, México
                  </p>
                </div>

                <div className="bg-smoke rounded-2xl p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Mail size={16} className="text-cyan" />
                    <p className="font-body font-semibold text-navy text-sm">Correo</p>
                  </div>
                  <a
                    href="mailto:eduardo@albercasvip.com"
                    className="font-body text-charcoal/60 hover:text-cyan text-sm transition-colors"
                  >
                    eduardo@albercasvip.com
                  </a>
                </div>

                <div className="bg-smoke rounded-2xl p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Phone size={16} className="text-cyan" />
                    <p className="font-body font-semibold text-navy text-sm">Oficina</p>
                  </div>
                  <p className="font-body text-charcoal/60 text-sm">+52 1 33 2976 5739</p>
                </div>

                <div className="bg-cyan/8 border border-cyan/20 rounded-2xl p-6">
                  <p className="font-body text-cyan text-xs font-semibold uppercase tracking-widest mb-2">
                    Cobertura nacional
                  </p>
                  <p className="font-body text-charcoal/65 text-sm leading-relaxed">
                    Guadalajara como sede. Proyectos en toda la República Mexicana — Jalisco,
                    Nayarit, Colima, Estado de México, Sonora y Península.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mapa ──────────────────────────────────────────────────── */}
      <section className="bg-offwhite">
        <FadeIn direction="none">
          <div className="w-full h-72 sm:h-96 overflow-hidden">
            <iframe
              title="Ubicación AlbercasVIP — Guadalajara"
              src="https://www.google.com/maps?q=Av.+Plutarco+El%C3%ADas+Calles+465,+Col.+Santa+Mar%C3%ADa+del+Silo,+Guadalajara,+Jalisco&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </section>
    </>
  )
}
