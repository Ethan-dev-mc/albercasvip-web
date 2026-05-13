import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://albercasvip.com'

const staticRoutes = [
  '',
  '/nosotros',
  '/garantia-tecnologia',
  '/servicios',
  '/servicios/construccion',
  '/servicios/renovacion',
  '/servicios/mantenimiento',
  '/servicios/edificios-azoteas',
  '/servicios/equipamiento',
  '/modelos',
  '/proyectos',
  '/contacto',
]

const proyectoSlugs = [
  'vistas-angel-2016',
  'las-canadas-2016',
  'zapopan-resort-2017',
  'pinar-venta-astillero-2017',
  'torre-latitud-2019',
  'hotel-don-jose-2019',
  'san-esteban-2019',
  'torre-estrato-2019',
  'villa-corona-2019',
  'casa-fuerte-2019',
  'casa-cangrejo-2019',
  'sayulita-2019',
  'la-cruz-encantada-2020',
  'torre-andares-2021',
  'valle-de-bravo-2021',
  'plaza-midtown-2022',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const statics: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/servicios') ? 0.9 : 0.8,
  }))

  const proyectos: MetadataRoute.Sitemap = proyectoSlugs.map((slug) => ({
    url: `${BASE_URL}/proyectos/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...statics, ...proyectos]
}
