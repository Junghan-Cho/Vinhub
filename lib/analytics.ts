type ContentType = 'grape' | 'region' | 'wine' | 'style' | 'glossary'

type VinlogCtaLocation = 'hero' | 'footer' | 'content_inline'

export function trackViewContent(type: ContentType, id: string) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'view_content',
    content_type: type,
    content_id: id,
  })
}

export function trackVinlogCta(location: VinlogCtaLocation) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'click_vinlog_cta',
    location,
  })
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

