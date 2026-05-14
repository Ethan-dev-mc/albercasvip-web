'use client'

import { useState } from 'react'

const TIPOS = [
  { value: 'construccion', label: 'Construcción de alberca nueva' },
  { value: 'renovacion', label: 'Renovación sin demolición' },
  { value: 'mantenimiento', label: 'Mantenimiento' },
  { value: 'edificio', label: 'Alberca en edificio o azotea' },
  { value: 'equipamiento', label: 'Equipamiento' },
]

export function HomeMiniForm() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [tipo, setTipo] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const tipoLabel = TIPOS.find((t) => t.value === tipo)?.label ?? tipo
    const lines = [
      'Hola Eduardo, quiero cotizar un proyecto con AlbercasVIP.',
      '',
      tipoLabel ? `• Tipo: ${tipoLabel}` : '',
      nombre.trim() ? `• Nombre: ${nombre.trim()}` : '',
      telefono.trim() ? `• Teléfono: ${telefono.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/5213310808938?text=${encodeURIComponent(lines)}`, '_blank')
  }

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/50 font-body text-sm focus:outline-none focus:border-cyan transition-colors'

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={inputCls}
        />
        <input
          type="tel"
          placeholder="Tu teléfono (WhatsApp)"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className={inputCls}
        />
      </div>
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className={`${inputCls} mb-4`}
        style={{ colorScheme: 'dark' }}
      >
        <option value="">Tipo de proyecto</option>
        {TIPOS.map((t) => (
          <option key={t.value} value={t.value} className="text-charcoal bg-white">
            {t.label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="block w-full py-3.5 bg-cyan hover:bg-cyan-light text-white font-body font-semibold rounded-xl text-center transition-colors"
      >
        Solicitar cotización por WhatsApp →
      </button>
      <p className="mt-4 text-white/40 text-xs font-body text-center">
        Respuesta directa de Eduardo Macías en menos de 2 horas
      </p>
    </form>
  )
}
