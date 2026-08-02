import ToolCardSkeleton from './ToolCardSkeleton'

interface Props {
  count?: number
}

export default function ToolGridSkeleton({ count = 6 }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <ToolCardSkeleton key={i} />
      ))}
    </div>
  )
}
