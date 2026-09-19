import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Skin Grabber (skingrabber.bond)",
  description:
    "Privacy Policy for skingrabber.bond. Learn how we handle public Minecraft data, local storage, cookies, and Google AdSense advertising compliance.",
  alternates: {
    canonical: "https://skingrabber.bond/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck size={16} /> Legal &amp; Compliance &bull; skingrabber.bond
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm">
            Last Updated: September 19, 2026 &bull; Effective Date: September 19, 2026
          </p>
        </header>

        <article className="glass-card p-6 sm:p-10 rounded-3xl space-y-8 text-neutral-300 leading-relaxed text-sm">
          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <Eye className="text-emerald-400" size={20} /> 1. Overview &amp; Introduction
            </h2>
            <p>
              Welcome to <strong>Skin Grabber</strong>, accessible at{" "}
              <a
                href="https://skingrabber.bond"
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                https://skingrabber.bond
              </a>{" "}
              (&ldquo;Website&rdquo;, &ldquo;Service&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting it through compliance with this Privacy Policy.
            </p>
            <p className="mt-2">
              This document explains what information we collect, how it is used, how third-party advertising partners (such as Google AdSense) use cookies, and the rights you have concerning your data under global privacy standards, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <Lock className="text-emerald-400" size={20} /> 2. Information We Collect
            </h2>
            <p className="font-semibold text-white">A. Public Minecraft Gamertag Queries</p>
            <p className="mt-1">
              Skin Grabber does not require you to create an account, register an email, or provide Minecraft login credentials or passwords. When you submit a Minecraft username, our system relays that query to official public Mojang and Minecraft session directory APIs solely to retrieve publicly available skin textures, UUIDs, and avatar renders. We never store or transmit private credentials.
            </p>

            <p className="font-semibold text-white mt-4">B. Local Browser Storage</p>
            <p className="mt-1">
              We use your browser&apos;s local storage (<code className="bg-white/5 px-1 py-0.5 rounded text-neutral-200">localStorage</code>) to save your recent skin searches locally on your computer or mobile device. This data never leaves your physical device and can be cleared at any time through your browser settings.
            </p>

            <p className="font-semibold text-white mt-4">C. Standard Server Log Files</p>
            <p className="mt-1">
              Like virtually all standard web platforms, our web servers automatically log basic non-personally identifiable diagnostic data when you visit our site. These log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks. This data is utilized strictly to analyze trends, administer the site, prevent abuse or DDoS attacks, and gather demographic information for aggregate use.
            </p>
          </section>

          <section className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <h2 className="text-xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <FileText className="text-emerald-400" size={20} /> 3. Google AdSense &amp; Third-Party Advertising Cookies
            </h2>
            <p>
              Google is a third-party vendor on our site. Google uses cookies, specifically the <strong>DoubleClick DART cookie</strong>, to serve advertisements to visitors on our site based upon their visit to <strong className="text-white">skingrabber.bond</strong> and other sites on the Internet.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-neutral-300">
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline hover:text-emerald-300 font-medium"
                >
                  Google Ads Settings
                </a>.
              </li>
              <li>
                Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline hover:text-emerald-300 font-medium"
                >
                  aboutads.info
                </a>{" "}
                or the Network Advertising Initiative at{" "}
                <a
                  href="https://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline hover:text-emerald-300 font-medium"
                >
                  optout.networkadvertising.org
                </a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              4. Cookies and Web Beacons
            </h2>
            <p>
              Our Website uses cookies to store information about visitors&apos; preferences, record user-specific information on which pages the user accesses or visits, and customize web page content based on visitors&apos; browser type or other information that the visitor sends via their browser.
            </p>
            <p className="mt-2">
              You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers&apos; respective websites. To learn more, visit our dedicated{" "}
              <Link href="/cookie-policy" className="text-emerald-400 underline hover:text-emerald-300">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              5. GDPR Privacy Rights (European Economic Area)
            </h2>
            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR), including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification (to correct inaccurate data).</li>
              <li>The right to object to processing of your personal data.</li>
              <li>The right of restriction and data portability.</li>
              <li>The right to withdraw consent at any time.</li>
            </ul>
            <p className="mt-2">
              Because we do not store personal profiles, accounts, or emails on our servers, we hold no persistent identifiable database records linked to your identity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              6. CCPA / CPRA Privacy Rights (California Residents)
            </h2>
            <p>
              Under the California Consumer Privacy Act (CCPA), California consumers have the right to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request that a business disclose the categories and specific pieces of personal data collected.</li>
              <li>Request that a business delete any personal data collected.</li>
              <li>Request that a business not sell the consumer&apos;s personal data (We do not sell personal information).</li>
              <li>The right to non-discrimination for exercising these privacy rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              7. Children&apos;s Information (COPPA Compliance)
            </h2>
            <p>
              Protecting the online privacy of children is especially important. Skin Grabber does not knowingly collect any Personal Identifiable Information from children under the age of 13. If a parent or guardian believes that Skin Grabber has in its database the personal information of a child under 13, please contact us immediately and we will promptly remove such information from our records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              8. Third-Party Links &amp; External APIs
            </h2>
            <p>
              Our Website contains links to external platforms such as Mojang Studios (minecraft.net), skin libraries, and social share endpoints. We are not responsible for the privacy practices or the content of these external third-party sites. We encourage our users to be aware when they leave our site and to read the privacy statements of each and every website that collects personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-display text-white mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our compliance with Google AdSense guidelines, please contact us at:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs font-mono">
              <p>Website: https://skingrabber.bond</p>
              <p>Email: support@skingrabber.bond</p>
              <p>Inquiries: tahazaman78@gmail.com</p>
              <p>Contact Form: <Link href="/contact" className="text-emerald-400 underline">https://skingrabber.bond/contact</Link></p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
