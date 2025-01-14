import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Redirect to login if not logged in
  if (!token) {
    const loginUrl = new URL("/api/auth/signin", req.url);
    loginUrl.searchParams.set("/callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  const { pathname } = req.nextUrl;
  const role = token.role;
  console.log("Role:", role);

  // Role-based access control
  if (pathname.startsWith("/skillhive/COMPANY") && role !== "company") {
    return new Response("Forbidden", { status: 403 });
  }

  if (pathname.startsWith("/skillhive/COLLEGE") && role !== "college") {
    return new Response("Forbidden", { status: 403 });
  }

  if (pathname.startsWith("/skillhive/STUDENT") && role !== "student") {
    return new Response("Forbidden", { status: 403 });
  }

  // Allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/skillhive/:path+"],
};
