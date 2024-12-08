import "dotenv/config";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPA_PROJECT_URL;
const supabaseKey = process.env.SUPA_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase.from("users").select();

console.log({ data, error });
