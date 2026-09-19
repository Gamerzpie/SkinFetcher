"use client";

import Script from "next/script";

export function AdSenseScript() {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  if (!adsenseClientId) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
