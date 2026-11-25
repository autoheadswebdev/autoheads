import InventoryClient from "@/components/InventoryClient";
import { createClient } from "@supabase/supabase-js";
import { CarProps } from "@/components/CarCard";

// Revalidate every 60 seconds (ISR) for fast response times
export const revalidate = 60;

export default async function InventoryPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  let vehicles: any[] = [];

  try {
    const { data } = await supabase
      .from('vehicles')
      .select('id, year, make, model, variant, mileage, fuel_type, transmission, price, featured_image, status')
      .order('created_at', { ascending: false });
    vehicles = data || [];
  } catch (err) {
    console.error("Error fetching inventory:", err);
  }

  const formatCar = (car: any): CarProps => ({
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
  });

  const allCars = vehicles.map(formatCar);
  const arrivingSoonCars = allCars.filter(car => car.isNew);

  return <InventoryClient allCars={allCars} arrivingSoonCars={arrivingSoonCars} />;
}
