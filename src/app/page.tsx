import HomeClient from "@/components/HomeClient";
import { createClient } from "@supabase/supabase-js";

// Ensure this page is dynamically rendered so it picks up the latest cars
export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // Or Anon Key since it's just public read
  );

  // Fetch cars for the showroom (latest arrivals)
  const { data: cars } = await supabase
    .from('vehicles')
    .select('*')
    .eq('status', 'Arriving Soon')
    .order('created_at', { ascending: false })
    .limit(10);

  // Map to the format CarCard/ShowroomCarousel expects
  const formattedCars = (cars || []).map((car: any) => ({
    id: car.id,
    year: car.year,
    brand: car.make,
    model: car.model + (car.variant ? ` ${car.variant}` : ''),
    mileage: car.mileage.toLocaleString(),
    fuel: car.fuel_type,
    transmission: car.transmission,
    price: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(car.price),
    image: car.featured_image || '/placeholder-car.jpg',
    isNew: car.status === 'Arriving Soon',
    status: car.status,
  }));

  return <HomeClient arrivingSoonCars={formattedCars} />;
}
