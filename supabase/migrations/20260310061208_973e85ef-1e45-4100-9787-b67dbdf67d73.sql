-- Create RSVP table
CREATE TABLE public.rsvp (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  attendance TEXT NOT NULL CHECK (attendance IN ('hadir', 'tidak_hadir')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvp ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert rsvp" ON public.rsvp FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Anyone can read rsvp" ON public.rsvp FOR SELECT TO anon, authenticated USING (true);

-- Create Wishes table
CREATE TABLE public.wishes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.wishes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert wishes" ON public.wishes FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Anyone can read wishes" ON public.wishes FOR SELECT TO anon, authenticated USING (true);