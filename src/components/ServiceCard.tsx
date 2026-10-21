import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../types/content'

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return <article className="service-card">
    <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
    <h3>{service.title}</h3><p>{service.shortDescription}</p>
    <Link to={`/services/${service.slug}`}>تفاصيل الخدمة <ArrowLeft size={18} /></Link>
  </article>
}
