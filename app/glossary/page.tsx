'use client'

import { useLanguage } from '@/lib/language-provider'
import { searchGlossary } from '../../data/glossary'
import type { GlossaryTerm } from '../../data/glossary'

interface Props {
  searchParams: { q?: string }
}

function getDisplayTerm(term: GlossaryTerm, lang: string): string {
  if (lang === 'ko') return term.term
  return term.termEn ?? term.term
}

export default function GlossaryPage({ searchParams }: Props) {
  const q = (searchParams?.q ?? '').trim()
  const terms = searchGlossary(q)
  const { lang, t } = useLanguage()

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Glossary</p>
        <h1 className="font-display text-3xl text-slate-50 sm:text-4xl">
          {t('glossary_title')}
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          {t('glossary_subtitle')}
        </p>
        <form className="max-w-md">
          <input
            name="q"
            defaultValue={q}
            placeholder={t('glossary_placeholder')}
            className="w-full rounded-lg border border-slate-700 bg-background px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-accent"
          />
        </form>
      </header>

      <section className="space-y-4">
        <p className="text-xs text-slate-400">
          {t('glossary_count').replace('{n}', String(terms.length))}
          {q && (
            <>
              {' '}
              · <span className="text-slate-500">{lang === 'ko' ? '검색어' : 'Search'}:</span>{' '}
              <span className="font-mono text-slate-200">&quot;{q}&quot;</span>
            </>
          )}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {terms.map((term) => (
            <article
              key={term.slug}
              className="rounded-2xl border border-slate-800 bg-surface/60 p-4 text-sm text-slate-200"
            >
              <h2 className="text-sm font-semibold text-slate-50">
                {getDisplayTerm(term, lang)}
              </h2>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {term.category}
              </p>
              <p className="mt-2 text-sm text-slate-300">{term.definition}</p>
              {term.example && (
                <p className="mt-2 text-xs text-slate-400">
                  {t('glossary_example')}: <span className="italic">{term.example}</span>
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
