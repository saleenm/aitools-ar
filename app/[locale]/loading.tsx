export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ background: '#030712' }}>
      {/* Hero skeleton */}
      <div className="text-center py-16 mb-8">
        <div className="h-4 w-32 bg-gray-800 rounded-full mx-auto mb-6 animate-pulse" />
        <div className="h-10 w-3/4 bg-gray-800 rounded-xl mx-auto mb-4 animate-pulse" />
        <div className="h-10 w-1/2 bg-gray-800 rounded-xl mx-auto mb-6 animate-pulse" />
        <div className="h-4 w-2/3 bg-gray-800/60 rounded-lg mx-auto animate-pulse" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-2xl p-5 border border-gray-800/60 animate-pulse"
            style={{ background: 'rgba(17,24,39,0.6)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gray-800" />
              <div className="flex-1">
                <div className="h-4 bg-gray-800 rounded w-2/3 mb-2" />
                <div className="h-3 bg-gray-800/60 rounded w-1/2" />
              </div>
            </div>
            <div className="h-3 bg-gray-800/60 rounded mb-2" />
            <div className="h-3 bg-gray-800/60 rounded w-4/5 mb-4" />
            <div className="h-1 bg-gray-800 rounded-full mb-4" />
            <div className="flex gap-2">
              <div className="h-6 w-20 bg-gray-800 rounded-full" />
              <div className="h-6 w-24 bg-gray-800 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
