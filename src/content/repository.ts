import { mediaWorks } from './media'
import { services } from './services'
import type { ContentRepository, MediaCategory } from '../types/content'

class StaticContentRepository implements ContentRepository {
  getServices() { return services }
  getServiceBySlug(slug: string) { return services.find((service) => service.slug === slug) }
  getMedia() { return mediaWorks }
  getCategories() { return [...new Set(mediaWorks.map((item) => item.category))] as MediaCategory[] }
}

export const contentRepository: ContentRepository = new StaticContentRepository()
