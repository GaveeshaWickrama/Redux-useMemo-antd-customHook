import { createSlice } from "@reduxjs/toolkit";

// const initialState = [] //an empty array, because no tasks at the beginning

const taskSlice = createSlice ({
    name: 'task',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push( {
                id: Date.now(),
                description: action.payload,
                completed: false
            })
        },
        changeStatus: (state, action) => {
            const task = state.find((task) => task.id === action.payload)
            if (task) {
                task.completed = true
            }
        },
        deleteTask: (state, action) => {
            return state.filter( (task) =>  task.id != action.payload )
        }
    }
})

export default taskSlice.reducer
export const { addTask, changeStatus, deleteTask } = taskSlice.actions