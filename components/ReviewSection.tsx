'use client'

import { useState, useEffect } from 'react'

interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
}

interface Props {
  toolSlug: string
  toolName: string
}

export default function ReviewSection({ toolSlug, toolName }: Props) {
  const KEY = `aitools_reviews_${toolSlug}`
  const [reviews, setReviews] = useState<Review[]>([])
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(KEY)
    if (stored) setReviews(JSON.parse(stored))
  }, [KEY])

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!rating || !text.trim()) return
    const rv: Review = {
      id: Date.now().toString(),
      name: name.trim() || 'مستخدم مجهول',
      rating,
      text: text.trim(),
      date: new Date().toISOString().slice(0, 10),
    }
    const updated = [rv, ...reviews]
    setReviews(updated)
    localStorage.setItem(KEY, JSON.stringify(updated))
    setRating(0); setName(''); setText('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const avg = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : null

  return (
    <section className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-white">
          تقييمات المستخدمين
          {reviews.length > 0 && (
            <span className="mr-2 text-sm font-normal text-gray-500">({reviews.length})</span>
          )}
        </h2>
        {avg && (
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-white font-bold">{avg}</span>
          </div>
        )}
      </div>

      {/* Write review */}
      <form onSubmit={submit} className="mb-8 pb-8 border-b border-gray-800">
        <p className="text-sm text-gray-400 mb-3">أضف تقييمك لـ {toolName}</p>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              onMouseEnter={() => setHovered(n)}
              onMouseLeave={() => setHovered(0)}
              className="text-2xl transition-transform hover:scale-110"
            >
              <span className={(hovered || rating) >= n ? 'text-yellow-400' : 'text-gray-700'}>
                ★
              </span>
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="اسمك (اختياري)"
            maxLength={40}
            className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 text-sm transition-colors"
          />
          <button
            type="submit"
            disabled={!rating || !text.trim()}
            className="py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-bold transition-colors"
          >
            {submitted ? '✓ شكراً!' : 'نشر التقييم'}
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="شارك تجربتك مع الأداة..."
          maxLength={400}
          rows={3}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 text-sm transition-colors resize-none"
        />
      </form>

      {/* Reviews list */}
      {reviews.length === 0 ? (
        <p className="text-center text-gray-600 py-6">لا توجد تقييمات بعد — كن أول من يقيّم!</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((rv) => (
            <div key={rv.id} className="bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <span className="font-semibold text-white text-sm">👤 {rv.name}</span>
                <span className="text-gray-600 text-xs">{rv.date}</span>
              </div>
              <div className="flex mb-2">
                {'★'.repeat(rv.rating).split('').map((s, i) => (
                  <span key={i} className="text-yellow-400 text-sm">{s}</span>
                ))}
                {'☆'.repeat(5 - rv.rating).split('').map((s, i) => (
                  <span key={i} className="text-gray-700 text-sm">{s}</span>
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{rv.text}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
