import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  let verify = req.cookies.get("userId");
  console.log(url, "this is url");
  if (!verify) {
    if (
      req.nextUrl.pathname.startsWith("/all-feeds-page") ||
      req.nextUrl.pathname.startsWith("/groups-page") ||
      req.nextUrl.pathname.startsWith("/about-us-page") ||
      req.nextUrl.pathname.startsWith("/connections") ||
      req.nextUrl.pathname.startsWith("/connections-page") ||
      req.nextUrl.pathname.startsWith("/contacts-page") ||
      req.nextUrl.pathname.startsWith("/create-group") ||
      req.nextUrl.pathname.startsWith("/draft-page") ||
      req.nextUrl.pathname.startsWith("/edit-group") ||
      req.nextUrl.pathname.startsWith("/feed") ||
      req.nextUrl.pathname.startsWith("/followers-page") ||
      req.nextUrl.pathname.startsWith("/group-page") ||
      req.nextUrl.pathname.startsWith("/groups-page") ||
      req.nextUrl.pathname.startsWith("/manage-group") ||
      req.nextUrl.pathname.startsWith("/message-page") ||
      req.nextUrl.pathname.startsWith("/my-wall") ||
      req.nextUrl.pathname.startsWith("/profile") ||
      req.nextUrl.pathname.startsWith("/profile-details") ||
      req.nextUrl.pathname.startsWith("/recommended-groups") ||
      req.nextUrl.pathname.startsWith("/setting-page") ||
      req.nextUrl.pathname.startsWith("/suggestion-page") ||
      req.nextUrl.pathname.startsWith("/wallet-page")
    ) {
      return NextResponse.rewrite(new URL("/login", req.url).toString());
    }
  } else {
    if (url.pathname === "/") {
      url.pathname = "/all-feeds-page";
      return NextResponse.redirect(url.toString());
    }
  }
}

// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const url = req.nextUrl.clone();
//   const verify = req.cookies.get("userId");

//   // If user is not logged in and trying to access a page other than allowed pages, redirect to /login
//   if (
//     !verify &&
//     (url.pathname.startsWith("/login") ||
//       url.pathname.startsWith("/register") ||
//       url.pathname.startsWith("/about-us-page") ||
//       url.pathname.startsWith("/all-feeds-page") ||
//       url.pathname.startsWith("/connections") ||
//       url.pathname.startsWith("/connections-page") ||
//       url.pathname.startsWith("/contacts-page") ||
//       url.pathname.startsWith("/create-group") ||
//       url.pathname.startsWith("/draft-page") ||
//       url.pathname.startsWith("/edit-group") ||
//       url.pathname.startsWith("/feed") ||
//       url.pathname.startsWith("/followers-page") ||
//       url.pathname.startsWith("/forgot-password"))
//   ) {
//     return NextResponse.rewrite(new URL("/login", req.url).toString());
//   }

//   // If user is logged in and trying to access the homepage ("/"), redirect to /all-feeds-page
//   if (verify && url.pathname === "/") {
//     url.pathname = "/all-feeds-page";
//     return NextResponse.rewrite(url.toString());
//   }
// }

// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const url = req.nextUrl.clone();
//   const userId = req.cookies.get("userId");

// If user is not logged in and trying to access a page other than /login, redirect to /login
// if (!userId && !url.pathname.startsWith("/login")) {
//   return NextResponse.rewrite(new URL("/login", req.url).toString());
// }

// // If user is logged in and trying to access the homepage ("/"), redirect to /all-feeds-page
// if (userId && url.pathname === "/") {
//   url.pathname = "/all-feeds-page";
//   return NextResponse.rewrite(url.toString());
// }
// }

// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const url = req.nextUrl.clone();
//   const userId = req.cookies.get("userId");

//   // If user is not logged in and trying to access a page other than /login or /register, redirect to /login
//   if (
//     !userId &&
//     !url.pathname.startsWith("/login") &&
//     !url.pathname.startsWith("/register")
//   ) {
//     return NextResponse.rewrite(new URL("/login", req.url).toString());
//   }

//   // If user is logged in and trying to access the homepage ("/"), redirect to /all-feeds-page
//   if (userId && url.pathname === "/") {
//     url.pathname = "/all-feeds-page";
//     return NextResponse.rewrite(url.toString());
//   }
// }
