'use client'
import { useState } from 'react'

interface Props { isRTL: boolean; locale?: string }

export default function FooterNewsletter({ isRTL, locale = 'ar' }: Props) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) return
    setLoading(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      })
      if (res.ok) setDone(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border-t border-gray-800/50 pt-8 mt-4 mb-6">
      <div className="max-w-md">
        <p className="text-white font-bold text-sm mb-1">
          {isRTL ? '📬 النشرة الأسبوعية' : '📬 Weekly Newsletter'}
        </p>
        <p className="text-gray-500 text-xs mb-3">
          {isRTL ? 'أفضل أداة AI كل أسبوع في بريدك' : 'Best AI tool every week in your inbox'}
        </p>
        {done ? (
          <p className="text-green-400 text-xs font-bold">{isRTL ? '✅ تم الاشتراك!' : '✅ Subscribed!'}</p>
        ) : (
          <form className="flex gap-2" onSubmit={subscribe}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={isRTL ? 'بريدك الإلكتروني' : 'Your email'}
              className="flex-1 px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 text-white text-xs placeholder-gray-600 focus:outline-none focus:border-violet-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
              {loading ? '...' : isRTL ? 'اشترك' : 'Join'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
