import { createClient } from "@supabase/supabase-js";
import SellRequestsClient from "./SellRequestsClient";

export const dynamic = 'force-dynamic';

export default async function SellRequestsPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: requests, error } = await supabase
    .from("sell_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching sell requests:", error);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-heading font-medium text-[#111111] dark:text-white">Sell Requests</h1>
          <p className="text-[#111111]/60 dark:text-white/60 text-sm mt-1">Manage valuation requests from customers.</p>
        </div>
      </div>
      <SellRequestsClient initialRequests={requests || []} />
    </div>
  );
}
