export type SatAppearanceIntensity = 'pale' | 'medium' | 'deep'
export type SatAppearanceColor =
  | 'lemon'
  | 'gold'
  | 'amber'
  | 'pink'
  | 'salmon'
  | 'ruby'
  | 'garnet'
  | 'tawny'

export type SatNoseIntensity = 'light' | 'medium(-)' | 'medium' | 'medium(+)' | 'pronounced'

export type SatStructuralLevel = 'low' | 'medium(-)' | 'medium' | 'medium(+)' | 'high'

export type SatSweetnessLevel = 'dry' | 'off-dry' | 'medium-dry' | 'medium-sweet' | 'sweet' | 'lusciously sweet'

export type SatAlcoholLevel = 'low' | 'medium' | 'high'

export type SatFlavorCategory =
  | 'citrus'
  | 'stone_fruit'
  | 'tropical'
  | 'red_fruit'
  | 'black_fruit'
  | 'dried_fruit'
  | 'floral'
  | 'herbal'
  | 'herbaceous'
  | 'spice'
  | 'oak'
  | 'earth'
  | 'mineral'
  | 'autolytic'
  | 'other'

export type SatQualityLevel = 'faulty' | 'poor' | 'acceptable' | 'good' | 'very good' | 'outstanding'

export interface SatAppearance {
  clarity: 'clear' | 'hazy'
  intensity: SatAppearanceIntensity
  color: SatAppearanceColor
  other?: string[]
}

export interface SatNose {
  condition: 'clean' | 'unclean'
  intensity: SatNoseIntensity
  aromaCategories: SatFlavorCategory[]
  other?: string[]
}

export interface SatPalate {
  sweetness: SatSweetnessLevel
  acidity: SatStructuralLevel
  tannin?: SatStructuralLevel
  alcohol: SatAlcoholLevel
  body: SatStructuralLevel
  flavorIntensity: SatNoseIntensity
  flavorCategories: SatFlavorCategory[]
  finish: 'short' | 'medium' | 'long' | 'very long'
}

export interface SatConclusion {
  qualityLevel: SatQualityLevel
  drinkWindow?: string
  potential?: 'no_potential' | 'short_term' | 'medium_term' | 'long_term'
}

export interface SatTastingNote {
  appearance: SatAppearance
  nose: SatNose
  palate: SatPalate
  conclusion: SatConclusion
  summary?: string
}

export function describeQuality(level: SatQualityLevel): string {
  switch (level) {
    case 'poor':
      return '결함은 없지만 균형과 집중도가 떨어지는 와인입니다.'
    case 'acceptable':
      return '일상적인 소비에 적합한, 균형 잡힌 와인입니다.'
    case 'good':
      return '집중도와 구조가 좋은, 안정적인 퀄리티의 와인입니다.'
    case 'very good':
      return '복합성과 길이가 뛰어난, 높은 퀄리티의 와인입니다.'
    case 'outstanding':
      return '구조, 복합성, 길이 모두에서 탁월한 와인입니다.'
    case 'faulty':
      return '산화, 코르크, 휘발산 등 결함이 의심되는 상태입니다.'
    default:
      return ''
  }
}

