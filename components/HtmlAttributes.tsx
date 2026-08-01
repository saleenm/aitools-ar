'use client'

import { useEffect } from 'react'

const RTL = ['ar']

export default function HtmlAttributes({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = RTL.includes(locale) ? 'rtl' : 'ltr'
  }, [locale])
  return null
}
