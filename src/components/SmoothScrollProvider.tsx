"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Admin layout uses overflow containers that break Lenis window-scroll hijacking.
  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.2, 
        smoothWheel: true,
        // Disable smooth touch to preserve native 120Hz momentum scrolling on mobile devices
        touchMultiplier: 1.5,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
