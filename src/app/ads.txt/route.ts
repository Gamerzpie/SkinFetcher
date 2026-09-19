import { NextResponse } from "next/server";

export async function GET() {
  const publisherId = process.env.ADSENSE_PUBLISHER_ID || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "pub-0000000000000000";
  const cleanId = publisherId.startsWith("ca-pub-") ? publisherId.replace("ca-", "") : publisherId;

  const content = `# Google AdSense ads.txt for skingrabber.bond
google.com, ${cleanId}, DIRECT, f08c47fec0942fa0
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
