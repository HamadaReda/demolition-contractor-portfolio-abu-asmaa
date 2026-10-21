import { useEffect } from 'react'
import { getSeoForPath } from '../seo/seo'
import { siteInfo } from '../config/site'

export function Seo({ path }: { path: string }) {
  useEffect(() => {
    const seo = getSeoForPath(path)
    const canonical = `${siteInfo.url}${seo.path === '/' ? '' : seo.path}`
    document.title = seo.title
    const setMeta = (selector: string, attrs: Record<string, string>) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector)
      if (!element) { element = document.createElement('meta'); document.head.appendChild(element) }
      Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value))
    }
    setMeta('meta[name="description"]', { name: 'description', content: seo.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: seo.noIndex ? 'noindex, nofollow' : 'index, follow' })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = canonical
  }, [path])
  return null
}
