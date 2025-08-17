-- Database Setup for CANVAS CODER Contact Form
-- Run this SQL in your Supabase SQL Editor

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from your website
CREATE POLICY "Allow inserts from website" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads (optional - for admin panel)
CREATE POLICY "Allow reads" ON contact_submissions
  FOR SELECT USING (true);

-- Optional: Create an index for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC); 