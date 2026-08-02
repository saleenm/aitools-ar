'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Tool, CATEGORY_ICONS } from '@/lib/types'
import { AFFILIATE_LINKS } from '@/lib/affiliate'

interface Props { tool: Tool }

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

function isNewTool(launchedAt: string | null): boolean {
  if (!launchedAt) return false
  const launched = new Date(launchedAt)
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
  return launched >= sixMonthsAgo
}

export default function ToolCard({ tool }: Props) {
  const t = useTranslations('toolCard')
  const tc = useTranslations('categories')
  const locale = useLocale()
  const isArabic = locale === 'ar'

  const tagline = !isArabic && tool.tagline_en ? tool.tagline_en : tool.tagline_ar
  const hasAffiliate = !!AFFILIATE_LINKS[tool.slug]
  const domain = getDomain(tool.website_url)
  const faviconUrl = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` : null
  const isNew = isNewTool(tool.launched_at)

  const pricingColor = tool.pricing === 'free'
    ? 'text-green-400 bg-green-400/10 border-green-400/20'
    : tool.pricing === 'freemium'
    ? 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    : 'text-orange-400 bg-orange-400/10 border-orange-400/20'

  const pricingLabel = tool.pricing === 'free'
    ? t('free')
    : tool.pricing === 'freemium'
    ? 'Freemium'
    : tool.price_monthly ? `$${tool.price_monthly}/mo` : 'Pro'

  return (
    <Link href={`/${locale}/tools/${tool.slug}`}
      className="group flex flex-col border rounded-2xl p-5 tool-glow shine-card min-h-[220px] relative overflow-hidden"
      style={{ background: 'rgba(13,17,23,0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.07)' }}>

      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Favicon with emoji fallback */}
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(109,40,217,0.08))', border: '1.5px solid rgba(139,92,246,0.2)' }}>
            {faviconUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={faviconUrl}
                alt={tool.name}
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement | null
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
            ) : null}
            <span
              className="absolute inset-0 flex items-center justify-center"
              style={{ display: faviconUrl ? 'none' : 'flex' }}>
              {CATEGORY_ICONS[tool.category]}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-white text-base group-hover:text-violet-300 transition-colors leading-tight">{tool.name}</h3>
            {isArabic && <span className="text-[11px] text-gray-500">{tool.name_ar}</span>}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          {isNew && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              ✨ جديد
            </span>
          )}
          {tool.is_featured && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-bold badge-pulse">
              ⭐ {t('featured')}
            </span>
          )}
          {hasAffiliate && !tool.is_featured && !isNew && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25 font-bold">
              {tool.pricing === 'free' ? '✓ Free' : '🔗 Try'}
            </span>
          )}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2 flex-1">{tagline}</p>

      {/* Star rating */}
      <div className="flex items-center gap-1 mb-4">
        {[1,2,3,4,5].map((star) => {
          const filled = tool.rating >= star
          const half = !filled && tool.rating >= star - 0.5
          return (
            <svg key={star} width="13" height="13" viewBox="0 0 24 24"
              fill={filled ? '#f59e0b' : half ? 'url(#half)' : 'none'}
              stroke={filled || half ? '#f59e0b' : '#374151'} strokeWidth="1.5">
              {half && (
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="#f59e0b"/>
                    <stop offset="50%" stopColor="transparent"/>
                  </linearGradient>
                </defs>
              )}
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          )
        })}
        <span className="text-xs text-gray-400 ms-1">{tool.rating.toFixed(1)}</span>
      </div>

      {/* Tags row */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${pricingColor}`}>
          {pricingLabel}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-gray-800/80 text-gray-400 border border-gray-700/50">
          {CATEGORY_ICONS[tool.category]} {tc(tool.category)}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-800/40">
        <span className="text-gray-600 text-xs">({tool.reviews_count.toLocaleString()})</span>
        <span className="text-xs text-violet-400 font-semibold group-hover:text-violet-300 transition-colors flex items-center gap-1">
          {isArabic ? 'عرض التفاصيل' : 'Details'}
          <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={isArabic ? "M19 12H5M12 19l-7-7 7-7" : "M5 12h14M12 5l7 7-7 7"}/>
          </svg>
        </span>
      </div>
    </Link>
  )
}
