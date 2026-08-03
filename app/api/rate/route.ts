import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: NextRequest) {
  const { tool_slug, rating } = await req.json()

  if (!tool_slug || !rating || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  const { error } = await supabase
    .from('ratings')
    .upsert({ tool_slug, user_ip: ip, rating }, { onConflict: 'tool_slug,user_ip' })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Return updated average
  const { data } = await supabase
    .from('ratings')
    .select('rating')
    .eq('tool_slug', tool_slug)

  const avg = data?.length
    ? data.reduce((sum, r) => sum + r.rating, 0) / data.length
    : rating

  return NextResponse.json({ success: true, average: Math.round(avg * 10) / 10, count: data?.length ?? 1 })
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug')
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 })

  const { data } = await supabase
    .from('ratings')
    .select('rating')
    .eq('tool_slug', slug)

  const avg = data?.length
    ? data.reduce((sum, r) => sum + r.rating, 0) / data.length
    : 0

  return NextResponse.json({
    average: Math.round(avg * 10) / 10,
    count: data?.length ?? 0,
  })
}
