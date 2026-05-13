# AlbercasVIP — Sitio Web 2.0

## Stack
- Next.js 16.2.4 (App Router, static export `output: 'export'`)
- React 19 + TypeScript strict
- Tailwind CSS v4 (configuración en globals.css via @theme, no tailwind.config.js)
- framer-motion 12 (animaciones — siempre con 'use client')
- lucide-react 1.x (iconos de línea fina)
- Deploy: GitHub Pages (carpeta `out/` generada con `npm run build`)

## Colores (clases Tailwind)
- `bg-navy` / `text-navy` → #1A2747 (primario, headers)
- `bg-cyan` / `text-cyan` → #00BCD4 (CTAs, acentos, links)
- `bg-agua` / `text-agua` → #7FE3F0 (acento claro, gradientes)
- `bg-ink` / `text-ink` → #1A1A2E (secciones premium oscuras)
- `text-charcoal` → #333333 (cuerpo de texto)
- `bg-smoke` → #F4F6F8 (separadores, fondos sutiles)
- `bg-offwhite` → #F8FAFB (fondos claros)

## Tipografía (clases Tailwind)
- `font-display` → Playfair Display (títulos aspiracionales)
- `font-body` → Inter (UI y texto cuerpo)

## Datos de marca (FUENTE DE VERDAD: master doc)
- +145 albercas nuevas construidas
- +233 renovaciones realizadas
- +300 clientes satisfechos
- +25 años de experiencia (Eduardo Macías, fundador)
- 15 años de garantía total (10 base + 5 extendida)
- 75+ años RENOLIT en el mercado mundial
- 24 modelos de membrana en 4 líneas
- Soldadura a Testa: 3 cordones, sellado total

## Slogans
- Corporativo: "Diseñamos espacios que crean historias"
- Comercial: "15 años de tranquilidad en cada gota"

## Servicios (5 líneas)
1. Construcción de albercas nuevas
2. Renovación sin demolición (SIN retirar mosaico — diferenciador CLAVE)
3. Mantenimiento continuo
4. Albercas en edificios y azoteas (sistema 100% impermeable para altura)
5. Equipamiento completo

## Catálogo membranas (lib/membranas.ts)
- ALKORPLAN 2000: Blanco, Arena, Azul Claro, Azul Adriático, Gris Claro, Gris Oscuro (1.5mm, 10 años)
- ALKORPLAN 3000: Persia Azul, Persia Arena, Persia Negro, Mosaico, Carrara, Marbra, Bizancio Azul, Platinum (1.5mm, 15 años)
- CERAMICS: Selene, Etna, Sofia, Atenea (2mm, 10 años, certificado antideslizante C)
- TOUCH 3D: Authentic, Relax, Elegance, Vanity, Sublime, Prestige (2mm, 15 años)

## Proyectos (lib/proyectos.ts)
20 proyectos reales 2016-2022. Ver archivo para fichas técnicas completas.
Destacados: Torre Estrato piso 22, Casa Cangrejo infinita, Valle de Bravo premium.

## Contacto
- WhatsApp Ventas (Eduardo): +52 1 33 1080 8938 → wa.me/5213310808938
- WhatsApp Facturación: +52 1 65 7275 0305 → wa.me/5216572750305
- WhatsApp Península (Carlos Escamilla): +52 1 99 8319 7324 → wa.me/5219983197324
- Email: eduardo@albercasvip.com
- Dirección: Av. Plutarco Elías Calles 465, Col. Santa María del Silo, Guadalajara
- Facebook: Albercas.VIP / albercasvipmx
- Instagram: @albercasvip

## Reglas absolutas
- NUNCA inventar datos, proyectos, estadísticas ni descripciones
- Los textos aspiracionales de las membranas se usan EXACTAMENTE como en el master doc
- Imágenes: Unsplash placeholders hasta que el cliente entregue fotos reales
- Todo componente con framer-motion o hooks → 'use client'
- Rutas dinámicas → siempre exportar generateStaticParams() para static export
- Mobile first en todo
