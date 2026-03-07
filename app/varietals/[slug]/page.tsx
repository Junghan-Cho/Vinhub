import Link from 'next/link'
import { notFound } from 'next/navigation'
import { varietals } from '../../../src/data/varietals'
import { wines } from '../../../src/data/wines'

type PageProps = {
  params: { slug: string }
}

export default function VarietalDetailPage({ params }: PageProps) {
  const varietal = varietals.find((v) => v.slug === params.slug)

  if (!varietal) {
    return notFound()
  }

  const relatedVarietals = varietals.filter((v) =>
    varietal.relatedVarietalSlugs.includes(v.slug),
  )
  const winesFromVarietal = wines.filter((w) =>
    w.varietalSlugs.includes(varietal.slug),
  )

  return (
    <section className="space-y-8">
      <Link href="/varietals" className="text-xs text-slate-400 hover:text-accent">
        ← Back to varietals
      </Link>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:items-start">
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          {varietal.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={varietal.imageUrl}
              alt={varietal.nameEn}
              className="h-56 w-full object-cover md:h-64"
            />
          ) : (
            <div className="flex h-56 items-center justify-center text-xs text-slate-500 md:h-64">
              No image yet
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="font-display text-2xl text-slate-50">
              {varietal.nameEn}
            </h1>
            <p className="text-sm text-slate-400">{varietal.nameKo}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-slate-800 px-2 py-1 text-slate-100">
              {varietal.type}
            </span>
            {varietal.regions.length > 0 && (
              <span className="text-slate-400">
                · {varietal.regions.join(', ')}
              </span>
            )}
            {varietal.body && (
              <span className="rounded-full border border-slate-700 px-2 py-1 text-slate-200">
                Body: {varietal.body}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-200">
            {varietal.oneLinerEn || varietal.oneLiner}
          </p>
          <div className="space-y-1 text-sm text-slate-300">
            <h2 className="font-semibold text-slate-100">Taste & aroma</h2>
            <p className="text-sm text-slate-300">
              {varietal.tasteAndAromaEn || varietal.tasteAndAroma}
            </p>
          </div>
        </div>
      </div>

      {varietal.pairings.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-display text-lg text-slate-50">Food pairings</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {varietal.pairings.map((p) => (
              <span
                key={p}
                className="rounded-full bg-slate-900 px-3 py-1 text-slate-100"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      )}

      {winesFromVarietal.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-display text-lg text-slate-50">
            Benchmark wines
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {winesFromVarietal.map((w) => (
              <Link
                key={w.id}
                href={`/wines/${w.slug}`}
                className="flex flex-col rounded-xl border border-slate-800 bg-surface p-4 text-xs text-slate-200 transition-colors hover:border-accent"
              >
                {w.imageUrl && (
                  <div className="mb-2 h-24 overflow-hidden rounded-md bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.imageUrl}
                      alt={w.nameEn}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="font-semibold">{w.nameEn}</div>
                <div className="text-[11px] text-slate-400">
                  {w.region} · {w.type}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedVarietals.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-display text-lg text-slate-50">
            Related varietals
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {relatedVarietals.map((v) => (
              <Link
                key={v.id}
                href={`/varietals/${v.slug}`}
                className="rounded-full border border-slate-700 px-3 py-1 text-slate-200 hover:border-accent"
              >
                {v.nameEn}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

