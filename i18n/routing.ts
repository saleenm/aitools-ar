import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ar', 'en', 'fr', 'es', 'tr', 'de'],
  defaultLocale: 'ar',
})

export type Locale = (typeof routing.locales)[number]
