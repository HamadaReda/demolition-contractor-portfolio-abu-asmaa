import { Route, Routes, useLocation } from 'react-router-dom'
import { PublicLayout } from './components/layout/PublicLayout'
import { Seo } from './components/Seo'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { WorkPage } from './pages/WorkPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  const location = useLocation()
  return <><Seo path={location.pathname} /><Routes><Route element={<PublicLayout />}><Route index element={<HomePage />} /><Route path="about" element={<AboutPage />} /><Route path="services" element={<ServicesPage />} /><Route path="services/:slug" element={<ServiceDetailPage />} /><Route path="work" element={<WorkPage />} /><Route path="projects" element={<WorkPage />} /><Route path="contact" element={<ContactPage />} /><Route path="404" element={<NotFoundPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes></>
}
