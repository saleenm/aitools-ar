'use client'

interface Props {
  isRTL: boolean
}

export default function FooterNewsletter({ isRTL }: Props) {
  return (
    <div className="border-t border-gray-800/50 pt-8 mt-4 mb-6">
      <div className="max-w-md">
        <p className="text-white font-bold text-sm mb-1">
          {isRTL ? '📬 النشرة الأسبوعية' : '📬 Weekly Newsletter'}
        </p>
        <p className="text-gray-500 text-xs mb-3">
          {isRTL ? 'أفضل أداة AI كل أسبوع في بريدك' : 'Best AI tool every week in your inbox'}
        </p>
        <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder={isRTL ? 'بريدك الإلكتروني' : 'Your email'}
            className="flex-1 px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 text-white text-xs placeholder-gray-600 focus:outline-none focus:border-violet-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
            {isRTL ? 'اشترك' : 'Join'}
          </button>
        </form>
      </div>
    </div>
  )
}
