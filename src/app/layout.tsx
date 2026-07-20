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
  title: "SKIN FETCHER | Minecraft Skin Downloader",
  description:
    "Download Minecraft skins instantly using any username with a premium glassmorphism skin preview experience.",
  keywords: [
    "Minecraft skin downloader",
    "Minecraft username skin",
    "download Minecraft skin",
    "Skin Fetcher",
  ],
  openGraph: {
    title: "SKIN FETCHER | Minecraft Skin Downloader",
    description: "Fetch, preview, and download Minecraft skins instantly by username.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
