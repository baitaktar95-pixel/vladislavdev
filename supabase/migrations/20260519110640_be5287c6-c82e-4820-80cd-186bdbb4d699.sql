-- Allow anyone to insert reviews (auto-approved)
ALTER TABLE public.reviews ALTER COLUMN approved SET DEFAULT true;

CREATE POLICY "Anyone can insert reviews"
ON public.reviews
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Enable realtime
ALTER TABLE public.reviews REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.reviews;