import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HtmlAttributes from '@/components/HtmlAttributes'

const SUPPORTED = ['ar', 'en', 'fr', 'es', 'tr', 'de']

interface Props {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params
  if (!SUPPORTED.includes(locale)) notFound()

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlAttributes locale={locale} />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </NextIntlClientProvider>
  )
}
