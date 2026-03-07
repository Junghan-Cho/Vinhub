'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-provider'
import { LangSwitcher } from './lang-switcher'

export function HeaderNav() {
  const { t } = useLanguage()

  return (
    <nav className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6">
      <div className="flex items-baseline gap-2">
        <Link href="/" className="font-display text-xl tracking-tight">
          {t('nav_siteName')}
        </Link>
        <span className="text-xs text-slate-400">Wine Atlas & Varietals</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-slate-300">
        <Link href="/varietals" className="hover:text-white">
          {t('nav_varietals')}
        </Link>
        <Link href="/map" className="hover:text-white">
          {t('nav_map')}
        </Link>
        <Link href="/recommend" className="hover:text-white">
          {t('nav_recommend')}
        </Link>
        <Link href="/search" className="hover:text-white">
          {t('nav_search')}
        </Link>
        <Link href="/glossary" className="hover:text-white">
          {t('nav_glossary')}
        </Link>
        <Link
          href="/vinlog"
          className="rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-slate-200 hover:border-accent hover:text-accent"
        >
          {t('nav_vinlog')}
        </Link>
        <LangSwitcher />
      </div>
    </nav>
  )
}
