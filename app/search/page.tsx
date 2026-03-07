import { listGrapes } from '../../data/grapes'
import { listRegions } from '../../data/regions'
import { listWines } from '../../data/wines'
import { searchGlossary } from '../../data/glossary'

interface Props {
  searchParams: { q?: string }
}

export default function SearchPage({ searchParams }: Props) {
  const q = (searchParams.q ?? '').trim().toLowerCase()

  const grapes = listGrapes().filter((g) => g.name.toLowerCase().includes(q))
  const regions = listRegions().filter((r) => r.name.toLowerCase().includes(q))
  const wines = listWines().filter((w) => w.name.toLowerCase().includes(q))
  const glossary = searchGlossary(q)

  const hasQuery = q.length > 0

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Search</p>
        <h1 className="font-display text-3xl text-slate-50 sm:text-4xl">검색</h1>
        <form className="max-w-md">
          <input
            name="q"
            defaultValue={searchParams.q}
            placeholder="품종, 산지, 와인, 용어 등을 검색하세요"
            className="w-full rounded-lg border border-slate-700 bg-background px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-accent"
          />
        </form>
        {!hasQuery && <p className="text-sm text-slate-400">검색어를 입력하면 결과가 표시됩니다.</p>}
      </header>

      {hasQuery && (
        <section className="space-y-6">
          <ResultSection title="품종" items={grapes.map((g) => ({ href: `/grapes/${g.slug}`, label: g.name }))} />
          <ResultSection
            title="지역"
            items={regions.map((r) => ({ href: '#', label: `${r.name} (${r.country})` }))}
          />
          <ResultSection
            title="와인"
            items={wines.map((w) => ({ href: '#', label: w.name }))}
          />
          <ResultSection
            title="용어"
            items={glossary.map((t) => ({ href: '/glossary?q=' + encodeURIComponent(t.term), label: t.term }))}
          />
        </section>
      )}
    </div>
  )
}

function ResultSection({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  if (items.length === 0) return null
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold text-slate-100">{title}</h2>
      <ul className="flex flex-wrap gap-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <a
              href={item.href}
              className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs hover:border-accent hover:text-accent"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

