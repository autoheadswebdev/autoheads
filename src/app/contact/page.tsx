import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-heading font-semibold text-brand-white mb-6">Contact Us</h1>
      <p className="text-brand-silver mb-8 text-lg max-w-2xl">
        Reach out to us for test drives, inquiries, or any other assistance. We are here to help.
      </p>
      <Link href="/">
        <Button variant="outline">
          <ArrowLeft className="mr-2" size={20} /> Back to Home
        </Button>
      </Link>
    </div>
  );
}
