import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const RTL_LOCALES = ['ar']
const SUPPORTED = ['ar', 'en', 'fr', 'es', 'tr', 'de']

interface Props {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params
  if (!SUPPORTED.includes(locale)) notFound()

  const messages = await getMessages()
  const dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <body className="bg-gray-950 text-gray-100 antialiased min-h-screen flex flex-col font-cairo">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
