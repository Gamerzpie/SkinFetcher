import type { Metadata } from "next";
import { SkinsGallery } from "@/components/SkinsGallery";

export const metadata: Metadata = {
  title: "Explore Minecraft Skins | Skin Gallery (skingrabber.bond)",
  description:
    "Explore curated Minecraft skins of popular creators, PvP legends, aesthetic outfits, and iconic gamers on skingrabber.bond. Download in PNG or inspect in real-time 3D.",
  alternates: {
    canonical: "https://skingrabber.bond/skins",
  },
  openGraph: {
    title: "Explore Minecraft Skins | Skin Gallery (skingrabber.bond)",
    description:
      "Explore curated Minecraft skins of popular creators, PvP legends, aesthetic outfits, and iconic gamers on skingrabber.bond.",
    url: "https://skingrabber.bond/skins",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Skin Grabber - Minecraft Skin Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Minecraft Skins | Skin Gallery (skingrabber.bond)",
    description:
      "Explore curated Minecraft skins of popular creators, PvP legends, and aesthetics on skingrabber.bond.",
    images: ["/logo.png"],
  },
};

export default function SkinsPage() {
  return <SkinsGallery />;
}
