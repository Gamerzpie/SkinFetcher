import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BookOpen,
  Laptop,
  Layers,
  FileCode2,
  Wrench,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Minecraft Skin Guides & Tutorials | skingrabber.bond",
  description:
    "Comprehensive Minecraft skin tutorials on skingrabber.bond. Learn how to change skins on Java & Bedrock, understand Steve vs Alex 3px/4px models, 64x64 dual-layer format, and fix multiplayer skin issues.",
  alternates: {
    canonical: "https://skingrabber.bond/guides",
  },
};

const guidesList = [
  {
    slug: "how-to-change-minecraft-skin",
    title: "How to Change Your Minecraft Skin (Java & Bedrock Guide 2026)",
    description:
      "A complete walkthrough on how to upload and apply custom downloaded skins using the Minecraft Launcher, Minecraft.net profile, and the Bedrock Dressing Room.",
    icon: Laptop,
    badge: "Beginner Guide",
    readTime: "5 min read",
    updated: "Updated Sept 2026",
  },
  {
    slug: "steve-vs-alex-model",
    title: "Classic (Steve 4px) vs. Slim (Alex 3px) Skin Formats Explained",
    description:
      "Understand the difference between 4-pixel Classic and 3-pixel Slim arm models. Learn how to identify your model type and avoid black bar texture glitches.",
    icon: Layers,
    badge: "Skin Architecture",
    readTime: "6 min read",
    updated: "Updated Sept 2026",
  },
  {
    slug: "minecraft-skin-format-guide",
    title: "Minecraft Skin File Specifications & 64x64 Dual-Layer Guide",
    description:
      "A technical breakdown of the 64x64 PNG texture standard, 1.8+ secondary overlay layers (jackets, hats, sleeves, pants), and transparency rules.",
    icon: FileCode2,
    badge: "Technical & Design",
    readTime: "8 min read",
    updated: "Updated Sept 2026",
  },
  {
    slug: "troubleshoot-skins",
    title: "Why Is My Minecraft Skin Not Showing Up? Multiplayer Fixes",
    description:
      "Diagnose and solve common skin issues: stuck on default Steve/Alex, offline mode server limitations, launcher texture cache refresh, and account sync delays.",
    icon: Wrench,
    badge: "Troubleshooting",
    readTime: "7 min read",
    updated: "Updated Sept 2026",
  },
];

export default function GuidesHubPage() {
  return (
    <main className="skinfetch-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-2">
            <BookOpen size={16} /> Knowledge Base &bull; skingrabber.bond
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Minecraft Skin Guides &amp; Tutorials
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Master everything about Minecraft character textures, model types, launcher installation, and technical dual-layer file specifications.
          </p>
        </header>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {guidesList.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {guide.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock size={12} /> {guide.readTime}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon size={24} />
                  </div>

                  <h2 className="text-xl font-display font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {guide.title}
                  </h2>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span>Read Full Tutorial</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="glass-card p-8 rounded-3xl text-center border border-emerald-500/20">
          <div className="eyebrow mb-2">
            <Sparkles size={16} /> Instant Skin Downloader
          </div>
          <h2 className="text-2xl font-bold font-display text-white mb-2">
            Ready to grab your favorite player&apos;s skin?
          </h2>
          <p className="text-xs text-neutral-400 max-w-lg mx-auto mb-6">
            Use our free real-time tool to fetch, preview in 3D, and download original PNG textures for any Minecraft Java Edition player.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/skindownloader"
              className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-md cursor-pointer"
            >
              Open Skin Downloader
            </Link>
            <Link
              href="/skins"
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-all cursor-pointer"
            >
              Explore Curated Skins
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
