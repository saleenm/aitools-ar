'use client'

import { useState } from 'react'
import { CATEGORY_LABELS, ToolCategory } from '@/lib/types'

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', website: '', category: '', pricing: '', description: '', email: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In production: send to Supabase or email API
    setSubmitted(true)
  }

  const categories = Object.entries(CATEGORY_LABELS) as [ToolCategory, string][]

  if (submitted) {
    return (
      <main className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-2xl font-bold text-white mb-3">شكراً لك!</h1>
        <p className="text-gray-400 mb-6">تم استلام اقتراحك وسنراجعه قريباً.</p>
        <a href="/" className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
          العودة للرئيسية
        </a>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-white mb-3">اقترح أداة</h1>
        <p className="text-gray-400">هل تعرف أداة AI رائعة لم تجدها هنا؟ شاركها معنا</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">اسم الأداة *</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="مثال: ChatGPT"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">رابط الموقع *</label>
            <input
              required
              type="url"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              placeholder="https://..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
              dir="ltr"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">الفئة *</label>
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
            >
              <option value="">اختر فئة...</option>
              {categories.map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">التسعير *</label>
            <select
              required
              value={form.pricing}
              onChange={(e) => setForm({ ...form, pricing: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
            >
              <option value="">اختر...</option>
              <option value="free">مجاني</option>
              <option value="freemium">مجاني جزئياً</option>
              <option value="paid">مدفوع</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">وصف مختصر *</label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="ماذا تفعل هذه الأداة؟ ما الذي يميزها؟"
            rows={4}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">بريدك الإلكتروني (اختياري)</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="للتواصل معك إذا احتجنا معلومات إضافية"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
            dir="ltr"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-colors"
        >
          إرسال الاقتراح 🚀
        </button>
      </form>
    </main>
  )
}
