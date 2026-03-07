'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-provider'
import { varietals } from '../../src/data/varietals'
import { wines } from '../../src/data/wines'

type BodyPreference = 'any' | 'light' | 'medium' | 'full'

const BODY_OPTIONS: { value: BodyPreference; labelKey: string }[] = [
  { value: 'any', labelKey: 'any_body' },
  { value: 'light', labelKey: 'light_refreshing' },
  { value: 'medium', labelKey: 'medium_versatile' },
  { value: 'full', labelKey: 'full_powerful' },
]

const BODY_LABEL_KEYS: Record<string, string> = {
  가벼움: 'light_refreshing',
  미디엄: 'medium_versatile',
  풀바디: 'full_powerful',
}

function bodyMatches(dataBody: string | undefined, pref: BodyPreference) {
  if (pref === 'any' || !dataBody) return true
  const normalized = dataBody.toLowerCase()
  if (pref === 'light') return normalized.includes('가벼움') || normalized.includes('light')
  if (pref === 'medium') return normalized.includes('미디엄') || normalized.includes('medium')
  if (pref === 'full') return normalized.includes('풀') || normalized.includes('full')
  return true
}

export default function RecommendPage() {
  const { lang, t } = useLanguage()
  const showKorean = lang === 'ko'
  const [bodyPref, setBodyPref] = useState<BodyPreference>('any')

  const matchingVarietals = useMemo(
    () => varietals.filter((v) => bodyMatches(v.body, bodyPref)),
    [bodyPref],
  )

  const matchingVarietalSlugs = useMemo(
    () => new Set(matchingVarietals.map((v) => v.slug)),
    [matchingVarietals],
  )

  const matchingWines = useMemo(
    () =>
      wines.filter((w) =>
        w.varietalSlugs.some((slug) => matchingVarietalSlugs.has(slug)),
      ),
    [matchingVarietalSlugs],
  )

  const topVarietals = matchingVarietals.slice(0, 8)
  const topWines = matchingWines.slice(0, 12)

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-display text-2xl text-slate-50">
          {t('recommend_title')}
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          {t('recommend_subtitle')}
        </p>
      </header>

      <div className="space-y-3 rounded-xl border border-slate-800 bg-surface p-4 text-sm text-slate-200">
        <h2 className="font-display text-base text-slate-50">
          1. {t('choose_body')}
        </h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {BODY_OPTIONS.map((opt) => {
            const active = bodyPref === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setBodyPref(opt.value)}
                className={
                  'rounded-full border px-3 py-1 ' +
                  (active
                    ? 'border-accent bg-accent text-slate-900'
                    : 'border-slate-700 bg-surface text-slate-200 hover:border-slate-500')
                }
              >
                {t(opt.labelKey)}
              </button>
            )
          })}
        </div>
        <p className="text-xs text-slate-400">
          {t('recommend_subtitle')}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="font-display text-base text-slate-50">
              2. {t('suggested_varietals')}
            </h2>
            <Link
              href="/varietals"
              className="text-xs text-accent hover:underline"
            >
              {t('view_all_varietals')}
            </Link>
          </div>
          {topVarietals.length === 0 ? (
            <p className="text-xs text-slate-400">
              {t('no_varietals_preference')}
            </p>
          ) : (
            <div className="grid gap-3 text-xs">
              {topVarietals.map((v) => (
                <Link
                  key={v.id}
                  href={`/varietals/${v.slug}`}
                  className="flex items-start justify-between gap-4 rounded-lg border border-slate-800 bg-surface px-3 py-2 transition-colors hover:border-accent"
                >
                  <div>
                    <div className="font-semibold text-slate-100">
                      {showKorean ? v.nameKo : v.nameEn}
                    </div>
                    {showKorean && (
                      <div className="text-[11px] text-slate-400">
                        {v.nameEn}
                      </div>
                    )}
                    <p className="mt-1 line-clamp-2 text-[11px] text-slate-300">
                      {v.oneLinerEn || v.oneLiner}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-slate-900 px-2 py-0.5 text-[11px] text-slate-100">
                    {v.body && BODY_LABEL_KEYS[v.body] ? t(BODY_LABEL_KEYS[v.body]) : v.body}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <h2 className="font-display text-base text-slate-50">
              3. {t('suggested_wines')}
            </h2>
          </div>
          {topWines.length === 0 ? (
            <p className="text-xs text-slate-400">
              {t('no_wines_match')}
            </p>
          ) : (
            <div className="grid gap-3 text-xs">
              {topWines.map((w) => (
                <Link
                  key={w.id}
                  href={`/wines/${w.slug}`}
                  className="flex items-start justify-between gap-4 rounded-lg border border-slate-800 bg-surface px-3 py-2 transition-colors hover:border-accent"
                >
                  <div>
                    <div className="font-semibold text-slate-100">
                      {showKorean && w.nameKo ? w.nameKo : w.nameEn}
                    </div>
                    {showKorean && w.nameKo && (
                      <div className="text-[11px] text-slate-400">{w.nameEn}</div>
                    )}
                    <div className="text-[11px] text-slate-400">
                      {w.region} · {w.type}
                    </div>
                    {w.oneLiner && (
                      <p className="mt-1 line-clamp-2 text-[11px] text-slate-300">
                        {w.oneLiner}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

