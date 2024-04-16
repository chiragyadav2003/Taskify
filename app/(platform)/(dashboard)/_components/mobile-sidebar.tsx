"use client"

import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { useMobileSidebar } from "@/hooks/useMobileSidebar"
import { Sidebar } from "./sidebar"

function MobileSidebar() {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    const isOpen = useMobileSidebar((state) => state.isOpen)
    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)

    //to handle hydration error
    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        onClose()
    }, [onClose, pathname])

    if (!isMounted) {
        return null
    }


    return (
        <>
            <Button
                variant={"ghost"}
                size={"sm"}
                onClick={onOpen}
                className=" block md:hidden"
            >
                <Menu className=" size-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose} >
                <SheetContent
                    className="p-2 pt-10"
                    side={"left"}
                >
                    <Sidebar storageKey={"t-mobileSidebar-state"} />
                </SheetContent>
            </Sheet>

        </>
    )
}

export { MobileSidebar }