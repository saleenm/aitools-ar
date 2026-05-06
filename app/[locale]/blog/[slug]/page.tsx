import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { getBlogPost, getRecentPosts } from '@/lib/blog'
import AdUnit from '@/components/AdUnit'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  const posts = getRecentPosts(100)
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: post.title + ' | أدوات AI',
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

// Simple markdown-like renderer
function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-white mt-6 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-white mt-8 mb-4 pb-2 border-b border-gray-800">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-semibold text-violet-300 mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="text-gray-400 flex items-start gap-2 mb-1">
          <span className="text-violet-400 mt-1 flex-shrink-0">•</span>
          <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
        </li>
      )
    } else if (line.startsWith('```')) {
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i} className="bg-gray-800 border border-gray-700 rounded-xl p-4 my-4 overflow-x-auto text-sm text-gray-300 font-mono text-left" dir="ltr">
          {codeLines.join('\n')}
        </pre>
      )
    } else if (line.startsWith('| ')) {
      const tableLines: string[] = [line]
      i++
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].match(/^\|[-| ]+\|$/)) tableLines.push(lines[i])
        i++
      }
      const rows = tableLines.map((r) =>
        r.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map((c) => c.trim())
      )
      elements.push(
        <div key={i} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-800">
                {rows[0].map((cell, ci) => (
                  <th key={ci} className="px-4 py-2 text-right text-gray-300 font-semibold border border-gray-700">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? '' : 'bg-gray-800/30'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 text-gray-400 border border-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    } else if (line.startsWith('---')) {
      elements.push(<hr key={i} className="border-gray-800 my-6" />)
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-gray-400 leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
        />
      )
    }
    i++
  }

  return elements
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const relatedPosts = getRecentPosts(4).filter((p) => p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'أدوات AI' },
    publisher: { '@type': 'Organization', name: 'أدوات AI' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-violet-400 transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-violet-400 transition-colors">المدونة</Link>
          <span>/</span>
          <span className="text-white truncate max-w-[200px]">{post.title}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Article */}
          <article className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="text-6xl mb-5">{post.image}</div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.readTime} دقائق قراءة</span>
                <span className="text-xs text-gray-600">
                  {new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                {post.title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">{post.description}</p>
            </div>

            {/* Ad — top of article */}
            <AdUnit slot="5193847261" format="horizontal" className="mb-6" />

            {/* Content */}
            <div className="prose-custom">
              <ul className="list-none p-0 m-0">
                {renderContent(post.content)}
              </ul>
            </div>

            {/* Ad — bottom of article */}
            <AdUnit slot="7384920156" format="rectangle" className="mt-8" />

            {/* Share */}
            <div className="mt-10 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500 mb-3">شارك المقال:</p>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent('https://aitools-ar.vercel.app/blog/' + post.slug)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm transition-colors border border-gray-700"
                >
                  𝕏 تغريد
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + 'https://aitools-ar.vercel.app/blog/' + post.slug)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm transition-colors border border-gray-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* CTA */}
            <div className="bg-gradient-to-b from-violet-900/30 to-pink-900/20 border border-violet-700/30 rounded-2xl p-5 text-center">
              <p className="text-white font-bold mb-2">جرّب الأدوات بنفسك</p>
              <p className="text-gray-400 text-xs mb-4">قارن أفضل أدوات AI مجاناً</p>
              <Link href="/" className="block px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors">
                استكشف الأدوات
              </Link>
            </div>

            {/* Related posts */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h3 className="font-bold text-white mb-4">مقالات ذات صلة</h3>
              <div className="space-y-3">
                {relatedPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`}
                    className="flex items-start gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors group"
                  >
                    <span className="text-xl flex-shrink-0">{p.image}</span>
                    <span className="group-hover:text-violet-400 transition-colors leading-snug">{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular comparisons */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h3 className="font-bold text-white mb-4">مقارنات شائعة</h3>
              <div className="space-y-2">
                {[
                  { label: 'ChatGPT vs Gemini', href: '/compare/chatgpt-vs-gemini' },
                  { label: 'ChatGPT vs Claude', href: '/compare/chatgpt-vs-claude' },
                  { label: 'Midjourney vs DALL·E 3', href: '/compare/midjourney-vs-dall-e-3' },
                ].map((item) => (
                  <Link key={item.href} href={item.href}
                    className="block text-sm text-gray-400 hover:text-violet-400 transition-colors"
                  >
                    ⚖️ {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
