import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const proxy = async (request: NextRequest) => {
  // logging api request
  if (request.url.includes("/api")) {
    console.log("API", request.method, request.url);
  }

  const { pathname } = request.nextUrl;
  const isPublicRoutes = ["/", "/login"].includes(pathname);
  const isProtectedRoutes = [
    "/dashboard",
    "/dashboard/users",
    "/dashboard/reports",
  ].includes(pathname);

  // check is logged in
  const cookieStorage = await cookies();
  const token = cookieStorage.get("token");
  const isAuthenticated = !!token;

  if (isPublicRoutes && isAuthenticated) {
    // if logged in cant access the public route
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } else if (isProtectedRoutes && !isAuthenticated) {
    // only authenticated can access this
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname === "/") {
    // Redirect to /login if "/"
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};
