import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { MOCK_TOOLS } from '@/lib/mock'
import { CATEGORY_LABELS, PRICING_LABELS, PRICING_COLORS, CATEGORY_ICONS } from '@/lib/types'
import RatingStars from '@/components/RatingStars'

interface Props {
  params: { slug: string }
}

// slug format: "tool1-vs-tool2"
function parseSlugs(slug: string): [string, string] | null {
  const idx = slug.indexOf('-vs-')
  if (idx === -1) return null
  return [slug.slice(0, idx), slug.slice(idx + 4)]
}

export async function generateStaticParams() {
  const pairs = [
    'chatgpt-vs-gemini',
    'chatgpt-vs-claude',
    'midjourney-vs-dall-e-3',
    'gemini-vs-claude',
    'chatgpt-vs-perplexity',
  ]
  return pairs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseSlugs(params.slug)
  if (!parsed) return {}
  const [s1, s2] = parsed
  const t1 = MOCK_TOOLS.find((t) => t.slug === s1)
  const t2 = MOCK_TOOLS.find((t) => t.slug === s2)
  if (!t1 || !t2) return {}
  return {
    title: `${t1.name} مقابل ${t2.name} — مقارنة شاملة | أدوات AI`,
    description: `مقارنة دقيقة بين ${t1.name_ar} و${t2.name_ar}: المميزات، العيوب، الأسعار، والأفضل لك.`,
    openGraph: {
      title: `${t1.name} vs ${t2.name} — مقارنة`,
      description: `أيهما أفضل؟ ${t1.name} أم ${t2.name}؟ مقارنة شاملة بالعربية.`,
      type: 'article',
    },
  }
}

function ScoreBar({ value, max = 5 }: { value: number; max?: number }) {
  const pct = (value / max) * 100
  const color = pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-yellow-500' : 'bg-red-500'
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-white text-xs font-bold w-6">{value}</span>
    </div>
  )
}

export default function ComparePage({ params }: Props) {
  const parsed = parseSlugs(params.slug)
  if (!parsed) notFound()
  const [s1, s2] = parsed
  const t1 = MOCK_TOOLS.find((t) => t.slug === s1)
  const t2 = MOCK_TOOLS.find((t) => t.slug === s2)
  if (!t1 || !t2) notFound()

  const winner = t1.rating >= t2.rating ? t1 : t2

  const jsonLd = {  // eslint-disable-line
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${t1.name} مقابل ${t2.name} — مقارنة شاملة`,
    description: `مقارنة دقيقة بين ${t1.name_ar} و${t2.name_ar}`,
    datePublished: new Date().toISOString(),
  }

  const compareRows = [
    { label: 'التقييم', v1: `${t1.rating}/5 ★`, v2: `${t2.rating}/5 ★`, better: t1.rating >= t2.rating ? 1 : 2 },
    { label: 'السعر', v1: t1.pricing === 'free' ? 'مجاني' : `$${t1.price_monthly}/شهر`, v2: t2.pricing === 'free' ? 'مجاني' : `$${t2.price_monthly}/شهر`, better: t1.pricing === 'free' ? 1 : t2.pricing === 'free' ? 2 : 0 },
    { label: 'الفئة', v1: CATEGORY_LABELS[t1.category], v2: CATEGORY_LABELS[t2.category], better: 0 },
    { label: 'نموذج التسعير', v1: PRICING_LABELS[t1.pricing], v2: PRICING_LABELS[t2.pricing], better: 0 },
    { label: 'عدد التقييمات', v1: t1.reviews_count.toLocaleString('ar'), v2: t2.reviews_count.toLocaleString('ar'), better: t1.reviews_count >= t2.reviews_count ? 1 : 2 },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-violet-400">الرئيسية</Link>
          <span>/</span>
          <span className="text-white">مقارنة {t1.name} vs {t2.name}</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
            <span className="text-violet-400">{t1.name}</span>
            {' '}مقابل{' '}
            <span className="text-pink-400">{t2.name}</span>
          </h1>
          <p className="text-gray-400">مقارنة شاملة — أيهما الأفضل لك؟</p>
        </div>

        {/* Cards side by side */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[t1, t2].map((tool) => (
            <div key={tool.slug}
              className={`bg-gray-900 border rounded-2xl p-6 relative ${
                tool.slug === winner.slug
                  ? 'border-violet-500 shadow-lg shadow-violet-500/10'
                  : 'border-gray-800'
              }`}>
              {tool.slug === winner.slug && (
                <div className="absolute -top-3 right-4 px-3 py-0.5 bg-violet-600 text-white text-xs rounded-full font-bold">
                  🏆 الأفضل تقييماً
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-3xl">
                  {CATEGORY_ICONS[tool.category]}
                </div>
                <div>
                  <h2 className="font-bold text-white text-xl">{tool.name}</h2>
                  <span className="text-xs text-gray-500">{tool.name_ar}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{tool.tagline_ar}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${PRICING_COLORS[tool.pricing]}`}>
                  {PRICING_LABELS[tool.pricing]}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <RatingStars rating={tool.rating} />
                <span className="text-white font-bold">{tool.rating}</span>
              </div>
              <Link href={`/tools/${tool.slug}`}
                className="block text-center py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 transition-colors border border-gray-700">
                عرض المراجعة الكاملة
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-8">
          <div className="grid grid-cols-4 bg-gray-800/50 p-4 text-sm font-semibold text-gray-400">
            <div>الميزة</div>
            <div className="text-center text-violet-300">{t1.name}</div>
            <div className="text-center text-pink-300">{t2.name}</div>
            <div className="text-center">الفائز</div>
          </div>
          {compareRows.map((row, i) => (
            <div key={i} className={`grid grid-cols-4 p-4 text-sm border-t border-gray-800 ${i % 2 === 0 ? '' : 'bg-gray-800/20'}`}>
              <div className="text-gray-400 font-medium">{row.label}</div>
              <div className={`text-center ${row.better === 1 ? 'text-green-400 font-bold' : 'text-white'}`}>{row.v1}</div>
              <div className={`text-center ${row.better === 2 ? 'text-green-400 font-bold' : 'text-white'}`}>{row.v2}</div>
              <div className="text-center text-gray-500 text-xs">
                {row.better === 1 ? <span className="text-green-400">{t1.name} ✓</span>
                  : row.better === 2 ? <span className="text-green-400">{t2.name} ✓</span>
                  : '—'}
              </div>
            </div>
          ))}
        </section>

        {/* Rating breakdown */}
        <section className="grid md:grid-cols-2 gap-4 mb-8">
          {[t1, t2].map((tool) => (
            <div key={tool.slug} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h3 className="font-bold text-white mb-4">{tool.name} — نظرة سريعة</h3>
              <div className="space-y-3">
                <div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>التقييم العام</span><span>{tool.rating}/5</span></div><ScoreBar value={tool.rating} /></div>
                <div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>عدد الميزات</span><span>{tool.features.length}</span></div><ScoreBar value={tool.features.length} max={10} /></div>
                <div><div className="flex justify-between text-xs text-gray-400 mb-1"><span>المميزات</span><span>{tool.pros.length}</span></div><ScoreBar value={tool.pros.length} max={5} /></div>
              </div>
            </div>
          ))}
        </section>

        {/* Pros & Cons */}
        <section className="grid md:grid-cols-2 gap-4 mb-8">
          {[t1, t2].map((tool) => (
            <div key={tool.slug} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 space-y-4">
              <h3 className="font-bold text-white">{tool.name}</h3>
              <div>
                <h4 className="text-green-400 text-sm font-semibold mb-2">✅ المميزات</h4>
                <ul className="space-y-1">
                  {tool.pros.map((p, i) => <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-green-400">•</span>{p}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-red-400 text-sm font-semibold mb-2">❌ العيوب</h4>
                <ul className="space-y-1">
                  {tool.cons.map((c, i) => <li key={i} className="text-xs text-gray-400 flex items-start gap-2"><span className="text-red-400">•</span>{c}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Verdict */}
        <section className="bg-gradient-to-l from-violet-900/30 to-pink-900/20 border border-violet-700/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">الحكم النهائي</h2>
          <p className="text-gray-400 mb-3">
            بناءً على التقييمات والمميزات، <span className="text-violet-300 font-semibold">{winner.name}</span> هو الفائز في هذه المقارنة.
          </p>
          <p className="text-sm text-gray-500">
            لكن الخيار الأفضل يعتمد على احتياجاتك — اقرأ المراجعات الكاملة لتقرر.
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Link href={`/tools/${t1.slug}`} className="px-4 py-2 rounded-xl bg-gray-800 text-white text-sm hover:bg-gray-700 transition-colors border border-gray-700">مراجعة {t1.name}</Link>
            <Link href={`/tools/${t2.slug}`} className="px-4 py-2 rounded-xl bg-gray-800 text-white text-sm hover:bg-gray-700 transition-colors border border-gray-700">مراجعة {t2.name}</Link>
          </div>
        </section>
      </main>
    </>
  )
}
