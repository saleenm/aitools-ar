import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

// Weekly featured tool — rotate manually or auto-pick
const WEEKLY_TOOL = {
  name: 'Perplexity AI',
  description_ar: 'محرك البحث الذكي الذي يجيب بمصادر موثّقة ومحدّثة — الأفضل للبحث السريع',
  description_en: 'The AI search engine that answers with cited, real-time sources — best for quick research',
  url: 'https://aitools-ar.vercel.app',
  price: 'Free + Pro $20/mo',
  emoji: '🔍',
}

function buildEmail(locale: string, email: string): string {
  const isAr = locale === 'ar'
  const tool = WEEKLY_TOOL
  const desc = isAr ? tool.description_ar : tool.description_en
  const unsubLink = `https://aitools-ar.vercel.app/api/unsubscribe?email=${encodeURIComponent(email)}`

  return `<!DOCTYPE html>
<html dir="${isAr ? 'rtl' : 'ltr'}" lang="${locale}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isAr ? 'أداة AI الأسبوع' : 'AI Tool of the Week'}</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:${isAr ? 'Segoe UI,Arial' : 'Inter,Arial'},sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#7c3aed,#ec4899);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
          <p style="color:rgba(255,255,255,0.8);margin:0 0 8px;font-size:13px;letter-spacing:2px;text-transform:uppercase;">
            ${isAr ? '🤖 أداة AI الأسبوع' : '🤖 AI TOOL OF THE WEEK'}
          </p>
          <h1 style="color:#fff;margin:0;font-size:28px;font-weight:900;">${tool.emoji} ${tool.name}</h1>
        </td></tr>
        <!-- Body -->
        <tr><td style="background:#111118;padding:32px;border:1px solid #1f1f2e;border-top:none;">
          <p style="color:#a1a1aa;font-size:16px;line-height:1.7;margin:0 0 24px;">${desc}</p>
          <div style="background:#1a1a2e;border:1px solid #2d2d4e;border-radius:12px;padding:20px;margin-bottom:24px;">
            <p style="color:#7c3aed;font-size:13px;font-weight:700;margin:0 0 8px;text-transform:uppercase;">${isAr ? 'السعر' : 'Price'}</p>
            <p style="color:#fff;font-size:18px;font-weight:800;margin:0;">${tool.price}</p>
          </div>
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
            <a href="${tool.url}" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;text-decoration:none;padding:14px 40px;border-radius:12px;font-size:16px;font-weight:800;">
              ${isAr ? 'استعرض الأداة ←' : 'Explore Tool →'}
            </a>
          </td></tr></table>
        </td></tr>
        <!-- Footer -->
        <tr><td style="background:#0d0d14;border-radius:0 0 16px 16px;padding:20px;text-align:center;border:1px solid #1f1f2e;border-top:none;">
          <p style="color:#52525b;font-size:12px;margin:0;">
            ${isAr ? 'لإلغاء الاشتراك' : 'To unsubscribe'}: <a href="${unsubLink}" style="color:#7c3aed;">${isAr ? 'اضغط هنا' : 'click here'}</a>
          </p>
          <p style="color:#3f3f46;font-size:11px;margin:8px 0 0;">aitools-ar.vercel.app</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  // Protect with secret key
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  try {
    // Fetch all subscribers
    const { data: subscribers, error } = await supabase
      .from('newsletter_subscribers')
      .select('email, locale')
      .limit(500)

    if (error) throw error
    if (!subscribers?.length) {
      return NextResponse.json({ sent: 0, message: 'No subscribers' })
    }

    let sent = 0
    let failed = 0

    // Send in batches of 10 to respect rate limits
    for (let i = 0; i < subscribers.length; i += 10) {
      const batch = subscribers.slice(i, i + 10)
      await Promise.all(batch.map(async (sub) => {
        try {
          await resend.emails.send({
            from: 'AI Tools Weekly <newsletter@aitools-ar.com>',
            to: sub.email,
            subject: sub.locale === 'ar'
              ? `🔍 أداة AI الأسبوع: ${WEEKLY_TOOL.name}`
              : `🔍 AI Tool of the Week: ${WEEKLY_TOOL.name}`,
            html: buildEmail(sub.locale || 'en', sub.email),
          })
          sent++
        } catch {
          failed++
        }
      }))
      // Small delay between batches
      if (i + 10 < subscribers.length) {
        await new Promise(r => setTimeout(r, 200))
      }
    }

    return NextResponse.json({ sent, failed, total: subscribers.length })
  } catch (err) {
    console.error('Newsletter send error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
