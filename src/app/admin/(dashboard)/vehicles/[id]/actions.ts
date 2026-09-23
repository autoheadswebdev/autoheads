"use server";

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function updateVehicle(id: string, formData: FormData) {
  try {
    const make = formData.get('make') as string;
    const model = formData.get('model') as string;
    const variant = formData.get('variant') as string;
    const year = Number(formData.get('year'));
    const price = Number(formData.get('price'));
    const mileage = Number(formData.get('mileage'));
    const fuel_type = formData.get('fuel_type') as string;
    const transmission = formData.get('transmission') as string;
    const status = formData.get('status') as string;
    const body_type = formData.get('body_type') as string;
    const exterior_color = formData.get('exterior_color') as string;
    const interior_color = formData.get('interior_color') as string;
    const engine_specs = formData.get('engine_specs') as string;
    const drive_type = formData.get('drive_type') as string;
    const registration_year = formData.get('registration_year') ? Number(formData.get('registration_year')) : null;

    const { error: updateError } = await supabase.from('vehicles').update({
      make,
      model,
      variant,
      year,
      price,
      fuel_type,
      transmission,
      mileage,
      status,
      body_type,
      exterior_color,
      interior_color,
      engine_specs,
      drive_type,
      registration_year,
    }).eq('id', id);

    if (updateError) throw updateError;

    return { success: true };
  } catch (err: any) {
    console.error("Error in updateVehicle:", err);
    return { error: err.message || "Failed to update vehicle" };
  }
}

export async function deleteVehicle(id: string) {
  try {
    // 1. Fetch images to delete from bucket
    const { data: images } = await supabase
      .from('vehicle_images')
      .select('image_url')
      .eq('vehicle_id', id);

    if (images && images.length > 0) {
      // Extract file paths from URLs. Assuming format: ".../vehicle-gallery/filename.ext"
      const filePaths = images.map(img => {
        const urlParts = img.image_url.split('/');
        return urlParts[urlParts.length - 1]; // Just the filename
      });

      if (filePaths.length > 0) {
        await supabase.storage.from('vehicle-gallery').remove(filePaths);
      }
    }

    // 2. Delete the vehicle record (cascades to vehicle_images)
    const { error: deleteError } = await supabase.from('vehicles').delete().eq('id', id);
    if (deleteError) throw deleteError;

    return { success: true };
  } catch (err: any) {
    console.error("Error in deleteVehicle:", err);
    return { error: err.message || "Failed to delete vehicle" };
  }
}
