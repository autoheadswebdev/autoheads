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
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
