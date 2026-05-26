
-- Recreate the view with security_invoker=on so it respects the caller's RLS
DROP VIEW IF EXISTS public.reviews_public;

CREATE VIEW public.reviews_public
WITH (security_invoker = on) AS
SELECT id, name, city, rating, text, created_at
FROM public.reviews
WHERE approved = true;

-- Re-add a SELECT policy on the base table — but column-level grants will hide `contact`
CREATE POLICY "Public can view approved reviews"
ON public.reviews
FOR SELECT
TO anon, authenticated
USING (approved = true);

-- Column-level lockdown: revoke broad SELECT and grant only safe columns to public roles
REVOKE SELECT ON public.reviews FROM anon, authenticated;
GRANT SELECT (id, name, city, rating, text, approved, created_at) ON public.reviews TO anon, authenticated;

GRANT SELECT ON public.reviews_public TO anon, authenticated;
