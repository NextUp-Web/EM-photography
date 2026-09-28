import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/*
 * English keeps the plain paths, French lives under /fr. A plain path is
 * served by app/[lang] as "en" without changing the address; an explicit
 * /en path is sent to its plain form so each page has one English URL.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/fr" || pathname.startsWith("/fr/")) return;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // pages only: not the framework's files, the API, or anything with an extension
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
