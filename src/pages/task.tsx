import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import TaskCard from "@/module/tasks/TaskCard";
import { selectFilter, selectTasks, updateFilter } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hook"
import { useDispatch } from "react-redux";

export default function Tasks() {

    const dispatch = useDispatch();
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);

    return (
        <div>
            <div className="flex justify-end gap-5 items-center my-5">
                <h1 className="mr-auto">Tasks</h1>
                <Tabs defaultValue="all" className="w-[400px] justify-end">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger onClick={() => dispatch(updateFilter('all'))} value="all">ALL</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('medium'))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('high'))} value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            <div>
                {
                    tasks.map(task => <TaskCard key={task.id} task={task} />)
                }
            </div>
        </div>
    )
}