'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { CATEGORY_KEYS } from '@/lib/types'

export default function SubmitPage() {
  const t = useTranslations('submit')
  const tc = useTranslations('categories')
  const locale = useLocale()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', website: '', category: '', pricing: '', description: '', email: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/submit-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'حدث خطأ، حاول مجدداً')
        return
      }
      setSubmitted(true)
    } catch {
      setError('حدث خطأ في الاتصال، حاول مجدداً')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <main className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-2xl font-bold text-white mb-3">{t('successTitle')}</h1>
        <p className="text-gray-400 mb-6">{t('successMessage')}</p>
        <a href={`/${locale}`} className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
          {t('backHome')}
        </a>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-white mb-3">{t('title')}</h1>
        <p className="text-gray-400">{t('subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">{t('nameLabel')} *</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t('namePlaceholder')}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">{t('websiteLabel')} *</label>
            <input
              required
              type="url"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              placeholder={t('websitePlaceholder')}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
              dir="ltr"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">{t('categoryLabel')} *</label>
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
            >
              <option value="">{t('categoryChoose')}</option>
              {CATEGORY_KEYS.map((key) => (
                <option key={key} value={key}>{tc(key)}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">{t('pricingLabel')} *</label>
            <select
              required
              value={form.pricing}
              onChange={(e) => setForm({ ...form, pricing: e.target.value })}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
            >
              <option value="">{t('pricingChoose')}</option>
              <option value="free">{t('pricingFree')}</option>
              <option value="freemium">{t('pricingFreemium')}</option>
              <option value="paid">{t('pricingPaid')}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">{t('descLabel')} *</label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder={t('descPlaceholder')}
            rows={4}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">{t('emailLabel')}</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={t('emailPlaceholder')}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
            dir="ltr"
          />
        </div>

        {error && (
          <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              جاري الإرسال...
            </>
          ) : (
            <>{t('submitButton')} 🚀</>
          )}
        </button>
      </form>
    </main>
  )
}
