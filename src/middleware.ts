import { NextResponse } from "next/server"
import { decrypt } from "@/lib/session"

const publicRoutes = ["/login", "/sign-up", "/"]

// Middleware logic
export async function middleware(request) {
  const { pathname } = request.nextUrl

  const isStatic =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/favicon.ico")

  const isPublic = publicRoutes.includes(pathname)

  if (isPublic || isStatic) {
    return NextResponse.next()
  }

  const token = request.cookies.get("session")?.value
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    const decoded = await decrypt(token)
    const response = NextResponse.next()
    response.headers.set("X-User-Id", decoded?.userId as string)
    return response
  } catch (error) {
    console.error("Invalid token:", error.message)
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

// ✅ Safe and compatible pattern without capturing groups
export const config = {
  matcher: [
    "/((?!_next/).*)",
    "/((?!images/).*)",
    "/((?!fonts/).*)",
    "/((?!favicon.ico).*)",
  ],
}
