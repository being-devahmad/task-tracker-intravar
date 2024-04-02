import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addToTasks(state, action) {
            state.push(action.payload)
        },
        removeFromTasks(state, action) {
            return state.filter((item) => item.id !== action.payload)
        },
        removeAllTasks(state, action) {
            return []
        },
        markTaskAsCompleted(state, action) {
            const taskId = action.payload;
            const taskToUpdate = state.find(task => task.id === taskId);
            if (taskToUpdate) {
                taskToUpdate.completed = true;
            }
        }
    }
})

export const { addToTasks, removeFromTasks, removeAllTasks, markTaskAsCompleted } = taskSlice.actions
export default taskSlice.reducer