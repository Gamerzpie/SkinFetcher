import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Layers,
  Sparkles,
  ArrowLeft,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Classic (Steve 4px) vs. Slim (Alex 3px) Skin Formats Explained | skingrabber.bond",
  description:
    "Understand the technical differences between Minecraft's Classic (Steve 4-pixel) and Slim (Alex 3-pixel) arm models. Learn how to fix black bars and model texture bleeding.",
  alternates: {
    canonical: "https://skingrabber.bond/guides/steve-vs-alex-model",
  },
};

export default function SteveVsAlexModelPage() {
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
              Skin Architecture
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Clock size={12} /> 6 min read &bull; Updated September 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Classic (Steve 4px) vs. Slim (Alex 3px): Minecraft Skin Models Explained
          </h1>
          <p className="text-neutral-300 text-base leading-relaxed">
            Ever downloaded a Minecraft skin only to find black glitch lines, awkward floating arm textures, or stretched shoulders? This guide breaks down the architecture between Classic and Slim player models and how to select the right one.
          </p>
        </header>

        <div className="glass-card p-6 sm:p-10 rounded-3xl space-y-10 text-neutral-300 leading-relaxed text-sm">
          {/* Summary Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                Original Standard
              </div>
              <h2 className="text-xl font-bold font-display text-white">Classic (Steve Model)</h2>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Arm Width:</strong> Exactly 4 pixels wide on each side.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Origin:</strong> Introduced in Minecraft Alpha (2009).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Best For:</strong> Armor, robots, bulky knight suits, beasts, and traditional male avatars.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                Modern Standard
              </div>
              <h2 className="text-xl font-bold font-display text-white">Slim (Alex Model)</h2>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Arm Width:</strong> 3 pixels wide (1 pixel slimmer per arm).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Origin:</strong> Added in the 1.8 &ldquo;Bountiful Update&rdquo; (2014).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Best For:</strong> Sleek casual clothing, hoodies, female characters, and modern aesthetic community skins.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-white">
              Why Does the Arm Width Matter?
            </h2>
            <p>
              In Minecraft, the player&apos;s torso, head, and legs are geometrically identical across both models:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-300">
              <li><strong>Head:</strong> 8 &times; 8 &times; 8 pixels (with an 8 &times; 8 &times; 8 overlay hat layer).</li>
              <li><strong>Torso:</strong> 8 &times; 12 &times; 4 pixels.</li>
              <li><strong>Legs:</strong> 4 &times; 12 &times; 4 pixels each.</li>
            </ul>
            <p className="mt-2">
              The <em>only</em> physical geometric difference is in the arms: <strong>4 &times; 12 &times; 4 pixels</strong> for Classic versus <strong>3 &times; 12 &times; 4 pixels</strong> for Slim.
            </p>
          </section>

          {/* Common Glitches */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display text-white">
              What Happens When You Choose the Wrong Model?
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <h3 className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                  <AlertTriangle className="text-red-400" size={16} /> Error 1: Classic Skin applied to Slim Model
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  If you upload a 4-pixel Classic skin and set the model to <strong>Slim</strong>, Minecraft will clip 1 pixel off the outer texture column. This causes parts of your arm design (like sleeve stripes or watches) to be cut off, and in older versions can produce black void pixels under the shoulder.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                  <AlertTriangle className="text-amber-400" size={16} /> Error 2: Slim Skin applied to Classic Model
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  If you upload a 3-pixel Slim skin and select the <strong>Classic (4px)</strong> model, Minecraft will attempt to stretch the 3-pixel texture across 4 physical voxel blocks. You will see an awkward black bar running down the inner or outer seams of both arms.
                </p>
              </div>
            </div>
          </section>

          {/* How Skin Grabber Solves This */}
          <section className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
            <h2 className="text-xl font-bold font-display text-white flex items-center gap-2">
              <Sparkles className="text-emerald-400" size={20} /> How Skin Grabber Handles Model Detection
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed">
              When you look up any player on <strong>skingrabber.bond</strong>, our backend decodes the Base64 JSON session payload signed by Mojang Studios. In that payload, Mojang includes a <code className="bg-black/30 px-1 py-0.5 rounded text-emerald-300 font-mono">metadata.model</code> property:
            </p>
            <ul className="list-disc pl-5 text-xs text-neutral-300 space-y-1">
              <li>If <code className="bg-black/30 px-1 py-0.5 rounded text-emerald-300 font-mono">model: &quot;slim&quot;</code>, Skin Grabber automatically renders the 3D model with 3px arms.</li>
              <li>If absent, it defaults to the 4px Classic model.</li>
            </ul>
            <p className="text-xs text-neutral-400 mt-2">
              This guarantees that whenever you download or inspect a skin on our site, you are seeing the exact visual representation as configured by the player.
            </p>
          </section>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white">Test your skin model now</p>
              <p className="text-xs text-neutral-400">Preview any username in 3D to see if it&apos;s Classic or Slim.</p>
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
