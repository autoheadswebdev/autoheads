import type { Metadata, Viewport } from "next";
import { Outfit, Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif-luxury",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#FAFAFA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "AutoHeads | Premium Luxury Car Dealership",
    template: "%s | AutoHeads"
  },
  description: "Discover the finest selection of premium pre-owned luxury vehicles. Experience unparalleled quality and service at AutoHeads.",
  keywords: ["luxury cars", "premium used cars", "AutoHeads", "pre-owned luxury", "dealership"],
  authors: [{ name: "AutoHeads" }],
  creator: "AutoHeads",
  openGraph: {
    type: "website",
    locale: "en_DK",
    url: "https://autoheads.dk",
    title: "AutoHeads | Premium Luxury Car Dealership",
    description: "Discover the finest selection of premium pre-owned luxury vehicles.",
    siteName: "AutoHeads",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoHeads Premium Drive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoHeads | Premium Luxury Car Dealership",
    description: "Discover the finest selection of premium pre-owned luxury vehicles.",
    images: ["/og-image.jpg"],
    creator: "@AutoHeads",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'AutoHeads',
    image: 'https://autoheads.dk/logo-full.jpeg',
    '@id': 'https://autoheads.dk',
    url: 'https://autoheads.dk',
    telephone: '+45 98300 09108',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Primarc Chambers',
      addressLocality: 'København',
      postalCode: '1000',
      addressCountry: 'DK'
    }
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScrollProvider>
            <ScrollProgressBar />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
