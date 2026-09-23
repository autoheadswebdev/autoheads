"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function deleteSellRequest(id: string) {
  try {
    const { error } = await supabase.from("sell_requests").delete().eq("id", id);
    if (error) {
      console.error("Error deleting sell request:", error);
      return { success: false, error: error.message };
    }
    revalidatePath("/admin/sell-requests");
    return { success: true };
  } catch (err: any) {
    console.error("Delete sell request error:", err);
    return { success: false, error: err.message };
  }
}
