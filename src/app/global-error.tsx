"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased bg-brand-white text-brand-graphite min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 text-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-2xl font-heading font-semibold mb-4">Something went wrong!</h2>
          <p className="text-brand-silver mb-8 text-sm">
            We apologize for the inconvenience. An unexpected error occurred while loading this page.
          </p>
          <Button onClick={() => reset()} className="w-full">
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
