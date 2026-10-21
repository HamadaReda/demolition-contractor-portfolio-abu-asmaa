import { ArrowLeft, CheckCircle2, Drill, Hammer, Images, MapPin, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images_videos/IMG-20261017-WA0014.jpg'
import { ContactButtons } from '../components/ui/ContactButtons'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ServiceCard'
import { MediaGallery } from '../components/MediaGallery'
import { contentRepository } from '../content/repository'
import { siteInfo } from '../config/site'

export function HomePage() {
  const services = contentRepository.getServices()
  return <>
    <section className="hero-section"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow"><span /> تكسير منظم · تواصل مباشر</div><h1>معلم تكسير وأعمال كور في <em>المدينة المنورة</em></h1><p>{siteInfo.description} يتم تحديد نطاق العمل بعد مناقشة تفاصيل الموقع وطبيعة الجزء المطلوب تكسيره.</p><ContactButtons message="السلام عليكم، أريد الاستفسار عن أعمال التكسير في المدينة المنورة." /><div className="hero-note"><CheckCircle2 /><span>أرسل صور الموقع وتفاصيل العمل عبر واتساب لمناقشة المطلوب.</span></div></div><div className="hero-visual"><div className="hero-image-wrap"><img src={heroImage} width="576" height="1280" alt="صورة حقيقية من أعمال التكسير" fetchPriority="high" /><div className="hero-badge"><Hammer /><span><strong>أعمال تكسير</strong><small>حوائط · أسقف · أرضيات</small></span></div></div><span className="vertical-label">DEMOLITION · CORE DRILLING</span></div></div></section>
    <section className="trust-strip"><div className="container"><div><Hammer /><span><strong>تكسير</strong><small>حوائط وأسقف وأرضيات</small></span></div><div><Drill /><span><strong>أعمال كور</strong><small>تخريم الخرسانة</small></span></div><div><PhoneCall /><span><strong>تواصل مباشر</strong><small dir="ltr">{siteInfo.contact.phoneDisplay}</small></span></div><div><MapPin /><span><strong>منطقة الخدمة</strong><small>{siteInfo.city}</small></span></div></div></section>
    <section className="section services-section"><div className="container"><SectionHeading eyebrow="خدماتنا" title="أعمال تكسير وكور حسب احتياج الموقع">نناقش التفاصيل والمقاسات ونطاق العمل بوضوح قبل التنفيذ.</SectionHeading><div className="services-grid">{services.slice(0, 6).map((service, index) => <ServiceCard service={service} index={index} key={service.id} />)}</div><div className="section-link"><Link to="/services">عرض جميع الخدمات <ArrowLeft /></Link></div></div></section>
    <section className="section dark-section"><div className="container split-section"><div><SectionHeading eyebrow="قبل التنفيذ" title="تفاصيل واضحة تساعد على تحديد المطلوب" /><div className="feature-list">{['مناقشة تفاصيل العمل مباشرة', 'تحديد نوع التكسير أو فتحة الكور المطلوبة', 'الاطلاع على صور الموقع عند التواصل', 'تنسيق نطاق العمل حسب حالة المكان'].map((text, index) => <div key={text}><span>{String(index + 1).padStart(2, '0')}</span><p>{text}</p></div>)}</div></div><div className="process-card"><span className="large-number">04</span><h3>خطوات بسيطة للتواصل</h3><ol><li>تواصل بالهاتف أو WhatsApp.</li><li>أرسل تفاصيل وصور الموقع.</li><li>ناقش نوع ونطاق التكسير.</li><li>اتفق على التفاصيل حسب حالة العمل.</li></ol></div></div></section>
    <section className="section work-section"><div className="container"><SectionHeading eyebrow="من أرض الواقع" title="نماذج من أعمال التكسير">صور وفيديوهات حقيقية توضح طبيعة العمل دون إضافة تفاصيل غير موثقة.</SectionHeading><MediaGallery limit={3} /><div className="section-link"><Link to="/work">مشاهدة معرض الأعمال <Images /></Link></div></div></section>
    <section className="cta-section"><div className="container"><div><span>هل لديك عمل تكسير أو كور؟</span><h2>أرسل التفاصيل والصور، وناقش المطلوب مباشرة.</h2></div><ContactButtons message="السلام عليكم، لدي عمل تكسير/كور في المدينة المنورة وهذه تفاصيله:" /></div></section>
  </>
}
