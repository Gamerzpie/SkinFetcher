import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minecraft Skin Downloader | Download Minecraft Skins by Username | SkinGrabber",
  description:
    "Download Minecraft skins instantly by username. View, preview, and download Minecraft player skins as PNG files with SkinGrabber.",
  keywords: [
    "Minecraft skin downloader",
    "Minecraft username skin",
    "download Minecraft skin",
    "Minecraft skin downloader",
"Minecraft skins downloader",
"Minecraft skin download",
"Download Minecraft skins",
"Minecraft skin downloader online",
"Minecraft skin download tool",
"Minecraft skin viewer",
"Minecraft skin finder",
"Minecraft skin grabber",
"Minecraft skin fetcher",
"Minecraft skin by username",
"Minecraft skin downloader by username",
"Download Minecraft skin by username",
"Minecraft skin lookup",
"Minecraft player skin downloader",
"Download Minecraft player skin",
"Get Minecraft skin from username",
"Minecraft skin PNG download",
"Minecraft skin PNG",
"Download Minecraft skin as PNG",
"Free Minecraft skin downloader",
"Free Minecraft skin download",
"Online Minecraft skin downloader",
"Minecraft Java skin downloader",
"Minecraft Bedrock skin downloader",
"Minecraft character skin downloader",
"Minecraft skin preview",
"Minecraft player skin viewer",
"Minecraft username skin",
"Minecraft skin download website",
"Download Minecraft player skin by username",
"Get Minecraft player skin",
"Minecraft skin tool",
"Minecraft skin image downloader",
"Minecraft skin file downloader",
"Minecraft skin search",
"Minecraft skin extractor",
"Minecraft skin generator download",
"Best Minecraft skin downloader",
"Easy Minecraft skin downloader",
"Instant Minecraft skin downloader",
"Minecraft skin download online",
"Minecraft skin downloader free",
"SkinGrabber Minecraft",
"SkinGrabber Minecraft skin downloader",
"SkinGrabber skin downloader",
    "Skin Fetcher",
  ],
  openGraph: {
    title: "SKIN FETCHER | Minecraft Skin Downloader",
    description:
      "Fetch, preview, and download Minecraft skins instantly by username.",
    type: "website",
  },
  verification: {
    google: "7raBhHxWnD9yZqD1HHuo8_CUem_7xRUnAcf8P1WKPok",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="google-site-verification"
          content="7raBhHxWnD9yZqD1HHuo8_CUem_7xRUnAcf8P1WKPok"
        />
        <meta
          name="google-site-verification"
          content="x-INF2M7XaqodaqZH0OmfNj5dWXnG8rNk3y8rBkKvH4"
        />
      </head>

      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}

        {/* WARNING FOR AGENT: DO NOT REMOVE THIS SCRIPT */}
        <Script src="https://cdn.jsdelivr.net/gh/IdeavoAI/ideavo-scripts@latest/scripts/ideavo.min.js" />
      </body>
    </html>
  );
}
