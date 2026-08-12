import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data'
import { getRecentPosts } from '@/lib/blog'

const BASE_URL = 'https://aitools-ar.vercel.app'
// Submit only ar + en to Google for focused crawl budget.
// Other locales stay accessible via hreflang.
const LOCALES = ['ar', 'en']

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
    'gemini-vs-claude',
    'chatgpt-vs-perplexity',
    'claude-vs-perplexity',
    'gemini-vs-perplexity',
    'chatgpt-vs-grok',
    'claude-vs-grok',
    'midjourney-vs-dall-e-3',
    'midjourney-vs-stable-diffusion',
    'dall-e-3-vs-stable-diffusion',
    'midjourney-vs-adobe-firefly',
    'jasper-vs-copy-ai',
    'grammarly-vs-jasper',
    'chatgpt-vs-jasper',
    'runway-vs-suno',
    'elevenlabs-vs-suno',
    'github-copilot-vs-chatgpt',
    'notion-ai-vs-chatgpt',
    'chatgpt-vs-copilot',
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
    // BASE_URL without locale excluded — redirects to /ar/ which causes "redirect" warnings in GSC
    ...localizedUrls('', 1.0, 'daily'),
    ...localizedUrls('/categories', 0.8, 'weekly'),
    ...localizedUrls('/compare', 0.7, 'weekly'),
    ...localizedUrls('/blog', 0.9, 'weekly'),
    ...localizedUrls('/professions', 0.8, 'weekly'),
    ...localizedUrls('/about', 0.6, 'monthly'),
    ...localizedUrls('/privacy', 0.5, 'monthly'),
    // contact + submit excluded — form pages with noindex
    ...localizedUrls('/faq', 0.7, 'monthly'),
    ...toolPages,
    ...comparePages,
    ...blogPages,
  ]
}
