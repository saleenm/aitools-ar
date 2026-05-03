import { MetadataRoute } from 'next'
import { MOCK_TOOLS } from '@/lib/mock'

const BASE_URL = 'https://aitools-ar.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = MOCK_TOOLS.map((tool) => ({
    url: `${BASE_URL}/tools/${tool.slug}`,
    lastModified: new Date(tool.updated_at),
    changeFrequency: 'weekly' as const,
    priority: tool.is_featured ? 0.9 : 0.8,
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

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...toolPages,
    ...comparePages,
  ]
}
