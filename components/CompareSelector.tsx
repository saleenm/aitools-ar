'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Tool, CATEGORY_ICONS } from '@/lib/types'

interface Props { tools: Tool[]; locale: string }

export default function CompareSelector({ tools, locale }: Props) {
  const router = useRouter()
  const t = useTranslations('comparePage')
  const [tool1, setTool1] = useState('')
  const [tool2, setTool2] = useState('')

  function goCompare() {
    if (!tool1 || !tool2 || tool1 === tool2) return
    router.push(`/${locale}/compare/${tool1}-vs-${tool2}`)
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">{t('selectFirst').replace('...','')}</label>
          <select value={tool1} onChange={(e) => setTool1(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors">
            <option value="">{t('selectFirst')}</option>
            {tools.map((t) => (
              <option key={t.slug} value={t.slug} disabled={t.slug === tool2}>
                {CATEGORY_ICONS[t.category]} {t.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">{t('selectSecond').replace('...','')}</label>
          <select value={tool2} onChange={(e) => setTool2(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors">
            <option value="">{t('selectSecond')}</option>
            {tools.map((t) => (
              <option key={t.slug} value={t.slug} disabled={t.slug === tool1}>
                {CATEGORY_ICONS[t.category]} {t.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={goCompare} disabled={!tool1 || !tool2 || tool1 === tool2}
        className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold transition-colors">
        {t('compareButton')} →
      </button>
    </div>
  )
}
