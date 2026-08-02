import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, website, category, pricing, description, email } = body

    if (!name || !website || !category || !pricing || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Basic URL validation
    try { new URL(website) } catch {
      return NextResponse.json({ error: 'Invalid website URL' }, { status: 400 })
    }

    const { error } = await supabase.from('tool_submissions').insert({
      name: name.trim().slice(0, 100),
      website: website.trim().slice(0, 500),
      category,
      pricing,
      description: description.trim().slice(0, 1000),
      email: email?.trim().slice(0, 200) || null,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
