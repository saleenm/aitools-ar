import { Tool } from './types'
import { supabase } from './supabase'

// ── Fetch all tools (with optional filters) ──────────────────
export async function getTools(opts?: {
  category?: string
  pricing?: string
  search?: string
  limit?: number
}): Promise<Tool[]> {
  let query = supabase
    .from('tools')
    .select('*')
    .order('is_featured', { ascending: false })
    .order('rating', { ascending: false })

  if (opts?.category && opts.category !== 'all') {
    query = query.eq('category', opts.category)
  }
  if (opts?.pricing && opts.pricing !== 'all') {
    query = query.eq('pricing', opts.pricing)
  }
  if (opts?.search) {
    query = query.or(
      `name.ilike.%${opts.search}%,name_ar.ilike.%${opts.search}%,tags.cs.{${opts.search}}`
    )
  }
  if (opts?.limit) {
    query = query.limit(opts.limit)
  }

  const { data, error } = await query
  if (error) throw error
  return (data as Tool[]) ?? []
}

// ── Fetch single tool by slug ─────────────────────────────────
export async function getToolBySlug(slug: string): Promise<Tool | null> {
  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) return null
  return data as Tool
}

// ── Fetch two tools for comparison ────────────────────────────
export async function getToolsForCompare(
  slug1: string,
  slug2: string
): Promise<[Tool | null, Tool | null]> {
  const { data } = await supabase
    .from('tools')
    .select('*')
    .in('slug', [slug1, slug2])

  const tools = (data as Tool[]) ?? []
  return [
    tools.find((t) => t.slug === slug1) ?? null,
    tools.find((t) => t.slug === slug2) ?? null,
  ]
}

// ── Fetch all slugs (for generateStaticParams) ────────────────
export async function getAllSlugs(): Promise<string[]> {
  const { data } = await supabase.from('tools').select('slug')
  return (data ?? []).map((r: { slug: string }) => r.slug)
}

// ── Featured tools for home hero ─────────────────────────────
export async function getFeaturedTools(limit = 6): Promise<Tool[]> {
  return getTools({ limit })
}
