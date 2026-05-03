'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">🤖</span>
          <span className="text-white">أدوات<span className="text-violet-400">AI</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
          <Link href="/categories" className="hover:text-white transition-colors">الفئات</Link>
          <Link href="/?category=chatbot" className="hover:text-white transition-colors">محادثة</Link>
          <Link href="/?category=image" className="hover:text-white transition-colors">صور</Link>
          <Link href="/?category=code" className="hover:text-white transition-colors">برمجة</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/submit" className="text-sm px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors border border-gray-700">
            + اقترح أداة
          </Link>
          <Link
            href="/compare"
            className="text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
          >
            ⚖️ قارن
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-4 flex flex-col gap-3 text-sm text-gray-400">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-white">الرئيسية</Link>
          <Link href="/categories" onClick={() => setMenuOpen(false)} className="hover:text-white">الفئات</Link>
          <Link href="/?category=chatbot" onClick={() => setMenuOpen(false)} className="hover:text-white">المحادثة</Link>
          <Link href="/?category=image" onClick={() => setMenuOpen(false)} className="hover:text-white">الصور</Link>
          <Link href="/compare" onClick={() => setMenuOpen(false)} className="hover:text-white">مقارنة الأدوات</Link>
          <Link href="/submit" onClick={() => setMenuOpen(false)} className="hover:text-white">اقترح أداة</Link>
        </div>
      )}
    </header>
  )
}
