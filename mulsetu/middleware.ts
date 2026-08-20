import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const crawlerPattern =
  /googlebot|bingbot|yandex|baiduspider|duckduckbot|applebot|facebookexternalhit|facebot|twitterbot|linkedinbot|slackbot|whatsapp|telegrambot|discordbot|pinterest/i;

export function middleware(request: NextRequest) {
  const dest = request.headers.get("sec-fetch-dest");
  const site = request.headers.get("sec-fetch-site");
  const userAgent = request.headers.get("user-agent") ?? "";

  if (crawlerPattern.test(userAgent)) {
    return NextResponse.next();
  }

  if (dest === "document") {
    return new NextResponse("Not found", {
      status: 404,
      headers: { "cache-control": "no-store" },
    });
  }

  if (site === "cross-site") {
    return new NextResponse("Not found", {
      status: 404,
      headers: { "cache-control": "no-store" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/images/:path*", "/logos/:path*"],
};
