'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-provider'
import { varietals } from '../../src/data/varietals'

const TYPE_FILTERS: { value: 'all' | string; label: string }[] = [
  { value: 'all', label: 'All types' },
  { value: '레드', label: 'Red' },
  { value: '화이트', label: 'White' },
  { value: '로제', label: 'Rosé' },
  { value: '스파클링', label: 'Sparkling' },
]

export default function VarietalsPage() {
  const { lang } = useLanguage()
  const [typeFilter, setTypeFilter] = useState<'all' | string>('all')
  const showKorean = lang === 'ko'

  const filtered =
    typeFilter === 'all'
      ? varietals
      : varietals.filter((v) => v.type === typeFilter)

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-display text-2xl text-slate-50">Varietals</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Browse classic grapes used in world‑famous wines. Filter by style and jump into
          detailed food pairings and benchmark labels.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm text-slate-300">Type:</span>
        {TYPE_FILTERS.map((opt) => {
          const active = typeFilter === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setTypeFilter(opt.value)}
              className={
                'rounded-full border px-3 py-1 text-xs ' +
                (active
                  ? 'border-accent bg-accent text-slate-900'
                  : 'border-slate-700 bg-surface text-slate-200 hover:border-slate-500')
              }
            >
              {opt.label}
            </button>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((v) => (
          <Link
            key={v.id}
            href={`/varietals/${v.slug}`}
            className="flex flex-col rounded-xl border border-slate-800 bg-surface p-4 text-sm text-slate-200 transition-colors hover:border-accent"
          >
            {v.imageUrl && (
              <div className="mb-3 h-28 overflow-hidden rounded-lg bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.imageUrl}
                  alt={v.nameEn}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <div>
                <div className="font-semibold">{showKorean ? v.nameKo : v.nameEn}</div>
                {showKorean && <div className="text-xs text-slate-400">{v.nameEn}</div>}
              </div>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200">
                {v.type}
              </span>
            </div>
            <p className="line-clamp-3 text-xs text-slate-300">
              {v.oneLinerEn || v.oneLiner}
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-slate-400">
          No varietals match this filter yet.
        </p>
      )}
    </section>
  )
}

