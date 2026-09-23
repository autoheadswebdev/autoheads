import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import EditVehicleClient from "./EditVehicleClient";

export const dynamic = 'force-dynamic';

export default async function EditVehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: vehicle, error } = await supabase
    .from('vehicles')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !vehicle) {
    notFound();
  }

  return <EditVehicleClient vehicle={vehicle} />;
}
