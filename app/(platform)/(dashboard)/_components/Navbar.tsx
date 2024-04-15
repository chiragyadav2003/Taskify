import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 w-full px-4 h-14 border-b shadow-sm bg-white flex items-center ">
            {/* TODO = mobile sidebar */}
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button variant={"primary"} size={"sm"} className="rounded-sm hidden md:block h-auto px-2 py-1.5">
                    Create
                </Button>
                <Button variant={"primary"} size={"sm"} className=" block md:hidden rounded-sm ">
                    <Plus className=" size-4 " />
                </Button>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl={"/organization/:id"}
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectOrganizationUrl={"/organization/:id"}
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        }
                    }}
                />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: {
                                height: 30,
                                width: 30
                            }
                        }
                    }}
                />
            </div>
        </nav>
    )
}