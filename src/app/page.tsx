import HomeClient from "@/components/HomeClient";
import { createClient } from "@supabase/supabase-js";

// Revalidate every 60 seconds (ISR) for near-instant edge caching and maximum loading speed
export const revalidate = 60;

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  let formattedCars: any[] = [];

  try {
    // Fetch only needed columns for arriving soon cars
    const { data: cars } = await supabase
      .from('vehicles')
      .select('id, year, make, model, variant, mileage, fuel_type, transmission, price, featured_image, status')
      .eq('status', 'Arriving Soon')
      .order('created_at', { ascending: false })
      .limit(10);

    // Map to the format CarCard/ShowroomCarousel expects
    formattedCars = (cars || []).map((car: any) => ({
      id: car.id,
      year: car.year,
      brand: car.make,
      model: car.model + (car.variant ? ` ${car.variant}` : ''),
      mileage: (car.mileage || 0).toLocaleString(),
      fuel: car.fuel_type,
      transmission: car.transmission,
      price: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(car.price || 0),
      image: car.featured_image || '/placeholder-car.jpg',
      isNew: car.status === 'Arriving Soon',
      status: car.status,
    }));
  } catch (err) {
    console.error("Error loading home cars:", err);
  }

  return <HomeClient arrivingSoonCars={formattedCars} />;
}
