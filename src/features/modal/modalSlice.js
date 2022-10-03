import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    todoDetail: false,
    text: '',
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeModalState: (state) => {
            state.open = !state.open
        },
        openForDetail: (state,{payload}) => {
            state.open = true
            state.text = payload
            state.todoDetail = true
        },
        closeForDetail: (state) => {
            state.todoDetail = false
        },
    },
})

export const { changeModalState, openForDetail, closeForDetail } = modalSlice.actions
export default modalSlice.reducer
