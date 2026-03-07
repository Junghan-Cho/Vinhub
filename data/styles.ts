export interface StyleContext {
  slug: string
  name: string
  occasion: string
  description: string
  recommendedGrapes: string[]
  recommendedRegions: string[]
}

export const styles: StyleContext[] = [
  {
    slug: 'korean-bbq',
    name: '기름진 한우/삼겹살',
    occasion: '고기 구워 먹는 날',
    description:
      '지방이 풍부한 한우, 삼겹살에는 산도와 타닌이 적절히 받쳐주는 레드 와인이 잘 어울립니다.',
    recommendedGrapes: ['cabernet-sauvignon'],
    recommendedRegions: ['bordeaux-left-bank'],
  },
]

export function getStyleBySlug(slug: string): StyleContext | undefined {
  return styles.find((s) => s.slug === slug)
}

export function listStyles(): StyleContext[] {
  return styles
}

