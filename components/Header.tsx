'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const base = `/${locale}`

  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={base} className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">🤖</span>
          <span className="text-white">AI<span className="text-violet-400">Tools</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <Link href={base} className="hover:text-white transition-colors">{t('home')}</Link>
          <Link href={`${base}/categories`} className="hover:text-white transition-colors">{t('categories')}</Link>
          <Link href={`${base}/blog`} className="hover:text-white transition-colors">{t('blog')}</Link>
          <Link href={`${base}/?category=chatbot`} className="hover:text-white transition-colors">{t('chatbot')}</Link>
          <Link href={`${base}/?category=image`} className="hover:text-white transition-colors">{t('image')}</Link>
          <Link href={`${base}/?category=code`} className="hover:text-white transition-colors">{t('code')}</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link href={`${base}/submit`} className="text-sm px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors border border-gray-700">
            + {t('submit')}
          </Link>
          <Link href={`${base}/compare`} className="text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors">
            ⚖️ {t('compare')}
          </Link>
        </div>

        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-4 flex flex-col gap-3 text-sm text-gray-400">
          <Link href={base} onClick={() => setMenuOpen(false)} className="hover:text-white">{t('home')}</Link>
          <Link href={`${base}/categories`} onClick={() => setMenuOpen(false)} className="hover:text-white">{t('categories')}</Link>
          <Link href={`${base}/blog`} onClick={() => setMenuOpen(false)} className="hover:text-white">{t('blog')}</Link>
          <Link href={`${base}/?category=chatbot`} onClick={() => setMenuOpen(false)} className="hover:text-white">{t('chatbot')}</Link>
          <Link href={`${base}/?category=image`} onClick={() => setMenuOpen(false)} className="hover:text-white">{t('image')}</Link>
          <Link href={`${base}/compare`} onClick={() => setMenuOpen(false)} className="hover:text-white">{t('compare')}</Link>
          <Link href={`${base}/submit`} onClick={() => setMenuOpen(false)} className="hover:text-white">{t('submit')}</Link>
          <div className="pt-2"><LanguageSwitcher /></div>
        </div>
      )}
    </header>
  )
}
