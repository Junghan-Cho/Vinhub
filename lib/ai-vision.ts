import type { SatTastingNote } from './sat-schema'

export type AiVisionInputType = 'label' | 'bottle' | 'color'

export interface AiVisionResult {
  id: string
  inputType: AiVisionInputType
  detectedText?: string
  detectedLabels?: string[]
  estimatedStyle?: string
  confidence: number
  suggestedSat?: Partial<SatTastingNote>
}

export const exampleVisionResults: AiVisionResult[] = [
  {
    id: 'cab-label',
    inputType: 'label',
    detectedText: 'Cabernet Sauvignon · Margaux',
    detectedLabels: ['Château Margaux', 'Bordeaux', 'Grand Vin'],
    estimatedStyle: 'Structured, ageworthy left-bank Bordeaux',
    confidence: 0.92,
    suggestedSat: {
      appearance: {
        clarity: 'clear',
        intensity: 'deep',
        color: 'ruby',
      },
      palate: {
        sweetness: 'dry',
        acidity: 'medium(+)',
        tannin: 'high',
        alcohol: 'medium',
        body: 'medium(+)',
        flavorIntensity: 'medium(+)',
        flavorCategories: ['black_fruit', 'oak', 'spice'],
        finish: 'long',
      },
    },
  },
]

