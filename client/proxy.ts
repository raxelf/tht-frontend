import { NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  // logging api request
  if (request.url.includes("/api")) {
    console.log("API", request.method, request.url);
  }

  // Redirect to /login if "/"
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};
