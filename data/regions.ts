export interface Region {
  slug: string
  name: string
  country: string
  climate: string
  styleSummary: string
  keyGrapes: string[]
  representativeWineries: string[]
}

export const regions: Region[] = [
  {
    slug: 'bordeaux-left-bank',
    name: 'Bordeaux Left Bank',
    country: 'France',
    climate: '온화한 해양성, 자갈 토양이 많은 지역',
    styleSummary:
      'Cabernet Sauvignon 중심의 구조적인 레드 와인으로, 블랙커런트, 시가 박스, 시더, 흙 향을 보이며 장기 숙성 잠재력을 가집니다.',
    keyGrapes: ['cabernet-sauvignon', 'merlot', 'cabernet-franc'],
    representativeWineries: ['chateau-margaux', 'chateau-latour'],
  },
  {
    slug: 'mosel',
    name: 'Mosel',
    country: 'Germany',
    climate: '시원한 대륙성, 강 경사면의 슬레이트 토양',
    styleSummary:
      '높은 산도와 낮은 알코올, 섬세한 과실과 미네랄 캐릭터를 가진 Riesling으로 유명합니다. 드라이부터 스위트까지 다양한 스타일을 생산합니다.',
    keyGrapes: ['riesling'],
    representativeWineries: ['jj-prum'],
  },
]

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug)
}

export function listRegions(): Region[] {
  return regions
}

