
-- 1. Create a safe public view that excludes the contact column
CREATE OR REPLACE VIEW public.reviews_public
WITH (security_invoker = off) AS
SELECT id, name, city, rating, text, created_at
FROM public.reviews
WHERE approved = true;

GRANT SELECT ON public.reviews_public TO anon, authenticated;

-- 2. Drop the overly broad public SELECT policy on reviews (admins keep their own SELECT policy)
DROP POLICY IF EXISTS "Anyone can view approved reviews" ON public.reviews;

-- 3. Replace the always-true INSERT policy with a validated one
DROP POLICY IF EXISTS "Anyone can insert reviews" ON public.reviews;

CREATE POLICY "Anyone can insert valid reviews"
ON public.reviews
FOR INSERT
TO anon, authenticated
WITH CHECK (
  approved = true
  AND rating BETWEEN 1 AND 5
  AND length(btrim(name)) BETWEEN 1 AND 80
  AND length(btrim(city)) BETWEEN 1 AND 80
  AND length(btrim(contact)) BETWEEN 3 AND 120
  AND length(btrim(text)) BETWEEN 20 AND 2000
);

-- 4. Remove reviews from realtime publication to prevent leaking contact via broadcast
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'reviews'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime DROP TABLE public.reviews';
  END IF;
END $$;

-- 5. Lock down the internal admin-bootstrap trigger function — it is only meant to run from a trigger
REVOKE EXECUTE ON FUNCTION public.handle_new_user_admin() FROM PUBLIC, anon, authenticated;
