"use client"

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts"
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { Organization, SidebarItem } from "./sidebar-item";

//storageKey will be used inside our accordion, since accordion collapses after a re-render so if we change a specific organization, all the sidebar items are going to get collapsed
// along with storageKey we will also use localStorage(from usehook) to keep track of what is opened or what is closed
interface SidebarProps {
    storageKey?: string;
}



export const Sidebar = ({
    storageKey = "t-desktopSidebar-state",
}: SidebarProps) => {

    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {})
    //active id object - {"my-organizationId-123":true,"my-organizationId-121":false }


    //useOrganization gives us access to current active organization
    const {
        organization: activeOrganization,
        isLoaded: isLoadedOrg
    } = useOrganization()

    // provide list of all org's
    const {
        userMemberships,
        isLoaded: isLoadedOrgList
    } = useOrganizationList({ userMemberships: { infinite: true } })
    //👆 Aggregate pages in order to render an infinite list

    //turning from object to array - active id's as ["my-organizationId-123"]
    //{"my-organizationId-123":true} => ["my-organizationId-123"]
    const defaultAccordionValue: string[] = Object.keys(expanded)
        .reduce((acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key);
            }
            return acc;
        }, [])

    // this is a function which will take org id as input, on using this function - it is expanded then it will be closed and if closed then open
    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id]
        }))
    }



    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-10 w-[50%]" />
                    <Skeleton className="size-10 rounded-md" />
                </div>
                <div className=" space-y-2">
                    <SidebarItem.Skeleton />
                    <SidebarItem.Skeleton />
                    <SidebarItem.Skeleton />
                </div>
            </>
        )
    }


    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1 ">
                <span className="pl-4">
                    Workspaces
                </span>
                <Button
                    asChild
                    variant={"ghost"}
                    size={"icon"}
                    className=" ml-auto"
                >
                    <Link href={"/select-org"}>
                        <Plus className=" size-4" />
                    </Link>
                </Button>
            </div>
            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className=" space-y-2"
            >
                {
                    userMemberships.data.map(({ organization }) => (
                        <SidebarItem
                            key={organization.id}
                            isActive={activeOrganization?.id === organization.id}
                            isExpanded={expanded[organization.id]}
                            organization={organization as Organization}
                            onExpand={onExpand}
                        />
                        // <p key={organization.id}>{JSON.stringify(organization)}</p>
                    ))
                }
            </Accordion>
        </>
    )
}

//this is whole data of userMembership  - 
/*
{
  "pathRoot": "",
  "publicMetadata": {},
  "permissions": [
    "org:sys_profile:manage",
    "org:sys_profile:delete",
    "org:sys_memberships:read",
    "org:sys_memberships:manage",
    "org:sys_domains:read",
    "org:sys_domains:manage"
  ],
  "id": "orgmem_2f8gN0qTL0QbPsLofxmdqs7qgyY",

  //**this is required data for organization 
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
  "publicUserData": {
    "firstName": "Chirag",
    "lastName": "Yadav",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yZjdObDZGdWl5bWFGdnNVU0ZFMHJ6ZUZ2U24ifQ",
    "hasImage": true,
    "identifier": "codechirag123@gmail.com",
    "userId": "user_2f7Nl45KcjgiyAia7eE7Acxg2J3"
  },
  "role": "org:admin",
  "createdAt": "2024-04-15T13:34:34.841Z",
  "updatedAt": "2024-04-15T13:34:34.841Z"
}
*/