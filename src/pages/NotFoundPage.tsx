import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="not-found"><div className="container"><span>404</span><h1>الصفحة غير موجودة</h1><p>قد يكون الرابط غير صحيح أو تم نقل الصفحة.</p><Link className="button button-primary" to="/">العودة إلى الرئيسية</Link></div></section>
}
