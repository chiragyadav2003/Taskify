"use client"

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Activity,
  CreditCard,
  Layout,
  Settings
} from "lucide-react"

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string
}

interface SidebarItemProps {
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (id: string) => void
}

function SidebarItem({
  isActive,
  isExpanded,
  organization,
  onExpand
}: SidebarItemProps) {
  const router = useRouter()
  const pathname = usePathname()
  const routes = [
    {
      label: "Boards",
      icon: <Layout className=" size-4 mr-2" />,
      href: `/organization/${organization.id}`
    },
    {
      label: "Activity",
      icon: <Activity className=" size-4 mr-2" />,
      href: `/organization/${organization.id}/activity`
    },
    {
      label: "Settings",
      icon: <Settings className=" size-4 mr-2" />,
      href: `/organization/${organization.id}/settings`
    },
    {
      label: "Billing",
      icon: <CreditCard className=" size-4 mr-2" />,
      href: `/organization/${organization.id}/billing`
    }
  ]

  const onCLick = (href: string) => {
    router.push(href)
  }

  return (
    <>
      {/* we are not using <Accordion>....</Accordion> as it is already used as it's type is "multiple" */}
      <AccordionItem
        value={organization.id}
        className=" border-none">
        <AccordionTrigger
          onClick={() => onExpand(organization.id)}
          className={cn(
            "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline ",
            isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
          )}
        >
          <div className="flex items-center gap-x-2">
            <div className=" size-7 relative">
              <Image
                fill
                src={organization.imageUrl}
                alt="organization image"
                className=" rounded-sm object-cover"
              />
            </div>
            <span className=" font-medium text-sm pl-4">{organization.name}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className=" pt-1 text-neutral-700">
          {
            routes.map((route) => (
              <Button
                key={route.href}
                size={"sm"}
                onClick={() => onCLick(route.href)}
                className={cn(
                  "w-full font-normal justify-start pl-10 mb-1 gap-x-2",
                  pathname === route.href && " bg-sky-500/10 text-sky-700"
                )}
                variant={"ghost"}
              >
                {route.icon}
                {route.label}
              </Button>
            ))
          }
        </AccordionContent>
      </AccordionItem>
    </>
  )
}

export { SidebarItem };


/*
"organization": {
    "pathRoot": "/organizations",
    "publicMetadata": {},
    "membersCount": 1,
    "pendingInvitationsCount": 0,
    "id": "org_2f8gMuiCkzvdqEkbmUi7UvJmErX",
    "name": "example",
    "slug": "example",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZjdOTWxYS2EzeFlvRmhMaGRWNzlTdTV3Z0wiLCJyaWQiOiJvcmdfMmY4Z011aUNrenZkcUVrYm1VaTdVdkptRXJYIiwiaW5pdGlhbHMiOiJFIn0",
    "hasImage": false,
    "maxAllowedMemberships": 5,
    "adminDeleteEnabled": true,
    "createdAt": "2024-04-15T13:34:34.774Z",
    "updatedAt": "2024-04-15T13:34:34.774Z"
  },
*/


SidebarItem.Skeleton = function SkeletonSidebarItem() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute" />
      </div>
      <Skeleton className="w-full h-10" />
    </div>
  )
}