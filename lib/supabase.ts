import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/*
── Supabase SQL Schema ──────────────────────────────────────────
CREATE TABLE tools (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug        text UNIQUE NOT NULL,
  name        text NOT NULL,
  name_ar     text NOT NULL,
  tagline_ar  text NOT NULL,
  description_ar text NOT NULL,
  category    text NOT NULL,
  pricing     text NOT NULL CHECK (pricing IN ('free','freemium','paid')),
  price_monthly  numeric,
  price_yearly   numeric,
  features    text[] DEFAULT '{}',
  pros        text[] DEFAULT '{}',
  cons        text[] DEFAULT '{}',
  website_url text NOT NULL,
  logo_url    text NOT NULL,
  screenshot_url text,
  rating      numeric(3,2) DEFAULT 0,
  reviews_count int DEFAULT 0,
  tags        text[] DEFAULT '{}',
  is_featured boolean DEFAULT false,
  launched_at date,
  updated_at  timestamptz DEFAULT now()
);
CREATE INDEX ON tools (category);
CREATE INDEX ON tools (pricing);
CREATE INDEX ON tools (is_featured);
*/
