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
    alternates: buildAlternates(`/tools/${slug}`),
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
      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href={base} className="hover:text-violet-400 transition-colors">{t('breadcrumbHome')}</Link>
          <span>/</span>
          <Link href={`${base}?category=${tool.category}`} className="hover:text-violet-400 transition-colors">
            {tc(tool.category)}
          </Link>
          <span>/</span>
          <span className="text-white">{tool.name}</span>
        </nav>

        {/* Header */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-3xl flex-shrink-0">
              {CATEGORY_ICONS[tool.category]}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-2xl font-extrabold text-white">{tool.name}</h1>
                {isArabic && <span className="text-sm text-gray-500">{tool.name_ar}</span>}
                {tool.is_featured && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {t('new')} ⭐
                  </span>
                )}
              </div>
              <p className="text-gray-400 mb-4">{tagline}</p>
              <div className="flex items-center gap-3 mb-5">
                <RatingStars rating={tool.rating} size="lg" />
                <span className="text-white font-bold text-lg">{tool.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-sm">({tool.reviews_count.toLocaleString()})</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={tool.website_url} target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors">
                  {t('visit')}
                </a>
                <Link href={`${base}/compare/${tool.slug}-vs-${related[0]?.slug ?? 'chatgpt'}`}
                  className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors border border-gray-700">
                  {t('compare')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Description */}
            <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">{t('about')} {tool.name}</h2>
              <p className="text-gray-400 leading-relaxed">{tool.description_ar}</p>
            </section>

            {/* Pros & Cons */}
            <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">{t('prosAndCons')}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-green-400 font-semibold mb-3">{t('pros')}</h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">•</span>{pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">{t('cons')}</h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">•</span>{con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">{t('features')}</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {tool.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800 rounded-lg px-3 py-2">
                    <span className="text-violet-400">✦</span>{f}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h3 className="font-bold text-white mb-3">{t('quickInfo')}</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">{t('categoryLabel')}</dt>
                  <dd className="text-white">{tc(tool.category)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">{t('priceLabel')}</dt>
                  <dd className="text-white">
                    {tool.pricing === 'free' ? t('free') : `$${tool.price_monthly}${t('perMonth')}`}
                  </dd>
                </div>
                {tool.launched_at && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">{t('launchedLabel')}</dt>
                    <dd className="text-white">{tool.launched_at.slice(0, 4)}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-gray-500">{t('ratingLabel')}</dt>
                  <dd className="text-yellow-400 font-bold">{tool.rating}/5</dd>
                </div>
              </dl>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h3 className="font-bold text-white mb-3">{t('tagsLabel')}</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <h3 className="font-bold text-white mb-3">{t('relatedTools')}</h3>
                <div className="space-y-2">
                  {related.map((r) => (
                    <Link key={r.slug} href={`${base}/tools/${r.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors">
                      <span>{CATEGORY_ICONS[r.category]}</span>{r.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <AdUnit slot="2847361905" format="horizontal" className="my-4" />
        <ReviewSection toolSlug={tool.slug} toolName={tool.name} />
      </main>
    </>
  )
}
