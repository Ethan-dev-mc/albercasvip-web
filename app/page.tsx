import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Shield, Clock, Droplets, Zap, Wrench, Building2,
  CheckCircle, Award, Star, ArrowRight, ChevronRight,
} from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { FadeIn } from '@/components/ui/FadeIn'
import { HomeMiniForm } from '@/components/sections/HomeMiniForm'

export const metadata: Metadata = {
  title: 'AlbercasVIP — Albercas Premium con Tecnología RENOLIT en Guadalajara',
  description:
    'Construcción, renovación y equipamiento de albercas con tecnología RENOLIT ALKORPLAN alemana. 15 años de garantía por escrito. Guadalajara, Jalisco.',
}

/* ─── DATA ────────────────────────────────────────────────────────────────── */

const stats = [
  { target: 145, suffix: '+', label: 'Albercas Nuevas' },
  { target: 233, suffix: '+', label: 'Renovaciones' },
  { target: 300, suffix: '+', label: 'Clientes Satisfechos' },
  { target: 15, suffix: ' años', label: 'Garantía' },
  { target: 25, suffix: '+', label: 'Años de Experiencia' },
]

const servicios = [
  {
    icon: Building2,
    titulo: 'Construcción',
    descripcion: 'Albercas nuevas residenciales, hoteles y fraccionamientos exclusivos con sistema de membrana armada de vanguardia.',
    href: '/servicios/construccion',
  },
  {
    icon: Wrench,
    titulo: 'Renovación sin demolición',
    descripcion: 'Renovamos albercas con fugas SIN retirar el mosaico veneciano existente. Ahorro de tiempo, dinero y molestias.',
    href: '/servicios/renovacion',
  },
  {
    icon: Droplets,
    titulo: 'Mantenimiento',
    descripcion: 'Servicio continuo: limpieza, equilibrio químico y revisión de equipos para mantener tu alberca en óptimas condiciones.',
    href: '/servicios/mantenimiento',
  },
  {
    icon: Building2,
    titulo: 'Edificios y Azoteas',
    descripcion: 'Sistema 100% impermeable diseñado especialmente para condiciones de altura. Torres residenciales y desarrollos premium.',
    href: '/servicios/edificios-azoteas',
  },
  {
    icon: Zap,
    titulo: 'Equipamiento',
    descripcion: 'Filtrado alemán, iluminación LED, calefacción híbrida, nado contra corriente, automatización WiFi y más.',
    href: '/servicios/equipamiento',
  },
]

const diferenciadores = [
  { icon: Shield, titulo: '100% Impermeable', desc: 'Membrana armada PVC + malla de poliéster con termofusión. Sin goteras ni fugas.' },
  { icon: Clock, titulo: 'Garantía 15 años', desc: '10 años base + 5 extendida. Por escrito. Incomparable en el mercado mundial.' },
  { icon: Wrench, titulo: 'Sin demolición', desc: 'Renovamos sin retirar el mosaico veneciano. Ahorro total de tiempo y dinero.' },
  { icon: Zap, titulo: 'Sistema térmico', desc: 'Las membranas son térmicas: gran ahorro energético en climatización del agua.' },
  { icon: CheckCircle, titulo: 'Sin alga negra', desc: 'Olvídate de fichas caídas, alga negra en juntas, sarro y riesgo de cortes.' },
  { icon: Star, titulo: '20+ modelos 3D', desc: 'Cuatro líneas RENOLIT: 2000, 3000, CERAMICS y TOUCH 3D. Diseños exclusivos.' },
  { icon: Building2, titulo: 'Sin obra pesada', desc: 'Para nueva construcción evita concreto, varillas y cimbra tradicionales.' },
  { icon: Award, titulo: 'Soldadura a Testa', desc: '3 cordones de soldadura térmica. Sellado total. Acabado imperceptible al tacto.' },
  { icon: Shield, titulo: 'Respaldo RENOLIT', desc: 'Empresa certificada por RENOLIT (Alemania) — más de 75 años de experiencia.' },
  { icon: Star, titulo: 'Capacitados en España', desc: 'Personal capacitado en la central RENOLIT en España. Instalación de primer nivel.' },
]

const proyectosDestacados = [
  {
    titulo: 'Torre Estrato — Piso 22',
    ubicacion: 'Guadalajara, Jalisco',
    sistema: 'RENOLIT TOUCH 3D Relax + Elegance',
    detalle: 'Carril de nado 2.36m × 23.60m con jacuzzi en el piso 22',
    imagen: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    slug: 'torre-estrato-2019',
  },
  {
    titulo: 'Valle de Bravo — Premium',
    ubicacion: 'Estado de México',
    sistema: 'RENOLIT TOUCH 3D Elegance',
    detalle: 'Automatización completa, cascada laminar, nado contra corriente',
    imagen: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
    slug: 'valle-de-bravo-2021',
  },
  {
    titulo: 'Casa Cangrejo',
    ubicacion: 'Manzanillo, Colima',
    sistema: 'RENOLIT TOUCH 3D Vanity',
    detalle: 'Alberca infinita frente al mar con 4 reflectores Jandy',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    slug: 'casa-cangrejo-2019',
  },
  {
    titulo: 'Torre Latitud Providencia',
    ubicacion: 'Guadalajara, Jalisco',
    sistema: 'RENOLIT ALKORPLAN 2000 Azul Adriático',
    detalle: '20m × 10m — Alberca de gran formato en torre de lujo',
    imagen: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    slug: 'torre-latitud-2019',
  },
  {
    titulo: 'Hotel Don José',
    ubicacion: 'Lo de Marcos, Nayarit',
    sistema: 'RENOLIT ALKORPLAN 2000 Gris Claro',
    detalle: 'Renovación hotelera con filtrado alemán y equipos Astral Pool',
    imagen: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    slug: 'hotel-don-jose-2019',
  },
  {
    titulo: 'Villa Corona',
    ubicacion: 'Villa Corona, Jalisco',
    sistema: 'RENOLIT ALKORPLAN 2000 Azul Claro',
    detalle: 'Nado contra corriente, jets LED, calefacción y automatización',
    imagen: 'https://images.unsplash.com/photo-1572097662960-c0d6cfbfd74d?w=800&q=80',
    slug: 'villa-corona-2019',
  },
]

const catalogoPreview = [
  {
    linea: 'ALKORPLAN 2000',
    modelo: 'Azul Adriático',
    descripcion: 'El azul intenso del mar Mediterráneo en piscinas llenas de color y efervescencia.',
    color: '#1B6CA8',
    href: '/modelos#alkorplan-2000',
  },
  {
    linea: 'ALKORPLAN 3000',
    modelo: 'Platinum',
    descripcion: 'Piscinas de diseño, modernas y espectaculares, de reflejos brillantes — la joya más preciada de tu jardín.',
    color: '#B8C0CC',
    href: '/modelos#alkorplan-3000',
  },
  {
    linea: 'CERAMICS',
    modelo: 'Atenea',
    descripcion: 'De un azul intenso, tan cálido, tan profundo y tan nuestro. Atenea otorga al agua un brillo y un matiz inigualable.',
    color: '#1565C0',
    href: '/modelos#ceramics',
  },
  {
    linea: 'TOUCH 3D',
    modelo: 'Elegance',
    descripcion: 'Piscinas seductoras y únicas, de un azul profundo, que te cautivarán desde el primer momento.',
    color: '#1A3A6B',
    href: '/modelos#touch-3d',
  },
]

/* ─── PAGE ────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=85"
          alt="Alberca premium AlbercasVIP"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <FadeIn>
            <p className="text-cyan text-sm font-body uppercase tracking-[0.2em] mb-4">
              Tecnología RENOLIT · 75 años de experiencia mundial
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
              Diseñamos espacios que crean historias
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-lg sm:text-xl text-white/80 font-body max-w-xl leading-relaxed">
              Construcción, renovación y equipamiento de albercas
              con tecnología europea y{' '}
              <span className="text-cyan font-semibold">15 años de garantía</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-white font-body font-semibold rounded-full text-base transition-colors shadow-lg"
              >
                Cotiza tu proyecto
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/garantia-tecnologia"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-cyan text-white font-body font-semibold rounded-full text-base transition-colors"
              >
                Conoce nuestro sistema
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. STATS BAR ─────────────────────────────────────────────────── */}
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold text-cyan">
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs sm:text-sm text-white/60 font-body uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICIOS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-cyan font-body text-sm uppercase tracking-[0.2em] mb-3">Lo que hacemos</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy">Nuestros Servicios</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s, i) => (
              <FadeIn key={s.href} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="group flex flex-col bg-white rounded-2xl p-7 border border-smoke hover:border-cyan/40 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-cyan/10 flex items-center justify-center mb-5 transition-colors">
                    <s.icon size={24} className="text-navy group-hover:text-cyan transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy mb-3">{s.titulo}</h3>
                  <p className="text-charcoal/70 font-body text-sm leading-relaxed flex-1">{s.descripcion}</p>
                  <div className="mt-5 flex items-center gap-1 text-cyan text-sm font-body font-semibold group-hover:gap-2 transition-all">
                    Ver más <ChevronRight size={16} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. POR QUÉ ALBERCASVIP ───────────────────────────────────────── */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-cyan font-body text-sm uppercase tracking-[0.2em] mb-3">Nuestros diferenciadores</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">¿Por qué AlbercasVIP?</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {diferenciadores.map((d, i) => (
              <FadeIn key={d.titulo} delay={(i % 5) * 0.08}>
                <div className="group flex flex-col bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan/30 rounded-2xl p-5 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4">
                    <d.icon size={20} className="text-cyan" />
                  </div>
                  <h3 className="font-body font-semibold text-white text-sm mb-2">{d.titulo}</h3>
                  <p className="text-white/50 font-body text-xs leading-relaxed">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROYECTOS DESTACADOS ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-cyan font-body text-sm uppercase tracking-[0.2em] mb-3">Portafolio</p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy">
                  Proyectos que Hablan<br className="hidden sm:block" /> por Sí Mismos
                </h2>
              </div>
              <Link href="/proyectos" className="inline-flex items-center gap-2 text-cyan font-body font-semibold hover:gap-3 transition-all shrink-0">
                Ver todos <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {proyectosDestacados.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <Link href={`/proyectos/${p.slug}/`} className="group relative block rounded-2xl overflow-hidden aspect-[4/3] bg-smoke">
                  <Image
                    src={p.imagen}
                    alt={p.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute inset-0 bg-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-cyan text-xs font-body uppercase tracking-wider mb-1">{p.sistema}</p>
                    <h3 className="text-white font-display text-xl font-semibold mb-1">{p.titulo}</h3>
                    <p className="text-white/60 text-xs font-body">{p.ubicacion}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-cyan rounded-full px-3 py-1 text-white text-xs font-body font-semibold">
                      Ver proyecto →
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SISTEMA RENOLIT ───────────────────────────────────────────── */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-cyan font-body text-sm uppercase tracking-[0.2em] mb-3">Tecnología europea</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy mb-6">El Sistema VIP</h2>
              <p className="text-charcoal/70 font-body leading-relaxed mb-8">
                Nuestro sistema consiste en unir láminas flexibles de PVC reforzadas con mallas
                intermedias de poliéster, fabricadas con los más altos estándares de calidad y
                unidas mediante <strong className="text-navy">termofusión</strong>, diseñando una
                funda perfecta a la medida con diseños de vanguardia en 3D.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Dos láminas flexibles de PVC de alta calidad',
                  'Núcleo de malla de poliéster reforzante',
                  'Más de 400 g/m² — mayor grosor del mercado',
                  'Tratamiento antibacterial integrado',
                  'Soldadura a Testa con 3 cordones térmicos',
                  'Sellado total imperceptible al tacto',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-charcoal">
                    <CheckCircle size={16} className="text-cyan shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/garantia-tecnologia"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-body font-semibold rounded-full hover:bg-navy-light transition-colors"
              >
                Conoce la tecnología <ArrowRight size={16} />
              </Link>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative rounded-3xl overflow-hidden aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=85"
                  alt="Sistema RENOLIT ALKORPLAN"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-2xl px-5 py-4">
                  <p className="text-xs text-charcoal/50 font-body uppercase tracking-wider">Respaldado por</p>
                  <p className="font-display text-xl font-bold text-navy mt-0.5">RENOLIT ARKORPLAN</p>
                  <p className="text-xs text-charcoal/60 font-body mt-0.5">75+ años · Certificación alemana</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 7. PREVIEW CATÁLOGO ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-cyan font-body text-sm uppercase tracking-[0.2em] mb-3">24 modelos disponibles</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy">Elige el Estilo de tu Alberca</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {catalogoPreview.map((c, i) => (
              <FadeIn key={c.modelo} delay={i * 0.1}>
                <Link
                  href={c.href}
                  className="group block rounded-2xl overflow-hidden border border-smoke hover:border-cyan/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-32 relative" style={{ backgroundColor: c.color }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                  <div className="p-5 bg-white">
                    <p className="text-cyan text-xs font-body uppercase tracking-wider mb-1">{c.linea}</p>
                    <h3 className="font-display text-xl font-semibold text-navy mb-2">{c.modelo}</h3>
                    <p className="text-charcoal/60 text-xs font-body leading-relaxed line-clamp-3">{c.descripcion}</p>
                    <div className="mt-4 flex items-center gap-1 text-cyan text-xs font-body font-semibold group-hover:gap-2 transition-all">
                      Ver línea completa <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-12">
              <Link
                href="/modelos"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white font-body font-semibold rounded-full transition-colors"
              >
                Ver catálogo completo (24 modelos) <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 8. CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy to-cyan/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,188,212,0.15),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">¿Listo para tu alberca VIP?</h2>
            <p className="text-white/70 font-body text-lg mb-10">
              Más de 300 clientes ya disfrutan la tranquilidad de{' '}
              <span className="text-cyan font-semibold">15 años de garantía</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <HomeMiniForm />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
