import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const template = await readFile(resolve(root, 'dist/index.html'), 'utf8')
const serverAssets = await readdir(resolve(root, 'dist-ssr/assets'))
const serverEntry = serverAssets.find((file) => file.startsWith('entry-server') && file.endsWith('.js'))
if (!serverEntry) throw new Error('SSR entry was not generated.')
const { render } = await import(pathToFileURL(resolve(root, 'dist-ssr/assets', serverEntry)).href)
const siteUrl = 'https://demolition-contractor-portfolio-abu.vercel.app'
const routes = ['/', '/about', '/services', '/services/wall-demolition', '/services/ceiling-demolition', '/services/floor-demolition', '/services/concrete-core-drilling', '/services/wall-core-drilling', '/services/ceiling-core-drilling', '/services/floor-core-drilling', '/work', '/contact']

for (const route of routes) {
  const { html, head } = render(route)
  const output = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)
  const file = route === '/' ? resolve(root, 'dist/index.html') : resolve(root, `dist${route}/index.html`)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, output)
}

const notFound = render('/404')
await writeFile(resolve(root, 'dist/404.html'), template.replace('<!--app-head-->', notFound.head).replace('<!--app-html-->', notFound.html))
await writeFile(resolve(root, 'dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${siteUrl}${route === '/' ? '/' : route}</loc></url>`).join('\n')}\n</urlset>\n`)
await writeFile(resolve(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered ${routes.length} routes, 404, sitemap.xml and robots.txt.`)
