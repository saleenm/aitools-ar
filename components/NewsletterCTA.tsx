'use client'
import { useState } from 'react'

interface Props { locale?: string }
const COPY: Record<string, { title: string; sub: string; placeholder: string; btn: string; success: string; error: string }> = {
  ar: { title: '📬 ابقَ على اطلاع بأحدث أدوات AI', sub: 'نرسل لك أفضل أداة كل أسبوع — بدون إزعاج', placeholder: 'بريدك الإلكتروني', btn: 'اشترك مجاناً', success: '✅ تم الاشتراك! نراك قريباً', error: 'حدث خطأ، حاول مجدداً' },
  en: { title: '📬 Stay Updated on AI Tools', sub: 'We send you the best tool every week — no spam', placeholder: 'Your email', btn: 'Subscribe Free', success: '✅ Subscribed! See you soon', error: 'Something went wrong, try again' },
  fr: { title: '📬 Restez informé sur les outils IA', sub: 'Nous vous envoyons le meilleur outil chaque semaine', placeholder: 'Votre email', btn: "S'abonner", success: '✅ Abonné!', error: 'Erreur, réessayez' },
  es: { title: '📬 Mantente actualizado sobre herramientas IA', sub: 'Te enviamos la mejor herramienta cada semana', placeholder: 'Tu email', btn: 'Suscribirse', success: '✅ ¡Suscrito!', error: 'Error, inténtalo de nuevo' },
  tr: { title: '📬 AI Araçlarında Güncel Kalın', sub: 'Her hafta en iyi aracı göndeririz', placeholder: 'E-posta adresiniz', btn: 'Ücretsiz Abone Ol', success: '✅ Abone olundu!', error: 'Hata, tekrar deneyin' },
  de: { title: '📬 Bleiben Sie über KI-Tools informiert', sub: 'Wir senden Ihnen jede Woche das beste Tool', placeholder: 'Ihre E-Mail', btn: 'Kostenlos abonnieren', success: '✅ Abonniert!', error: 'Fehler, bitte erneut versuchen' },
}

export default function NewsletterCTA({ locale = 'en' }: Props) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const c = COPY[locale] || COPY.en
  const isRTL = locale === 'ar'

  async function subscribe() {
    if (!email.includes('@')) return
    setLoading(true)
    setErr(false)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      })
      if (res.ok) setDone(true)
      else setErr(true)
    } catch {
      setErr(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="relative overflow-hidden rounded-2xl p-8 text-center"
      style={{ background: 'linear-gradient(135deg, rgba(109,40,217,0.2) 0%, rgba(236,72,153,0.1) 100%)', border: '1px solid rgba(139,92,246,0.3)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 70%)' }} />
      <div className="relative">
        <h3 className="text-xl font-black text-white mb-2">{c.title}</h3>
        <p className="text-gray-400 text-sm mb-6">{c.sub}</p>
        {done ? (
          <p className="text-green-400 font-bold text-lg">{c.success}</p>
        ) : (
          <>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                value={email}
                onChange={e => { setEmail(e.target.value); setErr(false) }}
                onKeyDown={e => e.key === 'Enter' && subscribe()}
                placeholder={c.placeholder}
                type="email"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500"
              />
              <button
                onClick={subscribe}
                disabled={loading}
                className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
                {loading
                  ? <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  : c.btn}
              </button>
            </div>
            {err && <p className="text-red-400 text-xs mt-3">{c.error}</p>}
          </>
        )}
      </div>
    </div>
  )
}
