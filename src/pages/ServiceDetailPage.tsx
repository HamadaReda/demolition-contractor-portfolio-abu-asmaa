import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ContactButtons } from '../components/ui/ContactButtons'
import { contentRepository } from '../content/repository'

export function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const service = contentRepository.getServiceBySlug(slug)
  if (!service) return <Navigate to="/404" replace />
  const related = service.relatedServices.map((item) => contentRepository.getServiceBySlug(item)).filter(Boolean)
  return <><section className="page-hero service-hero"><div className="container"><Link className="back-link" to="/services"><ArrowRight /> كل الخدمات</Link><span>خدمة تكسير وكور</span><h1>{service.title} في المدينة المنورة</h1><p>{service.shortDescription}</p><ContactButtons message={service.whatsappMessage} /></div></section><section className="section"><div className="container detail-grid"><article><h2>عن الخدمة</h2><p className="lead">{service.description}</p><div className="scope-list"><h2>تفاصيل تساعدنا على مناقشة العمل</h2>{service.includedWork.map((item) => <div key={item}><CheckCircle2 /><span>{item}</span></div>)}</div><div className="safety-note"><strong>تنبيه مهم</strong><p>لا يُفترض أن يكون أي جزء آمنًا للتكسير دون معرفة طبيعة الموقع. يتم تحديد نطاق العمل بعد مناقشة التفاصيل والجزء المطلوب.</p></div></article><aside><h2>خدمات مرتبطة</h2>{related.map((item) => item && <Link key={item.id} to={`/services/${item.slug}`}>{item.title}<ArrowRight /></Link>)}</aside></div></section></>
}
