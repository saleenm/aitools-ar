import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getToolBySlug, getTools } from '@/lib/data'
import { CATEGORY_ICONS } from '@/lib/types'
import RatingStars from '@/components/RatingStars'
import ReviewSection from '@/components/ReviewSection'
import AdUnit from '@/components/AdUnit'
import { buildAlternates, buildToolJsonLd, buildBreadcrumbJsonLd, buildFAQJsonLd } from '@/lib/seo'
import { getLocalizedPros, getLocalizedCons, getLocalizedFeatures, getLocalizedDescription } from '@/lib/tool-i18n'
import { getAffiliateLink, AFFILIATE_CTA_LABELS } from '@/lib/affiliate'

export const dynamic = 'force-dynamic'

interface Props {
  params: { locale: string; slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = params
  const tool = await getToolBySlug(slug)
  if (!tool) return {}

  const isArabic = locale === 'ar'
  const tagline = !isArabic && tool.tagline_en ? tool.tagline_en : tool.tagline_ar
  const title = `${tool.name} — ${tagline} | AI Tools`
  const description = !isArabic && tool.tagline_en ? tool.tagline_en : tool.description_ar.slice(0, 160)

  return {
    title,
    description,
    alternates: buildAlternates(`/tools/${slug}`, locale),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://aitools-ar.vercel.app/${locale}/tools/${slug}`,
      siteName: 'AI Tools',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ToolPage({ params }: Props) {
  const { locale, slug } = params
  const t = await getTranslations('toolPage')
  const tc = await getTranslations('categories')

  const [tool, allTools] = await Promise.all([
    getToolBySlug(slug),
    getTools(),
  ])
  if (!tool) notFound()

  const base = `/${locale}`
  const isArabic = locale === 'ar'
  const related = allTools.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 4)

  const BASE_URL = 'https://aitools-ar.vercel.app'
  const jsonLd = buildToolJsonLd(tool)
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: t('breadcrumbHome'), url: `${BASE_URL}/${locale}` },
    { name: tc(tool.category), url: `${BASE_URL}/${locale}?category=${tool.category}` },
    { name: tool.name, url: `${BASE_URL}/${locale}/tools/${tool.slug}` },
  ])
  const tagline = !isArabic && tool.tagline_en ? tool.tagline_en : tool.tagline_ar
  const affiliate = getAffiliateLink(tool.slug)
  const affiliateCta = AFFILIATE_CTA_LABELS[locale] || AFFILIATE_CTA_LABELS.en
  const faqLd = buildFAQJsonLd([
    { question: `What is ${tool.name}?`, answer: tagline },
    { question: `Is ${tool.name} free?`, answer: tool.pricing === 'free' ? `Yes, ${tool.name} is free to use.` : `${tool.name} starts at $${tool.price_monthly}/month.` },
    { question: `What category is ${tool.name}?`, answer: `${tool.name} is an AI tool in the ${tool.category} category.` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="max-w-5xl mx-auto px-4 py-10" style={{ background: '#030712' }}>
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href={base} className="hover:text-white transition-colors">{t('breadcrumbHome')}</Link>
          <span className="text-gray-700">/</span>
          <Link href={`${base}?category=${tool.category}`} className="hover:text-violet-400 transition-colors">
            {tc(tool.category)}
          </Link>
          <span className="text-gray-700">/</span>
          <span className="text-gray-300">{tool.name}</span>
        </nav>

        {/* Header */}
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(139,92,246,0.08) 0%, rgba(13,17,23,0.9) 60%)', border: '1px solid rgba(139,92,246,0.2)' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }} />
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(109,40,217,0.1))', border: '1.5px solid rgba(139,92,246,0.3)' }}>
              {CATEGORY_ICONS[tool.category]}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-2xl font-black text-white">{tool.name}</h1>
                {isArabic && <span className="text-sm text-gray-500">{tool.name_ar}</span>}
                {tool.is_featured && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-bold badge-pulse">
                    ⭐ {t('new')}
                  </span>
                )}
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tagline}</p>
              <div className="flex items-center gap-3 mb-5">
                <RatingStars rating={tool.rating} size="lg" />
                <span className="text-white font-black text-lg">{tool.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-sm">({tool.reviews_count.toLocaleString()})</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {/* Affiliate CTA — prominent */}
                {affiliate ? (
                  <a href={affiliate.url} target="_blank" rel="sponsored noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold transition-colors shadow-lg shadow-violet-500/20">
                    {affiliate.badge && (
                      <span className="px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-black">{affiliate.badge}</span>
                    )}
                    {affiliateCta} →
                  </a>
                ) : (
                  <a href={tool.website_url} target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors">
                    {t('visit')}
                  </a>
                )}
                <Link href={`${base}/compare/${tool.slug}-vs-${related[0]?.slug ?? 'chatgpt'}`}
                  className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors border border-gray-700">
                  {t('compare')}
                </Link>
                {/* Secondary visit link if affiliate exists */}
                {affiliate && (
                  <a href={tool.website_url} target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 text-sm transition-colors border border-gray-700">
                    {t('visit')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-5">
            {/* Description */}
            <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-6">
              <h2 className="text-base font-black text-white mb-3 flex items-center gap-2">
                <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                {t('about')} {tool.name}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">{getLocalizedDescription(tool.slug, tool.description_ar, locale)}</p>
            </section>

            {/* Pros & Cons */}
            <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-6">
              <h2 className="text-base font-black text-white mb-4">{t('prosAndCons')}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-500/5 border border-green-500/15 rounded-xl p-4">
                  <h3 className="text-green-400 font-bold text-sm mb-3 flex items-center gap-1.5">
                    <svg width="13" height="13" fill="none" stroke="#4ade80" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
                    {t('pros')}
                  </h3>
                  <ul className="space-y-2">
                    {getLocalizedPros(tool.slug, tool.pros, locale).map((pro, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-green-400 mt-1 flex-shrink-0">✓</span>{pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/5 border border-red-500/15 rounded-xl p-4">
                  <h3 className="text-red-400 font-bold text-sm mb-3 flex items-center gap-1.5">
                    <svg width="13" height="13" fill="none" stroke="#f87171" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    {t('cons')}
                  </h3>
                  <ul className="space-y-2">
                    {getLocalizedCons(tool.slug, tool.cons, locale).map((con, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-red-400 mt-1 flex-shrink-0">✗</span>{con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-6">
              <h2 className="text-base font-black text-white mb-4 flex items-center gap-2">
                <svg width="14" height="14" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
                {t('features')}
              </h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {getLocalizedFeatures(tool.slug, tool.features, locale).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/60 border border-gray-700/40 rounded-xl px-3 py-2.5">
                    <svg width="12" height="12" fill="#a78bfa" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {f}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Affiliate CTA Card */}
            {affiliate && (
              <div className="rounded-2xl p-5 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(109,40,217,0.08) 100%)', border: '1px solid rgba(139,92,246,0.3)' }}>
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl">
                  {CATEGORY_ICONS[tool.category]}
                </div>
                <p className="text-white font-bold text-sm mb-1">{tool.name}</p>
                <p className="text-gray-400 text-xs mb-4">{tagline.slice(0, 60)}...</p>
                <a href={affiliate.url} target="_blank" rel="sponsored noopener noreferrer"
                  className="block w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold transition-colors">
                  {affiliateCta} →
                </a>
                {tool.pricing !== 'free' && tool.price_monthly && (
                  <p className="text-gray-500 text-xs mt-2">
                    {locale === 'ar' ? 'يبدأ من' : 'From'} ${tool.price_monthly}/{locale === 'ar' ? 'شهر' : 'mo'}
                  </p>
                )}
                {tool.pricing === 'free' && (
                  <p className="text-green-400 text-xs mt-2 font-semibold">
                    {locale === 'ar' ? '✓ متاح مجاناً' : '✓ Free to use'}
                  </p>
                )}
              </div>
            )}

            {/* Ad unit in sidebar */}
            <AdUnit slot="9182736450" format="rectangle" />

            <div className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-5">
              <h3 className="font-black text-white text-sm mb-4 flex items-center gap-2">
                <svg width="13" height="13" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                {t('quickInfo')}
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                  <dt className="text-gray-500">{t('categoryLabel')}</dt>
                  <dd className="text-white font-medium">{CATEGORY_ICONS[tool.category]} {tc(tool.category)}</dd>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                  <dt className="text-gray-500">{t('priceLabel')}</dt>
                  <dd className={tool.pricing === 'free' ? 'text-green-400 font-bold' : 'text-white font-medium'}>
                    {tool.pricing === 'free' ? `✓ ${t('free')}` : `$${tool.price_monthly}${t('perMonth')}`}
                  </dd>
                </div>
                {tool.launched_at && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-800/50">
                    <dt className="text-gray-500">{t('launchedLabel')}</dt>
                    <dd className="text-white">{tool.launched_at.slice(0, 4)}</dd>
                  </div>
                )}
                <div className="flex justify-between items-center py-2">
                  <dt className="text-gray-500">{t('ratingLabel')}</dt>
                  <dd className="text-yellow-400 font-black flex items-center gap-1">
                    <svg width="11" height="11" fill="#facc15" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {tool.rating}/5
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-5">
              <h3 className="font-black text-white text-sm mb-3 flex items-center gap-2">
                <svg width="13" height="13" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1" fill="#a78bfa"/></svg>
                {t('tagsLabel')}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800/80 text-gray-400 border border-gray-700/50 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <div className="bg-gray-900/80 border border-gray-800/60 rounded-2xl p-5">
                <h3 className="font-black text-white text-sm mb-3">{t('relatedTools')}</h3>
                <div className="space-y-1">
                  {related.map((r) => (
                    <Link key={r.slug} href={`${base}/tools/${r.slug}`}
                      className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-gray-800/60 text-sm text-gray-400 hover:text-violet-400 transition-all group">
                      <span className="flex items-center gap-2">
                        <span>{CATEGORY_ICONS[r.category]}</span>{r.name}
                      </span>
                      <svg className="opacity-0 group-hover:opacity-100 transition-opacity" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ad between content and reviews */}
        <AdUnit slot="2847361905" format="horizontal" className="my-6" />

        {/* Bottom Affiliate Banner — full width */}
        {affiliate && (
          <div className="rounded-2xl p-6 mb-6 flex items-center justify-between gap-4 flex-wrap"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(109,40,217,0.06) 100%)', border: '1px solid rgba(139,92,246,0.25)' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-800 border border-violet-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                {CATEGORY_ICONS[tool.category]}
              </div>
              <div>
                <p className="text-white font-bold">{tool.name}</p>
                <p className="text-gray-400 text-sm">{tagline}</p>
              </div>
            </div>
            <a href={affiliate.url} target="_blank" rel="sponsored noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-colors shadow-lg shadow-violet-500/20 whitespace-nowrap">
              {affiliateCta} →
            </a>
          </div>
        )}

        <ReviewSection toolSlug={tool.slug} toolName={tool.name} />
      </main>
    </>
  )
}
