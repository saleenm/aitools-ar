export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Filter skeleton */}
      <div className="mb-8 space-y-3">
        <div className="h-10 bg-gray-800 rounded-xl animate-pulse w-full" />
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-7 w-20 bg-gray-800 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
      {/* Cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gray-800 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-800 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-gray-800 rounded animate-pulse w-1/2" />
              </div>
            </div>
            <div className="h-3 bg-gray-800 rounded animate-pulse" />
            <div className="h-3 bg-gray-800 rounded animate-pulse w-4/5" />
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-800 rounded-full animate-pulse" />
              <div className="h-6 w-24 bg-gray-800 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
