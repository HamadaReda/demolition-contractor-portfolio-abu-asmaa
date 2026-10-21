export interface SiteInfo {
  businessName: string
  city: string
  description: string
  url: string
  contact: { phoneInternational: string; phoneDisplay: string; whatsapp: string }
  developer: { name: string; phoneDisplay: string; whatsappUrl: string }
  serviceAreas: string[]
  googleMapsUrl?: string
  businessHours?: string[]
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  includedWork: string[]
  relatedServices: string[]
  whatsappMessage: string
}

export type MediaCategory = 'أعمال تكسير' | 'أعمال كور'

export interface MediaWork {
  id: string
  title: string
  description: string
  category: MediaCategory
  type: 'image' | 'video'
  src: string
  width?: number
  height?: number
  featured: boolean
}

export interface ContentRepository {
  getServices(): Service[]
  getServiceBySlug(slug: string): Service | undefined
  getMedia(): MediaWork[]
  getCategories(): MediaCategory[]
}
