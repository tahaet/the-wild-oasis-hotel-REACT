import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qpqzuxoxcdwkkgntteyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwcXp1eG94Y2R3a2tnbnR0ZXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMzM5MjQsImV4cCI6MjAzMzgwOTkyNH0.m4hFrBujv6ah4A7XLecdcdqxvPo8SigU1uSSIyMpPSI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
