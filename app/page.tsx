import { Suspense } from 'react'
import { Metadata } from 'next'
import FilterBar from '@/components/FilterBar'
import ToolCard from '@/components/ToolCard'
import { MOCK_TOOLS } from '@/lib/mock'
import { Tool } from '@/lib/types'

export const metadata: Metadata = {
  title: 'أدوات AI | دليل أفضل أدوات الذكاء الاصطناعي بالعربية',
  description:
    'اكتشف وقارن أفضل أدوات الذكاء الاصطناعي: ChatGPT، Gemini، Midjourney، Claude وأكثر من 100 أداة مع مراجعات شاملة بالعربية.',
  keywords: ['أدوات AI', 'ذكاء اصطناعي', 'ChatGPT', 'Gemini', 'مقارنة AI'],
  openGraph: {
    title: 'أدوات AI — دليل الذكاء الاصطناعي بالعربية',
    description: 'قارن أفضل أدوات الذكاء الاصطناعي بالعربية',
    type: 'website',
    locale: 'ar_SA',
  },
}

interface PageProps {
  searchParams: { category?: string; pricing?: string; q?: string }
}

function filterTools(tools: Tool[], params: PageProps['searchParams']): Tool[] {
  return tools.filter((t) => {
    if (params.category && params.category !== 'all' && t.category !== params.category) return false
    if (params.pricing && params.pricing !== 'all' && t.pricing !== params.pricing) return false
    if (params.q) {
      const q = params.q.toLowerCase()
      if (
        !t.name.toLowerCase().includes(q) &&
        !t.name_ar.includes(q) &&
        !t.tagline_ar.includes(q) &&
        !t.tags.some((tag) => tag.includes(q))
      )
        return false
    }
    return true
  })
}

export default function HomePage({ searchParams }: PageProps) {
  const tools = filterTools(MOCK_TOOLS, searchParams)
  const featuredTools = MOCK_TOOLS.filter((t) => t.is_featured)
  const isFiltered = searchParams.category || searchParams.pricing || searchParams.q

  return (
    <>
      {/* Hero */}
      {!isFiltered && (
        <section className="relative overflow-hidden bg-gray-950 pt-20 pb-16 px-4 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs mb-6">
              🚀 أكثر من 100 أداة AI مراجعة بالعربية
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              اكتشف أفضل أدوات{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-400 to-pink-400">
                الذكاء الاصطناعي
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              مقارنات شاملة ومراجعات دقيقة لأدوات AI بالعربية — اختر الأداة المناسبة لاحتياجاتك
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-500 mb-10">
              <div><span className="text-white font-bold text-lg">100+</span><br />أداة</div>
              <div><span className="text-white font-bold text-lg">10</span><br />فئة</div>
              <div><span className="text-white font-bold text-lg">مجاني</span><br />100%</div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {featuredTools.slice(0, 4).map((tool) => (
                <a key={tool.slug} href={`/tools/${tool.slug}`}
                  className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-sm text-gray-300 hover:border-violet-500 hover:text-white transition-all">
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <Suspense>
            <FilterBar />
          </Suspense>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            {tools.length > 0 ? `عرض ${tools.length} أداة` : 'لا توجد نتائج'}
          </p>
          {isFiltered && (
            <a href="/" className="text-xs text-violet-400 hover:underline">إزالة الفلاتر ✕</a>
          )}
        </div>

        {tools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-600">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg">لا توجد أدوات تطابق بحثك</p>
            <a href="/" className="mt-4 inline-block text-violet-400 hover:underline text-sm">عرض جميع الأدوات</a>
          </div>
        )}

        {!isFiltered && (
          <section className="mt-16 rounded-2xl bg-gradient-to-l from-violet-900/40 to-pink-900/20 border border-violet-700/30 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">قارن بين الأدوات</h2>
            <p className="text-gray-400 mb-6">مقارنة جانبية مفصّلة تساعدك تختار الأداة المناسبة</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/compare/chatgpt-vs-gemini" className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm transition-colors">ChatGPT مقابل Gemini</a>
              <a href="/compare/chatgpt-vs-claude" className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors border border-gray-700">ChatGPT مقابل Claude</a>
              <a href="/compare/midjourney-vs-dall-e-3" className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm transition-colors border border-gray-700">Midjourney مقابل DALL·E 3</a>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
