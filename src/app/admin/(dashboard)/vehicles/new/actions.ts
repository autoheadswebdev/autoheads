"use server";

import { createClient } from '@supabase/supabase-js';

export async function addVehicle(formData: FormData) {
  try {
    // We use the Service Role Key on the server backend to completely bypass RLS.
    // This solves the Storage Bucket upload RLS issue without needing to configure complex DB rules.
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Extract form data
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
    
    const imageFiles = formData.getAll('images') as File[];

    const uploadedUrls: string[] = [];

    // Handle Image Uploads from server side
    for (const imageFile of imageFiles) {
      if (imageFile && imageFile.size > 0) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('vehicle-gallery')
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('vehicle-gallery')
          .getPublicUrl(filePath);

        uploadedUrls.push(publicUrl);
      }
    }

    const featured_image = uploadedUrls.length > 0 ? uploadedUrls[0] : null;

    // Insert Database Row
    const { data: vehicleData, error: insertError } = await supabase.from('vehicles').insert([
      {
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
        featured_image,
      }
    ]).select().single();

    if (insertError) throw insertError;

    // Insert multiple images into vehicle_images table
    if (uploadedUrls.length > 0 && vehicleData) {
      const imageRecords = uploadedUrls.map((url, index) => ({
        vehicle_id: vehicleData.id,
        image_url: url,
        is_primary: index === 0,
        display_order: index,
      }));

      const { error: imageInsertError } = await supabase.from('vehicle_images').insert(imageRecords);
      if (imageInsertError) throw imageInsertError;
    }

    return { success: true };
  } catch (err: any) {
    console.error("Error in addVehicle:", err);
    return { error: err.message || "Failed to add vehicle" };
  }
}
