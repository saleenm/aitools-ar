import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'أدوات AI | دليل الذكاء الاصطناعي بالعربية',
    template: '%s | أدوات AI',
  },
  description: 'اكتشف وقارن أفضل أدوات الذكاء الاصطناعي بالعربية — مراجعات شاملة ومقارنات دقيقة.',
  metadataBase: new URL('https://aitools-ar.vercel.app'),
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-cairo bg-gray-950 text-gray-100 antialiased min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
