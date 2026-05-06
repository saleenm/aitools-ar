import { Suspense } from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import FilterBar from '@/components/FilterBar'
import ToolCard from '@/components/ToolCard'
import { getTools } from '@/lib/data'
import { buildAlternates, buildWebsiteJsonLd } from '@/lib/seo'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const META: Record<string, { title: string; description: string }> = {
  ar: { title: 'أدوات AI | دليل أفضل أدوات الذكاء الاصطناعي', description: 'اكتشف وقارن أفضل أدوات الذكاء الاصطناعي: ChatGPT، Gemini، Midjourney، Claude وأكثر من 100 أداة مع مراجعات شاملة.' },
  en: { title: 'AI Tools | Best Artificial Intelligence Tools Directory', description: 'Discover and compare the best AI tools: ChatGPT, Gemini, Midjourney, Claude and 100+ tools with comprehensive reviews.' },
  fr: { title: 'Outils IA | Répertoire des meilleurs outils d\'intelligence artificielle', description: 'Découvrez et comparez les meilleurs outils IA: ChatGPT, Gemini, Midjourney, Claude et plus de 100 outils.' },
  es: { title: 'Herramientas IA | Directorio de las mejores herramientas de inteligencia artificial', description: 'Descubre y compara las mejores herramientas de IA: ChatGPT, Gemini, Midjourney, Claude y más de 100 herramientas.' },
  tr: { title: 'Yapay Zeka Araçları | En İyi Yapay Zeka Araçları Dizini', description: "En iyi yapay zeka araçlarını keşfedin ve karşılaştırın: ChatGPT, Gemini, Midjourney, Claude ve 100'den fazla araç." },
  de: { title: 'KI-Tools | Verzeichnis der besten KI-Tools', description: 'Entdecken und vergleichen Sie die besten KI-Tools: ChatGPT, Gemini, Midjourney, Claude und über 100 Tools.' },
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params
  const m = META[locale] || META.en
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates(''),
    openGraph: {
      title: m.title,
      description: m.description,
      type: 'website',
      url: `https://aitools-ar.vercel.app/${locale}`,
      siteName: 'AI Tools',
    },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  }
}

interface PageProps {
  params: { locale: string }
  searchParams: { category?: string; pricing?: string; q?: string }
}

export default async function HomePage({ params, searchParams }: PageProps) {
  const { locale } = params
  const t = await getTranslations('home')
  const tc = await getTranslations('comparePage')

  const [tools, featuredTools] = await Promise.all([
    getTools({ category: searchParams.category, pricing: searchParams.pricing, search: searchParams.q }),
    getTools({ limit: 4 }),
  ])
  const isFiltered = searchParams.category || searchParams.pricing || searchParams.q
  const base = `/${locale}`

  const jsonLd = buildWebsiteJsonLd()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      {!isFiltered && (
        <section className="relative overflow-hidden bg-gray-950 pt-20 pb-16 px-4 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs mb-6">
              🚀 {t('badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-400 to-pink-400">
                {t('titleHighlight')}
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-500 mb-10">
              <div><span className="text-white font-bold text-lg">{t('stat1Value')}</span><br />{t('stat1Label')}</div>
              <div><span className="text-white font-bold text-lg">{t('stat2Value')}</span><br />{t('stat2Label')}</div>
              <div><span className="text-white font-bold text-lg">{t('stat3Value')}</span><br />{t('stat3Label')}</div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {featuredTools.slice(0, 4).map((tool) => (
                <a key={tool.slug} href={`${base}/tools/${tool.slug}`}
                  className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-sm text-gray-300 hover:border-violet-500 hover:text-white transition-all">
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <Suspense>
            <FilterBar />
          </Suspense>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            {tools.length > 0 ? `${tools.length} ${t('allTools')}` : '—'}
          </p>
          {isFiltered && (
            <a href={base} className="text-xs text-violet-400 hover:underline">✕</a>
          )}
        </div>

        {tools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-600">
            <div className="text-5xl mb-4">🔍</div>
            <a href={base} className="mt-4 inline-block text-violet-400 hover:underline text-sm">{t('allTools')}</a>
          </div>
        )}

        {!isFiltered && (
          <section className="mt-16 rounded-2xl bg-gradient-to-l from-violet-900/40 to-pink-900/20 border border-violet-700/30 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{tc('title')}</h2>
            <p className="text-gray-400 mb-6">{tc('subtitle')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`${base}/compare/chatgpt-vs-gemini`} className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm transition-colors">ChatGPT {tc('vsLabel')} Gemini</a>
              <a href={`${base}/compare/chatgpt-vs-claude`} className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors border border-gray-700">ChatGPT {tc('vsLabel')} Claude</a>
              <a href={`${base}/compare/midjourney-vs-dall-e-3`} className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors border border-gray-700">Midjourney {tc('vsLabel')} DALL·E 3</a>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
