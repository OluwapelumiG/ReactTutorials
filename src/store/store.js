import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import blogReducer from './blogSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        blog: blogReducer
    },
}) 