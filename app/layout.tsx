import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aitools-ar.vercel.app'),
  robots: { index: true, follow: true },
  keywords: ['AI tools', 'artificial intelligence', 'ChatGPT', 'Gemini', 'Midjourney', 'أدوات ذكاء اصطناعي', 'compare AI'],
  authors: [{ name: 'AI Tools' }],
  creator: 'AI Tools',
  publisher: 'AI Tools',
  openGraph: {
    siteName: 'AI Tools',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4272698055490735"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${cairo.variable} font-cairo bg-gray-950 text-gray-100 antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
