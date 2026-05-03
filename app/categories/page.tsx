import { Metadata } from 'next'
import Link from 'next/link'
import { MOCK_TOOLS } from '@/lib/mock'
import { CATEGORY_LABELS, CATEGORY_ICONS, ToolCategory } from '@/lib/types'

export const metadata: Metadata = {
  title: 'فئات أدوات AI | تصفح حسب التخصص',
  description: 'تصفح أدوات الذكاء الاصطناعي حسب الفئة: محادثة، صور، فيديو، كتابة، برمجة وأكثر.',
}

export default function CategoriesPage() {
  const categories = Object.entries(CATEGORY_LABELS) as [ToolCategory, string][]

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-white mb-3">
          تصفح حسب <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-400 to-pink-400">الفئة</span>
        </h1>
        <p className="text-gray-400">اختر التخصص الذي يناسب احتياجاتك</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(([slug, label]) => {
          const count = MOCK_TOOLS.filter((t) => t.category === slug).length
          const topTool = MOCK_TOOLS.filter((t) => t.category === slug).sort((a, b) => b.rating - a.rating)[0]

          return (
            <Link
              key={slug}
              href={`/?category=${slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500/50 hover:bg-gray-900/80 transition-all duration-200 hover:-translate-y-0.5 text-center"
            >
              <div className="text-4xl mb-3">{CATEGORY_ICONS[slug]}</div>
              <h2 className="font-bold text-white text-sm mb-1 group-hover:text-violet-300 transition-colors">
                {label}
              </h2>
              <p className="text-xs text-gray-500 mb-2">{count} أداة</p>
              {topTool && (
                <p className="text-xs text-gray-600 truncate">أفضل: {topTool.name}</p>
              )}
            </Link>
          )
        })}
      </div>

      {/* All tools CTA */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
        >
          عرض جميع الأدوات
        </Link>
      </div>
    </main>
  )
}
