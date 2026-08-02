export default function ToolCardSkeleton() {
  return (
    <div className="flex flex-col bg-gray-900/80 border border-gray-800/60 rounded-2xl p-5 min-h-[220px] animate-pulse">
      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Icon placeholder */}
          <div className="w-12 h-12 rounded-xl bg-gray-800/80" />
          <div className="space-y-2">
            <div className="h-4 w-28 rounded bg-gray-800/80" />
            <div className="h-3 w-20 rounded bg-gray-800/60" />
          </div>
        </div>
        {/* Badge placeholder */}
        <div className="h-5 w-14 rounded-full bg-gray-800/60" />
      </div>

      {/* Tagline placeholder */}
      <div className="space-y-2 mb-4 flex-1">
        <div className="h-3 w-full rounded bg-gray-800/70" />
        <div className="h-3 w-4/5 rounded bg-gray-800/60" />
      </div>

      {/* Rating bar */}
      <div className="h-1.5 rounded-full bg-gray-800/80 mb-4" />

      {/* Tags */}
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 rounded-full bg-gray-800/70" />
        <div className="h-6 w-20 rounded-full bg-gray-800/60" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-800/50">
        <div className="h-4 w-16 rounded bg-gray-800/70" />
        <div className="h-4 w-14 rounded bg-gray-800/60" />
      </div>
    </div>
  )
}
