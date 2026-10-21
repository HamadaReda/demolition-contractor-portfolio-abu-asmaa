import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'
import { whatsappUrl } from '../../config/site'

export function PublicLayout() {
  return <><a className="skip-link" href="#main-content">انتقل إلى المحتوى</a><Header /><main id="main-content"><Outlet /></main><Footer /><a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب"><WhatsAppIcon /></a></>
}
