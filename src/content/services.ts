import type { Service } from '../types/content'

export const services: Service[] = [
  {
    id: 'walls', slug: 'wall-demolition', title: 'تكسير الحوائط',
    shortDescription: 'تكسير الحوائط حسب طبيعة الموقع والجزء المطلوب العمل عليه.',
    description: 'خدمة تكسير الحوائط للتجديد أو إعادة توزيع المساحات. يتم تحديد نطاق العمل بعد مناقشة تفاصيل الموقع وطبيعة الجزء المطلوب تكسيره.',
    includedWork: ['مناقشة نوع الحائط وموقعه', 'تحديد الجزء المطلوب تكسيره', 'تنسيق تفاصيل التنفيذ قبل بدء العمل'],
    relatedServices: ['wall-core-drilling', 'floor-demolition'], whatsappMessage: 'السلام عليكم، أريد الاستفسار عن تكسير حائط في المدينة المنورة.',
  },
  {
    id: 'ceilings', slug: 'ceiling-demolition', title: 'تكسير الأسقف',
    shortDescription: 'أعمال تكسير الأسقف ضمن نطاق يتم الاتفاق عليه حسب حالة الموقع.',
    description: 'تنفيذ أعمال تكسير الأسقف وفق الجزء المطلوب وطبيعة المكان. يلزم توضيح تفاصيل الموقع قبل الاتفاق على نطاق التنفيذ.',
    includedWork: ['مراجعة صور وتفاصيل الجزء المطلوب', 'مناقشة نطاق التكسير', 'تنسيق العمل بحسب حالة الموقع'],
    relatedServices: ['ceiling-core-drilling', 'wall-demolition'], whatsappMessage: 'السلام عليكم، أريد الاستفسار عن تكسير سقف في المدينة المنورة.',
  },
  {
    id: 'floors', slug: 'floor-demolition', title: 'تكسير الأرضيات',
    shortDescription: 'تكسير الأرضيات وإزالة الطبقات المطلوبة بحسب طبيعة العمل.',
    description: 'أعمال تكسير الأرضيات لأغراض التجديد أو التعديل، مع مناقشة نوع الأرضية والمساحة ونطاق العمل قبل التنفيذ.',
    includedWork: ['تحديد نوع ومساحة الأرضية', 'مناقشة العمق أو الطبقات المطلوبة', 'الاتفاق على نطاق التنفيذ'],
    relatedServices: ['floor-core-drilling', 'wall-demolition'], whatsappMessage: 'السلام عليكم، أريد الاستفسار عن تكسير أرضيات في المدينة المنورة.',
  },
  {
    id: 'core', slug: 'concrete-core-drilling', title: 'أعمال الكور وتخريم الخرسانة',
    shortDescription: 'فتحات كور في الخرسانة للحوائط والأسقف والأرضيات حسب المقاس والموقع.',
    description: 'تنفيذ فتحات الكور وتخريم الخرسانة حسب موضع الفتحة وقطرها والغرض منها، بعد استلام التفاصيل اللازمة عن الموقع.',
    includedWork: ['تحديد موضع الفتحة', 'تحديد القطر والسماكة', 'مناقشة طبيعة الخرسانة والوصول للموقع'],
    relatedServices: ['wall-core-drilling', 'ceiling-core-drilling', 'floor-core-drilling'], whatsappMessage: 'السلام عليكم، أريد الاستفسار عن أعمال كور وتخريم خرسانة في المدينة المنورة.',
  },
  {
    id: 'wall-core', slug: 'wall-core-drilling', title: 'كور وتخريم الحوائط',
    shortDescription: 'تنفيذ فتحات كور في الحوائط الخرسانية بالمقاس المطلوب.',
    description: 'خدمة مخصصة لفتحات الكور في الحوائط. تساعد مشاركة صورة الموضع والقطر المطلوب وسماكة الحائط على مناقشة العمل بدقة.',
    includedWork: ['استلام قياس الفتحة المطلوبة', 'مراجعة موضع الفتحة', 'تنسيق طريقة الوصول والعمل'],
    relatedServices: ['concrete-core-drilling', 'wall-demolition'], whatsappMessage: 'السلام عليكم، أريد الاستفسار عن كور وتخريم حائط في المدينة المنورة.',
  },
  {
    id: 'ceiling-core', slug: 'ceiling-core-drilling', title: 'كور وتخريم الأسقف',
    shortDescription: 'فتحات كور في الأسقف الخرسانية وفق تفاصيل الموضع والمقاس.',
    description: 'تنفيذ فتحات كور في الأسقف بعد توضيح مكان الفتحة والقطر والسماكة وطبيعة الموقع لتحديد نطاق العمل المناسب.',
    includedWork: ['تحديد المقاس والموضع', 'مناقشة الوصول إلى السقف', 'تنسيق نطاق التنفيذ'],
    relatedServices: ['concrete-core-drilling', 'ceiling-demolition'], whatsappMessage: 'السلام عليكم، أريد الاستفسار عن كور وتخريم سقف في المدينة المنورة.',
  },
  {
    id: 'floor-core', slug: 'floor-core-drilling', title: 'كور وتخريم الأرضيات',
    shortDescription: 'فتحات كور في الأرضيات الخرسانية حسب متطلبات الموقع.',
    description: 'تنفيذ فتحات كور في الأرضيات مع تحديد القطر والسماكة وموضع العمل قبل الاتفاق على التفاصيل.',
    includedWork: ['استلام تفاصيل الفتحة', 'مناقشة سماكة الأرضية', 'تنسيق نطاق العمل'],
    relatedServices: ['concrete-core-drilling', 'floor-demolition'], whatsappMessage: 'السلام عليكم، أريد الاستفسار عن كور وتخريم أرضية في المدينة المنورة.',
  },
]
