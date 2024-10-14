import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const loggedIn = request?.cookies?.get("isLoggedin");
  const path = request?.nextUrl?.pathname;

  if (loggedIn) {
    if (path === "/login" || path === "/photos")
      return NextResponse.redirect(new URL("/", request?.url));
  } else {
    if (path !== "/login")
      return NextResponse.redirect(new URL("/login", request?.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/dashboard", "/photos"],
};
