const BASE_URL = 'https://aitools-ar.vercel.app'
const LOCALES = ['ar', 'en', 'fr', 'es', 'tr', 'de']

const HREFLANG_MAP: Record<string, string> = {
  ar: 'ar',
  en: 'en',
  fr: 'fr',
  es: 'es',
  tr: 'tr',
  de: 'de',
}

export function buildAlternates(path: string, locale: string = 'ar') {
  const languages: Record<string, string> = {}
  for (const loc of LOCALES) {
    languages[HREFLANG_MAP[loc]] = `${BASE_URL}/${loc}${path}`
  }
  languages['x-default'] = `${BASE_URL}/en${path}`
  return {
    canonical: `${BASE_URL}/${locale}${path}`,
    languages,
  }
}

export function buildToolJsonLd(tool: {
  name: string
  description_ar: string
  tagline_en?: string | null
  pricing: string
  price_monthly: number | null
  rating: number
  reviews_count: number
  website_url: string
  category: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.tagline_en || tool.description_ar,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    url: tool.website_url,
    offers: {
      '@type': 'Offer',
      price: tool.pricing === 'free' ? '0' : String(tool.price_monthly ?? 0),
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating,
      reviewCount: tool.reviews_count,
      bestRating: 5,
      worstRating: 1,
    },
  }
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI Tools',
    url: BASE_URL,
    description: 'Discover and compare the best AI tools — reviews, comparisons, and guides in 6 languages.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/en?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}
