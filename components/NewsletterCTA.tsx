'use client'
import { useState } from 'react'

interface Props { locale?: string }
const COPY: Record<string, { title: string; sub: string; placeholder: string; btn: string; success: string }> = {
  ar: { title: '📬 ابقَ على اطلاع بأحدث أدوات AI', sub: 'نرسل لك أفضل أداة كل أسبوع — بدون إزعاج', placeholder: 'بريدك الإلكتروني', btn: 'اشترك مجاناً', success: '✅ تم الاشتراك! نراك قريباً' },
  en: { title: '📬 Stay Updated on AI Tools', sub: 'We send you the best tool every week — no spam', placeholder: 'Your email', btn: 'Subscribe Free', success: '✅ Subscribed! See you soon' },
  fr: { title: '📬 Restez informé sur les outils IA', sub: 'Nous vous envoyons le meilleur outil chaque semaine', placeholder: 'Votre email', btn: "S'abonner", success: '✅ Abonné!' },
  es: { title: '📬 Mantente actualizado sobre herramientas IA', sub: 'Te enviamos la mejor herramienta cada semana', placeholder: 'Tu email', btn: 'Suscribirse', success: '✅ ¡Suscrito!' },
  tr: { title: '📬 AI Araçlarında Güncel Kalın', sub: 'Her hafta en iyi aracı göndeririz', placeholder: 'E-posta adresiniz', btn: 'Ücretsiz Abone Ol', success: '✅ Abone olundu!' },
  de: { title: '📬 Bleiben Sie über KI-Tools informiert', sub: 'Wir senden Ihnen jede Woche das beste Tool', placeholder: 'Ihre E-Mail', btn: 'Kostenlos abonnieren', success: '✅ Abonniert!' },
}
export default function NewsletterCTA({ locale = 'en' }: Props) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const c = COPY[locale] || COPY.en
  const isRTL = locale === 'ar'
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
          <div className="flex gap-3 max-w-md mx-auto">
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder={c.placeholder} type="email"
              className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-violet-500" />
            <button onClick={() => email.includes('@') && setDone(true)}
              className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
              {c.btn}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
