import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { siteInfo, whatsappUrl } from '../../config/site'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><div className="footer-brand">{siteInfo.businessName}</div><p>{siteInfo.description}</p></div>
    <div><h2>روابط سريعة</h2><Link to="/services">الخدمات</Link><Link to="/work">نماذج الأعمال</Link><Link to="/contact">اطلب تواصلًا</Link></div>
    <div><h2>التواصل</h2><a href={`tel:${siteInfo.contact.phoneInternational}`}><Phone size={17} /><b dir="ltr">{siteInfo.contact.phoneDisplay}</b></a><a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> واتساب</a><span><MapPin size={17} /> {siteInfo.city}</span></div>
  </div><div className="container footer-bottom"><span>© <b dir="ltr">{new Date().getFullYear()}</b> {siteInfo.businessName}. جميع الحقوق محفوظة.</span><a className="developer-credit" href={siteInfo.developer.whatsappUrl} target="_blank" rel="noreferrer"><span>تم تصميم الموقع من خلال</span> <strong>{siteInfo.developer.name}</strong> <WhatsAppIcon /> <b dir="ltr">{siteInfo.developer.phoneDisplay}</b></a></div></footer>
}
