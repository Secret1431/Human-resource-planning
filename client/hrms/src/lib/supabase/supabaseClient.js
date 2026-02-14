import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_API;
const supabaseAnonKey = import.meta.env.VITE_ANON;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);