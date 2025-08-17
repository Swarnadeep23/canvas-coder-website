import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nwlkmtsuiipznpxjcbjh.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53bGttdHN1aWlwem5weGpjYmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTA2MjcsImV4cCI6MjA2OTM4NjYyN30.jI3UsgOUDYrXzaTd0nsMcU-WE0mCrzoGiCfLpDIeV4w'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database connection string for direct PostgreSQL access
export const dbConfig = {
  host: 'db.nwlkmtsuiipznpxjcbjh.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'dexter2006',
  ssl: true
} 