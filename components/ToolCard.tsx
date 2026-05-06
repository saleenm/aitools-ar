'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Tool, CATEGORY_ICONS } from '@/lib/types'

interface Props { tool: Tool }

export default function ToolCard({ tool }: Props) {
  const t = useTranslations('toolCard')
  const tc = useTranslations('categories')
  const locale = useLocale()
  const isArabic = locale === 'ar'

  const tagline = !isArabic && tool.tagline_en ? tool.tagline_en : tool.tagline_ar

  return (
    <Link href={`/${locale}/tools/${tool.slug}`}
      className="group block bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500/50 hover:bg-gray-900/80 transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-2xl border border-gray-700 flex-shrink-0">
            {CATEGORY_ICONS[tool.category]}
          </div>
          <div>
            <h3 className="font-bold text-white text-base group-hover:text-violet-300 transition-colors">{tool.name}</h3>
            {isArabic && <span className="text-xs text-gray-500">{tool.name_ar}</span>}
          </div>
        </div>
        {tool.is_featured && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 flex-shrink-0">
            {t('featured')}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">{tagline}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
          tool.pricing === 'free' ? 'text-green-400 bg-green-400/10' :
          tool.pricing === 'freemium' ? 'text-yellow-400 bg-yellow-400/10' :
          'text-blue-400 bg-blue-400/10'
        }`}>
          {tool.pricing === 'free' ? t('free') : tool.pricing === 'freemium' ? 'Freemium' : 'Pro'}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400">
          {CATEGORY_ICONS[tool.category]} {tc(tool.category)}
        </span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
        <div className="flex items-center gap-1.5">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-white text-sm font-semibold">{tool.rating.toFixed(1)}</span>
          <span className="text-gray-600 text-xs">({tool.reviews_count.toLocaleString()})</span>
        </div>
        <div className="text-xs text-gray-500">
          {tool.pricing === 'free'
            ? <span className="text-green-400 font-semibold">{t('free')}</span>
            : tool.price_monthly
              ? <span>${tool.price_monthly}<span className="text-gray-600">{t('perMonth')}</span></span>
              : null}
        </div>
      </div>
    </Link>
  )
}
