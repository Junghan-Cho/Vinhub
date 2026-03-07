import type { SatTastingNote, SatFlavorCategory } from '../lib/sat-schema'

export type GrapeColor = 'red' | 'white' | 'rosé'

export interface Grape {
  slug: string
  name: string
  color: GrapeColor
  acidity: 'low' | 'medium' | 'high'
  tannin?: 'low' | 'medium' | 'high'
  body: 'light' | 'medium' | 'full'
  aromaGroups: SatFlavorCategory[]
  keyRegions: string[]
  foodPairing: string[]
  description: string
  sampleSatNote?: SatTastingNote
}

export const grapes: Grape[] = [
  {
    slug: 'cabernet-sauvignon',
    name: 'Cabernet Sauvignon',
    color: 'red',
    acidity: 'medium',
    tannin: 'high',
    body: 'full',
    aromaGroups: ['black_fruit', 'oak', 'spice', 'earth'],
    keyRegions: ['Bordeaux', 'Napa Valley', 'Coonawarra'],
    foodPairing: ['그릴/로스트 스테이크', '양고기', '숙성 치즈'],
    description:
      '두꺼운 껍질과 높은 타닌, 검은 과실 중심의 향을 가진 대표적인 풀바디 레드 품종입니다. 오크 숙성과 장기 숙성에 잘 견디며, 블렌딩의 축이 되는 품종입니다.',
  },
  {
    slug: 'chardonnay',
    name: 'Chardonnay',
    color: 'white',
    acidity: 'medium',
    body: 'medium',
    aromaGroups: ['stone_fruit', 'citrus', 'oak', 'autolytic'],
    keyRegions: ['Burgundy', 'Sonoma Coast', 'Adelaide Hills'],
    foodPairing: ['버터 소스 해산물', '크리미 파스타', '구운 닭고기'],
    description:
      '중성적인 캐릭터 덕분에 산지와 양조 스타일에 따라 프로필이 크게 달라지는 품종입니다. 스틸, 오크 숙성, 스파클링 등 매우 다양한 스타일로 표현됩니다.',
  },
  {
    slug: 'riesling',
    name: 'Riesling',
    color: 'white',
    acidity: 'high',
    body: 'light',
    aromaGroups: ['citrus', 'stone_fruit', 'floral', 'mineral'],
    keyRegions: ['Mosel', 'Rheingau', 'Clare Valley'],
    foodPairing: ['아시아 푸드', '매콤한 요리', '화이트 미트'],
    description:
      '높은 산도와 강한 아로마를 가진 품종으로, 드라이부터 스위트까지 다양한 당도 레벨로 생산됩니다. 숙성에 따라 페트롤/허니 캐릭터가 나타납니다.',
  },
]

export function getGrapeBySlug(slug: string): Grape | undefined {
  return grapes.find((g) => g.slug === slug)
}

export function listGrapes(): Grape[] {
  return grapes
}

