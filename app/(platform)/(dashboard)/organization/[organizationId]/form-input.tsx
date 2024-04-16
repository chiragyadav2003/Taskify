"use client"

import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"

interface formInputProps {
    errors?: {
        title?: string[]
    }
}

export function FormInput({ errors }: formInputProps) {
    const { pending } = useFormStatus()
    return (
        <div className=" flex flex-col space-y-2 mr-2">
            <Input
                placeholder="enter a board title"
                id="title"
                required
                disabled={pending}
                name="title"
                className=" w-[300px]"
            />
            {/* checking error for title i/p field  - if present then display */}

            {
                errors?.title ? (<div>
                    {errors.title.map((error: string) => (
                        <p key={error} className=" text-rose-500">{error}</p>
                    ))}
                </div>) : null
            }

        </div>
    )
}