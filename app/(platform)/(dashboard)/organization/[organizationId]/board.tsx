
import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/actions/delete-board";

interface BoardProps {
    id: string;
    title: string
}

export const Board = ({ id, title }: BoardProps) => {

    //NOTE - passing id to server action
    const deleteBoardWithId = deleteBoard.bind(null, id)
    return (
        <form action={deleteBoardWithId} className="flex items-center gap-x-2 border-2 m-1 px-2 py-1 justify-between rounded-md w-[400px]">
            <p>Board title : {title}</p>
            <Button
                variant={"destructive"}
                size={"sm"}
            >
                Delete
            </Button>
        </form>
    )

}