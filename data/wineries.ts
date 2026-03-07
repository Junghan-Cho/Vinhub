export interface Winery {
  slug: string
  name: string
  regionSlug: string
  story: string
  signatureWines: string[]
}

export const wineries: Winery[] = [
  {
    slug: 'chateau-margaux',
    name: 'Château Margaux',
    regionSlug: 'bordeaux-left-bank',
    story:
      '마고는 보르도 레프트뱅크를 대표하는 그랑 크뤼 클라세 샤또 중 하나로, 우아함과 구조를 모두 갖춘 와인으로 잘 알려져 있습니다.',
    signatureWines: ['chateau-margaux-grand-vin'],
  },
]

export function getWineryBySlug(slug: string): Winery | undefined {
  return wineries.find((w) => w.slug === slug)
}

export function listWineries(): Winery[] {
  return wineries
}

