import { CheckCircle2, MapPin } from 'lucide-react'
import { ContactButtons } from '../components/ui/ContactButtons'
import { SectionHeading } from '../components/ui/SectionHeading'
import { siteInfo } from '../config/site'

export function AboutPage() {
  return <><section className="page-hero"><div className="container"><span>من نحن</span><h1>عمل واضح يبدأ بفهم المطلوب</h1><p>معلم تكسير أبو أسماء متخصص في أعمال التكسير والكور داخل المدينة المنورة، مع تواصل مباشر لتحديد طبيعة العمل ونطاقه.</p></div></section><section className="section"><div className="container split-section light"><div><SectionHeading eyebrow="التخصص" title="خدمات تكسير وكور للمساحات المختلفة" /><p className="lead">تشمل الأعمال المؤكدة تكسير الحوائط والأسقف والأرضيات، إلى جانب فتحات الكور وتخريم الخرسانة في الحوائط والأسقف والأرضيات. تُناقش التفاصيل لكل موقع على حدة قبل الاتفاق.</p><ContactButtons /></div><div className="values-card"><h2>أسلوب التواصل والعمل</h2>{['الاستماع إلى تفاصيل المطلوب', 'الاستفادة من الصور والمقاسات الأولية', 'تحديد نطاق العمل قبل التنفيذ', 'تواصل مباشر دون وعود غير واقعية'].map((item) => <div key={item}><CheckCircle2 /><span>{item}</span></div>)}</div></div></section><section className="location-band"><div className="container"><MapPin /><div><span>منطقة الخدمة المؤكدة</span><h2>{siteInfo.city}</h2></div></div></section></>
}
