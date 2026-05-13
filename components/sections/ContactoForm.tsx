'use client'

import { useState } from 'react'

type TipoProyecto = 'nueva-construccion' | 'renovacion' | 'mantenimiento' | 'equipamiento' | 'edificio' | ''

const TIPOS: { id: TipoProyecto; label: string }[] = [
  { id: 'nueva-construccion', label: 'Nueva construcción' },
  { id: 'renovacion', label: 'Renovación' },
  { id: 'mantenimiento', label: 'Mantenimiento' },
  { id: 'equipamiento', label: 'Equipamiento' },
  { id: 'edificio', label: 'Alberca en edificio / azotea' },
]

export function ContactoForm() {
  const [tipo, setTipo] = useState<TipoProyecto>('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [metros, setMetros] = useState('')
  const [mensaje, setMensaje] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const tipoLabel = TIPOS.find((t) => t.id === tipo)?.label ?? tipo
    const lines = [
      `Hola Eduardo, me interesa cotizar un proyecto con AlbercasVIP.`,
      ``,
      `• Tipo: ${tipoLabel}`,
      `• Nombre: ${nombre}`,
      `• Ciudad: ${ciudad}`,
      metros ? `• Dimensiones: ~${metros} m²` : null,
      mensaje ? `• Detalles: ${mensaje}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n')

    const url = `https://wa.me/5213310808938?text=${encodeURIComponent(lines)}`
    window.open(url, '_blank')
  }

  const isValid = tipo && nombre.trim() && ciudad.trim()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tipo de proyecto */}
      <div>
        <label className="block font-body text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-3">
          Tipo de proyecto <span className="text-cyan">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {TIPOS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTipo(id)}
              className={`text-left px-4 py-3 rounded-xl border font-body text-sm transition-all duration-200 ${
                tipo === id
                  ? 'border-cyan bg-cyan/8 text-navy font-semibold'
                  : 'border-smoke bg-white text-charcoal/55 hover:border-cyan/40 hover:text-charcoal'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Nombre y teléfono */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-2">
            Nombre <span className="text-cyan">*</span>
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            className="w-full bg-white border border-smoke focus:border-cyan/60 focus:outline-none rounded-xl px-4 py-3 font-body text-charcoal placeholder:text-charcoal/30 text-sm transition-colors"
            required
          />
        </div>
        <div>
          <label className="block font-body text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="+52 33 ···"
            className="w-full bg-white border border-smoke focus:border-cyan/60 focus:outline-none rounded-xl px-4 py-3 font-body text-charcoal placeholder:text-charcoal/30 text-sm transition-colors"
          />
        </div>
      </div>

      {/* Ciudad y metros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-2">
            Ciudad / Estado <span className="text-cyan">*</span>
          </label>
          <input
            type="text"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            placeholder="Guadalajara, Jalisco"
            className="w-full bg-white border border-smoke focus:border-cyan/60 focus:outline-none rounded-xl px-4 py-3 font-body text-charcoal placeholder:text-charcoal/30 text-sm transition-colors"
            required
          />
        </div>
        <div>
          <label className="block font-body text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-2">
            Dimensiones aprox. (m²)
          </label>
          <input
            type="text"
            value={metros}
            onChange={(e) => setMetros(e.target.value)}
            placeholder="Ej: 5 × 10"
            className="w-full bg-white border border-smoke focus:border-cyan/60 focus:outline-none rounded-xl px-4 py-3 font-body text-charcoal placeholder:text-charcoal/30 text-sm transition-colors"
          />
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label className="block font-body text-xs font-semibold text-charcoal/50 uppercase tracking-widest mb-2">
          Cuéntanos más (opcional)
        </label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Estado actual de la alberca, dudas, urgencia, materiales…"
          rows={4}
          className="w-full bg-white border border-smoke focus:border-cyan/60 focus:outline-none rounded-xl px-4 py-3 font-body text-charcoal placeholder:text-charcoal/30 text-sm transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid}
        className="w-full bg-cyan text-navy font-body font-bold py-4 rounded-xl transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyan-dark text-sm sm:text-base"
      >
        Enviar por WhatsApp →
      </button>

      <p className="text-center font-body text-charcoal/35 text-xs">
        Al enviar se abrirá WhatsApp con tu mensaje pre-llenado. Respuesta en &lt;2h.
      </p>
    </form>
  )
}
