"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

export const AddFormButton = () => {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            variant={"primary"}
            disabled={pending}
        >
            Submit
        </Button>
    )
}