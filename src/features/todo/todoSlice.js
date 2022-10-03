import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoItems: JSON.parse(window.localStorage.getItem('todos')) || [],
    update: false, // update status to change form action
    currentItem: '', // if user update any text
    // setting the count to 0 if there is no local storage
    total: JSON.parse(window.localStorage.getItem('todos'))
        ? JSON.parse(window.localStorage.getItem('todos')).length
        : 0,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        clearTodo: (state) => {
            state.todoItems = []
            state.total = 0
            window.localStorage.removeItem('todos')

        },
        addTodo: (state, { payload }) => {
            const text = payload
            state.todoItems.push({ text })
            state.total = state.total + 1
            // updating list in local storage

            window.localStorage.setItem('todos', JSON.stringify(state.todoItems))
        },
        // Updating the coming item and change where current item match update with new
        updateTodo: (state, { payload }) => {
            const text = payload
            state.todoItems.forEach((item) => {
                if (item.text === state.currentItem) {
                    item.text = text
                }
            })
            state.currentItem = ''
            state.update = false
            // updating in local storage
            window.localStorage.setItem('todos', JSON.stringify(state.todoItems))
        },
        // changing the form to add to update setting the currentitem
        editTodo: (state, { payload }) => {
            state.update = true
            // if true that mean user updating an item so set that item to update text
            if (state.update) {
                state.currentItem = payload
            } else {
                state.currentItem = ''
            }
        },
        // setCurrentItem: (state, { payload }) => {
        //     state.currentItem = payload
        // },
        removeSingleTodo: (state, action) => {
            const text = action.payload
            state.todoItems = state.todoItems.filter((item) => item.text !== text)
            state.total = state.total - 1
            window.localStorage.setItem('todos', JSON.stringify(state.todoItems))
        },
    },
})


export const {
    clearTodo,
    addTodo,
    updateTodo,
    editTodo,
    // setCurrentItem,
    removeSingleTodo,
} = todoSlice.actions
export default todoSlice.reducer
