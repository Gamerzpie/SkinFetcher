"use client";

import Link from "next/link";
import { Shield, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass-card mt-16 p-8 sm:p-12 rounded-3xl border border-white/10 max-w-[1180px] mx-auto text-neutral-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Col 1: Brand & Mission */}
        <div className="md:col-span-1 space-y-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Skin Grabber logo"
              className="w-7 h-7 rounded-lg object-cover border border-white/10"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-white text-base tracking-wider">
              SKIN GRABBER
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            The ultra-fast, privacy-first Minecraft skin downloader &amp; interactive 3D WebGL viewer on <strong className="text-white">skingrabber.bond</strong>.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <Sparkles size={12} /> 100% Free &bull; No Login Required
            </span>
          </div>
        </div>

        {/* Col 2: Tools & Exploration */}
        <div className="space-y-3">
          <h3 className="font-display font-semibold text-white text-xs uppercase tracking-wider">
            Tools &amp; Features
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/home" className="hover:text-emerald-400 transition-colors">
                Skin Search &amp; 3D Viewer
              </Link>
            </li>
            <li>
              <Link href="/skins" className="hover:text-emerald-400 transition-colors">
                Popular Skins Gallery
              </Link>
            </li>
            <li>
              <Link href="/skindownloader" className="hover:text-emerald-400 transition-colors">
                Instant Skin Downloader
              </Link>
            </li>
            <li>
              <Link href="/home#faq" className="hover:text-emerald-400 transition-colors">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Resources & Guides */}
        <div className="space-y-3">
          <h3 className="font-display font-semibold text-white text-xs uppercase tracking-wider">
            Minecraft Guides
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/guides" className="hover:text-emerald-400 transition-colors">
                All Guides &amp; Tutorials
              </Link>
            </li>
            <li>
              <Link
                href="/guides/how-to-change-minecraft-skin"
                className="hover:text-emerald-400 transition-colors"
              >
                How to Change Skins (Java &amp; Bedrock)
              </Link>
            </li>
            <li>
              <Link
                href="/guides/steve-vs-alex-model"
                className="hover:text-emerald-400 transition-colors"
              >
                Steve 4px vs. Alex 3px Models
              </Link>
            </li>
            <li>
              <Link
                href="/guides/minecraft-skin-format-guide"
                className="hover:text-emerald-400 transition-colors"
              >
                64x64 Dual-Layer Format Specs
              </Link>
            </li>
            <li>
              <Link
                href="/guides/troubleshoot-skins"
                className="hover:text-emerald-400 transition-colors"
              >
                Troubleshoot Multiplayer Skins
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal & Company */}
        <div className="space-y-3">
          <h3 className="font-display font-semibold text-white text-xs uppercase tracking-wider">
            Legal &amp; Support
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-emerald-400 transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">
                Disclaimer &amp; Trademarks
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-emerald-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                Contact &amp; DMCA Inquiries
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Trademark Disclaimer & Bottom Bar */}
      <div className="pt-8 border-t border-white/10 space-y-4">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-neutral-400 leading-relaxed">
          <div className="flex items-center gap-1.5 font-semibold text-neutral-300 mb-1">
            <Shield size={13} className="text-emerald-400" />
            <span>Mojang Studios / Microsoft Trademark Notice</span>
          </div>
          NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT. Minecraft is a registered trademark of Mojang Synergies AB and Microsoft Corporation. Skin Grabber (skingrabber.bond) is an independent fan resource and search utility.
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>&copy; 2026 Skin Grabber (skingrabber.bond). All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
