import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase env variables! Check your .env file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const storageUrl = (path: string) =>
  `${supabaseUrl}/storage/v1/object/public/jacob-photos/${path}`;
