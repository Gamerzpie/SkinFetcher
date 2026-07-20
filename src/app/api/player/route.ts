import { NextRequest, NextResponse } from "next/server";

type MojangProfile = {
  id: string;
  name: string;
};

type SessionProfile = {
  properties?: Array<{
    name: string;
    value: string;
  }>;
};

type TexturePayload = {
  textures?: {
    SKIN?: {
      url?: string;
      metadata?: {
        model?: "slim";
      };
    };
  };
};

function formatUuid(uuid: string) {
  return uuid.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5");
}

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username")?.trim();

  if (!username || !/^[A-Za-z0-9_]{1,16}$/.test(username)) {
    return NextResponse.json({ message: "Invalid username" }, { status: 400 });
  }

  const profileResponse = await fetch(
    `https://api.mojang.com/users/profiles/minecraft/${encodeURIComponent(username)}`,
    { next: { revalidate: 60 } },
  );

  if (!profileResponse.ok) {
    return NextResponse.json({ message: "Player not found" }, { status: 404 });
  }

  const profile = (await profileResponse.json()) as MojangProfile;
  const sessionResponse = await fetch(
    `https://sessionserver.mojang.com/session/minecraft/profile/${profile.id}`,
    { next: { revalidate: 60 } },
  );

  if (!sessionResponse.ok) {
    return NextResponse.json({ message: "Skin profile unavailable" }, { status: 404 });
  }

  const session = (await sessionResponse.json()) as SessionProfile;
  const textureValue = session.properties?.find((property) => property.name === "textures")?.value;

  if (!textureValue) {
    return NextResponse.json({ message: "Skin texture unavailable" }, { status: 404 });
  }

  const textures = JSON.parse(Buffer.from(textureValue, "base64").toString("utf8")) as TexturePayload;
  const skinUrl = textures.textures?.SKIN?.url?.replace(
    "http://textures.minecraft.net",
    "https://textures.minecraft.net",
  );

  if (!skinUrl) {
    return NextResponse.json({ message: "Skin texture unavailable" }, { status: 404 });
  }

  const uuid = formatUuid(profile.id);

  return NextResponse.json({
    username: profile.name,
    uuid,
    skinUrl,
    skinType: textures.textures?.SKIN?.metadata?.model === "slim" ? "Slim/Alex" : "Classic/Steve",
    previewUrl: `https://mc-heads.net/body/${encodeURIComponent(profile.name)}/420`,
  });
}
