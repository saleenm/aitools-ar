export interface Tool {
  id: string
  slug: string
  name: string
  name_ar: string
  tagline_ar: string
  tagline_en?: string | null
  description_ar: string
  category: ToolCategory
  pricing: PricingType
  price_monthly: number | null
  price_yearly: number | null
  features: string[]
  pros: string[]
  cons: string[]
  website_url: string
  logo_url: string
  screenshot_url: string | null
  rating: number
  reviews_count: number
  tags: string[]
  is_featured: boolean
  launched_at: string | null
  updated_at: string
}

export type ToolCategory =
  | 'chatbot'
  | 'image'
  | 'video'
  | 'audio'
  | 'writing'
  | 'code'
  | 'productivity'
  | 'seo'
  | 'design'
  | 'data'

export const CATEGORY_KEYS: ToolCategory[] = [
  'chatbot', 'image', 'video', 'audio', 'writing',
  'code', 'productivity', 'seo', 'design', 'data',
]

export type PricingType = 'free' | 'freemium' | 'paid'

export const CATEGORY_LABELS: Record<ToolCategory, string> = {
  chatbot: 'محادثة وذكاء اصطناعي',
  image: 'توليد الصور',
  video: 'توليد الفيديو',
  audio: 'الصوت والموسيقى',
  writing: 'الكتابة والمحتوى',
  code: 'البرمجة والكود',
  productivity: 'الإنتاجية',
  seo: 'تحسين محركات البحث',
  design: 'التصميم',
  data: 'تحليل البيانات',
}

export const PRICING_LABELS: Record<PricingType, string> = {
  free: 'مجاني',
  freemium: 'مجاني جزئياً',
  paid: 'مدفوع',
}

export const PRICING_COLORS: Record<PricingType, string> = {
  free: 'text-green-400 bg-green-400/10',
  freemium: 'text-yellow-400 bg-yellow-400/10',
  paid: 'text-blue-400 bg-blue-400/10',
}

export const CATEGORY_ICONS: Record<ToolCategory, string> = {
  chatbot: '💬',
  image: '🎨',
  video: '🎬',
  audio: '🎵',
  writing: '✍️',
  code: '💻',
  productivity: '⚡',
  seo: '🔍',
  design: '🖌️',
  data: '📊',
}
