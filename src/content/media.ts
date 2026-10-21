import workImageOne from '../assets/images_videos/IMG-20261017-WA0014.jpg'
import workImageTwo from '../assets/images_videos/IMG-20261017-WA0015.jpg'
import workVideo from '../assets/images_videos/VID-20261017-WA0052.mp4'
import type { MediaWork } from '../types/content'

export const mediaWorks: MediaWork[] = [
  { id: 'work-1', title: 'من أعمال التكسير', description: 'صورة حقيقية من أعمال التكسير المنفذة.', category: 'أعمال تكسير', type: 'image', src: workImageOne, width: 576, height: 1280, featured: true },
  { id: 'work-2', title: 'تنفيذ أعمال التكسير', description: 'لقطة حقيقية توضح طبيعة العمل في الموقع.', category: 'أعمال تكسير', type: 'image', src: workImageTwo, width: 576, height: 1280, featured: true },
  { id: 'work-3', title: 'فيديو من موقع العمل', description: 'مقطع قصير من أعمال التكسير الفعلية.', category: 'أعمال تكسير', type: 'video', src: workVideo, featured: true },
]
