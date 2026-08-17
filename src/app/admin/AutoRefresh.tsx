"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function AutoRefresh() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      // Soft refresh to refetch server components without a full page reload
      router.refresh();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [router]);

  return null; // This component doesn't render anything
}
