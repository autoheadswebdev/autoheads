import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-soft border-t border-brand-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/logo-icon.jpeg"
                alt="AutoHeads Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-2xl font-heading font-semibold text-brand-graphite">
                AUTOHEADS
              </span>
            </Link>
            <p className="text-brand-silver mb-6 text-sm leading-relaxed">
              Automotive Experts LLP. Find your next premium drive. Premium pre-owned cars inspected and certified.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-silver hover:text-brand-graphite transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-brand-silver hover:text-brand-graphite transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-brand-silver hover:text-brand-graphite transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-brand-silver hover:text-brand-graphite transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-medium text-brand-graphite mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Inventory", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-brand-silver hover:text-brand-graphite transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Brands */}
          <div>
            <h4 className="text-lg font-heading font-medium text-brand-graphite mb-6">Top Brands</h4>
            <ul className="flex flex-col gap-3">
              {["BMW", "Audi", "Mercedes-Benz", "Porsche", "Land Rover"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-brand-silver hover:text-brand-graphite transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-medium text-brand-graphite mb-6">Contact Us</h4>
            <address className="not-italic text-sm text-brand-silver flex flex-col gap-3">
              <p>Automotive Experts LLP</p>
              <p>123 Luxury Drive, Business Bay</p>
              <p>Dubai, UAE</p>
              <p className="mt-2 text-brand-graphite font-medium">+971 50 123 4567</p>
              <p>info@autoheads.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-silver">
            &copy; {new Date().getFullYear()} AutoHeads. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-silver">
            <Link href="#" className="hover:text-brand-graphite transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-graphite transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
