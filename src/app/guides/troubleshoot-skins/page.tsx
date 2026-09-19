import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Wrench,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  WifiOff,
  ArrowLeft,
  Clock,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Is My Minecraft Skin Not Showing Up? Multiplayer Fixes | skingrabber.bond",
  description:
    "Troubleshoot Minecraft skin glitches: default Steve/Alex resets, multiplayer server sync delays, offline mode server restrictions, and launcher cache fixes.",
  alternates: {
    canonical: "https://skingrabber.bond/guides/troubleshoot-skins",
  },
};

export default function TroubleshootSkinsPage() {
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
              Troubleshooting &amp; Fixes
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Clock size={12} /> 7 min read &bull; Updated September 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Why Is My Minecraft Skin Not Showing Up? Multiplayer Solutions
          </h1>
          <p className="text-neutral-300 text-base leading-relaxed">
            You updated your skin, but when you log into a server, you&apos;re still stuck with the default Steve or Alex character. Here are the 5 most common causes and exact steps to fix each one.
          </p>
        </header>

        <div className="glass-card p-6 sm:p-10 rounded-3xl space-y-10 text-neutral-300 leading-relaxed text-sm">
          {/* Issue 1: Mojang API Delay */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <RefreshCw size={18} />
              </div>
              <h2 className="text-xl font-bold font-display text-white">
                1. Mojang Session Server Sync Delay
              </h2>
            </div>
            <p>
              When you change your skin in the Minecraft Launcher or on Minecraft.net, Mojang must propagate the new texture to their global session authentication servers.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs space-y-1">
              <span className="font-bold text-white block">The Fix:</span>
              <p className="text-neutral-300">
                Wait between 5 to 10 minutes, completely close Minecraft, and re-launch the game. If you test your username on{" "}
                <Link href="/skindownloader" className="text-emerald-400 underline">
                  skingrabber.bond
                </Link>{" "}
                and see the new skin, it means Mojang has successfully processed your texture.
              </p>
            </div>
          </section>

          {/* Issue 2: Offline Mode (Cracked) Servers */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <WifiOff size={18} />
              </div>
              <h2 className="text-xl font-bold font-display text-white">
                2. The Server Is In &ldquo;Offline Mode&rdquo; (online-mode=false)
              </h2>
            </div>
            <p>
              Many community servers run in &ldquo;offline mode&rdquo; (cracked mode). In offline mode, the server disables communication with Mojang&apos;s authentication servers to verify player identities.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs space-y-1">
              <span className="font-bold text-white block">The Fix:</span>
              <p className="text-neutral-300">
                Since offline servers don&apos;t query Mojang, skins will default to Steve/Alex unless the server administrator installs a skin restorer plugin (such as <strong>SkinRestorer</strong> or <strong>CustomSkinLoader</strong>). You can type <code className="bg-black/30 px-1 py-0.5 rounded text-emerald-300 font-mono">/skin set [username]</code> on servers with SkinRestorer installed.
              </p>
            </div>
          </section>

          {/* Issue 3: In-Game Skin Customization Layers Disabled */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Wrench size={18} />
              </div>
              <h2 className="text-xl font-bold font-display text-white">
                3. Skin Customization Layers Are Toggled Off
              </h2>
            </div>
            <p>
              Does your skin look bald, missing its jacket, or lacking detail? You likely have your 1.8+ overlay layers turned off in your game client settings.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs space-y-1.5">
              <span className="font-bold text-white block">The Fix:</span>
              <ol className="list-decimal pl-5 space-y-1 text-neutral-300">
                <li>Press <kbd className="bg-black/40 px-1 py-0.5 rounded border border-white/10">Esc</kbd> and go to <strong>Options</strong>.</li>
                <li>Click <strong>Skin Customization...</strong></li>
                <li>Make sure all options (Cape, Jacket, Left Sleeve, Right Sleeve, Left Pants Leg, Right Pants Leg, Hat) are set to <strong>ON</strong>.</li>
              </ol>
            </div>
          </section>

          {/* Issue 4: Bedrock "Only Allow Trusted Skins" */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <AlertTriangle size={18} />
              </div>
              <h2 className="text-xl font-bold font-display text-white">
                4. Bedrock Edition: &ldquo;Only Allow Trusted Skins&rdquo; Setting
              </h2>
            </div>
            <p>
              On Bedrock Edition (Windows, Xbox, PlayStation, Switch, iOS, Android), Minecraft includes a security filter designed to block custom imported skins if they are not purchased from the Marketplace.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs space-y-1.5">
              <span className="font-bold text-white block">The Fix:</span>
              <p className="text-neutral-300">
                Go to <strong>Settings</strong> &rarr; <strong>General</strong> (or <strong>Profile</strong>), scroll down, and toggle <strong>&ldquo;Only Allow Trusted Skins&rdquo;</strong> to <strong>OFF</strong>. This allows other players to see your custom downloaded skin, and allows you to see theirs.
              </p>
            </div>
          </section>

          {/* Issue 5: Corrupt Launcher Cache */}
          <section className="space-y-3">
            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 size={18} />
              </div>
              <h2 className="text-xl font-bold font-display text-white">
                5. Corrupted Local Launcher Cache
              </h2>
            </div>
            <p>
              Occasionally, your local Minecraft installation retains a cached version of a previous skin or fails to write new texture files to your disk.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs space-y-1.5">
              <span className="font-bold text-white block">The Fix:</span>
              <p className="text-neutral-300">
                In Windows Explorer, press <kbd className="bg-black/40 px-1 py-0.5 rounded border border-white/10">Win + R</kbd>, type <code className="text-emerald-300">%appdata%\.minecraft\assets\skins</code> and delete any cached files in that folder. Restart the game to trigger a fresh download.
              </p>
            </div>
          </section>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white">Still having issues?</p>
              <p className="text-xs text-neutral-400">Verify your current Mojang skin status on our live lookup tool.</p>
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
