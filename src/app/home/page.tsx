import type { Metadata } from "next";
import { SkinGrabberHome } from "@/components/SkinGrabberHome";

export const metadata: Metadata = {
  title: "Skin Grabber | Download Minecraft Skins & 3D Viewer (skingrabber.bond)",
  description:
    "Official Skin Grabber app on skingrabber.bond. Grab any Minecraft skin in seconds with 3D interactive rotatable viewer, model detection, and high-resolution skin downloads.",
  alternates: {
    canonical: "https://skingrabber.bond/home",
  },
  openGraph: {
    title: "Skin Grabber | Download Minecraft Skins & 3D Viewer (skingrabber.bond)",
    description:
      "Grab any Minecraft skin in seconds with 3D interactive rotatable viewer, model detection, and HD skin downloads on skingrabber.bond.",
    url: "https://skingrabber.bond/home",
    siteName: "Skin Grabber",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Skin Grabber - Minecraft Skin Downloader",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Grabber | Download Minecraft Skins & 3D Viewer (skingrabber.bond)",
    description:
      "Grab any Minecraft skin in seconds with 3D interactive viewer on skingrabber.bond.",
    images: ["/logo.png"],
  },
};

export default function HomePage() {
  return <SkinGrabberHome />;
}
