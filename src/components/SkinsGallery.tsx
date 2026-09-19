"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowDownToLine,
  Check,
  Copy,
  ExternalLink,
  Search,
  Sparkles,
  Layers,
  Filter,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface CuratedSkin {
  username: string;
  displayName: string;
  category: "Creators" | "Legends" | "PvP" | "Aesthetic";
  model: "Classic" | "Slim";
  tags: string[];
  description: string;
}

const curatedSkins: CuratedSkin[] = [
  {
    username: "Dream",
    displayName: "Dream",
    category: "Creators",
    model: "Classic",
    tags: ["Speedrunner", "Smiley", "YouTuber", "Manhunt"],
    description: "Iconic neon green figure with the minimalist smiley face mask.",
  },
  {
    username: "Technoblade",
    displayName: "Technoblade",
    category: "Creators",
    model: "Classic",
    tags: ["Legend", "Pig King", "Crown", "PvP", "Blood God"],
    description: "The royal pig warrior wearing a golden crown and regal red cloak.",
  },
  {
    username: "Notch",
    displayName: "Notch",
    category: "Legends",
    model: "Classic",
    tags: ["Creator", "Founder", "Classic", "Mojang"],
    description: "The original Minecraft creator and founding architect of the game.",
  },
  {
    username: "TommyInnit",
    displayName: "TommyInnit",
    category: "Creators",
    model: "Classic",
    tags: ["Streamer", "Red & White", "YouTuber"],
    description: "Signature red and white raglan shirt with classic blonde hair.",
  },
  {
    username: "GeorgeNotFound",
    displayName: "GeorgeNotFound",
    category: "Creators",
    model: "Classic",
    tags: ["Goggles", "Streamer", "Blue", "YouTuber"],
    description: "Blue shirt with retro white clout goggles and stylish aesthetic.",
  },
  {
    username: "Sapnap",
    displayName: "Sapnap",
    category: "Creators",
    model: "Classic",
    tags: ["Fire", "Bandana", "PvP", "YouTuber"],
    description: "White flame t-shirt with black sleeves and iconic checkered headband.",
  },
  {
    username: "DanTDM",
    displayName: "DanTDM",
    category: "Creators",
    model: "Classic",
    tags: ["Lab", "Blue Hair", "OG YouTuber", "Diamond"],
    description: "Legendary diamond minecart doctor with goggles and blue styled hair.",
  },
  {
    username: "CaptainSparklez",
    displayName: "CaptainSparklez",
    category: "Creators",
    model: "Classic",
    tags: ["Revenge", "Music", "Classic", "YouTuber"],
    description: "Red and black striped shirt from the golden era of Minecraft music videos.",
  },
  {
    username: "MumboJumbo",
    displayName: "Mumbo Jumbo",
    category: "Creators",
    model: "Classic",
    tags: ["Hermitcraft", "Redstone", "Suit", "Mustache"],
    description: "Dapper black tuxedo and the world's most distinguished mustache.",
  },
  {
    username: "Grian",
    displayName: "Grian",
    category: "Creators",
    model: "Classic",
    tags: ["Hermitcraft", "Builder", "Red Sweater"],
    description: "Cozy red waffle knit sweater and messy hair - master builder look.",
  },
  {
    username: "Aphmau",
    displayName: "Aphmau",
    category: "Creators",
    model: "Slim",
    tags: ["Roleplay", "Streamer", "Purple", "YouTuber"],
    description: "Purple casual hoodie with dark violet highlights and cat ears.",
  },
  {
    username: "LDShadowLady",
    displayName: "LDShadowLady",
    category: "Creators",
    model: "Slim",
    tags: ["Pink", "Pastel", "Builder", "YouTuber"],
    description: "Iconic pastel pink fairy tale aesthetic with matching turquoise eyes.",
  },
  {
    username: "Skeppy",
    displayName: "Skeppy",
    category: "PvP",
    model: "Classic",
    tags: ["Diamond", "PvP", "Trolling", "YouTuber"],
    description: "Diamond block entity wearing a sleek black collared hoodie.",
  },
  {
    username: "BadBoyHalo",
    displayName: "BadBoyHalo",
    category: "PvP",
    model: "Classic",
    tags: ["Demon", "Hoodie", "Munchkin", "Dark"],
    description: "Shadowy entity with glowing red eyes framed inside an assassin cowl.",
  },
  {
    username: "ClownPierce",
    displayName: "ClownPierce",
    category: "PvP",
    model: "Classic",
    tags: ["PvP King", "Lifesteal", "Mask", "Assassin"],
    description: "Piercing monochrome jester mask with deadly crimson accents.",
  },
  {
    username: "Fruitberries",
    displayName: "Fruitberries",
    category: "PvP",
    model: "Classic",
    tags: ["Movement", "MCC", "Parkour", "Casual"],
    description: "Minimalist teal smiley visage renowned for godlike parkour.",
  },
  {
    username: "Ranboo",
    displayName: "Ranboo",
    category: "Aesthetic",
    model: "Classic",
    tags: ["Enderman", "Half-Half", "Suit", "Crown"],
    description: "Split black-and-white enderman humanoid suited up with regal crown.",
  },
  {
    username: "Tubbo",
    displayName: "Tubbo",
    category: "Aesthetic",
    model: "Classic",
    tags: ["Bees", "Green Shirt", "Streamer"],
    description: "Green striped t-shirt and friendly smile, beloved bee enthusiast.",
  },
  {
    username: "Philza",
    displayName: "Philza",
    category: "Legends",
    model: "Classic",
    tags: ["Hardcore", "Crow Father", "Bucket Hat", "Bleach"],
    description: "Hardcore Minecraft god wearing the iconic green and white bucket hat.",
  },
  {
    username: "WilburSoot",
    displayName: "WilburSoot",
    category: "Aesthetic",
    model: "Classic",
    tags: ["Beanie", "Sweater", "Musician", "Story"],
    description: "Yellow sweater, deep red beanie, and round spectacles aesthetic.",
  },
  {
    username: "stampylonghead",
    displayName: "Stampy Cat",
    category: "Legends",
    model: "Classic",
    tags: ["Nostalgia", "Cat", "Lovely World", "Classic"],
    description: "Orange ginger cat with white boots and gloves from the Lovely World.",
  },
  {
    username: "Quackity",
    displayName: "Quackity",
    category: "Aesthetic",
    model: "Classic",
    tags: ["Duck", "Beanie", "Casino", "Suit"],
    description: "Navy blue beanie with gold suspenders and slick winged style.",
  },
  {
    username: "Jeb_",
    displayName: "Jens Bergensten",
    category: "Legends",
    model: "Classic",
    tags: ["Lead Developer", "Mojang", "Rainbow Sheep"],
    description: "Chief creative officer of Minecraft with flowing strawberry blonde locks.",
  },
  {
    username: "Dinnerbone",
    displayName: "Nathan Adams",
    category: "Legends",
    model: "Classic",
    tags: ["Mojang", "Upside Down", "Easter Egg"],
    description: "Mojang technical director known for flipping Minecraft nametags upside down.",
  },
];

const categories = ["All", "Creators", "Legends", "PvP", "Aesthetic"] as const;

export function SkinsGallery() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedModel, setSelectedModel] = useState<string>("All");
  const [copiedUser, setCopiedUser] = useState<string | null>(null);

  const filteredSkins = useMemo(() => {
    const q = search.toLowerCase().trim();
    return curatedSkins.filter((skin) => {
      const matchesSearch =
        !q ||
        skin.username.toLowerCase().includes(q) ||
        skin.displayName.toLowerCase().includes(q) ||
        skin.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        skin.description.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "All" || skin.category === selectedCategory;

      const matchesModel =
        selectedModel === "All" || skin.model === selectedModel;

      return matchesSearch && matchesCategory && matchesModel;
    });
  }, [search, selectedCategory, selectedModel]);

  async function copyUsername(name: string) {
    await navigator.clipboard.writeText(name);
    setCopiedUser(name);
    setTimeout(() => {
      setCopiedUser(null);
    }, 1600);
  }

  return (
    <main className="skinfetch-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <Navbar />

      <header className="hero-section pb-8">
        <div className="eyebrow">
          <Sparkles size={16} /> Community skin gallery &bull; skingrabber.bond
        </div>
        <h1>EXPLORE SKINS</h1>
        <p>
          Browse iconic Minecraft creators, legendary community skins, competitive
          PvP outfits, and aesthetic styles on skingrabber.bond. Download instantly or inspect in 3D.
        </p>

        {/* Search and Filters */}
        <div className="w-full max-w-2xl px-4 mt-2">
          <div className="search-glass mb-4">
            <Search className="search-icon" size={22} aria-hidden="true" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by creator name, tag, or style..."
              aria-label="Search skins"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-[var(--muted)] mr-1 flex items-center gap-1">
                <Filter size={12} /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3 py-1 text-xs rounded-full transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs text-[var(--muted)] mr-1 flex items-center gap-1">
                <Layers size={12} /> Model:
              </span>
              {["All", "Classic", "Slim"].map((mod) => (
                <button
                  key={mod}
                  onClick={() => setSelectedModel(mod)}
                  type="button"
                  className={`px-2.5 py-1 text-xs rounded-full transition-all cursor-pointer ${
                    selectedModel === mod
                      ? "bg-white/15 text-white border border-white/25"
                      : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                >
                  {mod}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Grid of skins */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <span className="panel-label">
            Showing {filteredSkins.length} skin{filteredSkins.length === 1 ? "" : "s"}
          </span>
          <Link
            href="/skindownloader"
            className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
          >
            Looking for a specific player? Use Downloader &rarr;
          </Link>
        </div>

        {filteredSkins.length === 0 ? (
          <div className="glass-card text-center py-16 px-4">
            <p className="text-lg font-medium text-neutral-300">
              No skins matching &ldquo;{search}&rdquo;
            </p>
            <p className="text-sm text-neutral-400 mt-1 mb-4">
              Try searching another tag, or grab any skin by username using our downloader tool.
            </p>
            <Link
              href={`/skindownloader?username=${encodeURIComponent(search)}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-lg"
            >
              <Search size={16} /> Look up &ldquo;{search}&rdquo; in Downloader
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredSkins.map((skin) => {
              const bodyRenderUrl = `https://mc-heads.net/body/${encodeURIComponent(skin.username)}/280`;
              const skinPngDownloadUrl = `https://mc-heads.net/download/${encodeURIComponent(skin.username)}`;

              return (
                <div
                  key={skin.username}
                  className="glass-card flex flex-col justify-between p-4 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-emerald-400">
                        {skin.category}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        {skin.model}
                      </span>
                    </div>

                    {/* Skin Preview Container */}
                    <div className="relative aspect-[3/4] flex items-center justify-center rounded-xl bg-black/30 border border-white/5 overflow-hidden my-3">
                      <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img
                        src={bodyRenderUrl}
                        alt={`${skin.displayName} Minecraft skin render`}
                        className="h-full max-h-[190px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Info */}
                    <h3 className="font-display font-bold text-lg text-white mb-0.5 flex items-center justify-between">
                      <span>{skin.displayName}</span>
                      <span className="text-xs font-mono text-neutral-400 font-normal">
                        @{skin.username}
                      </span>
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                      {skin.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {skin.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-neutral-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={skinPngDownloadUrl}
                        download={`${skin.username}-skin.png`}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 transition-colors shadow-md"
                        target="_blank"
                        rel="noreferrer"
                        title="Download raw 64x64 PNG Skin"
                      >
                        <ArrowDownToLine size={14} /> PNG
                      </a>

                      <Link
                        href={`/home?username=${encodeURIComponent(skin.username)}`}
                        className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                        title="View and rotate in 3D on Home"
                      >
                        <ExternalLink size={14} /> 3D View
                      </Link>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => copyUsername(skin.username)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-[11px] rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedUser === skin.username ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy username</span>
                          </>
                        )}
                      </button>

                      <Link
                        href={`/skindownloader?username=${encodeURIComponent(skin.username)}`}
                        className="flex items-center justify-center px-2 py-1.5 text-[11px] rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
                        title="Open full downloader options"
                      >
                        Downloader
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Request any skin CTA banner */}
      <section className="max-w-4xl mx-auto px-4 my-12">
        <div className="glass-card p-8 rounded-3xl text-center relative overflow-hidden border border-emerald-500/20">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <span className="panel-label">Looking for another skin?</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 mb-3">
            Grab any player&apos;s skin in real-time
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-6">
            Skin Grabber (skingrabber.bond) supports every active Java Edition Minecraft username. Enter any gamertag
            to fetch raw skin textures, isometric 3D renders, and head avatars in seconds.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/skindownloader"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-lg cursor-pointer"
            >
              <ArrowDownToLine size={16} /> Open Skin Downloader
            </Link>
            <Link
              href="/home"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-all cursor-pointer"
            >
              <Sparkles size={16} /> Interactive 3D Viewer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
