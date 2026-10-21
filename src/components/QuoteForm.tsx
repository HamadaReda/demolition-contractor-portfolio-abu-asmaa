import { useMemo, useState } from 'react'
import { Copy, ExternalLink } from 'lucide-react'
import { contentRepository } from '../content/repository'
import { siteInfo } from '../config/site'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

type Fields = { name: string; phone: string; service: string; area: string; size: string; description: string }
const initial: Fields = { name: '', phone: '', service: '', area: '', size: '', description: '' }

export function QuoteForm() {
  const [fields, setFields] = useState(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [prepared, setPrepared] = useState(false)
  const message = useMemo(() => `السلام عليكم، أريد الاستفسار عن عمل تكسير/كور.\n\nالاسم: ${fields.name}\nرقم التواصل: ${fields.phone || 'غير مذكور'}\nنوع الخدمة: ${fields.service}\nالمدينة أو الحي: ${fields.area}\nحجم العمل التقريبي: ${fields.size || 'غير مذكور'}\nوصف العمل: ${fields.description}`, [fields])
  const update = (key: keyof Fields, value: string) => { setFields((old) => ({ ...old, [key]: value })); setErrors((old) => ({ ...old, [key]: undefined })); setPrepared(false) }
  const validate = () => {
    const next: typeof errors = {}
    if (!fields.name.trim()) next.name = 'اكتب الاسم.'
    if (!fields.service) next.service = 'اختر نوع الخدمة.'
    if (!fields.area.trim()) next.area = 'اكتب المدينة أو الحي.'
    if (!fields.description.trim()) next.description = 'اكتب وصفًا مختصرًا للعمل.'
    setErrors(next); return Object.keys(next).length === 0
  }
  const submit = (event: React.FormEvent) => { event.preventDefault(); if (!validate()) return; setPrepared(true); window.open(`https://wa.me/${siteInfo.contact.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer') }
  return <form className="quote-form" onSubmit={submit} noValidate>
    <div className="field"><label htmlFor="name">الاسم *</label><input id="name" value={fields.name} onChange={(e) => update('name', e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <span id="name-error" role="alert">{errors.name}</span>}</div>
    <div className="field"><label htmlFor="phone">رقم الهاتف <small>اختياري</small></label><input id="phone" type="tel" inputMode="tel" value={fields.phone} onChange={(e) => update('phone', e.target.value)} /></div>
    <div className="field"><label htmlFor="service">نوع الخدمة *</label><select id="service" value={fields.service} onChange={(e) => update('service', e.target.value)} aria-invalid={!!errors.service}><option value="">اختر الخدمة</option>{contentRepository.getServices().map((service) => <option key={service.id}>{service.title}</option>)}</select>{errors.service && <span role="alert">{errors.service}</span>}</div>
    <div className="field"><label htmlFor="area">المدينة أو الحي *</label><input id="area" value={fields.area} onChange={(e) => update('area', e.target.value)} aria-invalid={!!errors.area} />{errors.area && <span role="alert">{errors.area}</span>}</div>
    <div className="field"><label htmlFor="size">حجم العمل التقريبي <small>اختياري</small></label><input id="size" value={fields.size} onChange={(e) => update('size', e.target.value)} placeholder="مثال: حائط واحد أو مساحة تقريبية" /></div>
    <div className="field full"><label htmlFor="description">وصف العمل *</label><textarea id="description" rows={5} value={fields.description} onChange={(e) => update('description', e.target.value)} aria-invalid={!!errors.description} />{errors.description && <span role="alert">{errors.description}</span>}</div>
    <p className="privacy-note">البيانات لا تُخزن ولا تُرسل تلقائيًا؛ يتم تجهيز رسالة WhatsApp لتراجعها بنفسك.</p>
    <button className="button button-whatsapp" type="submit"><WhatsAppIcon /> تجهيز الرسالة وفتح واتساب <ExternalLink size={17} /></button>
    {prepared && <div className="prepared-message"><p>تم تجهيز الرسالة. إذا لم يفتح WhatsApp، انسخها يدويًا.</p><button type="button" onClick={() => navigator.clipboard?.writeText(message)}><Copy size={17} /> نسخ الرسالة</button><pre>{message}</pre></div>}
  </form>
}
