import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scale, FileCheck, AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Skin Grabber (skingrabber.bond)",
  description:
    "Terms of Service for skingrabber.bond. Review acceptable use, Minecraft asset ownership, disclaimers, and service terms.",
  alternates: {
    canonical: "https://skingrabber.bond/terms-of-service",
  },
};

export default function TermsOfServicePage() {
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
            <Scale size={16} /> Legal Agreement &bull; skingrabber.bond
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-neutral-400 text-sm">
            Last Updated: September 19, 2026 &bull; Effective Date: September 19, 2026
          </p>
        </header>

        <article className="glass-card p-6 sm:p-10 rounded-3xl space-y-8 text-neutral-300 leading-relaxed text-sm">
          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <FileCheck className="text-emerald-400" size={20} /> 1. Agreement to Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the services provided by <strong>Skin Grabber</strong> at{" "}
              <a href="https://skingrabber.bond" className="text-emerald-400 underline">
                https://skingrabber.bond
              </a>, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            <p className="mt-2">
              If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              Skin Grabber provides an informational and utility web interface allowing Minecraft enthusiasts, server administrators, graphic artists, and players to query publicly available Minecraft Java Edition player skin textures, preview 3D player models in a browser WebGL environment, and download skin assets (PNG files, isometric character renders, and avatar head icons).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              3. Acceptable Use Policy
            </h2>
            <p>You agree not to use the Website to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-neutral-300">
              <li>Engage in automated scraping, mass data harvesting, or automated querying that degrades server performance or exceeds reasonable usage thresholds.</li>
              <li>Attempt to circumvent rate limits, disrupt Mojang session servers, or interfere with security features of the site.</li>
              <li>Upload malicious code, exploits, or automate fraudulent clicks on advertisements served via Google AdSense.</li>
              <li>Impersonate any person or entity or misrepresent affiliation with Mojang Studios, Microsoft, or any individual creator.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              4. Intellectual Property &amp; Trademarks
            </h2>
            <p>
              <strong>Minecraft</strong> is a registered trademark of Mojang Synergies AB and Microsoft Corporation. Skin Grabber is an independent fan utility and is <strong>not affiliated with, endorsed by, sponsored by, or associated with Mojang Studios or Microsoft</strong>.
            </p>
            <p className="mt-2">
              All skin textures displayed on this website are created by individual Minecraft players and creators. We do not claim ownership of any player skins fetched via the public Mojang API. Skins are presented under fair use for personal gaming and preview purposes.
            </p>
          </section>

          <section className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
            <h2 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <AlertCircle className="text-amber-400" size={20} /> 5. Disclaimer of Warranties
            </h2>
            <p>
              The materials and services on Skin Grabber are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. Skin Grabber makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
            <p className="mt-2">
              We do not warrant that Mojang API endpoints will be uninterrupted, error-free, or continuously available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall Skin Grabber, its operators, or suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Skin Grabber, even if an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              7. Third-Party Advertisements &amp; Links
            </h2>
            <p>
              Skin Grabber displays third-party advertisements via Google AdSense. We do not endorse or control the products or services advertised by third parties. Your interactions with advertisers found on or through the site are solely between you and such advertiser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              8. Modifications to Terms
            </h2>
            <p>
              Skin Grabber may revise these Terms of Service for its website at any time without prior notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              9. Governing Law &amp; Contact
            </h2>
            <p>
              Any claims relating to Skin Grabber shall be governed by the laws of applicable jurisdiction without regard to its conflict of law provisions.
            </p>
            <p className="mt-2 text-xs font-mono text-neutral-400">
              Inquiries: support@skingrabber.bond | Contact: https://skingrabber.bond/contact
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
