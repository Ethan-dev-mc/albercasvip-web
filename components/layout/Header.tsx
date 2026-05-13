'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const serviciosLinks = [
  { href: '/servicios/construccion', label: 'Construcción' },
  { href: '/servicios/renovacion', label: 'Renovación' },
  { href: '/servicios/mantenimiento', label: 'Mantenimiento' },
  { href: '/servicios/edificios-azoteas', label: 'Edificios y Azoteas' },
  { href: '/servicios/equipamiento', label: 'Equipamiento' },
]

const modelosLinks = [
  { href: '/modelos#alkorplan-2000', label: 'ALKORPLAN 2000' },
  { href: '/modelos#alkorplan-3000', label: 'ALKORPLAN 3000' },
  { href: '/modelos#ceramics', label: 'CERAMICS' },
  { href: '/modelos#touch-3d', label: 'TOUCH 3D' },
]

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios', dropdown: serviciosLinks },
  { href: '/modelos', label: 'Modelos', dropdown: modelosLinks },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/garantia-tecnologia', label: 'Garantía' },
  { href: '/contacto', label: 'Contacto' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDropdown = (label: string) =>
    setOpenDropdown(openDropdown === label ? null : label)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-cyan flex items-center justify-center shrink-0">
              <span className="text-white font-display font-bold text-sm">AV</span>
            </div>
            <div className="leading-none">
              <span className="text-white font-display text-base font-semibold tracking-wide">
                ALBERCAS
              </span>
              <span className="text-cyan font-display text-base font-bold tracking-widest">
                VIP
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                    className="flex items-center gap-1 text-white/90 hover:text-cyan text-sm font-body px-3 py-2 rounded transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-navy-dark border border-white/10 rounded-lg shadow-xl overflow-hidden">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-cyan hover:bg-white/5 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-cyan text-sm font-body px-3 py-2 rounded transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+523329765739"
              className="hidden md:flex items-center gap-1.5 text-white/70 hover:text-cyan text-sm transition-colors"
            >
              <Phone size={14} />
              <span className="font-body">33 2976 5739</span>
            </a>
            <Link
              href="/contacto"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-cyan hover:bg-cyan-light text-white text-sm font-body font-medium rounded-full transition-colors"
            >
              Cotiza tu proyecto
            </Link>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-navy flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs">AV</span>
              </div>
              <span className="text-white font-display font-semibold">ALBERCAS<span className="text-cyan font-bold">VIP</span></span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
            {navLinks.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block text-lg text-white/90 hover:text-cyan py-3 border-b border-white/5 font-body transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-0.5 mt-1 mb-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block text-sm text-white/60 hover:text-cyan py-2 font-body transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="px-4 py-6 border-t border-white/10 space-y-3">
            <Link
              href="/contacto"
              className="block w-full text-center py-3 bg-cyan text-white font-body font-semibold rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Cotiza tu proyecto
            </Link>
            <a
              href="https://wa.me/5213310808938"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 border border-white/20 text-white font-body rounded-full hover:border-cyan transition-colors"
            >
              WhatsApp Ventas
            </a>
          </div>
        </div>
      )}
    </>
  )
}
