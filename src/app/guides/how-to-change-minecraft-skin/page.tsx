import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Laptop,
  Gamepad2,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  Clock,
  Sparkles,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How to Change Your Minecraft Skin (Java & Bedrock 2026 Guide) | skingrabber.bond",
  description:
    "Step-by-step 2026 tutorial on how to apply downloaded Minecraft skins on Java Edition and Bedrock/Pocket Edition. Avoid common upload mistakes and get your new skin running in multiplayer.",
  alternates: {
    canonical: "https://skingrabber.bond/guides/how-to-change-minecraft-skin",
  },
};

export default function HowToChangeSkinPage() {
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

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              Tutorial &amp; Setup
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Clock size={12} /> 5 min read &bull; Updated September 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4 leading-tight">
            How to Change Your Minecraft Skin on Java and Bedrock Edition
          </h1>
          <p className="text-neutral-300 text-base leading-relaxed">
            Downloaded an awesome skin using Skin Grabber (skingrabber.bond) but not sure how to put it on your character? This comprehensive 2026 guide walks you through every step for PC, Mac, mobile devices, and gaming consoles.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl space-y-10 text-neutral-300 leading-relaxed text-sm">
          {/* Important Warning Section */}
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
            <AlertCircle className="text-amber-400 shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-bold text-white text-sm">Crucial Step Before Uploading:</h3>
              <p className="text-xs text-neutral-300 mt-1">
                Make sure you upload the <strong>raw 64x64 pixel PNG file</strong> (downloaded via the green &ldquo;Download Skin PNG&rdquo; button), <em>NOT</em> the 3D isometric preview picture or an avatar icon. Minecraft launchers will error or fail if given a non-standard image.
              </p>
            </div>
          </div>

          {/* Part 1: Java Edition */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Laptop size={22} />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400">Method 1</span>
                <h2 className="text-2xl font-bold font-display text-white">
                  Minecraft: Java Edition (Official Launcher)
                </h2>
              </div>
            </div>

            <p>
              The official Minecraft Launcher on Windows, macOS, and Linux makes installing and switching skins instantaneous. Follow these three steps:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs flex items-center justify-center">1</span>
                  <span>Navigate to the Skins Tab in the Launcher</span>
                </div>
                <p className="text-xs text-neutral-300 pl-8 leading-relaxed">
                  Open the <strong>Minecraft Launcher</strong>. In the top navigation bar, ensure &ldquo;Minecraft: Java Edition&rdquo; is selected on the left panel, then click the <strong>Skins</strong> tab located right beside &ldquo;Play&rdquo; and &ldquo;Installations&rdquo;.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs flex items-center justify-center">2</span>
                  <span>Create a &ldquo;New Skin&rdquo; &amp; Select Arm Model</span>
                </div>
                <p className="text-xs text-neutral-300 pl-8 leading-relaxed">
                  Click the plus icon labelled <strong>New Skin</strong>. Give your skin a custom name (e.g. &ldquo;PvP Warrior&rdquo;). Choose your arm model:
                </p>
                <ul className="list-disc pl-12 mt-2 space-y-1 text-xs text-neutral-400">
                  <li><strong>Classic (4px):</strong> Standard arms for original Steve-style designs.</li>
                  <li><strong>Slim (3px):</strong> Sleeker, 3-pixel-wide arms for modern Alex-style outfits.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs flex items-center justify-center">3</span>
                  <span>Browse File, Save &amp; Use</span>
                </div>
                <p className="text-xs text-neutral-300 pl-8 leading-relaxed">
                  Click <strong>Browse</strong>, select your downloaded 64x64 PNG skin file from your Downloads folder, and click <strong>Save &amp; Use</strong>. You will immediately see your 3D character update inside the launcher!
                </p>
              </div>
            </div>
          </section>

          {/* Part 2: Bedrock Edition */}
          <section className="space-y-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Gamepad2 size={22} />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400">Method 2</span>
                <h2 className="text-2xl font-bold font-display text-white">
                  Minecraft: Bedrock Edition (Windows, iOS, Android &amp; Console)
                </h2>
              </div>
            </div>

            <p>
              Bedrock Edition (formerly MCPE / Pocket Edition) allows you to import custom PNG skins via the in-game Dressing Room.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs flex items-center justify-center">1</span>
                  <span>Open Dressing Room / Profile</span>
                </div>
                <p className="text-xs text-neutral-300 pl-8 leading-relaxed">
                  Start Minecraft Bedrock Edition. On the main title screen, click the <strong>Dressing Room</strong> or <strong>Profile</strong> button under your current avatar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs flex items-center justify-center">2</span>
                  <span>Select Classic Skins &rarr; Owned</span>
                </div>
                <p className="text-xs text-neutral-300 pl-8 leading-relaxed">
                  On the left sidebar, click the green hanger or character icon (<strong>Classic Skins</strong>). Expand the <strong>Owned Skins</strong> dropdown section, then click on the blank gray character model placeholder.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 font-bold text-white mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs flex items-center justify-center">3</span>
                  <span>Choose New Skin &amp; Pick File</span>
                </div>
                <p className="text-xs text-neutral-300 pl-8 leading-relaxed">
                  A button labeled <strong>Choose New Skin</strong> will appear on the bottom right. Click it, select your saved PNG skin file from your file explorer or photo gallery, and confirm whether your skin uses Classic (4px) or Slim (3px) arms.
                </p>
              </div>
            </div>
          </section>

          {/* Pro Tips Section */}
          <section className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
              <Sparkles className="text-emerald-400" size={18} /> Pro Tips for Smooth Multiplayer Display
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Skin Customization Settings:</strong> In Minecraft Java, go to <em>Options &rarr; Skin Customization</em> to make sure all 1.8+ layers (Cape, Jacket, Left Sleeve, Right Sleeve, Left Pants Leg, Right Pants Leg, and Hat) are toggled <strong>ON</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Server Texture Cache:</strong> If you join a multiplayer server and still see your old skin, relog or restart your client. Minecraft caches skin textures locally for up to 10 minutes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Bedrock Cross-Play Notice:</strong> On Bedrock multiplayer servers, ensure <em>&ldquo;Only Allow Trusted Skins&rdquo;</em> is disabled in <em>Settings &rarr; General</em> if you want other players to see your custom uploaded skins.
                </span>
              </li>
            </ul>
          </section>

          {/* Related Guides / Action */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white">Need a skin to test with?</p>
              <p className="text-xs text-neutral-400">Grab any creator&apos;s skin file instantly with our tool.</p>
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
