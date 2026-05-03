import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-7xl mb-6">🤖</div>
      <h1 className="text-4xl font-extrabold text-white mb-3">404</h1>
      <p className="text-gray-400 text-lg mb-2">هذه الصفحة غير موجودة</p>
      <p className="text-gray-600 text-sm mb-8">ربما تم حذف الأداة أو تغيير رابطها</p>
      <div className="flex gap-3">
        <Link href="/" className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors">
          الرئيسية
        </Link>
        <Link href="/categories" className="px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-700">
          تصفح الفئات
        </Link>
      </div>
    </main>
  )
}
