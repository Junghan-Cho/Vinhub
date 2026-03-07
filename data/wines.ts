import type { SatTastingNote } from '../lib/sat-schema'

export interface Wine {
  slug: string
  name: string
  producerSlug: string
  regionSlug: string
  grapeSlugs: string[]
  vintage: number | 'NV'
  alcohol: number
  sweetness: 'dry' | 'off-dry' | 'medium' | 'sweet'
  tastingNoteExample?: SatTastingNote
}

export const wines: Wine[] = [
  {
    slug: 'chateau-margaux-grand-vin',
    name: 'Château Margaux Grand Vin',
    producerSlug: 'chateau-margaux',
    regionSlug: 'bordeaux-left-bank',
    grapeSlugs: ['cabernet-sauvignon', 'merlot', 'cabernet-franc'],
    vintage: 2018,
    alcohol: 13.5,
    sweetness: 'dry',
  },
]

export function getWineBySlug(slug: string): Wine | undefined {
  return wines.find((w) => w.slug === slug)
}

export function listWines(): Wine[] {
  return wines
}

