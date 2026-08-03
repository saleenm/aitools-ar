import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')
  if (!email) {
    return new NextResponse('Invalid link', { status: 400 })
  }

  await supabase.from('newsletter_subscribers').delete().eq('email', email.toLowerCase())

  return new NextResponse(`
    <!DOCTYPE html><html><head><meta charset="UTF-8"><title>Unsubscribed</title></head>
    <body style="font-family:Arial,sans-serif;text-align:center;padding:80px;background:#0a0a0f;color:#fff;">
      <h1 style="color:#7c3aed;">✅ Unsubscribed</h1>
      <p style="color:#a1a1aa;">You've been removed from our newsletter.</p>
      <a href="https://aitools-ar.vercel.app" style="color:#7c3aed;">← Back to site</a>
    </body></html>
  `, { headers: { 'Content-Type': 'text/html' } })
}
