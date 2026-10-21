import { MapPin, Phone } from 'lucide-react'
import { QuoteForm } from '../components/QuoteForm'
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon'
import { phoneUrl, siteInfo, whatsappUrl } from '../config/site'

export function ContactPage() {
  return <><section className="page-hero"><div className="container"><span>تواصل معنا</span><h1>أرسل تفاصيل العمل مباشرة</h1><p>شارك نوع الخدمة وصور الموقع والمقاسات المتوفرة، ثم ناقش نطاق العمل حسب حالة المكان.</p></div></section><section className="section"><div className="container contact-grid"><aside className="contact-panel"><h2>{siteInfo.businessName}</h2><p>للتواصل بشأن أعمال التكسير والكور داخل المدينة المنورة.</p><a href={phoneUrl}><Phone /> <span><small>اتصال مباشر</small><b dir="ltr">{siteInfo.contact.phoneDisplay}</b></span></a><a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> <span><small>رسالة WhatsApp</small><b dir="ltr">{siteInfo.contact.phoneDisplay}</b></span></a><div><MapPin /><span><small>منطقة الخدمة</small>{siteInfo.city}</span></div></aside><div><h2 className="form-title">اطلب مناقشة العمل</h2><QuoteForm /></div></div></section></>
}
