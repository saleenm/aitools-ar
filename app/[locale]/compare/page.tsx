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
  { slugs: 'chatgpt-vs-gemini',          names: ['ChatGPT', 'Gemini'] },
  { slugs: 'chatgpt-vs-claude',           names: ['ChatGPT', 'Claude'] },
  { slugs: 'gemini-vs-claude',            names: ['Gemini', 'Claude'] },
  { slugs: 'chatgpt-vs-perplexity',       names: ['ChatGPT', 'Perplexity'] },
  { slugs: 'claude-vs-perplexity',        names: ['Claude', 'Perplexity'] },
  { slugs: 'chatgpt-vs-grok',             names: ['ChatGPT', 'Grok'] },
  { slugs: 'claude-vs-grok',              names: ['Claude', 'Grok'] },
  { slugs: 'midjourney-vs-dall-e-3',      names: ['Midjourney', 'DALL·E 3'] },
  { slugs: 'midjourney-vs-stable-diffusion', names: ['Midjourney', 'Stable Diffusion'] },
  { slugs: 'dall-e-3-vs-stable-diffusion',   names: ['DALL·E 3', 'Stable Diffusion'] },
  { slugs: 'midjourney-vs-adobe-firefly', names: ['Midjourney', 'Adobe Firefly'] },
  { slugs: 'jasper-vs-copy-ai',           names: ['Jasper', 'Copy.ai'] },
  { slugs: 'grammarly-vs-jasper',         names: ['Grammarly', 'Jasper'] },
  { slugs: 'chatgpt-vs-jasper',           names: ['ChatGPT', 'Jasper'] },
  { slugs: 'elevenlabs-vs-suno',          names: ['ElevenLabs', 'Suno'] },
  { slugs: 'runway-vs-suno',              names: ['Runway', 'Suno'] },
  { slugs: 'github-copilot-vs-chatgpt',   names: ['GitHub Copilot', 'ChatGPT'] },
  { slugs: 'notion-ai-vs-chatgpt',        names: ['Notion AI', 'ChatGPT'] },
  { slugs: 'chatgpt-vs-copilot',          names: ['ChatGPT', 'Copilot'] },
  { slugs: 'gemini-vs-perplexity',        names: ['Gemini', 'Perplexity'] },
  // 20 new pairs
  { slugs: 'chatgpt-vs-writesonic',       names: ['ChatGPT', 'Writesonic'] },
  { slugs: 'claude-vs-gemini',            names: ['Claude', 'Gemini'] },
  { slugs: 'perplexity-vs-grok',          names: ['Perplexity', 'Grok'] },
  { slugs: 'chatgpt-vs-canva-ai',         names: ['ChatGPT', 'Canva AI'] },
  { slugs: 'midjourney-vs-kling',         names: ['Midjourney', 'Kling'] },
  { slugs: 'runway-vs-pika',              names: ['Runway', 'Pika'] },
  { slugs: 'heygen-vs-synthesia',         names: ['HeyGen', 'Synthesia'] },
  { slugs: 'elevenlabs-vs-udio',          names: ['ElevenLabs', 'Udio'] },
  { slugs: 'suno-vs-udio',               names: ['Suno', 'Udio'] },
  { slugs: 'github-copilot-vs-cursor',    names: ['GitHub Copilot', 'Cursor'] },
  { slugs: 'claude-vs-copilot',          names: ['Claude', 'Copilot'] },
  { slugs: 'grammarly-vs-chatgpt',        names: ['Grammarly', 'ChatGPT'] },
  { slugs: 'notion-ai-vs-claude',         names: ['Notion AI', 'Claude'] },
  { slugs: 'dall-e-3-vs-adobe-firefly',   names: ['DALL·E 3', 'Adobe Firefly'] },
  { slugs: 'stable-diffusion-vs-adobe-firefly', names: ['Stable Diffusion', 'Adobe Firefly'] },
  { slugs: 'chatgpt-vs-llama-3',          names: ['ChatGPT', 'Llama 3'] },
  { slugs: 'claude-vs-llama-3',           names: ['Claude', 'Llama 3'] },
  { slugs: 'gemini-vs-grok',              names: ['Gemini', 'Grok'] },
  { slugs: 'runway-vs-kling',             names: ['Runway', 'Kling'] },
  { slugs: 'chatgpt-vs-grammarly',        names: ['ChatGPT', 'Grammarly'] },
  // 20 more pairs
  { slugs: 'claude-vs-chatgpt-coding',    names: ['Claude', 'ChatGPT (Coding)'] },
  { slugs: 'jasper-vs-writesonic',        names: ['Jasper', 'Writesonic'] },
  { slugs: 'copy-ai-vs-writesonic',       names: ['Copy.ai', 'Writesonic'] },
  { slugs: 'midjourney-vs-leonardo-ai',   names: ['Midjourney', 'Leonardo AI'] },
  { slugs: 'dalle-3-vs-leonardo-ai',      names: ['DALL·E 3', 'Leonardo AI'] },
  { slugs: 'elevenlabs-vs-murf',          names: ['ElevenLabs', 'Murf AI'] },
  { slugs: 'chatgpt-vs-perplexity-research', names: ['ChatGPT', 'Perplexity (Research)'] },
  { slugs: 'notion-ai-vs-obsidian',       names: ['Notion AI', 'Obsidian'] },
  { slugs: 'canva-ai-vs-adobe-firefly',   names: ['Canva AI', 'Adobe Firefly'] },
  { slugs: 'suno-vs-soundraw',            names: ['Suno', 'Soundraw'] },
  { slugs: 'cursor-vs-github-copilot-pro',names: ['Cursor', 'GitHub Copilot Pro'] },
  { slugs: 'chatgpt-vs-character-ai',     names: ['ChatGPT', 'Character.AI'] },
  { slugs: 'deepl-vs-google-translate',   names: ['DeepL', 'Google Translate'] },
  { slugs: 'claude-vs-deepl',             names: ['Claude', 'DeepL'] },
  { slugs: 'zapier-vs-make',              names: ['Zapier', 'Make'] },
  { slugs: 'gamma-vs-beautiful-ai',       names: ['Gamma', 'Beautiful.AI'] },
  { slugs: 'intercom-vs-tidio',           names: ['Intercom AI', 'Tidio'] },
  { slugs: 'perplexity-vs-elicit',        names: ['Perplexity', 'Elicit'] },
  { slugs: 'chatgpt-vs-gemini-advanced',  names: ['ChatGPT', 'Gemini Advanced'] },
  { slugs: 'claude-vs-grok-3',            names: ['Claude', 'Grok 3'] },
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
