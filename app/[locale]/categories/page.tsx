import Link from 'next/link'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getTools } from '@/lib/data'
import { CATEGORY_ICONS, CATEGORY_KEYS } from '@/lib/types'
import { buildAlternates } from '@/lib/seo'

export const dynamic = 'force-dynamic'

interface Props { params: { locale: string } }

const META: Record<string, { title: string; description: string }> = {
  ar: { title: 'فئات أدوات AI | تصفح حسب التخصص', description: 'تصفح أدوات الذكاء الاصطناعي حسب الفئة: محادثة، صور، فيديو، كتابة، برمجة والمزيد.' },
  en: { title: 'AI Tool Categories | Browse by Specialty', description: 'Browse AI tools by category: chatbots, image generation, video, writing, coding, and more.' },
  fr: { title: 'Catégories d\'outils IA | Parcourir par spécialité', description: 'Parcourez les outils IA par catégorie: chatbots, génération d\'images, vidéo, rédaction, code et plus.' },
  es: { title: 'Categorías de Herramientas IA | Explorar por especialidad', description: 'Explora herramientas de IA por categoría: chatbots, generación de imágenes, vídeo, escritura, código y más.' },
  tr: { title: 'Yapay Zeka Araç Kategorileri | Uzmanlığa Göre Gözat', description: "Yapay zeka araçlarını kategoriye göre inceleyin: sohbet botları, görsel üretimi, video, yazma, kodlama ve daha fazlası." },
  de: { title: 'KI-Tool-Kategorien | Nach Fachgebiet suchen', description: 'KI-Tools nach Kategorie durchsuchen: Chatbots, Bildgenerierung, Video, Schreiben, Coding und mehr.' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = META[params.locale] || META.en
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates('/categories', params.locale),
    openGraph: { title: m.title, description: m.description, type: 'website' },
  }
}

export default async function CategoriesPage({ params }: Props) {
  const { locale } = params
  const t = await getTranslations('categoriesPage')
  const tc = await getTranslations('categories')
  const allTools = await getTools()
  const base = `/${locale}`

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-white mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-400 to-pink-400">
            {t('title')}
          </span>
        </h1>
        <p className="text-gray-400">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {CATEGORY_KEYS.map((slug) => {
          const count = allTools.filter((tool) => tool.category === slug).length
          const topTool = allTools
            .filter((tool) => tool.category === slug)
            .sort((a, b) => b.rating - a.rating)[0]

          return (
            <Link key={slug} href={`${base}/?category=${slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500/50 hover:bg-gray-900/80 transition-all duration-200 hover:-translate-y-0.5 text-center">
              <div className="text-4xl mb-3">{CATEGORY_ICONS[slug]}</div>
              <h2 className="font-bold text-white text-sm mb-1 group-hover:text-violet-300 transition-colors">
                {tc(slug)}
              </h2>
              <p className="text-xs text-gray-500 mb-2">{count} {t('toolsCount')}</p>
              {topTool && (
                <p className="text-xs text-gray-600 truncate">
                  ★ {t('bestLabel')}: {topTool.name}
                </p>
              )}
            </Link>
          )
        })}
      </div>

      <div className="text-center mt-12">
        <Link href={base}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
          {t('viewAll')} →
        </Link>
      </div>
    </main>
  )
}
