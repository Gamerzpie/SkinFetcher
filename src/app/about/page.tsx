import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Users,
  Code2,
  Heart,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Skin Grabber (skingrabber.bond)",
  description:
    "Learn about Skin Grabber (skingrabber.bond) - the fast, privacy-focused Minecraft skin downloader and interactive 3D viewer built for players and creators worldwide.",
  alternates: {
    canonical: "https://skingrabber.bond/about",
  },
};

export default function AboutPage() {
  return (
    <main className="skinfetch-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-emerald-400 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Hero Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-2">
            <Sparkles size={16} /> Our Mission &amp; Story &bull; skingrabber.bond
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            About Skin Grabber
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Skin Grabber was created with a clear objective: provide Minecraft players, creators, video editors, and animators with the fastest, most elegant, and privacy-respecting skin utility on the web.
          </p>
        </header>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Zap size={20} />
              </div>
              <h2 className="text-lg font-bold font-display text-white mb-2">Instant Real-Time Fetching</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We connect directly to Mojang&apos;s authentication directory and session servers, delivering zero-delay skin resolution for any valid Java Edition username.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Code2 size={20} />
              </div>
              <h2 className="text-lg font-bold font-display text-white mb-2">WebGL 3D Rendering</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Powered by Three.js and custom canvas shaders, our interactive rotatable 3D viewer supports full dual-layer geometry (jackets, hats, sleeves, and trousers).
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-lg font-bold font-display text-white mb-2">Zero Logins or Tracking</h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We believe utility tools should just work. No passwords, no Mojang credentials, no invasive trackers. All search history remains private on your device.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Article */}
        <article className="glass-card p-8 sm:p-12 rounded-3xl space-y-8 text-neutral-300 leading-relaxed text-sm">
          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <Globe className="text-emerald-400" size={24} /> The Problem with Traditional Skin Sites
            </h2>
            <p>
              For years, players looking to download a friend&apos;s skin, check a YouTuber&apos;s outfit, or grab an asset for a video thumbnail were forced to navigate slow, bloated websites riddled with intrusive popups, fake download buttons, and deceptive advertisements.
            </p>
            <p className="mt-2">
              We founded <strong>Skin Grabber (skingrabber.bond)</strong> in 2026 to offer a clean, reliable alternative: high-contrast dark-mode aesthetics, transparent downloads, official 64x64 PNG output files, and an instant 3D interactive viewer that works smoothly on both desktop and mobile devices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <Users className="text-emerald-400" size={24} /> Who Uses Skin Grabber?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white mb-1">🎮 Gamers &amp; Server Communities</h3>
                <p className="text-xs text-neutral-400">
                  Quickly inspect teammates&apos; skins, verify outfit designs for roleplay or faction events, and test new skins before joining servers.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white mb-1">🎬 Content Creators &amp; Editors</h3>
                <p className="text-xs text-neutral-400">
                  Export high-resolution transparent isometric 3D renders of any Minecraft creator for YouTube thumbnails, banners, and Twitch emotes.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white mb-1">🎨 Skin Artists &amp; Modders</h3>
                <p className="text-xs text-neutral-400">
                  Analyze skin shading techniques, examine 1.8+ dual-layer jacket mappings, and study how textures wrap around player models in 3D.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white mb-1">📱 Bedrock &amp; Java Cross-Players</h3>
                <p className="text-xs text-neutral-400">
                  Convert and apply classic Java PC player skins to Bedrock Edition on iOS, Android, Nintendo Switch, PlayStation, and Xbox consoles.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <Heart className="text-emerald-400" size={24} /> Our Standards &amp; Commitments
            </h2>
            <p>
              We are committed to operating a transparent, responsible, and policy-compliant web platform. We strictly adhere to Google Publisher Policies, maintain complete separation between content and legitimate Google AdSense advertising units, and respect intellectual property rights.
            </p>
            <p className="mt-2">
              Skin Grabber is an independent fan community tool operated with passion for the Minecraft community. We are always listening to user feedback to improve rendering speed, add helpful skin guides, and expand features.
            </p>
          </section>

          {/* Quick CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-white text-base">Have feedback or suggestions?</h3>
              <p className="text-xs text-neutral-400">We respond to community inquiries within 24 hours.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-md cursor-pointer"
            >
              Contact Our Team <ArrowRight size={14} />
            </Link>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
