
CREATE TABLE public.post_likes (
  slug text PRIMARY KEY,
  likes integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view post likes"
  ON public.post_likes FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE OR REPLACE FUNCTION public.increment_post_like(p_slug text)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count integer;
BEGIN
  IF p_slug IS NULL OR length(p_slug) = 0 OR length(p_slug) > 200 THEN
    RAISE EXCEPTION 'Invalid slug';
  END IF;

  INSERT INTO public.post_likes (slug, likes)
  VALUES (p_slug, 1)
  ON CONFLICT (slug)
  DO UPDATE SET likes = public.post_likes.likes + 1, updated_at = now()
  RETURNING likes INTO new_count;

  RETURN new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_post_like(text) TO anon, authenticated;
