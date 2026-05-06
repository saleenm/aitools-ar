import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data'
import { getRecentPosts } from '@/lib/blog'

const BASE_URL = 'https://aitools-ar.vercel.app'
const LOCALES = ['ar', 'en', 'fr', 'es', 'tr', 'de']

function localizedUrls(path: string, priority: number, changeFreq: 'daily' | 'weekly' | 'monthly') {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs()
  const posts = getRecentPosts(100)

  const toolPages = slugs.flatMap((slug) =>
    localizedUrls(`/tools/${slug}`, 0.8, 'weekly')
  )

  const comparePages = [
    'chatgpt-vs-gemini',
    'chatgpt-vs-claude',
    'midjourney-vs-dall-e-3',
    'gemini-vs-claude',
    'chatgpt-vs-perplexity',
  ].flatMap((slug) => localizedUrls(`/compare/${slug}`, 0.7, 'monthly'))

  const blogPages = posts.flatMap((post) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    ...localizedUrls('', 1.0, 'daily'),
    ...localizedUrls('/categories', 0.8, 'weekly'),
    ...localizedUrls('/compare', 0.7, 'weekly'),
    ...localizedUrls('/blog', 0.9, 'weekly'),
    ...toolPages,
    ...comparePages,
    ...blogPages,
  ]
}
