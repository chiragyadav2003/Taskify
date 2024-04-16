"use server"

import prisma from "@/db/db"
import { revalidatePath } from "next/cache"

export async function deleteBoard(id: string) {
    await prisma.board.delete({
        where: {
            id
        }
    })
    revalidatePath("/organization/org_2f8gMuiCkzvdqEkbmUi7UvJmErX")
    console.log("board deleted")
}