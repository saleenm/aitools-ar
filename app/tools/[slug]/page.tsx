import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { MOCK_TOOLS } from '@/lib/mock'
import { CATEGORY_LABELS, PRICING_LABELS, PRICING_COLORS, CATEGORY_ICONS } from '@/lib/types'
import RatingStars from '@/components/RatingStars'
import ReviewSection from '@/components/ReviewSection'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return MOCK_TOOLS.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = MOCK_TOOLS.find((t) => t.slug === params.slug)
  if (!tool) return {}
  return {
    title: `${tool.name} — مراجعة شاملة بالعربية | أدوات AI`,
    description: tool.tagline_ar + ' — مراجعة، مميزات، عيوب، والأسعار.',
    openGraph: {
      title: `مراجعة ${tool.name_ar}`,
      description: tool.tagline_ar,
      type: 'article',
    },
  }
}

export default function ToolPage({ params }: Props) {
  const tool = MOCK_TOOLS.find((t) => t.slug === params.slug)
  if (!tool) notFound()

  const related = MOCK_TOOLS.filter(
    (t) => t.slug !== tool.slug && t.category === tool.category
  ).slice(0, 3)

  // Structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description_ar,
    applicationCategory: tool.category,
    offers: {
      '@type': 'Offer',
      price: tool.price_monthly ?? 0,
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating,
      reviewCount: tool.reviews_count,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-violet-400 transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href={`/?category=${tool.category}`} className="hover:text-violet-400 transition-colors">
            {CATEGORY_ICONS[tool.category]} {CATEGORY_LABELS[tool.category]}
          </Link>
          <span>/</span>
          <span className="text-white">{tool.name}</span>
        </nav>

        {/* Hero card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            {/* Logo */}
            <div className="w-20 h-20 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-4xl flex-shrink-0">
              {CATEGORY_ICONS[tool.category]}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-extrabold text-white">{tool.name}</h1>
                {tool.is_featured && (
                  <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">⭐ مميز</span>
                )}
              </div>
              <p className="text-gray-400 mb-4">{tool.tagline_ar}</p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-3 mb-5">
                <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${PRICING_COLORS[tool.pricing]}`}>
                  {PRICING_LABELS[tool.pricing]}
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-gray-800 text-gray-400">
                  {CATEGORY_ICONS[tool.category]} {CATEGORY_LABELS[tool.category]}
                </span>
                {tool.price_monthly && (
                  <span className="text-xs px-3 py-1.5 rounded-full bg-gray-800 text-gray-400">
                    ${tool.price_monthly}/شهر
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-5">
                <RatingStars rating={tool.rating} size="lg" />
                <span className="text-white font-bold text-lg">{tool.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-sm">({tool.reviews_count.toLocaleString('ar')} تقييم)</span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={tool.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
                >
                  زيارة الموقع ↗
                </a>
                <Link
                  href={`/compare/${tool.slug}-vs-${related[0]?.slug ?? 'chatgpt'}`}
                  className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors border border-gray-700"
                >
                  ⚖️ مقارنة
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            {/* Description */}
            <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">عن {tool.name}</h2>
              <p className="text-gray-400 leading-relaxed">{tool.description_ar}</p>
            </section>

            {/* Pros & Cons */}
            <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">المميزات والعيوب</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                    <span>✅</span> المميزات
                  </h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">•</span>{pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <span>❌</span> العيوب
                  </h3>
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
              <h2 className="text-lg font-bold text-white mb-4">الميزات الرئيسية</h2>
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
            {/* Quick info */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h3 className="font-bold text-white mb-3">معلومات سريعة</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">الفئة</dt>
                  <dd className="text-white">{CATEGORY_LABELS[tool.category]}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">السعر</dt>
                  <dd className="text-white">
                    {tool.pricing === 'free' ? 'مجاني' : `$${tool.price_monthly}/شهر`}
                  </dd>
                </div>
                {tool.launched_at && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">الإطلاق</dt>
                    <dd className="text-white">{tool.launched_at.slice(0, 4)}</dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-gray-500">التقييم</dt>
                  <dd className="text-yellow-400 font-bold">{tool.rating}/5</dd>
                </div>
              </dl>
            </div>

            {/* Tags */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h3 className="font-bold text-white mb-3">الوسوم</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <h3 className="font-bold text-white mb-3">أدوات مشابهة</h3>
                <div className="space-y-2">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/tools/${r.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors">
                      <span>{CATEGORY_ICONS[r.category]}</span>{r.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        <ReviewSection toolSlug={tool.slug} toolName={tool.name} />
      </main>
    </>
  )
}
