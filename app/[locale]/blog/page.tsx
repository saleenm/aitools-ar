import Link from 'next/link'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getRecentPosts } from '@/lib/blog'
import { buildAlternates } from '@/lib/seo'

interface Props { params: { locale: string } }

const META: Record<string, { title: string; description: string }> = {
  ar: { title: 'مدونة أدوات AI | مقارنات ومراجعات', description: 'أحدث مقالات ومراجعات أدوات الذكاء الاصطناعي — مقارنات تفصيلية وأدلة عملية.' },
  en: { title: 'AI Tools Blog | Comparisons & Reviews', description: 'Latest articles and reviews on AI tools — detailed comparisons and practical guides.' },
  fr: { title: 'Blog Outils IA | Comparaisons et avis', description: 'Derniers articles et avis sur les outils IA — comparaisons détaillées et guides pratiques.' },
  es: { title: 'Blog de Herramientas IA | Comparaciones y reseñas', description: 'Últimos artículos y reseñas sobre herramientas de IA — comparaciones detalladas y guías prácticas.' },
  tr: { title: 'Yapay Zeka Araçları Blog | Karşılaştırmalar ve İncelemeler', description: "Yapay zeka araçları hakkında son makaleler ve incelemeler — ayrıntılı karşılaştırmalar ve pratik kılavuzlar." },
  de: { title: 'KI-Tools Blog | Vergleiche und Bewertungen', description: 'Neueste Artikel und Bewertungen zu KI-Tools — detaillierte Vergleiche und praktische Leitfäden.' },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = META[params.locale] || META.en
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates('/blog', params.locale),
    openGraph: { title: m.title, description: m.description, type: 'website' },
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = params
  const t = await getTranslations('blog')
  const base = `/${locale}`
  const posts = getRecentPosts(6, locale)
  const featured = posts[0]
  const rest = posts.slice(1)

  const dateLocale = locale === 'ar' ? 'ar-SA' : locale === 'fr' ? 'fr-FR' : locale === 'es' ? 'es-ES' : locale === 'tr' ? 'tr-TR' : locale === 'de' ? 'de-DE' : 'en-US'

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs mb-4">
          ✍️ {t('title')}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          {t('subtitle').split(' ').slice(0,2).join(' ')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-400 to-pink-400">
            {t('subtitle').split(' ').slice(2).join(' ')}
          </span>
        </h1>
      </div>

      {/* Featured post */}
      <Link href={`${base}/blog/${featured.slug}`}
        className="block bg-gradient-to-l from-violet-900/30 to-pink-900/20 border border-violet-700/30 rounded-2xl p-8 mb-8 hover:border-violet-500/60 transition-all group">
        <div className="flex items-start gap-4">
          <div className="text-6xl">{featured.image}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2.5 py-1 rounded-full border bg-violet-500/20 text-violet-300 border-violet-500/30">
                {featured.category}
              </span>
              <span className="text-xs text-gray-500">{featured.readTime} {t('minRead')}</span>
              <span className="text-xs text-gray-600">
                {new Date(featured.date).toLocaleDateString(dateLocale)}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
              {featured.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{featured.description}</p>
            <span className="inline-block mt-4 text-violet-400 text-sm group-hover:underline">
              {t('readMore')}
            </span>
          </div>
        </div>
      </Link>

      {/* Rest of posts */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((post) => (
          <Link key={post.slug} href={`${base}/blog/${post.slug}`}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500/50 hover:-translate-y-0.5 transition-all group">
            <div className="text-4xl mb-4">{post.image}</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full border bg-pink-500/20 text-pink-300 border-pink-500/30">
                {post.category}
              </span>
              <span className="text-xs text-gray-600">{post.readTime} {t('minRead')}</span>
            </div>
            <h2 className="font-bold text-white mb-2 text-sm leading-snug group-hover:text-violet-300 transition-colors">
              {post.title}
            </h2>
            <p className="text-xs text-gray-500 line-clamp-2">{post.description}</p>
            <div className="mt-3 text-xs text-gray-600">
              {new Date(post.date).toLocaleDateString(dateLocale)}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
