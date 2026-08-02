'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4" style={{ background: '#030712' }}>
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl"
          style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
          ⚠️
        </div>
        <h2 className="text-2xl font-black text-white mb-3">حدث خطأ ما</h2>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          واجهنا مشكلة في تحميل هذه الصفحة. يمكنك المحاولة مجدداً أو العودة للرئيسية.
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset}
            className="px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
            حاول مجدداً
          </button>
          <Link href="/"
            className="px-6 py-3 rounded-xl text-sm font-bold text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors">
            الرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
