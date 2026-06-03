'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { CATEGORY_ICONS, CATEGORY_LABELS } from '@/lib/types'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const base = `/${locale}`

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  const topCategories: Array<keyof typeof CATEGORY_LABELS> = ['chatbot', 'image', 'code', 'writing', 'video']

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/60"
      style={{ background: 'rgba(9,11,17,0.92)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href={base} className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
            🤖
          </div>
          <span className="text-white font-black text-lg">
            AI<span className="text-violet-400">Tools</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link href={base}
            className={`px-3 py-2 rounded-lg transition-colors ${isActive(base) ? 'text-white bg-gray-800/60' : 'text-gray-400 hover:text-white hover:bg-gray-800/40'}`}>
            {t('home')}
          </Link>
          {topCategories.map((cat) => (
            <Link key={cat} href={`${base}/?category=${cat}`}
              className={`px-3 py-2 rounded-lg transition-colors ${pathname.includes(`category=${cat}`) ? 'text-violet-400 bg-violet-500/10' : 'text-gray-400 hover:text-white hover:bg-gray-800/40'}`}>
              {CATEGORY_ICONS[cat]} {t(cat)}
            </Link>
          ))}
          <Link href={`${base}/blog`}
            className={`px-3 py-2 rounded-lg transition-colors ${isActive(`${base}/blog`) ? 'text-white bg-gray-800/60' : 'text-gray-400 hover:text-white hover:bg-gray-800/40'}`}>
            {t('blog')}
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <LanguageSwitcher />
          <Link href={`${base}/submit`}
            className="text-sm px-3 py-2 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 transition-colors border border-gray-700/60">
            + {t('submit')}
          </Link>
          <Link href={`${base}/compare`}
            className="text-sm px-4 py-2 rounded-lg text-white font-medium transition-colors"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
            ⚖️ {t('compare')}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-400 hover:text-white w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen
            ? <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            : <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800/60 px-4 py-4 flex flex-col gap-1 text-sm"
          style={{ background: 'rgba(9,11,17,0.97)' }}>
          <Link href={base} onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors">{t('home')}</Link>
          {topCategories.map((cat) => (
            <Link key={cat} href={`${base}/?category=${cat}`} onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors">
              {CATEGORY_ICONS[cat]} {t(cat)}
            </Link>
          ))}
          <Link href={`${base}/blog`} onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors">{t('blog')}</Link>
          <Link href={`${base}/compare`} onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 transition-colors">⚖️ {t('compare')}</Link>
          <Link href={`${base}/submit`} onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors">+ {t('submit')}</Link>
          <div className="pt-2 border-t border-gray-800/50 mt-1"><LanguageSwitcher /></div>
        </div>
      )}
    </header>
  )
}
