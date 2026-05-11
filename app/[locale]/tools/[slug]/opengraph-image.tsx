import { ImageResponse } from 'next/og'
import { getToolBySlug } from '@/lib/data'
import { CATEGORY_ICONS } from '@/lib/types'

export const runtime = 'edge'
export const alt = 'AI Tool'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: { locale: string; slug: string }
}

export default async function Image({ params }: Props) {
  const tool = await getToolBySlug(params.slug)
  const name = tool?.name ?? 'AI Tool'
  const tagline = tool?.tagline_en ?? tool?.tagline_ar ?? ''
  const icon = tool ? CATEGORY_ICONS[tool.category] : '🤖'
  const rating = tool?.rating ?? 0
  const reviews = tool?.reviews_count ?? 0

  return new ImageResponse(
    (
      <div style={{
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 60%, #0f0f1a 100%)',
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        padding: '60px 80px',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', width: 500, height: 250,
          borderRadius: '50%', background: 'rgba(139,92,246,0.12)',
          filter: 'blur(80px)', top: 0, right: 0, display: 'flex',
        }} />

        {/* Site name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 48 }}>
          <span style={{ fontSize: 20, color: '#7c3aed', fontWeight: 700 }}>🤖 AI</span>
          <span style={{ fontSize: 20, color: '#a78bfa', fontWeight: 700 }}>Tools</span>
        </div>

        {/* Tool card */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40, flex: 1 }}>
          {/* Icon */}
          <div style={{
            width: 120, height: 120, borderRadius: 24,
            background: 'rgba(139,92,246,0.15)',
            border: '2px solid rgba(139,92,246,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 64, flexShrink: 0,
          }}>
            {icon}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ fontSize: 64, fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: 16 }}>
              {name}
            </div>
            {tagline && (
              <div style={{ fontSize: 28, color: '#9ca3af', lineHeight: 1.4, maxWidth: 800 }}>
                {tagline.length > 80 ? tagline.slice(0, 80) + '…' : tagline}
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32, marginTop: 32,
        }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {[1,2,3,4,5].map((s) => (
              <span key={s} style={{ fontSize: 28, color: s <= Math.round(rating) ? '#fbbf24' : '#374151' }}>★</span>
            ))}
            <span style={{ fontSize: 24, color: '#f9fafb', fontWeight: 700, marginLeft: 8 }}>{rating}</span>
            <span style={{ fontSize: 20, color: '#6b7280', marginLeft: 4 }}>({reviews.toLocaleString()} reviews)</span>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #7c3aed, #db2777)',
            borderRadius: 12, padding: '12px 28px',
            fontSize: 22, color: 'white', fontWeight: 700,
          }}>
            aitools-ar.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
