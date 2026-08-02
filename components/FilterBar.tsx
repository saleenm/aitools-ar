'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useRef, useCallback } from 'react'
import { ToolCategory, CATEGORY_ICONS } from '@/lib/types'

const CATEGORY_KEYS: ToolCategory[] = ['chatbot','image','video','audio','writing','code','productivity','seo','design','data']

export default function FilterBar() {
  const router = useRouter()
  const params = useSearchParams()
  const locale = useLocale()
  const t = useTranslations('filter')
  const tc = useTranslations('categories')
  const activeCategory = params.get('category') || 'all'
  const activePricing = params.get('pricing') || 'all'
  const activeSearch = params.get('q') || ''
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function update(key: string, value: string) {
    const p = new URLSearchParams(params.toString())
    if (value === 'all' || value === '') p.delete(key)
    else p.set(key, value)
    router.push(`/${locale}?${p.toString()}`)
  }

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      update('q', value)
    }, 300)
  }, [params, locale]) // eslint-disable-line react-hooks/exhaustive-deps

  const CATEGORIES = [
    { value: 'all', label: t('all'), icon: '🌐' },
    ...CATEGORY_KEYS.map((k) => ({ value: k, label: tc(k), icon: CATEGORY_ICONS[k] })),
  ]

  const PRICING = [
    { value: 'all', label: t('all') },
    { value: 'free', label: t('free') },
    { value: 'freemium', label: t('freemium') },
    { value: 'paid', label: t('paid') },
  ]

  return (
    <div className="space-y-4">
      <div className="relative">
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        <input
          type="text"
          defaultValue={activeSearch}
          placeholder={t('searchPlaceholder')}
          onChange={handleSearchChange}
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button key={cat.value} onClick={() => update('category', cat.value)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              activeCategory === cat.value
                ? 'bg-violet-600 border-violet-500 text-white'
                : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
            }`}>
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {PRICING.map((p) => (
          <button key={p.value} onClick={() => update('pricing', p.value)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              activePricing === p.value
                ? 'bg-violet-600 border-violet-500 text-white'
                : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
            }`}>
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
