//-----------it is a server component------------

import prisma from "@/db/db";
import { Board } from "./board";
import { Form } from "./form";


const OranizationIdPage = async () => {
    const boards = await prisma.board.findMany()
    return (
        <div className="flex flex-col space-y-4">
            <Form />
            <div>
                {
                    boards.map((board) => (
                        <Board key={board.id} title={board.title} id={board.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default OranizationIdPage;