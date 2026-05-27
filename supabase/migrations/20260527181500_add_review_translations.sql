-- Add translation columns to reviews
ALTER TABLE public.reviews
  ADD COLUMN IF NOT EXISTS text_en TEXT,
  ADD COLUMN IF NOT EXISTS text_ro TEXT;

-- Recreate reviews_public view with translation columns
DROP VIEW IF EXISTS public.reviews_public;

CREATE VIEW public.reviews_public
WITH (security_invoker = on) AS
SELECT id, name, city, rating, text, text_en, text_ro, created_at
FROM public.reviews
WHERE approved = true;

-- Grant read access to new columns
GRANT SELECT (id, name, city, rating, text, text_en, text_ro, approved, created_at) ON public.reviews TO anon, authenticated;
GRANT SELECT ON public.reviews_public TO anon, authenticated;
