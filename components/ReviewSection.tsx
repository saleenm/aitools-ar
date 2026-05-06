'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { useAuth } from '@/hooks/useAuth'

interface Review {
  id: string
  user_id: string | null
  user_name: string
  rating: number
  body: string
  helpful_count: number
  created_at: string
}

interface Props {
  toolSlug: string
  toolName: string
}

export default function ReviewSection({ toolSlug, toolName }: Props) {
  const supabase = createClient()
  const { user, loading: authLoading, signInWithGoogle, signOut } = useAuth()

  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [body, setBody] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set())

  const fetchReviews = useCallback(async () => {
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .eq('tool_slug', toolSlug)
      .order('helpful_count', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(20)
    setReviews((data as Review[]) ?? [])
    setLoading(false)
  }, [toolSlug]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { fetchReviews() }, [fetchReviews])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!rating || !body.trim() || !user) return
    setSubmitting(true)

    const { error } = await supabase.from('reviews').insert({
      tool_slug: toolSlug,
      user_id: user.id,
      user_name: user.user_metadata?.full_name ?? user.email?.split('@')[0] ?? 'مستخدم',
      rating,
      body: body.trim(),
    })

    if (!error) {
      setRating(0); setBody('')
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      await fetchReviews()
    }
    setSubmitting(false)
  }

  async function voteHelpful(reviewId: string) {
    if (!user || votedIds.has(reviewId)) return
    setVotedIds((prev) => new Set(prev).add(reviewId))
    await supabase.rpc('increment_helpful', { review_id: reviewId, uid: user.id })
    setReviews((prev) =>
      prev.map((r) => r.id === reviewId ? { ...r, helpful_count: r.helpful_count + 1 } : r)
    )
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
        <div className="flex items-center gap-3">
          {avg && (
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-white font-bold">{avg}</span>
            </div>
          )}
          {/* Auth button */}
          {!authLoading && (
            user ? (
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 truncate max-w-[100px]">
                  {user.user_metadata?.full_name ?? user.email?.split('@')[0]}
                </span>
                <button onClick={signOut} className="text-xs text-gray-600 hover:text-red-400 transition-colors">
                  خروج
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                دخول بـ Google
              </button>
            )
          )}
        </div>
      </div>

      {/* Write review */}
      <div className="mb-8 pb-8 border-b border-gray-800">
        {!user ? (
          <div className="text-center py-6 bg-gray-800/40 rounded-xl border border-gray-700">
            <p className="text-gray-400 text-sm mb-3">سجّل دخولك لكتابة تقييم لـ {toolName}</p>
            <button
              onClick={signInWithGoogle}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24"><path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              دخول بـ Google
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
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
                  <span className={(hovered || rating) >= n ? 'text-yellow-400' : 'text-gray-700'}>★</span>
                </button>
              ))}
              {rating > 0 && (
                <span className="text-xs text-gray-500 self-center mr-2">
                  {['', 'سيء', 'مقبول', 'جيد', 'ممتاز', 'رائع'][rating]}
                </span>
              )}
            </div>

            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="شارك تجربتك مع الأداة..."
              maxLength={400}
              rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 text-sm transition-colors resize-none mb-3"
            />

            <button
              type="submit"
              disabled={!rating || !body.trim() || submitting}
              className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-bold transition-colors"
            >
              {submitting ? '...' : submitted ? '✓ شكراً!' : 'نشر التقييم'}
            </button>
          </form>
        )}
      </div>

      {/* Reviews list */}
      {loading ? (
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse bg-gray-800/50 rounded-xl p-4 h-20" />
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <p className="text-center text-gray-600 py-6">لا توجد تقييمات بعد — كن أول من يقيّم!</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((rv) => (
            <div key={rv.id} className="bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-violet-600/30 flex items-center justify-center text-xs text-violet-300 font-bold">
                    {rv.user_name.charAt(0)}
                  </div>
                  <span className="font-semibold text-white text-sm">{rv.user_name}</span>
                </div>
                <span className="text-gray-600 text-xs">
                  {new Date(rv.created_at).toLocaleDateString('ar-SA')}
                </span>
              </div>

              <div className="flex mb-2">
                {[1,2,3,4,5].map((n) => (
                  <span key={n} className={n <= rv.rating ? 'text-yellow-400 text-sm' : 'text-gray-700 text-sm'}>★</span>
                ))}
              </div>

              {rv.body && <p className="text-gray-400 text-sm leading-relaxed mb-3">{rv.body}</p>}

              <button
                onClick={() => voteHelpful(rv.id)}
                disabled={!user || votedIds.has(rv.id)}
                className="text-xs text-gray-600 hover:text-gray-400 disabled:cursor-default transition-colors flex items-center gap-1"
              >
                👍 مفيد {rv.helpful_count > 0 && <span className="text-gray-500">({rv.helpful_count})</span>}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
