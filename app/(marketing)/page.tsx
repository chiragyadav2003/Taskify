import Link from "next/link";
import { Medal } from "lucide-react"
import LocalFont from "next/font/local"
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = LocalFont({
    src: "../../public/fonts/font.woff2"
})

const textFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})


const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col"
                , headingFont.className
            )}>
                <div className="flex mb-4 p-4 shadow-lg bg-amber-100 text-amber-700 rounded-full uppercase items-center justify-center">
                    <Medal className="size-6 mr-2" />
                    No 1 task management
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Taskify helps team move
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    work forward.
                </div>
            </div>
            <div className={cn(
                "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                "textFont.className"
            )}>
                Collaborate, manage projects, and reach new productivity peaks. From high rise to the home office, the way your team works is unique - accomplish it all with Taskify.
            </div>
            <Button className="mt-6" size={"lg"} asChild>
                <Link href={"/sign-up"}>
                    Get Taskify for free</Link>
            </Button>
        </div>
    )
}

export default MarketingPage;