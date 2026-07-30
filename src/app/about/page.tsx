import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-heading font-semibold text-brand-white mb-6">About Us</h1>
      <p className="text-brand-silver mb-8 text-lg max-w-2xl">
        Discover the story behind AutoHeads. Decades of automotive expertise brought to you with luxury and trust.
      </p>
      <Link href="/">
        <Button variant="outline">
          <ArrowLeft className="mr-2" size={20} /> Back to Home
        </Button>
      </Link>
    </div>
  );
}
