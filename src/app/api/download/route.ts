import { NextRequest, NextResponse } from "next/server";

const ALLOWED_HOSTS = [
  "textures.minecraft.net",
  "mc-heads.net",
  "crafatar.com",
  "minotar.net",
];

export async function GET(request: NextRequest) {
  const urlParam = request.nextUrl.searchParams.get("url")?.trim();
  const rawFilename = request.nextUrl.searchParams.get("filename")?.trim() || "minecraft-skin.png";

  if (!urlParam) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  try {
    const targetUrl = new URL(urlParam);

    const isAllowed = ALLOWED_HOSTS.some(
      (host) => targetUrl.hostname === host || targetUrl.hostname.endsWith(`.${host}`)
    );

    if (!isAllowed) {
      return new NextResponse("Host not allowed", { status: 403 });
    }

    const imageRes = await fetch(targetUrl.toString(), {
      headers: {
        "User-Agent": "SkinGrabber/1.0",
      },
      next: { revalidate: 3600 },
    });

    if (!imageRes.ok) {
      return new NextResponse("Failed to fetch image from upstream", { status: imageRes.status });
    }

    const contentType = imageRes.headers.get("content-type") || "image/png";
    const arrayBuffer = await imageRes.arrayBuffer();

    // Sanitize filename for header
    const cleanFilename = rawFilename
      .replace(/[^a-zA-Z0-9._-]/g, "_")
      .replace(/_{2,}/g, "_");

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${cleanFilename}"`,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("Invalid request URL", { status: 400 });
  }
}
