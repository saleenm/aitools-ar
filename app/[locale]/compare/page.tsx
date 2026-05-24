export const dynamic = 'force-dynamic'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getTools } from '@/lib/data'
import CompareSelector from '@/components/CompareSelector'
import { buildAlternates } from '@/lib/seo'

const META: Record<string, { title: string; description: string }> = {
  ar: { title: 'مقارنة أدوات AI | قارن جانباً إلى جانب', description: 'قارن بين أدوات الذكاء الاصطناعي جانباً إلى جانب — المميزات، الأسعار، التقييمات.' },
  en: { title: 'Compare AI Tools | Side-by-Side Comparison', description: 'Compare AI tools side-by-side — features, pricing, ratings.' },
  fr: { title: 'Comparer les outils IA | Comparaison côte à côte', description: 'Comparez les outils IA côte à côte — fonctionnalités, tarifs, notes.' },
  es: { title: 'Comparar herramientas IA | Comparación lado a lado', description: 'Compara herramientas de IA lado a lado — características, precios, calificaciones.' },
  tr: { title: 'Yapay Zeka Araçlarını Karşılaştır | Yan Yana Karşılaştırma', description: "Yapay zeka araçlarını yan yana karşılaştırın — özellikler, fiyatlandırma, puanlar." },
  de: { title: 'KI-Tools vergleichen | Direktvergleich', description: 'KI-Tools direkt vergleichen — Funktionen, Preise, Bewertungen.' },
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const m = META[params.locale] || META.en
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates('/compare', params.locale),
    openGraph: { title: m.title, description: m.description, type: 'website' },
  }
}

const PAIRS = [
  { slugs: 'chatgpt-vs-gemini',      names: ['ChatGPT', 'Gemini'] },
  { slugs: 'chatgpt-vs-claude',       names: ['ChatGPT', 'Claude'] },
  { slugs: 'midjourney-vs-dall-e-3',  names: ['Midjourney', 'DALL·E 3'] },
  { slugs: 'gemini-vs-claude',        names: ['Gemini', 'Claude'] },
  { slugs: 'chatgpt-vs-perplexity',   names: ['ChatGPT', 'Perplexity'] },
  { slugs: 'elevenlabs-vs-runway-ml', names: ['ElevenLabs', 'Runway'] },
]

interface Props { params: { locale: string } }

export default async function CompareSelectPage({ params }: Props) {
  const { locale } = params
  const t = await getTranslations('comparePage')
  const tools = await getTools()
  const base = `/${locale}`

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-white mb-3">⚖️ {t('title')}</h1>
        <p className="text-gray-400">{t('subtitle')}</p>
      </div>

      <CompareSelector tools={tools} locale={locale} />

      <div className="mt-8">
        <h2 className="text-sm font-semibold text-gray-400 mb-3">{t('popular')}:</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {PAIRS.map((p) => (
            <a key={p.slugs} href={`${base}/compare/${p.slugs}`}
              className="flex items-center justify-between px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-violet-500/50 hover:text-violet-300 text-gray-300 text-sm transition-all">
              <span>{p.names[0]} {t('vsLabel')} {p.names[1]}</span>
              <span className="text-gray-600">→</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
