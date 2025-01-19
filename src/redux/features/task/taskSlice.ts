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
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach(task => task.id === action.payload ?
                task.isCompleted = !task.isCompleted :
                task);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        editTask: (state, action) => {
            state.tasks.forEach(task => task.id === action.payload.id && state.tasks.push(task));
            console.log(state)
            // state.tasks.push(editTask)
        },
        updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
            state.filter = action.payload
        }
    },
});

export const selectTasks = (state: RootState) => {
    if (state.todo.filter === 'low') {        
        return state.todo.tasks.filter(task => task.priority === 'low')
    } else if (state.todo.filter === 'medium') {
        return state.todo.tasks.filter(task => task.priority === 'medium')
    } else if (state.todo.filter === 'high') {
        return state.todo.tasks.filter(task => task.priority === 'high')
    } else {
        return state.todo.tasks;
    }
}

export const selectFilter = ((state: RootState) => {
    return state.todo.filter;
});

export const { addTask, toggleCompleteState, deleteTask, editTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;