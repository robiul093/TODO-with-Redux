import { RootState } from "@/redux/store";
import { ITask } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'low' | 'medium' | 'high'
}

const initialState: InitialState = {
    tasks: [
        {
            id: 'jsdfdfhjh',
            title: 'Task title',
            description: 'This is task description',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'high',
        },
        {
            id: 'jsdfdfhjhdsf',
            title: 'Task title',
            description: 'This is task description',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'low',
        },
        {
            id: 'jsdfdfhjhdasf',
            title: 'Task title',
            description: 'This is task description',
            dueDate: '2025-11',
            isCompleted: false,
            priority: 'medium',
        },
    ],
    filter: 'all'
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const id = uuidv4();
            const isCompleted = false;
            const taskData = { ...action.payload, id, isCompleted }
            state.tasks.push(taskData);
        }
    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = ((state: RootState) => {
    return state.todo.filter;
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;