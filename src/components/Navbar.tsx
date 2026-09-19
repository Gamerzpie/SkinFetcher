"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Home } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/" || pathname === "/home";
  const isDownloader = pathname === "/skindownloader";

  return (
    <nav className="glass-nav" aria-label="Primary navigation">
      {/* Brand logo & title */}
      <Link className="brand" href="/home" aria-label="Skin Grabber home">
        <img
          src="/logo.png"
          alt="Skin Grabber logo"
          className="brand-logo-img"
          referrerPolicy="no-referrer"
        />
        <span className="brand-text">SKIN GRABBER</span>
      </Link>

      {/* Streamlined Core Navigation for Mobile, Tablet & PC */}
      <div className="nav-links">
        <Link
          href="/home"
          className={isHome ? "active" : ""}
          aria-current={isHome ? "page" : undefined}
        >
          <Home size={14} className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link
          href="/skindownloader"
          className={isDownloader ? "active" : ""}
          aria-current={isDownloader ? "page" : undefined}
        >
          <Download size={14} className="nav-icon" />
          <span>
            <span className="nav-full-text">Skin </span>Downloader
          </span>
        </Link>
      </div>
    </nav>
  );
}
