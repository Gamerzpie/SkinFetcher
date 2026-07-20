"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import type { SkinViewer as SkinViewerInstance } from "skinview3d";
import {
  ArrowDownToLine,
  Check,
  Copy,
  Search,
  Sparkles,
  Share2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type PlayerResult = {
  username: string;
  uuid: string;
  skinUrl: string;
  skinType: "Classic/Steve" | "Slim/Alex";
  previewUrl: string;
};

type FetchState = "idle" | "loading" | "success" | "error";

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
    question: "How does SkinFetcher work?",
    answer:
      "SkinFetcher resolves a Minecraft username through Mojang, reads the player's active texture profile, and prepares instant skin and preview downloads.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. SkinFetcher requires no login, no subscription, and no account connection.",
  },
  {
    question: "Does it work for Java and Bedrock?",
    answer:
      "It works with Java Edition usernames exposed by Mojang's profile services. Bedrock gamertags are not always available through the same public API.",
  },
  {
    question: "Can I download HD skins?",
    answer:
      "You can download the original PNG skin and a high-resolution rendered preview for sharing or reference.",
  },
];

function RotatableSkinViewer({
  skinUrl,
  skinType,
  username,
}: {
  skinUrl: string;
  skinType: PlayerResult["skinType"];
  username: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let viewer: SkinViewerInstance | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let mounted = true;

    async function setupViewer() {
      const { IdleAnimation, SkinViewer } = await import("skinview3d");

      if (!canvasRef.current || !wrapperRef.current || !mounted) return;

      const bounds = wrapperRef.current.getBoundingClientRect();
      viewer = new SkinViewer({
        canvas: canvasRef.current,
        width: Math.max(280, bounds.width),
        height: Math.max(330, bounds.height),
        skin: skinUrl,
        model: skinType === "Slim/Alex" ? "slim" : "default",
        animation: new IdleAnimation(),
        enableControls: true,
        zoom: 0.86,
        fov: 48,
      });

      viewer.controls.enablePan = false;
      viewer.controls.enableZoom = false;
      viewer.controls.enableRotate = true;
      viewer.playerWrapper.rotation.y = -0.35;

      resizeObserver = new ResizeObserver(([entry]) => {
        if (!entry || !viewer || viewer.disposed) return;
        viewer.setSize(Math.max(280, entry.contentRect.width), Math.max(330, entry.contentRect.height));
      });
      resizeObserver.observe(wrapperRef.current);
    }

    setupViewer();

    return () => {
      mounted = false;
      resizeObserver?.disconnect();
      viewer?.dispose();
    };
  }, [skinType, skinUrl]);

  return (
    <div className="skin-viewer-canvas-wrap" ref={wrapperRef}>
      <canvas ref={canvasRef} aria-label={`${username} interactive 3D Minecraft skin`} />
    </div>
  );
}

export default function Home() {
  const [username, setUsername] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [state, setState] = useState<FetchState>("idle");
  const [player, setPlayer] = useState<PlayerResult | null>(null);
  const [recent, setRecent] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

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
        window.localStorage.setItem("skinfetch-recent", JSON.stringify(nextRecent));
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
    const saved = window.localStorage.getItem("skinfetch-recent");
    if (saved) {
      setRecent(JSON.parse(saved) as string[]);
    }

    // Deep link detection
    const params = new URLSearchParams(window.location.search);
    const urlUser = params.get("username") || params.get("user") || params.get("u");
    if (urlUser) {
      const cleanUser = urlUser.trim();
      setUsername(cleanUser);
      fetchPlayer(cleanUser);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetchPlayer(normalizedUsername);
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

      <nav className="glass-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="SkinFetcher home">
          <span className="brand-mark">SF</span>
          SKIN FETCHER
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#faq">FAQ</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="eyebrow"><Sparkles size={16} /> Instant skin retrieval</div>
        <h1>SKIN FETCHER</h1>
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
            {state === "loading" ? "Fetching" : "Search"}
          </button>
        </form>
        <span id="username-help" className="sr-only">Use a Java Edition Minecraft username.</span>
      </section>

      <section className="result-section" aria-live="polite">
        {state === "idle" && (
          <div className="glass-card intro-card floating-card">
            <span>Ready when you are</span>
            <h2>Type a username to reveal the current Minecraft skin.</h2>
            <p>SkinFetcher keeps the flow fast, private, and effortless with no login required.</p>
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
                <a className="action-button primary-action" href={player.skinUrl} download={`${player.username}-skin.png`} target="_blank" rel="noreferrer">
                  <ArrowDownToLine size={18} /> PNG Skin
                </a>
                <a className="action-button" href={player.previewUrl} download={`${player.username}-preview.png`} target="_blank" rel="noreferrer">
                  <ArrowDownToLine size={18} /> HD Preview
                </a>
                <button className="action-button" onClick={copyUsername} type="button">
                  {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? "Copied" : "Copy username"}
                </button>
                <button className="action-button" onClick={shareProfile} type="button">
                  {shareCopied ? <Check size={18} /> : <Share2 size={18} />} {shareCopied ? "Copied link!" : "Share skin"}
                </button>
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

      <section className="content-grid" aria-label="SkinFetcher discovery panels">
        <div className="glass-card mini-panel">
          <span className="panel-label">Trending searches</span>
          <div className="chip-list">
            {trendingNames.map((name) => (
              <button key={name} type="button" onClick={() => { setUsername(name); fetchPlayer(name); }}>{name}</button>
            ))}
          </div>
        </div>
        <div className="glass-card mini-panel">
          <span className="panel-label">Recently searched</span>
          {recent.length > 0 ? (
            <div className="chip-list">
              {recent.map((name) => (
                <button key={name} type="button" onClick={() => { setUsername(name); fetchPlayer(name); }}>{name}</button>
              ))}
            </div>
          ) : (
            <p>Your local search history will appear here.</p>
          )}
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
        <p>SKIN FETCHER wraps public Minecraft profile data in a polished, privacy-friendly experience designed for players, builders, editors, and server teams.</p>
      </section>

      <footer className="glass-footer">
        <strong>SKIN FETCHER</strong>
        <span>Copyright 2026 SkinFetcher. All rights reserved.</span>
        <div className="flex gap-2">
          <button 
            onClick={() => setPrivacyOpen(true)} 
            className="px-4 py-2 text-xs rounded-full text-[var(--muted)] hover:text-white hover:bg-[rgba(255,255,255,0.08)] transition-all cursor-pointer"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => setTermsOpen(true)} 
            className="px-4 py-2 text-xs rounded-full text-[var(--muted)] hover:text-white hover:bg-[rgba(255,255,255,0.08)] transition-all cursor-pointer"
          >
            Terms of Service
          </button>
        </div>
      </footer>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-xl border-white/10 bg-[#0f1115]/95 backdrop-blur-xl text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-display font-bold tracking-tight text-white">Privacy Policy</DialogTitle>
            <DialogDescription className="text-xs text-muted">
              Last updated: July 20, 2026
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[320px] pr-4 mt-2">
            <div className="space-y-4 text-sm text-neutral-300 font-sans leading-relaxed">
              <section>
                <h4 className="font-semibold text-white mb-1">1. Commitment to Privacy</h4>
                <p>
                  At SkinFetcher, we prioritize your privacy above all else. We do not require account registration, email verification, or any form of login. Your search queries and interactions with the service are handled securely.
                </p>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-1">2. Mojang API Integration</h4>
                <p>
                  To fetch Minecraft player skins and metadata, SkinFetcher routes query requests directly to the public Mojang API endpoints. Any information requested (such as skin textures or UUIDs) is public player data maintained by Mojang Studios. We do not collect or store Minecraft account passwords, email addresses, or proprietary tokens.
                </p>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-1">3. Local State Storage</h4>
                <p>
                  We utilize your browser&apos;s standard client-side storage (<code className="text-xs bg-white/5 px-1 py-0.5 rounded text-neutral-200">localStorage</code>) to temporarily save your recent search queries on your physical device. This allows you to quickly re-access skins you have previously searched. This data remains on your local device and is never uploaded, transferred, or sold to our servers or any third-party databases.
                </p>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-1">4. Cookies and Analytical Tracking</h4>
                <p>
                  SkinFetcher does not employ tracking cookies, tracking pixels, or intrusive analytics suites to create behavioral profiles. We believe in providing a direct, fast utility that serves you without tracking you.
                </p>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-1">5. Contact and Inquiries</h4>
                <p>
                  If you have questions regarding this Privacy Policy or how your local state is managed, please contact our support team through our official GitHub repository.
                </p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-xl border-white/10 bg-[#0f1115]/95 backdrop-blur-xl text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-display font-bold tracking-tight text-white">Terms of Service</DialogTitle>
            <DialogDescription className="text-xs text-muted">
              Last updated: July 20, 2026
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[320px] pr-4 mt-2">
            <div className="space-y-4 text-sm text-neutral-300 font-sans leading-relaxed">
              <section>
                <h4 className="font-semibold text-white mb-1">1. Acceptance of Terms</h4>
                <p>
                  By accessing or utilizing the SkinFetcher application, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the service.
                </p>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-1">2. Appropriate Usage</h4>
                <p>
                  You agree to use SkinFetcher responsibly and solely for fetching publicly accessible Minecraft skins. You are strictly prohibited from attempting to bypass Mojang API rate limits, flood our server endpoints, or otherwise disrupt the website&apos;s infrastructure.
                </p>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-1">3. Minecraft Assets and Intellectual Property</h4>
                <p>
                  All Minecraft skin designs, username databases, and official textures fetched by this tool are intellectual property of their respective creators and Mojang Studios / Microsoft. SkinFetcher acts strictly as a visual interface and downloader utility for public assets, and does not claim any ownership, rights, or copyright over any Minecraft asset retrieved.
                </p>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-1">4. Disclaimers and Limitation of Liability</h4>
                <p>
                  SkinFetcher is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We provide no guarantees regarding Mojang API availability, uptime, retrieval speed, or continuous operational status. We are not liable for any disruptions or formatting changes initiated by third-party APIs.
                </p>
              </section>
              <section>
                <h4 className="font-semibold text-white mb-1">5. Modifications</h4>
                <p>
                  We reserve the right to revise or update these Terms of Service at our discretion. Your continued use of the platform after any changes constitute acceptance of those modified terms.
                </p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </main>
  );
}
