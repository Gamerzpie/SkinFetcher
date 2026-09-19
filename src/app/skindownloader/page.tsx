import type { Metadata } from "next";
import { SkinDownloaderView } from "@/components/SkinDownloaderView";

export const metadata: Metadata = {
  title: "Minecraft Skin Downloader | Fast Username Skin Grabber (skingrabber.bond)",
  description:
    "Instant Minecraft skin downloader on skingrabber.bond. Grab standard 64x64 PNG textures, HD 3D isometric renders, and avatar head icons for Java & Bedrock by username.",
  alternates: {
    canonical: "https://skingrabber.bond/skindownloader",
  },
  openGraph: {
    title: "Minecraft Skin Downloader | Fast Username Skin Grabber (skingrabber.bond)",
    description:
      "Instant Minecraft skin downloader on skingrabber.bond. Grab standard 64x64 PNG textures, HD renders, and avatar heads for any Java username.",
    url: "https://skingrabber.bond/skindownloader",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Skin Grabber - Minecraft Skin Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minecraft Skin Downloader | Fast Username Skin Grabber (skingrabber.bond)",
    description:
      "Instant Minecraft skin downloader on skingrabber.bond. Grab standard 64x64 PNG textures and HD renders for any Java username.",
    images: ["/logo.png"],
  },
};

export default function SkinDownloaderPage() {
  return <SkinDownloaderView />;
}
