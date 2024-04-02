import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/TaskSlice"

const store = configureStore({
    reducer: {
        task: taskReducer
    }
})

export default store