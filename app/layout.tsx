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
  verification: { google: 'sDzwcgIdvyo9Ro2QYcV3kh9TPr3Uh3zGiVftTAxKQmY' },
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

// lang/dir are set dynamically by [locale]/layout.tsx via HtmlAttributes client component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={cairo.variable}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4272698055490735"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning className="font-cairo bg-gray-950 text-gray-100 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
