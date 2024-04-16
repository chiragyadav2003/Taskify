"use server"

import { z } from "zod"

import prisma from "@/db/db";
import { revalidatePath } from "next/cache";

const createBoardSchema = z.object({
    title: z.string()
})

export async function create(formData: FormData) {

    const res = createBoardSchema.parse({ title: formData.get("title") })
    await prisma.board.create({
        data: {
            title: res.title
        }
    })
    revalidatePath("/organization/org_2f8gMuiCkzvdqEkbmUi7UvJmErX")
}