import InventoryClient from "@/components/InventoryClient";
import { createClient } from "@supabase/supabase-js";
import { CarProps } from "@/components/CarCard";

export const dynamic = 'force-dynamic';

export default async function InventoryPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! 
  );

  const { data: vehicles } = await supabase
    .from('vehicles')
    .select('*')
    .order('created_at', { ascending: false });

  const formatCar = (car: any): CarProps => ({
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
  });

  const allCars = (vehicles || []).map(formatCar);
  
  // Also pass arrivingSoonCars directly to make it easier for the Client component to split them
  const arrivingSoonCars = allCars.filter(car => car.isNew);

  return <InventoryClient allCars={allCars} arrivingSoonCars={arrivingSoonCars} />;
}
