import type { ReactNode } from 'react'
import Link from 'next/link'
import { LanguageProvider } from '@/lib/language-provider'
import { HeaderNav } from './components/header-nav'
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
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-slate-800 bg-surface/80 backdrop-blur">
              <HeaderNav />
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
        </LanguageProvider>
      </body>
    </html>
  )
}

