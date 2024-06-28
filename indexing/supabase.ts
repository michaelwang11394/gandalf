import { createClient } from "@supabase/supabase-js";

export function makeSupabase() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
}
