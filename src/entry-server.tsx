import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import { getHeadMarkup } from './seo/seo'

export function render(url: string) {
  return { html: renderToString(<MemoryRouter initialEntries={[url]}><App /></MemoryRouter>), head: getHeadMarkup(url) }
}
