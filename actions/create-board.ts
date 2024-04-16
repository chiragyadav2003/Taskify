"use server"

import { z } from "zod"

import prisma from "@/db/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        title?: string[]
    };
    message?: null | string;
}

const createBoardSchema = z.object({
    title: z.string().min(3, {
        message: "Minimum length of 3 letters is required !"
    })
})

export async function create(prevState: State, formData: FormData) {

    const validatedFields = createBoardSchema.safeParse({ title: formData.get("title") })

    if (!validatedFields.success) {
        //NOTE - this syntax shows partivcular field error
        // { title: [ 'Minimum length of 3 letters is required !' ] }

        // console.log(validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing fields"
        }
    }

    const { title } = validatedFields.data
    try {
        await prisma.board.create({
            data: {
                title: title
            }
        })
    } catch (error) {
        return {
            message: "Database Error"
        }
    }
    revalidatePath("/organization/org_2f8gMuiCkzvdqEkbmUi7UvJmErX");
    redirect("/organization/org_2f8gMuiCkzvdqEkbmUi7UvJmErX")

}