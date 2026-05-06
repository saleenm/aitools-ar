-- ① جدول التقييمات
CREATE TABLE IF NOT EXISTS reviews (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  tool_slug     text NOT NULL REFERENCES tools(slug) ON DELETE CASCADE,
  user_id       uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  user_name     text NOT NULL DEFAULT 'مجهول',
  rating        int NOT NULL CHECK (rating BETWEEN 1 AND 5),
  body          text,
  helpful_count int DEFAULT 0,
  created_at    timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS reviews_tool_idx ON reviews (tool_slug);
CREATE INDEX IF NOT EXISTS reviews_user_idx ON reviews (user_id);

-- ② RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- قراءة عامة
CREATE POLICY "public read reviews"
  ON reviews FOR SELECT USING (true);

-- أي مسجّل يكتب تقييماً واحداً لكل أداة
CREATE POLICY "authenticated insert review"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- يعدّل تقييمه فقط
CREATE POLICY "owner update review"
  ON reviews FOR UPDATE
  USING (auth.uid() = user_id);

-- يحذف تقييمه فقط
CREATE POLICY "owner delete review"
  ON reviews FOR DELETE
  USING (auth.uid() = user_id);

-- ③ جدول الأصوات المفيدة
CREATE TABLE IF NOT EXISTS review_votes (
  review_id  uuid REFERENCES reviews(id) ON DELETE CASCADE,
  user_id    uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  PRIMARY KEY (review_id, user_id)
);

ALTER TABLE review_votes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth vote" ON review_votes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "read votes" ON review_votes FOR SELECT USING (true);
CREATE POLICY "delete own vote" ON review_votes FOR DELETE USING (auth.uid() = user_id);

-- ④ دالة لزيادة helpful_count
CREATE OR REPLACE FUNCTION increment_helpful(review_id uuid, uid uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO review_votes (review_id, user_id) VALUES (review_id, uid)
  ON CONFLICT DO NOTHING;
  UPDATE reviews SET helpful_count = helpful_count + 1 WHERE id = review_id;
END;
$$;
