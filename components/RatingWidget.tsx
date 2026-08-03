'use client'
import { useState, useEffect } from 'react'

interface Props {
  toolSlug: string
  labels?: { rate: string; rated: string; votes: string }
}

const defaultLabels = { rate: 'Rate this tool', rated: 'Your rating', votes: 'votes' }

export default function RatingWidget({ toolSlug, labels = defaultLabels }: Props) {
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(0)
  const [average, setAverage] = useState(0)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    fetch(`/api/rate?slug=${toolSlug}`)
      .then(r => r.json())
      .then(d => { setAverage(d.average); setCount(d.count) })
      .catch(() => {})
  }, [toolSlug])

  async function handleRate(star: number) {
    if (loading || done) return
    setSelected(star)
    setLoading(true)
    try {
      const res = await fetch('/api/rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool_slug: toolSlug, rating: star }),
      })
      const data = await res.json()
      if (data.success) {
        setAverage(data.average)
        setCount(data.count)
        setDone(true)
      }
    } finally {
      setLoading(false)
    }
  }

  const display = hovered || selected || 0

  return (
    <div className="flex flex-col items-start gap-2">
      <p className="text-sm text-gray-400">{done ? labels.rated : labels.rate}</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            onClick={() => handleRate(star)}
            onMouseEnter={() => !done && setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            disabled={loading}
            className="text-2xl transition-transform hover:scale-125 disabled:cursor-not-allowed"
            style={{ color: star <= (display || Math.round(average)) ? '#f59e0b' : '#374151' }}
          >
            ★
          </button>
        ))}
      </div>
      {count > 0 && (
        <p className="text-xs text-gray-500">
          {average} / 5 &nbsp;·&nbsp; {count} {labels.votes}
        </p>
      )}
    </div>
  )
}
