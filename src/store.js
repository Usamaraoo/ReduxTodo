import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import modalReducer from './features/modal/modalSlice'
import alertReducer from './features/alert/alertSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        modal: modalReducer,
        alert: alertReducer,
    },
})
