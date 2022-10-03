import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    alertText: '',
    color: '',
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, { payload }) => {
            const { text, color } = payload
            state.show = true
            state.alertText = text
            state.color = color
        },
        hideAlert: (state) => {
            state.show = false
            state.color = ''
        },
    },
})

export const { showAlert,hideAlert } = alertSlice.actions
export default alertSlice.reducer
