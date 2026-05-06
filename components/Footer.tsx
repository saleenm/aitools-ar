import Link from 'next/link'
import { getTranslations, getLocale } from "next-intl/server"

export default async function Footer() {
  const locale = await getLocale()
  const t = await getTranslations('footer')
  const base = `/${locale}`

  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <span>🤖</span>
            <span className="text-white">AI<span className="text-violet-400">Tools</span></span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">{t('description')}</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">{t('categories')}</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href={`${base}/?category=chatbot`} className="hover:text-violet-400 transition-colors">{t('chatbot')}</Link></li>
            <li><Link href={`${base}/?category=image`} className="hover:text-violet-400 transition-colors">{t('image')}</Link></li>
            <li><Link href={`${base}/?category=writing`} className="hover:text-violet-400 transition-colors">{t('writing')}</Link></li>
            <li><Link href={`${base}/?category=code`} className="hover:text-violet-400 transition-colors">{t('code')}</Link></li>
            <li><Link href={`${base}/?category=video`} className="hover:text-violet-400 transition-colors">{t('video')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">{t('comparisons')}</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href={`${base}/compare/chatgpt-vs-gemini`} className="hover:text-violet-400 transition-colors">ChatGPT vs Gemini</Link></li>
            <li><Link href={`${base}/compare/chatgpt-vs-claude`} className="hover:text-violet-400 transition-colors">ChatGPT vs Claude</Link></li>
            <li><Link href={`${base}/compare/midjourney-vs-dall-e-3`} className="hover:text-violet-400 transition-colors">Midjourney vs DALL·E 3</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} AI Tools — {t('rights')}
      </div>
    </footer>
  )
}
