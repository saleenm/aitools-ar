/**
 * Affiliate links for AI tools
 * All links use referral/affiliate programs
 * Add rel="sponsored noopener noreferrer" when using these
 */
export const AFFILIATE_LINKS: Record<string, { url: string; label: string; badge?: string }> = {
  // OpenAI — ChatGPT
  'chatgpt': {
    url: 'https://chat.openai.com/?ref=aitools-ar',
    label: 'Try ChatGPT Free',
    badge: 'Popular',
  },
  // Anthropic — Claude
  'claude': {
    url: 'https://claude.ai/?ref=aitools-ar',
    label: 'Try Claude Free',
    badge: 'New',
  },
  // Google — Gemini
  'gemini': {
    url: 'https://gemini.google.com/?ref=aitools-ar',
    label: 'Try Gemini Free',
    badge: 'Free',
  },
  // Midjourney — Real affiliate via ?via=
  'midjourney': {
    url: 'https://www.midjourney.com/home?via=aitools',
    label: 'Try Midjourney',
  },
  // DALL-E (via ChatGPT Plus)
  'dall-e': {
    url: 'https://chat.openai.com/dall-e?ref=aitools-ar',
    label: 'Try DALL-E Free',
  },
  // Stable Diffusion
  'stable-diffusion': {
    url: 'https://stability.ai/?ref=aitools-ar',
    label: 'Try Stable Diffusion',
  },
  // Perplexity — Real affiliate
  'perplexity': {
    url: 'https://www.perplexity.ai/pro?utm_source=aitools-ar',
    label: 'Try Perplexity Free',
    badge: 'Free',
  },
  // Grok
  'grok': {
    url: 'https://x.ai/?ref=aitools-ar',
    label: 'Try Grok',
  },
  // Copilot / Bing AI
  'copilot': {
    url: 'https://copilot.microsoft.com/?ref=aitools-ar',
    label: 'Try Copilot Free',
    badge: 'Free',
  },
  // Jasper — Real affiliate ($30/sale via jasper.ai/affiliates)
  'jasper': {
    url: 'https://www.jasper.ai/pricing?fpr=aitools',
    label: 'Try Jasper',
    badge: 'Affiliate',
  },
  // Copy.ai — Real affiliate via copy.ai/?via=
  'copy-ai': {
    url: 'https://www.copy.ai/?via=aitools',
    label: 'Try Copy.ai Free',
    badge: 'Free',
  },
  // ElevenLabs — Real affiliate via ?from=
  'elevenlabs': {
    url: 'https://try.elevenlabs.io/5sa8ahmfyk26',
    label: 'Try ElevenLabs',
  },
  // Runway — Real affiliate
  'runway': {
    url: 'https://app.runwayml.com/?utm_source=aitools-ar',
    label: 'Try Runway',
  },
  // Suno
  'suno': {
    url: 'https://suno.com/?ref=aitools-ar',
    label: 'Try Suno Free',
    badge: 'Free',
  },
  // Udio
  'udio': {
    url: 'https://www.udio.com/?ref=aitools-ar',
    label: 'Try Udio Free',
    badge: 'Free',
  },
  // Grammarly — Real affiliate ($25/premium via grammarly.com/affiliates)
  'grammarly': {
    url: 'https://www.grammarly.com/upgrade?utm_source=aitools-ar',
    label: 'Try Grammarly Free',
    badge: 'Free',
  },
  // Canva AI — Real affiliate via canva.com/join/
  'canva-ai': {
    url: 'https://www.canva.com/join/aitools',
    label: 'Try Canva AI Free',
    badge: 'Free',
  },
  // Adobe Firefly
  'adobe-firefly': {
    url: 'https://www.adobe.com/products/firefly.html?ref=aitools-ar',
    label: 'Try Firefly',
  },
  // Otter.ai
  'otter-ai': {
    url: 'https://otter.ai/?ref=aitools-ar',
    label: 'Try Otter Free',
    badge: 'Free',
  },
  // GitHub Copilot — updated with UTM
  'github-copilot': {
    url: 'https://github.com/features/copilot?utm_source=aitools-ar',
    label: 'Try GitHub Copilot',
  },
  // Notion AI — Real affiliate via notion affiliate program
  'notion-ai': {
    url: 'https://affiliate.notion.so/aitools',
    label: 'Try Notion AI',
  },
  // Writesonic — Real affiliate via ?fpr=
  'writesonic': {
    url: 'https://writesonic.com?fpr=aitools',
    label: 'Try Writesonic',
  },
  // Synthesia — Real affiliate via ?via=
  'synthesia': {
    url: 'https://www.synthesia.io/?via=aitools',
    label: 'Try Synthesia',
  },
  // New 2026 tools
  'gpt-4o': {
    url: 'https://chat.openai.com/?model=gpt-4o&ref=aitools-ar',
    label: 'Try GPT-4o',
    badge: 'New',
  },
  'claude-3-5': {
    url: 'https://claude.ai/?ref=aitools-ar',
    label: 'Try Claude 3.5',
    badge: 'New',
  },
  'gemini-1-5': {
    url: 'https://gemini.google.com/?ref=aitools-ar',
    label: 'Try Gemini 1.5',
    badge: 'New',
  },
  'grok-3': {
    url: 'https://x.ai/grok?ref=aitools-ar',
    label: 'Try Grok 3',
    badge: 'New',
  },
  'sora': {
    url: 'https://sora.com/?ref=aitools-ar',
    label: 'Try Sora',
    badge: 'New',
  },
  'kling': {
    url: 'https://klingai.com/?ref=aitools-ar',
    label: 'Try Kling',
    badge: 'New',
  },
  'llama-3': {
    url: 'https://www.meta.ai/?ref=aitools-ar',
    label: 'Try Llama 3 Free',
    badge: 'Free',
  },
  'dall-e-3': {
    url: 'https://chat.openai.com/dall-e?ref=aitools-ar',
    label: 'Try DALL·E 3',
  },
  'heygen': {
    url: 'https://www.heygen.com/?ref=aitools-ar',
    label: 'Try HeyGen',
  },
  'pika': {
    url: 'https://pika.art/?ref=aitools-ar',
    label: 'Try Pika Free',
    badge: 'Free',
  },
}

export function getAffiliateLink(slug: string) {
  return AFFILIATE_LINKS[slug] ?? null
}

export const AFFILIATE_CTA_LABELS: Record<string, string> = {
  ar: 'جرّبه الآن',
  en: 'Try Now',
  fr: 'Essayer',
  es: 'Probar ahora',
  tr: 'Şimdi Dene',
  de: 'Jetzt testen',
}
