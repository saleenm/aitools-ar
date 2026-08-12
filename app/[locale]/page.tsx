import { Suspense } from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import FilterBar from '@/components/FilterBar'
import ToolCard from '@/components/ToolCard'
import TypewriterText from '@/components/AIHero'
import NewsletterCTA from '@/components/NewsletterCTA'
import VPNBanner from '@/components/VPNBanner'
import { getTools } from '@/lib/data'
import { buildAlternates, buildWebsiteJsonLd } from '@/lib/seo'
import { CATEGORY_ICONS, CATEGORY_LABELS } from '@/lib/types'
import Link from 'next/link'

// ISR: homepage tool list revalidated every 30 minutes.
export const revalidate = 1800

const META: Record<string, { title: string; description: string }> = {
  ar: { title: 'أدوات AI | دليل أفضل أدوات الذكاء الاصطناعي', description: 'اكتشف وقارن أفضل أدوات الذكاء الاصطناعي: ChatGPT، Gemini، Midjourney، Claude وأكثر من 100 أداة مع مراجعات شاملة.' },
  en: { title: 'AI Tools | Best Artificial Intelligence Tools Directory', description: 'Discover and compare the best AI tools: ChatGPT, Gemini, Midjourney, Claude and 100+ tools with comprehensive reviews.' },
  fr: { title: 'Outils IA | Répertoire des meilleurs outils d\'intelligence artificielle', description: 'Découvrez et comparez les meilleurs outils IA: ChatGPT, Gemini, Midjourney, Claude et plus de 100 outils.' },
  es: { title: 'Herramientas IA | Directorio de las mejores herramientas de IA', description: 'Descubre y compara las mejores herramientas de IA: ChatGPT, Gemini, Midjourney, Claude y más de 100 herramientas.' },
  tr: { title: 'Yapay Zeka Araçları | En İyi AI Araçları Rehberi', description: "En iyi yapay zeka araçlarını keşfedin: ChatGPT, Gemini, Midjourney, Claude ve 100'den fazla araç." },
  de: { title: 'KI-Tools | Das beste KI-Tools-Verzeichnis', description: 'Entdecken Sie die besten KI-Tools: ChatGPT, Gemini, Midjourney, Claude und über 100 Tools.' },
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params
  const m = META[locale] || META.en
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates('', params.locale),
    openGraph: { title: m.title, description: m.description, type: 'website', url: `https://aitools-ar.vercel.app/${locale}`, siteName: 'AI Tools' },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  }
}

interface PageProps {
  params: { locale: string }
  searchParams: { category?: string; pricing?: string; q?: string }
}

const COMPARE_LABEL: Record<string, string> = {
  ar: 'قارن الأدوات', en: 'Compare Tools', fr: 'Comparer', es: 'Comparar', tr: 'Karşılaştır', de: 'Vergleichen',
}
const TOP_COMPS = [
  ['chatgpt', 'gemini'],
  ['chatgpt', 'claude'],
  ['midjourney', 'dall-e-3'],
  ['claude', 'gemini'],
  ['chatgpt', 'perplexity'],
  ['github-copilot', 'chatgpt'],
]

export default async function HomePage({ params, searchParams }: PageProps) {
  const { locale } = params
  const t = await getTranslations('home')
  const tc = await getTranslations('comparePage')
  const isRTL = locale === 'ar'

  const [tools, featuredTools] = await Promise.all([
    getTools({ category: searchParams.category, pricing: searchParams.pricing, search: searchParams.q }),
    getTools({ limit: 6 }),
  ])
  const isFiltered = searchParams.category || searchParams.pricing || searchParams.q
  const base = `/${locale}`

  const jsonLd = buildWebsiteJsonLd()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      {!isFiltered && (
        <section className="relative overflow-hidden border-b border-gray-800/50">
          {/* Animated gradient background */}
          <div className="absolute inset-0 animate-gradient-shift"
            style={{ background: 'linear-gradient(135deg, #030712 0%, #0d0521 25%, #030712 50%, #050a1a 75%, #030712 100%)', backgroundSize: '400% 400%' }} />

          {/* Dot pattern overlay */}
          <div className="absolute inset-0 dot-pattern opacity-40" />

          {/* Floating orbs */}
          <div className="absolute top-16 left-[10%] w-64 h-64 rounded-full animate-orb-drift pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute top-8 right-[8%] w-80 h-80 rounded-full animate-orb-drift-reverse pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }} />
          <div className="absolute bottom-0 left-[30%] w-96 h-48 rounded-full animate-float-slow pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none animate-pulse-glow"
            style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(30px)' }} />

          <div className="relative max-w-4xl mx-auto px-4 pt-24 pb-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold mb-8 animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.1))', borderColor: 'rgba(139,92,246,0.4)', color: '#c4b5fd', boxShadow: '0 0 20px rgba(139,92,246,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse inline-block" />
              🚀 {t('badge')}
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse inline-block" style={{ animationDelay: '0.5s' }} />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              {t('title')}{' '}
              <span className="hero-gradient-text"><TypewriterText /></span>
            </h1>

            <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Stats bar — glassmorphism */}
            <div className="inline-flex items-center gap-0 rounded-2xl overflow-hidden mb-12 glass-morphism"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)' }}>
              {[
                { val: t('stat1Value'), label: t('stat1Label'), color: 'text-violet-300' },
                { val: t('stat2Value'), label: t('stat2Label'), color: 'text-pink-300' },
                { val: t('stat3Value'), label: t('stat3Label'), color: 'text-blue-300' },
              ].map((s, i) => (
                <div key={i} className={`px-8 py-4 text-center ${i < 2 ? 'border-e border-white/10' : ''}`}>
                  <div className={`font-black text-2xl ${s.color}`}>{s.val}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Featured tools quick links */}
            <div className="flex flex-wrap justify-center gap-2">
              {featuredTools.map((tool) => (
                <Link key={tool.slug} href={`${base}/tools/${tool.slug}`}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm text-gray-300 hover:text-white transition-all glow-border-hover"
                  style={{ background: 'rgba(13,17,23,0.7)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}>
                  <span>{CATEGORY_ICONS[tool.category]}</span>
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CATEGORY QUICK PILLS ── */}
      {!isFiltered && (
        <div className="border-b border-gray-800/50" style={{ background: '#07090f' }}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-2">
            {(Object.keys(CATEGORY_LABELS) as Array<keyof typeof CATEGORY_LABELS>).map((cat) => (
              <Link key={cat} href={`${base}/?category=${cat}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-800/60 text-xs text-gray-400 hover:text-white hover:border-violet-500/40 transition-all"
                style={{ background: 'rgba(13,17,23,0.6)' }}>
                {CATEGORY_ICONS[cat]}
                {isRTL ? CATEGORY_LABELS[cat] : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── TRENDING SECTION ── */}
      {!isFiltered && (
        <div className="border-b border-gray-800/50" style={{ background: '#030712' }}>
          <div className="max-w-7xl mx-auto px-4 py-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
              🔥 {isRTL ? 'أكثر الأدوات شعبية' : 'Trending Tools'}
            </p>
            <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {featuredTools.slice(0, 6).map((tool) => (
                <Link key={tool.slug} href={`${base}/tools/${tool.slug}`}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-800/60 hover:border-violet-500/50 hover:bg-gray-800/40 transition-all"
                  style={{ background: 'rgba(13,17,23,0.8)' }}>
                  <span className="text-base">{CATEGORY_ICONS[tool.category]}</span>
                  <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{tool.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── NEW THIS MONTH SECTION ── */}
      {!isFiltered && (
        <div className="border-b border-gray-800/50" style={{ background: '#040810' }}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                🆕 {isRTL ? 'جديد هذا الشهر' : 'New This Month'}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {featuredTools.slice(0, 6).map((tool) => (
                <Link key={tool.slug} href={`${base}/tools/${tool.slug}`}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-800/60 hover:border-emerald-500/40 transition-all text-center group"
                  style={{ background: 'rgba(13,17,23,0.8)' }}>
                  <span className="text-2xl">{CATEGORY_ICONS[tool.category]}</span>
                  <span className="text-xs text-gray-300 font-medium group-hover:text-emerald-300 transition-colors leading-tight">{tool.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-bold">
                    ✨ New
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8" style={{ background: '#030712' }}>

        {/* Filter bar */}
        <div className="mb-6">
          <Suspense>
            <FilterBar />
          </Suspense>
        </div>

        {/* Count + reset */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
            {tools.length > 0 ? `${tools.length} ${t('allTools')}` : '—'}
          </p>
          {isFiltered && (
            <Link href={base} className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors">
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
              {isRTL ? 'إزالة الفلتر' : 'Clear filter'}
            </Link>
          )}
        </div>

        {/* Tools grid */}
        {tools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.slice(0, 6).map((tool) => <ToolCard key={tool.id} tool={tool} />)}
            </div>

            {tools.length > 6 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {tools.slice(6).map((tool) => <ToolCard key={tool.id} tool={tool} />)}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)' }}>
              <svg width="32" height="32" fill="none" stroke="#6d28d9" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <p className="text-gray-400 text-lg font-semibold mb-2">{isRTL ? 'لا توجد نتائج' : 'No results found'}</p>
            <Link href={base} className="mt-4 inline-block text-violet-400 hover:text-violet-300 text-sm transition-colors">
              {isRTL ? 'عرض جميع الأدوات' : 'View all tools'} →
            </Link>
          </div>
        )}

        {/* ── COMPARE CTA ── */}
        {!isFiltered && (
          <section className="mt-16 rounded-2xl p-8 text-center overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(236,72,153,0.08) 100%)', border: '1px solid rgba(139,92,246,0.25)' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-bold mb-4">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                {COMPARE_LABEL[locale] || COMPARE_LABEL.en}
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{tc('title')}</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">{tc('subtitle')}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {TOP_COMPS.map(([a, b]) => (
                  <Link key={`${a}-${b}`} href={`${base}/compare/${a}-vs-${b}`}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${a === 'chatgpt' && b === 'gemini' ? 'text-white' : 'bg-gray-800/80 hover:bg-gray-700 text-white border border-gray-700/60'}`}
                    style={a === 'chatgpt' && b === 'gemini' ? { background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' } : {}}>
                    {a.replace(/-/g,' ').replace(/\b\w/g, c => c.toUpperCase())} {tc('vsLabel')} {b.replace(/-/g,' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── PROFESSIONS CTA ── */}
        {!isFiltered && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                🧑‍💼 {isRTL ? 'أدوات AI حسب المهنة' : 'AI Tools by Profession'}
              </p>
              <Link href={`${base}/professions`} className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
                {isRTL ? 'عرض الكل ←' : 'View all →'}
              </Link>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
              {[
                { emoji: '⚖️', label: { ar: 'محامون', en: 'Lawyers', fr: 'Avocats', es: 'Abogados', tr: 'Avukatlar', de: 'Anwälte' }, slug: 'ai-tools-for-lawyers-2026' },
                { emoji: '🏗️', label: { ar: 'معماريون', en: 'Architects', fr: 'Architectes', es: 'Arquitectos', tr: 'Mimarlar', de: 'Architekten' }, slug: 'ai-tools-for-architects-2026' },
                { emoji: '🏥', label: { ar: 'أطباء', en: 'Doctors', fr: 'Médecins', es: 'Médicos', tr: 'Doktorlar', de: 'Ärzte' }, slug: 'ai-tools-for-doctors-2026' },
                { emoji: '📚', label: { ar: 'معلمون', en: 'Teachers', fr: 'Enseignants', es: 'Maestros', tr: 'Öğretmenler', de: 'Lehrer' }, slug: 'ai-tools-for-teachers-2026' },
                { emoji: '💰', label: { ar: 'محاسبون', en: 'Accountants', fr: 'Comptables', es: 'Contables', tr: 'Muhasebeciler', de: 'Buchhalter' }, slug: 'ai-tools-for-accountants-2026' },
                { emoji: '📊', label: { ar: 'مسوقون', en: 'Marketers', fr: 'Marketeurs', es: 'Marketeros', tr: 'Pazarlamacılar', de: 'Marketer' }, slug: 'ai-tools-for-marketers-2026' },
                { emoji: '🏠', label: { ar: 'عقارات', en: 'Real Estate', fr: 'Immobilier', es: 'Inmobiliaria', tr: 'Gayrimenkul', de: 'Immobilien' }, slug: 'ai-tools-for-real-estate-2026' },
                { emoji: '👔', label: { ar: 'HR', en: 'HR', fr: 'RH', es: 'RRHH', tr: 'İK', de: 'HR' }, slug: 'ai-tools-for-hr-2026' },
                { emoji: '⚙️', label: { ar: 'مهندسون', en: 'Engineers', fr: 'Ingénieurs', es: 'Ingenieros', tr: 'Mühendisler', de: 'Ingenieure' }, slug: 'ai-tools-for-engineers-2026' },
              ].map((p) => (
                <Link key={p.slug} href={`${base}/blog/${p.slug}`}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-800/60 hover:border-violet-500/40 hover:bg-gray-800/30 transition-all text-center group"
                  style={{ background: 'rgba(13,17,23,0.8)' }}>
                  <span className="text-2xl">{p.emoji}</span>
                  <span className="text-[11px] text-gray-400 font-medium group-hover:text-violet-300 transition-colors leading-tight">
                    {p.label[locale as keyof typeof p.label] || p.label.en}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* VPN Banner */}
        {!isFiltered && (
          <div className="mt-8">
            <VPNBanner locale={locale} />
          </div>
        )}

        {/* Newsletter CTA */}
        {!isFiltered && (
          <div className="mt-8">
            <NewsletterCTA locale={locale} />
          </div>
        )}

      </main>
    </>
  )
}
