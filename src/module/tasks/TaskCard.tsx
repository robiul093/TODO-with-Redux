import { cn } from "@/lib/utils";
import { deleteTask, editTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/type";
import { CheckSquare, Square, Trash2 } from "lucide-react";
import { EditTaskModal } from "./EditTaskModal";

interface IProps {
    task: ITask;
}


export default function TaskCard({ task }: IProps) {
    const dispatch = useAppDispatch();
    return (
        <div className="border px-5 py-3 rounded-md my-3">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task?.priority === "low",
                        "bg-yellow-500": task?.priority === "medium",
                        "bg-red-500": task?.priority === "high"
                    })}></div>
                    <h1 className={cn(task.isCompleted && 'line-through')}>{task?.title}</h1>
                </div>

                <div className="flex gap-3 items-center">
                    <button onClick={() => dispatch(editTask(task?.id))}>
                        {/* <Edit /> */}
                        <EditTaskModal task={task}></EditTaskModal>
                    </button>
                    <button onClick={() => dispatch(deleteTask(task?.id))} className="text-red-500 text-3xl">
                        <Trash2 />
                    </button>
                    <button onClick={() => dispatch(toggleCompleteState(task?.id))} className="text-red-600 font-bold ">
                        {task.isCompleted ? <CheckSquare /> : <Square />}
                    </button>
                </div>
            </div>
            <p className="mt-5">{task?.description}</p>
        </div>
    )
};