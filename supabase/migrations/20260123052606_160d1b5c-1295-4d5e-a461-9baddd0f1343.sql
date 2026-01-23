-- Create interest_payments table to store payment history
CREATE TABLE public.interest_payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  place TEXT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.interest_payments ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view payments)
CREATE POLICY "Anyone can view interest payments" 
ON public.interest_payments 
FOR SELECT 
USING (true);

-- Create policy for public insert access (anyone can create payments)
CREATE POLICY "Anyone can create interest payments" 
ON public.interest_payments 
FOR INSERT 
WITH CHECK (true);