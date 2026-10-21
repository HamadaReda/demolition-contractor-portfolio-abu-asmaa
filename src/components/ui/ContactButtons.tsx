import { Phone } from 'lucide-react'
import { phoneUrl, siteInfo, whatsappUrl } from '../../config/site'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'

export function ContactButtons({ message, compact = false }: { message?: string; compact?: boolean }) {
  return <div className={`contact-buttons ${compact ? 'compact' : ''}`}>
    <a className="button button-call" href={phoneUrl}><Phone size={19} /><span>اتصل الآن</span><strong dir="ltr">{siteInfo.contact.phoneDisplay}</strong></a>
    <a className="button button-whatsapp" href={whatsappUrl(message)} target="_blank" rel="noreferrer"><WhatsAppIcon /> تواصل عبر واتساب</a>
  </div>
}
