export const dynamic = 'force-dynamic'

import { getTranslations } from 'next-intl/server'
import { getTools } from '@/lib/data'
import CompareSelector from '@/components/CompareSelector'

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
