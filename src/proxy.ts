import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANGUAGES = ["zh", "en"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if path starts with a language prefix
  if (LANGUAGES.some((lang) => pathname.startsWith(`/${lang}`))) {
    return NextResponse.next();
  }

  // Skip static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Detect language from Accept-Language header
  const acceptLang = request.headers.get("accept-language") || "";
  const preferZh = acceptLang.includes("zh");
  const lang = preferZh ? "zh" : "en";

  return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!api|_next|images|favicon).*)"],
};
