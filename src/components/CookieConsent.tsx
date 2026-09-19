"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("skingrabber_cookie_consent");
      if (!consent) {
        // Delay display slightly for smooth page load
        const timer = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  function handleAccept() {
    try {
      localStorage.setItem("skingrabber_cookie_consent", "accepted");
    } catch {}
    setShow(false);
  }

  function handleDecline() {
    try {
      localStorage.setItem("skingrabber_cookie_consent", "declined");
    } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
      aria-label="Cookie and Privacy Consent"
    >
      <div className="rounded-2xl border border-emerald-500/30 bg-[#0f1115]/95 backdrop-blur-2xl p-5 shadow-2xl text-white">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
            <Cookie size={18} />
            <span>Cookies &amp; Privacy Notice</span>
          </div>
          <button
            type="button"
            onClick={handleDecline}
            className="text-neutral-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <p className="text-xs text-neutral-300 leading-relaxed mb-4">
          skingrabber.bond uses standard cookies and browser local storage to save your recent searches and to deliver relevant advertisements through Google AdSense and analytics. By continuing to use our service, you agree to our{" "}
          <Link href="/privacy-policy" className="text-emerald-400 underline hover:text-emerald-300">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/cookie-policy" className="text-emerald-400 underline hover:text-emerald-300">
            Cookie Policy
          </Link>.
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
          >
            <ShieldCheck size={14} /> Accept All
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="px-4 py-2 text-xs font-medium rounded-xl bg-white/10 hover:bg-white/15 text-neutral-200 transition-colors cursor-pointer"
          >
            Necessary Only
          </button>
        </div>
      </div>
    </aside>
  );
}
