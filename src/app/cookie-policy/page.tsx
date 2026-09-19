import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cookie, Info, Settings, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Skin Grabber (skingrabber.bond)",
  description:
    "Cookie Policy for skingrabber.bond. Learn about essential cookies, analytics, Google AdSense DoubleClick cookies, and how to manage your preferences.",
  alternates: {
    canonical: "https://skingrabber.bond/cookie-policy",
  },
};

export default function CookiePolicyPage() {
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
            <Cookie size={16} /> Data &amp; Transparency &bull; skingrabber.bond
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">
            Cookie Policy
          </h1>
          <p className="text-neutral-400 text-sm">
            Last Updated: September 19, 2026
          </p>
        </header>

        <article className="glass-card p-6 sm:p-10 rounded-3xl space-y-8 text-neutral-300 leading-relaxed text-sm">
          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <Info className="text-emerald-400" size={20} /> 1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are downloaded to your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work efficiently, enhance user experience, and provide reporting information.
            </p>
            <p className="mt-2">
              On <strong>Skin Grabber (skingrabber.bond)</strong>, we also use modern browser client storage (<code className="bg-white/5 px-1 py-0.5 rounded text-neutral-200">localStorage</code>) to save recent search history directly onto your device so you don&apos;t have to re-type frequent player names.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              2. How We Use Cookies
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white mb-1">A. Strictly Necessary &amp; Functional Cookies</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  These cookies and local storage tokens are essential for you to navigate the website and use its core features, such as storing your skin search history locally and remembering your cookie preference selection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white mb-1">B. Advertising &amp; Google AdSense Cookies</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  We use Google AdSense to display advertisements on our website to fund hosting and development costs. Google and its advertising partners use cookies (such as the DoubleClick DART cookie) to deliver ads based on your visit to this and other websites. These cookies do not store personally identifiable details such as your name or email.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white mb-1">C. Performance and Analytics</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  We may analyze aggregated, anonymous web traffic data to understand which tools (e.g. 3D Viewer vs. Skin Downloader) are most useful, diagnose server bottlenecks, and improve loading performance.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <Settings className="text-emerald-400" size={20} /> 3. Managing and Disabling Cookies
            </h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas may be restricted.
            </p>
            <p className="mt-3 font-semibold text-white">Browser Cookie Management Links:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcd2-9b65-977d54529320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              4. Opting Out of Targeted Advertising
            </h2>
            <p>
              To learn more about interest-based advertising or to opt out of the DoubleClick cookie and personalized Google ads, visit:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs">
              <li>
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Google Ads Settings (https://www.google.com/settings/ads)
                </a>
              </li>
              <li>
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Digital Advertising Alliance (aboutads.info)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youronlinechoices.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  European Interactive Digital Advertising Alliance (EDAA)
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              5. Questions?
            </h2>
            <p>
              For further questions about our Cookie Policy or data handling, please read our{" "}
              <Link href="/privacy-policy" className="text-emerald-400 underline hover:text-emerald-300">
                Privacy Policy
              </Link>{" "}
              or contact us at <code className="bg-white/5 px-1.5 py-0.5 rounded text-neutral-200">support@skingrabber.bond</code>.
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
