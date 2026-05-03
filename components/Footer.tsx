import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <span>🤖</span>
            <span className="text-white">أدوات<span className="text-violet-400">AI</span></span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            دليلك الشامل لأفضل أدوات الذكاء الاصطناعي — مقارنات دقيقة بالعربية.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">الفئات</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/?category=chatbot" className="hover:text-violet-400 transition-colors">💬 المحادثة</Link></li>
            <li><Link href="/?category=image" className="hover:text-violet-400 transition-colors">🎨 الصور</Link></li>
            <li><Link href="/?category=writing" className="hover:text-violet-400 transition-colors">✍️ الكتابة</Link></li>
            <li><Link href="/?category=code" className="hover:text-violet-400 transition-colors">💻 البرمجة</Link></li>
            <li><Link href="/?category=video" className="hover:text-violet-400 transition-colors">🎬 الفيديو</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">مقارنات شائعة</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/compare/chatgpt-vs-gemini" className="hover:text-violet-400 transition-colors">ChatGPT مقابل Gemini</Link></li>
            <li><Link href="/compare/chatgpt-vs-claude" className="hover:text-violet-400 transition-colors">ChatGPT مقابل Claude</Link></li>
            <li><Link href="/compare/midjourney-vs-dall-e-3" className="hover:text-violet-400 transition-colors">Midjourney مقابل DALL·E 3</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} أدوات AI — جميع الحقوق محفوظة
      </div>
    </footer>
  )
}
