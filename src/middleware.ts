import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only protect /studio routes
  if (request.nextUrl.pathname.startsWith("/studio")) {
    const authHeader = request.headers.get("authorization");

    // Get credentials from environment variables
    const STUDIO_USERNAME = process.env.STUDIO_USERNAME || "admin";
    const STUDIO_PASSWORD =
      process.env.STUDIO_PASSWORD || "change-this-password";

    // Check if authorization header exists
    if (!authHeader) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Sanity Studio"',
        },
      });
    }

    // Verify credentials
    const auth = authHeader.split(" ")[1];
    const [username, password] = Buffer.from(auth, "base64")
      .toString()
      .split(":");

    const expectedAuth = Buffer.from(
      `${STUDIO_USERNAME}:${STUDIO_PASSWORD}`,
    ).toString("base64");

    if (authHeader !== `Basic ${expectedAuth}`) {
      return new NextResponse("Invalid credentials", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Sanity Studio"',
        },
      });
    }
  }

  return NextResponse.next();
}

// Configure which routes use this middleware
export const config = {
  matcher: "/studio/:path*",
};
