DROP POLICY IF EXISTS "Public can view approved reviews" ON public.reviews;
REVOKE SELECT ON public.reviews FROM anon, authenticated;