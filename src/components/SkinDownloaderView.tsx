"use client";

import { FormEvent, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowDownToLine,
  Check,
  Copy,
  ExternalLink,
  Search,
  Sparkles,
  Share2,
  ShieldCheck,
  Laptop,
  Gamepad2,
  Image as ImageIcon,
  User,
  Info,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RotatableSkinViewer } from "@/components/RotatableSkinViewer";

interface SkinDetails {
  username: string;
  uuid: string;
  skinUrl: string;
  skinType: "Classic/Steve" | "Slim/Alex";
  previewUrl: string;
}

const quickNames = ["Dream", "Technoblade", "Notch", "Sapnap", "TommyInnit", "CaptainSparklez", "MumboJumbo", "Grian"];

export function SkinDownloaderView() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState<SkinDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedUuid, setCopiedUuid] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [guideTab, setGuideTab] = useState<"java" | "bedrock">("java");

  const cleanInput = useMemo(() => username.trim(), [username]);

  async function fetchSkin(name: string) {
    const query = name.trim();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/player?username=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error("Could not find a Minecraft account with that username.");
      }
      const data = (await res.json()) as SkinDetails;
      setPlayer(data);

      // Update URL param
      const url = new URL(window.location.href);
      url.searchParams.set("username", data.username);
      window.history.pushState({}, "", url.toString());
    } catch (err: unknown) {
      setPlayer(null);
      setError(err instanceof Error ? err.message : "Failed to retrieve skin");
    } finally {
      setLoading(false);
    }
  }

  // Pre-load from URL query parameter if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get("username") || params.get("user") || params.get("u");
    if (userParam) {
      const clean = userParam.trim();
      setUsername(clean);
      fetchSkin(clean);
    }
  }, []);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    fetchSkin(cleanInput);
  }

  async function copyShareLink() {
    if (!player) return;
    const shareUrl = `${window.location.origin}/skindownloader?username=${encodeURIComponent(player.username)}`;
    await navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 1600);
  }

  async function copyUuid() {
    if (!player) return;
    await navigator.clipboard.writeText(player.uuid);
    setCopiedUuid(true);
    setTimeout(() => setCopiedUuid(false), 1600);
  }

  async function copySkinUrl() {
    if (!player) return;
    await navigator.clipboard.writeText(player.skinUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 1600);
  }

  return (
    <main className="skinfetch-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Navbar />

      <header className="hero-section pb-6">
        <div className="eyebrow">
          <Sparkles size={16} /> Fast Minecraft Skin Downloader &bull; skingrabber.bond
        </div>
        <h1>SKIN DOWNLOADER</h1>
        <p>
          Download any Minecraft player&apos;s skin file directly on skingrabber.bond in standard 64x64 PNG format,
          HD 3D isometric render, or avatar head icon. Ready for Java &amp; Bedrock.
        </p>

        {/* Search input */}
        <form className="search-glass w-full max-w-2xl px-4" onSubmit={handleSearch}>
          <Search className="search-icon" size={22} aria-hidden="true" />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type any Minecraft player username..."
            autoComplete="off"
            pattern="[A-Za-z0-9_]{1,16}"
            aria-label="Minecraft username"
          />
          <button type="submit" disabled={!cleanInput || loading}>
            {loading ? "Grabbing..." : "Download"}
          </button>
        </form>

        {/* Quick picks */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 px-4 text-xs text-neutral-400">
          <span className="text-[var(--accent)] font-semibold">Popular:</span>
          {quickNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => {
                setUsername(name);
                fetchSkin(name);
              }}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-all cursor-pointer"
            >
              {name}
            </button>
          ))}
        </div>
      </header>

      {/* Main content stage */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        {error && (
          <div className="glass-card not-found-card floating-card mb-8">
            <span className="text-red-400 font-bold">Skin Download Error</span>
            <p>{error}</p>
            <button
              type="button"
              onClick={() => cleanInput && fetchSkin(cleanInput)}
              className="mt-2"
            >
              Try Again
            </button>
          </div>
        )}

        {loading && (
          <div className="glass-card result-card skeleton-card mb-8">
            <div className="skeleton-preview" />
            <div className="skeleton-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        {player && !loading && (
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-emerald-500/30 shadow-2xl mb-12 animate-fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: 3D Rotatable Viewer */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="preview-stage w-full max-w-[340px] aspect-[3/4] rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden flex items-center justify-center">
                  <div className="preview-halo" />
                  <RotatableSkinViewer
                    skinUrl={player.skinUrl}
                    skinType={player.skinType}
                    username={player.username}
                  />
                  <span className="rotate-hint">Drag in any direction to rotate</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Model: {player.skinType}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-neutral-300">
                    64x64 PNG
                  </span>
                </div>
              </div>

              {/* Right Column: Download Hub */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="panel-label">Profile Found</span>
                  <button
                    type="button"
                    onClick={copyShareLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-white/10 hover:bg-white/20 text-neutral-200 transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                    {copiedLink ? "Link Copied!" : "Share Skin"}
                  </button>
                </div>

                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                  {player.username}
                </h2>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
                  <span>UUID:</span>
                  <span className="text-neutral-300 bg-white/5 px-2 py-0.5 rounded border border-white/10 select-all">
                    {player.uuid}
                  </span>
                  <button
                    type="button"
                    onClick={copyUuid}
                    className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                    title="Copy UUID"
                  >
                    {copiedUuid ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Primary Download Buttons */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    Download Formats
                  </span>

                  {/* 1. Official Skin File */}
                  <a
                    href={player.skinUrl}
                    download={`${player.username}-skin.png`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all shadow-lg group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-black/10">
                        <ArrowDownToLine size={20} />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold">Standard Skin File (.PNG)</div>
                        <div className="text-xs text-black/80 font-normal">
                          Official Minecraft 64x64 texture ready to upload in launcher
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/15">
                      Download
                    </span>
                  </a>

                  {/* 2. HD Isometric Render */}
                  <a
                    href={player.previewUrl}
                    download={`${player.username}-hd-render.png`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white transition-all border border-white/10 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/5 text-emerald-400">
                        <ImageIcon size={20} />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold">HD 3D Body Render</div>
                        <div className="text-xs text-neutral-400">
                          High resolution transparent showcase render for thumbnails &amp; art
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10">
                      Download
                    </span>
                  </a>

                  {/* 3. Avatar Face & Head */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`https://mc-heads.net/avatar/${encodeURIComponent(player.username)}/128`}
                      download={`${player.username}-head.png`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <User size={16} className="text-emerald-400" />
                        <span className="text-xs font-medium">Head Icon (128px)</span>
                      </div>
                      <ArrowDownToLine size={14} className="text-neutral-400" />
                    </a>

                    <button
                      type="button"
                      onClick={copySkinUrl}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <ExternalLink size={16} className="text-emerald-400" />
                        <span className="text-xs font-medium">
                          {copiedUrl ? "URL Copied!" : "Copy Texture URL"}
                        </span>
                      </div>
                      {copiedUrl ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-neutral-400" />}
                    </button>
                  </div>
                </div>

                {/* Direct link to Mojang skin upload */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Upload directly to your Mojang account:
                  </span>
                  <a
                    href="https://www.minecraft.net/profile/skin"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline font-medium"
                  >
                    Minecraft.net Profile <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* If no skin loaded yet, show helper instructions */}
        {!player && !loading && (
          <div className="glass-card p-8 rounded-3xl text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <ArrowDownToLine size={32} />
            </div>
            <h2 className="text-2xl font-bold font-display text-white mb-2">
              Ready to download any Minecraft skin
            </h2>
            <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
              Enter any Java Edition username in the search box above. Skin Grabber will resolve
              the active skin texture and provide direct download links for the raw skin, HD render, and head avatar.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/5 text-neutral-300 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" /> No password needed
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-neutral-300 flex items-center gap-1.5">
                <Sparkles size={14} className="text-emerald-400" /> 100% Free &amp; Instant
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-neutral-300 flex items-center gap-1.5">
                <Check size={14} className="text-emerald-400" /> Official Mojang Texture Server
              </span>
            </div>
          </div>
        )}

        {/* Step-by-Step Installation Guide */}
        <section className="glass-card p-6 md:p-8 rounded-3xl mb-12">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <span className="panel-label">Tutorial</span>
              <h2 className="text-2xl font-display font-bold text-white">
                How to Apply Downloaded Skins
              </h2>
            </div>

            {/* Toggle Tabs */}
            <div className="flex rounded-full bg-white/5 p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setGuideTab("java")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  guideTab === "java"
                    ? "bg-emerald-500 text-black shadow-md font-semibold"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <Laptop size={14} /> Java Edition
              </button>
              <button
                type="button"
                onClick={() => setGuideTab("bedrock")}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  guideTab === "bedrock"
                    ? "bg-emerald-500 text-black shadow-md font-semibold"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <Gamepad2 size={14} /> Bedrock / Pocket
              </button>
            </div>
          </div>

          {guideTab === "java" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center mb-3">
                    1
                  </div>
                  <h3 className="font-bold text-white mb-2">Open Minecraft Launcher</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Launch the official Minecraft Launcher on your PC or Mac. Select &ldquo;Minecraft: Java Edition&rdquo; and click the <strong>Skins</strong> tab at the top.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center mb-3">
                    2
                  </div>
                  <h3 className="font-bold text-white mb-2">Select &ldquo;New Skin&rdquo;</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Click <strong>New Skin</strong>. Choose your player model (<strong>Classic</strong> for 4px arms or <strong>Slim</strong> for 3px arms).
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center mb-3">
                    3
                  </div>
                  <h3 className="font-bold text-white mb-2">Browse File &amp; Save</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Click <strong>Browse</strong>, select your downloaded 64x64 PNG skin file, and click <strong>Save &amp; Use</strong>. Your skin is ready in multiplayer!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center mb-3">
                    1
                  </div>
                  <h3 className="font-bold text-white mb-2">Enter Dressing Room</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Start Minecraft on Windows, mobile, or console. On the main title screen, select <strong>Dressing Room</strong> or <strong>Profile</strong>.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center mb-3">
                    2
                  </div>
                  <h3 className="font-bold text-white mb-2">Classic Skins &rarr; Owned</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Click <strong>Edit Character</strong>, switch to the <strong>Classic Skins</strong> tab, and expand the <strong>Owned Skins</strong> section.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center mb-3">
                    3
                  </div>
                  <h3 className="font-bold text-white mb-2">Choose New Skin</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Select <strong>Choose New Skin</strong>, select your saved PNG file from your photos or files, and confirm the arm thickness.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <Info size={18} className="text-emerald-400 mt-0.5 shrink-0" />
            <p className="text-xs text-neutral-300 leading-relaxed">
              <strong>Tip:</strong> All skins grabbed by Skin Grabber on skingrabber.bond are original, uncompressed PNG files directly from Mojang&apos;s texture servers. They contain all 1.8+ dual-layer jacket, hat, sleeves, and pants transparency.
            </p>
          </div>
        </section>

        {/* Explore more link */}
        <div className="text-center pb-8">
          <Link
            href="/skins"
            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Want to discover popular skins instead? Browse the Skins Gallery &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
