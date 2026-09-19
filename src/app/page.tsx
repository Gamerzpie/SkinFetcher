import type { Metadata } from "next";
import { SkinGrabberHome } from "@/components/SkinGrabberHome";

export const metadata: Metadata = {
  title: "Skin Grabber | Minecraft Skin Downloader & 3D Viewer (skingrabber.bond)",
  description:
    "Grab and download any Minecraft skin in seconds on skingrabber.bond. Real-time 3D interactive viewer, slim/classic model detection, HD isometric renders, and instant 64x64 PNG downloads.",
  alternates: {
    canonical: "https://skingrabber.bond",
  },
  openGraph: {
    title: "Skin Grabber | Minecraft Skin Downloader & 3D Viewer (skingrabber.bond)",
    description:
      "Grab and download any Minecraft skin in seconds on skingrabber.bond. Real-time 3D interactive viewer, slim/classic model detection, HD previews, and instant PNG downloads.",
    url: "https://skingrabber.bond",
    siteName: "Skin Grabber",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Skin Grabber - Minecraft Skin Downloader & 3D Viewer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Grabber | Minecraft Skin Downloader & 3D Viewer (skingrabber.bond)",
    description:
      "Grab and download any Minecraft skin in seconds on skingrabber.bond with interactive 3D viewer & HD downloads.",
    images: ["/logo.png"],
  },
};

export default function Page() {
  return <SkinGrabberHome />;
}
