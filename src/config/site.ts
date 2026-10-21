import type { SiteInfo } from '../types/content'

export const siteInfo: SiteInfo = {
  businessName: 'معلم تكسير أبو أسماء',
  city: 'المدينة المنورة',
  description: 'أعمال تكسير الحوائط والأسقف والأرضيات، وأعمال الكور وتخريم الخرسانة في المدينة المنورة.',
  url: 'https://demolition-contractor-portfolio-abu.vercel.app',
  contact: {
    phoneInternational: '+966594127376',
    phoneDisplay: '059 412 7376',
    whatsapp: '966594127376',
  },
  developer: {
    name: 'م. حماده رضا',
    phoneDisplay: '+966531058159',
    whatsappUrl: 'https://wa.me/966531058159',
  },
  serviceAreas: ['المدينة المنورة'],
}

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${siteInfo.contact.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const phoneUrl = `tel:${siteInfo.contact.phoneInternational}`
