import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  let verify = req.cookies.get("userId");
  console.log(url, "this is url");
  // if (!verify) {
  //   if (
  //     req.nextUrl.pathname.startsWith("/all-feeds-page") ||
  //     req.nextUrl.pathname.startsWith("/groups-page") ||
  //     req.nextUrl.pathname.startsWith("/about-us-page") ||
  //     req.nextUrl.pathname.startsWith("/connections") ||
  //     req.nextUrl.pathname.startsWith("/connections-page") ||
  //     req.nextUrl.pathname.startsWith("/contacts-page") ||
  //     req.nextUrl.pathname.startsWith("/create-group") ||
  //     req.nextUrl.pathname.startsWith("/draft-page") ||
  //     req.nextUrl.pathname.startsWith("/edit-group") ||
  //     req.nextUrl.pathname.startsWith("/feed") ||
  //     req.nextUrl.pathname.startsWith("/followers-page") ||
  //     req.nextUrl.pathname.startsWith("/group-page") ||
  //     req.nextUrl.pathname.startsWith("/groups-page") ||
  //     req.nextUrl.pathname.startsWith("/manage-group") ||
  //     req.nextUrl.pathname.startsWith("/message-page") ||
  //     req.nextUrl.pathname.startsWith("/my-wall") ||
  //     req.nextUrl.pathname.startsWith("/profile") ||
  //     req.nextUrl.pathname.startsWith("/profile-details") ||
  //     req.nextUrl.pathname.startsWith("/recommended-groups") ||
  //     req.nextUrl.pathname.startsWith("/setting-page") ||
  //     req.nextUrl.pathname.startsWith("/suggestion-page") ||
  //     req.nextUrl.pathname.startsWith("/wallet-page")
  //   ) {
  //     return NextResponse.rewrite(new URL("/login", req.url).toString());
  //   }
  // } else {
  //   if (url.pathname === "/") {
  //     url.pathname = "/all-feeds-page";
  //     return NextResponse.redirect(url.toString());
  //   }
  // }
}
