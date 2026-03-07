export type GlossaryCategory =
  | 'structure'
  | 'aroma'
  | 'winemaking'
  | 'viticulture'
  | 'service'
  | 'faults'
  | 'law'
  | 'other'

/** 언어별 용어명(term) 접미사. ko는 term, en은 termEn, 그 외 termFr 등 */
export type TermLangKey = 'termEn' | 'termFr' | 'termIt' | 'termEs' | 'termDe' | 'termPt' | 'termJa' | 'termZh'
export type DefinitionLangKey = 'definitionEn' | 'definitionFr' | 'definitionIt' | 'definitionEs' | 'definitionDe' | 'definitionPt' | 'definitionJa' | 'definitionZh'

export interface GlossaryTerm {
  slug: string
  term: string
  termEn?: string
  termFr?: string
  termIt?: string
  termEs?: string
  termDe?: string
  termPt?: string
  termJa?: string
  termZh?: string
  category: GlossaryCategory
  definition: string
  definitionEn?: string
  definitionFr?: string
  definitionIt?: string
  definitionEs?: string
  definitionDe?: string
  definitionPt?: string
  definitionJa?: string
  definitionZh?: string
  example?: string
  relatedSlugs?: string[]
}

const LANG_TO_TERM_KEY: Record<string, TermLangKey | undefined> = {
  ko: undefined,
  en: 'termEn',
  fr: 'termFr',
  it: 'termIt',
  es: 'termEs',
  de: 'termDe',
  pt: 'termPt',
  ja: 'termJa',
  zh: 'termZh',
}

const LANG_TO_DEFINITION_KEY: Record<string, DefinitionLangKey | undefined> = {
  ko: undefined,
  en: 'definitionEn',
  fr: 'definitionFr',
  it: 'definitionIt',
  es: 'definitionEs',
  de: 'definitionDe',
  pt: 'definitionPt',
  ja: 'definitionJa',
  zh: 'definitionZh',
}

export function getDisplayTerm(term: GlossaryTerm, lang: string): string {
  if (lang === 'ko') return term.term
  const key = LANG_TO_TERM_KEY[lang]
  const value = key ? term[key] : undefined
  return value ?? term.termEn ?? term.term
}

export function getDisplayDefinition(term: GlossaryTerm, lang: string): string {
  if (lang === 'ko') return term.definition
  const key = LANG_TO_DEFINITION_KEY[lang]
  const value = key ? term[key] : undefined
  return value ?? term.definitionEn ?? term.definition
}

export const glossaryTerms: GlossaryTerm[] = [
  // --- Structure (WSET SAT · Diploma) ---
  {
    slug: 'acidity',
    term: '산도(Acidity)',
    termEn: 'Acidity',
    termFr: 'Acidité',
    termIt: 'Acidità',
    termEs: 'Acidez',
    termDe: 'Säure',
    termPt: 'Acidez',
    termJa: '酸度',
    termZh: '酸度',
    category: 'structure',
    definition:
      '와인이 입안에서 주는 상큼함과 긴장감의 정도. WSET SAT에서는 low–medium(−)–medium–medium(+)–high로 평가. 타트aric, malic, lactic acid 등이 기여.',
    definitionEn:
      'The degree of freshness and tension wine gives in the mouth. WSET SAT rates low–medium(−)–medium–medium(+)–high. Tartaric, malic, lactic acid, etc. contribute.',
    example: 'Riesling, Sauvignon Blanc, Assyrtiko는 일반적으로 높은 산도를 가집니다.',
  },
  {
    slug: 'tannin',
    term: '타닌(Tannin)',
    termEn: 'Tannin',
    termFr: 'Tanin',
    termIt: 'Tanino',
    termEs: 'Tanino',
    termDe: 'Tannin',
    termPt: 'Tanino',
    termJa: 'タンニン',
    termZh: '单宁',
    category: 'structure',
    definition:
      '주로 포도 껍질, 씨, 줄기, 오크에서 오는 폴리페놀. 입안에서 수렴감(astringency)과 거칠기를 줌. 품질 평가 시 타닌의 양(level)과 성질(nature: ripe/smooth vs green/harsh)을 구분.',
    definitionEn:
      'Polyphenols mainly from grape skins, seeds, stems and oak. Give astringency and grip in the mouth. Quality assessment considers level and nature (ripe/smooth vs green/harsh).',
  },
  {
    slug: 'body',
    term: '바디(Body)',
    termEn: 'Body',
    termFr: 'Corps',
    termIt: 'Corpo',
    termEs: 'Cuerpo',
    termDe: 'Körper',
    termPt: 'Corpo',
    termJa: 'ボディ',
    termZh: '酒体',
    category: 'structure',
    definition:
      '입안에서 느껴지는 무게감과 질감. WSET SAT: light–medium(−)–medium–medium(+)–full. 알코올, 당도, 추출물, 글리세린이 복합 작용.',
    definitionEn:
      'Weight and texture perceived in the mouth. WSET SAT: light–medium(−)–medium–medium(+)–full. Alcohol, sweetness, extract and glycerol all contribute.',
    example: 'Barolo, Napa Cabernet는 full body, Mosel Kabinett Riesling은 light body로 평가됩니다.',
  },
  {
    slug: 'dry',
    term: '드라이(Dry)',
    termEn: 'Dry',
    termFr: 'Sec',
    termIt: 'Secco',
    termEs: 'Seco',
    termDe: 'Trocken',
    termPt: 'Seco',
    termJa: 'ドライ',
    termZh: '干型',
    category: 'structure',
    definition:
      '잔당(Residual sugar)이 거의 없어 단맛이 느껴지지 않는 스타일. WSET 당도 스케일: dry–off-dry–medium-dry–medium-sweet–sweet–luscious.',
    definitionEn:
      'Style with little or no residual sugar and no perceived sweetness. WSET sweetness scale: dry–off-dry–medium-dry–medium-sweet–sweet–luscious.',
    example: '대부분의 보르도 레드, Champagne Brut는 dry에 해당합니다.',
  },
  {
    slug: 'residual-sugar',
    term: '잔류당(Residual sugar)',
    termEn: 'Residual sugar',
    termFr: 'Sucre résiduel',
    termIt: 'Zucchero residuo',
    termEs: 'Azúcar residual',
    termDe: 'Restzucker',
    termPt: 'Açúcar residual',
    termJa: '残糖',
    termZh: '残糖',
    category: 'structure',
    definition:
      '발효 후 와인에 남은 당의 양. 당도 스타일(dry/sweet)과 밀접. 측정 단위 g/L. 과일 향과 구분해 실제 당도를 평가해야 함.',
    definitionEn:
      'Sugar remaining in wine after fermentation. Directly linked to dry/sweet style. Measured in g/L. Must be assessed separately from fruity aromas.',
  },
  {
    slug: 'finish',
    term: '피니시(Finish)',
    termEn: 'Finish',
    termFr: 'Finale',
    termIt: 'Finale',
    termEs: 'Final',
    termDe: 'Abgang',
    termPt: 'Final',
    termJa: 'フィニッシュ',
    termZh: '余味',
    category: 'structure',
    definition:
      '삼킨 뒤 향과 맛이 지속되는 길이와 질. WSET SAT: short–medium(−)–medium–medium(+)–long. 품질 지표로 사용.',
    definitionEn:
      'Length and character of aromas and flavours after swallowing. WSET SAT: short–medium(−)–medium–medium(+)–long. Used as a quality indicator.',
  },
  {
    slug: 'extract',
    term: '추출물(Extract)',
    termEn: 'Extract',
    termFr: 'Extrait',
    termIt: 'Estratto',
    termEs: 'Extracto',
    termDe: 'Extrakt',
    termPt: 'Extrato',
    termJa: 'エキス',
    termZh: '浸出物',
    category: 'structure',
    definition:
      '당·알코올을 제외한 고형분(폴리페놀, 미네랄, 산 등). 바디·텍스처·피니시에 기여. 과잉 추출은 거칠고 쓴 맛을 낼 수 있음.',
    definitionEn:
      'Non-sugar, non-alcohol solids (polyphenols, minerals, acids). Contribute to body, texture and finish. Over-extraction can give harsh, bitter flavours.',
  },
  {
    slug: 'mousse',
    term: '무스(Mousse)',
    termEn: 'Mousse',
    termFr: 'Mousse',
    termIt: 'Mousse',
    termEs: 'Mousse',
    termDe: 'Mousse',
    termPt: 'Mousse',
    termJa: 'ムース',
    termZh: '慕斯',
    category: 'structure',
    definition:
      '스파클링 와인에서 거품의 질감. WSET: delicate–creamy–aggressive. 전통 방식은 보통 creamy, 탱크 방식은 더 거칠 수 있음.',
    definitionEn:
      'Texture of the bubbles in sparkling wine. WSET: delicate–creamy–aggressive. Traditional method often creamy; tank method can be coarser.',
  },
  // --- Aroma (SAT Primary / Secondary / Tertiary) ---
  {
    slug: 'primary-aromas',
    term: '1차 향(Primary aromas)',
    termEn: 'Primary aromas',
    termFr: 'Arômes primaires',
    termIt: 'Aromi primari',
    termEs: 'Aromas primarios',
    termDe: 'Primäraromen',
    termPt: 'Aromas primários',
    termJa: '一次香',
    termZh: '一级香气',
    category: 'aroma',
    definition:
      '포도 품종과 발효에서 오는 향. WSET Lexicon: floral, green fruit, citrus, stone fruit, tropical fruit, red fruit, black fruit, herbaceous, herbal, spice, fruit ripeness 등.',
    definitionEn:
      'Aromas from grape variety and fermentation. WSET Lexicon: floral, green fruit, citrus, stone fruit, tropical fruit, red fruit, black fruit, herbaceous, herbal, spice, fruit ripeness, etc.',
  },
  {
    slug: 'secondary-aromas',
    term: '2차 향(Secondary aromas)',
    termEn: 'Secondary aromas',
    termFr: 'Arômes secondaires',
    termIt: 'Aromi secondari',
    termEs: 'Aromas secundarios',
    termDe: 'Sekundäraromen',
    termPt: 'Aromas secundários',
    termJa: '二次香',
    termZh: '二级香气',
    category: 'aroma',
    definition:
      '발효·숙성 과정에서 생기는 향. 효모 유래(biscuit, bread, brioche), 말롤락틱(butter, cream), 오크(vanilla, cloves, cedar, smoke).',
    definitionEn:
      'Aromas from fermentation and maturation. Yeast-derived (biscuit, bread, brioche), malolactic (butter, cream), oak (vanilla, cloves, cedar, smoke).',
  },
  {
    slug: 'tertiary-aromas',
    term: '3차 향(Tertiary aromas)',
    termEn: 'Tertiary aromas',
    termFr: 'Arômes tertiaires',
    termIt: 'Aromi terziari',
    termEs: 'Aromas terciarios',
    termDe: 'Tertiäraromen',
    termPt: 'Aromas terciários',
    termJa: '三次香',
    termZh: '三级香气',
    category: 'aroma',
    definition:
      '병·오크 장기 숙성에서 오는 향. 레드: leather, earth, mushroom, tobacco, forest floor. 화이트: dried fruit, petrol, nuts, honey.',
    definitionEn:
      'Aromas from bottle or oak ageing. Red: leather, earth, mushroom, tobacco, forest floor. White: dried fruit, petrol, nuts, honey.',
  },
  {
    slug: 'development',
    term: '발전 단계(Development)',
    termEn: 'Development',
    termFr: 'Développement',
    termIt: 'Sviluppo',
    termEs: 'Desarrollo',
    termDe: 'Entwicklung',
    termPt: 'Desenvolvimento',
    termJa: '熟成段階',
    termZh: '发展程度',
    category: 'aroma',
    definition:
      'WSET SAT에서 코의 발전 상태. youthful–developing–fully developed–tired/past its best. 병숙성·산화 정도를 나타냄.',
    definitionEn:
      'WSET SAT nose development state: youthful–developing–fully developed–tired/past its best. Reflects bottle age and oxidation.',
  },
  {
    slug: 'reduction',
    term: '리덕션(Reduction)',
    termEn: 'Reduction',
    termFr: 'Réduction',
    termIt: 'Riduzione',
    termEs: 'Reducción',
    termDe: 'Reduktion',
    termPt: 'Redução',
    termJa: '還元',
    termZh: '还原',
    category: 'aroma',
    definition:
      '산소 접촉이 적을 때 나타나는 휘발성 황 화합물. 경미하면 flint, struck match(긍정적); 과하면 rotten egg, cabbage(결함).',
    definitionEn:
      'Volatile sulphur compounds when oxygen exposure is low. Slight: flint, struck match (positive); excessive: rotten egg, cabbage (fault).',
    relatedSlugs: ['reduction-fault'],
  },
  // --- Winemaking (Diploma D1 수준) ---
  {
    slug: 'oak',
    term: '오크 숙성(Oak ageing)',
    termEn: 'Oak ageing',
    termFr: 'Élevage en fût de chêne',
    termIt: 'Affinamento in legno',
    termEs: 'Crianza en roble',
    termDe: 'Ausbau in Eiche',
    termPt: 'Estágio em carvalho',
    termJa: 'オーク熟成',
    termZh: '橡木陈酿',
    category: 'winemaking',
    definition:
      '오크 배럴에서 숙성. 종(프랑스/미국), 제작(toast level), 크기(barrique 225L vs foudre), 신/구에 따라 바닐라, 토스트, 스파이스, 텍스처 변화. Inert vessel(스테인리스, 콘크리트)과 대비.',
    definitionEn:
      'Ageing in oak barrels. Species (French/American), toast level, size (barrique 225L vs foudre), new/used affect vanilla, toast, spice and texture. Contrast with inert vessels (stainless, concrete).',
    example: 'Rioja Gran Reserva, Barossa Shiraz, 오크 숙성 Chardonnay.',
  },
  {
    slug: 'malolactic-conversion',
    term: '말롤락틱 발효(Malolactic conversion, MLC)',
    termEn: 'Malolactic conversion (MLC)',
    termFr: 'Fermentation malolactique',
    termIt: 'Fermentazione malolattica',
    termEs: 'Fermentación maloláctica',
    termDe: 'Malolaktische Gärung',
    termPt: 'Fermentação malolática',
    termJa: 'マロラクティック発酵',
    termZh: '苹果酸-乳酸发酵',
    category: 'winemaking',
    definition:
      '말산을 젖산으로 전환하는 박테리아 발효. 산도 감소, 버터·크림 노트, 미생물 안정화. 대부분의 레드와 많은 화이트에서 수행.',
    definitionEn:
      'Bacterial fermentation converting malic to lactic acid. Lowers acidity, adds butter/cream notes, microbial stability. Used in most reds and many whites.',
    example: '버터리한 Chardonnay, 대부분의 보르도/부르고뉴 레드.',
  },
  {
    slug: 'noble-rot',
    term: '귀부(Botrytis / Noble rot)',
    termEn: 'Botrytis / Noble rot',
    termFr: 'Pourriture noble',
    termIt: 'Muffa nobile',
    termEs: 'Podredumbre noble',
    termDe: 'Edelfäule',
    termPt: 'Podridão nobre',
    termJa: '貴腐',
    termZh: '贵腐',
    category: 'winemaking',
    definition:
      'Botrytis cinerea가 건조 조건에서 포도 껍질을 뚫어 수분 증발·당 농축. 귀부 와인은 당·산·풍미가 집약됨.',
    definitionEn:
      'Botrytis cinerea under dry conditions pierces grape skins, evaporating water and concentrating sugar. Noble rot wines are intense in sugar, acid and flavour.',
    example: 'Sauternes, Tokaji Aszú, Beerenauslese, Trockenbeerenauslese.',
  },
  {
    slug: 'carbonic-maceration',
    term: '탄산 매세레이션(Carbonic maceration)',
    termEn: 'Carbonic maceration',
    termFr: 'Macération carbonique',
    termIt: 'Macerazione carbonica',
    termEs: 'Maceración carbónica',
    termDe: 'Kohlensäuremaischung',
    termPt: 'Maceração carbónica',
    termJa: '炭酸マセラシオン',
    termZh: '二氧化碳浸渍',
    category: 'winemaking',
    definition:
      '온전한 포도 알을 CO2 분위기에서 발효. 내부 알코올 발효로 부드러운 타닌, 베리·바나나 향. 보졸레 누보, 일부 스페인/신세계에서 사용.',
    definitionEn:
      'Fermenting whole grapes in a CO2-rich atmosphere. Intracellular fermentation gives soft tannins, berry and banana aromas. Used in Beaujolais Nouveau, some Spanish and New World wines.',
  },
  {
    slug: 'lees',
    term: '리스(Lees)',
    termEn: 'Lees',
    termFr: 'Lie',
    termIt: 'Feccia',
    termEs: 'Lías',
    termDe: 'Hefesatz',
    termPt: 'Borras',
    termJa: '澱',
    termZh: '酒泥',
    category: 'winemaking',
    definition:
      '발효 후 침전하는 효모·고형물. Sur lie(리스 위에 두기), batonnage(교반)로 텍스처·풍미(bread, cream) 부여. 화이트·스파클링에서 흔함.',
    definitionEn:
      'Sediment of yeast and solids after fermentation. Sur lie ageing and batonnage add texture and flavour (bread, cream). Common in white and sparkling.',
  },
  {
    slug: 'fining',
    term: '피닝(Fining)',
    termEn: 'Fining',
    termFr: 'Collage',
    termIt: 'Chiarifica',
    termEs: 'Clarificación',
    termDe: 'Schönung',
    termPt: 'Colagem',
    termJa: '清澄',
    termZh: '下胶',
    category: 'winemaking',
    definition:
      '불안정 물질을 제거하기 위해 bentonite, egg white, casein, PVPP 등을 넣어 침전·제거하는 정제. 탁도 감소, 타닌 부드럽게 함.',
    definitionEn:
      'Clarification by adding bentonite, egg white, casein, PVPP, etc. to precipitate and remove unstable matter. Reduces haze and can soften tannin.',
  },
  {
    slug: 'filtration',
    term: '여과(Filtration)',
    termEn: 'Filtration',
    termFr: 'Filtration',
    termIt: 'Filtrazione',
    termEs: 'Filtración',
    termDe: 'Filtration',
    termPt: 'Filtração',
    termJa: '濾過',
    termZh: '过滤',
    category: 'winemaking',
    definition:
      'Depth filtration(거친 여과)와 surface/membrane filtration(미세 여과). 미생물·고형물 제거. 과도한 여과는 풍미 손실 우려.',
    definitionEn:
      'Depth (coarse) and surface/membrane (fine) filtration to remove microbes and solids. Over-filtration can strip flavour.',
  },
  {
    slug: 'traditional-method',
    term: '전통 방식(Traditional method)',
    termEn: 'Traditional method',
    termFr: 'Méthode traditionnelle',
    termIt: 'Metodo classico',
    termEs: 'Método tradicional',
    termDe: 'Traditionelle Flaschengärung',
    termPt: 'Método tradicional',
    termJa: '伝統方式',
    termZh: '传统法',
    category: 'winemaking',
    definition:
      'Champagne 방식: 1차 발효 후 병에 tirage, 2차 발효 in bottle, lees ageing, riddling, disgorgement, dosage. Cremant, Cava, Cap Classique 등에서 사용.',
    definitionEn:
      'Champagne method: primary fermentation, then tirage into bottle, second fermentation in bottle, lees ageing, riddling, disgorgement, dosage. Used in Crémant, Cava, Cap Classique, etc.',
  },
  {
    slug: 'dosage',
    term: '도사주(Dosage / Liqueur d\'expédition)',
    termEn: 'Dosage / Liqueur d\'expédition',
    termFr: 'Dosage / Liqueur d\'expédition',
    termIt: 'Dosaggio',
    termEs: 'Dosaje',
    termDe: 'Dosage',
    termPt: 'Dosagem',
    termJa: 'ドサージュ',
    termZh: '补液',
    category: 'winemaking',
    definition:
      '스파클링 와인 디고르주망 후 첨가하는 설탕·와인 혼합액. 최종 당도 결정. Brut nature(무첨가)–Brut–Extra dry–Sec–Demi-sec–Doux.',
    definitionEn:
      'Sugar and wine mixture added after disgorgement to set final sweetness. Brut nature (no dosage)–Brut–Extra dry–Sec–Demi-sec–Doux.',
  },
  {
    slug: 'flor',
    term: '플로르(Flor)',
    termEn: 'Flor',
    termFr: 'Flor',
    termIt: 'Flor',
    termEs: 'Flor',
    termDe: 'Flor',
    termPt: 'Flor',
    termJa: 'フロール',
    termZh: '酒花',
    category: 'winemaking',
    definition:
      'Sherry 제조 시 표면에 생기는 효모 막. Fino/Manzanilla는 flor 아래 biological ageing로 산화 억제, 짠·견과류·빵 향. 15% abv 근처에서 번성.',
    definitionEn:
      'Film of yeast on the surface in Sherry production. Fino/Manzanilla age under flor (biological ageing), limiting oxidation; salty, nutty, bread notes. Flor thrives around 15% abv.',
    example: 'Fino, Manzanilla.',
  },
  {
    slug: 'oxidative-ageing',
    term: '산화 숙성(Oxidative ageing)',
    termEn: 'Oxidative ageing',
    termFr: 'Élevage oxydatif',
    termIt: 'Affinamento ossidativo',
    termEs: 'Crianza oxidativa',
    termDe: 'Oxidativer Ausbau',
    termPt: 'Estágio oxidativo',
    termJa: '酸化熟成',
    termZh: '氧化陈酿',
    category: 'winemaking',
    definition:
      '산소 접촉을 허용한 숙성. Sherry Oloroso, Tawny Port, 일부 Vin Jaune. 견과류, 카라멜, 건과일 노트.',
    definitionEn:
      'Ageing with oxygen exposure. Sherry Oloroso, Tawny Port, some Vin Jaune. Nut, caramel and dried fruit notes.',
  },
  // --- Viticulture (Diploma D1) ---
  {
    slug: 'veraison',
    term: '베레존(Véraison)',
    termEn: 'Véraison',
    termFr: 'Véraison',
    termIt: 'Invaiatura',
    termEs: 'Envero',
    termDe: 'Farbumschlag',
    termPt: 'Pintor',
    termJa: 'ヴェレゾン',
    termZh: '转色期',
    category: 'viticulture',
    definition:
      '포도 알이 자라 색이 변하고 당이 쌓이기 시작하는 시기. 성숙 단계의 시작. 레드 품종은 초록→보라/검정으로 변함.',
    definitionEn:
      'Stage when berries grow, change colour and begin to accumulate sugar; start of ripening. Red varieties turn from green to purple/black.',
  },
  {
    slug: 'phylloxera',
    term: '필록세라(Phylloxera)',
    termEn: 'Phylloxera',
    termFr: 'Phylloxéra',
    termIt: 'Fillossera',
    termEs: 'Filoxera',
    termDe: 'Reblaus',
    termPt: 'Filoxera',
    termJa: 'フィロキセラ',
    termZh: '根瘤蚜',
    category: 'viticulture',
    definition:
      'Vitis vinifera 뿌리를 공격하는 진딧물. 19세기 말 유럽 포도원 대부분 피해. 미국 품종 뿌리대(rootstock)에 접목해 재식으로 대응.',
    definitionEn:
      'Aphid that attacks Vitis vinifera roots. Devastated most European vineyards in the late 19th century. Addressed by grafting onto American rootstocks.',
  },
  {
    slug: 'rootstock',
    term: '뿌리대(Rootstock)',
    termEn: 'Rootstock',
    termFr: 'Porte-greffe',
    termIt: 'Portinnesto',
    termEs: 'Portainjerto',
    termDe: 'Unterlage',
    termPt: 'Porta-enxerto',
    termJa: '台木',
    termZh: '砧木',
    category: 'viticulture',
    definition:
      '접목 시 뿌리 역할을 하는 품종. Phylloxera·선충 저항성, 건조·습지 적응, 활력 조절 등. 예: 101-14, 3309, SO4.',
    definitionEn:
      'Variety used as the root system when grafting. Provides phylloxera/nematode resistance, drought/wet adaptation, vigour control. E.g. 101-14, 3309, SO4.',
  },
  {
    slug: 'canopy-management',
    term: '캐노피 관리(Canopy management)',
    termEn: 'Canopy management',
    termFr: 'Conduite du feuillage',
    termIt: 'Gestione della chioma',
    termEs: 'Manejo del dosel',
    termDe: 'Laubwandmanagement',
    termPt: 'Maneio da copa',
    termJa: '樹冠管理',
    termZh: '树冠管理',
    category: 'viticulture',
    definition:
      '잎·순의 배치로 햇빛 노출, 통풍, 병 관리. Trellising, pruning(spur/cane), leaf removal, hedging. 품질·스타일·수확량에 영향.',
    definitionEn:
      'Arrangement of leaves and shoots for light exposure, airflow and disease control. Trellising, pruning (spur/cane), leaf removal, hedging. Affects quality, style and yield.',
  },
  {
    slug: 'terroir',
    term: '테루아르(Terroir)',
    termEn: 'Terroir',
    termFr: 'Terroir',
    termIt: 'Terroir',
    termEs: 'Terruño',
    termDe: 'Terroir',
    termPt: 'Terroir',
    termJa: 'テロワール',
    termZh: '风土',
    category: 'viticulture',
    definition:
      '포도재배지의 토양, 지형, 기후, 인간 요소가 복합적으로 작용해 와인에 주는 고유한 성격. 보르도·부르고뉴 등에서 품질 설명의 핵심 개념.',
    definitionEn:
      'The combined effect of soil, topography, climate and human factors on a vineyard, giving wine its distinct character. Central to quality in Bordeaux, Burgundy, etc.',
  },
  {
    slug: 'biodynamic',
    term: '생역동농법(Biodynamic)',
    termEn: 'Biodynamic',
    termFr: 'Biodynamie',
    termIt: 'Biodinamica',
    termEs: 'Biodinámica',
    termDe: 'Biodynamik',
    termPt: 'Biodinâmica',
    termJa: 'ビオディナミ',
    termZh: '生物动力法',
    category: 'viticulture',
    definition:
      '유기농 위에 루돌프 슈타이너의 생역동 원리(우주 리듬, 준비제)를 적용. Demeter 등 인증. 일부 명품 포도원에서 채택.',
    definitionEn:
      'Rudolf Steiner\'s biodynamic principles (cosmic rhythms, preparations) applied on top of organic farming. Demeter certification. Adopted by some premium estates.',
  },
  // --- Service ---
  {
    slug: 'decanting',
    term: '디캔팅(Decanting)',
    termEn: 'Decanting',
    termFr: 'Décantation',
    termIt: 'Decantazione',
    termEs: 'Decantación',
    termDe: 'Dekantieren',
    termPt: 'Decantação',
    termJa: 'デカンタ',
    termZh: '醒酒',
    category: 'service',
    definition:
      '병에서 다른 용기로 옮겨 산소 노출 또는 침전물 분리. 젊은 풀바디 레드(탄닌 부드럽게), 오래된 레드(침전 제거)에 사용.',
    definitionEn:
      'Pouring from bottle into another vessel for aeration or to separate sediment. Used for young full-bodied reds (soften tannin) and older reds (remove sediment).',
  },
  {
    slug: 'serving-temperature',
    term: '서빙 온도(Serving temperature)',
    termEn: 'Serving temperature',
    termFr: 'Température de service',
    termIt: 'Temperatura di servizio',
    termEs: 'Temperatura de servicio',
    termDe: 'Serviertemperatur',
    termPt: 'Temperatura de serviço',
    termJa: 'サーブ温度',
    termZh: '侍酒温度',
    category: 'service',
    definition:
      'WSET 가이드: 가벼운 화이트/스파클링 6–10°C, 풀바디 화이트 10–13°C, 라이트 레드 13°C, 풀바디 레드 15–18°C. 포트/리큐어 15–18°C.',
    definitionEn:
      'WSET guide: light white/sparkling 6–10°C, full-bodied white 10–13°C, light red 13°C, full-bodied red 15–18°C. Port/liqueur 15–18°C.',
  },
  {
    slug: 'glassware',
    term: '글라스웨어(Glassware)',
    termEn: 'Glassware',
    termFr: 'Verre',
    termIt: 'Bicchiere',
    termEs: 'Copa',
    termDe: 'Glas',
    termPt: 'Copa',
    termJa: 'グラス',
    termZh: '杯具',
    category: 'service',
    definition:
      '형태가 향 휘발·집중에 영향. 레드용 큰 볼, 화이트/스파클링용 작은 볼. ISO tasting glass는 중립적 평가용.',
    definitionEn:
      'Shape affects release and concentration of aromas. Large bowl for red, smaller for white/sparkling. ISO tasting glass for neutral assessment.',
  },
  // --- Faults (WSET L3/Diploma) ---
  {
    slug: 'cork-taint',
    term: '코르크 오염(TCA / Cork taint)',
    termEn: 'TCA / Cork taint',
    termFr: 'Goût de bouchon',
    termIt: 'Sentore di tappo',
    termEs: 'Gusto a corcho',
    termDe: 'Korkgeschmack',
    termPt: 'Sabor a rolha',
    termJa: 'コルク汚染',
    termZh: '木塞污染',
    category: 'faults',
    definition:
      '2,4,6-trichloroanisole(TCA) 등으로 인한 곰팡이·습지 냄새. 코르크, 나무, 창고 오염에서 발생. 와인을 평평하고 과일 향을 죽게 함.',
    definitionEn:
      'Mouldy, damp aromas from 2,4,6-trichloroanisole (TCA) etc. From cork, wood or warehouse contamination. Flattens wine and dulls fruit.',
  },
  {
    slug: 'brettanomyces',
    term: '브레타노마이세스(Brettanomyces)',
    termEn: 'Brettanomyces',
    termFr: 'Brettanomyces',
    termIt: 'Brettanomyces',
    termEs: 'Brettanomyces',
    termDe: 'Brettanomyces',
    termPt: 'Brettanomyces',
    termJa: 'ブレタノマイセス',
    termZh: '酒香酵母',
    category: 'faults',
    definition:
      '효모로 인한 결함. 소량이면 leather, spice(일부 지역에서 허용); 과다 시 band-aid, barnyard, metallic. 위생·SO2 관리로 억제.',
    definitionEn:
      'Yeast-related fault. In small amounts: leather, spice (accepted in some regions); excess: band-aid, barnyard, metallic. Controlled by hygiene and SO2.',
  },
  {
    slug: 'volatile-acidity',
    term: '휘발산(Volatile acidity, VA)',
    termEn: 'Volatile acidity (VA)',
    termFr: 'Acidité volatile',
    termIt: 'Acidità volatile',
    termEs: 'Acidez volátil',
    termDe: 'Flüchtige Säure',
    termPt: 'Acidez volátil',
    termJa: '揮発酸',
    termZh: '挥发酸',
    category: 'faults',
    definition:
      '아세트산 등 휘발성 산. 소량이면 복잡함; 과다 시 vinegar, nail polish. Acetobacter 등에 의함. 법적 한도 존재.',
    definitionEn:
      'Volatile acids such as acetic. In small amounts can add complexity; in excess: vinegar, nail polish. From Acetobacter etc. Legal limits apply.',
  },
  {
    slug: 'oxidation-fault',
    term: '산화 결함(Oxidation)',
    termEn: 'Oxidation',
    termFr: 'Oxydation',
    termIt: 'Ossidazione',
    termEs: 'Oxidación',
    termDe: 'Oxidation',
    termPt: 'Oxidação',
    termJa: '酸化',
    termZh: '氧化',
    category: 'faults',
    definition:
      '과도한 산소 노출. 색 갈변(화이트), 향·맛의 신선함 상실, sherry/nutty. 저장 불량, 마개 불량 등 원인.',
    definitionEn:
      'Excessive oxygen exposure. Browning (white), loss of freshness in aroma and flavour, sherry/nutty character. Caused by poor storage, faulty closure, etc.',
  },
  {
    slug: 'reduction-fault',
    term: '리덕션 결함(Reduction)',
    termEn: 'Reduction (fault)',
    termFr: 'Réduction (défaut)',
    termIt: 'Riduzione (difetto)',
    termEs: 'Reducción (defecto)',
    termDe: 'Reduktion (Fehler)',
    termPt: 'Redução (defeito)',
    termJa: '還元臭',
    termZh: '还原味',
    category: 'faults',
    definition:
      '산소 부족 상태에서 휘발성 황 화합물. 경미: flint, match; 과다: rotten egg, cabbage, rubber. 디캔팅·교반으로 일부 완화 가능.',
    definitionEn:
      'Volatile sulphur compounds in low-oxygen conditions. Slight: flint, match; excessive: rotten egg, cabbage, rubber. Can be partly relieved by decanting or stirring.',
  },
  // --- Law (WSET L3 · Diploma) ---
  {
    slug: 'aoc',
    term: 'AOC / AOP(Appellation d\'origine contrôlée / protégée)',
    termEn: 'AOC / AOP',
    termFr: 'AOC / AOP',
    termIt: 'AOC / AOP',
    termEs: 'AOC / AOP',
    termDe: 'AOC / AOP',
    termPt: 'AOC / AOP',
    termJa: 'AOC / AOP',
    termZh: 'AOC / AOP',
    category: 'law',
    definition:
      '프랑스·EU 원산지 통제 명칭. 지역, 품종, 수확량, 재배·양조 관행 규정. 품질·정체성 보장의 기초.',
    definitionEn:
      'French/EU protected designation of origin. Regulates region, varieties, yields, viticultural and winemaking practices. Basis for quality and identity.',
    example: 'Bordeaux AOC, Chablis AOC, Champagne AOC.',
  },
  {
    slug: 'docg',
    term: 'DOCG / DOC(Denominazione di origine controllata e garantita)',
    termEn: 'DOCG / DOC',
    termFr: 'DOCG / DOC',
    termIt: 'DOCG / DOC',
    termEs: 'DOCG / DOC',
    termDe: 'DOCG / DOC',
    termPt: 'DOCG / DOC',
    termJa: 'DOCG / DOC',
    termZh: 'DOCG / DOC',
    category: 'law',
    definition:
      '이탈리아 최상위 원산지 명칭. DOC보다 엄격한 규정·품질 검사. Riserva, Classico 등 부가 규정과 함께 사용.',
    definitionEn:
      'Italy\'s top-tier designation of origin. Stricter rules and quality checks than DOC. Used with terms like Riserva, Classico.',
    example: 'Barolo DOCG, Chianti Classico DOCG, Brunello di Montalcino DOCG.',
  },
  {
    slug: 'pradikat',
    term: '프레디카트(Prädikat)',
    termEn: 'Prädikat',
    termFr: 'Prädikat',
    termIt: 'Prädikat',
    termEs: 'Prädikat',
    termDe: 'Prädikat',
    termPt: 'Prädikat',
    termJa: 'プレディカーツ',
    termZh: '等级',
    category: 'law',
    definition:
      '독일·오스트리아 Qualitätswein에서 당도(숙성도) 구분. Kabinett–Spätlese–Auslese–Beerenauslese–Trockenbeerenauslese–Eiswein. 각 구역별 최소 must weight 규정.',
    definitionEn:
      'German/Austrian Qualitätswein sugar (ripeness) levels: Kabinett–Spätlese–Auslese–Beerenauslese–Trockenbeerenauslese–Eiswein. Minimum must weight per region.',
    example: 'Mosel Kabinett, Rheingau Spätlese.',
  },
  {
    slug: 'grand-cru',
    term: '그랑 크뤼(Grand cru)',
    termEn: 'Grand cru',
    termFr: 'Grand cru',
    termIt: 'Grand cru',
    termEs: 'Grand cru',
    termDe: 'Grand cru',
    termPt: 'Grand cru',
    termJa: 'グラン・クリュ',
    termZh: '特级园',
    category: 'law',
    definition:
      '프랑스에서 최고 등급 포도원/지역. 부르고뉴는 특정 climat 명명, 보르도 메도크는 1855 classement, 샹파뉴는 마을·포도원 등급.',
    definitionEn:
      'Top vineyard/area classification in France. Burgundy: named climats; Bordeaux Médoc: 1855 classification; Champagne: village and vineyard grades.',
  },
  {
    slug: 'reserva',
    term: '레세르바 / Reserva / Riserva',
    termEn: 'Reserva / Riserva',
    termFr: 'Reserva / Riserva',
    termIt: 'Riserva',
    termEs: 'Reserva',
    termDe: 'Reserva / Riserva',
    termPt: 'Reserva',
    termJa: 'レセルバ / リゼルヴァ',
    termZh: '陈酿',
    category: 'law',
    definition:
      '스페인: 레드 최소 3년(오크+병 1년 이상), 화이트 2년. 이탈리아: DOC/DOCG별 최소 숙성 기간. 포르투갈 등에서도 사용.',
    definitionEn:
      'Spain: red min. 3 years (1+ in oak and bottle), white 2 years. Italy: minimum ageing per DOC/DOCG. Also used in Portugal, etc.',
  },
  // --- Other ---
  {
    slug: 'sat',
    term: 'SAT(Systematic Approach to Tasting)',
    termEn: 'Systematic Approach to Tasting (SAT)',
    termFr: 'SAT (Approche systématique de la dégustation)',
    termIt: 'SAT (Approccio sistematico alla degustazione)',
    termEs: 'SAT (Enfoque sistemático de cata)',
    termDe: 'SAT (Systematische Verkostung)',
    termPt: 'SAT (Abordagem sistemática à prova)',
    termJa: 'SAT（系統的試飲法）',
    termZh: 'SAT系统品鉴法',
    category: 'other',
    definition:
      'WSET의 체계적 시음 프레임워크. Appearance(clarity, intensity, colour), Nose(condition, intensity, development, characteristics), Palate(sweetness, acidity, tannin, alcohol, body, finish), Conclusions(quality, readiness).',
    definitionEn:
      'WSET\'s systematic tasting framework: Appearance (clarity, intensity, colour), Nose (condition, intensity, development, characteristics), Palate (sweetness, acidity, tannin, alcohol, body, finish), Conclusions (quality, readiness).',
  },
  {
    slug: 'varietal',
    term: '품종(Varietal)',
    termEn: 'Varietal',
    termFr: 'Cépage',
    termIt: 'Vitigno',
    termEs: 'Variedad',
    termDe: 'Rebsorte',
    termPt: 'Castas',
    termJa: '品種',
    termZh: '品种',
    category: 'other',
    definition:
      '와인을 만드는 포도 품종. Vitis vinifera가 대부분. 단일 품종 와인(varietal wine)은 일정 비율 이상 해당 품종 사용 시 라벨에 표기.',
    definitionEn:
      'Grape variety used to make wine. Mostly Vitis vinifera. Varietal wine is labelled when a minimum proportion of that variety is used.',
  },
]

function termMatches(term: GlossaryTerm, q: string): boolean {
  const fields = [
    term.term,
    term.termEn,
    term.definition,
    term.definitionEn,
    term.termFr,
    term.termIt,
    term.termEs,
    term.termDe,
    term.termPt,
    term.termJa,
    term.termZh,
  ]
  return fields.some((v) => typeof v === 'string' && v.toLowerCase().includes(q))
}

export function searchGlossary(keyword: string): GlossaryTerm[] {
  const q = keyword.trim().toLowerCase()
  if (!q) return glossaryTerms
  return glossaryTerms.filter((t) => termMatches(t, q))
}

