import type { ReactNode } from 'react'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Vinhub – World Wine Map & Varietal Showroom',
  description:
    '지도와 품종, 세계 유명 와인 데이터를 중심으로 탐색하는 와인 쇼룸. VinLog 앱으로 이어지는 테이스팅 기록 진입로.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800 bg-surface/80 backdrop-blur">
            <nav className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6">
              <div className="flex items-baseline gap-2">
                <Link href="/" className="font-display text-xl tracking-tight">
                  Vinhub
                </Link>
                <span className="text-xs text-slate-400">Wine Atlas & Varietals</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <Link href="/varietals">Varietals</Link>
                <Link href="/map">Map</Link>
                <Link href="/recommend">Recommend</Link>
                <Link href="/search">Search</Link>
                <Link href="/glossary">Glossary</Link>
                <Link
                  href="/vinlog"
                  className="rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-slate-200 hover:border-accent hover:text-accent"
                >
                  VinLog app
                </Link>
              </div>
            </nav>
          </header>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-content px-6 py-10">{children}</div>
          </main>
          <footer className="border-t border-slate-800 bg-surface/80">
            <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row">
              <span>© {new Date().getFullYear()} Vinhub. All rights reserved.</span>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-[11px] text-slate-500">
                  Classic wine map · varietals · wineries
                </span>
                <Link href="/vinlog" className="text-[11px] text-accent hover:underline">
                  Learn about VinLog app
                </Link>
                <Link href="/glossary">Glossary</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

