import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are an AI tools expert assistant for aitools-ar.vercel.app.
Your job is to help users find the best AI tool for their needs.
Be concise, friendly, and always suggest 2-3 specific tools with brief reasons.
If the user writes in Arabic, respond in Arabic. If English, respond in English.
Keep responses under 150 words. Always mention the tool name clearly.

Available tool categories: Chatbots, Image Generation, Video, Coding, Writing, SEO, Productivity, Music, Translation, Research.

Example tools: ChatGPT, Claude, Gemini, Grok, Midjourney, DALL-E 3, Stable Diffusion, GitHub Copilot, Cursor, Jasper, Copy.ai, Grammarly, ElevenLabs, Suno, Runway, Perplexity, Notion AI, Canva AI, Writesonic, DeepL.`

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()
    if (!message || typeof message !== 'string' || message.length > 500) {
      return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: message }],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    return NextResponse.json({ reply: text })
  } catch (err) {
    console.error('Chat error:', err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
