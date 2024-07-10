import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://anqktxglzcdzjibzespc.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
console.log(supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
