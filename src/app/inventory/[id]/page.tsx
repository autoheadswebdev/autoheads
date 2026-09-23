import { createClient } from "@supabase/supabase-js";
import VehicleDetailsClient from "@/components/VehicleDetailsClient";

export const dynamic = 'force-dynamic';

export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! 
  );

  const { id } = await params;
  
  const { data: vehicle, error } = await supabase
    .from('vehicles')
    .select(`
      *,
      vehicle_images (
        image_url,
        display_order
      )
    `)
    .eq('id', id)
    .single();

  if (error || !vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-soft">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-graphite mb-2">Vehicle Not Found</h1>
          <p className="text-brand-silver">The vehicle you are looking for does not exist or has been removed.</p>
        </div>
      </div>
    );
  }

  // Format images
  // ensure featured_image is first if there are no images attached (fallback)
  let images = [vehicle.featured_image || "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200&auto=format&fit=crop"];
  if (vehicle.vehicle_images && vehicle.vehicle_images.length > 0) {
    // Sort by display order
    const sortedImages = vehicle.vehicle_images.sort((a: any, b: any) => a.display_order - b.display_order);
    images = sortedImages.map((img: any) => img.image_url);
  }

  // Format price
  const formattedPrice = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(vehicle.price);
  
  // Dummy EMI calculation (roughly 1.5% of price per month for demo purposes)
  const emiCalculation = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(vehicle.price * 0.015);

  const formattedCar = {
    id: vehicle.id,
    brand: vehicle.make,
    model: vehicle.model + (vehicle.variant ? ` ${vehicle.variant}` : ''),
    year: vehicle.year,
    price: formattedPrice,
    emi: emiCalculation,
    images: images,
    quickStats: {
      year: vehicle.year,
      mileage: `${vehicle.mileage.toLocaleString()} km`,
      fuel: vehicle.fuel_type,
      transmission: vehicle.transmission,
    },
    specs: {
      bodyType: vehicle.body_type,
      exteriorColor: vehicle.exterior_color,
      interiorColor: vehicle.interior_color,
      engine: vehicle.engine_specs || vehicle.engine_capacity,
      driveType: vehicle.drive_type,
      registrationYear: vehicle.registration_year?.toString(),
      roadTax: "Lifetime", // Default fallback
    }
  };

  return <VehicleDetailsClient car={formattedCar} />;
}
