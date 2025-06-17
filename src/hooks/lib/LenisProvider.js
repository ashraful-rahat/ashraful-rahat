"use client";

import useLenis from "@/hooks/lib/useLenis";

export default function LenisProvider({ children }) {
  useLenis();
  return <>{children}</>;
}
