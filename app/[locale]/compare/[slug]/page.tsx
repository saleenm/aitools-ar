import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getToolsForCompare } from '@/lib/data'
import { PRICING_COLORS, CATEGORY_ICONS } from '@/lib/types'
import RatingStars from '@/components/RatingStars'
import { buildAlternates } from '@/lib/seo'
import { getLocalizedPros, getLocalizedCons } from '@/lib/tool-i18n'

export const dynamic = 'force-dynamic'

interface Props {
  params: { locale: string; slug: string }
}

function parseSlugs(slug: string): [string, string] | null {
  const idx = slug.indexOf('-vs-')
  if (idx === -1) return null
  return [slug.slice(0, idx), slug.slice(idx + 4)]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = params
  const parsed = parseSlugs(slug)
  if (!parsed) return {}
  const [s1, s2] = parsed
  const [t1, t2] = await getToolsForCompare(s1, s2)
  if (!t1 || !t2) return {}
  const title = `${t1.name} vs ${t2.name} — AI Tools`
  const description = `Compare ${t1.name} and ${t2.name}: features, pricing, ratings, pros and cons.`
  return {
    title,
    description,
    alternates: buildAlternates(`/compare/${slug}`, locale),
    openGraph: { title, description, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export async function generateStaticParams() {
  const pairs = [
    // Core chatbot comparisons
    'chatgpt-vs-gemini',
    'chatgpt-vs-claude',
    'gemini-vs-claude',
    'chatgpt-vs-perplexity',
    'claude-vs-perplexity',
    'gemini-vs-perplexity',
    'chatgpt-vs-grok',
    'claude-vs-grok',
    // Image generation
    'midjourney-vs-dall-e-3',
    'midjourney-vs-stable-diffusion',
    'dall-e-3-vs-stable-diffusion',
    'midjourney-vs-adobe-firefly',
    // Writing tools
    'jasper-vs-copy-ai',
    'grammarly-vs-jasper',
    'chatgpt-vs-jasper',
    // Video & audio
    'runway-vs-suno',
    'elevenlabs-vs-suno',
    // Coding
    'github-copilot-vs-chatgpt',
    // Productivity
    'notion-ai-vs-chatgpt',
    'chatgpt-vs-copilot',
    // Extra pairs
    'gemini-vs-perplexity',
    'chatgpt-vs-writesonic',
    'claude-vs-gemini',
    'perplexity-vs-grok',
    'chatgpt-vs-canva-ai',
    'midjourney-vs-kling',
    'runway-vs-pika',
    'heygen-vs-synthesia',
    'elevenlabs-vs-udio',
    'suno-vs-udio',
    'github-copilot-vs-cursor',
    'claude-vs-copilot',
    'grammarly-vs-chatgpt',
    'notion-ai-vs-claude',
    'dall-e-3-vs-adobe-firefly',
    'stable-diffusion-vs-adobe-firefly',
    'chatgpt-vs-llama-3',
    'claude-vs-llama-3',
    'gemini-vs-grok',
    'runway-vs-kling',
    'chatgpt-vs-grammarly',
    'claude-vs-chatgpt-coding',
    'jasper-vs-writesonic',
    'copy-ai-vs-writesonic',
    'midjourney-vs-leonardo-ai',
    'dalle-3-vs-leonardo-ai',
    'elevenlabs-vs-murf',
    'chatgpt-vs-perplexity-research',
    'notion-ai-vs-obsidian',
    'canva-ai-vs-adobe-firefly',
    'suno-vs-soundraw',
    'cursor-vs-github-copilot-pro',
    'chatgpt-vs-character-ai',
    'deepl-vs-google-translate',
    'claude-vs-deepl',
    'zapier-vs-make',
    'gamma-vs-beautiful-ai',
    'intercom-vs-tidio',
    'perplexity-vs-elicit',
    'chatgpt-vs-gemini-advanced',
    'claude-vs-grok-3',
    // Profession pairs
    'harvey-vs-casetext',
    'chatgpt-vs-harvey',
    'midjourney-vs-vizcom',
    'chatgpt-vs-autodesk-ai',
    'chatgpt-vs-glass-ai',
    'perplexity-vs-elicit-research',
    'khanmigo-vs-chatgpt',
    'chatgpt-vs-synthesis-tutor',
    'chatgpt-vs-intuit-assist',
    'claude-vs-chatgpt-finance',
    'jasper-vs-hubspot-ai',
    'semrush-vs-chatgpt',
    'chatgpt-vs-rex-ai',
    'zillow-ai-vs-chatgpt',
    'chatgpt-vs-workday-ai',
    'paradox-vs-chatgpt',
    'tabnine-vs-github-copilot',
    'codeium-vs-github-copilot',
    'chatgpt-vs-deepseek',
    'gemini-vs-deepseek',
    'claude-vs-deepseek',
    'cursor-vs-windsurf',
    'midjourney-vs-flux',
  ]
  const locales = ['ar', 'en', 'fr', 'es', 'tr', 'de']
  return locales.flatMap((locale) => pairs.map((slug) => ({ locale, slug })))
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

export default async function ComparePage({ params }: Props) {
  const { locale, slug } = params
  const t = await getTranslations('compareDetail')
  const tc = await getTranslations('categories')

  const parsed = parseSlugs(slug)
  if (!parsed) notFound()
  const [s1, s2] = parsed
  const [t1, t2] = await getToolsForCompare(s1, s2)
  if (!t1 || !t2) notFound()

  const base = `/${locale}`
  const winner = t1.rating >= t2.rating ? t1 : t2

  const isArabic = locale === 'ar'

  const compareRows = [
    { label: t('ratingRow'), v1: `${t1.rating}/5 ★`, v2: `${t2.rating}/5 ★`, better: t1.rating >= t2.rating ? 1 : 2 },
    {
      label: t('priceRow'),
      v1: t1.pricing === 'free' ? t('free') : `$${t1.price_monthly}${t('perMonth')}`,
      v2: t2.pricing === 'free' ? t('free') : `$${t2.price_monthly}${t('perMonth')}`,
      better: t1.pricing === 'free' ? 1 : t2.pricing === 'free' ? 2 : 0,
    },
    { label: t('categoryRow'), v1: tc(t1.category), v2: tc(t2.category), better: 0 },
    { label: t('reviewsRow'), v1: t1.reviews_count.toLocaleString(), v2: t2.reviews_count.toLocaleString(), better: t1.reviews_count >= t2.reviews_count ? 1 : 2 },
  ]

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href={base} className="hover:text-violet-400">{t('breadcrumbHome')}</Link>
        <span>/</span>
        <Link href={`${base}/compare`} className="hover:text-violet-400">{t('breadcrumbCompare')}</Link>
        <span>/</span>
        <span className="text-white">{t1.name} vs {t2.name}</span>
      </nav>

      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
          <span className="text-violet-400">{t1.name}</span>
          {' '}vs{' '}
          <span className="text-pink-400">{t2.name}</span>
        </h1>
        <p className="text-gray-400">{t('subtitle')}</p>
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
                🏆 {t('bestRated')}
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-3xl">
                {CATEGORY_ICONS[tool.category]}
              </div>
              <div>
                <h2 className="font-bold text-white text-xl">{tool.name}</h2>
                {isArabic && <span className="text-xs text-gray-500">{tool.name_ar}</span>}
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {!isArabic && tool.tagline_en ? tool.tagline_en : tool.tagline_ar}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${PRICING_COLORS[tool.pricing]}`}>
                {tool.pricing === 'free' ? t('free') : `$${tool.price_monthly}${t('perMonth')}`}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <RatingStars rating={tool.rating} />
              <span className="text-white font-bold">{tool.rating}</span>
            </div>
            <Link href={`${base}/tools/${tool.slug}`}
              className="block text-center py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 transition-colors border border-gray-700">
              {t('viewFullReview')}
            </Link>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-8">
        <div className="grid grid-cols-4 bg-gray-800/50 p-4 text-sm font-semibold text-gray-400">
          <div>{t('featureHeader')}</div>
          <div className="text-center text-violet-300">{t1.name}</div>
          <div className="text-center text-pink-300">{t2.name}</div>
          <div className="text-center">{t('winnerHeader')}</div>
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
            <h3 className="font-bold text-white mb-4">{tool.name} — {t('quickLook')}</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{t('overallRating')}</span><span>{tool.rating}/5</span>
                </div>
                <ScoreBar value={tool.rating} />
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{t('featuresCount')}</span><span>{tool.features.length}</span>
                </div>
                <ScoreBar value={tool.features.length} max={10} />
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{t('prosCount')}</span><span>{tool.pros.length}</span>
                </div>
                <ScoreBar value={tool.pros.length} max={5} />
              </div>
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
              <h4 className="text-green-400 text-sm font-semibold mb-2">✅ {t('prosHeader')}</h4>
              <ul className="space-y-1">
                {getLocalizedPros(tool.slug, tool.pros, locale).map((p, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="text-green-400">•</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-red-400 text-sm font-semibold mb-2">❌ {t('consHeader')}</h4>
              <ul className="space-y-1">
                {getLocalizedCons(tool.slug, tool.cons, locale).map((c, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="text-red-400">•</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Verdict */}
      <section className="bg-gradient-to-l from-violet-900/30 to-pink-900/20 border border-violet-700/30 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold text-white mb-2">{t('verdictTitle')}</h2>
        <p className="text-gray-400 mb-3">
          {(() => {
            const text = t('verdictText')
            const parts = text.split('{winner}')
            return <>{parts[0]}<span className="text-violet-300 font-semibold">{winner.name}</span>{parts[1]}</>
          })()}
        </p>
        <p className="text-sm text-gray-500">{t('verdictNote')}</p>
        <div className="flex justify-center gap-3 mt-4">
          <Link href={`${base}/tools/${t1.slug}`}
            className="px-4 py-2 rounded-xl bg-gray-800 text-white text-sm hover:bg-gray-700 transition-colors border border-gray-700">
            {t('reviewOf')} {t1.name}
          </Link>
          <Link href={`${base}/tools/${t2.slug}`}
            className="px-4 py-2 rounded-xl bg-gray-800 text-white text-sm hover:bg-gray-700 transition-colors border border-gray-700">
            {t('reviewOf')} {t2.name}
          </Link>
        </div>
      </section>
    </main>
  )
}
