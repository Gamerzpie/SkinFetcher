"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export function AdBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!adsenseClientId || !slot) return;

    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      // Ignore adsbygoogle errors if adblocker is active
    }
  }, [adsenseClientId, slot]);

  // If no AdSense ID or slot is configured yet, display a subtle, non-intrusive compliance placeholder
  if (!adsenseClientId || !slot) {
    return (
      <aside
        className={`w-full max-w-4xl mx-auto my-6 px-4 ${className}`}
        aria-label="Advertisement"
      >
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 block mb-1">
            Advertisement
          </span>
          <div className="h-16 flex items-center justify-center text-xs text-neutral-500 font-mono">
            <span>skingrabber.bond &bull; Sponsored Space</span>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      ref={adRef}
      className={`w-full max-w-4xl mx-auto my-6 px-4 ${className}`}
      aria-label="Advertisement"
    >
      <div className="rounded-xl border border-white/10 bg-black/20 p-2 text-center overflow-hidden">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 block mb-1">
          Advertisement
        </span>
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={adsenseClientId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </aside>
  );
}
