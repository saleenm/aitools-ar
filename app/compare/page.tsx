'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MOCK_TOOLS } from '@/lib/mock'
import { CATEGORY_ICONS } from '@/lib/types'

export default function CompareSelectPage() {
  const router = useRouter()
  const [tool1, setTool1] = useState('')
  const [tool2, setTool2] = useState('')

  const popularPairs = [
    { label: 'ChatGPT مقابل Gemini', slug: 'chatgpt-vs-gemini' },
    { label: 'ChatGPT مقابل Claude', slug: 'chatgpt-vs-claude' },
    { label: 'Midjourney مقابل DALL·E 3', slug: 'midjourney-vs-dall-e-3' },
    { label: 'Gemini مقابل Claude', slug: 'gemini-vs-claude' },
    { label: 'ChatGPT مقابل Perplexity', slug: 'chatgpt-vs-perplexity' },
    { label: 'ElevenLabs مقابل Runway', slug: 'elevenlabs-vs-runway-ml' },
  ]

  function goCompare() {
    if (!tool1 || !tool2 || tool1 === tool2) return
    router.push(`/compare/${tool1}-vs-${tool2}`)
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-white mb-3">
          ⚖️ قارن بين الأدوات
        </h1>
        <p className="text-gray-400">اختر أداتين لمقارنتهما جانباً إلى جانب</p>
      </div>

      {/* Selector */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm text-gray-400 mb-2">الأداة الأولى</label>
            <select
              value={tool1}
              onChange={(e) => setTool1(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
            >
              <option value="">اختر أداة...</option>
              {MOCK_TOOLS.map((t) => (
                <option key={t.slug} value={t.slug} disabled={t.slug === tool2}>
                  {CATEGORY_ICONS[t.category]} {t.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">الأداة الثانية</label>
            <select
              value={tool2}
              onChange={(e) => setTool2(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
            >
              <option value="">اختر أداة...</option>
              {MOCK_TOOLS.map((t) => (
                <option key={t.slug} value={t.slug} disabled={t.slug === tool1}>
                  {CATEGORY_ICONS[t.category]} {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={goCompare}
          disabled={!tool1 || !tool2 || tool1 === tool2}
          className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold transition-colors"
        >
          قارن الآن →
        </button>
      </div>

      {/* Popular pairs */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 mb-3">مقارنات شائعة:</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {popularPairs.map((p) => (
            <a
              key={p.slug}
              href={`/compare/${p.slug}`}
              className="flex items-center justify-between px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-violet-500/50 hover:text-violet-300 text-gray-300 text-sm transition-all"
            >
              <span>{p.label}</span>
              <span className="text-gray-600">←</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
