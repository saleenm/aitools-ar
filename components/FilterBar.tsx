'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ToolCategory, CATEGORY_LABELS, CATEGORY_ICONS } from '@/lib/types'

const CATEGORIES: { value: string; label: string; icon: string }[] = [
  { value: 'all', label: 'الكل', icon: '🌐' },
  ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({
    value,
    label,
    icon: CATEGORY_ICONS[value as ToolCategory],
  })),
]

const PRICING_FILTERS: { value: string; label: string }[] = [
  { value: 'all', label: 'جميع الأسعار' },
  { value: 'free', label: '🟢 مجاني' },
  { value: 'freemium', label: '🟡 مجاني جزئياً' },
  { value: 'paid', label: '🔵 مدفوع' },
]

export default function FilterBar() {
  const router = useRouter()
  const params = useSearchParams()
  const activeCategory = params.get('category') || 'all'
  const activePricing = params.get('pricing') || 'all'
  const activeSearch = params.get('q') || ''

  function update(key: string, value: string) {
    const p = new URLSearchParams(params.toString())
    if (value === 'all' || value === '') {
      p.delete(key)
    } else {
      p.set(key, value)
    }
    router.push(`/?${p.toString()}`)
  }

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        <input
          type="text"
          defaultValue={activeSearch}
          placeholder="ابحث عن أداة..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') update('q', (e.target as HTMLInputElement).value)
          }}
          onChange={(e) => {
            if (!e.target.value) update('q', '')
          }}
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors text-sm"
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => update('category', cat.value)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              activeCategory === cat.value
                ? 'bg-violet-600 border-violet-500 text-white'
                : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Pricing pills */}
      <div className="flex flex-wrap gap-2">
        {PRICING_FILTERS.map((p) => (
          <button
            key={p.value}
            onClick={() => update('pricing', p.value)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              activePricing === p.value
                ? 'bg-violet-600 border-violet-500 text-white'
                : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
