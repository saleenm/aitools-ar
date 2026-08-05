'use client'

const NORDVPN_URL = 'https://nordvpn.sjv.io/c/7544129/417838/7452'

const LABELS: Record<string, { title: string; subtitle: string; cta: string; badge: string; disclaimer: string }> = {
  ar: {
    title: '🔓 بعض أدوات AI محجوبة في منطقتك',
    subtitle: 'NordVPN يفتح ChatGPT وكل أدوات AI بدون قيود — خصم 73%',
    cta: 'احصل على NordVPN الآن',
    badge: 'موصى به',
    disclaimer: 'رابط شراكة — نحصل على عمولة بدون تكلفة إضافية عليك',
  },
  en: {
    title: '🔓 Some AI Tools Are Blocked in Your Region',
    subtitle: 'NordVPN unlocks ChatGPT & all AI tools instantly — 73% OFF',
    cta: 'Get NordVPN Now',
    badge: 'Recommended',
    disclaimer: 'Affiliate link — we earn a commission at no extra cost to you',
  },
  fr: {
    title: '🔓 Certains outils AI sont bloqués dans votre région',
    subtitle: 'NordVPN débloque ChatGPT et tous les outils AI — 73% de réduction',
    cta: 'Obtenir NordVPN',
    badge: 'Recommandé',
    disclaimer: 'Lien affilié — nous touchons une commission sans frais supplémentaires',
  },
  es: {
    title: '🔓 Algunas herramientas AI están bloqueadas',
    subtitle: 'NordVPN desbloquea ChatGPT y todas las herramientas AI — 73% OFF',
    cta: 'Obtener NordVPN',
    badge: 'Recomendado',
    disclaimer: 'Enlace de afiliado — ganamos una comisión sin costo adicional',
  },
  tr: {
    title: '🔓 Bazı AI araçları bölgenizde engelli',
    subtitle: 'NordVPN, ChatGPT ve tüm AI araçlarını anında açar — %73 indirim',
    cta: 'NordVPN Al',
    badge: 'Önerilen',
    disclaimer: 'Ortaklık bağlantısı — ek maliyet olmadan komisyon alırız',
  },
  de: {
    title: '🔓 Einige KI-Tools sind in Ihrer Region gesperrt',
    subtitle: 'NordVPN entsperrt ChatGPT und alle KI-Tools — 73% Rabatt',
    cta: 'NordVPN holen',
    badge: 'Empfohlen',
    disclaimer: 'Affiliate-Link — wir verdienen eine Provision ohne Mehrkosten',
  },
}

export default function VPNBanner({ locale = 'en' }: { locale?: string }) {
  const l = LABELS[locale] || LABELS.en
  const isRTL = locale === 'ar'

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative overflow-hidden rounded-2xl p-5"
      style={{
        background: 'linear-gradient(135deg, #070d1a 0%, #0d1930 60%, #08101f 100%)',
        border: '1px solid rgba(70,135,255,0.25)',
      }}
    >
      {/* Glow */}
      <div className="absolute -top-8 -start-8 w-32 h-32 rounded-full opacity-20 blur-3xl"
        style={{ background: '#4687FF' }} />
      <div className="absolute -bottom-8 -end-8 w-24 h-24 rounded-full opacity-15 blur-3xl"
        style={{ background: '#1FCECB' }} />

      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
            style={{ background: 'rgba(70,135,255,0.15)', color: '#4687FF' }}>
            🛡️ VPN
          </span>
          <span className="text-[10px] font-black px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(245,197,24,0.15)', color: '#f5c518' }}>
            {l.badge}
          </span>
        </div>

        <h3 className="text-white font-black text-sm mb-1 leading-snug">{l.title}</h3>
        <p className="text-gray-400 text-xs mb-4">{l.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mb-3">
          {['✅ ChatGPT', '✅ Midjourney', '✅ Claude', '✅ Gemini'].map(item => (
            <span key={item} className="text-gray-300 text-xs">{item}</span>
          ))}
        </div>

        <a
          href={NORDVPN_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm text-white transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          style={{
            background: 'linear-gradient(135deg, #4687FF, #2563eb)',
            boxShadow: '0 4px 20px rgba(70,135,255,0.3)',
          }}
        >
          {l.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d={isRTL ? 'M19 12H5M12 5l-7 7 7 7' : 'M5 12h14M12 5l7 7-7 7'} />
          </svg>
        </a>

        <p className="text-gray-700 text-[9px] mt-2 text-center">{l.disclaimer}</p>
      </div>
    </div>
  )
}
