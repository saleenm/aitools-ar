import { ImageResponse } from 'next/og'
import { getToolsForCompare } from '@/lib/data'

export const runtime = 'edge'
export const alt = 'AI Tools Comparison'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: { locale: string; slug: string }
}

export default async function Image({ params }: Props) {
  const { slug } = params
  const idx = slug.indexOf('-vs-')
  const s1 = idx !== -1 ? slug.slice(0, idx) : ''
  const s2 = idx !== -1 ? slug.slice(idx + 4) : ''
  const [t1, t2] = s1 && s2 ? await getToolsForCompare(s1, s2) : [null, null]

  const name1 = t1?.name ?? s1
  const name2 = t2?.name ?? s2
  const r1 = t1?.rating ?? 0
  const r2 = t2?.rating ?? 0

  return new ImageResponse(
    (
      <div style={{
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 60%, #0f0f1a 100%)',
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'sans-serif', padding: '60px 80px',
      }}>
        <div style={{ fontSize: 22, color: '#7c3aed', fontWeight: 700, marginBottom: 32 }}>⚖️ AI Tools — Comparison</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 48, marginBottom: 40 }}>
          {/* Tool 1 */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'rgba(124,58,237,0.1)', border: '2px solid rgba(124,58,237,0.3)',
            borderRadius: 24, padding: '32px 48px',
          }}>
            <span style={{ fontSize: 72, fontWeight: 900, color: '#a78bfa' }}>{name1}</span>
            <span style={{ fontSize: 28, color: '#fbbf24', marginTop: 8 }}>{'★'.repeat(Math.round(r1))} {r1}</span>
          </div>

          {/* VS */}
          <div style={{
            fontSize: 48, fontWeight: 900, color: '#6b7280',
            background: 'rgba(255,255,255,0.05)', borderRadius: '50%',
            width: 90, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>vs</div>

          {/* Tool 2 */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: 'rgba(219,39,119,0.1)', border: '2px solid rgba(219,39,119,0.3)',
            borderRadius: 24, padding: '32px 48px',
          }}>
            <span style={{ fontSize: 72, fontWeight: 900, color: '#f472b6' }}>{name2}</span>
            <span style={{ fontSize: 28, color: '#fbbf24', marginTop: 8 }}>{'★'.repeat(Math.round(r2))} {r2}</span>
          </div>
        </div>

        <div style={{ fontSize: 24, color: '#9ca3af' }}>Full comparison — features, pricing & ratings</div>
        <div style={{ fontSize: 18, color: '#4b5563', marginTop: 12 }}>aitools-ar.vercel.app</div>
      </div>
    ),
    { ...size }
  )
}
