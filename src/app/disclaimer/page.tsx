import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AlertTriangle, ShieldAlert, ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer & Trademark Notice | Skin Grabber (skingrabber.bond)",
  description:
    "Official disclaimer for skingrabber.bond. Skin Grabber is an unofficial fan utility and is not affiliated with Mojang Studios or Microsoft.",
  alternates: {
    canonical: "https://skingrabber.bond/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="skinfetch-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-emerald-400 transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <header className="mb-10">
          <div className="eyebrow mb-2">
            <AlertTriangle size={16} /> Legal Disclaimers &bull; skingrabber.bond
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">
            Disclaimer &amp; Trademark Notice
          </h1>
          <p className="text-neutral-400 text-sm">
            Last Updated: September 19, 2026
          </p>
        </header>

        <article className="glass-card p-6 sm:p-10 rounded-3xl space-y-8 text-neutral-300 leading-relaxed text-sm">
          <section className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <h2 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <ShieldAlert className="text-amber-400" size={22} /> Unofficial Fan Tool Notice
            </h2>
            <p className="text-white font-medium text-base">
              NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
            </p>
            <p className="mt-2 text-neutral-300 text-xs leading-relaxed">
              In accordance with Mojang Studios&apos; Commercial Usage Guidelines and Brand Guidelines, Skin Grabber is an independent fan project created to assist players in viewing and downloading publicly accessible community skins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              1. Minecraft Trademarks &amp; Copyrights
            </h2>
            <p>
              &ldquo;Minecraft&rdquo; is a registered trademark of Mojang Synergies AB and Microsoft Corporation. The Minecraft game, its assets, audio, and visual logos are copyright Mojang Studios and Microsoft.
            </p>
            <p className="mt-2">
              Skin Grabber does not claim any ownership of the Minecraft brand, logo, Steve/Alex character designs, or any proprietary Mojang assets. All trademarks mentioned belong to their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              2. Player Skins &amp; User-Generated Content
            </h2>
            <p>
              The skin textures fetched and displayed on Skin Grabber are authored by individual community members and creators. Skin Grabber functions purely as a search engine and visualizer that reads public skin URLs returned by Mojang&apos;s public API servers.
            </p>
            <p className="mt-2">
              If you are the original artist of a skin and have concerns regarding its display or distribution, please contact us at <code className="bg-white/5 px-1.5 py-0.5 rounded text-neutral-200">support@skingrabber.bond</code> and our team will be glad to assist you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              3. Service Availability and Accuracy
            </h2>
            <p>
              Skin Grabber provides skin downloads and previews free of charge on an &ldquo;as-is&rdquo; basis. While we strive to maintain 99.9% uptime and accurate skin decoding, we make no representations or warranties regarding uninterrupted availability or specific performance benchmarks of Mojang&apos;s upstream infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              4. Mojang Brand Guidelines Reference
            </h2>
            <p>
              For more information regarding Mojang&apos;s official guidelines for community fan applications and tools, please visit:
            </p>
            <div className="mt-3">
              <a
                href="https://www.minecraft.net/en-us/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline text-xs"
              >
                Official Minecraft Brand Guidelines &amp; Commercial Terms <ExternalLink size={12} />
              </a>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
