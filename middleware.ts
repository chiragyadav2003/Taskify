import { authMiddleware } from "@clerk/nextjs";


//NOTE - making marketing page as public route i.e, unauthenticated users can also visit
export default authMiddleware({
    publicRoutes: ["/"]
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};