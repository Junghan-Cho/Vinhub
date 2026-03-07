import { searchGlossary } from '../../data/glossary'

interface Props {
  searchParams: { q?: string }
}

export default function GlossaryPage({ searchParams }: Props) {
  const q = searchParams.q ?? ''
  const terms = searchGlossary(q)

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Glossary</p>
        <h1 className="font-display text-3xl text-slate-50 sm:text-4xl">와인 용어집</h1>
        <p className="max-w-2xl text-sm text-slate-300">
          산도, 타닌부터 오크, 오탈리틱까지. SAT 구조와 연결되는 핵심 용어들을 정리했습니다.
        </p>
        <form className="max-w-md">
          <input
            name="q"
            defaultValue={q}
            placeholder="검색어를 입력하세요 (예: 산도, 타닌, oak)"
            className="w-full rounded-lg border border-slate-700 bg-background px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-accent"
          />
        </form>
      </header>

      <section className="space-y-4">
        <p className="text-xs text-slate-400">
          총 {terms.length}개 용어
          {q && (
            <>
              {' '}
              · 검색어: <span className="font-mono text-slate-200">"{q}"</span>
            </>
          )}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {terms.map((term) => (
            <article
              key={term.slug}
              className="rounded-2xl border border-slate-800 bg-surface/60 p-4 text-sm text-slate-200"
            >
              <h2 className="text-sm font-semibold text-slate-50">{term.term}</h2>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {term.category}
              </p>
              <p className="mt-2 text-sm text-slate-300">{term.definition}</p>
              {term.example && (
                <p className="mt-2 text-xs text-slate-400">
                  예시: <span className="italic">{term.example}</span>
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

