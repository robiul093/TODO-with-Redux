import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hook"

export default function Tasks() {

    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(tasks, filter)

    return (
        <div>
            <div className="flex justify-between items-center my-5">
                <h1>Tasks</h1>
                <AddTaskModal />
            </div>
            <div>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task}/>)
                }
            </div>
        </div>
    )
}