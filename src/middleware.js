import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  let verify = req.cookies.get("userId");
  console.log(url, "this is url");

  if (!verify) {
    if (req.nextUrl.pathname.startsWith("/all-feeds-page")) {
      return NextResponse.rewrite(new URL("/login", req.url).toString());
    }
  } else {
    if (url.pathname === "/") {
      url.pathname = "/all-feeds-page";
      return NextResponse.rewrite(url.toString());
    }
  }
}
