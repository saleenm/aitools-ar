interface Props {
  rating: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

export default function RatingStars({ rating, max = 5, size = 'md' }: Props) {
  const sizes = { sm: 'text-xs', md: 'text-sm', lg: 'text-lg' }
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = max - full - (half ? 1 : 0)

  return (
    <span className={`${sizes[size]} inline-flex gap-0.5`} aria-label={`${rating}/${max}`}>
      {'★'.repeat(full).split('').map((s, i) => (
        <span key={`f-${i}`} className="text-yellow-400">{s}</span>
      ))}
      {half && <span className="text-yellow-300">⯨</span>}
      {'☆'.repeat(empty).split('').map((s, i) => (
        <span key={`e-${i}`} className="text-gray-600">{s}</span>
      ))}
    </span>
  )
}
