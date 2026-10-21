import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteInfo, whatsappUrl } from '../../config/site'
import { WhatsAppIcon } from '../icons/WhatsAppIcon'

const links = [['/', 'الرئيسية'], ['/about', 'من نحن'], ['/services', 'الخدمات'], ['/work', 'أعمالنا'], ['/contact', 'تواصل معنا']]

export function Header() {
  const [open, setOpen] = useState(false)
  const closeButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    closeButton.current?.focus()
    document.body.classList.add('menu-open')
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('keydown', close)
      document.body.classList.remove('menu-open')
    }
  }, [open])
  return <header className={`site-header ${open ? 'menu-active' : ''}`}>
    <div className="container nav-row">
      <Link className="brand" to="/" aria-label={`${siteInfo.businessName} - الرئيسية`}><span className="brand-mark"><span /></span><span><strong>أبو أسماء</strong><small>للتكسير وأعمال الكور</small></span></Link>
      <nav className="desktop-nav" aria-label="التنقل الرئيسي">{links.map(([href, label]) => <NavLink key={href} to={href} end={href === '/'}>{label}</NavLink>)}</nav>
      <a className="button button-whatsapp desktop-cta" href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> تواصل واتساب</a>
      <button className="menu-button" type="button" aria-label="فتح القائمة" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
    </div>
    {open && <div className="mobile-overlay" role="dialog" aria-modal="true" aria-label="قائمة الموقع">
      <div className="mobile-menu-head"><Link className="brand" to="/" onClick={() => setOpen(false)}><span className="brand-mark"><span /></span><span><strong>أبو أسماء</strong><small>للتكسير وأعمال الكور</small></span></Link><button ref={closeButton} className="close-menu" type="button" aria-label="إغلاق القائمة" onClick={() => setOpen(false)}><X /></button></div>
      <nav aria-label="جميع روابط الموقع">{links.map(([href, label], index) => <NavLink key={href} to={href} end={href === '/'} onClick={() => setOpen(false)}><span>{String(index + 1).padStart(2, '0')}</span>{label}</NavLink>)}</nav>
      <div className="mobile-menu-actions"><a className="button button-call" href={`tel:${siteInfo.contact.phoneInternational}`}><Phone size={19} /><span>اتصل الآن</span><strong dir="ltr">{siteInfo.contact.phoneDisplay}</strong></a><a className="button button-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /> تواصل عبر واتساب</a></div>
    </div>}
  </header>
}
