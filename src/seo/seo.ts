import { siteInfo } from '../config/site'
import { contentRepository } from '../content/repository'

export interface SeoData { title: string; description: string; path: string; noIndex?: boolean }

export function getSeoForPath(pathname: string): SeoData {
  const path = pathname.replace(/\/$/, '') || '/'
  const serviceSlug = path.match(/^\/services\/([^/]+)$/)?.[1]
  const service = serviceSlug ? contentRepository.getServiceBySlug(serviceSlug) : undefined
  if (service) return { title: `${service.title} في المدينة المنورة | ${siteInfo.businessName}`, description: service.description, path }
  const pages: Record<string, SeoData> = {
    '/': { title: 'معلم تكسير وأعمال كور في المدينة المنورة | أبو أسماء', description: siteInfo.description, path: '/' },
    '/about': { title: `من نحن | ${siteInfo.businessName}`, description: 'تعرف على خدمات معلم تكسير أبو أسماء في تكسير الحوائط والأسقف والأرضيات وأعمال الكور بالمدينة المنورة.', path },
    '/services': { title: `خدمات التكسير وأعمال الكور | ${siteInfo.businessName}`, description: 'خدمات تكسير الحوائط والأسقف والأرضيات وأعمال الكور وتخريم الخرسانة في المدينة المنورة.', path },
    '/work': { title: `نماذج من أعمال التكسير | ${siteInfo.businessName}`, description: 'صور وفيديوهات حقيقية من أعمال التكسير لمعلم تكسير أبو أسماء في المدينة المنورة.', path },
    '/contact': { title: `تواصل مع ${siteInfo.businessName}`, description: `اتصل أو أرسل تفاصيل أعمال التكسير والكور عبر WhatsApp على ${siteInfo.contact.phoneDisplay}.`, path },
  }
  return pages[path] ?? { title: `الصفحة غير موجودة | ${siteInfo.businessName}`, description: 'تعذر العثور على الصفحة المطلوبة.', path, noIndex: true }
}

export function getHeadMarkup(pathname: string) {
  const seo = getSeoForPath(pathname)
  const canonical = `${siteInfo.url}${seo.path === '/' ? '' : seo.path}`
  const image = `${siteInfo.url}/social-card.svg`
  const localBusiness = {
    '@context': 'https://schema.org', '@type': 'GeneralContractor', name: siteInfo.businessName,
    url: siteInfo.url, telephone: siteInfo.contact.phoneInternational, areaServed: siteInfo.city,
  }
  const breadcrumb = seo.path === '/' ? null : {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: siteInfo.url },
      { '@type': 'ListItem', position: 2, name: seo.title.split('|')[0].trim(), item: canonical },
    ],
  }
  const json = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c')
  return `<title>${seo.title}</title>
    <meta name="description" content="${seo.description}">
    <link rel="canonical" href="${canonical}">
    <meta name="robots" content="${seo.noIndex ? 'noindex, nofollow' : 'index, follow'}">
    <meta property="og:locale" content="ar_SA"><meta property="og:type" content="website">
    <meta property="og:title" content="${seo.title}"><meta property="og:description" content="${seo.description}">
    <meta property="og:url" content="${canonical}"><meta property="og:image" content="${image}">
    <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${seo.title}">
    <meta name="twitter:description" content="${seo.description}"><meta name="twitter:image" content="${image}">
    <script type="application/ld+json">${json(localBusiness)}</script>${breadcrumb ? `<script type="application/ld+json">${json(breadcrumb)}</script>` : ''}`
}

export const publicRoutes = ['/', '/about', '/services', ...contentRepository.getServices().map((service) => `/services/${service.slug}`), '/work', '/contact']
