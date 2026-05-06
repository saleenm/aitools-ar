import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data'
import { getRecentPosts } from '@/lib/blog'

const BASE_URL = 'https://aitools-ar.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs()

  const toolPages = slugs.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const comparePages = [
    'chatgpt-vs-gemini',
    'chatgpt-vs-claude',
    'midjourney-vs-dall-e-3',
    'gemini-vs-claude',
    'chatgpt-vs-perplexity',
  ].map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPages = getRecentPosts(100).map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/categories`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...toolPages,
    ...comparePages,
    ...blogPages,
  ]
}
