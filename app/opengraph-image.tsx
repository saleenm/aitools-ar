import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AI Tools — Best AI Tools Directory'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 50%, #0f0f1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Purple glow */}
        <div style={{
          position: 'absolute',
          width: 600,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(139, 92, 246, 0.15)',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{
            background: 'linear-gradient(135deg, #7c3aed, #db2777)',
            borderRadius: 16,
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 36,
          }}>🤖</div>
          <span style={{ fontSize: 48, fontWeight: 900, color: 'white', letterSpacing: -2 }}>
            AI<span style={{ color: '#a78bfa' }}>Tools</span>
          </span>
        </div>

        {/* Title */}
        <div style={{
          fontSize: 52,
          fontWeight: 900,
          color: 'white',
          textAlign: 'center',
          lineHeight: 1.15,
          marginBottom: 20,
          maxWidth: 900,
        }}>
          Best AI Tools Directory
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 26,
          color: '#9ca3af',
          textAlign: 'center',
          maxWidth: 800,
          marginBottom: 40,
        }}>
          Compare ChatGPT, Gemini, Midjourney & 100+ AI tools
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 48, marginTop: 8 }}>
          {[['100+', 'AI Tools'], ['6', 'Languages'], ['10', 'Categories']].map(([val, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 36, fontWeight: 900, color: '#a78bfa' }}>{val}</span>
              <span style={{ fontSize: 18, color: '#6b7280', marginTop: 4 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
