"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowDownToLine,
  Check,
  Copy,
  ExternalLink,
  Search,
  Sparkles,
  Share2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RotatableSkinViewer } from "@/components/RotatableSkinViewer";
import { AdBanner } from "@/components/AdBanner";
import { downloadImage } from "@/lib/download";

export type PlayerResult = {
  username: string;
  uuid: string;
  skinUrl: string;
  skinType: "Classic/Steve" | "Slim/Alex";
  previewUrl: string;
};

export type FetchState = "idle" | "loading" | "success" | "error";

const trendingNames = [
  "Notch",
  "Dream",
  "Technoblade",
  "Sapnap",
  "TommyInnit",
  "CaptainSparklez",
];

const faqs = [
  {
    question: "How does Skin Grabber (skingrabber.bond) work?",
    answer:
      "Skin Grabber resolves any Minecraft username through Mojang's official servers, reads the player's active skin texture, and prepares instant launcher-ready PNG downloads and rotatable 3D previews.",
  },
  {
    question: "Is skingrabber.bond free to use?",
    answer:
      "Yes, 100% free with unlimited skin downloads. Skin Grabber requires no login, no passwords, no subscriptions, and no account connections.",
  },
  {
    question: "Does it work for Java and Bedrock Minecraft skins?",
    answer:
      "Skin Grabber fetches skins for any Java Edition Minecraft username. The resulting 64x64 PNG textures can be uploaded directly to Java Edition or Bedrock / Pocket Edition (MCPE).",
  },
  {
    question: "Can I download HD skins and 3D renders?",
    answer:
      "You can download the original 64x64 PNG skin, a high-resolution 3D isometric character render, and square avatar head icons.",
  },
];

export function SkinGrabberHome() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [state, setState] = useState<FetchState>("idle");
  const [player, setPlayer] = useState<PlayerResult | null>(null);
  const [recent, setRecent] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  const normalizedUsername = useMemo(() => username.trim(), [username]);

  async function fetchPlayer(name: string) {
    const query = name.trim();
    if (!query) return;

    setState("loading");
    setLastQuery(query);
    setCopied(false);
    setShareCopied(false);

    try {
      const response = await fetch(`/api/player?username=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Player not found");
      }

      const data = (await response.json()) as PlayerResult;
      setPlayer(data);
      setState("success");

      setRecent((prev) => {
        const nextRecent = [data.username, ...prev.filter((item) => item !== data.username)].slice(0, 6);
        window.localStorage.setItem("skingrabber-recent", JSON.stringify(nextRecent));
        return nextRecent;
      });

      // Update URL query parameter without triggering full reload
      const params = new URLSearchParams(window.location.search);
      if (params.get("username") !== data.username) {
        const newUrl = `${window.location.pathname}?username=${encodeURIComponent(data.username)}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }
    } catch {
      setPlayer(null);
      setState("error");
    }
  }

  useEffect(() => {
    const saved = window.localStorage.getItem("skingrabber-recent") || window.localStorage.getItem("skinfetch-recent");
    if (saved) {
      setRecent(JSON.parse(saved) as string[]);
    }

    // Deep link detection - redirect to skin downloader section
    const params = new URLSearchParams(window.location.search);
    const urlUser = params.get("username") || params.get("user") || params.get("u");
    if (urlUser) {
      const cleanUser = urlUser.trim();
      router.push(`/skindownloader?username=${encodeURIComponent(cleanUser)}`);
    }
  }, [router]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!normalizedUsername) return;
    setState("loading");
    router.push(`/skindownloader?username=${encodeURIComponent(normalizedUsername)}`);
  }

  function handleSelectUsername(name: string) {
    const clean = name.trim();
    if (!clean) return;
    setState("loading");
    router.push(`/skindownloader?username=${encodeURIComponent(clean)}`);
  }

  async function copyUsername() {
    if (!player) return;
    await navigator.clipboard.writeText(player.username);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  async function shareProfile() {
    if (!player) return;
    const url = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(player.username)}`;
    await navigator.clipboard.writeText(url);
    setShareCopied(true);
    window.setTimeout(() => setShareCopied(false), 1600);
  }

  return (
    <main className="skinfetch-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Navbar />

      <section id="home" className="hero-section">
        <div className="eyebrow"><Sparkles size={16} /> Instant skin retrieval &bull; skingrabber.bond</div>
        <h1>SKIN GRABBER</h1>
        <p>Download Minecraft skins instantly using any username.</p>

        <form className="search-glass" onSubmit={handleSubmit} aria-label="Minecraft skin search">
          <Search className="search-icon" size={22} aria-hidden="true" />
          <label className="sr-only" htmlFor="username">Minecraft username</label>
          <input
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter Minecraft username"
            autoComplete="off"
            pattern="[A-Za-z0-9_]{1,16}"
            aria-describedby="username-help"
          />
          <button type="submit" disabled={!normalizedUsername || state === "loading"}>
            {state === "loading" ? "Opening..." : "Search"}
          </button>
        </form>
        <span id="username-help" className="sr-only">Use a Java Edition Minecraft username.</span>
      </section>

      <section className="result-section" aria-live="polite">
        {state === "idle" && (
          <div className="glass-card intro-card floating-card">
            <span>Ready when you are</span>
            <h2>Type a username to reveal the current Minecraft skin.</h2>
            <p>Skin Grabber keeps the flow fast, private, and effortless with no login required.</p>
          </div>
        )}

        {state === "loading" && (
          <div className="glass-card result-card skeleton-card">
            <div className="skeleton-preview" />
            <div className="skeleton-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        {state === "success" && player && (
          <div className="glass-card result-card success-card">
            <div
              className="preview-stage"
              aria-label={`${player.username} rotatable 3D skin preview`}
            >
              <div className="preview-halo" />
              <RotatableSkinViewer skinUrl={player.skinUrl} skinType={player.skinType} username={player.username} />
              <span className="rotate-hint">Drag to rotate</span>
            </div>
            <div className="player-info">
              <span className="panel-label">Current profile</span>
              <h2>{player.username}</h2>
              <dl>
                <div><dt>Skin type</dt><dd>{player.skinType}</dd></div>
                <div><dt>UUID</dt><dd>{player.uuid}</dd></div>
              </dl>
              <div className="action-grid">
                <button
                  className="action-button primary-action cursor-pointer"
                  onClick={() => downloadImage(player.skinUrl, `${player.username}-skin.png`)}
                  type="button"
                >
                  <ArrowDownToLine size={18} /> PNG Skin
                </button>
                <button
                  className="action-button cursor-pointer"
                  onClick={() => downloadImage(player.previewUrl, `${player.username}-preview.png`)}
                  type="button"
                >
                  <ArrowDownToLine size={18} /> HD Preview
                </button>
                <button className="action-button" onClick={copyUsername} type="button">
                  {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? "Copied" : "Copy username"}
                </button>
                <button className="action-button" onClick={shareProfile} type="button">
                  {shareCopied ? <Check size={18} /> : <Share2 size={18} />} {shareCopied ? "Copied link!" : "Share skin"}
                </button>
                <Link className="action-button" href={`/skindownloader?username=${encodeURIComponent(player.username)}`}>
                  <ExternalLink size={18} /> Downloader view
                </Link>
              </div>
            </div>
          </div>
        )}

        {state === "error" && (
          <div className="glass-card not-found-card floating-card">
            <span>Player not found.</span>
            <p>We could not find “{lastQuery}”. Check the spelling and try again.</p>
            <button type="button" onClick={() => fetchPlayer(lastQuery)}>Retry</button>
          </div>
        )}
      </section>

      <section className="content-grid" aria-label="Skin Grabber discovery panels">
        <div className="glass-card mini-panel">
          <span className="panel-label">Trending searches</span>
          <div className="chip-list">
            {trendingNames.map((name) => (
              <button key={name} type="button" onClick={() => handleSelectUsername(name)}>{name}</button>
            ))}
          </div>
        </div>
        <div className="glass-card mini-panel">
          <span className="panel-label">Recently searched</span>
          {recent.length > 0 ? (
            <div className="chip-list">
              {recent.map((name) => (
                <button key={name} type="button" onClick={() => handleSelectUsername(name)}>{name}</button>
              ))}
            </div>
          ) : (
            <p>Your local search history will appear here.</p>
          )}
        </div>
      </section>

      {/* Google AdSense Compliant Placement */}
      <AdBanner slot="home-mid-banner" className="my-8" />

      {/* Educational Guides Section for Content Depth */}
      <section className="my-12 max-w-4xl mx-auto w-full px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="panel-label">Guides &amp; Tutorials</span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              Master Minecraft Skins
            </h2>
          </div>
          <Link
            href="/guides"
            className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
          >
            All Guides <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/guides/how-to-change-minecraft-skin"
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all group"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              Tutorial
            </span>
            <h3 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors mb-1.5">
              How to Change Skins on Java &amp; Bedrock (2026 Guide) &rarr;
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Step-by-step instructions for the official Launcher, Minecraft.net profile, and Bedrock Dressing Room.
            </p>
          </Link>

          <Link
            href="/guides/steve-vs-alex-model"
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all group"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
              Architecture
            </span>
            <h3 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors mb-1.5">
              Classic (Steve 4px) vs. Slim (Alex 3px) Models &rarr;
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Understand arm width differences, UV wrapping, and how to fix black bar arm glitches.
            </p>
          </Link>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="section-heading">
          <span className="panel-label">FAQ</span>
          <h2>Fast answers, clean downloads.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <article className="glass-card faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="glass-card about-card">
        <span className="panel-label">About</span>
        <h2>A premium utility for Minecraft creators.</h2>
        <p>SKIN GRABBER (skingrabber.bond) wraps public Minecraft profile data in a polished, privacy-friendly experience designed for players, builders, video editors, and server teams looking for fast, high-quality Minecraft skin downloads.</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-emerald-400">
          <Link href="/about" className="hover:underline">Learn more about our mission &rarr;</Link>
          <Link href="/contact" className="hover:underline">Contact our support team &rarr;</Link>
          <Link href="/privacy-policy" className="hover:underline">Read Privacy Policy &rarr;</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
