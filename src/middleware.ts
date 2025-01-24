import { NextResponse } from "next/server"
import { decrypt } from "@/lib/session"

// Define paths that don't require authentication
const publicRoutes = ["/login", "/sign-up", "/"]

export async function middleware(request) {
  const { pathname } = request.nextUrl // Get the current URL

  // Skip authentication for public paths
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Get the token from cookies
  const token = request.cookies.get("session")?.value
  if (!token) {
    // If no token is found, redirect to login
    return NextResponse.redirect(new URL("/login", request.url))
  }

  try {
    // Decrypt and verify the token to get the session information
    const decoded = await decrypt(token)

    // Optionally, attach user information to the request headers for further use
    const response = NextResponse.next()
    response.headers.set("X-User-Id", decoded?.userId as string) // Example of passing user ID
    return response
  } catch (error) {
    console.error("Invalid token:", error.message)
    // Redirect to login if token verification fails
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

export const config = {
  matcher: "/((?!_next|static|favicon.ico).*)", // Apply middleware to all routes except static assets
}

// *** LEGACY CODE TO BE IMPROVED AND RE-IMPLEMENTED ***
// export default async function middleware(req: NextRequest) {
//   console.log("Middleware running")
//   // Check if the current route is protected or public
//   const path = req.nextUrl.pathname
//   const isProtectedRoute = protectedRoutes.includes(path)
//   const isPublicRoute = publicRoutes.includes(path)

//   console.log("isProtectedRoute ->", isProtectedRoute)
//   console.log("isPublicRoute ->", isPublicRoute)

//   // Decrypt the session from the cookie
//   const cookie = (await cookies()).get("session")?.value
//   const session = await decrypt(cookie)

//   console.log("session ->", session)

//   // Redirect to /login if the user is not authenticated
//   if (isProtectedRoute && !session?.userId) {
//     console.log("Redirecting to /login")
//     return NextResponse.redirect(new URL("/login", req.nextUrl))
//   }

//   // Redirect to /transmissions if the user is authenticated
//   if (
//     isPublicRoute &&
//     session?.userId &&
//     !req.nextUrl.pathname.startsWith("/transmissions")
//   ) {
//     console.log("Redirecting to /transmissions")
//     return NextResponse.redirect(new URL("/transmissions", req.nextUrl))
//   }

//   console.log("Middleware done")
//   return NextResponse.next()
// }

// // Routes Middleware should not run on
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// }
