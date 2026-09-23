"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// We use the service role key to bypass RLS or simply use the anon key if RLS allows public inserts.
// Let's use service role key for reliability on the server side.
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function submitSellRequest(formData: FormData) {
  try {
    const kmDrivenStr = formData.get("km_driven") as string;
    const kmDriven = parseInt(kmDrivenStr, 10);

    const mediaFiles = formData.getAll("media_files") as File[];
    const uploadedUrls: string[] = [];

    if (mediaFiles && mediaFiles.length > 0) {
      for (const file of mediaFiles) {
        if (file.size === 0) continue;

        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
        const filePath = `uploads/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('sell-requests')
          .upload(filePath, file);

        if (!uploadError) {
          const { data: { publicUrl } } = supabase.storage
            .from('sell-requests')
            .getPublicUrl(filePath);
          uploadedUrls.push(publicUrl);
        }
      }
    }

    const newRequest = {
      full_name: formData.get("full_name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      brand: formData.get("brand") as string,
      model: formData.get("model") as string,
      vehicle_number: formData.get("vehicle_number") as string,
      km_driven: isNaN(kmDriven) ? 0 : kmDriven,
      fuel_type: formData.get("fuel_type") as string,
      transmission: formData.get("transmission") as string,
      ownership: formData.get("ownership") as string,
      insurance: formData.get("insurance") as string,
      accident_history: formData.get("accident_history") as string,
      media_urls: uploadedUrls,
    };

    // Validate required fields
    if (
      !newRequest.full_name ||
      !newRequest.phone ||
      !newRequest.brand ||
      !newRequest.model ||
      !newRequest.vehicle_number
    ) {
      return { success: false, error: "Missing required fields" };
    }

    const { error } = await supabase.from("sell_requests").insert([newRequest]);

    if (error) {
      console.error("Error inserting sell request:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Server error submitting sell request:", err);
    return { success: false, error: err.message || "Internal server error" };
  }
}
