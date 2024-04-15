"use client"

//NOTE - it is used to check whenever this is mounted, useEffect will run and matches the current orgId with param.orgId and if they are different then it will load the right org as main which is referenceed by url

//NOTE - setActive: This is likely a function provided by the useOrganizationList hook. It's used to update the active organization within the context managed by the useOrganizationList hook. By calling this function, you're instructing the hook to update the active organization.

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useOrganizationList } from "@clerk/nextjs"

export const OrgControl = () => {
    const params = useParams()
    const { setActive } = useOrganizationList()

    // effect runs once when the component is mounted and sets the active organization to the value of params.organizationId.
    useEffect(() => {
        if (!setActive) {
            return;
        }

        // we are setting active org. using "setActive" and set orgenization which is provided into params of url
        setActive({
            organization: params.organizationId as string
        })


    }, [setActive, params.organizationId])

    return null;
}