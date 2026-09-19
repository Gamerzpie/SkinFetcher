import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FileCode2,
  Layers,
  ArrowLeft,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Minecraft Skin File Format & 64x64 Dual-Layer Guide | skingrabber.bond",
  description:
    "Complete technical breakdown of the Minecraft 64x64 PNG skin format, 1.8+ dual-layer overlays (jacket, sleeves, hat, pants), transparency rules, and UV mapping.",
  alternates: {
    canonical: "https://skingrabber.bond/guides/minecraft-skin-format-guide",
  },
};

export default function SkinFormatGuidePage() {
  return (
    <main className="skinfetch-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Navbar />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-emerald-400 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to Guides Hub
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              Technical Specification
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Clock size={12} /> 8 min read &bull; Updated September 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Minecraft Skin File Format &amp; 64&times;64 Dual-Layer Guide
          </h1>
          <p className="text-neutral-300 text-base leading-relaxed">
            Everything you need to know about the 64&times;64 PNG texture standard, 1.8+ secondary overlay layers, alpha channel transparency rules, and UV mapping coordinates.
          </p>
        </header>

        <div className="glass-card p-6 sm:p-10 rounded-3xl space-y-10 text-neutral-300 leading-relaxed text-sm">
          {/* Evolution Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
              <Layers className="text-emerald-400" size={22} /> The Evolution: 64&times;32 vs 64&times;64
            </h2>
            <p>
              In Minecraft&apos;s early history (Beta through version 1.7), player skins were fixed at <strong>64 &times; 32 pixels</strong>. In that legacy format:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-300">
              <li>The left arm and left leg did not have independent textures; they simply mirrored the right arm and right leg.</li>
              <li>Only the head had a secondary overlay layer (&ldquo;hat&rdquo;). The torso and limbs were strictly single-layer.</li>
            </ul>
            <p className="mt-2">
              With the release of Minecraft 1.8 (The Bountiful Update), Mojang expanded the format to a square <strong>64 &times; 64 pixels</strong>. This doubled the canvas size and introduced:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                <span className="font-bold text-white block mb-1">Independent Limb Textures</span>
                Your left and right arms and legs can now be completely distinct (different tattoos, wristbands, or mismatched shoes).
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                <span className="font-bold text-white block mb-1">Universal Secondary Overlays</span>
                Torso jackets, sleeve cuffs, pants pockets, belts, and 3D hair strands can now float 0.5 pixels above the base skin.
              </div>
            </div>
          </section>

          {/* UV Coordinate Mapping Table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
              <FileCode2 className="text-emerald-400" size={22} /> Skin Layout &amp; UV Coordinate Mapping
            </h2>
            <p>
              Every 64&times;64 skin file is laid out according to strict UV coordinates parsed by Minecraft&apos;s rendering engine:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-neutral-400 uppercase tracking-wider">
                    <th className="py-2.5 px-3">Body Part</th>
                    <th className="py-2.5 px-3">Base Layer (X, Y)</th>
                    <th className="py-2.5 px-3">Overlay / 2nd Layer (X, Y)</th>
                    <th className="py-2.5 px-3">Dimensions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300 font-mono">
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold text-white">Head</td>
                    <td className="py-2 px-3">(0, 0)</td>
                    <td className="py-2 px-3 text-emerald-400">(32, 0) [Hat]</td>
                    <td className="py-2 px-3">32 &times; 16</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold text-white">Right Leg</td>
                    <td className="py-2 px-3">(0, 16)</td>
                    <td className="py-2 px-3 text-emerald-400">(0, 32) [Pants]</td>
                    <td className="py-2 px-3">16 &times; 16</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold text-white">Torso</td>
                    <td className="py-2 px-3">(16, 16)</td>
                    <td className="py-2 px-3 text-emerald-400">(16, 32) [Jacket]</td>
                    <td className="py-2 px-3">24 &times; 16</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold text-white">Right Arm</td>
                    <td className="py-2 px-3">(40, 16)</td>
                    <td className="py-2 px-3 text-emerald-400">(40, 32) [Sleeve]</td>
                    <td className="py-2 px-3">16 &times; 16</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold text-white">Left Leg</td>
                    <td className="py-2 px-3">(16, 48)</td>
                    <td className="py-2 px-3 text-emerald-400">(0, 48) [Pants]</td>
                    <td className="py-2 px-3">16 &times; 16</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold text-white">Left Arm</td>
                    <td className="py-2 px-3">(32, 48)</td>
                    <td className="py-2 px-3 text-emerald-400">(48, 48) [Sleeve]</td>
                    <td className="py-2 px-3">16 &times; 16</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Transparency Rules */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-white flex items-center gap-2">
              <ShieldCheck className="text-emerald-400" size={22} /> Transparency &amp; Alpha Rules
            </h2>
            <p>
              A frequent question players ask is: <em>&ldquo;Can I make my Minecraft character invisible by deleting pixels on my skin?&rdquo;</em>
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-bold text-white text-xs mb-1">Base Layer: 100% Opaque Enforced</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  In vanilla Minecraft, the <strong>base layer</strong> (skin surface) does not support partial or full transparency. If you leave transparent pixels on the base layer of the head, body, arms, or legs, Minecraft automatically renders them as solid black to prevent invisible player exploits in survival and multiplayer PvP.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-bold text-white text-xs mb-1">Secondary Overlays: Full Alpha Supported</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  The <strong>outer overlay layers</strong> (Hat, Jacket, Sleeves, Pants) support full 1-bit or 8-bit alpha transparency. You can make an open unbuttoned jacket, sunglasses with transparent holes, headphones, or realistic layered hair.
                </p>
              </div>
            </div>
          </section>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white">Want to inspect real player skins?</p>
              <p className="text-xs text-neutral-400">Search any username to see how creators use these exact layers.</p>
            </div>
            <Link
              href="/skindownloader"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-all shadow-md cursor-pointer"
            >
              <Download size={14} /> Open Skin Downloader
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
