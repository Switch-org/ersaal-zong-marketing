// AnalyticsTracker.tsx
"use client";

import { initAnalytics } from "@/utils/firebase";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return null;
}