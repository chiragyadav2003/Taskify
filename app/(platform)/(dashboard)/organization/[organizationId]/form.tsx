"use client"

import { create } from "@/actions/create-board"
import { useFormState } from "react-dom"
import { FormInput } from "./form-input"
import { AddFormButton } from "./add-form-btn"

export function Form() {

    //initial state of our form
    const initialState = { errors: {}, message: "", alert: "" }

    //useFormState allows you to update state based on the result of a form action
    const [state, dispatch] = useFormState(create, initialState)

    return (
        <form action={dispatch} className="flex gap-x-1">
            <FormInput errors={state?.errors} />
            <AddFormButton />
        </form>
    )
}