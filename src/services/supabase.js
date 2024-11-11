import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ipclkfhhfdnyshijaslm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwY2xrZmhoZmRueXNoaWphc2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NTA1NDgsImV4cCI6MjA0MjEyNjU0OH0.7Ipnv6CSgqPs_SxUlRi-KKTqpldhwzujbCC_tqyrfeA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
