import { ServiceCard } from '../components/ServiceCard'
import { contentRepository } from '../content/repository'

export function ServicesPage() {
  return <><section className="page-hero"><div className="container"><span>الخدمات</span><h1>خدمات التكسير وأعمال الكور</h1><p>اختر نوع الخدمة للاطلاع على التفاصيل، ثم أرسل صور الموقع والمقاسات المتوفرة لمناقشة نطاق العمل.</p></div></section><section className="section"><div className="container"><div className="services-grid">{contentRepository.getServices().map((service, index) => <ServiceCard service={service} index={index} key={service.id} />)}</div></div></section></>
}
