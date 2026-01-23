-- Allow anyone to delete interest payments
CREATE POLICY "Anyone can delete interest payments"
ON public.interest_payments
FOR DELETE
USING (true);