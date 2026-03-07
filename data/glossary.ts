export type GlossaryCategory =
  | 'structure'
  | 'aroma'
  | 'winemaking'
  | 'viticulture'
  | 'service'
  | 'faults'
  | 'law'
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
  // --- Structure (WSET SAT · Diploma) ---
  {
    slug: 'acidity',
    term: '산도(Acidity)',
    category: 'structure',
    definition:
      '와인이 입안에서 주는 상큼함과 긴장감의 정도. WSET SAT에서는 low–medium(−)–medium–medium(+)–high로 평가. 타트aric, malic, lactic acid 등이 기여.',
    example: 'Riesling, Sauvignon Blanc, Assyrtiko는 일반적으로 높은 산도를 가집니다.',
  },
  {
    slug: 'tannin',
    term: '타닌(Tannin)',
    category: 'structure',
    definition:
      '주로 포도 껍질, 씨, 줄기, 오크에서 오는 폴리페놀. 입안에서 수렴감(astringency)과 거칠기를 줌. 품질 평가 시 타닌의 양(level)과 성질(nature: ripe/smooth vs green/harsh)을 구분.',
  },
  {
    slug: 'body',
    term: '바디(Body)',
    category: 'structure',
    definition:
      '입안에서 느껴지는 무게감과 질감. WSET SAT: light–medium(−)–medium–medium(+)–full. 알코올, 당도, 추출물, 글리세린이 복합 작용.',
    example: 'Barolo, Napa Cabernet는 full body, Mosel Kabinett Riesling은 light body로 평가됩니다.',
  },
  {
    slug: 'dry',
    term: '드라이(Dry)',
    category: 'structure',
    definition:
      '잔당(Residual sugar)이 거의 없어 단맛이 느껴지지 않는 스타일. WSET 당도 스케일: dry–off-dry–medium-dry–medium-sweet–sweet–luscious.',
    example: '대부분의 보르도 레드, Champagne Brut는 dry에 해당합니다.',
  },
  {
    slug: 'residual-sugar',
    term: '잔류당(Residual sugar)',
    category: 'structure',
    definition:
      '발효 후 와인에 남은 당의 양. 당도 스타일(dry/sweet)과 밀접. 측정 단위 g/L. 과일 향과 구분해 실제 당도를 평가해야 함.',
  },
  {
    slug: 'finish',
    term: '피니시(Finish)',
    category: 'structure',
    definition:
      '삼킨 뒤 향과 맛이 지속되는 길이와 질. WSET SAT: short–medium(−)–medium–medium(+)–long. 품질 지표로 사용.',
  },
  {
    slug: 'extract',
    term: '추출물(Extract)',
    category: 'structure',
    definition:
      '당·알코올을 제외한 고형분(폴리페놀, 미네랄, 산 등). 바디·텍스처·피니시에 기여. 과잉 추출은 거칠고 쓴 맛을 낼 수 있음.',
  },
  {
    slug: 'mousse',
    term: '무스(Mousse)',
    category: 'structure',
    definition:
      '스파클링 와인에서 거품의 질감. WSET: delicate–creamy–aggressive. 전통 방식은 보통 creamy, 탱크 방식은 더 거칠 수 있음.',
  },
  // --- Aroma (SAT Primary / Secondary / Tertiary) ---
  {
    slug: 'primary-aromas',
    term: '1차 향(Primary aromas)',
    category: 'aroma',
    definition:
      '포도 품종과 발효에서 오는 향. WSET Lexicon: floral, green fruit, citrus, stone fruit, tropical fruit, red fruit, black fruit, herbaceous, herbal, spice, fruit ripeness 등.',
  },
  {
    slug: 'secondary-aromas',
    term: '2차 향(Secondary aromas)',
    category: 'aroma',
    definition:
      '발효·숙성 과정에서 생기는 향. 효모 유래(biscuit, bread, brioche), 말롤락틱(butter, cream), 오크(vanilla, cloves, cedar, smoke).',
  },
  {
    slug: 'tertiary-aromas',
    term: '3차 향(Tertiary aromas)',
    category: 'aroma',
    definition:
      '병·오크 장기 숙성에서 오는 향. 레드: leather, earth, mushroom, tobacco, forest floor. 화이트: dried fruit, petrol, nuts, honey.',
  },
  {
    slug: 'development',
    term: '발전 단계(Development)',
    category: 'aroma',
    definition:
      'WSET SAT에서 코의 발전 상태. youthful–developing–fully developed–tired/past its best. 병숙성·산화 정도를 나타냄.',
  },
  {
    slug: 'reduction',
    term: '리덕션(Reduction)',
    category: 'aroma',
    definition:
      '산소 접촉이 적을 때 나타나는 휘발성 황 화합물. 경미하면 flint, struck match(긍정적); 과하면 rotten egg, cabbage(결함).',
    relatedSlugs: ['reduction-fault'],
  },
  // --- Winemaking (Diploma D1 수준) ---
  {
    slug: 'oak',
    term: '오크 숙성(Oak ageing)',
    category: 'winemaking',
    definition:
      '오크 배럴에서 숙성. 종(프랑스/미국), 제작(toast level), 크기(barrique 225L vs foudre), 신/구에 따라 바닐라, 토스트, 스파이스, 텍스처 변화. Inert vessel(스테인리스, 콘크리트)과 대비.',
    example: 'Rioja Gran Reserva, Barossa Shiraz, 오크 숙성 Chardonnay.',
  },
  {
    slug: 'malolactic-conversion',
    term: '말롤락틱 발효(Malolactic conversion, MLC)',
    category: 'winemaking',
    definition:
      '말산을 젖산으로 전환하는 박테리아 발효. 산도 감소, 버터·크림 노트, 미생물 안정화. 대부분의 레드와 많은 화이트에서 수행.',
    example: '버터리한 Chardonnay, 대부분의 보르도/부르고뉴 레드.',
  },
  {
    slug: 'noble-rot',
    term: '귀부(Botrytis / Noble rot)',
    category: 'winemaking',
    definition:
      'Botrytis cinerea가 건조 조건에서 포도 껍질을 뚫어 수분 증발·당 농축. 귀부 와인은 당·산·풍미가 집약됨.',
    example: 'Sauternes, Tokaji Aszú, Beerenauslese, Trockenbeerenauslese.',
  },
  {
    slug: 'carbonic-maceration',
    term: '탄산 매세레이션(Carbonic maceration)',
    category: 'winemaking',
    definition:
      '온전한 포도 알을 CO2 분위기에서 발효. 내부 알코올 발효로 부드러운 타닌, 베리·바나나 향. 보졸레 누보, 일부 스페인/신세계에서 사용.',
  },
  {
    slug: 'lees',
    term: '리스(Lees)',
    category: 'winemaking',
    definition:
      '발효 후 침전하는 효모·고형물. Sur lie(리스 위에 두기), batonnage(교반)로 텍스처·풍미(bread, cream) 부여. 화이트·스파클링에서 흔함.',
  },
  {
    slug: 'fining',
    term: '피닝(Fining)',
    category: 'winemaking',
    definition:
      '불안정 물질을 제거하기 위해 bentonite, egg white, casein, PVPP 등을 넣어 침전·제거하는 정제. 탁도 감소, 타닌 부드럽게 함.',
  },
  {
    slug: 'filtration',
    term: '여과(Filtration)',
    category: 'winemaking',
    definition:
      'Depth filtration(거친 여과)와 surface/membrane filtration(미세 여과). 미생물·고형물 제거. 과도한 여과는 풍미 손실 우려.',
  },
  {
    slug: 'traditional-method',
    term: '전통 방식(Traditional method)',
    category: 'winemaking',
    definition:
      'Champagne 방식: 1차 발효 후 병에 tirage, 2차 발효 in bottle, lees ageing, riddling, disgorgement, dosage. Cremant, Cava, Cap Classique 등에서 사용.',
  },
  {
    slug: 'dosage',
    term: '도사주(Dosage / Liqueur d\'expédition)',
    category: 'winemaking',
    definition:
      '스파클링 와인 디고르주망 후 첨가하는 설탕·와인 혼합액. 최종 당도 결정. Brut nature(무첨가)–Brut–Extra dry–Sec–Demi-sec–Doux.',
  },
  {
    slug: 'flor',
    term: '플로르(Flor)',
    category: 'winemaking',
    definition:
      'Sherry 제조 시 표면에 생기는 효모 막. Fino/Manzanilla는 flor 아래 biological ageing로 산화 억제, 짠·견과류·빵 향. 15% abv 근처에서 번성.',
    example: 'Fino, Manzanilla.',
  },
  {
    slug: 'oxidative-ageing',
    term: '산화 숙성(Oxidative ageing)',
    category: 'winemaking',
    definition:
      '산소 접촉을 허용한 숙성. Sherry Oloroso, Tawny Port, 일부 Vin Jaune. 견과류, 카라멜, 건과일 노트.',
  },
  // --- Viticulture (Diploma D1) ---
  {
    slug: 'veraison',
    term: '베레존(Véraison)',
    category: 'viticulture',
    definition:
      '포도 알이 자라 색이 변하고 당이 쌓이기 시작하는 시기. 성숙 단계의 시작. 레드 품종은 초록→보라/검정으로 변함.',
  },
  {
    slug: 'phylloxera',
    term: '필록세라(Phylloxera)',
    category: 'viticulture',
    definition:
      'Vitis vinifera 뿌리를 공격하는 진딧물. 19세기 말 유럽 포도원 대부분 피해. 미국 품종 뿌리대(rootstock)에 접목해 재식으로 대응.',
  },
  {
    slug: 'rootstock',
    term: '뿌리대(Rootstock)',
    category: 'viticulture',
    definition:
      '접목 시 뿌리 역할을 하는 품종. Phylloxera·선충 저항성, 건조·습지 적응, 활력 조절 등. 예: 101-14, 3309, SO4.',
  },
  {
    slug: 'canopy-management',
    term: '캐노피 관리(Canopy management)',
    category: 'viticulture',
    definition:
      '잎·순의 배치로 햇빛 노출, 통풍, 병 관리. Trellising, pruning(spur/cane), leaf removal, hedging. 품질·스타일·수확량에 영향.',
  },
  {
    slug: 'terroir',
    term: '테루아르(Terroir)',
    category: 'viticulture',
    definition:
      '포도재배지의 토양, 지형, 기후, 인간 요소가 복합적으로 작용해 와인에 주는 고유한 성격. 보르도·부르고뉴 등에서 품질 설명의 핵심 개념.',
  },
  {
    slug: 'biodynamic',
    term: '생역동농법(Biodynamic)',
    category: 'viticulture',
    definition:
      '유기농 위에 루돌프 슈타이너의 생역동 원리(우주 리듬, 준비제)를 적용. Demeter 등 인증. 일부 명품 포도원에서 채택.',
  },
  // --- Service ---
  {
    slug: 'decanting',
    term: '디캔팅(Decanting)',
    category: 'service',
    definition:
      '병에서 다른 용기로 옮겨 산소 노출 또는 침전물 분리. 젊은 풀바디 레드(탄닌 부드럽게), 오래된 레드(침전 제거)에 사용.',
  },
  {
    slug: 'serving-temperature',
    term: '서빙 온도(Serving temperature)',
    category: 'service',
    definition:
      'WSET 가이드: 가벼운 화이트/스파클링 6–10°C, 풀바디 화이트 10–13°C, 라이트 레드 13°C, 풀바디 레드 15–18°C. 포트/리큐어 15–18°C.',
  },
  {
    slug: 'glassware',
    term: '글라스웨어(Glassware)',
    category: 'service',
    definition:
      '형태가 향 휘발·집중에 영향. 레드용 큰 볼, 화이트/스파클링용 작은 볼. ISO tasting glass는 중립적 평가용.',
  },
  // --- Faults (WSET L3/Diploma) ---
  {
    slug: 'cork-taint',
    term: '코르크 오염(TCA / Cork taint)',
    category: 'faults',
    definition:
      '2,4,6-trichloroanisole(TCA) 등으로 인한 곰팡이·습지 냄새. 코르크, 나무, 창고 오염에서 발생. 와인을 평평하고 과일 향을 죽게 함.',
  },
  {
    slug: 'brettanomyces',
    term: '브레타노마이세스(Brettanomyces)',
    category: 'faults',
    definition:
      '효모로 인한 결함. 소량이면 leather, spice(일부 지역에서 허용); 과다 시 band-aid, barnyard, metallic. 위생·SO2 관리로 억제.',
  },
  {
    slug: 'volatile-acidity',
    term: '휘발산(Volatile acidity, VA)',
    category: 'faults',
    definition:
      '아세트산 등 휘발성 산. 소량이면 복잡함; 과다 시 vinegar, nail polish. Acetobacter 등에 의함. 법적 한도 존재.',
  },
  {
    slug: 'oxidation-fault',
    term: '산화 결함(Oxidation)',
    category: 'faults',
    definition:
      '과도한 산소 노출. 색 갈변(화이트), 향·맛의 신선함 상실, sherry/nutty. 저장 불량, 마개 불량 등 원인.',
  },
  {
    slug: 'reduction-fault',
    term: '리덕션 결함(Reduction)',
    category: 'faults',
    definition:
      '산소 부족 상태에서 휘발성 황 화합물. 경미: flint, match; 과다: rotten egg, cabbage, rubber. 디캔팅·교반으로 일부 완화 가능.',
  },
  // --- Law (WSET L3 · Diploma) ---
  {
    slug: 'aoc',
    term: 'AOC / AOP(Appellation d\'origine contrôlée / protégée)',
    category: 'law',
    definition:
      '프랑스·EU 원산지 통제 명칭. 지역, 품종, 수확량, 재배·양조 관행 규정. 품질·정체성 보장의 기초.',
    example: 'Bordeaux AOC, Chablis AOC, Champagne AOC.',
  },
  {
    slug: 'docg',
    term: 'DOCG / DOC(Denominazione di origine controllata e garantita)',
    category: 'law',
    definition:
      '이탈리아 최상위 원산지 명칭. DOC보다 엄격한 규정·품질 검사. Riserva, Classico 등 부가 규정과 함께 사용.',
    example: 'Barolo DOCG, Chianti Classico DOCG, Brunello di Montalcino DOCG.',
  },
  {
    slug: 'pradikat',
    term: '프레디카트(Prädikat)',
    category: 'law',
    definition:
      '독일·오스트리아 Qualitätswein에서 당도(숙성도) 구분. Kabinett–Spätlese–Auslese–Beerenauslese–Trockenbeerenauslese–Eiswein. 각 구역별 최소 must weight 규정.',
    example: 'Mosel Kabinett, Rheingau Spätlese.',
  },
  {
    slug: 'grand-cru',
    term: '그랑 크뤼(Grand cru)',
    category: 'law',
    definition:
      '프랑스에서 최고 등급 포도원/지역. 부르고뉴는 특정 climat 명명, 보르도 메도크는 1855 classement, 샹파뉴는 마을·포도원 등급.',
  },
  {
    slug: 'reserva',
    term: '레세르바 / Reserva / Riserva',
    category: 'law',
    definition:
      '스페인: 레드 최소 3년(오크+병 1년 이상), 화이트 2년. 이탈리아: DOC/DOCG별 최소 숙성 기간. 포르투갈 등에서도 사용.',
  },
  // --- Other ---
  {
    slug: 'sat',
    term: 'SAT(Systematic Approach to Tasting)',
    category: 'other',
    definition:
      'WSET의 체계적 시음 프레임워크. Appearance(clarity, intensity, colour), Nose(condition, intensity, development, characteristics), Palate(sweetness, acidity, tannin, alcohol, body, finish), Conclusions(quality, readiness).',
  },
  {
    slug: 'varietal',
    term: '품종(Varietal)',
    category: 'other',
    definition:
      '와인을 만드는 포도 품종. Vitis vinifera가 대부분. 단일 품종 와인(varietal wine)은 일정 비율 이상 해당 품종 사용 시 라벨에 표기.',
  },
]

export function searchGlossary(keyword: string): GlossaryTerm[] {
  const q = keyword.trim().toLowerCase()
  if (!q) return glossaryTerms
  return glossaryTerms.filter(
    (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q),
  )
}

