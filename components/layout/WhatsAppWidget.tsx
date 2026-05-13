'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

type Contact = {
  label: string
  number: string
  message: string
  color: string
}

const contacts: Contact[] = [
  {
    label: 'Ventas — Eduardo',
    number: '5213310808938',
    message: 'Hola, me interesa información sobre AlbercasVIP',
    color: 'bg-green-500',
  },
  {
    label: 'Facturación',
    number: '5216572750305',
    message: 'Hola, necesito información de facturación',
    color: 'bg-emerald-600',
  },
  {
    label: 'Península (Cancún / Mérida)',
    number: '5219983197324',
    message: 'Hola, me interesa información sobre AlbercasVIP en Península',
    color: 'bg-teal-600',
  },
]

function getContextMessage(pathname: string): string {
  if (pathname.includes('/servicios/renovacion'))
    return 'Hola, me interesa renovar mi alberca sin demolición'
  if (pathname.includes('/servicios/construccion'))
    return 'Hola, me interesa construir una alberca nueva'
  if (pathname.includes('/servicios/edificios-azoteas'))
    return 'Hola, me interesa una alberca en edificio o azotea'
  if (pathname.includes('/servicios/equipamiento'))
    return 'Hola, me interesa equipamiento para mi alberca'
  if (pathname.includes('/servicios'))
    return 'Hola, me interesa información sobre sus servicios'
  if (pathname.includes('/modelos'))
    return 'Hola, me interesa conocer los modelos de membrana RENOLIT'
  if (pathname.includes('/proyectos'))
    return 'Hola, vi sus proyectos y me interesa una cotización'
  if (pathname.includes('/garantia'))
    return 'Hola, me interesa conocer más sobre la garantía de 15 años'
  if (pathname.includes('/contacto'))
    return 'Hola, quiero cotizar un proyecto de alberca'
  return 'Hola, me interesa información sobre AlbercasVIP'
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const contextMessage = getContextMessage(pathname)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-whatsapp-widget]')) setOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [open])

  const buildUrl = (number: string, customMessage: string) =>
    `https://wa.me/${number}?text=${encodeURIComponent(customMessage)}`

  return (
    <div
      data-whatsapp-widget
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      {/* Options panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-2 mb-2"
          >
          {contacts.map((c) => (
            <a
              key={c.number}
              href={buildUrl(c.number, contextMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-charcoal shadow-xl rounded-2xl pl-4 pr-3 py-3 hover:shadow-2xl transition-shadow min-w-[240px] group"
            >
              <div className={`w-9 h-9 rounded-full ${c.color} flex items-center justify-center shrink-0`}>
                <MessageCircle size={16} className="text-white" />
              </div>
              <span className="text-sm font-body font-medium flex-1">{c.label}</span>
              <ChevronRight size={14} className="text-charcoal/30 group-hover:text-green-500 transition-colors" />
            </a>
          ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        {open ? <X size={22} /> : <MessageCircle size={26} />}
      </button>
    </div>
  )
}
