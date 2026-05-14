import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { LogoHorizontal } from '@/components/ui/Logo'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

export function Footer() {
  const year = 2026

  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <LogoHorizontal textSize="lg" />
            </div>
            <p className="font-display italic text-white/70 text-sm leading-relaxed mb-6">
              "Diseñamos espacios que crean historias"
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/albercasvipmx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-cyan hover:text-cyan transition-colors"
                aria-label="Facebook AlbercasVIP"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com/albercasvip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-cyan hover:text-cyan transition-colors"
                aria-label="Instagram AlbercasVIP"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-cyan mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/servicios/construccion', label: 'Construcción' },
                { href: '/servicios/renovacion', label: 'Renovación sin demolición' },
                { href: '/servicios/mantenimiento', label: 'Mantenimiento' },
                { href: '/servicios/edificios-azoteas', label: 'Edificios y Azoteas' },
                { href: '/servicios/equipamiento', label: 'Equipamiento' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-cyan transition-colors font-body"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modelos */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-cyan mb-4">
              Catálogo
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/modelos#alkorplan-2000', label: 'ALKORPLAN 2000' },
                { href: '/modelos#alkorplan-3000', label: 'ALKORPLAN 3000' },
                { href: '/modelos#ceramics', label: 'CERAMICS' },
                { href: '/modelos#touch-3d', label: 'TOUCH 3D' },
                { href: '/proyectos', label: 'Galería de proyectos' },
                { href: '/garantia-tecnologia', label: 'Garantía y Tecnología' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-cyan transition-colors font-body"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-cyan mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5">
                <MapPin size={15} className="text-cyan mt-0.5 shrink-0" />
                <span className="text-sm text-white/60 font-body leading-snug">
                  Av. Plutarco Elías Calles 465, Col. Santa María del Silo,
                  Guadalajara, Jalisco
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={15} className="text-cyan mt-0.5 shrink-0" />
                <a
                  href="tel:+523329765739"
                  className="text-sm text-white/60 hover:text-cyan transition-colors font-body"
                >
                  +52 33 2976 5739
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={15} className="text-cyan mt-0.5 shrink-0" />
                <a
                  href="mailto:eduardo@albercasvip.com"
                  className="text-sm text-white/60 hover:text-cyan transition-colors font-body"
                >
                  eduardo@albercasvip.com
                </a>
              </li>
            </ul>

            <div className="mt-5 space-y-2">
              <p className="text-xs text-white/40 font-body uppercase tracking-wide">WhatsApp directo:</p>
              <a
                href="https://wa.me/5213310808938"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 hover:text-cyan transition-colors font-body"
              >
                Ventas — Eduardo
              </a>
              <a
                href="https://wa.me/5216572750305"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 hover:text-cyan transition-colors font-body"
              >
                Facturación
              </a>
              <a
                href="https://wa.me/5219983197324"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/60 hover:text-cyan transition-colors font-body"
              >
                Península (Cancún / Mérida)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40 font-body">
            © {year} AlbercasVIP. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30 font-body">
            Respaldados por RENOLIT ARKORPLAN · Garantía 15 años
          </p>
        </div>
      </div>
    </footer>
  )
}
