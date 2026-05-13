import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Calendar, ArrowLeft, Layers, CheckCircle } from 'lucide-react'
import { proyectos, tipoLabels } from '@/lib/proyectos'
import { FadeIn } from '@/components/ui/FadeIn'

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const proyecto = proyectos.find((p) => p.id === slug)
  if (!proyecto) return {}
  return {
    title: `${proyecto.titulo} — ${proyecto.año}`,
    description: proyecto.descripcion,
  }
}

const TIPO_COLORS: Record<string, string> = {
  construccion: 'bg-emerald-500/90',
  renovacion: 'bg-cyan/90',
  equipamiento: 'bg-purple-500/90',
  torre: 'bg-navy/90',
  hotel: 'bg-amber-500/90',
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const proyecto = proyectos.find((p) => p.id === slug)
  if (!proyecto) return notFound()

  const waUrl = `https://wa.me/5213310808938?text=${encodeURIComponent(
    `Hola Eduardo, vi el proyecto "${proyecto.titulo}" en AlbercasVIP y me gustaría algo similar para mi alberca`
  )}`

  return (
    <>
      {/* ── Hero image ────────────────────────────────────────────── */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[420px] overflow-hidden">
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />

        {/* Back button */}
        <div className="absolute top-24 left-4 sm:left-8 z-10">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-body text-sm transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft size={14} />
            Portafolio
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className={`text-[10px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white ${
                TIPO_COLORS[proyecto.tipo]
              }`}
            >
              {tipoLabels[proyecto.tipo]}
            </span>
            <span className="text-xs font-body font-semibold text-white/60 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {proyecto.año}
            </span>
          </div>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-3">
            {proyecto.titulo}
          </h1>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-cyan shrink-0" />
            <p className="font-body text-white/60 text-sm">
              {proyecto.ubicacion}, {proyecto.estado}
            </p>
          </div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────── */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Left: main info */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <div>
                  <p className="text-cyan font-body font-semibold text-xs uppercase tracking-widest mb-3">
                    Descripción del proyecto
                  </p>
                  <p className="font-body text-charcoal/75 text-lg leading-relaxed">
                    {proyecto.descripcion}
                  </p>
                </div>
              </FadeIn>

              {/* Extra images */}
              {proyecto.imagenes.length > 1 && (
                <FadeIn delay={0.1}>
                  <div>
                    <p className="text-cyan font-body font-semibold text-xs uppercase tracking-widest mb-4">
                      Galería
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {proyecto.imagenes.map((src, i) => (
                        <div
                          key={i}
                          className="rounded-2xl overflow-hidden aspect-[4/3] bg-smoke"
                        >
                          <img
                            src={src}
                            alt={`${proyecto.titulo} — foto ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}

              {/* Características */}
              <FadeIn delay={0.15}>
                <div>
                  <p className="text-cyan font-body font-semibold text-xs uppercase tracking-widest mb-4">
                    Características técnicas
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {proyecto.caracteristicas.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="text-cyan shrink-0 mt-0.5" />
                        <span className="font-body text-charcoal/70 text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Right: ficha técnica */}
            <div className="lg:col-span-1 space-y-5">
              <FadeIn delay={0.05}>
                {/* Membrana card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-smoke">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Layers size={16} className="text-cyan" />
                    <p className="font-body font-semibold text-navy text-sm">Membrana utilizada</p>
                  </div>
                  <p className="font-display font-bold text-navy text-base leading-snug">
                    {proyecto.membrana}
                  </p>
                </div>

                {/* Meta card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-smoke space-y-4">
                  <div className="flex items-center gap-2.5">
                    <Calendar size={16} className="text-cyan" />
                    <div>
                      <p className="font-body text-xs text-charcoal/40 uppercase tracking-wider">Año</p>
                      <p className="font-body font-semibold text-navy text-sm">{proyecto.año}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin size={16} className="text-cyan" />
                    <div>
                      <p className="font-body text-xs text-charcoal/40 uppercase tracking-wider">Ubicación</p>
                      <p className="font-body font-semibold text-navy text-sm">
                        {proyecto.ubicacion}, {proyecto.estado}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA card */}
                <div className="bg-navy rounded-2xl p-6 text-center">
                  <p className="font-display font-bold text-white text-lg mb-2">
                    ¿Quieres algo similar?
                  </p>
                  <p className="font-body text-white/55 text-sm mb-5">
                    Cuéntale a Eduardo los detalles de tu proyecto.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-cyan text-navy font-body font-bold text-sm text-center py-3 rounded-xl hover:bg-cyan-dark transition-colors"
                  >
                    Quiero un proyecto así
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── More projects ─────────────────────────────────────────── */}
      <section className="bg-smoke py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="font-body text-charcoal/50 text-sm mb-2">Continúa explorando</p>
            <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-6">
              Más proyectos AlbercasVIP
            </h2>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 bg-navy text-white font-body font-semibold px-6 py-3 rounded-full hover:bg-navy-dark transition-colors text-sm"
            >
              <ArrowLeft size={14} />
              Ver todo el portafolio
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
