export type GlossaryCategory =
  | 'structure'
  | 'aroma'
  | 'winemaking'
  | 'service'
  | 'other'

export interface GlossaryTerm {
  slug: string
  term: string
  category: GlossaryCategory
  definition: string
  example?: string
  relatedSlugs?: string[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'acidity',
    term: '산도(Acidity)',
    category: 'structure',
    definition:
      '와인이 입안에서 주는 상큼함과 긴장감의 정도를 의미합니다. 높은 산도는 입안을 침이 돌게 하고 상쾌하게 느껴집니다.',
    example: 'Riesling, Sauvignon Blanc 등은 일반적으로 높은 산도를 가지는 품종입니다.',
  },
  {
    slug: 'tannin',
    term: '타닌(Tannin)',
    category: 'structure',
    definition:
      '주로 포도 껍질, 씨, 줄기, 오크에서 오는 떫은 느낌의 성분입니다. 입안이 마르고 거칠게 느껴지는 정도와 연관됩니다.',
  },
  {
    slug: 'body',
    term: '바디(Body)',
    category: 'structure',
    definition:
      '와인이 입안에서 느껴지는 무게감과 질감을 말합니다. 알코올, 당도, 추출 정도가 복합적으로 작용해 가볍게(light)부터 매우 무겁게(full)까지 표현합니다.',
    example: 'Barolo, Napa Cabernet는 보통 풀바디, Mosel Kabinett Riesling은 라이트 바디로 느껴집니다.',
  },
  {
    slug: 'dry',
    term: '드라이(Dry)',
    category: 'structure',
    definition:
      '잔당(Residual sugar)이 거의 없어 단맛이 느껴지지 않는 스타일을 뜻합니다. 단, 과일 향 때문에 단 느낌이 날 수 있으므로 실제 당도와 구분해야 합니다.',
    example: '대부분의 보르도 레드, 샹파뉴 브뤼(Brut)는 드라이 스타일입니다.',
  },
  {
    slug: 'oak',
    term: '오크 숙성(Oak ageing)',
    category: 'winemaking',
    definition:
      '오크 배럴에서 숙성하며 바닐라, 토스트, 스파이스 등의 향과 더 부드러운 질감을 부여하는 과정입니다. 배럴의 크기, 나무 종류, 사용 연차에 따라 영향이 달라집니다.',
    example: 'Rioja Gran Reserva, Barossa Shiraz, 많은 고급 Chardonnay가 오크 숙성의 대표적인 예입니다.',
  },
  {
    slug: 'malolactic-conversion',
    term: '말롤락틱 발효(Malolactic conversion)',
    category: 'winemaking',
    definition:
      '단단한 말산을 부드러운 젖산으로 바꾸는 과정입니다. 산도가 둥글어지고 버터, 크리미한 노트가 생길 수 있습니다.',
    example: '버터리한 스타일의 Chardonnay는 말롤락틱 발효를 거친 경우가 많습니다.',
  },
  {
    slug: 'noble-rot',
    term: '귀부(Botrytis / Noble rot)',
    category: 'winemaking',
    definition:
      'Botrytis cinerea 곰팡이가 포도 껍질을 뚫고 수분을 농축시켜 당도와 풍미를 높이는 현상입니다. 잘 관리된 귀부는 고급 스위트 와인의 핵심 요소입니다.',
    example: 'Sauternes, Tokaji Aszú, 독일 Beerenauslese/ Trockenbeerenauslese가 대표적인 귀부 와인입니다.',
  },
  {
    slug: 'decanting',
    term: '디캔팅(Decanting)',
    category: 'service',
    definition:
      '병에서 와인을 다른 용기로 옮겨 산소와 접촉시키거나 침전을 분리하는 서비스 기술입니다. 탄닌이 강한 젊은 레드나 오래된 와인에 자주 사용됩니다.',
  },
  {
    slug: 'serving-temperature',
    term: '서빙 온도(Serving temperature)',
    category: 'service',
    definition:
      '와인을 가장 매력적으로 느낄 수 있는 권장 온도입니다. 너무 낮으면 향이 죽고, 너무 높으면 알코올 느낌이 도드라질 수 있습니다.',
    example:
      '가벼운 화이트/스파클링: 6–10°C, 대부분의 레드: 14–18°C 정도가 추천 범위입니다.',
  },
]

export function searchGlossary(keyword: string): GlossaryTerm[] {
  const q = keyword.trim().toLowerCase()
  if (!q) return glossaryTerms
  return glossaryTerms.filter(
    (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q),
  )
}

