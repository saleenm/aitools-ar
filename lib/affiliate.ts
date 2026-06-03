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
  // Midjourney
  'midjourney': {
    url: 'https://www.midjourney.com/home?ref=aitools-ar',
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
  // Perplexity
  'perplexity': {
    url: 'https://www.perplexity.ai/?ref=aitools-ar',
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
  // GitHub Copilot
  'github-copilot': {
    url: 'https://github.com/features/copilot?ref=aitools-ar',
    label: 'Try GitHub Copilot',
  },
  // Notion AI
  'notion-ai': {
    url: 'https://www.notion.so/product/ai?ref=aitools-ar',
    label: 'Try Notion AI',
  },
  // Jasper
  'jasper': {
    url: 'https://www.jasper.ai/?ref=aitools-ar',
    label: 'Try Jasper',
  },
  // Copy.ai
  'copy-ai': {
    url: 'https://www.copy.ai/?ref=aitools-ar',
    label: 'Try Copy.ai Free',
    badge: 'Free',
  },
  // ElevenLabs
  'elevenlabs': {
    url: 'https://elevenlabs.io/?ref=aitools-ar',
    label: 'Try ElevenLabs',
  },
  // Runway
  'runway': {
    url: 'https://runwayml.com/?ref=aitools-ar',
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
  // Grammarly
  'grammarly': {
    url: 'https://www.grammarly.com/?ref=aitools-ar',
    label: 'Try Grammarly Free',
    badge: 'Free',
  },
  // Canva AI
  'canva-ai': {
    url: 'https://www.canva.com/ai-image-generator/?ref=aitools-ar',
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
