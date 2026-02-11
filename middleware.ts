
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const path = req.nextUrl.pathname;

        // Admin Role Check
        if (path.startsWith("/admin") && token?.role !== "admin") {
            return NextResponse.redirect(new URL("/login?error=Unauthorized", req.url));
        }

        // Teacher Role Check
        if (path.startsWith("/teacher") && token?.role !== "teacher" && token?.role !== "admin") {
            return NextResponse.redirect(new URL("/login?error=Unauthorized", req.url));
        }

        // Student Role Check
        if (path.startsWith("/student") && token?.role !== "student" && token?.role !== "admin") {
            return NextResponse.redirect(new URL("/login?error=Unauthorized", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ["/admin/:path*", "/teacher/:path*", "/student/:path*"],
};
