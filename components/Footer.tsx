import Link from 'next/link'
import { getTranslations, getLocale } from "next-intl/server"
import FooterNewsletter from '@/components/FooterNewsletter'

export default async function Footer() {
  const locale = await getLocale()
  const t = await getTranslations('footer')
  const base = `/${locale}`
  const isRTL = locale === 'ar'

  return (
    <footer className="mt-20 border-t border-gray-800/50" style={{ background: '#07090f' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
                🤖
              </div>
              <span className="text-white font-black text-lg">
                AI<span className="text-violet-400">Tools</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{t('description')}</p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 transition-colors text-sm">
                𝕏
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
                <circle cx="7" cy="7" r="1" fill="currentColor"/>
              </svg>
              {t('categories')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {[
                { cat: 'chatbot', label: t('chatbot') },
                { cat: 'image', label: t('image') },
                { cat: 'writing', label: t('writing') },
                { cat: 'code', label: t('code') },
                { cat: 'video', label: t('video') },
                { cat: 'audio', label: isRTL ? 'الصوت' : 'Audio' },
              ].map(({ cat, label }) => (
                <li key={cat}>
                  <Link href={`${base}/?category=${cat}`}
                    className="hover:text-violet-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparisons */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 20V10M12 20V4M6 20v-6"/>
              </svg>
              {t('comparisons')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href={`${base}/compare/chatgpt-vs-gemini`} className="hover:text-violet-400 transition-colors">ChatGPT vs Gemini</Link></li>
              <li><Link href={`${base}/compare/chatgpt-vs-claude`} className="hover:text-violet-400 transition-colors">ChatGPT vs Claude</Link></li>
              <li><Link href={`${base}/compare/midjourney-vs-dall-e-3`} className="hover:text-violet-400 transition-colors">Midjourney vs DALL·E</Link></li>
              <li><Link href={`${base}/compare/claude-vs-gemini`} className="hover:text-violet-400 transition-colors">Claude vs Gemini</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M13 2v7h7"/>
              </svg>
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href={`${base}/blog`} className="hover:text-violet-400 transition-colors">{isRTL ? 'المدونة' : 'Blog'}</Link></li>
              <li><Link href={`${base}/categories`} className="hover:text-violet-400 transition-colors">{isRTL ? 'التصنيفات' : 'Categories'}</Link></li>
              <li><Link href={`${base}/compare`} className="hover:text-violet-400 transition-colors">{isRTL ? 'المقارنة' : 'Compare'}</Link></li>
              <li><Link href={`${base}/submit`} className="hover:text-violet-400 transition-colors">{isRTL ? 'أضف أداة' : 'Submit Tool'}</Link></li>
              <li><Link href={`${base}/about`} className="hover:text-violet-400 transition-colors">{isRTL ? 'من نحن' : 'About Us'}</Link></li>
              <li><Link href={`${base}/contact`} className="hover:text-violet-400 transition-colors">{isRTL ? 'تواصل معنا' : 'Contact'}</Link></li>
              <li><Link href={`${base}/privacy`} className="hover:text-violet-400 transition-colors">{isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter mini */}
        <FooterNewsletter isRTL={isRTL} />

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} AI Tools — {t('rights')}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              {isRTL ? 'يعمل بشكل طبيعي' : 'All systems operational'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
