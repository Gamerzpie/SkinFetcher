import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AdSenseScript } from "@/components/AdSenseScript";
import { CookieConsent } from "@/components/CookieConsent";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://skingrabber.bond"),
  title: {
    default: "Skin Grabber | Minecraft Skin Downloader & 3D Viewer (skingrabber.bond)",
    template: "%s | Skin Grabber",
  },
  description:
    "Download Minecraft skins instantly using any username on skingrabber.bond. Free 3D interactive viewer, dual-layer skin downloads, HD isometric renders, and avatar head icons.",
  keywords: [
    "skingrabber.bond",
    "skingrabber",
    "skin grabber",
    "skin grabber bond",
    "Minecraft skin downloader",
    "Minecraft skin grabber",
    "download Minecraft skin",
    "Minecraft username skin",
    "Minecraft 3D skin viewer",
    "Minecraft skin stealer",
    "MC skin grabber",
    "NameMC skin downloader",
    "Java skin downloader",
    "Bedrock skin downloader",
    "free Minecraft skins",
    "Minecraft skin texture download",
  ],
  authors: [{ name: "Skin Grabber", url: "https://skingrabber.bond" }],
  creator: "Skin Grabber",
  publisher: "Skin Grabber",
  alternates: {
    canonical: "https://skingrabber.bond",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Skin Grabber | Minecraft Skin Downloader & 3D Viewer (skingrabber.bond)",
    description:
      "Download Minecraft skins instantly using any username on skingrabber.bond. Free 3D interactive viewer, dual-layer skin downloads, and HD renders.",
    url: "https://skingrabber.bond",
    siteName: "Skin Grabber",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Skin Grabber - Minecraft Skin Downloader & 3D Viewer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Grabber | Minecraft Skin Downloader & 3D Viewer (skingrabber.bond)",
    description:
      "Download Minecraft skins instantly using any username on skingrabber.bond. Free 3D interactive viewer and instant launcher-ready PNG downloads.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: [
      "7raBhHxWnD9yZqD1HHuo8_CUem_7xRUnAcf8P1WKPok",
      "x-INF2M7XaqodaqZH0OmfNj5dWXnG8rNk3y8rBkKvH4",
    ],
  },
  other: {
    ...(adsenseId ? { "google-adsense-account": adsenseId } : {}),
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Skin Grabber",
  alternateName: ["skingrabber.bond", "SkinGrabber", "Skin Grabber Bond"],
  url: "https://skingrabber.bond",
  description:
    "Grab and download any Minecraft skin in seconds using any player username on skingrabber.bond. Interactive 3D skin viewer, dual-layer PNG downloads, and HD renders.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://skingrabber.bond/skindownloader?username={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Skin Grabber",
  url: "https://skingrabber.bond",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  browserRequirements: "Requires modern web browser with WebGL support",
  description:
    "Download any Minecraft skin in seconds using any player username on skingrabber.bond. Interactive 3D skin viewer, dual-layer PNG downloads, and HD isometric renders.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Instant Minecraft username skin lookup",
    "Interactive 3D rotatable skin preview",
    "Original 64x64 PNG texture download",
    "HD 3D isometric render download",
    "Minecraft Java & Bedrock compatible",
    "Dual layer jacket, hat, and sleeve preview",
  ],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Skin Grabber",
  url: "https://skingrabber.bond",
  logo: "https://skingrabber.bond/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          id="ld-json-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          id="ld-json-app"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
        <script
          id="ld-json-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <AdSenseScript />
        {children}
        <CookieConsent />
        {/* WARNING FOR AGENT: DO NOT REMOVE THIS SCRIPT */}
        <Script src="https://cdn.jsdelivr.net/gh/IdeavoAI/ideavo-scripts@latest/scripts/ideavo.min.js" />
      </body>
    </html>
  );
}
