import { useState } from 'react'
import { contentRepository } from '../content/repository'

export function MediaGallery({ limit }: { limit?: number }) {
  const media = contentRepository.getMedia().slice(0, limit)
  const [failed, setFailed] = useState<string[]>([])
  return <div className="media-grid">
    {media.map((item, index) => <article className={`media-card ${index === 0 ? 'media-featured' : ''}`} key={item.id}>
      {!failed.includes(item.id) ? item.type === 'image' ?
        <img src={item.src} width={item.width} height={item.height} alt={item.description} loading={index === 0 ? 'eager' : 'lazy'} onError={() => setFailed((old) => [...old, item.id])} /> :
        <video controls preload="metadata" aria-label={item.title} onError={() => setFailed((old) => [...old, item.id])}><source src={item.src} type="video/mp4" />متصفحك لا يدعم تشغيل الفيديو.</video>
      : <div className="media-fallback">تعذر تحميل هذا الملف</div>}
      <div className="media-copy"><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></div>
    </article>)}
  </div>
}
